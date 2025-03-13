import { Lock, Settings, Rocket } from "lucide-react"

function DecentralizedModel() {
  const items = [
    "No single entity controls supply",
    "Supply changes based on protocol rules",
    "SubID registration fees are burned",
    "Perfect for community-driven projects"
  ]

  return (
    <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
            Decentralized
          </h3>
        </div>
        <ul className="space-y-4 pl-4">
          {items.map((item, i) => (
            <li key={i} className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
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
    <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
            <Settings className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
            Centralized
          </h3>
        </div>
        <ul className="space-y-4 pl-4">
          {items.map((item, i) => (
            <li key={i} className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
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
    <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden h-full">
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
            <Rocket className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
            Launch Requirements
          </h3>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
            <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">VerusID Namespace</h4>
            <ul className="space-y-3">
              {namespaceItems.map((item, i) => (
                <li key={i} className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
            <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-4">Launch Costs</h4>
            <ul className="space-y-3">
              {costItems.map((item, i) => (
                <li key={i} className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ControlModels() {
  return (
    <section className="mb-24 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Currency Control Models—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Choose Your Structure
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-md blur-sm" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Decide between fully decentralized or controlled currencies, with flexible options for each model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <DecentralizedModel />
        </div>
        <div className="md:col-span-1">
          <CentralizedModel />
        </div>
        <div className="md:col-span-1">
          <LaunchRequirements />
        </div>
      </div>
    </section>
  )
}