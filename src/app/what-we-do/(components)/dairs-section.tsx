"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const dimensions = [
  { name: "Architecture Resilience", weight: "15%", description: "How well your architecture can evolve without breaking under change or growth." },
  { name: "Engineering Quality", weight: "15%", description: "The maintainability, readability, and long-term health of your codebase and engineering practices." },
  { name: "Operational Reliability", weight: "12%", description: "Your systems' ability to recover gracefully from failures and maintain availability." },
  { name: "Security Readiness", weight: "12%", description: "Exposure to preventable security risks across infrastructure, code, and AI systems." },
  { name: "AI Governance", weight: "12%", description: "How controllable, trustworthy, and well-governed your AI systems are in production." },
  { name: "Scalability Readiness", weight: "10%", description: "Preparedness for growth in users, data, and operational complexity." },
  { name: "Knowledge Resilience", weight: "7%", description: "Dependency on specific individuals vs. durable organizational knowledge systems." },
  { name: "Delivery Velocity", weight: "6%", description: "Sustainable execution speed — not just activity, but value delivered consistently." },
  { name: "Organizational Readiness", weight: "6%", description: "Leadership, process maturity, and the organization's ability to make good decisions quickly." },
  { name: "Cost Efficiency", weight: "5%", description: "Sustainability of current spend patterns relative to value produced." },
]

const maturityLevels = [
  { level: 1, name: "Reactive", description: "No formal systems. Success depends on individuals." },
  { level: 2, name: "Emerging", description: "Basic practices exist. Knowledge is fragmented." },
  { level: 3, name: "Structured", description: "Documented, repeatable processes in place." },
  { level: 4, name: "Managed", description: "Measured performance. Enforced governance." },
  { level: 5, name: "Adaptive", description: "Continuous improvement. Governance scales naturally." },
]

const outputs = [
  "Overall Score (0–100)",
  "Readiness Score",
  "Resilience Score",
  "Scalability Score",
  "Governance Score",
  "AI Trust Score",
  "Technical Debt Index",
  "Operational Risk Index",
]

export function DAIRSSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 40)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="dairs" ref={sectionRef} className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="accent-line" />
          <span className="section-label">{"// THE MEASUREMENT FRAMEWORK"}</span>
        </div>

        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          DAIRS™: The Datastunt AI Readiness &amp; Resilience System
        </h2>

        <p className="reveal text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          A comprehensive framework that measures the health, resilience, scalability, governance maturity, and long-term sustainability of modern software organizations. Created because software creation has been automated while software governance has not — so risk accumulates invisibly until growth, incidents, due diligence, or key-person departures expose it.
        </p>

        {/* What it is NOT */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What DAIRS Is Not
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            DAIRS is not a code review, not a security scan, not a cloud audit, not a compliance framework, and not an &ldquo;AI assessment tool.&rdquo; It evaluates organizations as complete systems — how technology, people, process, infrastructure, and AI interact — rather than scoring isolated weak points.
          </p>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Philosophy
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Sustainable growth requires balancing competing tensions: speed vs. stability, innovation vs. governance, autonomy vs. accountability, AI automation vs. human oversight, growth vs. resilience. The goal of DAIRS isn&apos;t a perfect system — it&apos;s a system that can adapt and survive.
          </p>
        </div>

        {/* Ten Dimensions */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Ten Dimensions
          </h3>
          <div className="reveal border border-border rounded-[4px] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_80px] md:grid-cols-[200px_1fr_80px] border-b border-border bg-muted">
              <div className="px-6 py-3">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Dimension</span>
              </div>
              <div className="hidden md:block px-6 py-3">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>What It Measures</span>
              </div>
              <div className="px-6 py-3 text-right">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Weight</span>
              </div>
            </div>
            {/* Rows */}
            {dimensions.map(({ name, weight, description }, i) => (
              <div
                key={name}
                className={`grid grid-cols-[1fr_80px] md:grid-cols-[200px_1fr_80px] ${
                  i < dimensions.length - 1 ? "border-b border-border" : ""
                } hover:bg-primary/5 transition-colors`}
              >
                <div className="px-6 py-4">
                  <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{name}</span>
                </div>
                <div className="hidden md:block px-6 py-4">
                  <span className="text-sm text-muted-foreground">{description}</span>
                </div>
                <div className="px-6 py-4 text-right">
                  <span className="text-sm font-bold text-primary" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{weight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Five Maturity Levels */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Five Maturity Levels
          </h3>
          <div className="reveal grid grid-cols-2 md:grid-cols-5 gap-3">
            {maturityLevels.map(({ level, name, description }) => (
              <div key={level} className="bg-background border border-border rounded-[4px] p-4 text-center">
                <span
                  className="block text-2xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {level}
                </span>
                <span
                  className="block text-sm font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {name}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Outputs
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed mb-6">
            DAIRS produces more than a single score. Each assessment generates a multi-dimensional view of organizational health:
          </p>
          <div className="reveal flex flex-wrap gap-3">
            {outputs.map((output) => (
              <span
                key={output}
                className="px-4 py-2 border border-border rounded-[4px] text-sm text-foreground bg-background"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {output}
              </span>
            ))}
          </div>
        </div>

        {/* Evidence-driven */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Evidence-Driven
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            DAIRS scores are never based on interviews alone. Evidence includes repositories, documentation, infrastructure configurations, monitoring and incident data, architecture diagrams, and prompt/agent configurations — alongside structured leadership and engineering interviews. This ensures assessments reflect reality, not self-reported perceptions.
          </p>
        </div>

        {/* Long-term vision */}
        <div className="reveal border border-primary/20 rounded-[4px] p-8 bg-primary/5 mb-12">
          <h3
            className="text-lg font-bold text-foreground mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Long-Term Vision
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            DAIRS is intended to become the common language of engineering readiness — the way audited financial statements serve as the common language of financial health. A benchmark used by founders, CTOs, boards, and investors alike to evaluate technology risk, make investment decisions, and hold engineering organizations accountable for sustainable quality.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Get Your DAIRS Score
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
