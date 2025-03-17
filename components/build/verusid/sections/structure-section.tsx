import { Key, Shield, Network, Database } from "lucide-react"

/*
* Updated: 
* - Transformed the structure section to have a modern SaaS-like design with dark mode support
* - Centered the title and subtitle
* - Reorganized the four main sections into a 2x2 grid layout on desktop
* - Added three secondary buttons at the bottom of the section
*/
export function StructureSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -bottom-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      
      {/* Centered Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-8">
          <span className="text-gray-600 dark:text-white">VerusID Structure—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Self-Sovereign Identity
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
            Each VerusID consists of several components that together provide its powerful capabilities. This structure enables VerusID to serve as the foundation for launching currencies, tokens, and entire blockchains.
          </p>
          <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
            Unlike traditional blockchain addresses that are cryptographic hashes, VerusIDs are human-readable names that can be owned, controlled, transferred, and used across the Verus network.
          </p>
        </div>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Core Components */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Key className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Core Components
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Human-readable name (e.g., "YourBrand@")
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Primary address containing private key
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Identity address (i-address)
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Optional private z-address
              </li>
            </ul>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Security Features
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Revocation authorities for key compromise
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Recovery authorities for backup access
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Time-locked vaults for secure storage
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Multi-signature capabilities
              </li>
            </ul>
          </div>
        </div>

        {/* Data Storage */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Data Storage
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">VDXF Storage</h4>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  The Verus Data eXchange Format (VDXF) provides a structured system for defining and storing data within VerusIDs. This enables IDs to store complex data structures, configurations, or application-specific information.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Contentmap & Contentmultimap</h4>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Store key-value data and complex nested data structures directly in your VerusID. Perfect for application configurations, user settings, or any structured data that needs blockchain verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Namespace Capabilities */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Namespace Capabilities
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Hierarchical Structure</h4>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  VerusIDs can create sub-namespaces for organizing entities within your ecosystem. This hierarchical structure allows for complex organizational systems and clear ownership delineation.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Launch Capabilities</h4>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  The namespace serves as the foundation for issuing currencies and tokens, and for launching entire blockchains. Your VerusID becomes the controller and reference point for all related assets and systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-16">
        <a 
          href="#" 
          className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          Learn more about on-chain data
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a 
          href="#" 
          className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          Learn more about currencies
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a 
          href="#" 
          className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          Learn more about PBaaS chains
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}