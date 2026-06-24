"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-muted relative overflow-hidden section-glow">
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// START HERE"}</span>
          <span className="accent-line" />
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-foreground mb-6 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Ready to Know Where You Stand?
        </h2>

        {/* Body */}
        <p className="reveal text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          The AI Build Readiness Audit™ is the entry point. It gives you visibility into what&apos;s working, what&apos;s at risk, and what to prioritize next — in weeks, not months.
        </p>

        {/* CTA */}
        <div className="reveal mb-6">
          <Link href="/contact">
            <button className="btn-accent text-base px-10 py-5">
              Book an AI Build Readiness Audit™
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Micro-copy */}
        <p
          className="reveal text-sm text-muted-foreground mb-8"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          No commitment. No decks. A focused conversation about your engineering health.
        </p>

        {/* Email alternative */}
        <p className="reveal text-sm text-muted-foreground">
          Or reach us directly:{" "}
          <a
            href="mailto:nihit@datastunt.com"
            className="text-primary hover:underline"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            nihit@datastunt.com
          </a>
        </p>
      </div>
    </section>
  )
}
