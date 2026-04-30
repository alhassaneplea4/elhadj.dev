"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Typewriter({
  words,
  speed = 80,
  pause = 1800,
  className,
}: {
  words: string[];
  speed?: number;
  pause?: number;
  className?: string;
}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < word.length) {
            setText(word.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (text.length > 0) {
            setText(word.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setI((p) => p + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, i, deleting, words, speed, pause]);

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] align-middle bg-primary ml-1"
      />
    </span>
  );
}
