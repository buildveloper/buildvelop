import type { ReactNode } from "react";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted",
            centered && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundImage: gradientCss.signature }}
          />
          <span>
            {index} / {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
