"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ArrowUpRight } from "lucide-react";
import { showcaseFilters, showcases } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectPreview } from "@/components/ui/project-preview";

type Filter = (typeof showcaseFilters)[number];

export function Showcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const counts = useMemo(() => {
    const map = new Map<Filter, number>();
    map.set("All", showcases.length);
    showcases.forEach((item) => {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    });
    return map;
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? showcases : showcases.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="websites" className="section-pad relative">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Client work"
            title={
              <>
                Websites I&apos;ve <span className="text-gradient text-gradient-signature">built</span>.
              </>
            }
            description="Real sites for real businesses. Filter by the type of business, then open any site to see it live."
          />
          <Reveal delay={0.1} className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-2 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              {String(filtered.length).padStart(2, "0")} sites
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div
            className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter websites by category"
          >
            {showcaseFilters.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200",
                    active
                      ? "border-transparent text-[#0B0710] shadow-[0_8px_24px_-12px_rgba(255,77,157,0.65)]"
                      : "border-line bg-surface/40 text-muted hover:border-fg/20 hover:text-fg",
                  )}
                  style={active ? { backgroundImage: gradientCss.signature } : undefined}
                >
                  {item}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 font-mono text-[9px]",
                      active ? "bg-black/10 text-[#0B0710]" : "bg-surface-2 text-muted",
                    )}
                  >
                    {String(counts.get(item) ?? 0).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout={!reduce} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="View"
                  aria-label={`Visit ${item.name} (opens in a new tab)`}
                  className="gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-fg/15"
                  style={{ "--gradient": gradientCss[item.accent] } as CSSProperties}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
                    <ProjectPreview
                      src={item.preview}
                      alt={`${item.name} website preview`}
                      gradient={item.accent}
                      initial={item.name.charAt(0)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-semibold leading-tight tracking-[-0.02em]">
                        {item.name}
                      </h3>
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                        <ArrowUpRight
                          className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
