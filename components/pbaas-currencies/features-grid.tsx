import { Layers, Coins, Store, Settings, Clock, Rocket, Share2, Wallet, Shield } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* First Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Basket Currencies */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Layers className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Basket Currencies
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Create fractionally-backed currencies with 5-95% reserve ratios or fully-backed liquidity pools. Support up to 10 reserve currencies with customizable weights. Reserve ratios adjust automatically with preallocations and launch parameters.
              </p>
            </div>
          </div>

          {/* Simple Token Currencies */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Coins className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Simple Token Currencies
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Create standard tokens with fixed or flexible supply. Choose between decentralized immutable tokens or centralized versions with minting capabilities. Bridge seamlessly to Ethereum as ERC-20 tokens.
              </p>
            </div>
          </div>

          {/* Protocol-Level DeFi */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Store className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Protocol-Level DeFi
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Get built-in MEV resistance and front-running protection. All conversions in a block are solved simultaneously at the consensus level, ensuring fair pricing and equal treatment for all participants.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Custom Economics */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Settings className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Custom Economics
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Configure pre-launch parameters like carve-outs and discounts that affect reserve ratios. Set preallocation distributions, subID registration fees, and referral systems. Control your currency's economic model from launch through operation.
              </p>
            </div>
          </div>

          {/* Flexible Distribution */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Clock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Flexible Distribution
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Launch with premine allocations, vesting schedules, and time locks. Set up automatic distributions to VerusIDs, enable referral rewards, and create sophisticated token distribution strategies.
              </p>
            </div>
          </div>

          {/* Crowdfunding Ready */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Rocket className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Crowdfunding Ready
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Set minimum and maximum participation levels in multiple currencies. Automatic refunds if targets aren't met. Configure pre-launch discounts for early supporters.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Cross-Chain Bridge */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Share2 className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Cross-Chain Bridge
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Export any currency to Ethereum as an ERC-20 or import existing ERC-20s with 1:1 mapping. Non-custodial bridging enables seamless movement between ecosystems while maintaining security.
              </p>
            </div>
          </div>

          {/* Instant Liquidity */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Wallet className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Instant Liquidity
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Launch currencies with built-in liquidity pools. Reserve-backed currencies enable immediate trading without waiting for external market makers or liquidity providers.
              </p>
            </div>
          </div>

          {/* Consensus Security */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[300px]">
            <div className="relative h-full pb-4">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Consensus Security
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Every currency inherits the security of the underlying PBaaS chain. Transactions and conversions are protected by 50/50 PoW/PoS consensus, ensuring reliable operation from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}