"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { personal } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Typewriter } from "@/components/ui/typewriter";

const roles = [
  "Développeur Web & Mobile",
  "Designer UI/UX",
  "Compétences Dev Full-Stack",
];

const heroSlides = [
  { src: "/hero-slides/slide-1.jpg", alt: "Aperçu du premier projet" },
  { src: "/hero-slides/slide-2.jpg", alt: "Aperçu du deuxième projet" },
  { src: "/hero-slides/slide-3.jpg", alt: "Aperçu du troisième projet" },
];

const availabilityColors = [
  "text-success",
  "text-primary",
  "text-accent",
  "text-primary-glow",
  "text-blue-300",
  "text-emerald-300",
  "text-rose-300",
  "text-yellow-200",
  "text-purple-300",
];

export function Hero() {
  const [availabilityColorIndex, setAvailabilityColorIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setAvailabilityColorIndex((index) => (index + 1) % availabilityColors.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlideIndex((index) => (index + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-12 pt-24">
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

      <div className="absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-primary/25 blur-3xl animate-blob sm:h-[420px] sm:w-[420px]" aria-hidden />
      <div className="absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-7s] sm:h-[480px] sm:w-[480px]" aria-hidden />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary-glow/20 blur-3xl animate-blob [animation-delay:-14s] sm:h-[360px] sm:w-[360px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 lg:order-1">
            {personal.available && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-medium text-success"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className={`${availabilityColors[availabilityColorIndex]} transition-colors duration-500`}>
                  Disponible pour de nouveaux projets
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="block text-foreground">Salut, je suis</span>
              <span className="mt-2 block text-gradient animate-gradient">{personal.firstName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 min-h-8 text-xl font-medium text-muted sm:text-2xl"
            >
              <Typewriter words={roles} className="text-primary font-semibold" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Passionné par la création d&apos;applications web modernes, performantes et accessibles.
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
                <Sparkles size={14} className="text-accent" /> Ouvert aux échanges
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary via-primary-glow to-accent opacity-30 blur-2xl animate-pulse-glow" aria-hidden />
              <HeroSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} />
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.6, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-primary md:flex"
          aria-label="Aller à la section à propos"
        >
          {/* <span className="uppercase tracking-widest">Scroll</span> */}
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}

function HeroSlider({
  activeSlideIndex,
  setActiveSlideIndex,
}: {
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
}) {
  return (
    <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/20 shadow-2xl sm:aspect-[5/6] lg:min-h-[520px]">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={heroSlides[activeSlideIndex].src}
          initial={{ opacity: 0, x: 90, scale: 1.04 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -90, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[activeSlideIndex].src}
            alt={heroSlides[activeSlideIndex].alt}
            fill
            priority={activeSlideIndex === 0}
            sizes="(min-width: 1024px) 32rem, (min-width: 640px) 70vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlideIndex(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlideIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
