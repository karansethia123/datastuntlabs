import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { DAIRSTeaser } from "@/components/dairs-teaser"
import { FinalCTA } from "@/components/final-cta"
import { ICPSection } from "@/components/icp-section"

import { getBlogArticles, getBlogInsights, getBlogStories } from "@/data/api"
import { StoriesSection } from "@/components/stories-section"
import { InsightsSection } from "@/components/insights"
import { ArticlesSection } from "@/components/articles"
import { HowItWorks } from "@/components/how-it-works"

export default async function Home() {

  const stories = await getBlogStories()
  const insights = await getBlogInsights()
  const articles = await getBlogArticles()

  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ICPSection />
      <ServicesSection />
      <DAIRSTeaser />
      <HowItWorks />
      <StoriesSection stories={stories} />
      <InsightsSection insights={insights} />
      <ArticlesSection articles={articles} />
      <FinalCTA />
    </main>
  )
}
