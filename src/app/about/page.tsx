"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const capabilities = [
  { tag: "01", title: "Document AI", desc: "OCR pipelines for claims, KYC, contracts, and forms." },
  { tag: "02", title: "Knowledge AI", desc: "RAG chatbots that answer with citations from your data." },
  { tag: "03", title: "Marketing Assist", desc: "Personalized campaigns and content at scale." },
  { tag: "04", title: "Computer Vision", desc: "Catalog tagging, defect detection, classification." },
]

const principles = [
  {
    num: "01",
    title: "Clarity over complexity",
    desc: "If it can't be explained simply, it won't scale. We strip jargon and ship what works.",
  },
  {
    num: "02",
    title: "Speed with discipline",
    desc: "Move fast — but keep compliance, reliability, and observability in check.",
  },
  {
    num: "03",
    title: "Trust through transparency",
    desc: "Clear timelines, weekly demos, no hidden surprises. You see the build as it happens.",
  },
  {
    num: "04",
    title: "Client success first",
    desc: "Your ROI is our north star. We measure outcomes, not deliverables.",
  },
]

const story = [
  {
    year: "2023",
    title: "Founded",
    desc: "Born from the conviction that businesses were overpaying for flashy AI that never reached production.",
  },
  {
    year: "The Gap",
    title: "Why we exist",
    desc: "Companies were spending months in 'AI exploration' without shipping anything that solved a real problem.",
  },
  {
    year: "Today",
    title: "How we operate",
    desc: "Lab-driven prototyping, business-first design, and execution-focused delivery from prototype to production.",
  },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const principlesRef = useRef<HTMLElement>(null)
  const founderRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

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
      { threshold: 0.12 }
    )
    ;[storyRef, principlesRef, founderRef, ctaRef].forEach((r) => {
      if (r.current) observer.observe(r.current)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden grid-bg noise-overlay"
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl py-32 md:py-40">
          {/* Label */}
          <div className="animate-fade-up animate-fade-up-1 flex items-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="section-label">{"// ABOUT US"}</span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up animate-fade-up-2 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#f5f5f5] mb-8 max-w-5xl"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            We&apos;re an AI lab built for{" "}
            <span className="text-[#0284c7]">outcomes,</span> not buzzwords.
          </h1>

          {/* Body */}
          <p
            className="animate-fade-up animate-fade-up-3 text-xl text-[#737373] leading-relaxed mb-12 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            DataStunt Labs helps businesses move beyond AI hype into practical,
            revenue-driven systems. We design and deploy custom AI across industries.
          </p>

          {/* Capability chips */}
          <div className="animate-fade-up animate-fade-up-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden">
            {capabilities.map(({ tag, title, desc }) => (
              <div
                key={tag}
                className="bg-[#0a0a0a] p-6 group hover:bg-[rgba(2,132,199,0.03)] transition-colors duration-200"
              >
                <span
                  className="block text-xs text-[#0284c7] mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {tag}
                </span>
                <h3
                  className="text-base font-bold text-[#f5f5f5] mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-24 px-6 bg-[#0d0d0d]">
        <div className="container mx-auto max-w-7xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="section-label">{"// OUR STORY"}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — headline */}
            <div className="lg:col-span-5">
              <h2
                className="reveal text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Why we exist,
                <br />
                <span className="text-[#0284c7]">explained.</span>
              </h2>
              <p className="reveal text-base text-[#737373] leading-relaxed mb-6">
                Founded in 2023 by{" "}
                <span className="text-[#f5f5f5] font-medium">Nihit Saxena</span>,
                DataStunt Labs was built differently — with a focus on
                lab-driven experimentation, business-first design, and
                execution that takes solutions from prototype to production.
              </p>
              <div className="reveal border-l-2 border-[#0284c7] pl-4">
                <p className="text-sm text-[#525252] leading-relaxed italic">
                  &ldquo;Most businesses were overpaying for AI that never
                  reached production. We started DataStunt to change that.&rdquo;
                </p>
              </div>
            </div>

            {/* Right — timeline */}
            <div className="lg:col-span-7">
              <div className="border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden">
                {story.map((s, i) => (
                  <div
                    key={s.year}
                    className={`reveal grid grid-cols-12 gap-4 px-8 py-6 ${
                      i < story.length - 1
                        ? "border-b border-[rgba(255,255,255,0.08)]"
                        : ""
                    } group hover:bg-[rgba(2,132,199,0.02)] transition-colors duration-200`}
                  >
                    <div
                      className="col-span-3 text-xs text-[#0284c7] uppercase tracking-widest pt-1"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {s.year}
                    </div>
                    <div className="col-span-9">
                      <h3
                        className="text-base font-bold text-[#f5f5f5] mb-1"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#737373] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section ref={principlesRef} className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="section-label">{"// HOW WE THINK"}</span>
          </div>

          <h2
            className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Four principles. Zero exceptions.
          </h2>
          <p className="reveal text-lg text-[#737373] mb-16 max-w-2xl">
            Everything we ship is filtered through these.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden">
            {principles.map(({ num, title, desc }) => (
              <div
                key={num}
                className="reveal card-lift bg-[#0a0a0a] p-10 group relative"
              >
                <span
                  className="absolute top-6 right-8 text-7xl font-bold text-[#f5f5f5] select-none pointer-events-none transition-opacity duration-200 group-hover:opacity-5"
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
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {num}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#f5f5f5] mb-3"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed max-w-md">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section ref={founderRef} className="py-24 px-6 bg-[#0d0d0d]">
        <div className="container mx-auto max-w-7xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="section-label">{"// LEADERSHIP"}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Animated SaaS illustration */}
            <div className="reveal lg:col-span-5">
              <div className="relative border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden bg-[#111111] p-6 flex items-center justify-center">
                <div
                  className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-[#0284c7] pointer-events-none"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-[#0284c7] pointer-events-none"
                  aria-hidden
                />
                <svg
                  viewBox="0 0 400 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-h-[420px]"
                  aria-label="SaaS AI platform illustration"
                >
                  {/* Dashboard frame */}
                  <rect x="40" y="40" width="320" height="220" rx="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="#0a0a0a" />
                  {/* Top bar */}
                  <rect x="40" y="40" width="320" height="32" rx="8" fill="#141414" />
                  <circle cx="62" cy="56" r="5" fill="#ef4444" opacity="0.7" />
                  <circle cx="80" cy="56" r="5" fill="#eab308" opacity="0.7" />
                  <circle cx="98" cy="56" r="5" fill="#22c55e" opacity="0.7" />

                  {/* Sidebar */}
                  <rect x="40" y="72" width="60" height="188" fill="#0f0f0f" />
                  <rect x="52" y="88" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
                  <rect x="52" y="104" width="36" height="6" rx="3" fill="#0284c7" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="52" y="120" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
                  <rect x="52" y="136" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
                  <rect x="52" y="152" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)" />

                  {/* Main content area — metric cards */}
                  <rect x="116" y="84" width="72" height="48" rx="4" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <rect x="126" y="96" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
                  <rect x="126" y="108" width="48" height="10" rx="3" fill="#0284c7" opacity="0.5">
                    <animate attributeName="width" values="48;56;48" dur="3s" repeatCount="indefinite" />
                  </rect>

                  <rect x="200" y="84" width="72" height="48" rx="4" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <rect x="210" y="96" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
                  <rect x="210" y="108" width="40" height="10" rx="3" fill="#22c55e" opacity="0.4">
                    <animate attributeName="width" values="40;52;40" dur="3.5s" repeatCount="indefinite" />
                  </rect>

                  <rect x="284" y="84" width="72" height="48" rx="4" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <rect x="294" y="96" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
                  <rect x="294" y="108" width="44" height="10" rx="3" fill="#eab308" opacity="0.4">
                    <animate attributeName="width" values="44;50;44" dur="2.8s" repeatCount="indefinite" />
                  </rect>

                  {/* Chart area */}
                  <rect x="116" y="146" width="240" height="100" rx="4" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  {/* Chart line */}
                  <polyline
                    points="130,226 160,210 190,218 220,195 250,200 280,178 310,185 340,168"
                    stroke="#0284c7"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  >
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                  </polyline>
                  {/* Chart gradient fill */}
                  <polygon
                    points="130,226 160,210 190,218 220,195 250,200 280,178 310,185 340,168 340,236 130,236"
                    fill="url(#chartGradient)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Floating AI nodes */}
                  <circle cx="80" cy="310" r="16" fill="#141414" stroke="#0284c7" strokeWidth="1.5" opacity="0.8">
                    <animate attributeName="cy" values="310;304;310" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="80" y="314" textAnchor="middle" fontSize="10" fill="#0284c7" fontFamily="monospace">AI</text>

                  <circle cx="200" cy="320" r="20" fill="#141414" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                    <animate attributeName="cy" values="320;312;320" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <text x="200" y="324" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="monospace">SaaS</text>

                  <circle cx="320" cy="310" r="16" fill="#141414" stroke="#22c55e" strokeWidth="1.5" opacity="0.7">
                    <animate attributeName="cy" values="310;306;310" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <text x="320" y="314" textAnchor="middle" fontSize="9" fill="#22c55e" fontFamily="monospace">API</text>

                  {/* Connection lines between nodes */}
                  <line x1="96" y1="310" x2="180" y2="320" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="strokeDashoffset" values="0;8" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="220" y1="320" x2="304" y2="310" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="strokeDashoffset" values="0;8" dur="1.5s" repeatCount="indefinite" />
                  </line>

                  {/* Pulse dot on chart */}
                  <circle cx="340" cy="168" r="4" fill="#0284c7">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <p
                className="reveal text-xs text-[#0284c7] mb-3 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Founder &amp; CEO
              </p>
              <h2
                className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Nihit Saxena
              </h2>
              <p className="reveal text-lg text-[#737373] leading-relaxed mb-8 max-w-xl">
                Entrepreneur, AI practitioner, and problem-solver. Nihit leads
                every engagement with a focus on real-world impact, not hype.
                His background spans machine learning, generative AI, and
                business automation across multiple domains.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Founder-led execution on every engagement",
                  "Hands-on across architecture, integration, and delivery",
                  "Aligned on outcomes — your KPIs are the brief",
                ].map((item) => (
                  <li
                    key={item}
                    className="reveal flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-[#0284c7] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#f5f5f5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-32 px-6 bg-[#111111] relative overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(2,132,199,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="section-label">{"// WHERE WE'RE HEADED"}</span>
            <span className="accent-line" />
          </div>

          <h2
            className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The partner you turn to when AI has to actually work.
          </h2>

          <p className="reveal text-lg text-[#737373] mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re automating documents, scaling customer knowledge,
            personalizing campaigns, or bringing order to visual data — we
            build the system, ship it, and stay to scale.
          </p>

          <div className="reveal">
            <Link href="/contact">
              <button className="btn-accent text-base px-10 py-5">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
