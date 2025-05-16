import { Key, Code, Network } from "lucide-react"

/*
* Updated:
* - Transformed to match PBaaS content styling with modern gradient backgrounds
* - Created more developer-focused title
* - Added radial gradients and improved background elements
* - Enhanced card designs with hover effects
* - Improved spacing and layout for better readability
*/
export function VDXFSection() {
  return (
    <section className="mb-24 md:mb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-10 h-80 w-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] -z-10"></div>
      
      {/* Developer-focused Title */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-6 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Standardized Data Exchange—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Cross-Chain Compatible
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Build applications with a universal data schema that works seamlessly across all Verus ecosystem chains.
        </p>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
        
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 tracking-tight leading-relaxed">
                VDXF is a protocol-level system for defining, storing, and exchanging data across the Verus network. It provides globally unique identifiers for data types and enables applications to handle data consistently across different chains and systems.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 tracking-tight leading-relaxed">
                Every VDXF key is tied to a namespace (typically a VerusID) and includes metadata about how the data should be handled. This creates a permission system where only namespace controllers can create new data types.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Key Features */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Key className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Developer Integration
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Globally unique 20-byte identifiers
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Human-readable type names
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Namespace-based permissions
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Support for complex data structures
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Types */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Use Cases for Builders
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Identity profiles and credentials
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Application states and settings
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Digital asset metadata
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cross-chain references
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* Cross-Chain Storage */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Network className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Multi-Chain Architecture
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Data Sharding</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Distribute data across multiple PBaaS chains while maintaining atomic references. Scale horizontally by using different chains for different types of data or access patterns.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Storage Markets</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Each PBaaS chain can compete in storage markets based on capacity, costs, and features. Some chains might optimize for large files, while others focus on fast access to frequently used data.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Unified Access</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Query and access data seamlessly across all chains using VDXF keys. The protocol handles cross-chain references and data retrieval automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}