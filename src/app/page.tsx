import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { DAIRSTeaser } from "@/components/dairs-teaser"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <DAIRSTeaser />
      <FinalCTA />
    </main>
  )
}
