import {
  siAnthropic,
  siClaude,
  siCursor,
  siGit,
  siGithub,
  siN8n,
  siNextdotjs,
  siVercel,
  siWordpress,
  siZapier,
  siGoogle,
} from "simple-icons";
import type { Tool } from "@/data/content";
import { cn } from "@/lib/cn";

const marks: Record<string, { path: string; hex: string }> = {
  n8n: siN8n,
  anthropic: siAnthropic,
  claude: siClaude,
  cursor: siCursor,
  git: siGit,
  github: siGithub,
  zapier: siZapier,
  google: siGoogle,
  nextdotjs: siNextdotjs,
  vercel: siVercel,
  wordpress: siWordpress,
};

export function BrandMark({ tool, className }: { tool: Tool; className?: string }) {
  const mark = tool.brand ? marks[tool.brand] : undefined;

  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-bg/40",
        className,
      )}
      style={tool.color ? { color: tool.color } : undefined}
      aria-hidden="true"
    >
      {mark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" role="presentation">
          <path d={mark.path} />
        </svg>
      ) : (
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[-0.02em]">
          {tool.short}
        </span>
      )}
    </span>
  );
}
