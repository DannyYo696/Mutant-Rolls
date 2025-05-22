import Image from "next/image"

export default function GameMechanicsSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Title and description */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">Game Mechanics</h2>

          <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
            Explore the strategic systems that make Mutant Rolls a game of skill,
            <br />
            survival—and serious on-chain rewards.
          </p>
        </div>

        {/* Game mechanics image */}
        
      </div>
    </section>
  )
}
