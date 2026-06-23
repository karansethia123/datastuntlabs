"use client"

import { useEffect, useRef } from "react"

const transformationAreas = [
  { name: "AI Engineering Standards", description: "Prompt, context, AI-review, agent-usage, and output-validation standards that replace every-engineer-does-it-differently chaos with consistent, governed practice." },
  { name: "Context Engineering Systems", description: "Redesigning how organizational knowledge, documentation, and decisions are stored — ensuring AI systems always have access to high-quality context." },
  { name: "Repository Intelligence Architecture", description: "Restructuring repositories so they're discoverable and legible to both humans and AI agents, not just humans working in isolation." },
  { name: "AI Workflow Design", description: "Purpose-built workflows for feature development, bug fixes, code reviews, testing, documentation, incident response, and onboarding." },
  { name: "Agent Architecture Design", description: "Defined responsibilities, boundaries, monitoring, escalation paths, and human-oversight requirements for every AI agent in the system." },
  { name: "Knowledge Operating System", description: "Unifying playbooks, prompt libraries, decision registries, and runbooks into one accessible, AI-compatible knowledge base." },
  { name: "Engineering Governance Framework", description: "Embedding the Copilot's governance model into daily operations — making governance a natural part of how work happens, not a bolt-on process." },
  { name: "AI Adoption & Change Management", description: "Education, incentives, and adoption tracking — because transformation usually fails on people, not technology." },
]

const phases = [
  { name: "Discovery", description: "Baseline current workflows, standards, and governance practices" },
  { name: "Operating System Design", description: "Target-state blueprint: standards, processes, knowledge architecture, AI workflows, and success metrics" },
  { name: "Implementation", description: "Deploy documentation systems, restructure repos, stand up prompt libraries, establish governance, run training" },
  { name: "Optimization", description: "Measure adoption, refine processes, evolve the system as the organization grows" },
]

const deliverables = [
  { group: "Standards & Governance", items: ["AI Engineering Playbook", "Governance Framework", "Prompt & Context Engineering Standards"] },
  { group: "Architecture & Systems", items: ["Repository Standards", "Knowledge Management Architecture", "Agent Governance Model"] },
  { group: "Enablement & Roadmap", items: ["Training Curriculum", "Transformation Roadmap", "DAIRS Benchmark Report"] },
]

const team = [
  "Transformation Lead",
  "Principal Architect",
  "AI Systems Specialist",
  "Knowledge Systems Architect",
  "Platform Engineer",
  "Engineering Operations Specialist",
  "Change Management Advisor",
]

export function OperatingSystemSection() {
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
    <section id="operating-system" ref={sectionRef} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="accent-line" />
          <span className="section-label">{"// THE TRANSFORMATION LAYER"}</span>
        </div>

        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          AI Development Operating System™
        </h2>

        <p className="reveal text-lg text-[#737373] max-w-3xl mb-16 leading-relaxed">
          Not training. Not generic consulting. Not a tooling rollout. This is organizational transformation — a new operating model for how engineering work happens, producing sustainable velocity and genuine organizational intelligence.
        </p>

        {/* The Industry Problem */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The Industry Problem
          </h3>
          <p className="reveal text-base text-[#737373] max-w-3xl leading-relaxed">
            Most companies hand engineers AI tools — Claude Code, Cursor, Copilot — and hope productivity follows. What actually happens: fragmented prompt libraries, inconsistent workflows, scattered knowledge, and a new failure mode we call &ldquo;AI Operational Debt.&rdquo; Giving people tool access is not the same as building an AI-native organization.
          </p>
        </div>

        {/* Core Mission */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Core Mission
          </h3>
          <p className="reveal text-base text-[#737373] max-w-3xl leading-relaxed">
            Get human expertise and AI working together through structured, repeatable, governed systems. The goal isn&apos;t maximum automation — it&apos;s maximum leverage.
          </p>
        </div>

        {/* The Shift */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The Shift in How Software Gets Made
          </h3>
          <div className="reveal grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6">
              <p className="text-xs font-bold text-[#525252] uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Before</p>
              <div className="flex items-center gap-3 text-sm text-[#737373]">
                <span className="text-[#f5f5f5] font-medium">Human Engineers</span>
                <span className="text-[#525252]">→</span>
                <span>Code</span>
                <span className="text-[#525252]">→</span>
                <span>Software</span>
              </div>
            </div>
            {/* After */}
            <div className="bg-[#111111] border border-[rgba(2,132,199,0.3)] rounded-[4px] p-6">
              <p className="text-xs font-bold text-[#0284c7] uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>After</p>
              <div className="flex items-center gap-3 text-sm text-[#737373] flex-wrap">
                <span className="text-[#f5f5f5] font-medium">Human Engineers</span>
                <span className="text-[#525252]">→</span>
                <span className="text-sky-400 font-medium">Context</span>
                <span className="text-[#525252]">→</span>
                <span className="text-sky-400 font-medium">AI Systems</span>
                <span className="text-[#525252]">→</span>
                <span>Code</span>
                <span className="text-[#525252]">→</span>
                <span>Software</span>
              </div>
            </div>
          </div>
          <p className="reveal text-sm text-[#525252] mt-4 max-w-3xl leading-relaxed">
            The organizations that win won&apos;t be the ones writing the most code — they&apos;ll be the ones creating the best context. Context is what fuels AI output quality.
          </p>
        </div>

        {/* Eight Transformation Areas */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Eight Transformation Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {transformationAreas.map(({ name, description }) => (
              <div key={name} className="reveal card-lift bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-5 group">
                <h4
                  className="text-sm font-bold text-[#f5f5f5] mb-2 group-hover:text-sky-400 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {name}
                </h4>
                <p className="text-xs text-[#737373] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How the Engagement Runs */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            How the Engagement Runs
          </h3>
          <div className="reveal grid md:grid-cols-4 gap-4">
            {phases.map(({ name, description }, i) => (
              <div key={name} className="relative">
                <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-5 h-full">
                  <span
                    className="block text-xs text-[#0284c7] font-bold mb-2"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Phase {i + 1}
                  </span>
                  <h4
                    className="text-sm font-bold text-[#f5f5f5] mb-2"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {name}
                  </h4>
                  <p className="text-xs text-[#737373] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What Clients Receive
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {deliverables.map(({ group, items }) => (
              <div key={group} className="reveal bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6">
                <p
                  className="text-xs text-[#0284c7] font-bold uppercase tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {group}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#525252] flex-shrink-0" />
                      <span className="text-sm text-[#a3a3a3]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Structure */}
        <div className="mb-16">
          <h3
            className="reveal text-xl font-bold text-[#f5f5f5] mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Team Structure
          </h3>
          <ul className="space-y-2">
            {team.map((member) => (
              <li key={member} className="reveal flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] flex-shrink-0" />
                <span className="text-sm text-[#a3a3a3]">{member}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Relationship to DAIRS */}
        <div className="reveal border-l-2 border-[#0284c7] pl-6 py-2">
          <p className="text-base text-[#a3a3a3] leading-relaxed">
            <span className="text-[#f5f5f5] font-medium">The closed loop:</span> The Audit identifies weaknesses. The Copilot monitors them. The Operating System fixes them. All three are mapped against DAIRS dimensions, creating a continuous feedback cycle that compounds organizational resilience over time.
          </p>
        </div>
      </div>
    </section>
  )
}
