import Image from "next/image"
import WhitepaperButton from "./whitepaper-button"

export default function WhitepaperCtaSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Semi-transparent background image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[#091922] opacity-70 w-full h-full"></div>
        <div className="absolute inset-0 w-[100vw] h-[100%] min-w-full min-h-full">
          <Image
            src="https://raw.githubusercontent.com/DannyYo696/svillage/4cf0660895a89f1f44ecf7b9524b85022b1380ff/bbr.svg"
            alt="Pixelated background"
            fill
            className="object-cover opacity-60 mix-blend-overlay scale-[1.1]"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center min-h-[300px]">
        {/* Title */}
        <h2 className="font-pixel text-white text-2xl md:text-3xl text-center mb-12 pixel-text-highlight">
          Check out our whitepaper
        </h2>

        {/* Whitepaper button */}
        <WhitepaperButton className="transform hover:scale-105 transition-transform duration-300" />
      </div>
    </section>
  )
}
