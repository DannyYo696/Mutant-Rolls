export default function SaleDetailsSection() {
  return (
    <section id="sale-details" className="relative w-full py-16 md:py-24">
      {/* Dark background */}
      <div className="absolute inset-0 z-0 bg-[#091922]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="font-pixel text-yellow-300 text-2xl md:text-3xl text-center mb-10 pixel-text-highlight">
          MUTR Public Sale
          <br />
          Details
        </h2>

        {/* Sale rounds table - centered on all devices */}
        <div className="space-y-6 mb-10 text-center">
          {/* Round 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-4">
            <div className="font-pixel text-white text-sm md:text-base mb-2 md:mb-0 text-center md:text-center">
              Round 1 EARLY BIRD
            </div>
            <div className="font-pixel text-yellow-300 text-sm md:text-base text-center md:text-center">
              200,000,000 tokens at $0.001
              <br />
              <span className="text-green-400">(+100 FREE SPINS)</span>
            </div>
          </div>

          {/* Round 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-4">
            <div className="font-pixel text-white text-sm md:text-base mb-2 md:mb-0 text-center md:text-center">
              Round 2 Still early access!
            </div>
            <div className="font-pixel text-yellow-300 text-sm md:text-base text-center md:text-center">
              250,000,000 tokens at $0.0015
              <br />
              <span className="text-green-400">(+65 FREE SPINS)</span>
            </div>
          </div>

          {/* Round 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-4">
            <div className="font-pixel text-white text-sm md:text-base mb-2 md:mb-0 text-center md:text-center">
              Round 3 Last chance before listing!
            </div>
            <div className="font-pixel text-yellow-300 text-sm md:text-base text-center md:text-center">
              250,000,000 tokens at $0.002
              <br />
              <span className="text-green-400">(+35 FREE SPINS)</span>
            </div>
          </div>

          {/* DEX Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-4">
            <div className="font-pixel text-white text-sm md:text-base mb-2 md:mb-0 text-center md:text-center">
              DEX/CEX LISTING
            </div>
            <div className="font-pixel text-yellow-300 text-sm md:text-base text-center md:text-center">
              1 MUTR = $0.003 with $300k locked liquidity for 2 years
            </div>
          </div>

          {/* Max Supply */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-700 pb-4">
            <div className="font-pixel text-white text-sm md:text-base mb-2 md:mb-0 text-center md:text-center">
              Max Supply
            </div>
            <div className="font-pixel text-yellow-300 text-sm md:text-base text-center md:text-center">
              1,000,000,000 MUTR. Hard capped. No inflation. No minting
            </div>
          </div>
        </div>

        {/* Additional details */}
        <div className="space-y-6 mb-10">
          <p className="font-pixel text-white text-xs md:text-sm text-center">
            Token will be listed 48 hours after the ICO ends, with $300,000
            <br />
            locked liquidity for 2 years at a $0.003 price
          </p>

          <p className="font-pixel text-white text-xs md:text-sm text-center">
            A $50,000 buyback will activate if the price drops below $0.02
          </p>

          <p className="font-pixel text-white text-xs md:text-sm text-center">
            FREE Spins are usable for in-game rewards
          </p>
        </div>

        {/* Manual contribution */}
        <div className="mb-10">
          <p className="font-pixel text-white text-xs md:text-sm text-center mb-4">
            If you&apos;d prefer to contribute manually, send your contribution to
            <br />
            one of the official wallets listed below.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto text-center">
            <div className="font-pixel text-white text-xs">SOL -</div>
            <div className="font-pixel text-white text-xs">ETH -</div>
            <div className="font-pixel text-white text-xs">BTC -</div>
            <div className="font-pixel text-white text-xs">DOGE -</div>
            <div className="font-pixel text-white text-xs">BNB -</div>
            <div className="font-pixel text-white text-xs">USDT -</div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="font-pixel text-white text-xs md:text-sm">Contact: info@mutantrolls.com</p>
        </div>
      </div>
    </section>
  )
}
