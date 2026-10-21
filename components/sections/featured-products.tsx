"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { products, type Product } from "@/data/content";
import { gradientCss, gradientGlow } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { ProjectPreview } from "@/components/ui/project-preview";

function ProductMeta({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
        {product.tag}
      </span>
      {product.badge ? (
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#0B0710]"
          style={{ backgroundImage: gradientCss[product.gradient] }}
        >
          {product.badge}
        </span>
      ) : null}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-line bg-bg/30 px-2 py-1 font-mono text-[10px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProductCard({
  product,
  index,
  featured = false,
}: {
  product: Product;
  index: number;
  featured?: boolean;
}) {
  const preview = (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${product.name} live site (opens in a new tab)`}
      data-cursor-label="View"
      className="group/preview relative block h-full overflow-hidden"
    >
      <ProjectPreview
        src={product.preview}
        alt={`${product.name} website preview`}
        gradient={product.gradient}
        initial={product.name.charAt(0)}
        sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"}
        className={featured ? "lg:object-top" : undefined}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
      />
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3DF58B]" aria-hidden="true" />
        Live
      </span>
      <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
        Live preview
      </span>
    </a>
  );

  const content = (
    <div className={cn("flex flex-col", featured ? "p-6 sm:p-8 lg:p-10" : "p-6 sm:p-7")}>
      <div className="flex items-center justify-between gap-3">
        <ProductMeta product={product} />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3
        className={cn(
          "mt-4 font-display font-semibold tracking-[-0.035em]",
          featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl",
        )}
      >
        {product.name}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        {product.description}
      </p>
      <div className="mt-5">
        <Stack items={product.stack} />
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-fg"
        >
          Open live site
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover/link:border-fg/30 group-hover/link:bg-fg group-hover/link:text-bg">
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </span>
        </a>
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted/60">Live project</span>
      </div>
    </div>
  );

  return (
    <TiltCard
      max={featured ? 3.5 : 5}
      className={cn(
        "gradient-border group relative h-full overflow-hidden rounded-[32px] border border-line bg-surface card-shadow",
        featured && "lg:rounded-[36px]",
      )}
      style={{ "--gradient": gradientCss[product.gradient] } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: `radial-gradient(circle at 25% 20%, ${gradientGlow[product.gradient]}, transparent 58%)`,
        }}
      />
      <div className="relative z-10 grid h-full lg:grid-cols-12">
        <div
          className={cn(
            "relative min-h-[300px] overflow-hidden border-b border-line lg:border-b-0",
            featured
              ? "lg:order-2 lg:col-span-7 lg:min-h-[520px] lg:border-l lg:border-b-0"
              : "aspect-[16/10] min-h-0 lg:col-span-12",
          )}
        >
          {preview}
        </div>
        <div
          className={cn(
            "flex flex-col",
            featured ? "lg:order-1 lg:col-span-5 lg:justify-center" : "lg:col-span-12",
          )}
        >
          {content}
        </div>
      </div>
    </TiltCard>
  );
}

export function FeaturedProducts() {
  const [featured, ...rest] = products;

  return (
    <section id="work" className="section-pad relative">
      <div className="container-shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Projects"
            title={
              <>
                Live projects you can{" "}
                <span className="text-gradient text-gradient-signature">open</span>.
              </>
            }
            description="Working products, not mockups. Each one started with a real problem."
          />
          <Reveal delay={0.1} className="shrink-0">
            <div className="flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-2 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              05 live projects
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-12">
            <ProductCard product={featured} index={0} featured />
          </Reveal>
          {rest.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06} className="lg:col-span-6">
              <ProductCard product={product} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
