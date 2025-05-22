import Image from "next/image"

interface WhitepaperButtonProps {
  className?: string
}

export default function WhitepaperButton({ className = "" }: WhitepaperButtonProps) {
  return (
    <a
      href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/DannyYo696/svillage/23a9011674cf2a6bb667591e470c4283096cf3d8/mutant%20rolls.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <Image
        src="https://raw.githubusercontent.com/DannyYo696/svillage/main/whitepaper.svg?raw=true"
        alt="Whitepaper"
        width={180}
        height={60}
        className="w-auto h-auto hover:scale-105 transition-transform duration-200"
      />
    </a>
  )
}
