"use client"

import { useEffect, useRef } from "react"

interface GameBoardAnimationProps {
  isActive: boolean
}

export default function GameBoardAnimation({ isActive }: GameBoardAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isActive || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Game board elements
    const elements = [
      { x: canvas.width * 0.25, y: canvas.height * 0.75, radius: 4, color: "#FFD700", vx: 0.2, vy: -0.3 }, // Gold coin
      { x: canvas.width * 0.4, y: canvas.height * 0.6, radius: 3, color: "#FF0000", vx: -0.1, vy: 0.2 }, // Heart
      { x: canvas.width * 0.6, y: canvas.height * 0.5, radius: 5, color: "#8A2BE2", vx: 0.15, vy: 0.1 }, // Purple item
      { x: canvas.width * 0.75, y: canvas.height * 0.7, radius: 4, color: "#00FF00", vx: -0.2, vy: -0.1 }, // Green item
    ]

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update elements
      elements.forEach((element) => {
        // Update position
        element.x += element.vx
        element.y += element.vy

        // Bounce off walls
        if (element.x <= element.radius || element.x >= canvas.width - element.radius) {
          element.vx *= -1
        }
        if (element.y <= element.radius || element.y >= canvas.height - element.radius) {
          element.vy *= -1
        }

        // Draw element
        ctx.beginPath()
        ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2)
        ctx.fillStyle = element.color
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = element.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isActive])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.5s ease" }}
    />
  )
}
