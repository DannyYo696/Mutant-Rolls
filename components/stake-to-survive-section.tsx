import Image from "next/image"

export default function StakeToSurviveSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div >
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/stake3.png?raw=true"
                alt="Stake to Survive game interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2">
            <h3 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Stake to Survive. Earn to Win.
            </h3>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              In Mutant Rolls, staking your MUTR tokens isn't just an investment—it's your seat at the table in a world
              gone wild. By locking your tokens in the Caravan, you fuel the Combined Liquidity Reserve (CLR)—the game's
              decentralized bankroll that pays out winners and grows with every wagered battle. The more you stake, the
              more influence and rewards you earn over time. Fully audited by Certik, this system ensures all earnings
              are fair, transparent, and verifiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
