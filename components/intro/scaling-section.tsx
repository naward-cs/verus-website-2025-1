import { Network, Layers, ArrowLeftRight } from "lucide-react"
import { FaMedium } from "react-icons/fa"

// Updated component with dark mode support and improved styling
export function ScalingSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 md:p-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue dark:text-white tracking-tight font-medium leading-[1.1] mb-6">
              A multi-chain protocol designed to scale for world demand.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Verus takes a fundamentally different approach to blockchain scalability. Rather than forcing all activity onto a single chain, Verus enables an unlimited network of blockchains—each inheriting the full power of Verus's native features. These include built-in DeFi capabilities, privacy-preserving technology, decentralized identity, and seamless cross-chain connectivity.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                What makes this possible? The worldwide network of miners and stakers that maintains these chains operates completely rent-free. No gatekeepers, no excess fees—just pure infrastructure for public use.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                While other protocols chase higher transactions per second on a single chain—inevitably leading to bottlenecks and security compromises—Verus scales naturally through its PBaaS (Public Blockchains as a Service) architecture. Any organization, community, business or individual can launch their own highly capable blockchain without writing code, creating a network that grows organically with demand, similar to how the internet evolved.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                These aren't second-class "Layer 2" solutions. Each PBaaS chain operates with full consensus-level security, matching the main chain's capabilities while maintaining seamless interoperability across the entire network. Whether you're transferring value, converting currencies, or managing digital identities, every operation is secured by the core protocol itself—not vulnerable smart contracts.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              {/* Medium Article Link - Styled like homepage */}
              <a 
                href="https://medium.com/veruscoin/verus-internet-protocol-vip-provable-decentralized-cross-chain-communication-2e7c7f16c759"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px] w-fit"
              >
                <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span>Verus Internet Protocol (VIP) — Provable, Decentralized Cross-chain Communication</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              {/* Second Medium Article Link */}
              <a 
                href="https://medium.com/veruscoin/scalability-decentralization-security-what-trilemma-68271695a80f"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px] w-fit"
              >
                <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span>Scalability, Decentralization & Security — What Trilemma?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* Unlimited Scaling */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Network className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Unlimited Scaling</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    While others chase higher transactions per second on a single chain, Verus scales through parallel PBaaS chains—each processing 75-800 TPS. Like adding servers to the internet, there's no limit to how many chains you can deploy, creating true global scalability without compromising security.
                  </p>
                </div>
              </div>

              {/* Power in Numbers */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Power in Numbers</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Miners can simultaneously secure up to 22 chains with the same computational power, while staking across unlimited chains. This unique approach strengthens the entire network as it grows.
                  </p>
                </div>
              </div>

              {/* True Interoperability */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <ArrowLeftRight className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">True Interoperability</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Unlike traditional bridges built on vulnerable smart contracts, Verus enables native cross-chain communication through its Verus Internet Protocol (VIP). Every transfer is secured by consensus—not centralized intermediaries or complex code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}