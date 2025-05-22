"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function LayingFoundationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [animationStarted])

  // Pulse animation for the timeline dot
  useEffect(() => {
    if (!timelineRef.current || !animationStarted) return

    const timeline = timelineRef.current
    const dot = timeline.querySelector(".timeline-dot") as HTMLElement

    if (dot) {
      dot.style.animation = "pulse 2s infinite"
    }
  }, [animationStarted])

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-[#051118] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 md:gap-4 items-center">
          {/* Left side - Game scene */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/lay1.png?raw=true"
                alt="Game board preview"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Animated elements inside the game scene */}
              <div
                className={`absolute bottom-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full ${animationStarted ? "animate-ping" : ""}`}
              ></div>
              <div
                className={`absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full ${animationStarted ? "animate-pulse" : ""}`}
              ></div>
              <div
                className={`absolute top-1/3 left-1/3 w-5 h-5 bg-purple-500 rounded-full ${animationStarted ? "animate-bounce" : ""}`}
              ></div>
            </div>
          </div>

          {/* Middle - Timeline */}
          <div ref={timelineRef} className="flex flex-col items-center justify-center h-full relative py-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-green-500/30 via-green-500 to-green-500/30"></div>

            {/* Timeline box */}
            <div
              className={`relative z-10 bg-green-500 text-center p-2 rounded-md border-2 border-green-600 shadow-glow-green transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              <div className="font-pixel text-yellow-300 text-lg font-bold">2025</div>
              <div className="font-pixel text-yellow-300 text-xl font-bold">Q3</div>
            </div>

            {/* Pulsing dot */}
            <div className="timeline-dot absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-glow-yellow"></div>

            {/* Vertical line segments that animate in */}
            <div
              className={`absolute top-0 w-1 bg-green-400 transition-all duration-1500 ease-out ${isVisible ? "h-full" : "h-0"}`}
            ></div>
          </div>

          {/* Right side - Text content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <h3 className="font-pixel text-yellow-300 text-xl md:text-2xl mb-4 pixel-text-highlight">
              Laying the Foundations
            </h3>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Q3 marks the official launch of Mutant Rolls, featuring the listing of the MUTR token on Meteora, backed
              by $300,000 in locked liquidity to ensure market stability from day one. Core systems like the Combined
              Liquidity Reserve (CLR) and the hybrid Randomness Engine (powered by ORAO VRF and PRNG) will go
              live—guaranteeing verifiable fairness for every roll, battle, and reward. This quarter also introduces the
              first version of the interactive Board Game, featuring on-chain dice rolls and the foundation of player
              progression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
