"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function FoundationSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/strength.png?raw=true"
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
              <div className="font-pixel text-yellow-300 text-lg font-bold">2026</div>
              <div className="font-pixel text-yellow-300 text-xl font-bold">Q1</div>
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
              Strengthening the Foundation
            </h3>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Q1 introduces the Scavenge Hunt game mode, unlocking high-risk, high-reward expeditions where players
              gather critical resources and compete for rare loot across a desolate, dynamic map. To reinforce the
              health of the economy, this quarter also activates a $25,000 MUTR buyback, strengthening token stability
              and long-term trust. A fresh marketing surge on Coinzilla will boost visibility and bring new survivors
              into the ecosystem, setting the stage for a broader player base and expanded utility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
