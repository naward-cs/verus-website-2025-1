import { Store, ArrowLeftRight, Shield } from "lucide-react"

export function MarketplaceSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Building on Decentralized Trading Infrastructure
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The Verus P2P Marketplace protocol provides a complete foundation for developers and entrepreneurs to build next-generation trading applications. This isn't a marketplace service – it's a protocol-level implementation of decentralized exchange that you can integrate into your own products, platforms, and services.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Technical Advantages */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Store className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Technical Advantages</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Reduced complexity – No need to write and audit complex escrow smart contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Lower transaction costs – Direct protocol implementation means minimal fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Superior security – Protocol-level validation eliminates vulnerabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Guaranteed execution – Atomic settlement ensures transaction finality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <ArrowLeftRight className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Core Capabilities</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Complete offer management system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Global offer discovery and querying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Atomic settlement engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Privacy-preserving transactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Business Models */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Business Models</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Revenue Opportunities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Premium features and advanced trading tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Subscription services for market data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Integration services and platform connections</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Competitive Advantages</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">No platform risk or central dependencies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Global access without regional limitations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Lower operating costs and infrastructure needs</span>
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