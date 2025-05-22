"use client"
import EnhancedCarousel from "@/components/enhanced-carousel"

export default function MutantClashSection() {
  // Maps for the carousel - using high-quality images
  const maps = [
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell1.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell2.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell3.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell4.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell5.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell6.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/carousell7.png?raw=true",
    
  ]

  return (
    <section id="features" className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Dark blue/black background with gradient */}
      <div className="absolute inset-0 z-0 bg-[#091821]"></div>

      <div className="relative z-10 w-full">
        {/* Title and description */}
        <div className="max-w-4xl mx-auto mb-12 text-center px-4">
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 animate-fade-in animate-glow pixel-text-highlight">
            Mutant Clash
          </h2>

          <p className="font-pixel text-white text-xs md:text-sm leading-relaxed animate-fade-in delay-200">
            Mutant Clash is Mutant Rolls' high-stakes, wave-based combat arena — where you take control of{" "}
            <em>The Dude</em> and battle swarms of mutants and hovering bosses in turn-based combat with dice. Choose
            your weapon, armor, artifacts, defense, and position. Your turn counts. Your gear slots directly impact your
            strategy and odds, and here's the twist! Wager MUTR tokens on your chance of victory, with win probabilities
            shown before each fight. This is combat with real consequences — fight smart, and you don't just survive.
            You profit.
          </p>
        </div>

        {/* Enhanced Carousel */}
        <div className="mt-12 reveal reveal-up">
          <EnhancedCarousel images={maps} autoPlayInterval={6000} className="shadow-2xl bg-[#091821]" />
        </div>
      </div>
    </section>
  )
}
