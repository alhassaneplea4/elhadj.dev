"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: string;
  external?: boolean;
};

export function MagneticButton({ children, href, onClick, variant = "primary", className, download, external }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25 });
  const springY = useSpring(y, { stiffness: 300, damping: 25 });
  const rotateX = useTransform(springY, [-30, 30], [10, -10]);
  const rotateY = useTransform(springX, [-30, 30], [-10, 10]);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    primary:
      "bg-gradient-to-br from-primary via-primary-glow to-accent text-white shadow-lg hover:shadow-2xl hover:shadow-primary/40",
    secondary:
      "border-2 border-primary/40 bg-surface/40 backdrop-blur text-foreground hover:border-primary hover:bg-primary/10",
    ghost:
      "bg-surface/60 backdrop-blur border border-border/60 text-foreground hover:border-accent/60",
  }[variant];

  const content = (
    <motion.span
      style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all overflow-hidden",
    styles,
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={baseClass}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={baseClass}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
