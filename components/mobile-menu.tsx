"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import BuyMutrButton from "./buy-mutr-button"

interface MobileMenuProps {
  openBuyModal?: () => void
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function MobileMenu({ openBuyModal, isMenuOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white hover:text-yellow-300 transition-colors focus:outline-none ml-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#091922] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 font-pixel text-lg">
            <Link
              href="#what-is-mutant-rolls"
              className="text-white hover:text-yellow-300 transition-colors"
              onClick={toggleMenu}
            >
              <span className="pixel-text-highlight">About</span>
            </Link>
            <Link href="#features" className="text-white hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
              <span className="pixel-text-highlight">Features</span>
            </Link>
            <Link href="#roadmap" className="text-white hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
              <span className="pixel-text-highlight">Roadmap</span>
            </Link>
            <Link href="#team" className="text-white hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
              <span className="pixel-text-highlight">Team</span>
            </Link>
            <Link href="#faq" className="text-white hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
              <span className="pixel-text-highlight">FAQ</span>
            </Link>
          </nav>

          <div className="mt-auto">
            <BuyMutrButton
              onClick={() => {
                if (openBuyModal) {
                  openBuyModal()
                  toggleMenu()
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
