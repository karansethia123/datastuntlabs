import { AuditSection } from "./(components)/audit-section"
import { CopilotSection } from "./(components)/copilot-section"
import { OperatingSystemSection } from "./(components)/operating-system-section"
import { DAIRSSection } from "./(components)/dairs-section"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhatWeDo() {
  return (
    <main className="bg-background">
      {/* Page Hero */}
      <section className="relative py-32 px-6 overflow-hidden section-glow">
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="animate-fade-up animate-fade-up-1 mb-6 flex items-center gap-3">
              <span className="accent-line" />
              <span className="section-label">{"// WHAT WE DO"}</span>
            </div>
            <h1
              className="animate-fade-up animate-fade-up-2 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] text-foreground mb-6"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Assess. Govern. Transform.
            </h1>
            <p className="animate-fade-up animate-fade-up-3 text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Datastunt&apos;s three engagement types work together as a connected system — each building on the last, all powered by DAIRS™. The Audit creates visibility. The Copilot maintains governance. The Operating System drives transformation.
            </p>
            <div className="animate-fade-up animate-fade-up-4 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="btn-accent">
                  Book an Audit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AuditSection />
      <CopilotSection />
      <OperatingSystemSection />
      <DAIRSSection />
    </main>
  )
}
