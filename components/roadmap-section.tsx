import Image from "next/image"

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative w-full py-16 md:py-24">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#051118]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Title and description */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-pixel text-yellow-300 text-2xl md:text-4xl mb-6 pixel-text-highlight">Roadmap</h2>

          <p className="font-pixel text-white text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
            Strategize, survive, and shape the future in "Mutant Rolls"—where every milestone marks a victory over
            chaos.
          </p>
        </div>

        {/* Roadmap image */}
        

        {/* Roadmap details */}
        
      </div>
    </section>
  )
}
