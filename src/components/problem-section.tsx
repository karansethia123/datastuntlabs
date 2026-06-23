"use client"

import { useEffect, useRef } from "react"
import { Zap, Wrench, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Zap,
    label: "Execution Bottlenecks",
    description:
      "Prototypes exist. Production doesn't. The gap between demo and deployed is where most teams get stuck.",
  },
  {
    icon: Wrench,
    label: "Overloaded Teams",
    description:
      "Your engineers are busy. Hiring takes months. The roadmap keeps slipping.",
  },
  {
    icon: TrendingUp,
    label: "Speed Kills Deals",
    description:
      "Investors funded the vision. Delays erode confidence. Speed is now a competitive advantage.",
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
          <span className="section-label">{"// THE PROBLEM"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-6 max-w-2xl leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Most startups aren&apos;t failing for lack of ideas.
        </h2>

        {/* Body */}
        <p className="reveal text-lg text-[#737373] max-w-2xl mb-16 leading-relaxed">
          They&apos;re failing because execution is slow, technical teams are overloaded,
          AI systems are hard to productionize, and roadmap delays kill momentum.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="reveal card-lift bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-8 group"
            >
              {/* Left accent border on hover */}
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
