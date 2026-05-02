"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const GRADIENTS: Record<string, string> = {
  "gradient-1": "from-blue-500 via-indigo-500 to-purple-500",
  "gradient-2": "from-emerald-500 via-teal-500 to-cyan-500",
  "gradient-3": "from-orange-500 via-rose-500 to-pink-500",
  "gradient-4": "from-violet-500 via-fuchsia-500 to-pink-500",
  "gradient-5": "from-amber-500 via-orange-500 to-red-500",
  "gradient-6": "from-sky-500 via-blue-500 to-indigo-500",
};

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Réalisations"
          title="Mes projets"
          description="Une sélection de projets sur lesquels j'ai travaillé. Chacun répond à un besoin métier concret."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isExternal = project.link.startsWith("http");
  const hasRealLink = project.link !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <a
        href={project.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-disabled={!hasRealLink}
        className="glass relative block h-full overflow-hidden rounded-3xl transition-all hover:border-primary/40"
      >
        <div className={cn("relative aspect-video overflow-hidden bg-gradient-to-br", GRADIENTS[project.image])}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 size={64} className="text-white/40 transition-all duration-500 group-hover:scale-110 group-hover:text-white/70" />
          </div>
          {project.featured && (
            <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Projet phare
            </span>
          )}
          {hasRealLink && (
            <div className="absolute right-3 top-3 flex h-9 w-9 -rotate-45 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all group-hover:rotate-0 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{project.category}</div>
          <h3 className="mb-2 font-display text-xl font-bold transition-colors group-hover:text-primary">{project.title}</h3>
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-surface-2/60 px-2.5 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
