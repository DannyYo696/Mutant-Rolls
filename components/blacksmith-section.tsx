import Image from "next/image"

export default function BlacksmithSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/blacksmith3.png?raw=true"
                alt="Blacksmith interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              The Blacksmith
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              At the Blacksmith, players can forge, enhance, and merge gear to create more powerful equipment tailored
              to their strategy. Weapons can be upgraded to deal more damage, armor reinforced to withstand brutal
              waves, and enhancements fused to unlock rare abilities. Each improvement directly boosts key stats like
              Attack, Defense, Speed, and HP—shaping the odds in battles and scavenging runs. Want to push your luck
              deeper into the wasteland? You'll need your gear sharpened, hardened, and customized.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
