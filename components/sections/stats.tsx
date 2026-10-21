import { ArrowUpRight } from "lucide-react";
import { stats } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { Counter } from "@/components/ui/counter";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section id="stats" className="relative pb-16 pt-4 sm:pb-24" aria-label="By the numbers">
      <div className="container-shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface/50 p-5 transition-colors duration-300 hover:border-fg/15 sm:p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px opacity-60"
                  style={{ backgroundImage: gradientCss[stat.gradient] }}
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-[#0B0710]"
                    style={{ backgroundImage: gradientCss[stat.gradient] }}
                  >
                    <Icon name={stat.icon} className="h-4 w-4" strokeWidth={2.1} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-fg">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{stat.description}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <a
              href="#contact"
              className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl p-5 text-[#0B0710] shadow-[0_20px_60px_-24px_rgba(255,77,157,0.55)] sm:p-6"
              style={{ backgroundImage: gradientCss.signature }}
            >
              <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">
                  Next project
                </span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>
              <div className="relative">
                <p className="max-w-[14ch] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.03em]">
                  Have a problem worth solving?
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Tell me about it
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
