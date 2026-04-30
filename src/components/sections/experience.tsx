"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Parcours"
          title="Mon Expérience"
          description="Mon parcours professionnel et les entreprises qui m'ont fait confiance."
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.role}-${exp.company}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid sm:grid-cols-2 gap-4 ${isLeft ? "" : "sm:[direction:rtl]"}`}
                >
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background shadow-lg shadow-primary/40" />
                      {exp.current && (
                        <div className="absolute inset-0 h-4 w-4 rounded-full bg-success animate-ping" />
                      )}
                    </div>
                  </div>

                  <div className={`pl-12 sm:pl-0 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:[direction:ltr]"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-all">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 border border-success/30 px-3 py-1 text-xs font-medium text-success mb-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                          En cours
                        </span>
                      )}
                      <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>
                      <p className="text-xs text-muted mt-1 inline-flex items-center gap-1">
                        <MapPin size={12} /> {exp.location} • {exp.period}
                      </p>
                      <p className="mt-3 text-sm text-muted leading-relaxed">{exp.description}</p>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "sm:justify-end" : ""}`}>
                        {exp.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-surface-2/60 px-2.5 py-0.5 text-xs text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {"link" in exp && exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline ${isLeft ? "sm:flex-row-reverse" : ""}`}
                        >
                          Voir le projet <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="hidden sm:block" aria-hidden />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
