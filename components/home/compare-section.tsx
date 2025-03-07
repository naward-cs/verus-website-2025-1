

import { AlertTriangle } from "lucide-react"
import { FaMedium } from "react-icons/fa"
import Image from "next/image"

export function CompareSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen md:max-w-[1220px] bg-white border-2 border-gray-100 rounded-none md:rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        {/* First Compare Section */}
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
          <div className="mb-8 md:mb-16">
            <h2 className="text-[32px] md:text-[75px] text-black tracking-tight font-medium text-center max-w-[700px] leading-[1.1] mb-4 md:mb-8">
              Web3 Architecture,{" "}
              <span className="relative">
                <span className="relative inline-block px-2 py-1">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue via-blue-500 to-verus-blue bg-clip-text text-transparent">
                    Redefined
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-verus-blue/10 via-blue-500/10 to-verus-blue/10 rounded-lg border border-verus-blue/20" />
                </span>
              </span>
            </h2>
            <p className="text-[16px] md:text-[24px] md:mb-8 text-black font-normal tracking-tight text-center leading-snug max-w-[700px] opacity-75">
              While other protocols rely on complex smart contracts,
              Verus achieves Web3 capabilities through pure transaction logic—making every interaction as secure as the protocol itself.
            </p>
          </div>

          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Problems with Smart Contracts */}
            <div className="w-full">
              <div className="md:w-full w-screen -mx-4 md:mx-0">
                <div className="px-6 py-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-none md:rounded-lg border border-gradient-red">
                  <h3 className="text-[14px] md:text-[16px] font-medium text-red-700 mb-4 flex items-center gap-1">
                    <AlertTriangle className="h-5 w-5" />
                    Problems with smart contracts.
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">1</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        Can be hacked due to code vulnerabilities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">2</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        Complex logic leads to unpredictable bugs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">3</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        Security depends on perfect code
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Verus Solution */}
            <div className="w-full">
              <div className="md:w-full w-screen -mx-4 md:mx-0">
                <div className="px-6 py-6 bg-gradient-to-b from-blue-50/20 to-transparent rounded-none md:rounded-lg border border-gradient-blue">
                  <h3 className="text-[14px] md:text-[16px] font-medium text-verus-blue mb-4 flex items-center gap-2">
                    <Image
                      src="/img/verus-icon.svg"
                      alt="Verus Icon"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    The Verus solution.
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">1</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        Pure transaction logic—nothing to hack
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">2</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        Every action verified by consensus
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">3</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        As secure as sending value
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <a 
            href="https://medium.com/veruscoin/verus-smart-transactions-vs-smart-contracts-f98079c00ed0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 md:text-[15px] text-[12px] text-verus-blue hover:underline"
          >
            <FaMedium className="h-5 w-5 text-black" />
            Verus Smart Transactions vs. Smart Contracts
          </a>
        </div>
        
        {/* Divider */}
        <div className="w-full border-t-2 border-gray-100" />
        
        {/* Second Compare Section */}
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
          <div className="mb-8 md:mb-16">
            <h2 className="text-[32px] md:text-[75px] text-black tracking-tight font-medium text-center max-w-[700px] leading-[1.1] mb-4 md:mb-8">
              Every Currency,{" "}
              <span className="relative">
                <span className="relative inline-block px-2 py-1">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue via-blue-500 to-verus-blue bg-clip-text text-transparent">
                    True Consensus
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-verus-blue/10 via-blue-500/10 to-verus-blue/10 rounded-lg border border-verus-blue/20" />
                </span>
              </span>
            </h2>
            <p className="text-[16px] md:text-[24px] md:mb-8 text-black font-normal tracking-tight text-center leading-snug max-w-[700px] opacity-75">
              While most tokens live in vulnerable smart contracts, Verus makes every currency
              a native part of the blockchain—securing each one through network consensus.
            </p>
          </div>

          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Problems with Token Systems */}
            <div className="w-full">
              <div className="md:w-full w-screen -mx-4 md:mx-0">
                <div className="px-6 py-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-none md:rounded-lg border border-gradient-red">
                  <h3 className="text-[14px] md:text-[16px] font-medium text-red-700 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Problems with (E)VM token systems.
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">1</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        Tokens are just smart contract entries
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">2</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        No true consensus verification
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 font-medium text-sm">3</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-red-900/75">
                        Vulnerable to smart contract hacks
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Verus Difference */}
            <div className="w-full">
              <div className="md:w-full w-screen -mx-4 md:mx-0">
                <div className="px-6 py-6 bg-gradient-to-b from-blue-50/20 to-transparent rounded-none md:rounded-lg border border-gradient-blue">
                  <h3 className="text-[14px] md:text-[16px] font-medium text-verus-blue mb-4 flex items-center gap-2">
                    <Image
                      src="/img/verus-icon.svg"
                      alt="Verus Icon"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    The Verus difference.
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">1</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        Every currency proven by consensus
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">2</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        Same security as the native coin
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-verus-blue font-medium text-sm">3</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-verus-blue">
                        No smart contract vulnerabilities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}