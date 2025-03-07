import { Shield, TrendingUp, Network, Settings, Store, ShoppingCart, Lock, Coins, Cpu, Rocket } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* 51% Attack Resistant */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                51% Attack Resistant
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Every PBaaS chain inherits Verus' proven 50/50 PoW/PoS security model, making each chain provably resistant to hash attacks through combined mining power and staking consensus. This unique model ensures robust network security from day one.
              </p>
            </div>
          </div>

          {/* Custom Tokenomics */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <TrendingUp className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Custom Coinomics
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Design your chain's complete economic model with flexible parameters for emission curves, mining rewards, halving periods, and premine allocations. Create unique coin distribution strategies tailored to your project's specific needs.
              </p>
            </div>
          </div>

          {/* True Interoperability */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Settings className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Custom Economics
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Take full control of your chain's fee structure by setting custom prices for VerusID registrations, currency launches, and network services. All fees are denominated in your native coin, creating a self-sustaining economic ecosystem.
              </p>
            </div>
          </div>

        </div>

        {/* Center Column - 4 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* True Interoperability */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Network className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                True Interoperability
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Connect seamlessly with other PBaaS chains and external networks through the Verus Protocol. Built-in cross-chain bridges enable fluid value transfer.
              </p>
            </div>
          </div>

          {/* L1 Marketplace */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <ShoppingCart className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                L1 Marketplace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Enable direct peer-to-peer trading between VerusIDs and currencies with built-in offer management and global listings.
              </p>
            </div>
          </div>

          {/* L1 DeFi Protocol */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Store className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                L1 DeFi Protocol
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Native liquidity pools and fractional reserve currencies that function as automated market makers with very low fees. Built-in MEV resistance ensures fair trading.
              </p>
            </div>
          </div>

          {/* Multi-Currency System */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 pb-12 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Coins className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Multi-Currency System
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Support unlimited currencies and tokens natively on your chain, with built-in conversion capabilities and cross-chain bridging.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Independent Processing */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 pb-12 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Cpu className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Independent Processing
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Each PBaaS chain operates with complete independence, maintaining its own processing power and validation rules. This separation prevents network congestion and ensures consistent performance regardless of other chains' activity.
              </p>
            </div>
          </div>

          {/* Easy Launch */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Rocket className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Easy Launch
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Deploy your custom blockchain with a simple API command—no programming required. Your chain inherits all Verus L1 features instantly, letting you focus on building your project rather than developing blockchain infrastructure.
              </p>
            </div>
          </div>

          {/* Advanced Privacy */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Lock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Advanced Privacy
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Leverage industry-leading zk-SNARKs technology for optional transaction privacy. Users can choose between transparent and shielded transactions, maintaining confidentiality while ensuring regulatory compliance when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}