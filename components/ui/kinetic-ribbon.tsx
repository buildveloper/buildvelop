import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

const words = [
  { text: "AI apps", gradient: true },
  { text: "Web apps", gradient: false },
  { text: "Automations", gradient: true },
  { text: "Systems that work", gradient: false },
];

function Word({ text, gradient }: { text: string; gradient: boolean }) {
  return (
    <span
      className={cn(
        "shrink-0 px-3 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold uppercase leading-none tracking-[-0.045em] sm:px-5",
        gradient ? "text-gradient-signature text-gradient" : "text-stroke-muted",
      )}
    >
      {text}
    </span>
  );
}

export function KineticRibbon() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-surface/30 py-10 sm:py-14"
      aria-label="What I build"
    >
      <p className="sr-only">
        What I build: AI apps, web apps, automations, and systems that work.
      </p>
      <div
        aria-hidden="true"
        className="marquee mask-fade-x -rotate-2 scale-[1.03]"
      >
        <div
          className="marquee-track flex w-max items-center gap-4 sm:gap-8"
          style={{ "--marquee-duration": "44s" } as CSSProperties}
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 items-center gap-4 sm:gap-8">
              {words.map((word) => (
                <span key={`${set}-${word.text}`} className="flex items-center gap-4 sm:gap-8">
                  <Word {...word} />
                  <span className="text-2xl text-muted/60 sm:text-3xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
