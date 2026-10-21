"use client";

import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { contact } from "@/data/content";
import { gradientCss } from "@/lib/gradients";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { SparkleBurst } from "@/components/ui/sparkle-burst";

type Status = "idle" | "sending" | "success" | "mailto" | "error";
type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
  company: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  company: "",
};

const contactRows = [
  {
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    icon: "mail" as const,
    external: false,
  },
  {
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
    icon: "phone" as const,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "/in/buildveloper",
    href: contact.linkedin,
    icon: "linkedin" as const,
    external: true,
  },
  {
    label: "Book a call",
    value: "cal.com/buildveloper",
    href: contact.calendarUrl,
    icon: "calendar" as const,
    external: true,
  },
];

const pillAccents = ["violet", "cyan", "pink", "orange"] as const;

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const reduce = useReducedMotion();

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error" || status === "mailto") setStatus("idle");
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Tell me your name.";
    if (!form.email.trim()) next.email = "I need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That email doesn't look right.";
    if (!form.projectType) next.projectType = "Pick the closest fit.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "A sentence or two about the problem helps.";
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const endpoint =
      contact.formEndpoint || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

    if (!endpoint || endpoint.includes("REPLACE")) {
      const subject = encodeURIComponent(
        `Project inquiry — ${form.projectType || "New project"}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
          _subject: `Project inquiry — ${form.projectType}`,
          _gotcha: form.company,
        }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface/40 p-5 sm:rounded-[40px] sm:p-8 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.32),transparent_68%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,77,157,0.3),transparent_68%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundImage: gradientCss.signature }}
                    aria-hidden="true"
                  />
                  08 / Contact
                </div>
                <h2 className="mt-5 text-balance font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
                  Let&apos;s build something{" "}
                  <span className="text-gradient text-gradient-signature">useful</span>.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                  {contact.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg/40 px-3 py-1.5 text-xs text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  Taking new projects
                </div>

                <div className="mt-8 flex flex-col divide-y divide-line overflow-hidden rounded-2xl border border-line bg-bg/30">
                  {contactRows.map((row) => (
                    <a
                      key={row.label}
                      href={row.href}
                      {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-3 px-3.5 py-3 transition-colors hover:bg-surface/50"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface/60 text-fg">
                        <Icon name={row.icon} className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-muted">
                          {row.label}
                        </p>
                        <p className="truncate text-xs text-fg">{row.value}</p>
                      </div>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>

                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#062A14] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
                  Message me on WhatsApp
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-3xl border border-line bg-bg/45 p-5 sm:p-7">
                  <SparkleBurst active={status === "success"} />
                  {status === "success" ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                      role="status"
                    >
                      <span
                        className="flex h-16 w-16 items-center justify-center rounded-full text-[#0B0710]"
                        style={{ backgroundImage: gradientCss.signature }}
                      >
                        <Check className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em]">
                        Message sent.
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                        Thanks for reaching out. I&apos;ll get back to you at the email you shared.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-fg transition-colors hover:border-fg/25"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-display text-lg font-semibold tracking-[-0.02em]">
                            Start a project
                          </p>
                          <p className="mt-1 text-xs text-muted">{contact.formNote}</p>
                        </div>
                        <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-muted sm:flex">
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
                          >
                            Name
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={(event) => update("name", event.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "contact-name-error" : undefined}
                            placeholder="Your name"
                            className={cn(
                              "mt-1.5 w-full rounded-xl border border-line bg-surface/50 px-3.5 py-3 text-sm text-fg outline-none transition placeholder:text-muted/50 focus:border-fg/30 focus:ring-2 focus:ring-lime/30",
                              errors.name && "border-pink/60",
                            )}
                          />
                          {errors.name ? (
                            <p id="contact-name-error" className="mt-1.5 text-[11px] text-pink">
                              {errors.name}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
                          >
                            Email
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(event) => update("email", event.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                            placeholder="you@company.com"
                            className={cn(
                              "mt-1.5 w-full rounded-xl border border-line bg-surface/50 px-3.5 py-3 text-sm text-fg outline-none transition placeholder:text-muted/50 focus:border-fg/30 focus:ring-2 focus:ring-lime/30",
                              errors.email && "border-pink/60",
                            )}
                          />
                          {errors.email ? (
                            <p id="contact-email-error" className="mt-1.5 text-[11px] text-pink">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="contact-project-type"
                          className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
                        >
                          What are you building?
                        </label>
                        <div className="relative mt-1.5">
                          <select
                            id="contact-project-type"
                            name="projectType"
                            value={form.projectType}
                            onChange={(event) => update("projectType", event.target.value)}
                            aria-invalid={Boolean(errors.projectType)}
                            aria-describedby={
                              errors.projectType ? "contact-project-type-error" : undefined
                            }
                            className={cn(
                              "w-full appearance-none rounded-xl border border-line bg-surface/50 px-3.5 py-3 pr-10 text-sm text-fg outline-none transition focus:border-fg/30 focus:ring-2 focus:ring-lime/30",
                              !form.projectType && "text-muted/60",
                              errors.projectType && "border-pink/60",
                            )}
                          >
                            <option value="" disabled>
                              Pick the closest fit
                            </option>
                            {contact.projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                            aria-hidden="true"
                          />
                        </div>
                        {errors.projectType ? (
                          <p
                            id="contact-project-type-error"
                            className="mt-1.5 text-[11px] text-pink"
                          >
                            {errors.projectType}
                          </p>
                        ) : null}
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="contact-message"
                          className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
                        >
                          What&apos;s slowing you down?
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={(event) => update("message", event.target.value)}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "contact-message-error" : undefined}
                          placeholder="What's slow, messy, or stuck? A few sentences is enough."
                          className={cn(
                            "mt-1.5 w-full resize-y rounded-xl border border-line bg-surface/50 px-3.5 py-3 text-sm leading-relaxed text-fg outline-none transition placeholder:text-muted/50 focus:border-fg/30 focus:ring-2 focus:ring-lime/30",
                            errors.message && "border-pink/60",
                          )}
                        />
                        {errors.message ? (
                          <p id="contact-message-error" className="mt-1.5 text-[11px] text-pink">
                            {errors.message}
                          </p>
                        ) : null}
                      </div>

                      <input
                        type="text"
                        name="_gotcha"
                        value={form.company}
                        onChange={(event) => update("company", event.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                      />

                      <div
                        aria-live="polite"
                        className={cn(
                          "mt-3 text-xs",
                          status === "error" ? "text-pink" : "text-muted",
                        )}
                      >
                        {status === "mailto"
                          ? "Your email app is opening — or email buildveloper@gmail.com directly."
                          : null}
                        {status === "error"
                          ? "Something went wrong. Try again, or email buildveloper@gmail.com directly."
                          : null}
                      </div>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-[#0B0710] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                          style={{ backgroundImage: gradientCss.signature }}
                        >
                          {status === "sending" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                              Sending
                            </>
                          ) : (
                            <>
                              Send message
                              <ArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </button>
                        <p className="text-[10px] leading-relaxed text-muted">
                          Or email{" "}
                          <a
                            href={contact.emailHref}
                            className="underline decoration-line underline-offset-2 transition-colors hover:text-fg"
                          >
                            {contact.email}
                          </a>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {contact.linkPills.map((pill, index) => {
            const accent = pillAccents[index % pillAccents.length];
            const external = pill.href.startsWith("http");
            return (
              <Reveal key={pill.label} delay={index * 0.05}>
                <a
                  href={pill.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group gradient-border relative flex items-center gap-3 overflow-hidden rounded-2xl border border-line bg-surface/50 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface/80 sm:p-4"
                  style={{ "--gradient": gradientCss[accent] } as CSSProperties}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#0B0710]"
                    style={{ backgroundImage: gradientCss[accent] }}
                  >
                    <Icon name={pill.icon} className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-fg">{pill.label}</span>
                    <span className="block truncate text-xs text-muted">{pill.sublabel}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[10px] uppercase tracking-[0.16em] text-muted">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.email}
            </span>
            <span>Abuja, Nigeria · working globally</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
