"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle2, MapPin, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"

interface IndustrySectionProps {
  title: string
  description: string
  whereItHelps: string[]
  benefits: string[]
  solutions: string[]
  cta: string
  proof: string
  ctaLink: string
}

export const IndustrySection = ({
  title,
  description,
  whereItHelps,
  benefits,
  solutions,
  cta,
  proof,
  ctaLink,
}: IndustrySectionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Extract stat from proof if present
  const statMatch = proof.match(/(\d+[\+\-–]?\s*%|\d+x)/i)
  const proofStat = statMatch ? statMatch[0].trim() : null

  return (
    <div
      ref={ref}
      className="border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden bg-[#0d0d0d]"
    >
      {/* Header */}
      <div className="p-8 lg:p-10 border-b border-[rgba(255,255,255,0.06)]">
        <h2
          className="reveal text-2xl lg:text-3xl font-bold text-[#f5f5f5] mb-3"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {title}
        </h2>
        <p
          className="reveal text-base text-[#737373] leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          {description}
        </p>
      </div>

      <div className="p-8 lg:p-10 space-y-10">
        {/* Where it helps */}
        <div>
          <div className="reveal flex items-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-sky-500" />
            <h3
              className="text-sm font-bold text-[#d4d4d4] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.7rem" }}
            >
              Where It Helps
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {whereItHelps.map((item, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-3 p-3 rounded-md hover:bg-[rgba(2,132,199,0.04)] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-[#a3a3a3] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="reveal flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-sky-500" />
            <h3
              className="text-sm font-bold text-[#d4d4d4] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.7rem" }}
            >
              Benefits
            </h3>
          </div>
          <ul className="space-y-3">
            {benefits.map((item, i) => (
              <li key={i} className="reveal flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#d4d4d4] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <div className="reveal flex items-center gap-2 mb-5">
            <Lightbulb className="w-4 h-4 text-sky-500" />
            <h3
              className="text-sm font-bold text-[#d4d4d4] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.7rem" }}
            >
              Relevant Solutions
            </h3>
          </div>
          <ul className="space-y-3">
            {solutions.map((item, i) => (
              <li key={i} className="reveal flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#a3a3a3] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Proof */}
        <div className="reveal border border-[rgba(2,132,199,0.15)] rounded-md bg-[rgba(2,132,199,0.03)] p-6">
          <div className="flex items-start gap-4">
            {proofStat && (
              <span
                className="text-3xl font-bold text-sky-400 leading-none flex-shrink-0"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {proofStat}
              </span>
            )}
            <p className="text-sm text-[#a3a3a3] leading-relaxed italic">{proof}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal">
          <Link href={ctaLink}>
            <button className="btn-accent">
              {cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
