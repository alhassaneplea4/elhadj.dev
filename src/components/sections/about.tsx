"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Languages, Heart } from "lucide-react";
import { personal, educations, languages, interests } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="À Propos" title="Mon Histoire" description={personal.tagline} />

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Qui suis-je ?</h3>
              </div>
              <p className="text-muted leading-relaxed">{personal.longBio}</p>
              <p className="mt-4 text-muted leading-relaxed">
                Au-delà du développement web, je possède des compétences en{" "}
                <span className="text-foreground font-medium">maintenance informatique</span>, configuration
                de systèmes et <span className="text-foreground font-medium">infographie</span>. Cette polyvalence
                me permet d&apos;offrir des solutions complètes adaptées à chaque projet.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 hover:border-accent/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Heart size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">Centres d&apos;intérêt</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-surface-2/40 px-4 py-1.5 text-sm text-muted hover:border-accent/50 hover:text-accent transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Formation</h3>
              </div>
              <ul className="space-y-5">
                {educations.map((edu, i) => (
                  <motion.li
                    key={edu.degree}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30"
                  >
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary mt-0.5">{edu.school}</p>
                    <p className="text-xs text-muted mt-1">
                      {edu.level} • {edu.period}
                    </p>
                    <p className="text-sm text-muted mt-2">{edu.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-3xl p-8 hover:border-accent/40 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Languages size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">Langues parlées</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-xs text-muted">{lang.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
