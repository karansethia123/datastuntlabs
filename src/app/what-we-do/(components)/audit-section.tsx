"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const dimensions = [
  { name: "Business & Product Understanding", description: "Business model, revenue generation, growth strategy, and strategic objectives." },
  { name: "Product Ecosystem Mapping", description: "Features, integrations, data flows, AI systems, vendor dependencies, and single points of failure." },
  { name: "Architecture Readiness Assessment", description: "System design, service boundaries, API architecture, scalability strategy, and governance." },
  { name: "Engineering Quality Assessment", description: "Repo structure, documentation, testing maturity, code review process, and onboarding complexity." },
  { name: "AI Systems Readiness Assessment", description: "Prompt management, retrieval quality, agent reliability, hallucination controls, and cost efficiency." },
  { name: "Infrastructure & Cloud Readiness", description: "Cloud architecture, CI/CD, disaster recovery, scalability, and operational resilience." },
  { name: "Security & Risk Assessment", description: "AuthN/AuthZ, secrets management, data exposure, compliance, and AI-specific security risks." },
  { name: "Operational Resilience Assessment", description: "Monitoring, alerting, incident management, runbooks, rollback safety, and support readiness." },
  { name: "Knowledge Resilience Assessment", description: "Documentation, knowledge sharing, decision tracking, key-person dependency, and organizational memory." },
]

const deliverables = [
  { audience: "Executive Leadership", items: "Executive summary and business/growth-readiness assessment" },
  { audience: "Technical Leadership", items: "Architecture, engineering, AI systems, and technical-debt reports" },
  { audience: "Investors", items: "Technology due-diligence summary and DAIRS benchmark report" },
  { audience: "Boards", items: "Risk dashboard and strategic roadmap" },
]

export function AuditSection() {
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
    <section id="audit" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="accent-line" />
          <span className="section-label">{"// THE ASSESSMENT LAYER"}</span>
        </div>

        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          AI Build Readiness Audit™
        </h2>

        <p className="reveal text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          The entry point into the Datastunt ecosystem. A comprehensive assessment designed to answer the one question leadership usually can&apos;t answer on their own: &ldquo;How prepared is our software organization for the next stage of growth?&rdquo;
        </p>

        {/* Why This Audit Exists */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Why This Audit Exists
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Software creation has been dramatically accelerated by AI, but governance hasn&apos;t kept pace. This creates a growing imbalance — organizations ship faster than ever while their ability to verify, secure, and maintain what they&apos;ve built lags further behind with each sprint. The Audit exists to close that gap by providing a clear, evidence-based picture of organizational readiness.
          </p>
        </div>

        {/* What We Are Actually Selling */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What We Are Actually Selling
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Clients often think they&apos;re buying an audit. What they&apos;re actually buying is confidence — the kind that comes from turning technical uncertainty into executive intelligence. The Audit produces visibility where none existed, giving leadership a clear-eyed view of what&apos;s working, what&apos;s fragile, and what needs attention before growth exposes it.
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
            The Audit is built for companies that already have a product, users, revenue, and real engineering or AI activity — not pre-launch or idea-stage companies.
          </p>
          <div className="reveal flex flex-wrap gap-3">
            {["Seed / Series A Startups", "Growth-Stage SaaS", "AI-Native Companies", "VC-Backed Businesses", "Pre-Fundraising / Pre-Acquisition"].map((tag) => (
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

        {/* What We Evaluate — Nine Dimensions */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What We Evaluate
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed mb-8">
            The Audit evaluates your organization as a complete system — focusing on how components interact rather than scoring isolated pieces. Nine dimensions provide full coverage:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-[4px] overflow-hidden">
            {dimensions.map(({ name, description }) => (
              <div key={name} className="reveal bg-background p-6 group hover:bg-primary/5 transition-colors">
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

        {/* The Role of DAIRS */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The Role of DAIRS™
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed">
            Every Audit is powered by DAIRS — the Datastunt AI Readiness &amp; Resilience System. Each of the nine dimensions feeds directly into DAIRS scores, producing quantifiable, comparable benchmarks rather than subjective opinions. <Link href="#dairs" className="text-primary hover:underline">Learn more about DAIRS →</Link>
          </p>
        </div>

        {/* Human + AI Delivery Model */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Human + AI Delivery Model
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed mb-4">
            AI systems accelerate the analytical layer — automated agents parse repositories, analyze code structure, map architecture, and surface patterns across large codebases in hours rather than weeks. But the final assessment is always human-owned. Interpretation, context, judgment, and recommendations come from experienced engineers and architects.
          </p>
          <p
            className="reveal text-sm text-primary font-bold"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            AI accelerates. Humans decide.
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What You Get
          </h3>
          <p className="reveal text-base text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Deliverables are tailored by audience — each stakeholder receives what they need, in the format they&apos;ll actually use:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map(({ audience, items }) => (
              <div key={audience} className="reveal bg-card border border-border rounded-[4px] p-6">
                <p
                  className="text-xs text-primary font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {audience}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It's the Front Door */}
        <div className="reveal border border-primary/20 rounded-[4px] p-8 bg-primary/5">
          <h3
            className="text-lg font-bold text-foreground mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Why It&apos;s the Front Door
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Audit is the natural entry point into deeper Datastunt engagements. It creates the visibility required for the Copilot to govern effectively, and it surfaces the systemic issues that the Operating System is designed to fix. Start here — everything else builds on what the Audit reveals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Book an AI Build Readiness Audit™
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
