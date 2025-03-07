

import { Database, Key, Globe, Shield, Wallet } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Feature 1 */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 pb-12 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Database className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Your Personal Digital Database
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Store your preferences, settings, and digital identity data in your own portable database. Take control of what information apps can access.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Key className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                True Data Ownership
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Unlike traditional systems, you own and control your personal database. Your data stays with you, not scattered across platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 1 Feature */}
        <div className="col-span-1 h-full">
          <div className="bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 h-full relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Globe className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                The Future of Digital Interaction
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Experience password-free logins across platforms, seamless data portability between services, and user-controlled information sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-2">
          {/* Feature 4 */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Shield className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Privacy By Design
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                End-to-end encrypted communications, private transactions, and selective information sharing put you in complete control of your data.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex-1 bg-white/70 border border-[#E9EFFC] md:rounded-[20px] p-6 pb-12 md:p-8 md:pb-12 relative overflow-hidden group hover:from-white hover:to-white transition-all duration-300">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-white border border-[#E9EFFC] group-hover:bg-[#F8F9FB] flex items-center justify-center mb-6 transition-colors duration-300">
                <Wallet className="h-7 w-7 text-verus-blue/80" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-2">
                Secure Asset Management
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Store and manage cryptocurrencies, set up time-locked security vaults, secure your identity with the ability to revoke access and recover all assets if needed, and utilize multi-signature capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}