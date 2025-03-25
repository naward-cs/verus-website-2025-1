
import { Check, ExternalLink, Download, ArrowRight } from "lucide-react"
import { FaYoutube } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"
import Link from "next/link"

export function GetStartedSections() {
  return (
    <div className="flex flex-col gap-8 md:max-w-[1220px]">
      {/* Get a Wallet Section */}
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="p-8 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Download className="h-5 w-5 md:h-6 md:w-6 text-verus-blue dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white font-medium">
                Get a wallet.
              </h2>
              <p className="text-[14px] md:text-[16px] md:max-w-[700px] text-gray-700 dark:text-gray-300">
                Choose the wallet that best fits your needs and start securely managing your digital assets.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
              Available Wallet Options
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    Verus Desktop
                  </span>
                  <span className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Full-featured desktop wallet for Windows, macOS, and Linux
                  </span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    Verus Mobile
                  </span>
                  <span className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Take your wallet on the go. For iOS and Android.
                  </span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    CLI Wallet
                  </span>
                  <span className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Advanced option for command-line users and technical setups
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l border-gray-200 dark:border-gray-800 md:pl-8">
            <div className="flex-1">
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
                Getting Started
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 mb-6">
                Choose a wallet that matches your needs. Verus Desktop offers the most complete features (as a full node), while Mobile offers convenience on the go.
              </p>
              <p className="text-[13px] md:text-[14px] text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/30 rounded-md px-3 py-2 w-fit mb-6">
                Remember to securely back up your wallet seed phrase and private keys!
              </p>
            </div>
            
            <Link 
              href="/wallet"
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full md:w-fit self-start"
            >
              Download a wallet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Get VRSC Section */}
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="p-8 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-verus-blue dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 14.5L12 17.5L15 14.5M12 6.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white font-medium">
                Get VRSC.
              </h2>
              <p className="text-[14px] md:text-[16px] md:max-w-[700px] text-gray-700 dark:text-gray-300">
                Multiple ways to obtain Verus (VRSC) to start participating in the ecosystem.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
              Ways to Acquire VRSC
            </h3>
            
            <div className="space-y-5">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Exchanges
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Purchase VRSC on cryptocurrency exchanges like SafeTrade and TradeOgre.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Direct Conversion with Verus DeFi
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Convert other cryptocurrencies to VRSC using the built-in DeFi features of Verus Mobile and Desktop.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Mining & Staking
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Earn VRSC by participating in consensus through mining or staking.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Community Participation
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Contribute to the ecosystem and earn rewards through bounties and community initiatives.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l border-gray-200 dark:border-gray-800 md:pl-8">
            <div className="flex-1">
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
                About Verus (VRSC)
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 mb-4">
                VRSC is the native currency of the Verus ecosystem, used for transactions, staking and protocol services.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 mb-6">
                Unlike many other cryptocurrencies, VRSC has no premine, no ICO, and no developer rewards built in—all coins are earned through mining and staking.
              </p>
              <p className="text-[13px] md:text-[14px] text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/30 rounded-md px-3 py-2 w-fit mb-6">
                Always research and use reputable exchanges when purchasing VRSC.
              </p>
            </div>
            
            <Link 
              href="https://verus.io/exchanges"
              target="_blank"
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full md:w-fit self-start"
            >
              View exchanges
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Participate Section */}
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="p-8 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-verus-blue dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H7M17 20V16M17 20H21V16M7 20H3V16M7 20V16M21 16V10C21 8.89543 20.1046 8 19 8M3 16V10C3 8.89543 3.89543 8 5 8M19 8H5M19 8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8M10 4V6M14 4V6M13.5 14.5L10.5 11.5M10.5 14.5L13.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white font-medium">
                Participate in the network.
              </h2>
              <p className="text-[14px] md:text-[16px] md:max-w-[700px] text-gray-700 dark:text-gray-300">
                Support the Verus ecosystem by mining, staking, or running a full node.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
              Ways to Participate
            </h3>
            
            <div className="space-y-5">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Staking
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Run a full node and stake your VRSC to help secure the network and earn rewards with minimal hardware requirements.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Mining
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Use your computer's processing power to mine VRSC using the unique VerusHash algorithm, which favors consumer hardware.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Bridgekeeper
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Run Bridgekeeper to facilitate cross-chain transfers between Verus and Ethereum, earning additional rewards.
                </p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                  Community Contribution
                </span>
                <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                  Participate in development, testing, documentation, or marketing to help grow the ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l border-gray-200 dark:border-gray-800 md:pl-8">
            <div className="flex-1">
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
                Benefits of Participation
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 mb-4">
                By participating in the Verus network, you help maintain security, decentralization, and the overall health of the ecosystem while earning rewards.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    No minimum requirements for staking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    CPU-friendly mining algorithm
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    Earn additional rewards by Bridgekeeper
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/staking"
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full sm:w-fit"
              >
                Learn about staking
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                href="/mining"
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full sm:w-fit"
              >
                Learn about mining
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VerusID Section */}
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="p-8 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-verus-blue dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white font-medium">
                Be self-sovereign with VerusID.
              </h2>
              <p className="text-[14px] md:text-[16px] md:max-w-[700px] text-gray-700 dark:text-gray-300">
                Take full control of your digital identity, data, and assets with VerusID.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
              What is VerusID?
            </h3>
            
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300">
                VerusID is a self-sovereign identity system built on the Verus Protocol that gives you complete ownership and control over your digital identity, data, and assets.
              </p>
              
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300">
                Unlike traditional identity systems where third parties control your information, VerusID puts you in charge, allowing you to selectively share information while maintaining privacy and security.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    Human-readable blockchain identities (e.g., bob@)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    Integrated revocation and recovery systems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-300">
                    Privacy-preserving selective disclosure capabilities
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col md:border-l border-gray-200 dark:border-gray-800 md:pl-8">
            <div className="flex-1">
              <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">
                Benefits of VerusID
              </h3>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    True Data Ownership
                  </span>
                  <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Your data remains with you, not scattered across corporate and centralized databases.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    Enhanced Security
                  </span>
                  <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Blockchain-secured identity with consensus-level security and recovery options.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] md:text-[16px] font-medium text-gray-900 dark:text-white">
                    Privacy by Design
                  </span>
                  <p className="text-[13px] md:text-[14px] text-gray-600 dark:text-gray-400">
                    Selective disclosure of information puts you in control of what others can see.
                  </p>
                </div>
              </div>
              
              <p className="text-[13px] md:text-[14px] mt-6 text-amber-800 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/30 rounded-md px-3 py-2 w-fit mb-6">
                VerusID creation requires a full node wallet like Verus Desktop.
              </p>
            </div>
            
            <Link 
              href="/verusid"
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-full md:w-fit self-start"
            >
              Learn about VerusID
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Discord Help Box */}
      <a 
        href="https://www.verus.io/discord"
        target="_blank"
        rel="noopener noreferrer" 
        className="group w-full md:rounded-lg bg-[#444EE5] hover:bg-[#3942cc] p-4 md:p-6 h-[45px] md:h-[55px] flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]"
      >
        <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 text-white" />
        <span className="text-[14px] md:text-[16px] text-white font-medium">
          Need help getting started? Join the community on Discord
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  )
} 