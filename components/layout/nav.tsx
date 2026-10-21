"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => panelRef.current?.focus(), 60);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] pt-3 sm:pt-4">
      <div className="container-shell">
        <nav
          aria-label="Main navigation"
          className={cn(
            "relative mx-auto flex max-w-[1080px] items-center justify-between gap-2 rounded-full px-2.5 py-2 transition-all duration-500 sm:px-3",
            scrolled || open
              ? "nav-pill border border-line shadow-[0_18px_60px_-30px_rgba(0,0,0,0.7)]"
              : "border border-transparent",
          )}
        >
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1 sm:px-2"
            aria-label="buildveloper — back to top"
          >
            <span
              className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full"
              style={{ backgroundImage: gradientCss.signature }}
            >
              <span className="font-display text-sm font-bold text-[#0B0710]">b</span>
              <span className="absolute inset-0 bg-black/5" />
            </span>
            <span className="font-display text-sm font-semibold tracking-[-0.02em]">
              buildveloper
            </span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm transition-colors duration-200",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                      style={{ backgroundImage: gradientCss.signature }}
                    />
                  ) : null}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-[#0B0710] shadow-[0_10px_30px_-12px_rgba(255,77,157,0.65)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
              style={{ backgroundImage: gradientCss.signature }}
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            </a>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-fg transition hover:border-fg/20 lg:hidden"
            >
              {open ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                ref={panelRef}
                id="mobile-menu"
                tabIndex={-1}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="menu-panel absolute inset-x-0 top-full mt-2 rounded-3xl border border-line p-3 shadow-2xl outline-none lg:hidden"
              >
                <div className="flex flex-col">
                  {nav.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-fg transition hover:bg-surface/60"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={close}
                  className="mt-2 flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#0B0710]"
                  style={{ backgroundImage: gradientCss.signature }}
                >
                  Let&apos;s build something
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
