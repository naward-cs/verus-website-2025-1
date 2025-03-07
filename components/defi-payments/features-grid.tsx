import { ArrowUpDown, DollarSign, Shield, Wallet, Coins, Store, Lock, Scale, Network } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* MEV Resistant */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                MEV Resistant
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                All conversions in a block get the same price with no spread. No front-running, back-running, or sandwich attacks possible. Fair trading for everyone.
              </p>
            </div>
          </div>

          {/* Ultra-Low Fees */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <DollarSign className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Ultra-Low Fees
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Only 0.025% fee for reserve-to-basket conversions and 0.05% for reserve-to-reserve. 50% of fees go to miners/stakers, 50% to reserves.
              </p>
            </div>
          </div>

          {/* Protocol-Level Security */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Lock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Protocol-Level Security
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                All DeFi operations verified by miners and stakers. No smart contract bugs or exploits. Security built into the protocol itself.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Basket Currencies */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Coins className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Basket Currencies
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Create sophisticated basket currencies backed by up to 10 reserve currencies. Configurable reserve ratios from 5% to 100%. Automatic supply management.
              </p>
            </div>
          </div>

          {/* Instant Payments */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Wallet className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Instant Payments
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Send and receive payments instantly with 1-minute block times. No chargebacks, no intermediaries, and no waiting for settlement.
              </p>
            </div>
          </div>

          {/* Multi-Currency Support */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <ArrowUpDown className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Multi-Currency Support
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Accept payments in any currency on the Verus network. Support for all ERC-20 tokens bridged from Ethereum. Automatic currency conversion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* QR Code Integration */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Store className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                QR Code Integration
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Package invoices into deeplinks and QR codes for seamless payment experiences. Easy integration with Verus Mobile and other wallets.
              </p>
            </div>
          </div>

          {/* Cross-Chain Trading */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Network className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Cross-Chain Trading
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Trade seamlessly across all PBaaS chains and with Ethereum through the bridge. Unified liquidity across the entire network.
              </p>
            </div>
          </div>

          {/* Fee Distribution */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Scale className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Fee Distribution
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Transparent fee distribution between miners/stakers and reserves. No value extraction by middlemen or MEV bots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}