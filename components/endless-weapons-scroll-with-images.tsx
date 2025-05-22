"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Define the weapons with their image paths
// You'll need to replace these with your actual weapon images
const weaponImages = [
  {
    name: "",
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w1.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w2.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w3.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w4.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w5.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w6.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w7.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w8.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w9.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w10.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w11.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w12.png?raw=true",
  },
  {
    imagePath: "https://github.com/DannyYo696/svillage/blob/main/w13.png?raw=true",
  },
]

export default function EndlessWeaponsScrollWithImages() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Animation function for smooth scrolling
    let animationId: number
    let scrollPosition = 0
    const speed = 0.5 // Adjust speed as needed
    const containerWidth = scrollContainer.scrollWidth / 3

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

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Create a weapon item component with image
  const WeaponItem = ({ weapon }: { weapon: (typeof weaponImages)[0] }) => (
    <div className="inline-block px-4 py-2">
      <div className="relative group cursor-pointer">
        {/* Weapon image - removed container/box */}
        <div className="relative h-24 w-24 md:h-32 md:w-32 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Image
            src={weapon.imagePath || "/placeholder.svg"}
            alt={weapon.name || "Weapon"}
            width={100}
            height={100}
            className="object-contain max-h-full max-w-full animate-float"
          />
        </div>

        {/* Weapon name */}
        <div className="mt-2 text-center">
          <span className="font-pixel text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-yellow-300 transition-all duration-300">
            {weapon.name}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative w-full py-12 overflow-hidden bg-[#091922]">
      <div className="max-w-full mx-auto">
        {/* Scrolling container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a1622] to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a1622] to-transparent"></div>

          {/* Scrolling content */}
          <div className="flex" ref={scrollRef}>
            {/* First set of weapons */}
            <div className="flex">
              {weaponImages.map((weapon, index) => (
                <WeaponItem key={`weapon-1-${index}`} weapon={weapon} />
              ))}
            </div>

            {/* Duplicate set for seamless looping */}
            <div className="flex">
              {weaponImages.map((weapon, index) => (
                <WeaponItem key={`weapon-2-${index}`} weapon={weapon} />
              ))}
            </div>

            {/* Third set for extra buffer */}
            <div className="flex">
              {weaponImages.map((weapon, index) => (
                <WeaponItem key={`weapon-3-${index}`} weapon={weapon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
