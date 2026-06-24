"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Blog } from "../../types"
import Story from "./single-blog/story"

type Props = {
  stories: Blog[]
}

export function HeroCarousel({ stories }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, stories])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden -mt-[8vh]">

      {/* Sliding Carousel Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {stories.map((slide, index) => (
          <Story index={index} slide={slide} currentSlide={currentSlide} key={slide.id} />
        ))}
      </div>
      {/* Navigation Controls - Fixed at bottom */}
      <div className="absolute bottom-8 right-10 z-30">
        <div className="flex items-center space-x-3">
          <Button
            onClick={prevSlide}
            size="icon"
            className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2 px-4">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-8 shadow-md" : "bg-muted-foreground/40 hover:bg-muted-foreground/60 w-2"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            size="icon"
            className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-border"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

