import { ArrowUpRight, MapPin } from "lucide-react";
import { certifications, contact, experience } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          index="06"
          eyebrow="About"
          title={
            <>
              Where I&apos;ve{" "}
              <span className="text-gradient text-gradient-signature">worked</span>.
            </>
          }
          description="From admin work to AI engineering — I've spent the last two years turning manual processes into working systems."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative lg:col-span-8">
            <div aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
            <div className="flex flex-col gap-8">
              {experience.map((item, index) => (
                <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
                  <div className="relative pl-8 sm:pl-10">
                    <span
                      className={cn(
                        "absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-bg",
                        item.current ? "bg-success" : "bg-muted",
                      )}
                      aria-hidden="true"
                    >
                      {item.current ? (
                        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-success opacity-50 motion-reduce:animate-none" />
                      ) : null}
                    </span>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-fg/80">{item.company}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {item.current ? (
                          <span className="rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-success">
                            Current
                          </span>
                        ) : null}
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    {item.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-line bg-surface/40 px-2 py-1 font-mono text-[9px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4">
            <Reveal>
              <div className="rounded-3xl border border-line bg-surface/50 p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-[#0B0710]"
                    style={{ backgroundImage: gradientCss.signature }}
                  >
                    <Icon name="award" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-[-0.01em]">
                    Certifications
                  </h3>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  {certifications.map((certification) => (
                    <div
                      key={certification.name}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-bg/30 p-3"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-fg">
                        <Icon name={certification.icon} className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium leading-snug text-fg">
                          {certification.name}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-muted">
                          {certification.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <a
                href={contact.company}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-line bg-surface/50 p-6 transition-colors hover:border-fg/15"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Currently
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold leading-tight tracking-[-0.02em]">
                  AI Automation Engineer &amp; Operations
                </p>
                <p className="mt-1 text-sm text-muted">theForge.ng</p>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
                  Abuja, Nigeria · working globally
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
