import Image from "next/image"

export default function ScavengerHuntSection() {
  return (
    <section id="scavenger-hunt" className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Title and description */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">
            The Scavenger Hunt
          </h2>

          <p className="font-pixel text-white text-xs md:text-sm leading-relaxed">
            The Scavenger Hunt is a high-stakes expedition mode in <em>Mutant Rolls</em> where players risk it all to
            earn extra MUTR tokens and rare resources. Guide <em>The Dude</em> across a desolate wasteland, collecting
            resources and managing supplies like food, water, medical kits, or ammo to progress. The farther you go, the
            greater the rewards—but push too far and risk losing everything. Run out of supplies, and your expedition
            fails. Smart resource management and strategic dice rolls are essential for survival in this unforgiving
            mode. Will you stop early and play it safe—or go all in for the jackpot?
          </p>
        </div>

        {/* Screenshot */}
        <div className="max-w-3xl mx-auto">
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/DannyYo696/svillage/main/image%2011.png?raw=true"
              alt="Scavenger Hunt Gameplay"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
