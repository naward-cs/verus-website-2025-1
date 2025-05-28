import {Layers, LineChart} from 'lucide-react'

export function EarlyAdoptionSection() {
  return (
    <div className="mt-28 w-screen md:mt-40 md:max-w-[1220px]">
      {/* Main heading */}
      <div className="mb-16 text-center md:mb-24">
        <h2 className="mx-auto mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
          <span className="text-gray-600 dark:text-white">
            Built by Builders, for Builders—
          </span>
          {''}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-transparent dark:to-blue-400">
                Fundamentals Without the Hype
              </span>
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 blur-md" />
            </span>
          </span>
        </h2>

        <p className="mx-auto max-w-[800px] text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[20px]">
          Unlike protocols built with VC funding and marketing, Verus has grown
          organically since 2018, driven by technical merit rather than market
          speculation.
        </p>
      </div>

      {/* Combined stats and info grid */}
      <div className="mb-16 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:mb-20">
        <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 md:divide-x md:divide-y">
          {/* TVL stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-blue-500 md:text-[100px] lg:text-[120px]">
                $60M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Total Value Locked
                </span>
              </div>
            </div>
          </div>
          {/* Registration stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-500 to-indigo-500 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-400 dark:to-indigo-400 md:text-[100px] lg:text-[120px]">
                32k+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  VerusID registrations
                </span>
              </div>
            </div>
          </div>

          {/* DeFi volume stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-indigo-500 to-blue-600 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-indigo-400 dark:to-blue-500 md:text-[100px] lg:text-[120px]">
                $500M+
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Lifetime on-chain DeFi volume (since 2023)
                </span>
              </div>
            </div>
          </div>

          {/* Chains stat */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <span className="bg-gradient-to-br from-blue-600 to-indigo-400 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-500 dark:to-indigo-300 md:text-[100px] lg:text-[120px]">
                4
              </span>
              <div className="mt-3">
                <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
                  Chains in the ecosystem
                </span>
              </div>
            </div>
          </div>

          {/* Pioneer Advantage */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-indigo-500/5 blur-[60px] dark:bg-indigo-500/10"></div>
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <LineChart className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Early Advantage
                </span>
              </div>
              <h3 className="mb-4 bg-gradient-to-br from-indigo-600 to-blue-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-indigo-400 dark:to-blue-300 dark:text-white md:text-[30px]">
                Pioneer Advantage
              </h3>
              <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
                Every blockchain ecosystem grows in value exponentially with
                adoption. Today's builders have the opportunity to establish
                foundational projects on Verus before mainstream discovery.
              </p>
            </div>
          </div>

          {/* Building Without the Noise */}
          <div className="relative overflow-hidden p-10 md:p-14">
            <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Layers className="h-3 w-3" />
                </div>
                <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  Focus
                </span>
              </div>
              <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
                Building Without the Noise
              </h3>
              <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
                While other ecosystems chase short-term trends, Verus provides a
                stable foundation for applications that need security, privacy,
                and genuine scalability without the limitations of smart
                contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
