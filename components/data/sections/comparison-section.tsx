/*
* Updated:
* - Transformed to match PBaaS content styling with modern gradient backgrounds
* - Created more developer-focused title
* - Added radial gradients and improved background elements
* - Enhanced card designs with hover effects
* - Improved spacing and layout for better readability
*/
export function ComparisonSection() {
  return (
    <section className="mb-24 md:mb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-10 h-80 w-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] -z-10"></div>
      
      {/* Developer-focused Title */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-6 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Choose the Right Storage—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                For Your dApp Needs
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Compare on-chain storage with alternatives to make informed architectural decisions for your applications.
        </p>
      </div>
      
      <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
        
        <div className="relative">
          {/* Scrollable wrapper */}
          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            {/* Comparison Table */}
            <div className="min-w-[900px] md:w-full overflow-hidden rounded-lg border border-blue-100/60 dark:border-blue-900/20 bg-white/90 dark:bg-gray-900/60">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] bg-blue-50/80 dark:bg-blue-950/50">
                <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-800 dark:text-white">Feature</div>
                <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-800 dark:text-white border-l border-blue-100/60 dark:border-blue-900/20">Verus On-Chain Storage</div>
                <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-800 dark:text-white border-l border-blue-100/60 dark:border-blue-900/20">IPFS</div>
                <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-800 dark:text-white border-l border-blue-100/60 dark:border-blue-900/20">Centralized Servers</div>
              </div>

              {/* Data Ownership */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Data Ownership</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 True user ownership through VerusID - users maintain complete control of their data</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Content-addressed but requires pinning services for persistence</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 Provider owns and controls data</div>
              </div>

              {/* Persistence */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Persistence</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Permanent by default - one-time storage fee</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Requires pinning services or must be actively hosted</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Depends on subscription/payment</div>
              </div>

              {/* Privacy */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Privacy</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Protocol-level privacy with zk-SNARKs, encrypted storage, and selective disclosure</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Public by default, encryption possible but not native</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Provider-dependent privacy policies</div>
              </div>

              {/* Query Capabilities */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Query Capabilities</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Direct key lookup via VDXF, multimap support, versioning built-in</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 Limited without additional indexing services</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Full database query capabilities</div>
              </div>

              {/* Cost Structure */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Cost Structure</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 One-time fee for permanent storage (e.g., ~0.01 native coin per KB)</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Free to use but requires pinning costs</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 Ongoing subscription costs</div>
              </div>

              {/* Identity Integration */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Identity Integration</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Native self-sovereign identity system (VerusID)</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 No native identity system</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Account-based identity</div>
              </div>

              {/* Data Validation */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Data Validation</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Protocol-level validation of data types and structures</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 No built-in validation</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Server-side validation</div>
              </div>

              {/* Access Control */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Access Control</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Built-in through VerusID permissions and encryption</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 Limited without additional layers</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Granular access control</div>
              </div>

              {/* Scalability */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Scalability</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Horizontal scaling through PBaaS chains</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Highly scalable P2P network</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Vertical and horizontal scaling</div>
              </div>

              {/* Availability */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Availability</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Blockchain-guaranteed availability</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Depends on network participation</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 High availability (with cost)</div>
              </div>

              {/* Decentralization */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Decentralization</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Fully decentralized, validated by consensus</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Fully decentralized</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 Centralized</div>
              </div>

              {/* Data Recovery */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Data Recovery</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Built-in recovery mechanisms through VerusID</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Depends on content availability</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Provider backup systems</div>
              </div>

              {/* Development Complexity */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Development Complexity</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Simple API commands, no special programming needed</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Moderate complexity</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Familiar development patterns</div>
              </div>

              {/* Cross-chain Support */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-950/30">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Cross-chain Support</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Native cross-chain data access</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Network agnostic but no native chain support</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🔴 No native blockchain support</div>
              </div>

              {/* Data Integrity */}
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
                <div className="p-6 md:p-8 font-medium text-gray-800 dark:text-white">Data Integrity</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Cryptographically verified by consensus</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟢 Content-addressed integrity</div>
                <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">🟡 Provider-dependent</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-4 md:px-0">
            <div className="flex items-center gap-2">
              <span>🟢</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">Strong capability/advantage</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🟡</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">Moderate capability/tradeoffs</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔴</span>
              <span className="text-[14px] text-gray-600 dark:text-gray-300">Limited capability/disadvantage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}