"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface StoneScrollEffectProps {
  className?: string
}

export default function StoneScrollEffect({ className = "" }: StoneScrollEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if element is visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsVisible(true)

        // Calculate how far the element is in the viewport
        // 0 = just entered viewport from bottom
        // 1 = just about to exit viewport from top
        let progress = 1 - rect.bottom / windowHeight

        // Normalize between 0 and 1
        progress = Math.max(0, Math.min(1, progress * 1.5)) // Multiply by 1.5 to make animation complete faster
        setScrollProgress(progress)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate rotation based on scroll progress
  // We'll do multiple full rotations (e.g., 3 * 360 degrees) for a more dramatic effect
  const rotation = scrollProgress * 1080 // 3 full rotations (3 * 360 = 1080)

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isVisible && (
        <div
          className="absolute z-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] transition-transform duration-100"
          style={{
            // Center the stone in the game board
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/DannyYo696/svillage/main/stone.png?raw=true"
            alt="Ancient stone with inscriptions"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
