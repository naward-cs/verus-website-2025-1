import { CirculatingSupplyDisplay } from "./tokenomics/circulating-supply"

const maxSupply = 83_540_184

export function TokenomicsSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3 md:pl-8 md:pr-8">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
              A credibly neutral protocol for the world—made by the worldwide community.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Every coin in circulation is earned through pure mining and staking—just like Bitcoin (except for the staking part, of course). Why does this matter? Because it guarantees true neutrality from day one.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Most blockchain projects start with ICOs or premines that concentrate power and wealth in the hands of a select few. These early holders can manipulate markets and dictate the project's future. Verus took a different path: no premine, no ICO, and no venture capital influence. Just fair distribution from the start.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                So who shapes Verus's future? You do. The community does. As a genuinely public network built by and for the public, Verus's direction is determined by those who participate—not by any centralized authority. This foundation of community governance is permanent and unchangeable.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Like Bitcoin, Verus follows a transparent and fair economic model. Every coin is earned through mining and staking—a core requirement for truly neutral public infrastructure. This creates an ecosystem where participation equals influence.
              </p>
            </div>
          </div>

          {/* Supply Stats & Distribution */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 md:pl-16">
            {/* Supply Stats */}
            <CirculatingSupplyDisplay maxSupply={maxSupply} />

            {/* Distribution List */}
            <div className="space-y-3 w-full">
              {/* Zero Allocation Items */}
              <div className="bg-gradient-to-r from-red-50 via-red-50/50 to-transparent rounded-lg">
                <div className="flex flex-col divide-y divide-red-100">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75">to investors</span>
                    <span className="text-[14px] font-medium text-red-900">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75">to founders</span>
                    <span className="text-[14px] font-medium text-red-900">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-red-900/75">to insiders</span>
                    <span className="text-[14px] font-medium text-red-900">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75">to VCs</span>
                    <span className="text-[14px] font-medium text-amber-900">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75">premined</span>
                    <span className="text-[14px] font-medium text-amber-900">0%</span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-[14px] text-amber-900/75">dev fees</span>
                    <span className="text-[14px] font-medium text-amber-900">0%</span>
                  </div>
                </div>
              </div>

              {/* 100% Item */}
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg border-2 border-[#3165D4]/10">
                <div className="px-4 py-3 flex justify-between items-center">
                  <span className="text-[14px] font-medium text-[#3165D4]">fairly mined & staked</span>
                  <span className="text-[14px] font-medium text-[#3165D4]">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}