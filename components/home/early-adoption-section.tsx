"use client"

import { Code, LineChart, Layers } from "lucide-react"

export function EarlyAdoptionSection() {
  return (
    <div className="w-screen md:max-w-[1220px] mt-28 md:mt-40 ">
      {/* Main heading */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center md:max-w-[900px] leading-[1.2] mb-4 md:mb-8 mx-auto">
          <span className="text-gray-600 dark:text-white">Built by Builders, for Builders—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Fundamentals Without the Hype
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        
        <p className="text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 font-normal tracking-tight leading-relaxed max-w-[800px] mx-auto">
          Unlike protocols built with VC funding and marketing, Verus has grown organically since 2018, 
          driven by technical merit rather than market speculation.
        </p>
      </div>
      
      {/* Combined stats and info grid */}
      <div className="w-full rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800 mb-16 md:mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y md:divide-x divide-gray-200 dark:divide-gray-800">

            {/* TVL stat */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent tracking-tight leading-none">
                $80M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  Total Value Locked
                </span>
              </div>
            </div>
          </div>
          {/* Registration stat */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight leading-none">
                32k+
              </span>
              <div className="mt-3">
                <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  VerusID registrations
                </span>
              </div>
            </div>
          </div>
          
          

          
          
          {/* DeFi volume stat */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] bg-gradient-to-br from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500 bg-clip-text text-transparent tracking-tight leading-none">
                $500M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  Lifetime on-chain DeFi volume (since 2023)
                </span>
              </div>
            </div>
          </div>

          
          
          {/* Chains stat */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] bg-gradient-to-br from-blue-600 to-indigo-400 dark:from-blue-500 dark:to-indigo-300 bg-clip-text text-transparent tracking-tight leading-none">
                4
              </span>
              <div className="mt-3">
                <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  Chains in the ecosystem
                </span>
              </div>
            </div>
          </div>

          {/* Pioneer Advantage */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex justify-center items-center h-5 w-5 rounded-full bg-indigo-500 text-white">
                  <LineChart className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Early Advantage</span>
              </div>
              <h3 className="text-[24px] md:text-[30px] font-medium text-gray-800 dark:text-white mb-4 bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
                Pioneer Advantage
              </h3>
              <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[500px]">
                Every blockchain ecosystem grows in value exponentially with adoption. Today's builders have the opportunity to establish foundational projects on Verus before mainstream discovery.
              </p>
            </div>
          </div>
          
          
          
          {/* Building Without the Noise */}
          <div className="p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
                  <Layers className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Focus</span>
              </div>
              <h3 className="text-[24px] md:text-[30px] font-medium text-gray-800 dark:text-white mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Building Without the Noise
              </h3>
              <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[500px]">
                While other ecosystems chase short-term trends, Verus provides a stable foundation for applications that need security, privacy, and genuine scalability without the limitations of smart contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 