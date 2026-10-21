"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

const colors = ["#C8F560", "#FF4D9D", "#2DE2E6", "#FF8A3D"];

export function SparkleBurst({
  active,
  count = 24,
  className,
}: {
  active: boolean;
  count?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (!active || reduce) return null;

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-visible", className)}>
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / count) * Math.PI * 2;
        const distance = 44 + (index % 6) * 16;
        return (
          <motion.span
            key={index}
            className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: colors[index % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ duration: 0.9, delay: (index % 7) * 0.02, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
