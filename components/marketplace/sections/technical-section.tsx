import { Store, ArrowLeftRight, Shield, Code2, FileCode, Layers, Coins } from "lucide-react"

/*
* Updated:
* - Integrated marketplace-section and technical-section into a single component
* - Eliminated redundant information while preserving all valuable content
* - Reorganized content for a more logical information flow
* - Added dark mode support with appropriate colors and contrasts
* - Enhanced with modern SaaS-style design elements
* - Created comprehensive titles with gradient text
* - Improved visual hierarchy and information organization
*/

export function TechnicalSection() {
  return (
    <section className="mb-16 md:mb-24 mt-8 md:mt-16 relative">
      <div className="absolute top-40 left-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      
      <div className="relative">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
            <span className="text-gray-600 dark:text-white block">Build Decentralized Trading Applications—</span>
            <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent block">
              With Protocol-Level Features, No Complex Contracts
            </span>
          </h2>
          <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Verus P2P Marketplace protocol provides a complete foundation for developers to build next-generation trading applications with simple API commands, no smart contract programming required.
          </p>
        </div>
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Technical Advantages */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Technical Advantages
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Instead of complex smart contracts, leverage protocol-level marketplace functionality for greater security and simplicity.
              </p>
              
              <ul className="space-y-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Reduced complexity – No need to write and audit complex escrow smart contracts
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Lower transaction costs – Direct protocol implementation means minimal fees
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Superior security – Protocol-level validation eliminates vulnerabilities
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Guaranteed execution – Atomic settlement ensures transaction finality
                </li>
              </ul>
            </div>
          </div>

          {/* Key RPC Commands */}
          <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Simple API Commands
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Every aspect of marketplace functionality is handled at the protocol level, from order matching to settlement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">makeoffer</span> - Creates trading offers
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">takeoffer</span> - Accepts existing offers
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">getoffers</span> - Queries available offers
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      <span className="font-medium">closeoffers</span> - Cancels active offers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <ArrowLeftRight className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Core Capabilities
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The protocol provides a comprehensive suite of trading capabilities that work across the Verus ecosystem.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Complete offer management system
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Global offer discovery and querying
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Atomic settlement engine
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Privacy-preserving transactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <FileCode className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Implementation Best Practices
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Follow these recommended practices to build performant and user-friendly marketplace applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Cache offer data to reduce node queries
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Implement offer verification before accepting
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Provide clear transaction previews
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Handle payment address generation for privacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Getting Started Section */}
        <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-[22px] md:text-[28px] font-medium text-gray-900 dark:text-white">
                Getting Started
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-100/40 dark:border-blue-900/20">
                <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-4">Setup Steps</h4>
                <ul className="space-y-3">
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set up a Verus node or connect to existing node
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Initialize a client library for API communication
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Authenticate with node credentials
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Make API calls to marketplace functions
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-100/40 dark:border-blue-900/20">
                <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-4">Business Models</h4>
                <ul className="space-y-3">
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Premium features and advanced trading tools
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Subscription services for market data
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Integration services and platform connections
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    No platform risk or central dependencies
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-100/40 dark:border-blue-900/20">
                <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-4">Integration Support</h4>
                <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  For comprehensive documentation, code examples, and development support, visit our Developer Portal or join the Verus Discord community.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  The protocol supports privacy-preserving transactions, allowing you to build trading applications for sensitive use cases where public offers would be inappropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Use Cases Section - Simplified */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Specialized Marketplaces
                </h3>
              </div>
              
              <ul className="space-y-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Domain/username marketplaces for premium VerusIDs
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Digital collectible exchanges for NFT-like assets
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Service marketplaces with tokenized access
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Financial markets for specialized currencies
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Trading Platforms
                </h3>
              </div>
              
              <ul className="space-y-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Advanced order matching systems
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Portfolio management applications
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Cross-chain trading platforms
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Mobile trading applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}