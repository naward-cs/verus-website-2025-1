import { Code2, Database, Lock, BookOpen, Cpu, Layers } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Open Protocol API */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Code2 className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Open Protocol API
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Integrate marketplace functionality directly into your applications with straightforward RPC commands. Build commercial applications on top of protocol-level marketplace functions without proprietary restrictions.
              </p>
            </div>
          </div>

          {/* Decentralized Offer Discovery */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Decentralized Offer Discovery
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Query the network for all available offers related to specific assets with built-in sorting and filtering capabilities. Your applications can access global market data without maintaining centralized order books or databases.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Composable Trading Architecture */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Layers className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Composable Trading Architecture
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Combine marketplace components with identity, storage, and DeFi capabilities to create complex trading applications. The modular design allows you to implement only the specific trading functions your application requires.
              </p>
            </div>
          </div>

          {/* Privacy-Preserving Commerce */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Lock className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Privacy-Preserving Commerce
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Implement selective privacy in your marketplace applications using zero-knowledge transactions for sensitive trading activities. Enable your users to control their privacy while maintaining verifiable on-chain settlement.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Smart Asset Transfers */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <BookOpen className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Smart Asset Transfers
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Build applications that handle sophisticated asset transfers including VerusIDs with attached contracts, rights, or access controls. Create specialized marketplaces for digital identities with programmable ownership rights.
              </p>
            </div>
          </div>

          {/* Trustless Settlement Engine */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Cpu className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                Trustless Settlement Engine
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Integrate atomic swaps that guarantee either successful completion of both sides of a trade or complete transaction rollback. Eliminate complex escrow logic from your applications while ensuring transaction finality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}