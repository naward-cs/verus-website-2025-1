

import { Shield, Code, Zap } from "lucide-react"
import { FaMedium } from "react-icons/fa"

export function SmartTransactionsSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3 md:pl-8 md:pr-8">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
              No faulty smart contracts—only secure Smart Transactions.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                All functionality on the Verus blockchain is programmed in the protocol. All Verus features are considered mission-critical and find their origin in the consensus layer. These functionalities are directly connected to the miners and stakers, they are called Smart Transactions.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Verus prevents application developers from being responsible for systems security. Here's why that's an important design choice. We can see many problems arise with smart contracts on other (EVM-based) systems. Vulnerabilities, bugs, abuse. New smart contract incidents occur each day.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Smart Transactions represent a fundamental shift in blockchain architecture. Instead of relying on complex programmable contracts, Verus embeds core functionalities directly in the protocol—where they're validated by consensus and can't be exploited.
              </p>

  
            </div>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 md:pl-16">
            <div className="space-y-8">
              {/* Protocol-Level Security */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Protocol-Level Security</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-black/75 leading-relaxed">
                    Critical functions like currencies, identity, and DeFi are built into the consensus layer. No smart contract code means no smart contract vulnerabilities to exploit.
                  </p>
                </div>
              </div>

              {/* Developer Friendly */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Developer Friendly</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-black/75 leading-relaxed">
                    Build advanced applications using straightforward API commands, without learning complex smart contract languages. Create secure dApps that leverage protocol-level features.
                  </p>
                </div>
              </div>

              {/* MEV Resistant */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">MEV Resistant</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-black/75 leading-relaxed">
                    Unlike EVM systems where transactions can be reordered for profit, Smart Transactions are processed fairly by consensus. No front-running, no sandwich attacks, no value extraction.
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