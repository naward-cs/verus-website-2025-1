import { Settings, Coins, Store, ArrowLeftRight, Rocket, Lock, Database, Code, BarChart3, Clock, Zap, Globe, Shield, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function PBaaSContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-8 md:mt-32 relative">


      
      {/* Economics Section */}
      <section className="mb-24 relative">
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
              <span className="text-gray-600 dark:text-white">Design Your Chain Economics—</span>{""}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                    Complete Control at Protocol Level
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
                </span>
              </span>
            </h2>
            <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
              Take complete control over your blockchain's economic model with customizable parameters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tokenomics - Updated background style */}
            <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Customizable Coinomics
                  </h3>
                </div>
                
                <ul className="space-y-4 pl-4">
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Design custom emission curves and block reward schedules
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Configure halving periods and supply dynamics
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set up multiple eras with different block rewards
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Configure premine allocations
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Custom Pricing - Updated background style */}
            <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Coins className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Custom Pricing & Revenue
                  </h3>
                </div>
                
                <ul className="space-y-4 pl-4">
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set costs for VerusID registrations
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Set costs for currency and token launches
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Control on-chain storage pricing
                  </li>
                  <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Create a self-sustaining economic ecosystem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* DeFi & Marketplace Section */}
      <div className="mt-12 md:mt-32">
        <div className="flex flex-col items-center">
          {/* Main Title and Description */}
          <div className="w-full max-w-[900px] text-center mb-16">
            <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-8">
              <span className="text-gray-600 dark:text-white">Protocol-Level DeFi—</span>{""}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                    Built for True Decentralization
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
                </span>
              </span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[800px] mx-auto mb-6">
              All DeFi operations—including currency conversions—execute via validated smart transactions that are solved simultaneously within each block, mathematically preventing MEV exploitation.
            </p>
            <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[800px] mx-auto">
              The system's protocol-level implementation means every transaction inherits the same security guarantees as the blockchain itself, with transparent execution validated by consensus. This removes trust dependencies, eliminating the risk of exploits common to traditional VM-based DeFi platforms.
            </p>
          </div>

          {/* DeFi and Marketplace Cards Container */}
          <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* DeFi Features */}
            <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
              
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Store className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Native DeFi Protocol
                  </h3>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex flex-col items-center bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                      <span className="text-[24px] md:text-[32px] font-semibold bg-gradient-to-r from-verus-blue to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                        0.025%
                      </span>
                      <span className="text-[13px] text-gray-600 dark:text-gray-400 mt-1">Minimum Fee</span>
                    </div>
                    <div className="flex flex-col items-center bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                      <span className="text-[24px] md:text-[32px] font-semibold bg-gradient-to-r from-verus-blue to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                        0.05%
                      </span>
                      <span className="text-[13px] text-gray-600 dark:text-gray-400 mt-1">Maximum Fee</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                      <span className="text-[14px] text-gray-700 dark:text-gray-300">Native liquidity pools with MEV resistance</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                      <span className="text-[14px] text-gray-700 dark:text-gray-300">Fractional reserve currencies as AMMs</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link 
                    href="/build/defi-payments"
                    className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full"
                  >
                    More about DeFi
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* L1 Marketplace */}
            <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
              
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    L1 Marketplace
                  </h3>
                </div>
                
                <div className="flex-1">
                  <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Every PBaaS chain includes a complete L1 marketplace system enabling peer-to-peer trading with no custodial risk.
                  </p>
                  
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Direct Trading Between:</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["VerusID to VerusID", "VerusID to Currency", "Currency to Currency", "Currency to VerusID"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                        <ArrowLeftRight className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-[13px] text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link 
                    href="/build/marketplace"
                    className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full"
                  >
                    More about the L1 Marketplace
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inherited Features Section */}
      <section className="mb-24 md:mt-32 bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent dark:from-blue-400/10 blur-3xl -z-10"></div>
        
        <div className="p-8 md:p-16 relative">
          <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8">
            <span className="text-gray-600 dark:text-white">Enterprise Features Built Into Every Chain</span>
            
          </h2>
          <p className="text-center text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Every PBaaS chain inherits a comprehensive suite of features from the Verus ecosystem.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Database className="h-5 w-5" />, text: "Protocol-level DeFi with MEV resistance" },
              { icon: <Coins className="h-5 w-5" />, text: "Multi-currency support with liquidity pools" },
              { icon: <BarChart3 className="h-5 w-5" />, text: "Fractional reserve currencies" },
              { icon: <Store className="h-5 w-5" />, text: "Decentralized P2P marketplace" },
              { icon: <Code className="h-5 w-5" />, text: "Self-sovereign VerusID system" },
              { icon: <Lock className="h-5 w-5" />, text: "zk-SNARKs privacy technology" },
              { icon: <Shield className="h-5 w-5" />, text: "51% hash attack resistance" },
              { icon: <Zap className="h-5 w-5" />, text: "75-800 TPS processing capability" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 md:p-6 bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="h-10 w-10 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                  {feature.icon}
                </div>
                <span className="text-center text-[14px] text-gray-700 dark:text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Launch Options Section */}
      <section className="mb-24 relative md:mt-32">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-8 text-center md:text-left">
              <span className="text-gray-600 dark:text-white">Launch Options—</span>{""}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                    Your Chain, Your Rules
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
                </span>
              </span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center md:text-left">
              PBaaS chains offer sophisticated launch mechanisms designed to help you build a robust community and tokenomic structure from day one.
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Crowdfunding Support", 
                  desc: "Set minimum participation levels with automatic refunds"
                },
                { 
                  title: "Pre-launch Discounts", 
                  desc: "Incentivize early adopters with configurable discounts"
                },
                { 
                  title: "Vesting Schedules", 
                  desc: "Create time-locked allocations tied to VerusIDs"
                },
                { 
                  title: "Bridge Converters", 
                  desc: "Launch with built-in liquidity pools"
                },
                { 
                  title: "Public or Private", 
                  desc: "Deploy worldwide public chains or controlled-access private networks"
                }
              ].map((option, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/80 dark:bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20 hover:shadow-md transition-all duration-300">
                  <div className="h-8 w-8 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <span className="font-medium text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-1">{option.title}</h4>
                    <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300">{option.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-md relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
              
              <div className="relative mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Launch Cost & Distribution
                  </h3>
                </div>
                
                <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Launching a PBaaS chain costs 10,000 VRSC. This cost is split evenly between the Verus network and your new chain's network:
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-100/60 dark:border-blue-900/20 p-6 space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-[15px] text-gray-700 dark:text-gray-300">Verus Network Miners & Stakers</span>
                  </div>
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">5,000 VRSC</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-[15px] text-gray-700 dark:text-gray-300">New Chain Miners & Stakers</span>
                  </div>
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">5,000 VRSC</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-blue-100 dark:border-blue-900/20">
                  <span className="text-[15px] font-medium text-gray-900 dark:text-white">Total Launch Cost</span>
                  <span className="text-[16px] font-medium text-blue-600 dark:text-blue-400">10,000 VRSC</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Why This Distribution?</h4>
                <ul className="space-y-3">
                  <li className="relative text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Rewards Verus network for providing infrastructure
                  </li>
                  <li className="relative text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Incentivizes early miners and stakers on your chain
                  </li>
                  <li className="relative text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                    Creates sustainable economic model for both networks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Storage System Section */}
      <section className="mb-16 relative">
        <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent dark:from-blue-400/10 blur-3xl -z-10"></div>
          
          <div className="p-8 md:p-16 relative flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-8">
                <span className="text-gray-600 dark:text-white">Storage System—</span>{""}
                <span className="relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                      Built Into The Protocol
                    </span>
                    
                  </span>
                </span>
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Every PBaaS chain includes native storage capabilities at the protocol level. This isn't just a simple data field - it's a comprehensive storage system for any type of file or data structure.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Chain launchers can set custom pricing models for storage usage, charged in the chain's native currency.
              </p>
              
              
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-100/60 dark:border-blue-900/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                    Storage System Features
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Code className="h-5 w-5" />, text: "Protocol-level storage capabilities" },
                    { icon: <Globe className="h-5 w-5" />, text: "Support for any file or data structure", link: "/build/data/" },
                    { icon: <Coins className="h-5 w-5" />, text: "Customizable pricing models" },
                    { icon: <BarChart3 className="h-5 w-5" />, text: "Native currency fee structure" },
                    { icon: <Lock className="h-5 w-5" />, text: "Secure and tamper-resistant" },
                    { icon: <Clock className="h-5 w-5" />, text: "Permanent yet removable storage" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50/60 dark:bg-blue-900/10 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="mt-1">
                        {feature.link ? (
                          <Link href={feature.link} className="text-[14px] md:text-[15px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                            {feature.text}
                          </Link>
                        ) : (
                          <span className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300">{feature.text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      
    </div>
  )
}