"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Settings, Palette, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  settings: Settings,
  palette: Palette,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Ce que je propose"
          description="Des solutions numériques sur-mesure adaptées à vos besoins."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 blur-xl transition group-hover:opacity-100" aria-hidden />
                <div className="relative glass rounded-3xl p-6 h-full hover:border-primary/40 transition-all">
                  <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {Icon && <Icon size={26} strokeWidth={2} />}
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={14} className="text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
