"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CustomCarouselProps {
  images: string[]
  autoPlayInterval?: number
  showArrows?: boolean
  showIndicators?: boolean
  className?: string
}

export default function CustomCarousel({
  images,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = true,
  className = "",
}: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const carouselRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  // Initialize slide refs
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, images.length)
  }, [images.length])

  // Handle auto-play
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext()
      }
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning, isPaused, autoPlayInterval])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isTransitioning])

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection("next")
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection("prev")
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setDirection(index > currentIndex ? "next" : "prev")
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  // Get previous and next indices for the 3D effect
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1

  // Get transition classes based on index and direction
  const getSlideClasses = (index: number) => {
    if (index === currentIndex) {
      return "z-30 opacity-100 scale-100 translate-x-0"
    } else if (index === prevIndex) {
      return `z-20 opacity-60 scale-90 -translate-x-[60%] ${direction === "prev" && isTransitioning ? "transition-transform duration-700" : ""}`
    } else if (index === nextIndex) {
      return `z-20 opacity-60 scale-90 translate-x-[60%] ${direction === "next" && isTransitioning ? "transition-transform duration-700" : ""}`
    } else {
      return "opacity-0 scale-75 translate-x-full"
    }
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#091922] -z-10"></div>

      {/* Main carousel container */}
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image container */}

        <div className="flex justify-center">
          <div className="absolute inset-0 bg-[#091922] relative w-full max-w-[1000px] lg:max-w-[1200px] aspect-[16/9] overflow-hidden">
            {/* Slides */}
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${getSlideClasses(index)}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Map ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === currentIndex}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1000px, 1200px"
                />

                {/* Pixel overlay effect */}
                <div className="absolute inset-0 bg-black opacity-5 z-20 pointer-events-none pixel-dust"></div>
              </div>
            ))}

            {/* Navigation arrows */}
            {showArrows && (
              <>
                {/* Custom left arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 transition-all duration-300 hover:scale-110 focus:outline-none"
                  aria-label="Previous map"
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

                {/* Custom right arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 transition-all duration-300 hover:scale-110 focus:outline-none"
                  aria-label="Next map"
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center mt-6 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 focus:outline-none ${
                currentIndex === index ? "w-6 h-3" : "w-3 h-3"
              } rounded-full`}
              aria-label={`Go to map ${index + 1}`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-red-600" : "bg-gray-600 hover:bg-gray-400"
                }`}
              ></div>

              {/* Active indicator glow */}
              {currentIndex === index && (
                <div className="absolute inset-0 bg-red-500 rounded-full opacity-50 blur-md animate-pulse-slow"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Current slide indicator */}
      <div className="absolute bottom-4 right-4 z-30 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
        <span className="font-pixel text-white text-xs">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
