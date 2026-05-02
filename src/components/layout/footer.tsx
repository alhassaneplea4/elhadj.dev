import { Code2, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { navLinks, personal, socials } from "@/lib/data";
import type { ComponentType } from "react";

const SOCIAL_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  github:   FaGithub,
  linkedin: FaLinkedinIn,
  x:        FaXTwitter,
  facebook: FaFacebook,
  mail:     Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-border/60">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#hero" className="group flex w-fit items-center gap-2">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent p-2 text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                <Code2 size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold">
                Elhadj<span className="text-gradient">.dev</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted text-justify">{personal.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${personal.email}`} className="transition-colors hover:text-primary">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                  {personal.phone}
                </a>
              </li>
              <li>{personal.location}</li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-surface/40 text-muted transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-sm text-muted sm:flex-row">
          <p>© {year} <span className="font-display text-lg font-bold">
                Elhadj<span className="text-gradient">.dev</span>
              </span>. Tous droits réservés.</p>
          <p className="inline-flex items-center gap-1.5">
            Conçu par <span className="font-display text-lg font-bold text-gradient"><a href="https://github.com/alhassaneplea4" target="_blank" rel="noopener noreferrer">Elhadj Alhassana Camara</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
