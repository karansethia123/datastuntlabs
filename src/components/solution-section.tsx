"use client"

import { useEffect, useRef } from "react"
import { X, Check } from "lucide-react"

const contrast = [
  { not: "A dev shop", are: "An engineering governance firm" },
  { not: "A staffing company", are: "A strategic oversight layer" },
  { not: "Traditional consultants", are: "Embedded governance partners" },
  { not: "Implementation outsourcing", are: "Risk prevention & system resilience" },
]

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// WHAT DATASTUNT DOES"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-6 max-w-3xl leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          AI-Native Engineering Governance.
        </h2>

        {/* Body */}
        <p className="reveal text-lg text-[#737373] max-w-2xl mb-6 leading-relaxed">
          Datastunt isn&apos;t a dev shop, a staffing firm, or a traditional consultancy. We operate in a category we&apos;re defining: AI-Native Engineering Governance — sitting above implementation to focus on whether the systems being built can survive long-term growth.
        </p>

        <p className="reveal text-base text-[#525252] max-w-2xl mb-16 leading-relaxed">
          Every software company eventually becomes limited by one of two things — running out of customers, or running out of engineering quality. We exist to make sure it&apos;s never the latter.
        </p>

        {/* Contrast table */}
        <div className="reveal border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-2 border-b border-[rgba(255,255,255,0.08)]">
            <div
              className="px-8 py-4 text-xs font-bold text-[#525252] uppercase tracking-widest border-r border-[rgba(255,255,255,0.08)]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              We&apos;re NOT
            </div>
            <div
              className="px-8 py-4 text-xs font-bold text-[#0284c7] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              We ARE
            </div>
          </div>

          {/* Rows */}
          {contrast.map(({ not, are }, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${
                i < contrast.length - 1 ? "border-b border-[rgba(255,255,255,0.08)]" : ""
              } group hover:bg-[rgba(2,132,199,0.02)] transition-colors duration-200`}
            >
              <div className="px-8 py-5 flex items-center gap-3 border-r border-[rgba(255,255,255,0.08)]">
                <X className="w-4 h-4 text-[#525252] flex-shrink-0" />
                <span className="text-sm text-[#525252]">{not}</span>
              </div>
              <div className="px-8 py-5 flex items-center gap-3">
                <Check className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                <span className="text-sm text-[#f5f5f5] font-medium">{are}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
