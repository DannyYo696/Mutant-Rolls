"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface EnhancedCarouselProps {
  images: string[]
  autoPlayInterval?: number
  showArrows?: boolean
  showIndicators?: boolean
  className?: string
}

export default function EnhancedCarousel({
  images,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = false, // Changed default to false to ensure indicators are off
  className = "",
}: EnhancedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

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

  // Handle social sidebar visibility when carousel is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return

      const rect = carouselRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      // Get the social sidebar element
      const socialSidebar = document.querySelector(".social-sidebar")
      if (socialSidebar) {
        if (isVisible) {
          socialSidebar.classList.add("opacity-0", "pointer-events-none")
        } else {
          socialSidebar.classList.remove("opacity-0", "pointer-events-none")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Calculate indices for visible slides
  const getVisibleIndices = () => {
    const indices = []
    const totalImages = images.length

    // Add previous 2 slides
    for (let i = 2; i > 0; i--) {
      const index = (currentIndex - i + totalImages) % totalImages
      indices.push(index)
    }

    // Add current slide
    indices.push(currentIndex)

    // Add next 2 slides
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % totalImages
      indices.push(index)
    }

    return indices
  }

  const visibleIndices = getVisibleIndices()

  // Get slide position and styling based on its relation to current slide
  const getSlideStyle = (index: number) => {
    const position = visibleIndices.indexOf(index)

    // Not in visible range
    if (position === -1) {
      return {
        zIndex: 0,
        opacity: 0,
        transform: "scale(0.5) translateX(0)",
        visibility: "hidden",
        filter: "grayscale(100%) brightness(0.7)",
      }
    }

    // Calculate position relative to center (position 2 is center)
    const relativePosition = position - 2

    // Define scale and translation based on position
    let scale = 1
    let translateX = "0%"
    let zIndex = 30
    let opacity = 1
    let filter = "grayscale(0%)"

    switch (relativePosition) {
      case -2: // Far left
        scale = 0.6
        translateX = "-160%"
        zIndex = 10
        opacity = 0.5
        filter = "grayscale(100%) brightness(0.7)"
        break
      case -1: // Left
        scale = 0.8
        translateX = "-80%"
        zIndex = 20
        opacity = 0.7
        filter = "grayscale(100%) brightness(0.7)"
        break
      case 0: // Center (current)
        scale = 1
        translateX = "0%"
        zIndex = 30
        opacity = 1
        filter = "grayscale(0%)"
        break
      case 1: // Right
        scale = 0.8
        translateX = "80%"
        zIndex = 20
        opacity = 0.7
        filter = "grayscale(100%) brightness(0.7)"
        break
      case 2: // Far right
        scale = 0.6
        translateX = "160%"
        zIndex = 10
        opacity = 0.5
        filter = "grayscale(100%) brightness(0.7)"
        break
    }

    return {
      zIndex,
      opacity,
      transform: `scale(${scale}) translateX(${translateX})`,
      transition: "all 0.5s ease-in-out",
      visibility: "visible",
      filter,
    }
  }

  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      style={{ width: "100vw", maxWidth: "100vw", marginLeft: "calc(50% - 50vw)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#091821] -z-10"></div>

      {/* Main carousel container */}
      <div
        className="relative w-full h-[400px] md:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel track */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Slides */}
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[80%] max-w-[800px] aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
              style={getSlideStyle(index)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === currentIndex}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && (
          <>
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Previous slide"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/left-Ucsx3R9opp9k8CtbSMvBbmuVECvw8r.png"
                alt="Previous"
                width={32}
                height={32}
                className="w-4 h-4 md:w-6 md:h-6 drop-shadow-lg"
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Next slide"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/right-LH0VJBbJyFIkGjy4p2HkkStKUj8Lz6.png"
                alt="Next"
                width={32}
                height={32}
                className="w-4 h-4 md:w-6 md:h-6 drop-shadow-lg"
              />
            </button>
          </>
        )}
      </div>

      {/* Completely removed the slide counter */}
    </div>
  )
}
