"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { MouseEvent } from "react";
import { useRef } from "react";
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
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Réalisations"
          title="Mes Projets"
          description="Une sélection de projets sur lesquels j'ai travaillé. Chacun est une nouvelle aventure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
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
        className="relative block glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all h-full"
      >
        <div className={cn("relative aspect-video overflow-hidden bg-gradient-to-br", GRADIENTS[project.image])}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 size={64} className="text-white/40 group-hover:text-white/70 group-hover:scale-110 transition-all duration-500" />
          </div>
          {project.featured && (
            <span className="absolute top-3 left-3 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white border border-white/30">
              ⭐ Featured
            </span>
          )}
          <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 transition-all">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="p-6">
          <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
            {project.category}
          </div>
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
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
