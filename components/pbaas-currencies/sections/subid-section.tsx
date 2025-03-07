

import { Key, Users, Coins } from "lucide-react"

export function SubIDSection() {
  return (
    <div className="w-full md:rounded-lg border mt-4 border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            SubID (VerusID) System for Community Identity
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Every currency on Verus can serve as a namespace for self-sovereign identities called SubIDs. Users can register identities like "Username.Currency@", creating a built-in identity system for your community or project.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              SubIDs inherit all the powerful features of VerusID—they can hold funds, store data, and serve as authentication credentials. This creates a complete identity infrastructure tied directly to your currency.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Creation Controls */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Key className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Creation Controls</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Require referrals from existing ID holders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Restrict creation to currency controller only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Create invitation-based identity systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Control community growth and participation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Registration Fees */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Registration Fees</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Fees paid in the currency's native token</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Decentralized: Fees are burned, increasing value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Centralized: Fees go to currency controller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Creates sustainable revenue model</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Use Cases */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Identity Use Cases</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Community Membership</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    VerusIDs can serve as membership credentials, giving users verifiable proof of belonging to your community. Perfect for DAOs, fan clubs, and online communities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Digital Asset Ownership</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    VerusIDs can hold tokens, NFTs, and other digital assets. Users can prove ownership and transfer assets securely using their identity.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Authentication & Access</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Use VerusIDs for password-free login to applications and services. Control access to exclusive content or features based on identity ownership.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Reputation Systems</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Build reputation and trust systems around VerusIDs. Track contributions, engagement, and standing within your community.
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