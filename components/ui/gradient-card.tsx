import type { CSSProperties, ReactNode } from "react";
import { gradientCss, gradientGlow, type GradientKey } from "@/lib/gradients";
import { cn } from "@/lib/cn";

export function GradientCard({
  children,
  gradient,
  className,
  glow = true,
}: {
  children: ReactNode;
  gradient: GradientKey;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "gradient-border group relative overflow-hidden rounded-[28px] border border-line bg-surface card-shadow",
        className,
      )}
      style={{ "--gradient": gradientCss[gradient] } as CSSProperties}
    >
      {glow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${gradientGlow[gradient]}, transparent 62%)`,
          }}
        />
      ) : null}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
