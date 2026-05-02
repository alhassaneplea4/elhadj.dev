import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { personal } from "@/lib/data";

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
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  if (!resend) {
    return Response.json(
      { message: "Le service d'envoi n'est pas encore configuré." },
      { status: 503 }
    );
  }

  const { name, email, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL || personal.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message portfolio - ${name}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ message: "Message envoyé." });
  } catch {
    return Response.json(
      { message: "Impossible d'envoyer le message pour le moment." },
      { status: 502 }
    );
  }
}
