import { Check, Code2, Palette, Settings, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
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
          description="Des solutions numériques sur mesure adaptées à vos besoins."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.title}
                delay={i * 0.1}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 blur-xl transition group-hover:opacity-100" aria-hidden />
                <div className="glass relative h-full rounded-3xl p-6 transition-all hover:border-primary/40">
                  <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {Icon && <Icon size={26} strokeWidth={2} />}
                  </div>

                  <h3 className="mb-2 font-display text-xl font-bold">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={14} className="flex-shrink-0 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
