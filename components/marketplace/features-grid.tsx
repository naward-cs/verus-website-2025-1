import { Code2, Database, Lock, BookOpen, Cpu, Layers } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Open Protocol API */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Code2 className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Open Protocol API
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Integrate marketplace functionality directly into your applications with straightforward RPC commands. Build commercial applications on top of protocol-level marketplace functions without proprietary restrictions.
              </p>
            </div>
          </div>

          {/* Decentralized Offer Discovery */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Database className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Decentralized Offer Discovery
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Query the network for all available offers related to specific assets with built-in sorting and filtering capabilities. Your applications can access global market data without maintaining centralized order books or databases.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Composable Trading Architecture */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Layers className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Composable Trading Architecture
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Combine marketplace components with identity, storage, and DeFi capabilities to create complex trading applications. The modular design allows you to implement only the specific trading functions your application requires.
              </p>
            </div>
          </div>

          {/* Privacy-Preserving Commerce */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Lock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Privacy-Preserving Commerce
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Implement selective privacy in your marketplace applications using zero-knowledge transactions for sensitive trading activities. Enable your users to control their privacy while maintaining verifiable on-chain settlement.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Smart Asset Transfers */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <BookOpen className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Smart Asset Transfers
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Build applications that handle sophisticated asset transfers including VerusIDs with attached contracts, rights, or access controls. Create specialized marketplaces for digital identities with programmable ownership rights.
              </p>
            </div>
          </div>

          {/* Trustless Settlement Engine */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Cpu className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Trustless Settlement Engine
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Integrate atomic swaps that guarantee either successful completion of both sides of a trade or complete transaction rollback. Eliminate complex escrow logic from your applications while ensuring transaction finality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}