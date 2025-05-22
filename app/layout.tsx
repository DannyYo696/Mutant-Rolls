import type React from "react"
import "./globals.css"
import "./animations.css" // Import the animations CSS
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import DownloadHandler from "@/components/download-handler"
import SocialSidebar from "@/components/social-sidebar"

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Mutant Rolls - A Provably Fair Strategy Game",
  description:
    "A board game blending strategy, resource management, and high-stakes adventure with unpredictable, thrilling gameplay!",
  icons: {
    icon: [
      { url: "https://raw.githubusercontent.com/DannyYo696/svillage/main/stone.png?raw=true", sizes: "any" },
      { url: "https://raw.githubusercontent.com/DannyYo696/svillage/main/stone.png?raw=true", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable}`}>
        <SocialSidebar />
        {children}
        <DownloadHandler />
      </body>
    </html>
  )
}
