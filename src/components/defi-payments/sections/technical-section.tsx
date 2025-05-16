import { Code2, FileCode, Layers, Wallet, QrCode, ArrowUpDown } from "lucide-react"

/*
* Updated:
* - Transformed component to match PBaaS chains styling with modern gradient backgrounds
* - Added developer-focused title with gradient text and decorative backgrounds
* - Created a more engaging and centered title for developers
* - Improved hover states and transitions
* - Enhanced card designs with modern borders and shadows
* - Maintained original content while improving visual hierarchy
* - Removed blur effect from under the title
* - Removed background container gradient
* - Put title part after em dash on a new line
* - Removed all hover effects from cards
* - Integrated PaymentsSection and TechnicalSection into a single component
* - Reorganized content to eliminate duplicate information
*/
export function TechnicalSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="absolute top-40 left-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      
      <div className="relative">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
            <span className="text-gray-600 dark:text-white block">Build Payment Infrastructure—</span>
            <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent block">
              Simple API, Cross-Chain Compatible
            </span>
          </h2>
          <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Implement standardized payment solutions and financial protocols with straightforward API commands
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Payment Solutions */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Wallet className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Payment Infrastructure</h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                The VerusPay Invoice specification enables standardized formats for creating, managing, and interpreting invoices across the Verus ecosystem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Universal implementation across languages
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Standardized serialization format
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Multiple payment destinations support
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Simple API for creating invoices
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Payment status monitoring
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Metadata and memo support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Integration */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <QrCode className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Mobile & QR Integration</h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                Enable scan-to-pay functionality with QR codes and deeplinks that work seamlessly with Verus Mobile and other compatible wallets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Easy-to-scan QR code generation
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    URL-based deeplinks for instant payment
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Seamless mobile wallet integration
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Direct-to-wallet payment flows
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Responsive design implementation
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Cross-platform compatibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Protocols */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileCode className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">DeFi Integration</h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                Integrate DeFi features into your applications with simple API commands instead of complex smart contract programming.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Currency conversion commands
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Liquidity pool management
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Cross-chain transaction support
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Built-in MEV protection
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Protocol-level security
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Programmatic basket currency creation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multi-Currency Support */}
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ArrowUpDown className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">Multi-Currency Support</h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                Accept payments in any currency with automatic conversion, ensuring you receive exactly what you expect.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    VRSC and all PBaaS currencies
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Bridged Ethereum assets
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Multiple currency types in one transaction
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    1-minute settlement blocks
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    No chargebacks possible
                  </li>
                  <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Fixed, predictable transaction fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                Implementation Resources
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">API Documentation</h4>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  Comprehensive API references for integrating payment processing, DeFi features, and cross-chain functionality into your applications.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">SDK Libraries</h4>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ready-to-use software development kits in multiple languages including JavaScript, Python, Go, and Rust for rapid integration.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Sample Implementations</h4>
                <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  Example projects and reference implementations including e-commerce plugins, payment gateways, and DeFi application samples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}