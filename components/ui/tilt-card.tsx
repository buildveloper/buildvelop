"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePointerFine } from "@/lib/use-pointer-fine";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

export function TiltCard({
  children,
  className,
  style,
  max = 6,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const enabled = usePointerFine();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [max, -max]), {
    stiffness: 170,
    damping: 20,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-max, max]), {
    stiffness: 170,
    damping: 20,
    mass: 0.5,
  });

  if (reduce || !enabled) {
    return (
      <div className={cn("relative", className)} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative [transform-style:preserve-3d]", className)}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        pointerX.set(x);
        pointerY.set(y);
        ref.current.style.setProperty("--mx", `${x * 100}%`);
        ref.current.style.setProperty("--my", `${y * 100}%`);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
        ref.current?.style.setProperty("--mx", "50%");
        ref.current?.style.setProperty("--my", "50%");
      }}
    >
      {children}
      {glare ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.13), transparent 46%)",
          }}
        />
      ) : null}
    </motion.div>
  );
}
