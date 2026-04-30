"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-10 w-10" />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Changer le thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface/40 backdrop-blur transition-all hover:border-primary/60 hover:scale-110"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {isDark ? (
            <Moon size={18} className="text-primary-glow" />
          ) : (
            <Sun size={18} className="text-accent" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
