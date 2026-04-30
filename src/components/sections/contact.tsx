"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { personal, socials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook, FaDiscord } from "react-icons/fa6";
import type { IconType } from "react-icons";

const SOCIAL_ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  facebook: FaFacebook,
  discord: FaDiscord,
  mail: Mail as unknown as IconType,
};

const schema = z.object({
  name: z.string().min(2, "Nom trop court").max(80),
  email: z.string().email("Email invalide").max(120),
  message: z.string().min(10, "Message trop court (min 10 caractères)").max(2000),
  honeypot: z.string().max(0),
});

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      honeypot: String(fd.get("website") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const path = String(issue.path[0] ?? "");
        if (path) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    // Local mode: simulate sending. To enable Resend, wire up /api/contact.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Discutons de votre projet"
          description="Une idée, un projet, une opportunité ? Je suis disponible pour échanger."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-6 space-y-4">
              <ContactRow icon={<Mail size={20} className="text-primary" />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <ContactRow icon={<Phone size={20} className="text-accent" />} label="Téléphone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={<MapPin size={20} className="text-primary-glow" />} label="Localisation" value={personal.location} />
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-display font-bold mb-4">Suivez-moi</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="h-12 w-12 rounded-2xl bg-surface-2/60 flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 hover:border-primary/40 border border-border/60 transition-all"
                      aria-label={social.name}
                    >
                      {Icon && <Icon size={20} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 sm:p-8 space-y-5"
            noValidate
          >
            {/* Honeypot — bots fill this; humans don't see it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] opacity-0 pointer-events-none"
              aria-hidden
            />

            <Field id="name" label="Nom" type="text" placeholder="Votre nom" error={errors.name} required />
            <Field id="email" label="Email" type="email" placeholder="vous@exemple.com" error={errors.email} required />

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Parlez-moi de votre projet…"
                className="w-full rounded-2xl border border-border/60 bg-surface-2/40 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent px-6 py-3.5 font-medium text-white shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" && <Loader2 size={18} className="animate-spin" />}
              {status === "success" && <Check size={18} />}
              {status === "error" && <AlertCircle size={18} />}
              {status === "idle" && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              <span>
                {status === "loading" && "Envoi en cours…"}
                {status === "success" && "Message envoyé !"}
                {status === "error" && "Erreur, réessayez"}
                {status === "idle" && "Envoyer le message"}
              </span>
            </button>

            <p className="text-xs text-muted text-center">
              🔒 Vos informations sont protégées et ne seront jamais partagées.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-center gap-4 group hover:bg-surface-2/40 rounded-xl p-2 -m-2 transition-colors"
    >
      <div className="h-12 w-12 rounded-xl bg-surface-2/60 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted">{label}</div>
        <div className="font-medium truncate">{value}</div>
      </div>
    </Wrapper>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  error,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : "name"}
        className="w-full rounded-2xl border border-border/60 bg-surface-2/40 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}
