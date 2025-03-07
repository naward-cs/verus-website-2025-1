

import { Lock, Settings, Rocket } from "lucide-react"

function DecentralizedModel() {
  const items = [
    "No single entity controls supply",
    "Supply changes based on protocol rules",
    "SubID registration fees are burned",
    "Perfect for community-driven projects"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <Lock className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">Decentralized</h3>
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

function CentralizedModel() {
  const items = [
    "Controller can mint new supply at will",
    "Controller can burn existing supply",
    "Complete supply control by issuer",
    "SubID registration fees go to controller"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <Settings className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">Centralized</h3>
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

function LaunchRequirements() {
  const namespaceItems = [
    "First acquire a VerusID from the chain",
    "Create currency using VerusID's namespace",
    "One currency name per VerusID",
    "SubIDs can be created under namespace"
  ]

  const costItems = [
    "Verus mainnet: 200 VRSC per currency",
    "PBaaS chains: Set by chain launcher",
    "Paid in chain's native currency"
  ]

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
          <Rocket className="h-5 w-5 text-verus-blue" />
        </div>
        <h3 className="text-[18px] md:text-[22px] font-medium text-black">Launch Requirements</h3>
      </div>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
          <h4 className="text-[16px] font-medium text-black mb-4">VerusID Namespace</h4>
          <ul className="space-y-3 text-[14px] text-black/75">
            {namespaceItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
          <h4 className="text-[16px] font-medium text-black mb-4">Launch Costs</h4>
          <ul className="space-y-3 text-[14px] text-black/75">
            {costItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ControlModels() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Control Models
          </h2>
          <div className="space-y-8">
            <DecentralizedModel />
            <CentralizedModel />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <LaunchRequirements />
        </div>
      </div>
    </div>
  )
}