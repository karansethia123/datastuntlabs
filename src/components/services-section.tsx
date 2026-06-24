"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Search, Shield, Cog } from "lucide-react"
import Link from "next/link"

const offerings = [
  {
    icon: Search,
    name: "AI Build Readiness Audit™",
    role: "The Assessment Layer",
    description:
      "Understand the health of your engineering organization. Identify risks hiding beneath the surface. Create visibility where none existed — turning technical uncertainty into executive intelligence.",
    href: "/what-we-do#audit",
  },
  {
    icon: Shield,
    name: "AI Engineering Copilot™",
    role: "The Governance Layer",
    description:
      "Ongoing oversight that catches risk early, supports technical leadership, and prevents the compounding failures that kill velocity. Governance as a continuous function, not a quarterly meeting.",
    href: "/what-we-do#copilot",
  },
  {
    icon: Cog,
    name: "AI Development Operating System™",
    role: "The Transformation Layer",
    description:
      "Redesign how your engineering organization works with AI. Move beyond tool access to genuine organizational transformation — building repeatable systems that enable sustainable scale.",
    href: "/what-we-do#operating-system",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// THREE ENGAGEMENT TYPES"}</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-3 leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Assess. Govern. Transform.
        </h2>
        <p className="reveal text-lg text-muted-foreground mb-16 max-w-2xl">
          Three ways to work with Datastunt — each building on the last, all powered by the DAIRS™ framework.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {offerings.map(({ icon: Icon, name, role, description, href }) => (
            <div
              key={name}
              className="reveal card-glass group flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-200">
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </div>

              {/* Role tag */}
              <span
                className="text-xs text-primary font-bold uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {role}
              </span>

              {/* Name */}
              <h3
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {description}
              </p>

              {/* Link */}
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
