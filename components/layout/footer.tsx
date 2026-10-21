import { ArrowUp, ArrowUpRight } from "lucide-react";
import { contact, footerTagline, site, socials } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { Icon } from "@/components/ui/icon";
import { LocalTime } from "@/components/ui/local-time";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="container-shell py-14 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="buildveloper">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-[#0B0710]"
                style={{ backgroundImage: gradientCss.signature }}
              >
                b
              </span>
              <span className="font-display text-base font-semibold tracking-[-0.02em]">
                buildveloper
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">{footerTagline}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <span>{site.location}</span>
              <span aria-hidden="true" className="text-muted/50">
                /
              </span>
              <LocalTime />
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {socials.map((social) => {
              const external = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-2.5 text-sm text-muted transition-colors hover:border-fg/20 hover:text-fg"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                  {social.label}
                  {external ? (
                    <ArrowUpRight
                      className="h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <a
          href="#top"
          className="group relative mt-16 block select-none overflow-hidden border-t border-line pt-8 sm:mt-24 sm:pt-12"
          aria-label="buildveloper — back to top"
        >
          <span className="block font-display text-[clamp(3.2rem,13vw,10rem)] font-semibold leading-[0.82] tracking-[-0.065em] text-fg transition-colors duration-500 group-hover:text-transparent">
            buildveloper
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 block translate-y-2 bg-clip-text font-display text-[clamp(3.2rem,13vw,10rem)] font-semibold leading-[0.82] tracking-[-0.065em] text-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ backgroundImage: gradientCss.signature, WebkitBackgroundClip: "text" }}
          >
            buildveloper
          </span>
        </a>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with love by Christopher John · Abuja,
            Nigeria.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={contact.emailHref} className="transition-colors hover:text-fg">
              {contact.email}
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-fg transition-colors hover:border-fg/20"
            >
              Back to top
              <ArrowUp
                className="h-3 w-3 transition-transform group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
