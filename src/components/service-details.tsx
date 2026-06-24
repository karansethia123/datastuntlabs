"use client"

import { useEffect, useRef } from "react"
import type { ServiceDetails } from "@/data/services/service-data"
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Building2 } from "lucide-react"
import Link from "next/link"

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-background ${className}`}
    >
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="reveal flex items-center gap-3 mb-6">
      <span className="accent-line" />
      <span className="section-label">{text}</span>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ServiceDetailsView({ service }: { service: ServiceDetails }) {
  // Extract proof stat if present (e.g. "30%", "80%+", "60%")
  const statMatch = service.proof.match(/(\d+[\+\-–]?\s*%|\d+x|\d+\s*days?)/i)
  const proofStat = statMatch ? statMatch[0].trim() : null

  return (
    <div className="bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 grid-bg noise-overlay overflow-hidden section-glow">

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-end">
            {/* Left — title + summary */}
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-up animate-fade-up-1">
                <span className="accent-line" />
                <span className="section-label">{"// DATASTUNT LABS"}</span>
              </div>

              <h1
                className="animate-fade-up animate-fade-up-2 text-[clamp(2.25rem,6vw,4rem)] font-bold text-foreground leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {service.title}
              </h1>

              <p
                className="animate-fade-up animate-fade-up-3 text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {service.summary}
              </p>

              <div className="animate-fade-up animate-fade-up-4 flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="btn-accent">
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right — CTA callout box */}
            <div className="animate-fade-up animate-fade-up-4 hidden lg:block w-full">
              <div className="border border-accent/25 rounded-lg bg-accent/5 p-8 w-full">
                <p
                  className="text-xs text-primary mb-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", letterSpacing: "0.1em" }}
                >
                 {" // THE BOTTOM LINE"}
                </p>
                <p
                  className="text-foreground text-base leading-relaxed font-medium"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {service.cta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where It Helps ───────────────────────────────────────────────── */}
      <Section>
        <SectionLabel text="// WHERE IT HELPS" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Where We Deploy This
        </h2>
        <p className="reveal text-muted-foreground mb-12 max-w-xl">
          Specific use cases where this system delivers measurable outcomes.
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {service.whereItHelps.map((item, i) => (
            <div
              key={i}
              className="reveal bg-card p-6 group hover:bg-accent/5 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </div>
                <p
                  className="text-sm text-foreground leading-relaxed pt-1"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel text="// BENEFITS" />
            <h2
              className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-foreground mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What You Get
            </h2>
            <p className="reveal text-muted-foreground mb-10">
              Clear, measurable advantages from week one.
            </p>

            <ul className="space-y-5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="reveal flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span
                    className="text-foreground text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — decorative stat block */}
          <div className="reveal">
            <div className="border border-border rounded-lg bg-card p-10 text-center">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-6" />
              <p
                className="text-sm text-muted-foreground mb-2 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.7rem" }}
              >
                Execution-first approach
              </p>
              <p
                className="text-foreground text-base leading-relaxed"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Every benefit above is a direct result of shipping fast and iterating in production — not months of planning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <Section>
        <SectionLabel text="// INDUSTRIES" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Where We&apos;ve Deployed This
        </h2>
        <p className="reveal text-muted-foreground mb-12">
          Sectors where this system has been successfully built and shipped.
        </p>

        <div className="reveal flex flex-wrap gap-3">
          {service.industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-2 px-5 py-3 border border-border rounded-md bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
            >
              <Building2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span
                className="text-sm text-foreground font-medium"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {industry}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Proof ────────────────────────────────────────────────────────── */}
      <Section>
        <SectionLabel text="// PROOF" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-foreground mb-12 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Results in Production
        </h2>

        <div className="reveal border border-accent/20 rounded-lg bg-accent/5 overflow-hidden">
          <div className="grid lg:grid-cols-[auto,1fr] divide-y lg:divide-y-0 lg:divide-x divide-accent/15">
            {/* Stat */}
            {proofStat && (
              <div className="p-10 flex flex-col items-center justify-center text-center lg:w-48">
                <span
                  className="text-5xl font-bold text-primary leading-none mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {proofStat}
                </span>
                <span
                  className="text-xs text-muted-foreground uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Proven outcome
                </span>
              </div>
            )}

            {/* Quote */}
            <div className="p-10 flex items-center">
              <div>
                <span
                  className="text-4xl text-primary leading-none select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className="text-foreground text-base leading-relaxed mt-2"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {service.proof}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-border pt-12">
          <div className="flex-1">
            <p
              className="text-foreground font-semibold text-lg mb-1"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Ready to ship this for your team?
            </p>
            <p className="text-muted-foreground text-sm">
              Discovery calls are free, focused, and built around your roadmap.
            </p>
          </div>
          <Link href="/contact">
            <button className="btn-accent whitespace-nowrap">
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
