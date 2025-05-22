"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface PerfectCarouselProps {
  images: string[]
  autoPlayInterval?: number
}

export default function PerfectCarousel({ images, autoPlayInterval = 5000 }: PerfectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate indices for the 3-slide view
  const getIndices = () => {
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    return { prevIndex, activeIndex, nextIndex }
  }

  const { prevIndex, nextIndex } = getIndices()

  // Handle automatic sliding
  useEffect(() => {
    if (isPaused) return

    const startTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        handleNext()
      }, autoPlayInterval)
    }

    startTimer()

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeIndex, isPaused, autoPlayInterval])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("next")
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("prev")
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setDirection(index > activeIndex ? "next" : "prev")
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  // Get transition classes based on direction and animation state
  const getTransitionClasses = (index: number) => {
    if (index === activeIndex) {
      return "z-30 opacity-100 scale-100 translate-x-0"
    } else if (index === prevIndex) {
      return `z-20 opacity-60 scale-90 -translate-x-[60%] ${direction === "prev" && isAnimating ? "transition-transform duration-600" : ""}`
    } else if (index === nextIndex) {
      return `z-20 opacity-60 scale-90 translate-x-[60%] ${direction === "next" && isAnimating ? "transition-transform duration-600" : ""}`
    } else {
      return "opacity-0 scale-75 translate-x-full"
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0a1622] py-8 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-yellow-300 text-2xl md:text-3xl text-center mb-8 animate-glow pixel-text-highlight">
          Game Previews
        </h2>

        {/* Carousel container */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mx-auto">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-40 bg-gradient-to-r from-[#0a1622] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-40 bg-gradient-to-l from-[#0a1622] to-transparent pointer-events-none"></div>

          {/* Images */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-600 ease-in-out transform ${getTransitionClasses(index)}`}
              >
                <div className="relative w-[80%] h-[90%] overflow-hidden rounded-lg border-2 border-gray-700 shadow-2xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Game preview ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
                    priority={index === activeIndex}
                  />

                  {/* Overlay with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="font-pixel text-white text-sm md:text-base lg:text-lg pixel-text-highlight">
                      Game Preview {index + 1}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous slide"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/left-FZWO8z9Dy3Tx9pCIzSSfvqvHHLDv72.png"
                alt="Previous"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next slide"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/right-wXa6MUNJ9vZ3LSCnH0xjRsqMxU1fQv.png"
                alt="Next"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index ? "bg-red-600 w-6" : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
