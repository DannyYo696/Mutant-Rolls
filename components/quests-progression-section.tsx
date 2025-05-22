import Image from "next/image"

export default function QuestsProgressionSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div>
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/quests3.png?raw=true"
                alt="Quests interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Quests & Progression
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Each week, players receive a rotating list of objectives—from eliminating waves of mutants in Mutant
              Clash, to staking MUTR, crafting rare gear, or finding treasure in Scavenge Hunts. Completing quests earns
              skull tokens and unlocks tiered treasure chests filled with rewards: MUTR tokens, materials, XP, and
              exclusive cosmetic items. Some missions are easy. Others demand strategy, gear, or commitment. But every
              quest pushes players deeper into the economy, the story, and their role in the growing ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
