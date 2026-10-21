import { impact } from "@/data/content";
import type { GradientKey } from "@/lib/gradients";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GradientCard } from "@/components/ui/gradient-card";
import { Icon } from "@/components/ui/icon";

const accents: GradientKey[] = ["violet", "pink", "cyan", "orange", "lime", "cool"];

const legalSteps = [
  { label: "Enquiry received", detail: "Checked and organized" },
  { label: "Added to the case system", detail: "Clio updated" },
  { label: "Confirmation sent", detail: "Client + firm" },
  { label: "Safety check", detail: "Nothing missed" },
];

export function Impact() {
  return (
    <section id="impact" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          index="04"
          eyebrow="Examples"
          title={
            <>
              Real problems,{" "}
              <span className="text-gradient text-gradient-signature">working</span> systems.
            </>
          }
          description="A few examples of the systems I've built. The technical details are kept small on purpose."
        />

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-12">
          {impact.map((item, index) => {
            const accent = accents[index % accents.length];
            const isLegal = index === 0;

            return (
              <Reveal key={item.title} delay={index * 0.05} className={cn("h-full", item.span)}>
                <GradientCard gradient={accent} className="h-full" glow={isLegal}>
                  <div className={cn("flex h-full flex-col p-5 sm:p-6", isLegal && "sm:p-8")}>
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0B0710]"
                        style={{ backgroundImage: gradientCss[accent] }}
                      >
                        <Icon name={item.icon} className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "mt-5 font-display font-semibold leading-tight tracking-[-0.025em]",
                        isLegal ? "text-2xl sm:text-3xl" : "text-lg",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 leading-relaxed text-muted",
                        isLegal ? "max-w-md text-sm sm:text-base" : "text-xs sm:text-sm",
                      )}
                    >
                      {item.description}
                    </p>

                    {isLegal ? (
                      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-auto">
                        <div>
                          <p className="font-display text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-none tracking-[-0.05em]">
                            15<span className="text-gradient-signature text-gradient">+</span>
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                            hrs/week saved
                          </p>
                          <p className="mt-3 max-w-[24ch] text-xs leading-relaxed text-muted">
                            New enquiries are handled automatically, added to Clio, and confirmed
                            without anyone copying information by hand.
                          </p>
                        </div>
                        <div className="space-y-2">
                          {legalSteps.map((step, stepIndex) => (
                            <div
                              key={step.label}
                              className="relative flex items-center gap-2.5 rounded-lg border border-line bg-bg/30 px-2.5 py-2"
                            >
                              <span
                                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-[#0B0710]"
                                style={{ backgroundImage: gradientCss.violet }}
                              >
                                {stepIndex + 1}
                              </span>
                              <div className="min-w-0">
                                <p className="truncate text-[11px] font-medium text-fg">
                                  {step.label}
                                </p>
                                <p className="truncate text-[9px] text-muted">{step.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {item.tags?.length ? (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-line bg-bg/30 px-2 py-1 font-mono text-[9px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {item.highlight && !isLegal ? (
                      <span className="mt-4 inline-flex w-fit rounded-full bg-lime px-2.5 py-1 text-[10px] font-semibold text-[#0B0710]">
                        {item.highlight}
                      </span>
                    ) : null}
                  </div>
                </GradientCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
