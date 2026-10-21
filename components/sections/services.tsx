"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { services } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GradientCard } from "@/components/ui/gradient-card";
import { Icon } from "@/components/ui/icon";

function WorkflowVisual() {
  const reduce = useReducedMotion();
  const nodes = [
    { label: "New enquiry", detail: "Form, DM, or email", icon: "zap" as const, status: "Start" },
    { label: "AI sorts & scores", detail: "Sorts and routes", icon: "bot" as const, status: "AI" },
    {
      label: "CRM & follow-up",
      detail: "Your CRM or pipeline",
      icon: "database" as const,
      status: "Next",
    },
  ];

  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-bg/50 p-4 sm:p-5">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          example_automation
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/70 px-2.5 py-1 text-[10px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          running
        </span>
      </div>
      <div className="relative mt-4 flex flex-col gap-2.5">
        {nodes.map((node, index) => (
          <div key={node.label} className="relative flex items-center gap-3">
            {index < nodes.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-9 h-[18px] w-px bg-gradient-to-b from-fg/25 to-fg/5"
              />
            ) : null}
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-fg">
              <Icon name={node.icon} className="h-4 w-4" />
              {!reduce ? (
                <motion.span
                  className="absolute inset-0 rounded-xl border border-lime/40"
                  animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.18, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.5 }}
                />
              ) : null}
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-line bg-surface/60 px-3 py-2">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-xs font-medium text-fg">{node.label}</p>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                  {node.status}
                </span>
              </div>
              <p className="mt-0.5 truncate text-[10px] text-muted">{node.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowserVisual() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-bg/50 p-2 group-hover:border-fg/15">
      <div className="flex items-center gap-1.5 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true" />
        <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
        <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
        <span className="ml-2 truncate font-mono text-[9px] text-muted">app.buildveloper.dev</span>
      </div>
      <div className="grid grid-cols-[48px_1fr] gap-1.5">
        <div className="rounded-lg border border-line bg-surface/60 p-2">
          <div className="h-4 w-4 rounded-md bg-fg/20" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-fg/10" />
            <div className="h-1.5 w-4/5 rounded bg-fg/10" />
            <div className="h-1.5 w-3/5 rounded bg-fg/10" />
          </div>
        </div>
        <div className="rounded-lg border border-line bg-surface/70 p-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-1/2 rounded bg-fg/25" />
            <span className="rounded-full bg-lime px-1.5 py-0.5 text-[8px] font-semibold text-[#0B0710]">
              LIVE
            </span>
          </div>
          <div className="mt-2 h-1.5 w-3/4 rounded bg-fg/10" />
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-md border border-line bg-bg/50 p-1.5">
                <div className="h-1 w-full rounded bg-fg/15" />
                <div className="mt-1 h-1 w-2/3 rounded bg-fg/10" />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-fg/10">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet to-pink" />
            </div>
            <span className="font-mono text-[8px] text-muted">68%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RevenueVisual() {
  const steps = ["Lead", "CRM", "Follow-up", "Close"];
  return (
    <div className="mt-6 w-full lg:mt-0 lg:max-w-[420px]">
      <div className="rounded-2xl border border-line bg-bg/40 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            your_growth_system
          </span>
          <span className="rounded-full bg-lime px-2 py-0.5 text-[9px] font-semibold text-[#0B0710]">
            connected
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-1">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-1 items-center gap-1">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-[10px] font-semibold text-fg"
                  style={
                    index === steps.length - 1
                      ? { backgroundImage: gradientCss.citrus, color: "#0B0710" }
                      : undefined
                  }
                >
                  {index + 1}
                </span>
                <span className="text-[9px] uppercase tracking-[0.1em] text-muted">{step}</span>
              </div>
              {index < steps.length - 1 ? (
                <span
                  className="mb-4 h-px flex-1 bg-gradient-to-r from-line to-fg/20"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-line pt-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">One system</p>
            <p className="mt-1 font-display text-sm font-medium">Marketing → sales → delivery</p>
          </div>
          <span className="text-gradient text-gradient-citrus font-display text-xl font-semibold">
            theForge
          </span>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          index="01"
          eyebrow="What I do"
          title={
            <>
              What I can <span className="text-gradient text-gradient-signature">build</span> for you.
            </>
          }
          description="Three simple ways I help: automate the repetitive work, build the software, or connect everything into one system."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08} className={cn("h-full", service.span)}>
              <GradientCard gradient={service.gradient} className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#0B0710]"
                        style={{ backgroundImage: gradientCss[service.gradient] }}
                      >
                        <Icon name={service.icon} className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                          {service.index}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    {service.badge ? (
                      <span className="hidden rounded-full border border-line bg-surface/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted sm:inline-flex">
                        {service.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/30 px-2.5 py-1 text-[11px] text-muted"
                      >
                        <Check className="h-3 w-3 text-lime" strokeWidth={2.4} aria-hidden="true" />
                        {bullet}
                      </span>
                    ))}
                  </div>

                  {service.visual === "workflow" ? <WorkflowVisual /> : null}
                  {service.visual === "browser" ? <BrowserVisual /> : null}

                  {service.visual === "revenue" ? (
                    <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <p className="max-w-md text-sm leading-relaxed text-muted">
                          A connected system: your website, contact list, follow-ups, and reporting
                          in one place.
                        </p>
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fg"
                        >
                          Explore theForge.ng
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <RevenueVisual />
                    </div>
                  ) : null}

                  {service.visual === "revenue" ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] font-semibold leading-none text-fg/[0.035]"
                    >
                      03
                    </span>
                  ) : null}
                </div>
              </GradientCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
