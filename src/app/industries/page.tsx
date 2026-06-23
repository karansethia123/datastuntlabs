"use client"

import { Shield, Heart, ShoppingBag, Zap } from "lucide-react"
import { IndustrySection } from "@/components/industry-section"

const industries = [
  { name: "Insurance", icon: Shield, color: "text-sky-400" },
  { name: "Healthcare", icon: Heart, color: "text-sky-400" },
  { name: "Retail", icon: ShoppingBag, color: "text-sky-400" },
  { name: "SaaS", icon: Zap, color: "text-sky-400" },
]

const getIndustryDescription = (industryName: string) => {
  const descriptions = {
    Insurance:
      "AI-powered claims processing, risk assessment, and customer service automation.",
    Healthcare:
      "Streamline patient intake, digitize records, and accelerate billing workflows.",
    Retail:
      "Optimize inventory, personalize customer experiences, and automate operations.",
    SaaS: "Scale with intelligent automation, enhance user experiences, and optimize workflows.",
  }
  return descriptions[industryName as keyof typeof descriptions] || ""
}

const healthcareContent = {
  title: "Healthcare",
  description:
    "AI that reduces paperwork, accelerates intake, and improves staff efficiency.",
  whereItHelps: [
    "Patient intake forms & electronic health record digitization.",
    "Insurance claims & billing workflows.",
    "Internal knowledge bots for treatment guidelines & compliance.",
    "Medical coding & lab report extraction.",
  ],
  benefits: [
    "Free up doctors & staff from repetitive admin.",
    "Ensure compliance with accurate, structured data.",
    "Reduce patient wait times through faster intake & claims.",
  ],
  solutions: [
    "Document AI Suite → Digitize intake forms & billing.",
    "Knowledge AI Chatbot → Medical guidelines & compliance Q&A.",
    "Computer Vision Automation → Imaging & lab report structuring.",
  ],
  cta: "Explore Document AI Suite",
  ctaLink: "/document-suite",
  proof: "Pilot with healthcare provider → digitized intake forms, cutting processing time by 60% while maintaining high accuracy.",
}

const insuranceContent = {
  title: "Insurance",
  description:
    "AI that accelerates claims, improves compliance, and reduces manual review.",
  whereItHelps: [
    "Claims processing & form digitization.",
    "KYC document extraction & validation.",
    "Compliance-driven reporting & audit readiness.",
    "Policy & underwriting queries answered instantly.",
  ],
  benefits: [
    "Cut manual claims review by 50–70%.",
    "Reduce compliance errors with built-in validation.",
    "Faster claims turnaround → improved customer satisfaction.",
  ],
  solutions: [
    "Document AI Suite → Automate claims/KYC forms.",
    "Knowledge AI Chatbot → Policy Q&A & compliance answers.",
  ],
  cta: "See Document AI Suite",
  ctaLink: "/document-suite",
  proof: "Insurance client automated claims OCR → 80%+ straight-through processing, reducing operational load and speeding up payouts.",
}

const retailContent = {
  title: "Retail / E-commerce",
  description:
    "AI that makes catalogs faster, personalization sharper, and support smarter.",
  whereItHelps: [
    "Catalog tagging, product classification, & enrichment.",
    "Personalized campaigns & product images at scale.",
    "Customer FAQs answered instantly by chatbots.",
    "Visual quality checks for product photos & listings.",
  ],
  benefits: [
    "60% faster product launches.",
    "Increased engagement with personalized content.",
    "Improved customer trust through accurate listings & instant answers.",
  ],
  solutions: [
    "Computer Vision Automation → Catalog tagging.",
    "AI Marketing Assist → Personalized campaigns & images.",
    "Knowledge AI Chatbot → Customer FAQ automation.",
  ],
  cta: "See AI Marketing Assist",
  ctaLink: "/marketing-assist",
  proof: "E-commerce client automated catalog tagging → launch cycles cut by 60%, accuracy improved to 95%.",
}

const saasContent = {
  title: "SaaS / Technology",
  description:
    "AI that reduces ticket load, empowers sales, and drives adoption.",
  whereItHelps: [
    "Knowledge bots answering customer FAQs with citations.",
    "Internal support bots for engineering/IT queries.",
    "Automated onboarding & training assistance.",
    "Personalized marketing campaigns for faster adoption.",
  ],
  benefits: [
    "Reduce L1 ticket volume by 30%.",
    "Faster customer onboarding & self-service.",
    "Improved product adoption with personalized outreach.",
  ],
  solutions: [
    "Knowledge AI Chatbot → Customer onboarding & L1 support.",
    "AI Marketing Assist → Personalized outbound campaigns.",
  ],
  cta: "Explore Knowledge AI Chatbot ",
  ctaLink: "/rag",
  proof: "SaaS client deployed a RAG chatbot → 30% reduction in L1 tickets, while internal teams used it for faster onboarding.",
}

export default function Industries() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* ── Sub-page header — compact, not a landing hero ──────────────── */}
      <section className="pt-20 pb-16 px-6 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb-style label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="section-label">{"// Industries"}</span>
          </div>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f5f5] mb-4 leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            AI Execution Across Verticals
          </h1>
          <p
            className="text-lg text-[#737373] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            We build custom platforms and AI-powered tools to simplify your
            operations and help you scale. Our process makes it easy to bring
            your ideas to life.
          </p>
        </div>
      </section>

      {/* ── Industry overview cards ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-[#111111] border border-[rgba(255,255,255,0.06)] rounded-lg card-lift"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.15)] flex items-center justify-center mb-5 group-hover:border-sky-500/40 transition-colors duration-200">
                    <Icon className={`w-5 h-5 ${industry.color}`} />
                  </div>
                  <h3
                    className="text-base font-bold text-[#f5f5f5] mb-2"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {getIndustryDescription(industry.name)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Detailed industry sections ─────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-8">
          <IndustrySection {...insuranceContent} />
          <IndustrySection {...healthcareContent} />
          <IndustrySection {...retailContent} />
          <IndustrySection {...saasContent} />
        </div>
      </section>
    </main>
  )
}
