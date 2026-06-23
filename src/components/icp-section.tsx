"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

const fits = [
  "You have a product roadmap",
  "You're discussing AI publicly or already building with it",
  "You have urgency — shipping delays are costing you",
  "You need execution speed, not more opinions",
]

const personas = ["Ed-Tech", "Health Care", "IT - Software", "Enterprises"]

export function ICPSection() {
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
    <section id="who-we-work-with" ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// WHO WE WORK WITH"}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="reveal text-[clamp(2rem,4vw,3rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Built for Builders,<br />Not Explorers.
            </h2>
            <p className="reveal text-lg text-[#737373] mb-10 leading-relaxed">
              We work best with teams that are already moving — not teams still
              deciding whether AI matters.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-10">
              {fits.map((fit) => (
                <li key={fit} className="reveal flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#f5f5f5]">{fit}</span>
                </li>
              ))}
            </ul>

            {/* Not a fit */}
            <div className="reveal border-l-2 border-[rgba(255,255,255,0.08)] pl-4">
              <p className="text-sm text-[#525252] leading-relaxed">
                We&apos;re probably not the right fit if you&apos;re exploring AI without a
                product direction, have no timeline, or need months of strategy
                before committing to build.
              </p>
            </div>
          </div>

          {/* Right — persona chips + callout */}
          <div>
            <p
              className="reveal section-label mb-6"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Industries that reaches out:
            </p>
            <div className="reveal flex flex-wrap gap-3 mb-12">
              {personas.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 border border-[rgba(255,255,255,0.12)] rounded-[4px] text-sm text-[#f5f5f5] bg-[#111111]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Callout box */}
            <div className="reveal border border-[rgba(2,132,199,0.2)] rounded-[4px] p-8 bg-[rgba(2,132,199,0.03)]">
              <p
                className="text-xs text-[#0284c7] mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {"// THE SIGNAL"}
              </p>
              <p className="text-[#f5f5f5] text-lg font-medium leading-relaxed">
                &ldquo;You&apos;re already building. You just need someone who can
                execute at the speed your roadmap demands.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
