"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { hero } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { EASE, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { RotatingWord } from "@/components/ui/rotating-word";

function Orbs({ reduce }: { reduce: boolean | null }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-8 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_68%)] blur-3xl" />
      <motion.div
        className="absolute -right-24 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,77,157,0.24),transparent_68%)] blur-3xl"
        animate={reduce ? undefined : { x: [0, -24, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(45,226,230,0.18),transparent_68%)] blur-3xl"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -18, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}

function FloatingChip({
  label,
  icon,
  className,
  delay = 0,
}: {
  label: string;
  icon: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "glass-strong absolute z-20 hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-fg shadow-xl sm:flex",
        className,
      )}
      animate={reduce ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full text-[#0B0710]"
        style={{ backgroundImage: gradientCss.signature }}
      >
        <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
      {label}
    </motion.div>
  );
}

function Portrait() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
      className="relative mx-auto w-full max-w-[470px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg, var(--grad-violet), var(--grad-pink), var(--grad-orange), var(--grad-cyan), var(--grad-violet))",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -inset-5 rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--grad-cyan) 70deg, transparent 140deg, var(--grad-pink) 220deg, transparent 290deg, var(--grad-orange) 340deg, transparent 360deg)",
        }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="portrait-blob relative aspect-[4/5] w-full p-[3px] shadow-[0_40px_120px_-40px_rgba(139,92,246,0.55)]"
        style={{ backgroundImage: gradientCss.signature }}
      >
        <div className="portrait-blob relative h-full w-full overflow-hidden bg-surface-2">
          <Image
            src={hero.portrait}
            alt={hero.portraitAlt}
            fill
            priority
            sizes="(max-width: 768px) 78vw, 470px"
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.14),transparent_45%)]"
          />
        </div>
      </div>

      <FloatingChip
        label="AI assistants"
        icon="bot"
        className="-left-4 top-16 sm:-left-8"
        delay={0.4}
      />
      <FloatingChip
        label="Automations"
        icon="workflow"
        className="-right-3 top-1/3 sm:-right-7"
        delay={1.1}
      />
      <FloatingChip
        label="Websites"
        icon="code"
        className="-left-2 bottom-14 sm:-left-7"
        delay={1.8}
      />

      <div className="absolute -right-2 bottom-2 hidden rounded-2xl border border-line bg-bg/70 px-3 py-2 backdrop-blur-md sm:block">
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <MapPin className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
          Abuja, Nigeria
          <span className="text-muted/40">→</span>
          worldwide
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
      <Orbs reduce={reduce} />

      <div className="container-shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <Sparkles className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                Available for select projects
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-[11px] font-medium uppercase tracking-[0.22em] text-muted sm:text-xs"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-[12ch] font-display text-[clamp(3.25rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
            >
              <span className="sr-only">{hero.accessibleHeadline}</span>
              <span aria-hidden="true" className="block">
                <span className="block">{hero.headlineLead}</span>
                <RotatingWord words={hero.words} className="leading-[0.95]" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl font-display text-[clamp(1.25rem,2.6vw,2.1rem)] font-medium leading-tight tracking-[-0.03em] text-fg/75"
            >
              {hero.headlineTail}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {hero.subcopy}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5">
              <a
                href={hero.current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
                {hero.current.prefix}{" "}
                <span className="font-medium text-fg underline decoration-line underline-offset-4 transition-colors group-hover:decoration-fg/40">
                  {hero.current.label}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton>
                <a
                  href={hero.ctas.primary.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#0B0710] shadow-[0_16px_40px_-16px_rgba(255,77,157,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundImage: gradientCss.signature }}
                >
                  {hero.ctas.primary.label}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.12}>
                <a
                  href={hero.ctas.secondary.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-6 text-sm font-medium text-fg backdrop-blur-md transition-colors hover:border-fg/25 hover:bg-surface"
                >
                  {hero.ctas.secondary.label}
                  <ArrowDownRight
                    className="h-4 w-4 text-muted transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-2">
              {hero.roleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-surface/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5">
            <Portrait />
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted sm:mt-20">
          <span className="relative h-8 w-px overflow-hidden bg-line" aria-hidden="true">
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-fg to-transparent"
              animate={reduce ? undefined : { y: [0, 20, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
