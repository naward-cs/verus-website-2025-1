import { Code, TabletSmartphone, Search, LayoutGrid } from "lucide-react"

/*
* Updated: Transformed the technical section to have a modern SaaS-like design
* with dark mode support, decorative background elements, and consistent card styling.
*/
export function TechnicalSection() {
  return (
    <section className="mb-24 relative">
      <div className="absolute top-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-8">
        <span className="text-gray-600 dark:text-white">Technical Capabilities</span>
        <span className="relative ml-2">
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
              & Integration
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
          </span>
        </span>
      </h2>

      <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-12">
        VerusID provides powerful technical capabilities that make it ideal for a wide range of applications. From smart contract integration to cross-chain compatibility, VerusID is designed to be a versatile identity solution for the decentralized web.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* API Integration */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                API Integration
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusID can be easily integrated into applications using the Verus API. This enables developers to build applications that leverage the powerful identity capabilities of VerusID without having to implement complex blockchain logic.
              </p>
              <ul className="space-y-3 pl-2 mt-6">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  RPC and REST API access
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Identity creation and management
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Transaction signing and verification
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile & Desktop Compatibility */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <TabletSmartphone className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Mobile & Desktop Compatibility
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusID is designed to work seamlessly on both mobile and desktop platforms. The Verus Mobile wallet and desktop applications provide a user-friendly interface for managing VerusIDs and interacting with the Verus ecosystem.
              </p>
              <ul className="space-y-3 pl-2 mt-6">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Cross-platform identity management
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Consistent experience across devices
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Secure storage of identity credentials
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search & Resolution */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Search & Resolution
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusIDs can be searched and resolved on the Verus network, similar to traditional domain name resolution. This enables users to find and interact with other VerusIDs in a user-friendly manner.
              </p>
              <ul className="space-y-3 pl-2 mt-6">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Human-readable name resolution
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Public key and address lookup
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Built-in identity directory
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Smart Contract Interaction */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Smart Contract Interaction
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusIDs can interact with smart contracts on the Verus network and connected chains. This enables a wide range of applications, from decentralized finance to digital asset management.
              </p>
              <ul className="space-y-3 pl-2 mt-6">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Contract calling and verification
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Multi-chain contract integration
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Secure transaction signing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}