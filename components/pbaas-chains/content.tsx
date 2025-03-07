import { Settings, Coins, Store, ArrowLeftRight, Rocket, Lock } from "lucide-react"
import Link from "next/link"

export function PBaaSContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      {/* Economics Section */}
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mb-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
              Complete Control Over Your Chain's Economics
            </h2>
            <div className="space-y-8">
              {/* Tokenomics */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[18px] md:text-[22px] font-medium text-black">Customizable Coinomics</h3>
                </div>
                <ul className="space-y-3 text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <Link href="/build/verusid/" className="text-verus-blue hover:text-verus-blue/80 transition-colors">
                      First acquire a VerusID from the chain
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <Link href="/build/pbaas-currencies/" className="text-verus-blue hover:text-verus-blue/80 transition-colors">
                      Create currency using VerusID's namespace
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    Set up multiple eras with different block rewards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    Configure premine allocations
                  </li>
                </ul>
              </div>

              {/* Custom Pricing */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                    <Coins className="h-5 w-5 text-verus-blue" />
                  </div>
                  <h3 className="text-[18px] md:text-[22px] font-medium text-black">Custom Pricing & Revenue</h3>
                </div>
                <ul className="space-y-3 text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    Set costs for VerusID registrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    Set costs for currency and token launches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    Control on-chain storage pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Marketplace Info */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                <Store className="h-5 w-5 text-verus-blue" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-black">Built-in Decentralized Marketplace</h3>
            </div>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8] mb-8">
              Every PBaaS chain includes a complete L1 marketplace system enabling peer-to-peer trading with no custodial risk.
            </p>
            <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
              <h4 className="text-[16px] font-medium text-black mb-4">Direct Trading Between:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="h-4 w-4 text-verus-blue" />
                  <span className="text-[14px] text-black/75">VerusID to VerusID</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="h-4 w-4 text-verus-blue" />
                  <span className="text-[14px] text-black/75">VerusID to Currency</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="h-4 w-4 text-verus-blue" />
                  <span className="text-[14px] text-black/75">Currency to Currency</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="h-4 w-4 text-verus-blue" />
                  <span className="text-[14px] text-black/75">Currency to VerusID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Options Section */}
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Inherited Features */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                <Lock className="h-5 w-5 text-verus-blue" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-black">Inherited Enterprise Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">Protocol-level DeFi with MEV resistance</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">Multi-currency support with liquidity pools</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">Fractional reserve currencies</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">Decentralized P2P marketplace</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">Self-sovereign VerusID system</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">zk-SNARKs privacy technology</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">51% hash attack resistance</span>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-4">
                <span className="text-[14px] text-black/75">75-800 TPS processing capability</span>
              </div>
            </div>
          </div>

          {/* Launch Options */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                <Rocket className="h-5 w-5 text-verus-blue" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-black">Advanced Launch Options</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-verus-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-verus-blue font-medium text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-black mb-1">Crowdfunding Support</h4>
                  <p className="text-[14px] text-black/75">Set minimum participation levels with automatic refunds</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-verus-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-verus-blue font-medium text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-black mb-1">Pre-launch Discounts</h4>
                  <p className="text-[14px] text-black/75">Incentivize early adopters with configurable discounts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-verus-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-verus-blue font-medium text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-black mb-1">Vesting Schedules</h4>
                  <p className="text-[14px] text-black/75">Create time-locked allocations tied to VerusIDs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-verus-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-verus-blue font-medium text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-black mb-1">Bridge Converters</h4>
                  <p className="text-[14px] text-black/75">Launch with built-in liquidity pools</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
              <div className="h-6 w-6 rounded-full bg-verus-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-verus-blue font-medium text-sm">5</span>
              </div>
              <div>
                <h4 className="text-[16px] font-medium text-black mb-1">Public or Private</h4>
                <p className="text-[14px] text-black/75">Deploy worldwide public chains or controlled-access private networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Cost Section */}
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mt-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
              Launch Cost & Distribution
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Launching a PBaaS chain costs 10,000 VRSC. This cost is split evenly between the Verus network and your new chain's network:
              </p>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-black/75">Verus Network Miners & Stakers</span>
                  <span className="text-[14px] font-medium text-black">5,000 VRSC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-black/75">New Chain Miners & Stakers</span>
                  <span className="text-[14px] font-medium text-black">5,000 VRSC</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                  <span className="text-[14px] font-medium text-black">Total Launch Cost</span>
                  <span className="text-[14px] font-medium text-black">10,000 VRSC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
            <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
              <h4 className="text-[16px] font-medium text-black mb-4">Why This Distribution?</h4>
              <div className="space-y-3">
                <p className="text-[14px] text-black/75 leading-relaxed">
                  The split distribution ensures both networks are incentivized to maintain security and stability:
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Rewards Verus network for providing infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Incentivizes early miners and stakers on your chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Creates sustainable economic model for both networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Storage System Section */}
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mt-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
              On-Chain Storage System
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Every PBaaS chain includes native storage capabilities at the protocol level. This isn't just a simple data field - it's a comprehensive storage system for any type of file or data structure.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Chain launchers can set custom pricing models for storage usage, charged in the chain's native currency.
              </p>
            </div>
          </div>

          {/* Storage Features */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
            <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
              <h4 className="text-[16px] font-medium text-black mb-4">Storage System Features:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Protocol-level storage capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <Link href="/build/data/" className="text-verus-blue hover:text-verus-blue/80 transition-colors">
                    Support for any file or data structure
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Customizable pricing models</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                  <span className="text-[14px] text-black/75">Native currency fee structure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}