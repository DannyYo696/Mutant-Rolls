import Image from "next/image"

export default function NemesisProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* Right side - Image */}
          <div>
            <div>
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/nemesis3.png?raw=true"
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
              The Nemesis Project
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Welcome to The Nemesis Project—a feature still under wraps, but destined to change the wasteland forever. Players will be able to collect, scrap, and assemble parts to build their own personal Nemesis—a powerful, evolving entity crafted from scavenged materials, rogue code, and forgotten weaponry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
