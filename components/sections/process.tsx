"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { processClosing, processSteps } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GradientCard } from "@/components/ui/gradient-card";
import { Icon } from "@/components/ui/icon";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 62%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  return (
    <section id="process" className="section-pad relative">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="05"
                eyebrow="How I work"
                title={
                  <>
                    A simple way of{" "}
                    <span className="text-gradient text-gradient-signature">working</span>.
                  </>
                }
                description="Four clear steps. No jargon, no surprise scope."
              />
              <div className="mt-8 hidden items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted lg:flex">
                <span className="h-px w-10 bg-line" aria-hidden="true" />
                Scroll to follow the line
              </div>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-[19px] top-6 w-px bg-line"
            />
            <motion.div
              aria-hidden="true"
              className="absolute bottom-6 left-[19px] top-6 w-px origin-top"
              style={{
                scaleY: reduce ? 1 : scaleY,
                backgroundImage:
                  "linear-gradient(to bottom, var(--grad-violet), var(--grad-pink), var(--grad-orange))",
              }}
            />

            <div className="flex flex-col gap-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.06}>
                  <div className="relative pl-14 sm:pl-16">
                    <span
                      className="absolute left-0 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-[11px] font-semibold text-fg"
                      style={{ backgroundImage: gradientCss.signature, color: "#0B0710" }}
                    >
                      {step.number}
                    </span>
                    <div className="group rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 hover:border-fg/15 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-bg/50 text-fg">
                            <Icon name={step.icon} className="h-4 w-4" />
                          </span>
                          <h3 className="font-display text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                            {step.title}
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <GradientCard gradient="signature" className="mt-6" glow={false}>
                <div className="relative p-6 sm:p-8">
                  <Quote
                    className="h-8 w-8 text-violet"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <blockquote className="mt-4 max-w-2xl text-balance font-display text-xl font-medium leading-snug tracking-[-0.02em] sm:text-2xl">
                    &ldquo;{processClosing}&rdquo;
                  </blockquote>
                  <a
                    href="#contact"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg"
                  >
                    Start with your problem
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
              </GradientCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
