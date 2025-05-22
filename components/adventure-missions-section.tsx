import Image from "next/image"

export default function AdventureMissionsSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/missions3.png?raw=true"
                alt="Adventure Missions interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Adventure Missions
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Adventure Missions in <em>Mutant Rolls</em> deliver a constant stream of high-risk, high-reward challenges
              that test your strategy, survival skills, and resource management. From intense wave-based battles in
              Mutant Clash to the strategic decisions of Scavenge Hunts, each mission pushes players deeper into the
              post- apocalyptic world—with greater loot waiting for those who dare to press on. Upcoming additions like
              the Zombie Slot mini-game, monthly quests, and evolving missions ensure there's always something fresh to
              conquer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
