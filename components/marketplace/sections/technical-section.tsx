import { Code2, FileCode, Layers } from "lucide-react"

export function TechnicalSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Technical Implementation
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The Verus P2P Marketplace protocol provides a straightforward API for building decentralized trading applications. No complex smart contract programming is needed—just simple commands to create and manage offers.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Every aspect of marketplace functionality is handled at the protocol level, from order matching to settlement. This means developers can focus on building great user experiences without worrying about the underlying trading mechanics.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Key RPC Commands */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Key RPC Commands</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">makeoffer - Creates trading offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">takeoffer - Accepts existing offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">getoffers - Queries available offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">closeoffers - Cancels active offers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <FileCode className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Best Practices</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Cache offer data to reduce node queries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Implement offer verification before accepting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Provide clear transaction previews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Handle payment address generation for privacy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Getting Started */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Getting Started</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Setup Steps</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Set up a Verus node or connect to existing node</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Initialize a client library for API communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Authenticate with node credentials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                      <span className="text-[14px] text-black/75">Make API calls to marketplace functions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Integration Support</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    For comprehensive documentation, code examples, and development support, visit our Developer Portal or join the Verus Discord community.
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