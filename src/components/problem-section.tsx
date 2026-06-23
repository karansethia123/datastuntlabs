"use client"

import { useEffect, useRef } from "react"
import { AlertTriangle, Eye, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    label: "Complexity Relocated",
    description:
      "AI didn't eliminate complexity — it moved it. Creation got dramatically easier, but governance became exponentially harder. The imbalance grows with every sprint.",
  },
  {
    icon: Eye,
    label: "Invisible Risk",
    description:
      "Reasonable short-term decisions — skip docs, defer refactors, delay security reviews — compound silently. Technical risk stays hidden until growth, funding rounds, or incidents expose it all at once.",
  },
  {
    icon: TrendingDown,
    label: "Expensive When It Surfaces",
    description:
      "By the time performance, security, and velocity problems surface, fixing them costs orders of magnitude more than preventing them would have. The faster you ship, the faster this debt accrues.",
  },
]

export function ProblemSection() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// THE REFRAME"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-6 max-w-3xl leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          AI changed where complexity lives — not whether it exists.
        </h2>

        {/* Body */}
        <p className="reveal text-lg text-[#737373] max-w-2xl mb-16 leading-relaxed">
          A new class of AI-native companies builds faster, iterates faster, and ships faster — but also accumulates risk faster. The bottleneck isn&apos;t creation anymore. It&apos;s governance.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="reveal card-lift bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-8 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] flex items-center justify-center flex-shrink-0 group-hover:border-[#0284c7] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#737373] group-hover:text-[#0284c7] transition-colors duration-200" />
                </div>
                <h3
                  className="text-base font-bold text-[#f5f5f5] mt-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {label}
                </h3>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed pl-14">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
