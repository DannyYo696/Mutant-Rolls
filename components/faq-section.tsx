"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import WhitepaperButton from "./whitepaper-button"

// FAQ data
const faqItems = [
  {
    question: "When does the first playable version go live?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "How do I earn MUTR tokens inside the game?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "How do I validate my provably fair?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "Do I need a wallet or crypto to start playing?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "How do I get started and onboard to Solana?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "How big is the team behind Mutant Rolls?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    question: "What makes Mutant Rolls different from other games?",
    answer:
      "We try to keep release and roadmaps as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#091a24]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl text-center mb-2 animate-glow pixel-text-highlight">
          Got Questions, Survivor?
        </h2>

        {/* Subtitle */}
        <p className="font-pixel text-gray-400 text-xs md:text-sm text-center mb-8">
          The wasteland's full of uncertainty and peril. Check out the most common questions about Mutant Rolls, and get
          back to your survival strategy.
        </p>

        {/* Whitepaper button */}
        <div className="flex justify-center mb-12">
          <WhitepaperButton />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-700/60 rounded-sm overflow-hidden border border-gray-600">
              {/* Question */}
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-pixel text-white text-xs md:text-sm">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-4 pb-3 transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="font-pixel text-gray-300 text-xs leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
