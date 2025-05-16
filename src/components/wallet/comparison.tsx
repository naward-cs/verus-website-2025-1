"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export function WalletComparison() {
  return (
    <div className="w-full max-w-[800px] mt-16 md:mt-24">
      <h2 className="text-[22px] md:text-[32px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-8 text-center">
        Feature comparison wallets.
      </h2>

      {/* Comparison Table */}
      <div className="w-full bg-white dark:bg-gray-950/0 overflow-hidden">
        {/* Header with Wallet Images */}
        <div className="flex mb-[-24px]">
          <div className="w-[40%]" />
          <div className="w-[30%] flex flex-col items-center">
            <span className="text-[16px] font-medium mb-4 dark:text-white">Verus Desktop</span>
            <div className="relative w-full h-[140px] flex items-end justify-center bg-transparent">
              <Image
                src="/img/wallet-desktop.png"
                alt="Verus Desktop"
                width={140}
                height={140}
                className="w-auto h-[120px] object-contain dark:bg-transparent"
              />
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-center">
            <span className="text-[16px] font-medium mb-4 dark:text-white">Verus Mobile</span>
            <div className="relative w-full h-[140px] flex items-end justify-center bg-transparent">
              <Image
                src="/img/wallet-mobile.png"
                alt="Verus Mobile"
                width={70}
                height={140}
                className="w-auto h-[120px] object-contain dark:bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* VerusID Support Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden relative z-10">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">VerusID support</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              The self-sovereign identity protocol for individuals. Take control over your digital identity and assets.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Import VerusID</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              </div>
            </div>
            
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Register VerusID</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Password-free login</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Verus DeFi Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Verus DeFi</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              Convert to protocol currencies, tokens, liquidity pools & bridged assets, without any middlemen. MEV-resistant and low-fees (0.025% - 0.05%).
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Low-fee AMM conversions</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Verus-Ethereum Bridge Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Verus-Ethereum Bridge</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              Use the integrated non-custodial and consensus proven bridge to move assets seamlessly between Verus & Ethereum.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Integrated bridge</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Verus Vault Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Verus Vault</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              Part of VerusID. Set locks or timelocks to safeguard funds on a VerusID. Locked identities can not spend funds.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Locking and unlocking</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Type Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Wallet Type</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              A full node implements all the rules of the blockchain, while the lite mode relies on a trusted full node's version of the blockchain.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Full node</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>

            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Lite mode</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Staking Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Staking</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              Use VRSC funds to participate in the proof-of-stake part of Verus. Validate transactions and verify blocks. Needs running a full node.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Staking</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1.5" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Private Transactions Section */}
        <div className="border-2 border-[#E9EFFC] dark:border-gray-800 rounded-lg overflow-hidden mt-4">
          <div className="p-6 border-b border-[#E9EFFC] dark:border-gray-800 bg-[#F8F9FB] dark:bg-gray-900">
            <h3 className="text-[18px] font-medium dark:text-white">Private Transactions</h3>
            <p className="text-[14px] text-black/75 dark:text-white/70 mt-1">
              Send and receive private transactions with zk-SNARKs privacy technology.
            </p>
          </div>
          
          <div className="divide-y divide-[#E9EFFC] dark:divide-gray-800">
            <div className="flex">
              <div className="w-[40%] p-4">
                <span className="text-[14px] dark:text-white">Private transactions</span>
              </div>
              <div className="w-[30%] p-4 flex justify-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Full node</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">Lite</span>
                    <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="w-[30%] p-4 flex justify-center items-center border-l-2 border-[#E9EFFC] dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">iOS only</span>
                  <Check className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-16 px-4 md:px-0">
        <p className="text-[11px] md:text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed text-center max-w-[600px] mx-auto">
          This is experimental and unfinished software. Use at your own risk! No warranty for any kind of damage! Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The enclosed copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </p>
        <p className="text-[11px] md:text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed text-center max-w-[600px] mx-auto mt-4">
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  )
}