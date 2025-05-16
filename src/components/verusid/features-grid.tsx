import { Database, Key, Globe, Shield, Wallet } from "lucide-react"

export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        {/* Left Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Feature 1 */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 pb-12 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Database className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black dark:text-white mb-2">
                Your Personal Digital Database
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Store your preferences, settings, and digital identity data in your own portable database. Take control of what information apps can access.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Key className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black dark:text-white mb-2">
                True Data Ownership
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Unlike traditional systems, you own and control your personal database. Your data stays with you, not scattered across platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - 1 Feature */}
        <div className="col-span-1 h-full">
          <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 h-full relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Globe className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black dark:text-white mb-2">
                The Future of Digital Interaction
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience password-free logins across platforms, seamless data portability between services, and user-controlled information sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Features */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Feature 4 */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Shield className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black dark:text-white mb-2">
                Privacy By Design
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                End-to-end encrypted communications, private transactions, and selective information sharing put you in complete control of your data.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 md:rounded-[20px] p-6 pb-12 md:p-8 md:pb-12 relative overflow-hidden group transition-all duration-300">
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                <Wallet className="h-7 w-7 text-verus-blue/80 dark:text-blue-400" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-black dark:text-white mb-2">
                Secure Asset Management
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Store and manage cryptocurrencies, set up time-locked security vaults, secure your identity with the ability to revoke access and recover all assets if needed, and utilize multi-signature capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}