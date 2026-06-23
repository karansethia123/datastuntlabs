"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const deliverables = [
  {
    num: "01",
    title: "AI Architecture Planning",
    description: "We map the right system before writing a line of code.",
  },
  {
    num: "02",
    title: "LLM Integrations",
    description: "Connect and orchestrate language models into your product.",
  },
  {
    num: "03",
    title: "AI Workflows & Agents",
    description: "Automate complex processes with AI-powered agent systems.",
  },
  {
    num: "04",
    title: "MVP Development",
    description: "End-to-end build from zero to functional product.",
  },
  {
    num: "05",
    title: "Internal Tools",
    description: "Operational AI tooling that saves your team hours per week.",
  },
  {
    num: "06",
    title: "Deployment & Iteration",
    description: "We ship, then stay to scale.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// WHAT WE BUILD"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-3 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          The AI Build Sprint
        </h2>
        <p className="reveal text-lg text-[#737373] mb-16">
          Design and ship AI products and features in 14–21 days.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden mb-12">
          {deliverables.map(({ num, title, description }) => (
            <div
              key={num}
              className="reveal card-lift bg-[#0a0a0a] p-8 group relative"
            >
              {/* Number — large faded behind */}
              <span
                className="absolute top-4 right-6 text-6xl font-bold text-[#f5f5f5] select-none pointer-events-none transition-opacity duration-200 group-hover:opacity-5"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  opacity: 0.06,
                }}
              >
                {num}
              </span>

              <div className="relative z-10">
                <span
                  className="block text-xs text-[#0284c7] mb-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {num}
                </span>
                <h3
                  className="text-base font-bold text-[#f5f5f5] mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.08)] mb-12" />

        {/* CTA */}
        <div className="reveal text-center">
          <Link href="/contact">
            <button className="btn-accent text-base px-8 py-4">
              Start Your Build Sprint
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
