import { CirculatingSupplyDisplay } from "./tokenomics/circulating-supply"

const maxSupply = 83_540_184

export function TokenomicsSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 md:p-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue dark:text-white tracking-tight font-medium leading-[1.1] mb-6">
              A credibly neutral protocol for the world—made by the worldwide community.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Every coin in circulation is earned through pure mining and staking—just like Bitcoin (except for the staking part, of course). Why does this matter? Because it guarantees true neutrality from day one.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Most blockchain projects start with ICOs or premines that concentrate power and wealth in the hands of a select few. These early holders can manipulate markets and dictate the project's future. Verus took a different path: no premine, no ICO, and no venture capital influence. Just fair distribution from the start.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                So who shapes Verus's future? You do. The community does. As a genuinely public network built by and for the public, Verus's direction is determined by those who participate—not by any centralized authority. This foundation of community governance is permanent and unchangeable.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Like Bitcoin, Verus follows a transparent and fair economic model. Every coin is earned through mining and staking—a core requirement for truly neutral public infrastructure. This creates an ecosystem where participation equals influence.
              </p>
            </div>
          </div>

          {/* Supply Stats & Distribution */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            {/* Supply Stats */}
            <CirculatingSupplyDisplay maxSupply={maxSupply} />

            {/* Distribution List */}
            <div className="space-y-3 w-full">
              {/* Zero Allocation Items */}
              <div className="bg-gradient-to-r from-red-50 via-red-50/50 to-transparent dark:from-red-950/30 dark:via-red-950/20 dark:to-transparent rounded-lg">
                <div className="flex flex-col divide-y divide-red-100 dark:divide-red-900/20">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75 dark:text-red-300/90">to investors</span>
                    <span className="text-[14px] font-medium text-red-900 dark:text-red-300">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75 dark:text-red-300/90">to founders</span>
                    <span className="text-[14px] font-medium text-red-900 dark:text-red-300">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75 dark:text-red-300/90">to insiders</span>
                    <span className="text-[14px] font-medium text-red-900 dark:text-red-300">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75 dark:text-red-300/90">to VCs</span>
                    <span className="text-[14px] font-medium text-amber-900 dark:text-red-300">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75 dark:text-red-300/90">premined</span>
                    <span className="text-[14px] font-medium text-amber-900 dark:text-red-300">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75 dark:text-red-300/90">dev fees</span>
                    <span className="text-[14px] font-medium text-amber-900 dark:text-red-300">0%</span>
                  </div>
                </div>
              </div>

              {/* 100% Item */}
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/30 dark:via-blue-900/20 dark:to-transparent rounded-lg border-2 border-[#3165D4]/10 dark:border-blue-700/20">
                <div className="px-4 py-3 flex justify-between items-center">
                  <span className="text-[14px] font-medium text-[#3165D4] dark:text-blue-300">fairly mined & staked</span>
                  <span className="text-[14px] font-medium text-[#3165D4] dark:text-blue-300">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}