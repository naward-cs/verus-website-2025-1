

import { Network, Layers, ArrowLeftRight } from "lucide-react"
import { FaMedium } from "react-icons/fa"

export function ScalingSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3 md:pl-8 md:pr-8">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
              A multi-chain protocol designed to scale for world demand.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Verus takes a fundamentally different approach to blockchain scalability. Rather than forcing all activity onto a single chain, Verus enables an unlimited network of blockchains—each inheriting the full power of Verus's native features. These include built-in DeFi capabilities, privacy-preserving technology, decentralized identity, and seamless cross-chain connectivity.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                What makes this possible? The worldwide network of miners and stakers that maintains these chains operates completely rent-free. No gatekeepers, no excess fees—just pure infrastructure for public use.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                While other protocols chase higher transactions per second on a single chain—inevitably leading to bottlenecks and security compromises—Verus scales naturally through its PBaaS (Public Blockchains as a Service) architecture. Any organization, community, business or individual can launch their own highly capable blockchain without writing code, creating a network that grows organically with demand, similar to how the internet evolved.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                These aren't second-class "Layer 2" solutions. Each PBaaS chain operates with full consensus-level security, matching the main chain's capabilities while maintaining seamless interoperability across the entire network. Whether you're transferring value, converting currencies, or managing digital identities, every operation is secured by the core protocol itself—not vulnerable smart contracts.
              </p>

   

            </div>
                                <a 
            href="https://medium.com/veruscoin/verus-smart-transactions-vs-smart-contracts-f98079c00ed0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-16 flex items-center gap-2 md:text-[15px] text-[12px] text-verus-blue hover:underline"
          >
            <FaMedium className="h-5 w-5 text-black" />
            Verus Internet Protocol (VIP) — Provable, Decentralized Cross-chain Communication
          </a>
                                            <a 
            href="https://medium.com/veruscoin/verus-smart-transactions-vs-smart-contracts-f98079c00ed0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-4 flex items-center gap-2 md:text-[15px] text-[12px] text-verus-blue hover:underline"
          >
            <FaMedium className="h-5 w-5 text-black" />
            Scalability, Decentralization & Security — What Trilemma?
          </a>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 md:pl-16">
            <div className="space-y-8">
              {/* Unlimited Scaling */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Network className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Unlimited Scaling</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">

                  <p className="text-[13px] text-black/75 leading-relaxed">
                    While others chase higher transactions per second on a single chain, Verus scales through parallel PBaaS chains—each processing 75-800 TPS. Like adding servers to the internet, there's no limit to how many chains you can deploy, creating true global scalability without compromising security.
                  </p>
                </div>
              </div>

              {/* Power in Numbers */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Power in Numbers</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">

                  <p className="text-[13px] text-black/75 leading-relaxed">
                    Miners can simultaneously secure up to 22 chains with the same computational power, while staking across unlimited chains. This unique approach strengthens the entire network as it grows.
                  </p>
                </div>
              </div>

              {/* True Interoperability */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <ArrowLeftRight className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">True Interoperability</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">

                  <p className="text-[13px] text-black/75 leading-relaxed">
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