"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We learn your product, your team, and where execution is breaking down. No pitch. Just questions.",
  },
  {
    num: "02",
    title: "AI Build Plan",
    description:
      "Within 24–48 hours, you receive a concise execution proposal: scope, timeline, deliverables, cost.",
  },
  {
    num: "03",
    title: "Sprint Begins",
    description:
      "We architect, integrate, and build — with weekly check-ins and working demos throughout.",
  },
  {
    num: "04",
    title: "Ship & Scale",
    description:
      "You get a production-ready product. We stay available for iteration and next sprints.",
  },
]

export function HowItWorks() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// HOW IT WORKS"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-16 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Four Steps from Conversation to Shipped.
        </h2>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[rgba(255,255,255,0.08)]" />
          {/* Accent progress line */}
          <div className="hidden lg:block absolute top-8 left-0 w-1/4 h-px bg-[#0284c7]" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, description }, i) => (
              <div key={num} className="reveal relative">
                {/* Step dot (desktop) */}
                <div
                  className={`hidden lg:flex w-4 h-4 rounded-full border-2 mb-8 ${
                    i === 0
                      ? "border-[#0284c7] bg-[#0284c7]"
                      : "border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]"
                  }`}
                />

                {/* Number — large faded */}
                <span
                  className="block text-[5rem] font-bold leading-none mb-4 select-none"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "rgba(245,245,245,0.04)",
                  }}
                >
                  {num}
                </span>

                <h3
                  className="text-base font-bold text-[#f5f5f5] mb-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
