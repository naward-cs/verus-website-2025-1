import { Network, Coins, Database, ArrowUpDown, Store } from "lucide-react"
import Link from "next/link"

export function SolutionsGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-2 md:mt-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 px-4 md:px-0">
        {/* Blockchains */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <Network className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Blockchains</h3>
              <span className="text-[11px] font-medium bg-verus-blue/10 dark:bg-verus-blue/20 text-verus-blue dark:text-blue-300 px-1.5 py-0.5 rounded">PBaaS</span>
            </div>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Launch powerful & interoperable blockchains. Rent-free, independent & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">51% attack resistant</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Cross-chain access</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Custom economics</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Protocol-level DeFi</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">On-chain storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Marketplace</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/pbaas-chains" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Currencies */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <Coins className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Currencies</h3>
              <span className="text-[11px] font-medium bg-verus-blue/10 dark:bg-verus-blue/20 text-verus-blue dark:text-blue-300 px-1.5 py-0.5 rounded">PBaaS</span>
            </div>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Create currencies, tokens & liquidity pools. Secured and verified by consensus.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Basket currencies</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Simple tokens</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Liquidity pools</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Crowdfunding</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Bridge to ETH</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/pbaas-currencies" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* VerusID */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <img 
                src="/img/at-full-black.svg" 
                alt="VerusID Icon" 
                className="h-7 w-7 [filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] dark:[filter:invert(67%)_sepia(12%)_saturate(1352%)_hue-rotate(183deg)_brightness(100%)_contrast(97%)]"
              />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-4">VerusID</h3>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              SSIDs, namespaces & building blocks for dApps.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Self-sovereign</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Revocable</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Recoverable</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Data storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Multi-sig</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Private</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/verusid" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* DeFi & Payments */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <ArrowUpDown className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-4">DeFi & Payments</h3>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Fair DeFi without MEV exploitation. Low fees & secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">MEV resistant</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Ultra-low fees</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Basket currencies</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Multi-currency</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Cross-chain</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/defi-payments" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <Store className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-4">Marketplace</h3>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Peer-to-peer marketplace. No third parties needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Atomic swaps</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Global discovery</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Private offers</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Smart transfers</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">No escrow</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/marketplace" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Store & Retrieve Data */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] rounded-lg p-8 relative overflow-hidden h-full flex flex-col">
          <div className="relative flex flex-col flex-grow">
            <div className="h-14 w-14 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-verus-blue dark:text-blue-400" />
            </div>
            <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-4">Store & Retrieve Data</h3>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              Complete on-chain database. Store & retrieve data.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Encrypted storage</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Indexed queries</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Cross-chain access</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Protocol-level</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Structured data</span>
              <span className="text-[12px] font-medium bg-verus-blue/5 dark:bg-verus-blue/10 text-verus-blue/80 dark:text-blue-300 px-3 py-1.5 rounded-full border border-verus-blue/10 dark:border-blue-800/30">Usage-based fees</span>
            </div>
            <div className="mt-auto pt-8">
              <Link 
                href="/build/data" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}