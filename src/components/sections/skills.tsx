"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills, type SkillCategory } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { TechIcon } from "@/components/ui/tech-icon";
import { cn } from "@/lib/utils";

const CATEGORIES: (SkillCategory | "Tous")[] = ["Tous", "Frontend", "Backend", "Mobile", "Design", "Outils"];

export function Skills() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Tous");

  const filtered = filter === "Tous" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Compétences"
          title="Mes Technologies"
          description="Stack technique maîtrisée pour livrer des solutions modernes et performantes."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === cat
                  ? "text-white"
                  : "text-muted hover:text-foreground border border-border/60 bg-surface/40"
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="skill-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30"
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition group-hover:opacity-60"
                style={{ background: skill.color }}
                aria-hidden
              />
              <div className="relative glass rounded-2xl p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:border-primary/40 transition-all">
                <TechIcon icon={skill.icon} color={skill.color} size={42} />
                <div className="text-center">
                  <div className="text-sm font-semibold">{skill.name}</div>
                  <div className="mt-2 w-full h-1 rounded-full bg-surface-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
