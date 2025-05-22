"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface BuyTokenModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BuyTokenModal({ isOpen, onClose }: BuyTokenModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative z-10 bg-[#0a1622] border-2 border-yellow-600 rounded-md w-full max-w-2xl max-h-[110vh] overflow-hidden flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Loading indicator */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1622] z-10">
            <Image
              src="/images/modal.jpg"
              alt="Buy MUTR Token"
              width={400}
              height={600}
              className="mb-4 max-h-[60%] w-auto object-contain"
            />
            <div className="font-pixel text-yellow-300 text-xl animate-pulse">Loading...</div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src="https://mutr-token-buy-app.vercel.app"
          className="w-full h-[800px]"
          onLoad={() => setIframeLoaded(true)}
          style={{ opacity: iframeLoaded ? 1 : 0 }}
        ></iframe>
      </div>
    </div>
  )
}
