import Image from "next/image"

export default function LootResourcesSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/loot3.png?raw=true"
                alt="Resource management interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Loot & Resources
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Scattered across the map are vital resources—ammo, food, water, medkits—and hidden treasure chests packed
              with gear and MUTR tokens. These aren't cosmetic trinkets; they're the lifeblood of your survival.
              Weapons, armor, and enhancement chips impact core stats like Attack, Defense, and HP, turning{" "}
              <em>The Dude</em> into a force capable of surviving Scavenge Hunts and dominating in Mutant Clash. Gear
              isn't just loot—it's leverage. The stronger your build, the better your odds in battle, and the higher
              your potential for token rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
