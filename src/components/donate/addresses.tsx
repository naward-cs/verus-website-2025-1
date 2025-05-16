"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import Link from "next/link"
import { IoLogoDiscord } from "react-icons/io5"

interface DonationAddress {
  currency: string
  address: string
  logo: string
}

export function DonationAddresses() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  
  const addresses: DonationAddress[] = [
    {
      currency: "VRSC",
      address: "Verus Coin Foundation@",
      logo: "/img/verus-icon.svg"
    },
    {
      currency: "BTC",
      address: "1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo",
      logo: "/img/donate/btc.svg"
    },
    {
      currency: "ETH",
      address: "0xFA825bAd52101bEC6c2ee06b88f47E8DF03f66Eb",
      logo: "/img/donate/eth.svg"
    },
    {
      currency: "KMD",
      address: "RQ5cSwGkWM6SiNkd5F46SUJrG7wrxRwrTc",
      logo: "/img/donate/kmd.png"
    }
  ]
  
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(address)
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedAddress(null)
    }, 2000)
  }
  
  return (
    <div className="px-4 md:px-0">
      <div className="mb-8">
        <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
          Support the Verus Ecosystem
        </h2>
        
      </div>
      
      {/* Desktop layout with grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donation addresses - takes 1/2 of the width on desktop */}
        <div className="lg:col-span-1">
          <h3 className="text-[16px] md:text-[20px] font-medium text-gray-900 dark:text-white mb-4">
            Donation Options
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {addresses.map((item) => (
              <div 
                key={item.currency}
                className="border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={`${item.currency} logo`} 
                      className="w-6 h-6"
                      onError={(e) => {
                        // Fallback for missing logos
                        (e.target as HTMLImageElement).src = "/img/donate/crypto-default.svg"
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">
                      {item.currency}
                      {item.currency === "VRSC" && (
                        <span className="text-gray-500 dark:text-gray-400 text-[14px] ml-2 font-normal">
                          (Supports all Verus currencies)
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    <button
                      onClick={() => copyAddress(item.address)}
                      className="ml-auto flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-1.5 text-gray-600 dark:text-gray-300 text-xs transition-colors"
                      aria-label={`Copy ${item.currency} address`}
                    >
                      {copiedAddress === item.address ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-lg p-3 font-mono text-[12px] sm:text-[13px] text-gray-700 dark:text-gray-300 break-all">
                    {item.address}
                  </div>
                </div>
                
                {item.currency === "VRSC" && (
                  <p className="mt-3 text-[13px] text-gray-600 dark:text-gray-400">
                    This friendly address supports donations of any currency on the Verus network.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side panel - takes 1/2 of the width on desktop */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Why Donations Matter section */}
          <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-5 md:p-6 shadow-sm">
            <h2 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-3">
              Why Donations Matter
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300">
              Unlike many crypto projects, Verus was launched with no ICO, no premine, and no ongoing dev tax. This ensures true decentralization, but it means development depends entirely on community support.
            </p>
            <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mt-3">
              Your donations directly support:
            </p>
            <ul className="list-disc ml-5 mt-2 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 space-y-1">
              <li>Core protocol development</li>
              <li>Infrastructure maintenance</li>
              <li>Documentation and resources</li>
              <li>Community initiatives</li>
              <li>Research for future advancements</li>
            </ul>
          </div>
          
          {/* Discord community join section */}
          <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-5 md:p-6 shadow-sm">
            <h2 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-3">
              Contribute Your Skills
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mb-4">
              Join the Discord community to contribute beyond donations. Share your skills, participate in discussions, develop dApps, and help shape the future of Verus.
            </p>
            <Link 
              href="https://www.verus.io/discord" 
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
            >
              Join Discord
              <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-[1px] ml-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 