"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { personal, stats } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Typewriter } from "@/components/ui/typewriter";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" aria-hidden />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-7s]" aria-hidden />
      <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-primary-glow/25 blur-3xl animate-blob [animation-delay:-14s]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-medium text-success mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Disponible pour de nouveaux projets
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95]"
            >
              <span className="block text-foreground">Salut, je suis</span>
              <span className="block mt-2 text-gradient animate-gradient">
                {personal.firstName}
              </span>
              <span className="block text-foreground/90">{personal.lastName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-xl sm:text-2xl text-muted font-medium h-8"
            >
              <span className="text-foreground/80">Je suis </span>
              <Typewriter
                words={[
                  "Développeur Web",
                  "Développeur Mobile",
                  "Spécialiste Django",
                  "Designer UI/UX",
                  "Full-Stack Developer",
                ]}
                className="text-primary font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed"
            >
              Passionné par la création d&apos;applications web modernes, performantes et accessibles.
              Spécialisé en <span className="text-foreground font-medium">Django</span>,{" "}
              <span className="text-foreground font-medium">PHP</span>,{" "}
              <span className="text-foreground font-medium">JavaScript</span> et{" "}
              <span className="text-foreground font-medium">Python</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" /> {personal.location}
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={14} className="text-accent" /> Open to remote
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                <Sparkles size={18} /> Voir mes projets
              </MagneticButton>
              <MagneticButton href={personal.cvUrl} variant="secondary" download="CV_Elhadj_Camara.pdf">
                <Download size={18} /> Télécharger CV
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                <Mail size={18} /> Me contacter
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-4 text-center hover:scale-105 hover:border-primary/40 transition-all"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    <AnimatedCounter value={s.value} />
                    {s.suffix}
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-primary-glow to-accent blur-2xl opacity-50 animate-pulse-glow" aria-hidden />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-bl from-accent via-primary-glow to-primary opacity-30 animate-spin-slow" aria-hidden />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl"
              >
                <Avatar />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(-50%,-50%) rotate(${deg}deg) translateY(-200px)` }}
                  >
                    <div className={`h-full w-full rounded-full ${i % 2 ? "bg-accent" : "bg-primary"} shadow-lg shadow-primary/50`} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.6, y: { duration: 2, repeat: Infinity } }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted hover:text-primary transition-colors"
        >
          <span className="uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}

function Avatar() {
  // Place your photo at /public/avatar.jpg to replace the gradient initials.
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center">
      <span className="font-display text-8xl font-bold text-white drop-shadow-2xl select-none">
        EC
      </span>
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
    </div>
  );
}
