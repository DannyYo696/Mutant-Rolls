import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Green background */}
      <div className="bg-green-500 py-4 px-4 flex flex-col items-center justify-center">
        {/* Centered content */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Talk to developers text */}
          <span
            className="font-pixel text-yellow text-sm md:text-base mb-3 md:mb-0 md:mr-6 pixel-text-highlight"
            style={{ textShadow: "2px 2px 0 #fecd34" }}
          >
            Talk to the developers
          </span>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {/* Discord */}
            <Link
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Join our Discord"
            >
              <Image
                src="https://img.icons8.com/ios/50/discord-logo--v1.png"
                alt="Discord"
                width={28}
                height={28}
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </Link>

            {/* Telegram */}
            <Link
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Join our Telegram"
            >
              <Image
                src="https://img.icons8.com/ios/50/telegram-app.png"
                alt="Telegram"
                width={28}
                height={28}
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </Link>

            {/* TikTok */}
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Follow us on TikTok"
            >
              <Image
                src=""
                alt="TikTok"
                width={28}
                height={28}
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </Link>

            {/* Twitter/X */}
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Follow us on X"
            >
              <Image src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="X" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </div>
        </div>

        {/* Made in Webflow - centered below on mobile, aligned with content on desktop */}
        <div className="mt-3 md:mt-0 md:absolute md:right-4">
          
        </div>
      </div>
    </footer>
  )
}
