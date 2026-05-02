"use client";

import { motion } from "framer-motion";
import { AlertCircle, Check, Loader2, Lock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { contactSchema } from "@/lib/contact-schema";
import { personal, socials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

const SOCIAL_ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  facebook: FaFacebook,
  mail: Mail as unknown as IconType,
};

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [notice, setNotice] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setNotice("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      honeypot: String(fd.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(data);

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Erreur, réessayez.");
      }

      setStatus("success");
      setNotice("Message envoyé. Je vous répondrai rapidement.");
      form.reset();
      setTimeout(() => {
        setStatus("idle");
        setNotice("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "Impossible d'envoyer le message pour le moment.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Discutons de votre projet"
          description="Une idée, un projet, une opportunité ? Je suis disponible pour échanger."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass space-y-4 rounded-3xl p-6">
              <ContactRow icon={<Mail size={20} className="text-primary" />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <ContactRow icon={<Phone size={20} className="text-accent" />} label="Téléphone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={<MapPin size={20} className="text-primary-glow" />} label="Localisation" value={personal.location} />
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="mb-4 font-display font-bold">Suivez-moi</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-surface-2/60 text-muted transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
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
            className="glass space-y-5 rounded-3xl p-6 sm:p-8"
            noValidate
          >
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
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Parlez-moi de votre projet..."
                className="w-full resize-none rounded-2xl border border-border/60 bg-surface-2/40 px-4 py-3 text-sm transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent px-6 py-3.5 font-medium text-white shadow-lg shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" && <Loader2 size={18} className="animate-spin" />}
              {status === "success" && <Check size={18} />}
              {status === "error" && <AlertCircle size={18} />}
              {status === "idle" && <Send size={18} className="transition-transform group-hover:translate-x-1" />}
              <span>
                {status === "loading" && "Envoi en cours..."}
                {status === "success" && "Message envoyé !"}
                {status === "error" && "Erreur, réessayez"}
                {status === "idle" && "Envoyer le message"}
              </span>
            </button>

            {notice && (
              <p className={`text-center text-sm ${status === "error" ? "text-accent" : "text-success"}`} role="status">
                {notice}
              </p>
            )}

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
              <Lock size={13} /> Vos informations sont protégées et ne seront jamais partagées.
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
      className="group -m-2 flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-surface-2/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2/60 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted">{label}</div>
        <div className="truncate font-medium">{value}</div>
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
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : "name"}
        className="w-full rounded-2xl border border-border/60 bg-surface-2/40 px-4 py-3 text-sm transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}
