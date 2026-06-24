"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Blog } from "../../types"
import Image from "next/image"

// Static fallback stories matching the doc
const fallbackStories = [
  {
    stat: "80%",
    statLabel: "Time Saved",
    title: "80% Time Saved on Expense Processing with Agentic IDP + Generative AI Workflow",
    summary:
      "Using OCR, Generative AI, and automation agents, a client cut expense processing time by over 80% — boosting compliance and satisfaction.",
    link: "https://blog.datastunt.com/category/stories/",
  },
  {
    stat: "60%",
    statLabel: "Faster Reporting",
    title: "Accelerating Compliance Reporting with RAG — 60% Faster with 100% Accuracy",
    summary:
      "A financial client reduced regulatory reporting time by 60% using a secure RAG pipeline with human verification.",
    link: "https://blog.datastunt.com/category/stories/",
  },
  {
    stat: "75%",
    statLabel: "Fewer Queries",
    title: "Building an Internal Knowledge Assistant That Cuts Employee Queries by 75%",
    summary:
      "A RAG-powered knowledge assistant reduced repetitive internal questions by 75%, improving onboarding and productivity across teams.",
    link: "https://blog.datastunt.com/category/stories/",
  },
]

type StoryCardProps = {
  stat: string
  statLabel: string
  title: string
  summary: string
  link: string
  imageUrl?: string
}

function StoryCard({ stat, statLabel, title, summary, link, imageUrl }: StoryCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal card-glass group overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-200"
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Stat — visual anchor */}
        <div className="mb-4">
          <span
            className="text-5xl font-bold text-foreground leading-none"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {stat}
          </span>
          <span
            className="block text-xs text-muted-foreground mt-1"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {statLabel}
          </span>
        </div>

        {/* Category tag */}
        <span
          className="text-xs text-accent mb-3"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          STORIES
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground mb-3 leading-snug line-clamp-2 flex-1">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-2">
          {summary}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent transition-colors duration-200">
          <span style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Read Full Article
          </span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </a>
  )
}

type Props = {
  stories?: Blog[]
}

export function StoriesSection({ stories }: Props) {
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
      { threshold: 0.1 }
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
          <span className="section-label">{"// STORIES"}</span>
        </div>

        {/* Headline */}
        <div className="reveal flex items-end justify-between mb-4 flex-wrap gap-4">
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Results, Not Promises.
          </h2>
          <a
            href="https://blog.datastunt.com/category/stories/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="reveal text-lg text-muted-foreground mb-16">
          Here&apos;s what happens when execution actually works.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {fallbackStories.map((story, i) => (
            <StoryCard
              key={i}
              stat={story.stat}
              statLabel={story.statLabel}
              title={story.title}
              summary={story.summary}
              link={
                stories?.[i]?.link ?? story.link
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
