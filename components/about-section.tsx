"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import BuyMutrButton from "./buy-mutr-button"

interface AboutSectionProps {
  openBuyModal?: () => void
}

export default function AboutSection({ openBuyModal }: AboutSectionProps) {
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
  const [isHovered, setIsHovered] = useState(false)

  // Set countdown timer (for demo purposes)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3)
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d < 10 ? `0${d}` : `${d}`)
      setHours(h < 10 ? `0${h}` : `${h}`)
      setMinutes(m < 10 ? `0${m}` : `${m}`)
      setSeconds(s < 10 ? `0${s}` : `${s}`)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative w-full py-16">
      {/* SVG background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/saless.svg" alt="Sales background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#091922] bg-opacity-90 pixel-dust"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Gray container */}
        <div className="bg-[#091922] border-2 border-gray-800 p-6 md:p-10 rounded-sm max-w-xl mx-auto transform transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {/* Title */}
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-3xl text-center mb-2 animate-glow pixel-text-highlight">
            Round 1 Contribution
          </h2>
          <h3 className="font-pixel text-yellow-300 text-xl md:text-2xl text-center mb-6 animate-pulse-slow">
            Coming soon!
          </h3>

          {/* Contribution info */}
          <p className="font-pixel text-white text-center text-sm md:text-base mb-8">
            <span className="pixel-text-highlight">Contribute 1+ SOL to the pre-presale to get +100</span>
            <br />
            <span className="text-yellow-300 animate-pulse-slow pixel-text-highlight">FREE SPINS!</span>
          </p>

          {/* Countdown timer */}
          <div className="bg-purple-600 p-4 mb-8 max-w-md mx-auto transform transition-all duration-300 hover:scale-105">
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="font-pixel text-white text-2xl md:text-4xl animate-bounce-slow">{days}</div>
                <div className="font-pixel text-white text-xs">Days</div>
              </div>
              <div className="text-center">
                <div
                  className="font-pixel text-white text-2xl md:text-4xl animate-bounce-slow"
                  style={{ animationDelay: "0.2s" }}
                >
                  {hours}
                </div>
                <div className="font-pixel text-white text-xs">hours</div>
              </div>
              <div className="text-center">
                <div
                  className="font-pixel text-white text-2xl md:text-4xl animate-bounce-slow"
                  style={{ animationDelay: "0.4s" }}
                >
                  {minutes}
                </div>
                <div className="font-pixel text-white text-xs">min</div>
              </div>
              <div className="text-center">
                <div
                  className="font-pixel text-white text-2xl md:text-4xl animate-bounce-slow"
                  style={{ animationDelay: "0.6s" }}
                >
                  {seconds}
                </div>
                <div className="font-pixel text-white text-xs">sec</div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <p className="font-pixel text-white text-sm md:text-base">
              <span className="pixel-text-highlight">Pre-sale price</span>{" "}
              <span className="text-yellow-300 animate-glow pixel-text-highlight">$0.001</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-pixel text-yellow-300 text-xs pixel-text-highlight">0 MUTR</span>
              <span className="font-pixel text-yellow-300 text-xs pixel-text-highlight">200,000,000 MUTR</span>
            </div>
            <div className="w-full bg-gray-800 h-6 relative overflow-hidden">
              <div className="absolute inset-0 border border-purple-700"></div>
              <div className="h-full bg-gradient-to-r from-purple-700 to-purple-500 relative" style={{ width: "5%" }}>
                <div className="absolute inset-0 bg-white/10 animate-pixel-shift"></div>
              </div>
            </div>
          </div>

          {/* Buy button */}
          <div className="flex justify-center mt-8">
            <BuyMutrButton onClick={openBuyModal} />
          </div>
        </div>
      </div>
    </section>
  )
}
