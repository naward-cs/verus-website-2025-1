import { Key, Database, Shield, Network, Coins, Store, Lock, Scale, Code2 } from "lucide-react"

/*
* Updated: Styled the features grid to match the modern design from PBaaS chains component
* with dark mode support, decorative background elements, and consistent card styling.
*/
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
          {/* Permanent Namespace */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Key className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Permanent Namespace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusID serves as the permanent namespace for the entire protocol. Launch currencies, tokens, and blockchains with a unique, human-readable identity.
              </p>
            </div>
          </div>

          {/* Self-Sovereign Identity */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Self-Sovereign Identity
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Complete autonomy over your digital identity with revocation and recovery capabilities that protect against key loss or theft.
              </p>
            </div>
          </div>

          {/* Blockchain Launching Pad */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Network className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Blockchain Launching Pad
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Launch fully interconnected, customizable, independent blockchains without any coding needed—just simple commands using your VerusID.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Currency & Token Issuance */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Coins className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Currency & Token Issuance
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Create powerful currencies and tokens including basket currencies (DeFi AMMs) with your VerusID serving as the token issuer and namespace.
              </p>
            </div>
          </div>

          {/* Data Publication & Storage */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Data Publication & Storage
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Use VerusID and VDXF as a controlled public storage system to publish and store data with multiple levels of nesting.
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Security Features
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Verus Vault enables theft-proof security by locking funds with customizable timelocks, while revocation and recovery authorities provide additional security layers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 3 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Multichain Interoperability */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Scale className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Multichain Interoperability
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusIDs work across all PBaaS chains and can interact with Ethereum through the bridge, enabling truly cross-chain applications.
              </p>
            </div>
          </div>

          {/* Simple Integration */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute bottom-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Code2 className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Simple Integration
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Integrate VerusID into your applications with simple API commands. No complex blockchain development experience needed.
              </p>
            </div>
          </div>

          {/* Decentralized Marketplace */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[250px]">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Store className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Decentralized Marketplace
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Build on the built-in peer-to-peer marketplace for VerusIDs and currencies, enabling direct exchange without intermediaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}