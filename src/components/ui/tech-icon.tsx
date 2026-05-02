"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiBootstrap, SiAngular,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiPhp, SiPython, SiDjango, SiMysql, SiMongodb, SiIonic,
  SiFastapi, SiNodedotjs, SiAndroid,
  SiFigma, SiCanva,
  SiGit, SiGithub, SiGithubcopilot, SiClaude, SiOpenai,
  SiAndroidstudio, SiPycharm, SiDocker, SiGoogle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { Image as ImageIcon, PenTool, Zap, Server, LayoutGrid } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComp = ComponentType<{ size?: number; className?: string } & SVGProps<SVGSVGElement>>;

const ICONS: Record<string, IconComp> = {
  html5:       SiHtml5 as unknown as IconComp,
  css3:        SiCss as unknown as IconComp,
  javascript:  SiJavascript as unknown as IconComp,
  typescript:  SiTypescript as unknown as IconComp,
  bootstrap:   SiBootstrap as unknown as IconComp,
  angular:     SiAngular as unknown as IconComp,
  react:       SiReact as unknown as IconComp,
  next:        SiNextdotjs as unknown as IconComp,
  tailwind:    SiTailwindcss as unknown as IconComp,
  php:         SiPhp as unknown as IconComp,
  python:      SiPython as unknown as IconComp,
  django:      SiDjango as unknown as IconComp,
  mysql:       SiMysql as unknown as IconComp,
  mongodb:     SiMongodb as unknown as IconComp,
  fastapi:     SiFastapi as unknown as IconComp,
  nodejs:      SiNodedotjs as unknown as IconComp,
  ionic:       SiIonic as unknown as IconComp,
  java:        FaJava as unknown as IconComp,
  android:     SiAndroid as unknown as IconComp,
  photoshop:   ImageIcon as IconComp,
  illustrator: PenTool as IconComp,
  figma:       SiFigma as unknown as IconComp,
  canva:       SiCanva as unknown as IconComp,
  git:           SiGit as unknown as IconComp,
  github:        SiGithub as unknown as IconComp,
  githubcopilot: SiGithubcopilot as unknown as IconComp,
  claude:        SiClaude as unknown as IconComp,
  chatgpt:       SiOpenai as unknown as IconComp,
  vscode:        VscVscode as unknown as IconComp,
  androidstudio: SiAndroidstudio as unknown as IconComp,
  pycharm:       SiPycharm as unknown as IconComp,
  docker:        SiDocker as unknown as IconComp,
  msoffice:      LayoutGrid as IconComp,
  codex:         SiOpenai as unknown as IconComp,
  antigravity:   Zap as IconComp,
  filezilla:     Server as IconComp,
  googleopal:    SiGoogle as unknown as IconComp,
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
