import { ArrowUpDown, Shield, Coins } from "lucide-react"

export function DeFiSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Fair DeFi Without MEV
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Verus DeFi solves the MEV problem by processing all conversions simultaneously at the protocol level. This means every trade in a block gets the same fair price, eliminating front-running, back-running, and sandwich attacks.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Unlike other DeFi platforms that rely on smart contracts and sequential transaction processing, Verus handles all DeFi operations through consensus. This not only prevents MEV exploitation but also eliminates smart contract vulnerabilities.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* MEV Protection */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">MEV Protection</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">No front-running or sandwich attacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Same price for all trades in a block</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">No value extraction by bots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <ArrowUpDown className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Fee Structure</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">0.025% for reserve-to-basket conversions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">0.05% for reserve-to-reserve conversions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">50% to miners/stakers, 50% to reserves</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Basket Currencies */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Basket Currencies</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Reserve Currencies</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Create sophisticated basket currencies backed by up to 10 reserve currencies. Configure reserve ratios from 5% to 100% and let the protocol handle supply management automatically.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Liquidity Pools</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Every basket currency functions as an automated market maker (AMM) with built-in liquidity pools. Trade between any reserve currencies with minimal slippage and MEV protection.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Cross-Chain Trading</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Trade seamlessly across all PBaaS chains and with Ethereum through the bridge. Access unified liquidity across the entire network with protocol-level security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}