import {
  Code,
  Coins,
  DollarSign,
  Scale,
  Server,
  Shield,
  Wallet,
} from 'lucide-react'

/*
 * Updated:
 * - Added dark mode support with appropriate colors and contrasts
 * - Maintained core functionality and content
 * - Ensured no hover effects were added
 * - Improved visual hierarchy in dark mode
 */

const comparisons = [
  {
    title: 'Core Protocol Design',
    icon: <Server className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Uses a virtual machine (like EVM) that executes smart contracts',
      'Only the native currency (e.g., ETH) is enforced by blockchain protocol',
      'All other functions (tokens, identities, DeFi) are implemented through smart contracts written in languages like Solidity',
    ],
    verus: [
      'Uses "smart transactions" where core functionalities are built directly into the protocol layer (L1)',
      'Currencies, identities, and DeFi operations are verified and accounted for by miners/stakers at the consensus level',
    ],
  },
  {
    title: 'Scalability',
    icon: <Scale className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Typically focuses on scaling up single chain performance',
      'Uses Layer 2 solutions or sharding to handle increased load',
      'Additional complexity and security considerations with each scaling layer',
    ],
    verus: [
      'Scales out through multiple interoperable PBaaS chains',
      'Similar to how the internet scales through multiple servers rather than upgrading a single server',
      'Each chain maintains full security and feature set',
    ],
  },
  {
    title: 'Security Model',
    icon: <Shield className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Smart contracts can introduce vulnerabilities through coding errors or unexpected behaviors',
      'Each contract reinvents currency accounting with no systemic control',
    ],
    verus: [
      'Core features are protocol primitives with standardized rules enforced by consensus',
      "Eliminates entire classes of smart contract risks since there's no need to reimplement basic functions",
    ],
  },
  {
    title: 'Development Approach',
    icon: <Code className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Requires specialized developers (e.g., Solidity) to write and audit smart contracts',
      'Each application needs its own contract implementation',
    ],
    verus: [
      'No specialized programming language needed',
      'Uses simple API commands to access protocol features',
      'Applications can be built in any framework and interact with the protocol through QR codes or deep links',
    ],
  },
  {
    title: 'DeFi Implementation',
    icon: <Scale className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'DeFi protocols run on smart contracts',
      'Often vulnerable to MEV (Maximal Extractable Value), front-running, and sandwich attacks due to sequential transaction processing',
    ],
    verus: [
      'DeFi operates at protocol level with simultaneous transaction processing, making it MEV-resistant',
      'All conversions in a block get the same price with no spread',
    ],
  },
  {
    title: 'Wallet Interaction',
    icon: <Wallet className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Uses wallet approval mechanisms that can be prone to phishing',
      'Often require users to approve unclear transaction permissions',
    ],
    verus: [
      'Users know exactly what their wallets will execute',
      'Clear transaction boundaries and permissions',
    ],
  },
  {
    title: 'Currency Management',
    icon: <Coins className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Tokens (like ERC-20s) are managed by individual smart contracts with varying implementations',
    ],
    verus: [
      'All currencies are protocol primitives',
      'Tracked and validated by consensus rules',
      'Ensures consistent behavior and security',
    ],
  },
  {
    title: 'Cost Structure',
    icon: <DollarSign className="h-5 w-5 text-verus-blue dark:text-blue-400" />,
    vm: [
      'Often has high gas fees due to smart contract execution costs',
      'Fees vary based on network congestion',
    ],
    verus: [
      'Fixed low fees (0.0001 VRSC for transactions)',
      '0.025-0.05% for conversions',
      'Fees go directly to miners/stakers',
    ],
  },
]

export function ComparisonTable() {
  return (
    <div className="-mx-4 md:mx-0">
      <div className="w-full overflow-hidden border border-[#EFEFEF] bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,1fr] bg-[#F8F9FB] dark:bg-gray-800/80 md:grid-cols-[300px,1fr,1fr]">
          <div className="hidden p-6 md:block md:p-8" />
          <div className="border-l border-[#EFEFEF] p-6 text-[16px] font-medium text-black dark:border-gray-700 dark:text-white md:p-8 md:text-[18px]">
            VM-based Blockchains
          </div>
          <div className="border-l border-verus-blue p-6 text-[16px] font-medium text-black dark:border-blue-600 dark:text-white md:p-8 md:text-[18px]">
            Verus Protocol
          </div>
        </div>

        {/* Table Body */}
        {comparisons.map((comparison, index) => (
          <div
            key={index}
            className={`grid grid-cols-[1fr,1fr] md:grid-cols-[300px,1fr,1fr] ${index !== 0 ? 'border-t border-[#EFEFEF] dark:border-gray-800' : ''}`}
          >
            {/* Title Column */}
            <div className="col-span-2 flex items-center gap-3 p-6 md:col-span-1 md:p-8">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                {comparison.icon}
              </div>
              <h3 className="text-[16px] font-medium text-black dark:text-white md:text-[18px]">
                {comparison.title}
              </h3>
            </div>

            {/* VM Content */}
            <div
              className={`space-y-2 border-l border-[#EFEFEF] p-6 dark:border-gray-700 md:p-8 ${index !== 0 ? 'border-t border-[#EFEFEF] dark:border-gray-800' : ''}`}
            >
              {comparison.vm.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-[1px] flex-shrink-0 text-black/75 dark:text-white/70">
                    -
                  </span>
                  <p className="text-[14px] leading-relaxed text-black/75 dark:text-white/70 md:text-[15px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Verus Content */}
            <div
              className={`space-y-2 border-l border-verus-blue p-6 dark:border-blue-600 md:p-8 ${index !== 0 ? 'border-t border-[#EFEFEF] dark:border-gray-800' : ''}`}
            >
              {comparison.verus.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-[1px] flex-shrink-0 text-black/75 dark:text-white/70">
                    -
                  </span>
                  <p className="text-[14px] leading-relaxed text-black/75 dark:text-white/70 md:text-[15px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="mt-4 w-full border border-[#EFEFEF] bg-white/50 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:mt-4 md:rounded-lg md:p-8">
        <h2 className="mb-4 text-[18px] font-medium text-black dark:text-white md:text-[22px]">
          Conclusion
        </h2>
        <p className="text-[14px] leading-relaxed text-black/75 dark:text-white/70 md:text-[15px]">
          The fundamental architectural differences between VM-based blockchains
          and the Verus Protocol result in Verus offering more secure,
          predictable, and standardized operations. It remains accessible to
          developers without requiring specialized blockchain programming
          knowledge, while providing built-in solutions for common blockchain
          challenges like MEV resistance and scalability.
        </p>
      </div>
    </div>
  )
}
