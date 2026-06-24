"use client"

import { getBlogImages } from "@/data/api"
import { Blog } from "../../../types"
import { Button } from "../ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import { useEffect, useState } from "react"

type Props = {
  slide: Blog,
  index: number,
  currentSlide: number,
}

const Story = ({ slide, currentSlide, index }: Props) => {

const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const image = await getBlogImages(slide.featured_media)
        if (!cancelled) setImageUrl(image.guid.rendered.replaceAll("\\", ""))
      } catch (e) {
        console.error("Failed to load image", e)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [slide])
  
  return (
    <div
      key={slide.id}
      className="min-w-full h-full relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
              }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/60 backdrop-blur-sm text-accent text-sm font-medium border border-border/50">
                Stories
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                {slide.title.rendered}
              </h1>
              <p className="text-xl text-muted-foreground font-content leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                {slide.excerpt.rendered.replace(/<[^>]+>/g, "")}
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Nihit Saxena</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{slide.date}</span>
                </div>
                <span>5 minute read</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <a href={slide.link} target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 cursor-pointer hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white border-0"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="https://blog.datastunt.com/category/stories/" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-white hover:bg-secondary/50 backdrop-blur-sm cursor-pointer bg-secondary/30"
                >
                  View All Stories
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
