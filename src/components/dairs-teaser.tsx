"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function DAIRSTeaser() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-7xl">
        <div className="reveal border border-[rgba(2,132,199,0.2)] rounded-[4px] p-10 md:p-14 bg-[rgba(2,132,199,0.02)] relative overflow-hidden">
          {/* Subtle glow */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <span className="section-label">{"// THE MEASUREMENT FRAMEWORK"}</span>
            </div>

            {/* Headline */}
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              DAIRS™ — The Datastunt AI Readiness &amp; Resilience System
            </h2>

            {/* Description */}
            <p className="text-base text-[#a3a3a3] leading-relaxed mb-4">
              Behind every Datastunt engagement is DAIRS — a comprehensive framework that measures engineering health, resilience, scalability, governance maturity, and long-term sustainability. The Audit scores it. The Copilot monitors it. The Operating System improves it.
            </p>

            <p className="text-sm text-[#737373] leading-relaxed mb-8">
              Our long-term vision: DAIRS becomes the industry-standard engineering-readiness benchmark — the way audited financial statements are the common language of financial health, DAIRS becomes the common language of technology risk. Used by founders, CTOs, investors, and boards alike.
            </p>

            {/* CTA */}
            <Link
              href="/what-we-do#dairs"
              className="inline-flex items-center gap-2 text-sm text-[#0284c7] hover:text-sky-400 transition-colors font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Explore the DAIRS Framework
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
