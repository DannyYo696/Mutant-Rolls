import Image from "next/image"

export default function FairnessStabilitySection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* Right side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div>
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/fairness3.png?raw=true"
                alt="Fairness verification system"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Fairness & Stability
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              The Fairness Verification System, powered by ORAO VRF and PRNG, ensures every dice roll, resource
              discovery, and battle outcome is provably random and tamper-proof—so you'll always know the odds, and no
              one can cheat the system. The Combined Liquidity Reserve (CLR) is the game's financial engine. It fuels
              staking rewards, supports token buybacks, and maintains liquidity for a thriving economy. With buyback
              triggers, reward bonuses, and auditable mechanics, these systems protect the platform from inflation,
              manipulation, or collapse.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
