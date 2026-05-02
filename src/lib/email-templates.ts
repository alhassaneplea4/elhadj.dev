export function notificationEmail(name: string, email: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message — Elhadj.dev</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0d1529;border-radius:16px;overflow:hidden;border:1px solid rgba(139,92,246,0.2);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#ec4899);padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:24px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
                    Elhadj<span style="opacity:0.75;">.dev</span>
                  </p>
                  <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">Nouveau message reçu depuis le portfolio</p>
                </td>
                <td align="right">
                  <div style="background:rgba(255,255,255,0.15);border-radius:10px;padding:10px 16px;display:inline-block;">
                    <p style="margin:0;font-size:11px;color:#fff;font-weight:600;">📬 CONTACT</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">

            <p style="margin:0 0 28px;font-size:15px;color:#a1adc4;line-height:1.6;">
              Tu as reçu un nouveau message via ton formulaire de contact.
            </p>

            <!-- Sender info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:12px;border:1px solid rgba(139,92,246,0.15);margin-bottom:24px;">
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:1px;">Expéditeur</p>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:4px 0;">
                        <span style="font-size:13px;color:#64748b;display:inline-block;width:70px;">Nom</span>
                        <span style="font-size:14px;color:#e2e8f0;font-weight:600;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0;">
                        <span style="font-size:13px;color:#64748b;display:inline-block;width:70px;">Email</span>
                        <a href="mailto:${email}" style="font-size:14px;color:#a78bfa;text-decoration:none;font-weight:600;">${email}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:12px;border:1px solid rgba(139,92,246,0.15);">
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.75;white-space:pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: Votre message — Elhadj.dev"
                     style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;font-size:14px;font-weight:600;padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.3px;">
                    Répondre à ${name}
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid rgba(139,92,246,0.1);">
            <p style="margin:0;font-size:12px;color:#475569;text-align:center;">
              Ce message a été envoyé depuis <strong style="color:#7c3aed;">elhadj.dev</strong> · Conakry, Guinée
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

export function autoReplyEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message bien reçu — Elhadj.dev</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0d1529;border-radius:16px;overflow:hidden;border:1px solid rgba(139,92,246,0.2);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#ec4899);padding:40px;">
            <p style="margin:0;font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
              Elhadj<span style="opacity:0.75;">.dev</span>
            </p>
            <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">Développeur Web &amp; Mobile · Conakry, Guinée</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:44px 40px;">

            <p style="margin:0 0 20px;font-size:22px;font-weight:700;color:#e2e8f0;">
              Bonjour ${name} 👋
            </p>

            <p style="margin:0 0 16px;font-size:15px;color:#94a3b8;line-height:1.75;">
              Merci pour votre message ! Je l'ai bien reçu et j'y apporterai une réponse dans les
              <strong style="color:#a78bfa;">24 à 48 heures</strong>.
            </p>

            <p style="margin:0 0 32px;font-size:15px;color:#94a3b8;line-height:1.75;">
              En attendant, n'hésitez pas à consulter mon portfolio ou à me retrouver sur mes réseaux.
            </p>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="border-top:1px solid rgba(139,92,246,0.15);"></td>
              </tr>
            </table>

            <!-- Services -->
            <p style="margin:0 0 20px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:1px;">Ce que je fais</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding:0 8px 12px 0;vertical-align:top;">
                  <div style="background:#111827;border-radius:10px;padding:16px;border:1px solid rgba(139,92,246,0.1);">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#e2e8f0;">🌐 Développement Web</p>
                    <p style="margin:0;font-size:12px;color:#64748b;">Django · PHP · React · Next.js</p>
                  </div>
                </td>
                <td width="50%" style="padding:0 0 12px 8px;vertical-align:top;">
                  <div style="background:#111827;border-radius:10px;padding:16px;border:1px solid rgba(139,92,246,0.1);">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#e2e8f0;">📱 Développement Mobile</p>
                    <p style="margin:0;font-size:12px;color:#64748b;">Android · Ionic · TypeScript</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                  <div style="background:#111827;border-radius:10px;padding:16px;border:1px solid rgba(139,92,246,0.1);">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#e2e8f0;">🎨 Design &amp; Infographie</p>
                    <p style="margin:0;font-size:12px;color:#64748b;">Figma · Photoshop · UI/UX</p>
                  </div>
                </td>
                <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                  <div style="background:#111827;border-radius:10px;padding:16px;border:1px solid rgba(139,92,246,0.1);">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#e2e8f0;">🔧 Maintenance IT</p>
                    <p style="margin:0;font-size:12px;color:#64748b;">Support · Config · Optimisation</p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Signature -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px;padding-top:28px;border-top:1px solid rgba(139,92,246,0.15);">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#e2e8f0;">Elhadj Alhassana CAMARA</p>
                  <p style="margin:0 0 2px;font-size:13px;color:#7c3aed;">Développeur Web &amp; Mobile</p>
                  <p style="margin:0;font-size:12px;color:#475569;">astronetgn@gmail.com · +224 624 62 94 77</p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#080d1a;border-top:1px solid rgba(139,92,246,0.1);">
            <p style="margin:0;font-size:11px;color:#334155;text-align:center;">
              Vous recevez cet email car vous avez utilisé le formulaire de contact sur
              <a href="https://elhadj.dev" style="color:#7c3aed;text-decoration:none;">elhadj.dev</a>.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}
