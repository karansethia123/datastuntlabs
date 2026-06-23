import { ArrowRight } from "lucide-react"
import { Blog } from "../../types"
import { getBlogImages } from "@/data/api"
import Image from "next/image"

type CardProps = {
  blog: Blog
  category: string
}

async function BlogCard({ blog, category }: CardProps) {
  let imageUrl: string | null = null
  try {
    const img = await getBlogImages(blog.featured_media)
    imageUrl = img.guid.rendered.replaceAll("\\", "")
  } catch {
    // no image
  }

  const dateStr = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden flex flex-col card-lift"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-[#1a1a1a]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={blog.title.rendered}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1a1a1a]" />
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <span
          className="text-xs text-[#0284c7] mb-3"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-[#f5f5f5] mb-3 leading-snug line-clamp-2 flex-1">
          {blog.title.rendered}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-[#737373] leading-relaxed mb-4 line-clamp-2">
          {blog.excerpt.rendered.replace(/<[^>]+>/g, "")}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] pt-4">
          <span className="text-xs text-[#525252]">{dateStr}</span>
          <div className="flex items-center gap-1 text-xs text-[#737373] group-hover:text-[#0284c7] transition-colors">
            <span style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Read Article
            </span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </a>
  )
}

type Props = {
  insights: Blog[]
}

export function InsightsSection({ insights }: Props) {
  return (
    <section id="insights" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-7xl">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="section-label">{"// STRATEGIC INSIGHTS"}</span>
        </div>

        <div className="flex items-end justify-between mb-4 flex-wrap gap-4">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Deep-Dive Analysis for Builders and Operators.
          </h2>
          <a
            href="https://blog.datastunt.com/category/insights/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#0284c7] transition-colors"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-base text-[#737373] mb-12">
          Strategic perspectives on AI adoption, execution, and what&apos;s actually working for teams moving fast.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} category="INSIGHTS" />
          ))}
        </div>
      </div>
    </section>
  )
}
