"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { usePointerFine } from "@/lib/use-pointer-fine";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const enabled = usePointerFine();
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 210, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 210, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!enabled || reduce) return;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      setLabel(labelled?.dataset.cursorLabel ?? null);
    };

    const onOut = (event: PointerEvent) => {
      const related = event.relatedTarget as HTMLElement | null;
      if (!related?.closest("[data-cursor-label]")) setLabel(null);
    };

    const onLeave = () => {
      setVisible(false);
      setLabel(null);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[110] hidden lg:block">
      <motion.div
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg"
        style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/30 bg-bg/70 backdrop-blur-md"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{
          width: label ? 68 : 30,
          height: label ? 68 : 30,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <motion.span
          className="flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.16em] text-fg"
          animate={{ opacity: label ? 1 : 0 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </div>
  );
}
