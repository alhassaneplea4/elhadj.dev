"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  as?: "div" | "li";
  onceMargin?: string;
};

export function Reveal({ children, className, delay = 0, x = 0, y = 30, as = "div", onceMargin = "-50px" }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: onceMargin }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
