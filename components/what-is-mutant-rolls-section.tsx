import Image from "next/image"
import StoneScrollEffect from "./stone-scroll-effect"

export default function WhatIsMutantRollsSection() {
  return (
    <section id="what-is-mutant-rolls" className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight text-center md:text-left">
              What is MutantRolls?
            </h2>

            <div className="font-pixel text-white text-sm md:text-base space-y-4 text-center md:text-left">
              <p>
                Mutant Rolls is a strategy-based board game powered by the Solana blockchain, where every dice roll is{" "}
                <em className="italic">provably fair</em> and <em className="italic">potentially profitable</em>.
              </p>

              <p>
                As the last hope of humanity, you&apos;ll battle through mutant wastelands, upgrade your hero, and
                scavenge rare loot all while playing on a dynamic, on-chain game board.
              </p>

              <p>
                Earn rewards, survive perils, and prove your skills in the world&apos;s first decentralized dice
                strategy adventure.
              </p>
            </div>
          </div>

          {/* Right side - Game board image with rolling stone */}
          <div className="w-full md:w-1/2">
            <div className="border-4 border-amber-700 p-1 relative">
              {/* Game board image */}
              <Image
                src="/images/game-board-preview.jpg"
                alt="Game Board Preview"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Stone effect positioned inside the game board */}
              <StoneScrollEffect />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
