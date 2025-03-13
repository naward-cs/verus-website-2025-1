"use client"

import { useState } from "react"
import { Terminal, Code } from "lucide-react"

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
    <section className="mb-24 md:mt-32 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Currency Creation in</span>{" "}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                One Command
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-lg" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Create powerful financial instruments with simple API commands and flexible parameters.
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-xl p-6 md:p-8 shadow-lg border border-gray-800/80 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 text-gray-400 text-xs font-mono">Terminal - verus</div>
        </div>
        
        <div className="pt-8 font-mono text-[13px] md:text-[14px] leading-relaxed overflow-x-auto">
          <p className="text-green-400 mb-4">
            # Launch a new fraction reserve currency with multiple reserves
          </p>
          <p className="text-blue-400 mb-6">
            ./verus definecurrency {'{'}
          </p>
          <div className="pl-4 mb-6">
            <p className="text-gray-300">
              <span className="text-pink-400">"name"</span>: <span className="text-yellow-300">"MYTOKN"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"options"</span>: <span className="text-yellow-300">"64"</span>, <span className="text-blue-300">// fractional reserve</span>
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"parent"</span>: <span className="text-yellow-300">"vrsctest@"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"systemid"</span>: <span className="text-yellow-300">"myid@"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"nativecurrencyid"</span>: <span className="text-yellow-300">"MYTOKN"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"initialsupply"</span>: <span className="text-yellow-300">"0"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"prelaunchcarveout"</span>: <span className="text-yellow-300">"0"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"initialcontributions"</span>: [
            </p>
            <div className="pl-4">
              <p className="text-gray-300">{"{"} <span className="text-pink-400">"currencyid"</span>: <span className="text-yellow-300">"vrsctest"</span>, <span className="text-pink-400">"amount"</span>: <span className="text-yellow-300">"25"</span>, <span className="text-pink-400">"weight"</span>: <span className="text-yellow-300">"50"</span> {"}"},</p>
              <p className="text-gray-300">{"{"} <span className="text-pink-400">"currencyid"</span>: <span className="text-yellow-300">"VRSC"</span>, <span className="text-pink-400">"amount"</span>: <span className="text-yellow-300">"25"</span>, <span className="text-pink-400">"weight"</span>: <span className="text-yellow-300">"50"</span> {"}"}</p>
            </div>
            <p className="text-gray-300">],</p>
            <p className="text-gray-300">
              <span className="text-pink-400">"idregistrationfees"</span>: <span className="text-yellow-300">"0.1"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"idreferrallevels"</span>: <span className="text-yellow-300">"1"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"minpreconversion"</span>: <span className="text-yellow-300">"1000.0"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"preallocations"</span>: [{"{"} 
            </p>
            <div className="pl-4">
              <p className="text-gray-300"><span className="text-pink-400">"address"</span>: <span className="text-yellow-300">"myid@"</span>,</p>
              <p className="text-gray-300"><span className="text-pink-400">"amount"</span>: <span className="text-yellow-300">"1000000"</span></p>
            </div>
            <p className="text-gray-300">{"}"}{"]"}</p>
          </div>
          <p className="text-blue-400 mb-4">
            {"}"}
          </p>
          <p className="text-gray-200">
            Creating new currency MYTOKN as a fractional reserve currency...
          </p>
          <p className="text-gray-200">
            Currency MYTOKN created with transaction ID: 47a2e8d7bc9f1e88b8d5ab7ebe4e4a8a1fcf7c7e8d3e1f0a3c8b0a7b5c1d8e9f
          </p>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 mt-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">API Highlights</h4>
            <ul className="space-y-2">
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Configure multi-currency reserve baskets with custom weights
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Set up pre-allocations and vesting schedules
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Define minimum crowdfunding goals and contribution limits
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Configure ID registration fees and referral rewards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}