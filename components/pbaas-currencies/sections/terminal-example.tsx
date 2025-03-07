"use client"

import { useState } from "react"
import { Terminal } from "lucide-react"

export function TerminalExample() {
  const [selectedExample, setSelectedExample] = useState<'basket' | 'simple'>('basket')

  const basketExample = `./verus definecurrency '{
  "name": "CommunityBasket",
  "options": 33,
  "currencies": ["vrsc", "CoinCommunity"],
  "initialcontributions": [10, 200],
  "initialsupply": 100,
  "preallocations": [{"Jane@": 10}, {"John@": 5}]
}'`

  const simpleExample = `./verus definecurrency '{
  "name": "CommunityToken",
  "options": 32,
  "proofprotocol": 2,
  "preallocations": [{"SomeAddress@": 1000000}]
}'`

  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Launch with Simple Commands
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Create powerful currencies and tokens with just a few API commands. No smart contract programming needed—just configure the parameters you want and let the protocol handle the rest.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Choose between basket currencies with built-in liquidity pools or simple tokens. All secured by consensus with no smart contract vulnerabilities.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Example Selector */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Launch Examples</h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedExample('basket')}
                  className={`px-4 py-2 rounded-lg text-[14px] transition-colors ${
                    selectedExample === 'basket'
                      ? 'bg-verus-blue text-white'
                      : 'bg-gray-100 text-black/75 hover:bg-gray-200'
                  }`}
                >
                  Basket Currency
                </button>
                <button
                  onClick={() => setSelectedExample('simple')}
                  className={`px-4 py-2 rounded-lg text-[14px] transition-colors ${
                    selectedExample === 'simple'
                      ? 'bg-verus-blue text-white'
                      : 'bg-gray-100 text-black/75 hover:bg-gray-200'
                  }`}
                >
                  Simple Token
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Terminal */}
            <div>
              <div className="bg-[#1E1E1E] rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-[#2D2D2D] px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[12px] text-gray-400 ml-2">bash</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  <pre className="text-[13px] font-mono text-white whitespace-pre-wrap break-all">
                    {selectedExample === 'basket' ? basketExample : simpleExample}
                  </pre>
                </div>
              </div>

              {/* Example Description */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <h4 className="text-[16px] font-medium text-black mb-4">
                  {selectedExample === 'basket' ? 'Basket Currency Example' : 'Simple Token Example'}
                </h4>
                <p className="text-[14px] text-black/75 leading-relaxed">
                  {selectedExample === 'basket' 
                    ? 'This example creates a basket currency backed by VRSC and another currency. It includes initial contributions to set up the liquidity pool and pre-allocations to specific VerusIDs.'
                    : 'This example creates a simple token currency with a fixed supply. The entire supply is pre-allocated to a specific address, perfect for traditional token distributions.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}