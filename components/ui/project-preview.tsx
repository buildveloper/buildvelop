"use client";

import { useState } from "react";
import Image from "next/image";
import { gradientCss, type GradientKey } from "@/lib/gradients";
import { cn } from "@/lib/cn";

export function ProjectPreview({
  src,
  alt,
  gradient,
  initial,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: {
  src: string;
  alt: string;
  gradient: GradientKey;
  initial: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", className)}
        style={{ backgroundImage: gradientCss[gradient] }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <span className="relative font-display text-7xl font-semibold text-white/90 sm:text-8xl">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn(
        "object-cover object-top transition-[object-position,transform] duration-[6000ms] ease-linear group-hover:scale-[1.02] group-hover:object-bottom group-focus-within:object-bottom",
        className,
      )}
      onError={() => setFailed(true)}
    />
  );
}
