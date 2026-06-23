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
  bg = "#0a0a0a",
}: {
  children: React.ReactNode
  bg?: string
}) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section
      ref={ref}
      className="py-20 px-6"
      style={{ background: bg }}
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
    <div className="bg-[#0a0a0a]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 grid-bg noise-overlay overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(2,132,199,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-end">
            {/* Left — title + summary */}
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-up animate-fade-up-1">
                <span className="accent-line" />
                <span className="section-label">{"// DATASTUNT LABS"}</span>
              </div>

              <h1
                className="animate-fade-up animate-fade-up-2 text-[clamp(2.25rem,6vw,4rem)] font-bold text-[#f5f5f5] leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {service.title}
              </h1>

              <p
                className="animate-fade-up animate-fade-up-3 text-lg text-[#737373] leading-relaxed max-w-2xl mb-8"
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
              <div className="border border-[rgba(2,132,199,0.25)] rounded-lg bg-[rgba(2,132,199,0.04)] p-8 w-full">
                <p
                  className="text-xs text-sky-400 mb-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", letterSpacing: "0.1em" }}
                >
                 {" // THE BOTTOM LINE"}
                </p>
                <p
                  className="text-[#f5f5f5] text-base leading-relaxed font-medium"
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
      <Section bg="#0d0d0d">
        <SectionLabel text="// WHERE IT HELPS" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Where We Deploy This
        </h2>
        <p className="reveal text-[#737373] mb-12 max-w-xl">
          Specific use cases where this system delivers measurable outcomes.
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden">
          {service.whereItHelps.map((item, i) => (
            <div
              key={i}
              className="reveal bg-[#0d0d0d] p-6 group hover:bg-[rgba(2,132,199,0.04)] transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] flex items-center justify-center flex-shrink-0 group-hover:border-sky-600 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-[#525252] group-hover:text-sky-400 transition-colors duration-200" />
                </div>
                <p
                  className="text-sm text-[#d4d4d4] leading-relaxed pt-1"
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
      <Section bg="#0a0a0a">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel text="// BENEFITS" />
            <h2
              className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What You Get
            </h2>
            <p className="reveal text-[#737373] mb-10">
              Clear, measurable advantages from week one.
            </p>

            <ul className="space-y-5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="reveal flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-[#d4d4d4] text-sm leading-relaxed"
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
            <div className="border border-[rgba(255,255,255,0.08)] rounded-lg bg-[#111111] p-10 text-center">
              <TrendingUp className="w-10 h-10 text-sky-600 mx-auto mb-6" />
              <p
                className="text-sm text-[#737373] mb-2 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.7rem" }}
              >
                Execution-first approach
              </p>
              <p
                className="text-[#f5f5f5] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Every benefit above is a direct result of shipping fast and iterating in production — not months of planning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <Section bg="#0d0d0d">
        <SectionLabel text="// INDUSTRIES" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Where We&apos;ve Deployed This
        </h2>
        <p className="reveal text-[#737373] mb-12">
          Sectors where this system has been successfully built and shipped.
        </p>

        <div className="reveal flex flex-wrap gap-3">
          {service.industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-2 px-5 py-3 border border-[rgba(255,255,255,0.08)] rounded-md bg-[#111111] hover:border-sky-600/40 hover:bg-[rgba(2,132,199,0.04)] transition-all duration-200 group"
            >
              <Building2 className="w-4 h-4 text-[#525252] group-hover:text-sky-500 transition-colors" />
              <span
                className="text-sm text-[#d4d4d4] font-medium"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {industry}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Proof ────────────────────────────────────────────────────────── */}
      <Section bg="#0a0a0a">
        <SectionLabel text="// PROOF" />
        <h2
          className="reveal text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-[#f5f5f5] mb-12 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Results in Production
        </h2>

        <div className="reveal border border-[rgba(2,132,199,0.2)] rounded-lg bg-[rgba(2,132,199,0.03)] overflow-hidden">
          <div className="grid lg:grid-cols-[auto,1fr] divide-y lg:divide-y-0 lg:divide-x divide-[rgba(2,132,199,0.15)]">
            {/* Stat */}
            {proofStat && (
              <div className="p-10 flex flex-col items-center justify-center text-center lg:w-48">
                <span
                  className="text-5xl font-bold text-sky-400 leading-none mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {proofStat}
                </span>
                <span
                  className="text-xs text-[#737373] uppercase tracking-widest"
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
                  className="text-4xl text-sky-600 leading-none select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#d4d4d4] text-base leading-relaxed mt-2"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {service.proof}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-[rgba(255,255,255,0.06)] pt-12">
          <div className="flex-1">
            <p
              className="text-[#f5f5f5] font-semibold text-lg mb-1"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Ready to ship this for your team?
            </p>
            <p className="text-[#737373] text-sm">
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
