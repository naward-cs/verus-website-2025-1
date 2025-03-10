import { Smartphone, Server, ShieldCheck, Download } from "lucide-react"
import { FaMedium } from "react-icons/fa"

// Updated component with dark mode support
export function ConsensusSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 md:p-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue dark:text-white tracking-tight font-medium leading-[1.1] mb-6">
              Decentralized, secure & 51% hash attack resistant consensus.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                The Verus blockchain and its multi-chain network are secured by Proof of Power—a hybrid consensus mechanism combining 50% proof-of-work with 50% proof-of-stake. This design, coupled with extremely low barriers to participation, creates a naturally decentralized and provably secure network.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                What makes this possible? The protocol is designed for true public participation. No minimum stake requirements, no expensive mining equipment needed—just pure consensus power distributed across a worldwide community of miners and stakers.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Most blockchain protocols concentrate power in the hands of those who can afford expensive mining equipment or large stakes. Verus ensures security through widespread participation—letting anyone with a computer, phone, or basic hardware contribute to and earn from network security.
              </p>
            </div>
            
            {/* Download Link - Styled consistently */}
            <a 
              href="https://verus.io/papers/VerusPoP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px] w-fit"
            >
              <Download className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span>Download: A Provable Hybrid Solution to 51% Hash Attacks</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* Low Barrier Mining */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Low Barrier Mining</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Anyone can mine with a computer, phone, or ARM device. Mine up to 22 chains simultaneously without extra power costs—making it one of the most cost-efficient and environmentally conscious mining protocols.
                  </p>
                </div>
              </div>

              {/* Simple Staking */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Server className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Simple Staking</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Start staking with any amount—no minimum coins needed. Funds stay unlocked and flexible. Run a node on basic hardware and{" "}
                    <a href="/staking" className="text-verus-blue dark:text-blue-400 hover:underline">
                      start staking
                    </a>{" "}
                    while earning rewards.
                  </p>
                </div>
              </div>

              {/* Attack Resistant */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Attack Resistant</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
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