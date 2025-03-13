import { Users, ShieldCheck, Wallet, FileText, Lock, Fingerprint, BadgeDollarSign, UserCheck, Award } from "lucide-react"
import Link from "next/link"

/*
* Updated: Corrected technical information about SubIDs, clarified they can only be created
* from currencies, and restructured the section to better explain their features, creation controls, 
* registration fees, and various use cases.
*/
export function SubIDSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">SubIDs for Flexible Identity—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Name Your Community
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-md blur-sm" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
          Every currency on Verus can serve as a namespace for self-sovereign identities called SubIDs. Users can register identities like "Username.Currency@", creating a built-in identity system for your community or project.
        </p>

        <p className="text-center text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          SubIDs inherit all the powerful features of VerusID—they can hold funds, store data, and serve as authentication credentials. This creates a complete identity infrastructure tied directly to your currency.
        </p>

        <Link 
          href="/build/verusid" 
          className="group mt-2 flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px]"
        >
          <Fingerprint className="h-5 w-5" />
          <span>Learn more about VerusID</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          
          <div className="relative space-y-8">
            {/* Creation Controls */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Creation Controls
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Require referrals from existing ID holders
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Restrict creation to currency controller only
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create invitation-based identity systems
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Control community growth and participation
                </li>
              </ul>
            </div>

            {/* Registration Fees */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <BadgeDollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Registration Fees
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Fees paid in the currency's native token
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Decentralized: Fees are burned, increasing value
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Centralized: Fees go to currency controller
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Creates sustainable revenue model
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Identity Use Cases
                </h3>
              </div>
            </div>

            {/* Community Membership */}
            <div className="mb-6 pl-4">
              <h4 className="flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Community Membership
              </h4>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusIDs can serve as membership credentials, giving users verifiable proof of belonging to your community. Perfect for DAOs, fan clubs, and online communities.
              </p>
            </div>

            {/* Digital Asset Ownership */}
            <div className="mb-6 pl-4">
              <h4 className="flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Digital Asset Ownership
              </h4>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                VerusIDs can hold tokens, NFTs, and other digital assets. Users can prove ownership and transfer assets securely using their identity.
              </p>
            </div>

            {/* Authentication & Access */}
            <div className="mb-6 pl-4">
              <h4 className="flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Authentication & Access
              </h4>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Use VerusIDs for password-free login to applications and services. Control access to exclusive content or features based on identity ownership.
              </p>
            </div>

            {/* Reputation Systems */}
            <div className="pl-4">
              <h4 className="flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Reputation Systems
              </h4>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Build reputation and trust systems around VerusIDs. Track contributions, engagement, and standing within your community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Namespace Example */}
      <div className="mt-8 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">Namespace Example</h4>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
              If your currency is named <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">COMMUNITY</code>, users can register SubIDs like <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">alice.COMMUNITY@</code> or <code className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">dao.COMMUNITY@</code>. These SubIDs function just like VerusIDs but cannot create new currencies or blockchains. They can hold funds, store data, and be used for authentication within your ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}