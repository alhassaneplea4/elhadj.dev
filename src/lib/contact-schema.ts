import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80, "Nom trop long"),
  email: z.string().trim().email("Email invalide").max(120, "Email trop long"),
  message: z.string().trim().min(10, "Message trop court (min 10 caractères)").max(2000, "Message trop long"),
  honeypot: z.string().max(0),
});

export type ContactPayload = z.infer<typeof contactSchema>;
