import { Users, Building, Globe, Calendar, Wallet, ShieldCheck } from "lucide-react"

/*
* Updated: Transformed the use cases section to have a modern SaaS-like design
* with dark mode support, decorative background elements, and consistent card styling.
*/
export function UseCasesSection() {
  return (
    <section className="my-24 relative">
      <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent"></div>
      <div className="absolute top-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-6 md:mb-12">
        <span className="text-gray-600 dark:text-white">Real-World </span>
        <span className="relative">
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
              Use Cases
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
          </span>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Tokenized Communities */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Tokenized Communities
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Create tokenized communities where membership and governance are managed through VerusIDs and associated tokens.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Governance Tokens</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Issue governance tokens to community members, enabling voting on proposals and community decisions.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Digital Collectives</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Create digital collectives with shared ownership and decision-making capabilities through VerusID namespaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Enterprise Solutions
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Deploy enterprise-grade identity and digital asset solutions with VerusID's powerful security and management features.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Asset Tokenization</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Tokenize real-world assets and manage them through verifiable identities in a secure blockchain environment.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Supply Chain Tracking</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Track products and components through the entire supply chain with immutable identity records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decentralized Social Networks */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Decentralized Social
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Build decentralized social platforms where users own their identities, data, and social connections.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Self-Sovereign Profiles</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Users control their profiles, content, and connections through their own VerusIDs across multiple platforms.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Content Monetization</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Enable direct monetization of content through tokens tied to creator VerusIDs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Management */}
        <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Event Management
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Create verifiable and fraud-resistant event ticketing and management systems using VerusID and tokenization.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">NFT Ticketing</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Issue verifiable and transferable tickets as NFTs tied to attendee VerusIDs.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Credential Verification</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Provide secure verification for event entry and special access with privacy-preserving features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Applications */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Financial Applications
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Build financial applications with verifiable identities and programmable currencies using VerusID's capabilities.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">DeFi Platforms</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Build decentralized finance platforms with identity-based access controls and verifiable transactions.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Multi-Chain Applications</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Create financial applications that operate across multiple blockchains with unified identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Identity & Privacy */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
                Identity & Privacy
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Implement privacy-focused identity solutions that put users in control of their personal data.
              </p>
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Zero-Knowledge Proofs</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Enable users to prove identity attributes without revealing sensitive information using Verus privacy features.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-2">Identity Verification</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Create KYC and identity verification systems that preserve user privacy while meeting compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}