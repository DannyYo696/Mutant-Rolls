import Image from "next/image"

export default function DungeonBossSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/dungeon3.png?raw=true"
                alt="Dungeon boss battle"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Dungeon Boss Battle
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Enter the Dungeon Boss—a massive, world-threatening creature that requires the combined effort of the
              community to defeat. These limited-time events call on all players to pool their strength, contribute
              resources, and launch coordinated attacks over the course of several days. Each participant can stake MUTR
              tokens, ammo, gear durability, or other resources to fuel their contribution. The more players who
              join—and the more resources committed—the higher the community's collective damage output. If the boss is
              defeated before time runs out, the loot pool is unlocked and distributed to all contributors based on
              their effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
