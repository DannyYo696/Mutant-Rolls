import Image from "next/image"

export default function PlayerControlSection() {
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
                src="https://raw.githubusercontent.com/DannyYo696/svillage/main/player3.png?raw=true"
                alt="Player control interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
              Player Control & Impact
            </h2>

            <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
              Unlike many blockchain games that rely purely on randomness or automation, <em>Mutant Rolls</em> gives
              players direct control in many game modes, letting you move, act, and decide in real time or turn-based
              combat. Whether you're navigating the Scavenge Hunt, choosing your next action in Mutant Clash, or
              managing gear in combat, your choices shape the outcome—and your rewards. This hands-on gameplay
              introduces a skill layer to a system already rich with resource strategy and randomness. Want better
              rewards?
              <br />→ Make better decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
