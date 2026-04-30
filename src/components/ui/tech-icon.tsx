"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiBootstrap, SiAngular,
  SiPhp, SiPython, SiDjango, SiMysql, SiMongodb, SiIonic,
  SiGit, SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { Image as ImageIcon, PenTool } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComp = ComponentType<{ size?: number; className?: string } & SVGProps<SVGSVGElement>>;

const ICONS: Record<string, IconComp> = {
  html5:       SiHtml5 as unknown as IconComp,
  css3:        SiCss as unknown as IconComp,
  javascript:  SiJavascript as unknown as IconComp,
  typescript:  SiTypescript as unknown as IconComp,
  bootstrap:   SiBootstrap as unknown as IconComp,
  angular:     SiAngular as unknown as IconComp,
  php:         SiPhp as unknown as IconComp,
  python:      SiPython as unknown as IconComp,
  django:      SiDjango as unknown as IconComp,
  mysql:       SiMysql as unknown as IconComp,
  mongodb:     SiMongodb as unknown as IconComp,
  ionic:       SiIonic as unknown as IconComp,
  java:        FaJava as unknown as IconComp,
  photoshop:   ImageIcon as IconComp,
  illustrator: PenTool as IconComp,
  git:         SiGit as unknown as IconComp,
  github:      SiGithub as unknown as IconComp,
  vscode:      VscVscode as unknown as IconComp,
};

export function TechIcon({
  icon,
  color,
  size = 36,
  className,
}: {
  icon: string;
  color: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[icon];
  if (!Icon) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.25, rotate: [0, -8, 8, 0] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      style={{ color }}
    >
      <Icon size={size} aria-hidden />
    </motion.div>
  );
}
