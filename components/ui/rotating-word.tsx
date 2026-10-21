"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

export function RotatingWord({ words, className }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const longest = words.reduce(
    (current, word) => (word.length > current.length ? word : current),
    words[0],
  );

  useEffect(() => {
    if (reduce) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, [reduce, words.length]);

  return (
    <span className={cn("relative block w-full", className)}>
      <span aria-hidden="true" className="invisible block select-none">
        {longest}.
      </span>
      <span className="absolute inset-0 block overflow-hidden pb-[0.14em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            className="block"
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-70%", opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gradient text-gradient-signature">{words[index]}</span>
            <span>.</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
