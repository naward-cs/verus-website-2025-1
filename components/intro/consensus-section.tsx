

import { Smartphone, Server, ShieldCheck, Download } from "lucide-react"
import { FaMedium } from "react-icons/fa"

export function ConsensusSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3 md:pl-8 md:pr-8">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
              Decentralized, secure & 51% hash attack resistant consensus.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                The Verus blockchain and its multi-chain network are secured by Proof of Power—a hybrid consensus mechanism combining 50% proof-of-work with 50% proof-of-stake. This design, coupled with extremely low barriers to participation, creates a naturally decentralized and provably secure network.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                What makes this possible? The protocol is designed for true public participation. No minimum stake requirements, no expensive mining equipment needed—just pure consensus power distributed across a worldwide community of miners and stakers.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Most blockchain protocols concentrate power in the hands of those who can afford expensive mining equipment or large stakes. Verus ensures security through widespread participation—letting anyone with a computer, phone, or basic hardware contribute to and earn from network security.
              </p>

          
            </div>
                <a 
            href="https://medium.com/veruscoin/verus-smart-transactions-vs-smart-contracts-f98079c00ed0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-16 flex items-center gap-2 md:text-[15px] text-[12px] text-verus-blue group hover:underline"
          >
            <Download className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            Download: A Provable Hybrid Solution to 51% Hash Attacks
          </a>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 md:pl-16">
            <div className="space-y-8">
              {/* Low Barrier Mining */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Low Barrier Mining</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-black/75 leading-relaxed">
                    Anyone can mine with a computer, phone, or ARM device. Mine up to 22 chains simultaneously without extra power costs—making it one of the most cost-efficient and environmentally conscious mining protocols.
                  </p>
                </div>
              </div>

              {/* Simple Staking */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Server className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Simple Staking</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
  <p className="text-[13px] text-black/75 leading-relaxed">
    Start staking with any amount—no minimum coins needed. Funds stay unlocked and flexible. Run a node on basic hardware and{" "}
    <a href="/staking" className="text-verus-blue hover:underline">
      start staking
    </a>{" "}
    while earning rewards.
  </p>
</div>

              </div>

              {/* Attack Resistant */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-black">Attack Resistant</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-black/75 leading-relaxed">
                    The hybrid PoW/PoS design makes 51% attacks virtually impossible. All operations, from currency transfers to DeFi, are secured directly by consensus—not vulnerable smart contracts.
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