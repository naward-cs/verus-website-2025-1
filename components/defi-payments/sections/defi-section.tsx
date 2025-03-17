import { ArrowUpDown, Shield, Coins } from "lucide-react"

/*
* Updated:
* - Transformed component to match PBaaS chains styling with modern gradient backgrounds
* - Added developer-focused title with gradient text and decorative backgrounds
* - Improved hover states and transitions
* - Enhanced card designs with modern borders and shadows
* - Maintained original content while improving visual hierarchy
* - Removed blur effect from under the title
* - Removed background container gradient
* - Put title part after em dash on a new line
* - Removed all hover effects from cards
*/
export function DeFiSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="absolute top-40 right-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      
      <div className="relative">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
            <span className="text-gray-600 dark:text-white block">Build DeFi Applications—</span>
            <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent block">
              Protected From MEV Attacks
            </span>
          </h2>
          <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Develop fair, secure DeFi applications with built-in MEV protection at the protocol level
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4 mb-8">
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Verus DeFi solves the MEV problem by processing all conversions simultaneously at the protocol level. This means every trade in a block gets the same fair price, eliminating front-running, back-running, and sandwich attacks.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Unlike other DeFi platforms that rely on smart contracts and sequential transaction processing, Verus handles all DeFi operations through consensus. This not only prevents MEV exploitation but also eliminates smart contract vulnerabilities.
              </p>
            </div>

            <div className="space-y-6">
              {/* MEV Protection */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">MEV Protection</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      No front-running or sandwich attacks
                    </li>
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Same price for all trades in a block
                    </li>
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      No value extraction by bots
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fee Structure */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <ArrowUpDown className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Fee Structure</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      0.025% for reserve-to-basket conversions
                    </li>
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      0.05% for reserve-to-reserve conversions
                    </li>
                    <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      50% to miners/stakers, 50% to reserves
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Coins className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Basket Currencies
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                    <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Reserve Currencies</h4>
                    <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      Create sophisticated basket currencies backed by up to 10 reserve currencies. Configure reserve ratios from 5% to 100% and let the protocol handle supply management automatically.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                    <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Liquidity Pools</h4>
                    <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every basket currency functions as an automated market maker (AMM) with built-in liquidity pools. Trade between any reserve currencies with minimal slippage and MEV protection.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                    <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Cross-Chain Trading</h4>
                    <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      Trade seamlessly across all PBaaS chains and with Ethereum through the bridge. Access unified liquidity across the entire network with protocol-level security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}