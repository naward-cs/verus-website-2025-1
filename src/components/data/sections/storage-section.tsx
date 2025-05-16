import { Database, Lock, Scale } from "lucide-react"

/*
* Updated:
* - Transformed to match PBaaS content styling with modern gradient backgrounds
* - Created more developer-focused title
* - Added radial gradients and improved background elements
* - Enhanced card designs with hover effects
* - Improved spacing and layout for better readability
*/
export function StorageSection() {
  return (
    <section className="mb-24 md:mb-32 md:mt-32 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-10 h-80 w-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] -z-10"></div>
      
      {/* Developer-focused Title */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-6 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Build with Blockchain Native Storage—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Beyond Traditional Databases
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Integrate censorship-resistant storage directly in your application with blockchain-level security guarantees.
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
                Every PBaaS chain includes a native storage layer that lets you store and index data directly on the blockchain. Unlike traditional systems that rely on external storage solutions, Verus makes data storage a core protocol feature.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 tracking-tight leading-relaxed">
                Store up to 999,999 bytes per entry with encryption and indexing. Data can be stored publicly, privately through zk-SNARKs transactions, or attached to VerusIDs for fine-grained access control.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Storage Capabilities */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Developer API Features
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Store up to 999,999 bytes per entry
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Automatic indexing for fast retrieval
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Support for structured and unstructured data
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cross-chain data references and queries
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacy Options */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Privacy & Security
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Default encryption for all stored data
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Private storage through zk-SNARKs transactions
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      VerusID-based access control
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Selective data sharing capabilities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* Storage Costs */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Cost Structure for Developers
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Verus Storage</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      On the Verus blockchain, storage costs approximately 0.01 VRSC per kilobyte. Fees are paid in VRSC and flow directly to miners and stakers who secure the network.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">PBaaS Chain Storage</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Each PBaaS chain can set its own storage fees based on capacity and validator costs. This creates a competitive marketplace for blockchain storage with different chains optimizing for different use cases.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Cost Optimization</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Applications can optimize storage costs by choosing chains with appropriate fee structures and using cross-chain references to distribute data efficiently across the network.
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