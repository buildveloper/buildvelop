import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  children,
  reverse = false,
  duration = 32,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("marquee mask-fade-x", className)}>
      <div
        className={cn("marquee-track flex w-max items-center gap-3", reverse && "marquee-track-reverse")}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-3">{children}</div>
        <div className="flex shrink-0 items-center gap-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
