"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"
import BuyMutrButton from "./buy-mutr-button"

interface StickyHeaderProps {
  openBuyModal?: () => void
}

export default function StickyHeader({ openBuyModal }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 10px
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Handle responsive state
  useEffect(() => {
    const handleResize = () => {
      // If we're on desktop (md breakpoint) and menu is open, close it
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-4 py-2 md:px-8 lg:px-16 transition-all duration-500 ${
        scrolled && !isMenuOpen ? "bg-black/80 backdrop-blur-sm py-1" : "bg-transparent py-3"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo - Left */}
        <div className="flex-shrink-0 w-1/4 md:w-1/5">
          <Link href="#" className="block group">
            <Image
              src="/images/mutant-rolls-logo.png"
              alt="Mutant Rolls Logo"
              width={180}
              height={60}
              className={`h-auto w-[120px] md:w-[140px] lg:w-[180px] transition-all duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              } group-hover:animate-shake`}
              priority
            />
          </Link>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              href="#what-is-mutant-rolls"
              className="text-white hover:text-yellow-300 transition-colors font-pixel text-sm lg:text-base hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="pixel-text-highlight">About</span>
            </Link>
            <Link
              href="#features"
              className="text-white hover:text-yellow-300 transition-colors font-pixel text-sm lg:text-base hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="pixel-text-highlight">Features</span>
            </Link>
            <Link
              href="#roadmap"
              className="text-white hover:text-yellow-300 transition-colors font-pixel text-sm lg:text-base hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="pixel-text-highlight">Roadmap</span>
            </Link>
            <Link
              href="#team"
              className="text-white hover:text-yellow-300 transition-colors font-pixel text-sm lg:text-base hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="pixel-text-highlight">Team</span>
            </Link>
            <Link
              href="#faq"
              className="text-white hover:text-yellow-300 transition-colors font-pixel text-sm lg:text-base hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="pixel-text-highlight">FAQ</span>
            </Link>
          </div>
        </nav>

        {/* Right side - Buy button or mobile menu */}
        <div className="flex items-center justify-end w-1/4 md:w-1/5">
          {/* Buy MUTR button - hidden on smallest screens when menu is open */}
          <div className={`hidden sm:block ${isMenuOpen ? "sm:hidden" : ""}`}>
            <BuyMutrButton onClick={openBuyModal} className="transform scale-90 lg:scale-100" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu openBuyModal={openBuyModal} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  )
}
