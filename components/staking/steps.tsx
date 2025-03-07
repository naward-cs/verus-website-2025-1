"use client"

import { Check, ExternalLink } from "lucide-react"
import { FaYoutube } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"

export function StakingSteps() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:max-w-[1220px]">
      {/* Info Box - Shows above on mobile, right side on desktop */}
      <div className="md:order-2 md:max-w-[400px] flex-shrink-0 w-full">
        <div className="w-full md:rounded-lg border border-[#EFEFEF] p-4 pt-8 pb-8 md:p-8 bg-white/50">
          <h2 className="text-[18px] md:text-[22px] tracking-tight text-black font-medium mb-4 leading-[1.3]">
            Extremely low-barrier staking for everyone.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Staking takes up 50% of the consensus mechanism of Verus and its PBaaS-blockchains. You need to run a full node to participate in staking.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The more VRSC you stake, the higher your chances of finding blocks and earning rewards. There is no real minimum amount required to start staking.
            </p>
          </div>
          <h2 className="text-[18px] md:text-[22px] md:mt-12 mt-8 tracking-tight text-black font-medium mb-4 leading-[1.3]">
            Verus Proof of Power—ultimate blockchain security.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Verus has a unique consensus mechanism called Verus Proof of Power (VerusPoP). It's hybrid 50/50% proof-of-power and proof-of-stake. In short: 50% of all blocks are validated by miners, and 50% by stakers. All ecosystem blockchains inherit this consensus mechanism.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              It is a provable solution to 51% hash attacks.{" "}
              <a 
                href="https://verus.io/papers/VerusPoP.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-verus-blue hover:underline"
              >
                Find the paper here
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Steps - Shows below on mobile, left side on desktop */}
      <div className="md:order-1 flex flex-col gap-4 md:gap-8 md:w-[700px]">
        {/* Step 1 */}
        <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 md:p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-verus-blue font-medium text-xl md:text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium">
                  Get your staking hardware.
                </h3>
                <p className="text-[14px] md:text-[16px] md:max-w-[500px] text-black/75">
                  Possible with Windows, macOS, Linux, Raspberry Pi, Orange Pi, NUC, VM, you name it.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-[13px] md:text-[14px] text-black/60 mb-3">
                Recommended hardware requirements:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    64-bit OS & processor
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    8GB memory (+4GB swap)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    50GB storage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 pb-0 md:pb-0 md:pt-8 md:pl-8 md:pr-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-verus-blue font-medium text-xl md:text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium">
                  Download the wallet that works for you.
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 md:max-w-[500px]">
                  You need a full node to participate in staking, so either Verus Desktop (in native mode) or CLI.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-auto h-full">
              {/* Button */}
              <div className="w-full md:w-auto mb-8 md:mb-0">
                <a 
                  href="/wallet"
                  className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-full md:w-fit"
                >
                  Choose wallet
                </a>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-auto md:mt-8 flex justify-center">
                <img
                  src="/img/verus-desktop-cli.png"
                  alt="Verus Desktop"
                  className="h-[120px] md:h-[180px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 md:p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-verus-blue font-medium text-xl md:text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium">
                  Start staking with almost no barriers.
                </h3>
                <p className="text-[14px] md:text-[16px] md:max-w-[500px] text-black/75">
                  Verus is unique that it has extremely low-barrier staking.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
    
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    (Almost) no minimum requirements (0.00000001 VRSC)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    No slashing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[rgba(0,170,37,1)] flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="text-[14px] md:text-[18px] text-black">
                    No lock-up—funds are always available
                  </span>
                </div>
              </div>
              <p className="text-[13px] md:text-[14px] mt-6 md:mt-8 text-amber-800 bg-amber-50/50 border border-amber-200/50 rounded-md px-3 py-2 flex items-center gap-2 w-fit">
                Make sure to keep your node online 24/7
              </p>
              <p className="text-[13px] md:text-[14px] mt-2 md:mt-4 text-amber-800 bg-amber-50/50 border border-amber-200/50 rounded-md px-3 py-2 flex items-center gap-2 w-fit">
                Funds stake after 150 block confirmations
              </p>
            </div>
          </div>
        </div>

                {/* Discord Help Box */}
<a 
  href="https://discord.gg/veruscoin"
  target="_blank"
  rel="noopener noreferrer" 
  className="w-full md:rounded-lg bg-[#444EE5] p-4 md:p-6 h-[40px] md:h-[50px] flex items-center gap-3 hover:bg-[#3942cc] transition-colors"
>
  <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 text-white" />
  <span className="text-[14px] md:text-[16px] text-white font-medium">
    Need a hand? Ask on Discord
  </span>
</a>

        {/* Step 4 */}
        <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-6 md:p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 md:h-12 md:w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-verus-blue font-medium text-xl md:text-2xl">4</span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium">
                  Earn more by running Bridgekeeper.
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 md:max-w-[500px]">
                  Optionally, but recommended for the network. It makes cross-chain transfers between Verus and Ethereum possible.
                </p>
              </div>
            </div>

            <a 
              href="https://www.youtube.com/watch?v=example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-verus-blue hover:underline flex items-center gap-2 mt-8 text-[14px] md:text-[15px] group"
            >
              <FaYoutube className="h-5 w-5 text-[#FF0000]" />
              How to run Bridgekeeper with Verus Desktop
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-verus-blue hover:underline flex items-center gap-2 mt-2 text-[14px] md:text-[15px] group"
            >
              <FaYoutube className="h-5 w-5 text-[#FF0000]" />
              How to run Bridgekeeper with CLI
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
            </a>
                       <p className="text-[13px] md:text-[14px] mt-6 md:mt-8 text-amber-800 bg-amber-50/50 border border-amber-200/50 rounded-md px-3 py-2 flex items-center gap-2 w-fit">
                The more people run Bridgekeeper the faster cross-chain transfers happen
              </p>

          </div>
        </div>
      </div>
    </div>
  )
}