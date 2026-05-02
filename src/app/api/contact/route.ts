import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { personal } from "@/lib/data";
import { notificationEmail, autoReplyEmail } from "@/lib/email-templates";

export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > 5;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json({ message: "Trop de tentatives. Réessayez dans quelques minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      {
        message: "Certains champs sont invalides.",
        issues: Object.fromEntries(
          parsed.error.issues
            .filter((i) => i.path.length > 0)
            .map((i) => [String(i.path[0]), [i.message]])
        ),
      },
      { status: 422 }
    );
  }

  if (!resend) {
    return Response.json({ message: "Le service d'envoi n'est pas encore configuré." }, { status: 503 });
  }

  const { name, email, message } = parsed.data;
  const ownerEmail = process.env.CONTACT_TO_EMAIL || personal.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  // Email principal : notification à Elhadj (critique — échec bloquant)
  try {
    await resend.emails.send({
      from,
      to: ownerEmail,
      replyTo: email,
      subject: `📬 Nouveau message de ${name} — Portfolio`,
      html: notificationEmail(name, email, message),
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (err) {
    console.error("[contact] Échec envoi notification:", err);
    return Response.json({ message: "Impossible d'envoyer le message pour le moment." }, { status: 502 });
  }

  // Email de réponse automatique à l'expéditeur (non-bloquant)
  // Avec onboarding@resend.dev (sandbox), l'envoi vers des emails non vérifiés
  // est silencieusement ignoré — il faut un domaine vérifié pour le livrer.
  resend.emails
    .send({
      from,
      to: email,
      replyTo: ownerEmail,
      subject: "Message bien reçu — Elhadj Alhassana CAMARA",
      html: autoReplyEmail(name),
      text: `Bonjour ${name},\n\nMerci pour votre message ! Je l'ai bien reçu et j'y apporterai une réponse dans les 24 à 48 heures.\n\nCordialement,\nElhadj Alhassana CAMARA\nDéveloppeur Web & Mobile\nastreonetgn@gmail.com`,
    })
    .catch((err) => console.error("[contact] Échec auto-reply (non-bloquant):", err));

  return Response.json({ message: "Message envoyé." });
}
