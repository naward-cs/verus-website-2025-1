import { Network, Coins, Database, ArrowUpDown, Store } from "lucide-react"
import Link from "next/link"

export function SolutionsGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-2 md:mt-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 px-4 md:px-0">
        {/* Blockchains */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border-2 border-[#E9EFFC] flex items-center justify-center mb-6">
              <Network className="h-7 w-7 text-verus-blue/80" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[18px] md:text-[22px] font-medium text-black">Blockchains</h3>
              <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
            </div>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
              Launch powerful & interoperable blockchains. Rent-free, independent & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">51% attack resistant</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Cross-chain access</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Custom economics</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Protocol-level DeFi</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">On-chain storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Marketplace</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/pbaas-chains" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Currencies */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] rounded-lg p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border-2 border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
              <Coins className="h-7 w-7 text-verus-blue/80" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[18px] md:text-[22px] font-medium text-black">Currencies</h3>
              <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
            </div>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed group-hover:text-black transition-colors">
              Create currencies, tokens & liquidity pools. Secured and verified by consensus.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Basket currencies</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Simple tokens</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Liquidity pools</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Crowdfunding</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Bridge to ETH</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/pbaas-currencies" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* VerusID */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
              <img 
                src="/img/at-full-black.svg" 
                alt="VerusID Icon" 
                className="h-7 w-7 [filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)]"
              />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-black mb-4">VerusID</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
              SSIDs, namespaces & building blocks for dApps.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Self-sovereign</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Revocable</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Recoverable</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Data storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Multi-sig</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Private</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/verusid" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* DeFi & Payments */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
              <ArrowUpDown className="h-7 w-7 text-verus-blue/80" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-black mb-4">DeFi & Payments</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
              Fair DeFi without MEV exploitation. Low fees & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">MEV resistant</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Ultra-low fees</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Basket currencies</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Multi-currency</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Cross-chain</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/defi-payments" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
              <Store className="h-7 w-7 text-verus-blue/80" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-black mb-4">Marketplace</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
              Peer-to-peer marketplace. No third parties needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Atomic swaps</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Global discovery</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Private offers</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Smart transfers</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">No escrow</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/marketplace" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Store & Retrieve Data */}
        <div className="bg-gradient-to-b from-[#E9EFFC] to-white border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
              <Database className="h-7 w-7 text-verus-blue/80" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-black mb-4">Store & Retrieve Data</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
              Complete on-chain database. Store & retrieve data.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Encrypted storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Indexed queries</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Cross-chain access</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Structured data</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 text-verus-blue/80 px-3 py-1.5 rounded-full border border-verus-blue/10">Usage-based fees</span>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/build/data" className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}