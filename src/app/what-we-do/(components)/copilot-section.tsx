"use client"

import { useEffect, useRef } from "react"

const governanceAreas = [
  { name: "Architecture Governance", description: "Ongoing review of system design, service boundaries, data architecture, and build-vs-buy and migration decisions as the system evolves." },
  { name: "AI Systems Governance", description: "Controlling prompt and agent sprawl, managing model dependency, enforcing cost controls, monitoring reliability, and establishing AI governance policies." },
  { name: "Technical Debt Governance", description: "Maintaining visibility into debt accumulation and repayment, identifying high-risk areas, and prioritizing refactoring efforts." },
  { name: "Engineering Velocity Governance", description: "Tracking deployment frequency, cycle and lead times, review friction, and whether engineering activity translates into real business value." },
  { name: "Infrastructure Governance", description: "Cloud architecture review, scalability planning, disaster recovery, cost efficiency, and vendor dependency management as ongoing processes." },
  { name: "Security Governance", description: "Identity and access management, secrets handling, third-party and AI-specific security risk — treated as a continuous discipline, not a one-time project." },
  { name: "Organizational Readiness Governance", description: "Decision-making process health, documentation maturity, hiring readiness, and reducing key-person dependency across the organization." },
]

const cadence = [
  { frequency: "Weekly", activities: "Participation in engineering, architecture, AI, and risk reviews" },
  { frequency: "Monthly", activities: "Health reports, DAIRS progress tracking, risk assessments, and AI systems reports" },
  { frequency: "Quarterly", activities: "Strategic reviews covering roadmap, scalability planning, technology hiring, and due-diligence preparation" },
]

const team = [
  "Lead Engineering Copilot (strategic advisor & relationship owner)",
  "Principal Architect",
  "AI Systems Specialist",
  "Platform Engineer",
  "Optional domain experts (security, healthcare, fintech, etc.)",
]

export function CopilotSection() {
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
    <section id="copilot" ref={sectionRef} className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="accent-line" />
          <span className="section-label">{"// THE GOVERNANCE LAYER"}</span>
        </div>

        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          AI Engineering Copilot™
        </h2>

        <p className="reveal text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          Datastunt becomes your engineering governance layer — not a dev team, not outsourced engineering, not generic consultants. A dedicated function that ensures risk is caught early, decisions are informed, and growth happens on a stable foundation.
        </p>

        {/* The problem it solves */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The Problem It Solves
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Most organizations don&apos;t fail from a lack of intelligence — they fail from a lack of consistent governance. Reasonable short-term decisions (skip docs, delay refactors, defer security) compound silently until complexity becomes a real constraint on velocity. The Copilot provides the consistent oversight that prevents this accumulation.
          </p>
        </div>

        {/* Core philosophy */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Core Philosophy
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Engineering quality isn&apos;t about headcount — it&apos;s about systems, standards, and decision-making. Adding engineers to a weak system often accelerates problems rather than solving them. The Copilot focuses on strengthening the system itself, not adding more people to it.
          </p>
        </div>

        {/* Ideal Customer Profile */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Ideal Customer Profile
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed mb-4">
            Companies with a production platform, paying customers, a growing team, AI-powered features, and real operational dependencies.
          </p>
          <div className="reveal flex flex-wrap gap-3">
            {["Series A+ Startups", "Growth-Stage SaaS", "AI-Native Companies", "Venture-Backed Startups"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-border rounded-[4px] text-sm text-foreground bg-card"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Seven Governance Areas */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Seven Governance Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {governanceAreas.map(({ name, description }) => (
              <div key={name} className="reveal card-lift bg-background border border-border rounded-[4px] p-6 group">
                <h4
                  className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Cadence */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            How It Runs
          </h3>
          <div className="reveal border border-border rounded-[4px] overflow-hidden">
            {cadence.map(({ frequency, activities }, i) => (
              <div
                key={frequency}
                className={`grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] ${
                  i < cadence.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="px-6 py-5 border-r border-border flex items-center">
                  <span
                    className="text-sm font-bold text-primary"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {frequency}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-muted-foreground">{activities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Team */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Delivery Team
          </h3>
          <ul className="space-y-2">
            {team.map((member) => (
              <li key={member} className="reveal flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{member}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What clients are actually buying */}
        <div className="reveal border-l-2 border-primary pl-6 py-2">
          <p className="text-base text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">What you&apos;re buying is predictability:</span> confidence that risk is caught early, AI systems are governed responsibly, and growth is happening on a stable foundation — not on luck.
          </p>
        </div>
      </div>
    </section>
  )
}
