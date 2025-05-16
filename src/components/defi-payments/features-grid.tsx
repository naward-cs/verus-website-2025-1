import { ArrowUpDown, DollarSign, Shield, Wallet, Coins, Store, Lock, Scale, Network } from "lucide-react"

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
          {/* MEV Resistant */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                MEV Resistant
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                All conversions in one ore more blocks get the same price with no spread. No front-running, back-running, or sandwich attacks possible. Fair trading for everyone.
              </p>
            </div>
          </div>

          {/* Ultra-Low Fees */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <DollarSign className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Ultra-Low Fees
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Only 0.025% fee for reserve-to-basket conversions and 0.05% for reserve-to-reserve. 50% of fees go to miners/stakers, 50% to reserves.
              </p>
            </div>
          </div>

          {/* Protocol-Level Security */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Protocol-Level Security
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                All DeFi operations verified by miners and stakers. No smart contract bugs or exploits. Security built into the protocol itself.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Basket Currencies */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Basket Currencies
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Create sophisticated basket currencies backed by up to 10 reserve currencies. Configurable reserve ratios from 5% to 100%. Automatic supply management.
              </p>
            </div>
          </div>

          {/* Instant Payments */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Wallet className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Final Payments
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Send and receive payments with 1-minute block times (on Verus). No chargebacks, no intermediaries.
              </p>
            </div>
          </div>

          {/* Multi-Currency Support */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <ArrowUpDown className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Multi-Currency Support
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Accept payments in any currency on the Verus network. Support for all ERC-20 tokens bridged from Ethereum. Automatic currency conversion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* QR Code Integration */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                QR Code Integration
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Package invoices into deeplinks and QR codes for seamless payment experiences. Easy integration with Verus Mobile and other wallets.
              </p>
            </div>
          </div>

          {/* Cross-Chain Trading */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Cross-Chain Conversions
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Convert seamlessly across all PBaaS chains and with Ethereum through the bridge. Unified liquidity across the entire network.
              </p>
            </div>
          </div>

          {/* Fee Distribution */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Scale className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Fee Distribution
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Transparent fee distribution between miners/stakers and reserves. No value extraction by middlemen or MEV bots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}