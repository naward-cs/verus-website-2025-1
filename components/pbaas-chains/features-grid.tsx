import { Shield, TrendingUp, Network, Settings, Store, ShoppingCart, Lock, Coins, Cpu, Rocket } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* 51% Attack Resistant */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                51% Attack Resistant
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Every PBaaS chain inherits Verus' proven 50/50 PoW/PoS security model, making each chain provably resistant to hash attacks through combined mining power and staking consensus. This unique model ensures robust network security from day one.
              </p>
            </div>
          </div>

          {/* Custom Tokenomics */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <TrendingUp className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Custom Coinomics
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Design your chain's complete economic model with flexible parameters for emission curves, mining rewards, halving periods, and premine allocations. Create unique coin distribution strategies tailored to your project's specific needs.
              </p>
            </div>
          </div>

          {/* True Interoperability */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Settings className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Custom Economics
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Take full control of your chain's fee structure by setting custom prices for VerusID registrations, currency launches, and network services. All fees are denominated in your native coin, creating a self-sustaining economic ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 4 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* True Interoperability */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                True Interoperability
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect seamlessly with other PBaaS chains and external networks through the Verus Protocol. Built-in cross-chain bridges enable fluid value transfer.
              </p>
            </div>
          </div>

          {/* L1 Marketplace */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <ShoppingCart className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                L1 Marketplace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Enable direct peer-to-peer trading between VerusIDs and currencies with built-in offer management and global listings.
              </p>
            </div>
          </div>

          {/* L1 DeFi Protocol */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                L1 DeFi Protocol
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Native liquidity pools and fractional reserve currencies that function as automated market makers with very low fees. Built-in MEV resistance ensures fair trading.
              </p>
            </div>
          </div>

          {/* Multi-Currency System */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Multi-Currency System
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Support unlimited currencies and tokens natively on your chain, with built-in conversion capabilities and cross-chain bridging.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Independent Processing */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Cpu className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Independent Processing
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Each PBaaS chain operates with complete independence, maintaining its own processing power and validation rules. This separation prevents network congestion and ensures consistent performance regardless of other chains' activity.
              </p>
            </div>
          </div>

          {/* Easy Launch */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Rocket className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Easy Launch
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Deploy your custom blockchain with a simple API command—no programming required. Your chain inherits all Verus L1 features instantly, letting you focus on building your project rather than developing blockchain infrastructure.
              </p>
            </div>
          </div>

          {/* Advanced Privacy */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Advanced Privacy
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Leverage industry-leading zk-SNARKs technology for optional transaction privacy. Users can choose between transparent and shielded transactions, maintaining confidentiality while ensuring regulatory compliance when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}