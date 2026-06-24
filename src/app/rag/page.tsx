import { ragService } from "@/data/services/service-data"
import { ServiceDetailsView } from "@/components/service-details"
import { ArticlesSection } from "@/components/articles"
import { getBlogArticles } from "@/data/api"

export default async function KnowledgeAIServicePage() {
 
   const articles = await getBlogArticles()
  

  return (
    <main className="bg-background min-h-screen">
      <ServiceDetailsView service={ragService} />
      <ArticlesSection articles={articles} />
    </main>
  )
}
