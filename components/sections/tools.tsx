import { tools, type Tool } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { BrandMark } from "@/components/ui/brand-mark";

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface/40 py-2 pl-2 pr-4 text-sm text-fg transition-colors hover:border-fg/20 hover:bg-surface/70">
      <BrandMark tool={tool} />
      {tool.name}
    </span>
  );
}

export function Tools() {
  const firstRow = tools.slice(0, 9);
  const secondRow = tools.slice(9);

  return (
    <section id="tools" className="section-pad relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          index="07"
          eyebrow="Tools"
          title={
            <>
              The tools I <span className="text-gradient text-gradient-signature">use</span>.
            </>
          }
          description="The software and platforms behind the work. You don't need to know them — they're just the ingredients."
        />
      </div>

      <Reveal delay={0.08}>
        <div className="mt-12 space-y-3">
          <Marquee duration={38}>
            {firstRow.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </Marquee>
          <Marquee duration={44} reverse>
            {secondRow.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="container-shell mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>17 tools · one connected system</span>
          <span>Hover to pause</span>
        </div>
      </div>
    </section>
  );
}
