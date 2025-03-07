export function ComparisonSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mt-4">
      <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
        System Comparison
      </h2>
      
      {/* Scrollable wrapper */}
      <div className="overflow-x-auto -mx-8 md:mx-0 px-8 md:px-0">
      {/* Comparison Table */}
      <div className="min-w-[900px] md:w-full overflow-hidden md:rounded-lg border border-[#EFEFEF] bg-white/50">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,1fr,1fr] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black">Feature</div>
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black border-l border-[#EFEFEF]">Verus DeFi</div>
          <div className="p-6 md:p-8 text-[16px] md:text-[18px] font-medium text-black border-l border-[#EFEFEF]">(E)VM Chain DeFi</div>
        </div>

        {/* Implementation Model Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 font-medium" colSpan={3}>Implementation Model</div>
        </div>

        {/* Architecture */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Architecture</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p className="font-medium mb-2">Protocol-Level Implementation</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>DeFi functionality built directly into L1 consensus</li>
              <li>All operations validated by miners and stakers</li>
              <li>No separation between native and token accounting</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p className="font-medium mb-2">Smart Contract Based</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>DeFi functionality implemented as code running on EVM</li>
              <li>Operations validated by contract code execution</li>
              <li>Separation between native ETH and contract tokens</li>
            </ul>
          </div>
        </div>

        {/* Programming Required */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Programming Required</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🟢 Launch currencies, pools, and DeFi operations using simple API commands
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🔴 Requires Solidity programming skills or using existing smart contracts
          </div>
        </div>

        {/* Deployment Costs */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Deployment Costs</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Fixed & Low:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>200 VRSC to launch a currency/token</li>
              <li>No gas volatility</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Variable & Often High:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Smart contract deployment can cost hundreds to thousands of dollars during high traffic</li>
            </ul>
          </div>
        </div>

        {/* Security Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 font-medium" colSpan={3}>Security</div>
        </div>

        {/* Smart Contract Risk */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Smart Contract Risk</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🟢 None: No smart contract vulnerabilities as DeFi operations are built into consensus
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🔴 High: Vulnerable to smart contract bugs, hacks, and exploits ($3B+ lost to hacks since 2020)
          </div>
        </div>

        {/* MEV Protection */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">MEV Protection</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Built-in MEV Resistance:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>All conversions processed simultaneously</li>
              <li>No front-running attacks</li>
              <li>No sandwich attacks</li>
              <li>No transaction reordering exploits</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Vulnerable to MEV:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Front-running common and profitable</li>
              <li>Sandwich attacks frequent</li>
              <li>Block builders can extract value</li>
            </ul>
          </div>
        </div>

        {/* Wallet Approvals */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Wallet Approvals</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🟢 No Approval Mechanism: Direct control of assets through protocol
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            🔴 Unlimited Approvals Common: Users often grant unlimited token approvals to contracts
          </div>
        </div>

        {/* Transaction Costs Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 font-medium" colSpan={3}>Transaction Costs</div>
        </div>

        {/* Swap/Trade Fees */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Swap/Trade Fees</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Ultra-Low:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>0.025% for currency-to-liquidity pool</li>
              <li>0.05% for currency-to-currency</li>
              <li>Half goes to rewards, half to reserves</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Higher:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Typically 0.3% to 1% swap fee</li>
              <li>Plus gas fees for each transaction</li>
              <li>Usually goes to liquidity providers and protocol</li>
            </ul>
          </div>
        </div>

        {/* Gas/Network Fees */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Gas/Network Fees</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Fixed & Predictable:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>0.0001 VRSC transaction fee</li>
              <li>No fee auctions or congestion pricing</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Variable & Unpredictable:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Can range from $1 to $100+ during congestion</li>
              <li>Fee auctions during high demand periods</li>
            </ul>
          </div>
        </div>

        {/* Functionality Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 font-medium" colSpan={3}>Functionality</div>
        </div>

        {/* Multi-Currency Support */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Multi-Currency Support</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Native Protocol Support:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>VRSC and all PBaaS currencies</li>
              <li>Bridged Ethereum assets</li>
              <li>Multiple currency types in one transaction</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Contract-Based Support:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Only tokens implementing specific interfaces</li>
              <li>ERC-20 tokens most common</li>
              <li>Usually one token type per transaction</li>
            </ul>
          </div>
        </div>

        {/* Liquidity Pools */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Liquidity Pools</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Protocol-Level Baskets:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Up to 10 reserve currencies</li>
              <li>Configurable reserve ratios (5% to 100%)</li>
              <li>Automatic supply management</li>
              <li>Fair price discovery mechanism</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
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
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Identity Integration</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Built-in VerusID:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Human-readable addresses</li>
              <li>Revocable and recoverable</li>
              <li>Data storage capabilities</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Limited:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>No native identity system</li>
              <li>ENS and similar services are add-ons</li>
              <li>Not recoverable if keys lost</li>
            </ul>
          </div>
        </div>

        {/* Performance & Scalability Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF] bg-[#F8F9FB]">
          <div className="p-6 md:p-8 font-medium" colSpan={3}>Performance & Scalability</div>
        </div>

        {/* Throughput */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Throughput</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Scale-Out Architecture:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>75-800 TPS per chain</li>
              <li>Unlimited scaling through PBaaS</li>
              <li>Dedicated chains for specific applications</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Single-Chain Bottleneck:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>15-45 TPS on Ethereum mainnet</li>
              <li>All applications compete for block space</li>
              <li>L2 solutions add complexity</li>
            </ul>
          </div>
        </div>

        {/* Interoperability */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Interoperability</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 Native Cross-Chain Support:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>No bridging between PBaaS chains</li>
              <li>Non-custodial bridge to Ethereum</li>
              <li>Same security across all chains</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Complex Bridge Requirements:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Separate bridges for each chain pair</li>
              <li>Often centralized or multi-sig bridges</li>
              <li>Bridge hacks have lost billions</li>
            </ul>
          </div>
        </div>

        {/* Congestion Handling */}
        <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-[#EFEFEF]">
          <div className="p-6 md:p-8 font-medium">Congestion Handling</div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🟢 No Congestion Issues:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>DeFi activity can move to dedicated chains</li>
              <li>Consistent transaction fees</li>
              <li>Predictable transaction times</li>
            </ul>
          </div>
          <div className="p-6 md:p-8 text-[14px] md:text-[15px] text-black/75 border-l border-[#EFEFEF]">
            <p>🔴 Prone to Congestion:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Fee spikes during high activity</li>
              <li>Transactions can be delayed for hours</li>
              <li>Network often becomes unusable</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-4 px-8 md:px-0">
        <div className="flex items-center gap-2">
          <span>🟢</span>
          <span className="text-[14px] text-black/75">Strong advantage</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🟡</span>
          <span className="text-[14px] text-black/75">Moderate capability</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔴</span>
          <span className="text-[14px] text-black/75">Significant disadvantage</span>
        </div>
      </div>
    </div>
  )
}