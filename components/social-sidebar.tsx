"use client"

import Image from "next/image"
import Link from "next/link"

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center social-sidebar transition-opacity duration-300">
      <div className="bg-black/50 backdrop-blur-sm p-1 sm:p-2 rounded-r-md border-r border-t border-b border-yellow-600/50">
        <div className="flex flex-col space-y-3 sm:space-y-4 py-1 sm:py-2">
          {/* Discord */}
          <Link
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 group"
            aria-label="Join our Discord"
          >
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="https://img.icons8.com/ios/50/discord-logo--v1.png"
                alt="Discord"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-6 sm:h-6 invert group-hover:invert-0 group-hover:brightness-150 transition-all"
              />
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </div>
          </Link>

          {/* Telegram */}
          <Link
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 group"
            aria-label="Join our Telegram"
          >
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="https://img.icons8.com/ios/50/telegram-app.png"
                alt="Telegram"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-6 sm:h-6 invert group-hover:invert-0 group-hover:brightness-150 transition-all"
              />
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </div>
          </Link>

          {/* TikTok */}
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 group"
            aria-label="Follow us on TikTok"
          >
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="https://img.icons8.com/ios/50/tiktok--v1.png"
                alt="TikTok"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-6 sm:h-6 invert group-hover:invert-0 group-hover:brightness-150 transition-all"
              />
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </div>
          </Link>

          {/* Twitter/X */}
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 group"
            aria-label="Follow us on X"
          >
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image
                src="https://img.icons8.com/ios/50/twitterx--v2.png"
                alt="X"
                width={28}
                height={28}
                className="w-4 h-4 sm:w-6 sm:h-6 invert group-hover:invert-0 group-hover:brightness-150 transition-all"
              />
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
            </div>
          </Link>
        </div>
      </div>

      {/* Vertical line connecting to the sidebar */}
      <div className="h-20 w-px bg-gradient-to-b from-yellow-600/50 to-transparent"></div>
    </div>
  )
}
