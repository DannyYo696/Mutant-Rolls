"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import StickyHeader from "@/components/sticky-header"
import SaleDetailsSection from "@/components/sale-details-section"
import AboutSection from "@/components/about-section"
import WhatIsMutantRollsSection from "@/components/what-is-mutant-rolls-section"
import MutantClashSection from "@/components/mutant-clash-section"
import ScavengerHuntSection from "@/components/scavenger-hunt-section"
import EndlessWeaponsScrollWithImages from "@/components/endless-weapons-scroll-with-images"
import TeamSection from "@/components/team-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import GameMechanicsSection from "@/components/game-mechanics-section"
import StakeToSurviveSection from "@/components/stake-to-survive-section"
import AdventureMissionsSection from "@/components/adventure-missions-section"
import LootResourcesSection from "@/components/loot-resources-section"
import FairnessStabilitySection from "@/components/fairness-stability-section"
import PlayerControlSection from "@/components/player-control-section"
import BlacksmithSection from "@/components/blacksmith-section"
import QuestsProgressionSection from "@/components/quests-progression-section"
import DungeonBossSection from "@/components/dungeon-boss-section"
import NemesisProjectSection from "@/components/nemesis-project-section"
import RoadmapSection from "@/components/roadmap-section"
import EcosystemSection from "@/components/ecosystem-section"
import FoundationSection from "@/components/foundation-section"
import InnovationsSection from "@/components/innovations-section"
import AccessibilitySection from "@/components/accessibility-section"
import GrowthSection from "@/components/growth-section"
import ProgressiveWebAppSection from "@/components/progressive-web-app-section"
import BuyTokenModal from "@/components/buy-token-modal"
import LayingFoundationsSection from "@/components/laying-foundations-section"
import WhitepaperButton from "@/components/whitepaper-button"
import WhitepaperCtaSection from "@/components/whitepaper-cta-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Add scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on initial load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Sticky Header */}
      <StickyHeader openBuyModal={openModal} />

      {/* Buy Token Modal */}
      <BuyTokenModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with background image and top shadow */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* Background Image - only for hero section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpeg"
            alt="Mutant battle scene with sunset background"
            fill
            priority
            className="object-cover object-center hero-background"
          />
          <div className="absolute inset-0 bg-black/30 pixel-dust"></div>

          {/* Top shadow overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl relative z-10 py-16 md:py-32">
          {/* Center Content */}
          <div className="w-full text-center px-2 md:px-4 flex flex-col items-center">
            <h2
              className={`font-pixel text-yellow-300 text-xl md:text-3xl lg:text-4xl leading-tight mb-2 md:mb-4 animate-glow ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="relative inline-block">
                <span className="relative z-10 block delay-100 pixel-text-highlight">A Provably Fair</span>
              </div>
              <div className="relative inline-block">
                <span className="relative z-10 block delay-300 pixel-text-highlight">Strategy Game</span>
              </div>
              <div className="relative inline-block">
                <span className="relative z-10 block delay-500 pixel-text-highlight">Where Every Roll</span>
              </div>
              <div className="relative inline-block">
                <span className="relative z-10 block delay-700 pixel-text-highlight">Can Earn You Real</span>
              </div>
              <div className="relative inline-block">
                <span className="relative z-10 block delay-900 pixel-text-highlight">Rewards</span>
              </div>
            </h2>

            <p
              className={`font-pixel text-white text-xs md:text-sm mb-6 md:mb-8 max-w-xl hero-description pixel-text-highlight ${isLoaded ? "animate-fade-in delay-1200" : "opacity-0"}`}
            >
              It is a board game blending strategy, resource management, and high-stakes adventure with unpredictable,
              thrilling gameplay!
            </p>

            <div className={`${isLoaded ? "animate-scale-in delay-1500" : "opacity-0"}`}>
              <WhitepaperButton />
            </div>
          </div>
        </div>
      </section>

      {/* Content sections with dark background */}
      <div className="bg-[#091922]">
        {/* About Section (Contribution Section Clone) */}
        <div className="reveal reveal-up">
          <AboutSection openBuyModal={openModal} />
        </div>

        {/* What is Mutant Rolls Section */}
        <div className="reveal reveal-up">
          <WhatIsMutantRollsSection />
        </div>

        {/* Sale Details Section */}
        <div className="reveal reveal-up">
          <SaleDetailsSection />
        </div>

        {/* Mutant Clash Section */}
        <div className="reveal reveal-up">
          <MutantClashSection />
        </div>

        {/* Scavenger Hunt Section */}
        <div className="reveal reveal-up">
          <ScavengerHuntSection />
        </div>

        {/* Endless Weapons Scroll Section */}
        <div className="reveal reveal-up">
          <EndlessWeaponsScrollWithImages />
        </div>

        {/* Game Mechanics Section */}
        <div className="reveal reveal-up">
          <GameMechanicsSection />
        </div>

        {/* Stake to Survive Section */}
        <div className="reveal reveal-up">
          <StakeToSurviveSection />
        </div>

        {/* Adventure Missions Section */}
        <div className="reveal reveal-up">
          <AdventureMissionsSection />
        </div>

        {/* Loot & Resources Section */}
        <div className="reveal reveal-up">
          <LootResourcesSection />
        </div>

        {/* Fairness & Stability Section */}
        <div className="reveal reveal-up">
          <FairnessStabilitySection />
        </div>

        {/* Player Control Section */}
        <div className="reveal reveal-up">
          <PlayerControlSection />
        </div>

        {/* Blacksmith Section */}
        <div className="reveal reveal-up">
          <BlacksmithSection />
        </div>

        {/* Quests & Progression Section */}
        <div className="reveal reveal-up">
          <QuestsProgressionSection />
        </div>

        {/* Dungeon Boss Section */}
        <div className="reveal reveal-up">
          <DungeonBossSection />
        </div>

        {/* Nemesis Project Section */}
        <div className="reveal reveal-up">
          <NemesisProjectSection />
        </div>

        {/* Whitepaper CTA Section - Added just before Roadmap */}
        <div className="reveal reveal-up">
          <WhitepaperCtaSection />
        </div>

        {/* Roadmap Section */}
        <div className="reveal reveal-up">
          <RoadmapSection />
        </div>

        {/* Laying Foundations Section */}
        <div className="reveal reveal-up">
          <LayingFoundationsSection />
        </div>

        {/* Ecosystem Section */}
        <div className="reveal reveal-up">
          <EcosystemSection />
        </div>

        {/* Foundation Section */}
        <div className="reveal reveal-up">
          <FoundationSection />
        </div>

        {/* Innovations Section */}
        <div className="reveal reveal-up">
          <InnovationsSection />
        </div>

        {/* Accessibility Section */}
        <div className="reveal reveal-up">
          <AccessibilitySection />
        </div>

        {/* Growth Section */}
        <div className="reveal reveal-up">
          <GrowthSection />
        </div>

        {/* Progressive Web App Section */}
        <div className="reveal reveal-up">
          <ProgressiveWebAppSection />
        </div>

        {/* Team Section */}
        <div className="reveal reveal-up">
          <TeamSection />
        </div>

        {/* FAQ Section */}
        <div className="reveal reveal-up">
          <FaqSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
