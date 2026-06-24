"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "DataStunt helped us go from a prototype that had been stuck for 3 months to a live product in under 3 weeks. They operate like a senior engineering team that already knows your stack.",
    name: "Founder",
    title: "Seed Stage Startup",
    stage: "Seed",
  },
  {
    quote:
      "We needed someone who could move fast without hand-holding. DataStunt delivered a production-ready AI pipeline in 18 days. No fluff, no delays.",
    name: "CTO",
    title: "Series A SaaS Company",
    stage: "Series A",
  },
  {
    quote:
      "The team understood our domain immediately. They didn't just build what we asked — they flagged what wouldn't work and shipped something better.",
    name: "Head of Product",
    title: "Enterprise AI Team",
    stage: "Series A",
  },
]

export function SocialProof() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// BUILT FOR PEOPLE LIKE YOU"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-16 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Startups Moving Fast Trust DataStunt Labs.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map(({ quote, name, title, stage }) => (
            <div
              key={name}
              className="reveal card-lift bg-card border border-border rounded-[4px] p-8 flex flex-col"
            >
              {/* Accent quote mark */}
              <span
                className="text-5xl text-primary leading-none mb-4 select-none"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <blockquote className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                {quote}
              </blockquote>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{title}</p>
                </div>
                <span
                  className="text-xs px-2 py-1 border border-primary/30 text-primary rounded-[4px]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {stage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
