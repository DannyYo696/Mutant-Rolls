"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Array of weapon data with image paths
const weapons = [
  {
    name: "Plasma Rifle",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-purple-900/50",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  },
  {
    name: "Energy Sword",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-indigo-900/50",
    glow: "shadow-[0_0_15px_rgba(129,140,248,0.5)]",
  },
  {
    name: "Battle Axe",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-amber-900/50",
    glow: "shadow-[0_0_15px_rgba(251,191,36,0.5)]",
  },
  {
    name: "Plasma Cannon",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-green-900/50",
    glow: "shadow-[0_0_15px_rgba(74,222,128,0.5)]",
  },
  {
    name: "War Hammer",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-red-900/50",
    glow: "shadow-[0_0_15px_rgba(248,113,113,0.5)]",
  },
  {
    name: "Grenade Launcher",
    imagePath: "/placeholder.svg?height=80&width=80",
    color: "bg-yellow-900/50",
    glow: "shadow-[0_0_15px_rgba(250,204,21,0.5)]",
  },
]

export default function EndlessWeaponsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Animation function for smooth scrolling
    let animationId: number
    let scrollPosition = 0
    const speed = 0.5 // Adjust speed as needed
    const containerWidth = scrollContainer.scrollWidth / 2

    const scroll = () => {
      scrollPosition += speed

      // Reset position when first set of weapons is scrolled out of view
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0
      }

      scrollContainer.style.transform = `translateX(${-scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    scroll()

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      scroll()
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Create a weapon item component
  const WeaponItem = ({ weapon }: { weapon: (typeof weapons)[0] }) => (
    <div
      className={`flex flex-col items-center justify-center p-4 mx-4 rounded-lg ${weapon.color} ${weapon.glow} border border-gray-700 min-w-[120px] h-32 transition-transform hover:scale-110`}
    >
      <div className="mb-2 animate-pulse-slow">
        <Image
          src={weapon.imagePath || "/placeholder.svg"}
          alt={weapon.name}
          width={80}
          height={80}
          className="object-contain h-16 w-16"
        />
      </div>
      <span className="font-pixel text-xs text-white text-center">{weapon.name}</span>
    </div>
  )

  return (
    <section className="relative w-full py-8 overflow-hidden bg-[#0a1622]">
      <div className="max-w-full mx-auto">
        <h2 className="font-pixel text-yellow-300 text-2xl md:text-3xl text-center mb-8 animate-glow">
          Legendary Weapons
        </h2>

        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0a1622] to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0a1622] to-transparent"></div>

          {/* Scrolling content */}
          <div className="flex whitespace-nowrap" ref={scrollRef}>
            {/* First set of weapons */}
            <div className="flex">
              {weapons.map((weapon, index) => (
                <WeaponItem key={`weapon-1-${index}`} weapon={weapon} />
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="flex">
              {weapons.map((weapon, index) => (
                <WeaponItem key={`weapon-2-${index}`} weapon={weapon} />
              ))}
            </div>

            {/* Third set for extra buffer */}
            <div className="flex">
              {weapons.map((weapon, index) => (
                <WeaponItem key={`weapon-3-${index}`} weapon={weapon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
