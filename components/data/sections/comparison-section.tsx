export function ComparisonSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mt-4">
      <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
        Storage System Comparison
      </h2>
      
      {/* Scrollable wrapper */}
      <div className="overflow-x-auto -mx-8 md:mx-0 px-8 md:px-0">
      {/* Comparison Table */}
      <div className="min-w-[900px] md:w-full overflow-hidden md:rounded-lg border border-[#EFEFEF] bg-white/50">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black">Feature</div>
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black border-l border-[#EFEFEF]">Verus On-Chain Storage</div>
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black border-l border-[#EFEFEF]">IPFS</div>
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black border-l border-[#EFEFEF]">Centralized Servers</div>
        </div>

        {/* Data Ownership */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Data Ownership</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 True user ownership through VerusID - users maintain complete control of their data</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Content-addressed but requires pinning services for persistence</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 Provider owns and controls data</div>
        </div>

        {/* Persistence */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Persistence</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Permanent by default - one-time storage fee</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Requires pinning services or must be actively hosted</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Depends on subscription/payment</div>
        </div>

        {/* Privacy */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Privacy</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Protocol-level privacy with zk-SNARKs, encrypted storage, and selective disclosure</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Public by default, encryption possible but not native</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Provider-dependent privacy policies</div>
        </div>

        {/* Query Capabilities */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Query Capabilities</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Direct key lookup via VDXF, multimap support, versioning built-in</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 Limited without additional indexing services</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Full database query capabilities</div>
        </div>

        {/* Cost Structure */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Cost Structure</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 One-time fee for permanent storage (e.g., ~0.01 native coin per KB)</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Free to use but requires pinning costs</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 Ongoing subscription costs</div>
        </div>

        {/* Identity Integration */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Identity Integration</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Native self-sovereign identity system (VerusID)</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 No native identity system</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Account-based identity</div>
        </div>

        {/* Data Validation */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Data Validation</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Protocol-level validation of data types and structures</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 No built-in validation</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Server-side validation</div>
        </div>

        {/* Access Control */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Access Control</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Built-in through VerusID permissions and encryption</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 Limited without additional layers</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Granular access control</div>
        </div>

        {/* Scalability */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Scalability</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Horizontal scaling through PBaaS chains</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Highly scalable P2P network</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Vertical and horizontal scaling</div>
        </div>

        {/* Availability */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Availability</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Blockchain-guaranteed availability</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Depends on network participation</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 High availability (with cost)</div>
        </div>

        {/* Decentralization */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Decentralization</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Fully decentralized, validated by consensus</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Fully decentralized</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 Centralized</div>
        </div>

        {/* Data Recovery */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Data Recovery</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Built-in recovery mechanisms through VerusID</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Depends on content availability</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Provider backup systems</div>
        </div>

        {/* Development Complexity */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Development Complexity</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Simple API commands, no special programming needed</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Moderate complexity</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Familiar development patterns</div>
        </div>

        {/* Cross-chain Support */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Cross-chain Support</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Native cross-chain data access</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Network agnostic but no native chain support</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🔴 No native blockchain support</div>
        </div>

        {/* Data Integrity */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Data Integrity</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Cryptographically verified by consensus</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟢 Content-addressed integrity</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">🟡 Provider-dependent</div>
        </div>
      </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-4 px-8 md:px-0">
        <div className="flex items-center gap-2">
          <span>🟢</span>
          <span className="text-[14px] text-black/75">Strong capability/advantage</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🟡</span>
          <span className="text-[14px] text-black/75">Moderate capability/tradeoffs</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔴</span>
          <span className="text-[14px] text-black/75">Limited capability/disadvantage</span>
        </div>
      </div>
    </div>
  )
}