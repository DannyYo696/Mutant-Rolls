import Image from "next/image"

export default function ProgressiveWebAppSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#051118]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left side - Text content (swapped from right) */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Progressive Web App
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Mutant Rolls is being engineered not just for desktops—but for the wasteland warriors on the move. Instead
              of relying on restrictive app stores, we're building a Progressive Web App (PWA): a lightweight,
              mobile-optimized version of the game that runs directly in your browser. No downloads. No delays. No
              compromises. Players can add it to their home screen, enjoy a full-screen interface, and dive into
              battles, staking, or gear management anytime—from the subway, the couch, or the apocalypse bunker.
            </p>
          </div>

          {/* Right side - Image (swapped from left) */}
          <div className="w-full md:w-1/2">
            <div className="max-w-[200px] mx-auto">
              <Image
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/pweb.png?raw=true"
                alt="Progressive Web App interface"
                width={400}
                height={267}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
