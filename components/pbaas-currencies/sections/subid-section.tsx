import { Users, Key, Wallet, FileText, Lock } from "lucide-react"

export function SubIDSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">SubIDs for Flexible Identity—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Create From Your VerusID
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-md blur-sm" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Launch unlimited SubIDs from your VerusID for specific applications, projects, or communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          
          <div className="relative space-y-8">
            {/* Multiple Identities */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Multiple Identities
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Create separate SubIDs for different projects, communities, or applications while maintaining a connection to your primary VerusID.
              </p>
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="font-medium text-gray-900 dark:text-white">Example:</span> If your VerusID is <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">alice@</code>, you can create SubIDs like <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">club.alice@</code> or <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">business.alice@</code>
                </p>
              </div>
            </div>

            {/* Dedicated Keys */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Key className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Dedicated Keys
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Assign specific keys and signing authorities to each SubID for enhanced security. Revoke access to individual SubIDs without affecting your primary identity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
          <div className="relative space-y-8">
            {/* Community IDs */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Wallet className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Community SubIDs
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Create and distribute SubIDs to community members or users of your project. Set up a namespace for your DAO, brand, or organization.
              </p>
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-5 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  <span className="font-medium text-gray-900 dark:text-white">Example:</span> A community with the ID <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">community@</code> can issue SubIDs like <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">member1.community@</code> to participants
                </p>
              </div>
            </div>

            {/* Benefits & Applications */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Benefits & Applications
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Separate trading identities for different markets
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Project-specific identities for DAOs or organizations
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Delegate different permissions to different SubIDs
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Compartmentalize identity for enhanced privacy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="mt-8 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">Security Note</h4>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
              SubIDs inherit the blockchain-level security of VerusIDs but with their own separate keys and permissions. This design allows for modular identity management where compromise of a SubID doesn't affect the primary identity or other SubIDs. Each SubID can have its own set of signing authorities, revocation mechanisms, and privacy settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}