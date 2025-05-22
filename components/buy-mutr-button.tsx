"use client"

import Image from "next/image"

interface BuyMutrButtonProps {
  onClick?: () => void
  className?: string
}

export default function BuyMutrButton({ onClick, className = "" }: BuyMutrButtonProps) {
  return (
    <button onClick={onClick} className={`inline-block ${className}`}>
      <Image
        src="https://raw.githubusercontent.com/DannyYo696/svillage/main/mutr.svg?raw=true"
        alt="Buy MUTR Tokens"
        width={80}
        height={40}
        className="w-auto h-[30px] sm:h-[35px] md:h-[40px] hover:scale-105 transition-transform duration-200"
      />
    </button>
  )
}
