import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ICPSection } from "@/components/icp-section"
import { HowItWorks } from "@/components/how-it-works"
import { SocialProof } from "@/components/social-proof"
import { StoriesSection } from "@/components/stories-section"
import { InsightsSection } from "@/components/insights"
import { ArticlesSection } from "@/components/articles"
import { FinalCTA } from "@/components/final-cta"
import { getBlogArticles, getBlogInsights, getBlogStories } from "@/data/api"

export default async function Home() {
  
const stories = await getBlogStories()
const insights = await getBlogInsights()
const articles = await getBlogArticles()



  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ICPSection />
      <HowItWorks />
      <SocialProof />
      <StoriesSection stories={stories} />
      <InsightsSection insights={insights} />
      <ArticlesSection articles={articles} />
      <FinalCTA />
    </main>
  )
}
