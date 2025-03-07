

import { Store, Coins, ArrowLeftRight, ArrowUpDown } from "lucide-react"

function SocialTokens() {
  const items = [
    "Launch influencer tokens with built-in liquidity",
    "Enable fan communities to participate directly",
    "Create exclusive digital goods and NFTs",
    "Establish membership systems and access controls",
    "Generate verifiable online profiles and fan IDs",
    "Distribute tickets, coupons, and discount codes",
    "Set up automated reward systems"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <Store className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">Social Tokens</h3>
      </div>
      <ul className="space-y-3 text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CommunityTokens() {
  const items = [
    "Launch currencies backed by stable assets",
    "Enable instant convertibility to other currencies",
    "Create transparent, auditable monetary systems",
    "Establish local digital goods economies",
    "Support community governance through multi-sig controls",
    "Implement time-locked distributions and vesting",
    "Measure and capture community-contributed value"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <Coins className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">Community Currencies</h3>
      </div>
      <ul className="space-y-3 text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DefiInstruments() {
  const items = [
    "Create basket currencies with multiple reserve assets",
    "Launch liquidity pools with MEV resistance",
    "Set up automated market making systems",
    "Enable cross-chain trading and bridging",
    "Design fractional reserve currencies",
    "Implement automated conversion systems",
    "Build tokenized asset systems"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <ArrowUpDown className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">DeFi Instruments</h3>
      </div>
      <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8] mb-8">
        Develop sophisticated financial instruments with protocol-level security and MEV resistance.
      </p>
      <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
        <h4 className="text-[16px] font-medium text-black mb-4">Key Features:</h4>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <ArrowLeftRight className="h-4 w-4 text-verus-blue" />
              <span className="text-[14px] text-black/75">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function RealWorldApplications() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Info Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Real-World Applications
          </h2>
          <div className="space-y-8">
            <SocialTokens />
            <CommunityTokens />
          </div>
        </div>

        {/* DeFi Info */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <DefiInstruments />
        </div>
      </div>
    </div>
  )
}