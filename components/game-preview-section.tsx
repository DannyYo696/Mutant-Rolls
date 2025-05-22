"use client"
import PerfectCarousel from "@/components/perfect-carousel"

export default function GamePreviewSection() {
  // Game preview images
  const previewImages = [
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/snip1.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/snip3.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/image%2011.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/mech5.png?raw=true",
    "https://raw.githubusercontent.com/DannyYo696/svillage/main/mech6.png?raw=true",
  ]

  return (
    <section id="game-previews" className="relative w-full">
      {/* Dark blue/black background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10">
        {/* Perfect Carousel */}
        <PerfectCarousel images={previewImages} autoPlayInterval={5000} />
      </div>
    </section>
  )
}
