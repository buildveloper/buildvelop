"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark and light mode"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-colors duration-200 hover:border-fg/20 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className,
      )}
    >
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.8} aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
