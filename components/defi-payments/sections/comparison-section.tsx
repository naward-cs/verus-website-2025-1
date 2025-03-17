/*
* Updated:
* - Transformed component to match PBaaS chains styling with modern gradient backgrounds
* - Added developer-focused title with gradient text and decorative backgrounds
* - Created a more engaging and centered title for developers
* - Improved table design with better visual hierarchy and spacing
* - Enhanced component with modern borders, shadows, and hover states
* - Maintained original content while improving overall visual appeal
* - Fixed linter errors by replacing colSpan with grid-column-span-3
* - Removed blur effect from under the title
* - Removed hover effects from comparison table rows
* - Removed background container gradient
* - Put title part after em dash on a new line
*/
export function ComparisonSection() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="absolute top-40 left-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      
      <div className="relative">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
            <span className="text-gray-600 dark:text-white block">Compare Financial Protocols—</span>
            <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent block">
              Make The Right Choice For Your dApp
            </span>
          </h2>
          <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understand the technical advantages of building with Verus compared to traditional VM-based platforms
          </p>
        </div>
        
        {/* Scrollable wrapper */}
        <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
          {/* Comparison Table */}
          <div className="min-w-[900px] md:w-full bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr,1fr,1fr] bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Feature</div>
              <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white border-l border-blue-100/60 dark:border-blue-900/20">Verus DeFi</div>
              <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white border-l border-blue-100/60 dark:border-blue-900/20">(E)VM Chain DeFi</div>
            </div>

            {/* Implementation Model Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white col-span-full">Implementation Model</div>
            </div>

            {/* Architecture */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Architecture</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p className="font-medium mb-2 text-gray-900 dark:text-white">Protocol-Level Implementation</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>DeFi functionality built directly into L1 consensus</li>
                  <li>All operations validated by miners and stakers</li>
                  <li>No separation between native and token accounting</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p className="font-medium mb-2 text-gray-900 dark:text-white">Smart Contract Based</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>DeFi functionality implemented as code running on EVM</li>
                  <li>Operations validated by contract code execution</li>
                  <li>Separation between native ETH and contract tokens</li>
                </ul>
              </div>
            </div>

            {/* Programming Required */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Programming Required</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🟢 Launch currencies, pools, and DeFi operations using simple API commands
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🔴 Requires Solidity programming skills or using existing smart contracts
              </div>
            </div>

            {/* Deployment Costs */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Deployment Costs</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Fixed & Low:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>200 VRSC to launch a currency/token</li>
                  <li>No gas volatility</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Variable & Often High:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Smart contract deployment can cost hundreds to thousands of dollars during high traffic</li>
                </ul>
              </div>
            </div>

            {/* Security Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white col-span-full">Security</div>
            </div>

            {/* Smart Contract Risk */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Smart Contract Risk</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🟢 None: No smart contract vulnerabilities as DeFi operations are built into consensus
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🔴 High: Vulnerable to smart contract bugs, hacks, and exploits ($3B+ lost to hacks since 2020)
              </div>
            </div>

            {/* MEV Protection */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">MEV Protection</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Built-in MEV Resistance:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>All conversions processed simultaneously</li>
                  <li>No front-running attacks</li>
                  <li>No sandwich attacks</li>
                  <li>No transaction reordering exploits</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Vulnerable to MEV:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Front-running common and profitable</li>
                  <li>Sandwich attacks frequent</li>
                  <li>Block builders can extract value</li>
                </ul>
              </div>
            </div>

            {/* Wallet Approvals */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Wallet Approvals</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🟢 No Approval Mechanism: Direct control of assets through protocol
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                🔴 Unlimited Approvals Common: Users often grant unlimited token approvals to contracts
              </div>
            </div>

            {/* Transaction Costs Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white col-span-full">Transaction Costs</div>
            </div>

            {/* Swap/Trade Fees */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Swap/Trade Fees</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Ultra-Low:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>0.025% for currency-to-liquidity pool</li>
                  <li>0.05% for currency-to-currency</li>
                  <li>Half goes to rewards, half to reserves</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Higher:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Typically 0.3% to 1% swap fee</li>
                  <li>Plus gas fees for each transaction</li>
                  <li>Usually goes to liquidity providers and protocol</li>
                </ul>
              </div>
            </div>

            {/* Gas/Network Fees */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Gas/Network Fees</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Fixed & Predictable:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>0.0001 VRSC transaction fee</li>
                  <li>No fee auctions or congestion pricing</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Variable & Unpredictable:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Can range from $1 to $100+ during congestion</li>
                  <li>Fee auctions during high demand periods</li>
                </ul>
              </div>
            </div>

            {/* Functionality Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white col-span-full">Functionality</div>
            </div>

            {/* Multi-Currency Support */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Multi-Currency Support</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Native Protocol Support:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>VRSC and all PBaaS currencies</li>
                  <li>Bridged Ethereum assets</li>
                  <li>Multiple currency types in one transaction</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Contract-Based Support:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Only tokens implementing specific interfaces</li>
                  <li>ERC-20 tokens most common</li>
                  <li>Usually one token type per transaction</li>
                </ul>
              </div>
            </div>

            {/* Liquidity Pools */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Liquidity Pools</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Protocol-Level Baskets:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Up to 10 reserve currencies</li>
                  <li>Configurable reserve ratios (5% to 100%)</li>
                  <li>Automatic supply management</li>
                  <li>Fair price discovery mechanism</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Contract-Based Pools:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Usually limited to 2-3 tokens per pool</li>
                  <li>Fixed fee structures</li>
                  <li>Various price discovery mechanisms</li>
                  <li>Vulnerable to frontrunning</li>
                </ul>
              </div>
            </div>

            {/* Identity Integration */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Identity Integration</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Built-in VerusID:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Human-readable addresses</li>
                  <li>Revocable and recoverable</li>
                  <li>Data storage capabilities</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Limited:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No native identity system</li>
                  <li>ENS and similar services are add-ons</li>
                  <li>Not recoverable if keys lost</li>
                </ul>
              </div>
            </div>

            {/* Performance & Scalability Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20 bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white col-span-full">Performance & Scalability</div>
            </div>

            {/* Throughput */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Throughput</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Scale-Out Architecture:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>75-800 TPS per chain</li>
                  <li>Unlimited scaling through PBaaS</li>
                  <li>Horizontal scaling across chains</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Limited Base Layer:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>15-30 TPS on Ethereum</li>
                  <li>Layer 2 solutions required for scaling</li>
                  <li>Still bottlenecked by main chain</li>
                </ul>
              </div>
            </div>

            {/* Block Time */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 md:p-8 font-medium text-gray-900 dark:text-white">Block Time</div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🟢 Fast:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>1-minute blocks</li>
                  <li>Fast transaction confirmation</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 border-l border-blue-100/60 dark:border-blue-900/20">
                <p>🔴 Slower:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>12-14 second blocks on Ethereum</li>
                  <li>Longer finality time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}