"use client"

import { useEffect, useRef } from "react"

interface AnimatedTimelineProps {
  isActive: boolean
}

export default function AnimatedTimeline({ isActive }: AnimatedTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isActive || !timelineRef.current) return

    const timeline = timelineRef.current
    const dot = timeline.querySelector(".timeline-dot") as HTMLElement

    if (dot) {
      // Start pulsing animation
      dot.style.animation = "pulse 2s infinite"
    }

    // Animate the vertical line growing
    const line = timeline.querySelector(".timeline-line") as HTMLElement
    if (line) {
      line.style.height = "100%"
    }
  }, [isActive])

  return (
    <div ref={timelineRef} className="relative h-full flex flex-col items-center justify-center">
      {/* Static background line */}
      <div className="absolute top-0 bottom-0 w-1 bg-green-500/30"></div>

      {/* Animated growing line */}
      <div
        className="timeline-line absolute top-0 w-1 bg-green-500 transition-all duration-2000 ease-out"
        style={{ height: isActive ? "100%" : "0%" }}
      ></div>

      {/* Timeline box */}
      <div
        className={`relative z-10 bg-green-500 text-center p-2 rounded-md border-2 border-green-600 shadow-glow-green transition-all duration-1000 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <div className="font-pixel text-black text-lg font-bold">2023</div>
        <div className="font-pixel text-black text-xl font-bold">Q3</div>
      </div>

      {/* Pulsing dot */}
      <div className="timeline-dot absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </div>
  )
}
