"use client";

import { Code2, Heart } from "lucide-react";
import { personal, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <a href="#hero" className="flex items-center gap-2 group w-fit">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent p-2 text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Code2 size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg">
                Elhadj<span className="text-gradient">.dev</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted max-w-xs">{personal.tagline}</p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">{personal.email}</a></li>
              <li><a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{personal.phone}</a></li>
              <li>{personal.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-muted">
          <p>© {year} {personal.fullName}. Tous droits réservés.</p>
          <p className="inline-flex items-center gap-1.5">
            Conçu avec <Heart size={14} className="text-accent fill-accent animate-pulse" /> à Conakry
          </p>
        </div>
      </div>
    </footer>
  );
}
