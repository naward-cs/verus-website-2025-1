import { Key, Database, Shield, Network, Coins, Store, Lock, Scale, Code2 } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Permanent Namespace */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Key className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Permanent Namespace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                VerusID serves as the permanent namespace for the entire protocol. Launch currencies, tokens, and blockchains with a unique, human-readable identity.
              </p>
            </div>
          </div>

          {/* Self-Sovereign Identity */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Self-Sovereign Identity
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Complete autonomy over your digital identity with revocation and recovery capabilities that protect against key loss or theft.
              </p>
            </div>
          </div>

          {/* Blockchain Launching Pad */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Network className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Blockchain Launching Pad
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Launch fully interconnected, customizable, independent blockchains without any coding needed—just simple commands using your VerusID.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Currency & Token Issuance */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Coins className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Currency & Token Issuance
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Create powerful currencies and tokens including basket currencies (DeFi AMMs) with your VerusID serving as the token issuer and namespace.
              </p>
            </div>
          </div>

          {/* Data Publication & Storage */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Database className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Data Publication & Storage
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Use VerusID and VDXF as a controlled public storage system to publish and store data with multiple levels of nesting.
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Lock className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Security Features
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Verus Vault enables theft-proof security by locking funds with customizable timelocks, while revocation and recovery authorities provide additional security layers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Multichain Interoperability */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Scale className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Multichain Interoperability
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                VerusIDs work across all PBaaS chains and can interact with Ethereum through the bridge, enabling truly cross-chain applications.
              </p>
            </div>
          </div>

          {/* Simple Integration */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Code2 className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Simple Integration
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Integrate VerusID into your applications with simple API commands. No complex blockchain development experience needed.
              </p>
            </div>
          </div>

          {/* Decentralized Marketplace */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative group hover:from-white hover:to-white transition-all duration-300 min-h-[250px]">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Store className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Decentralized Marketplace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Build on the built-in peer-to-peer marketplace for VerusIDs and currencies, enabling direct exchange without intermediaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}