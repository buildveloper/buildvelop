"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      if (hash === "#top") {
        event.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }
      let element: HTMLElement | null = null;
      try {
        element = document.querySelector<HTMLElement>(hash);
      } catch {
        return;
      }
      if (!element) return;
      event.preventDefault();
      lenis.scrollTo(element, { offset: -96, duration: 1.2 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduce]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
