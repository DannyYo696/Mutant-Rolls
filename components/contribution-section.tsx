"use client"

import { useState, useEffect } from "react"

export default function ContributionSection() {
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

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
    <section id="contribution" className="relative w-full py-16">
      {/* Green pixel background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Gray container */}
        <div className="absolute inset-0 z-0 bg-[#091922]">
          {/* Title */}
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-3xl text-center mb-2">Round 1 Contribution</h2>
          <h3 className="font-pixel text-yellow-300 text-xl md:text-2xl text-center mb-6">coming soon!</h3>

          {/* Contribution info */}
          <p className="font-pixel text-white text-center text-sm md:text-base mb-8">
            Contribute 1+ SOL to the pre-presale to get +100 FREE SPINS!
          </p>

          {/* Countdown timer */}
          <div className="bg-purple-600 p-4 mb-8 max-w-md mx-auto">
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="font-pixel text-white text-2xl md:text-4xl">{days}</div>
                <div className="font-pixel text-white text-xs">Days</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-white text-2xl md:text-4xl">{hours}</div>
                <div className="font-pixel text-white text-xs">hours</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-white text-2xl md:text-4xl">{minutes}</div>
                <div className="font-pixel text-white text-xs">min</div>
              </div>
              <div className="text-center">
                <div className="font-pixel text-white text-2xl md:text-4xl">{seconds}</div>
                <div className="font-pixel text-white text-xs">sec</div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <p className="font-pixel text-white text-sm md:text-base">
              Pre-sale price <span className="text-yellow-300">$0.001</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-pixel text-yellow-300 text-xs">0 MUTR</span>
              <span className="font-pixel text-yellow-300 text-xs">200,000,000 MUTR</span>
            </div>
            <div className="w-full bg-gray-800 h-6 relative">
              <div className="absolute inset-0 border border-purple-700"></div>
              <div className="h-full bg-gradient-to-r from-purple-700 to-purple-500" style={{ width: "5%" }}></div>
            </div>
          </div>

          {/* Buy button */}
          <div className="flex justify-center mt-8">
           <BuyMutrButton onClick={openBuyModal} className="mr-0 md:mr-4 lg:mr-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
