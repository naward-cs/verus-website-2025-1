import { Wallet, Coins, Scale, Lock, ArrowUpDown, Percent, Repeat, ExternalLink, Clock, Lightbulb } from "lucide-react"

export function CurrencyTypes() {
  return (
    <section className="mb-24 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Two Types of Currencies—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Different Use Cases
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-md blur-sm" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Choose between reserve-backed basket currencies or standalone token currencies based on your project needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basket Currencies */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Coins className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                Basket Currencies
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">AMM Functionality</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Function like automated market makers (AMMs) with a reserve of one or more currencies backing them
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <ArrowUpDown className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">Dynamic Supply</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Supply expands when people convert into the basket currency and contracts when they convert out
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Percent className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">Fractionally Backed</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Can be fully (100%) or partially backed by reserves (as low as 5%)
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Scale className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">Value Stability</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Value is directly linked to what's in the reserves and the reserve ratio
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">MEV-Resistant</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  All conversions in the same block get the same fair price with no front-running or sandwich attacks
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20 flex items-start gap-3">
                <Repeat className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Low Fees</h4>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Conversion fees are 0.025% when converting to/from reserves, and 0.05% when converting between reserves
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Can be used as reserves in other basket currencies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Can be exported as ERC-20 to Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Token Currencies */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                Simple Token Currencies
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">No Reserves</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Standalone currencies without any backing reserves
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">Static Supply</h4>
                </div>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  For decentralized tokens the supply is fixed (unless burned)
                </p>
              </div>

              <div className="flex flex-col gap-5 px-2 mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Can be used as reserves in other basket currencies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  </div>
                  <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Can be exported as ERC-20 to Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preconversion Period Explanation */}
      <div className="mt-8 bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative p-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent dark:from-blue-400/10 blur-3xl -z-10"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
              The Preconversion Period
            </h3>
          </div>

          <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Every currency launch includes a preconversion (fundraising) phase before the currency officially begins operating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
              <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Coins className="h-4 w-4 text-blue-500" />
                For Basket Currencies
              </h4>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Users contribute currencies to the reserves and receive a proportional share of the initial supply based on their contribution value.
              </p>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                This establishes the initial reserve backing and distribution of the currency.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
              <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-blue-500" />
                For Simple Tokens
              </h4>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Users send currency to the creator at a predetermined exchange rate to receive tokens when the currency launches.
              </p>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                This provides initial funding for the project and distributes tokens to early supporters.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
              <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Duration</h4>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                The preconversion period lasts at least 20 blocks (approximately 20 minutes) but can be configured to run longer depending on project needs.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
              <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Minimum Funding Requirements</h4>
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                If a minimum funding requirement is set and not met, the currency doesn't launch and all contributors receive automatic refunds (minus network fees).
              </p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/80 dark:border-blue-900/30 flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
              The preconversion period is essentially a bootstrapping mechanism to establish initial liquidity and value for a new currency. It ensures the currency has real backing and market participation from day one.
            </p>
          </div>
        </div>
      </div>

   
    </section>
  )
} 