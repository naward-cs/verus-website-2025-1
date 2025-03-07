import { LiquidityTooltip } from "./liquidity-tooltip"

export function BridgeLiquidityInfo() {
  return (
      <div className="w-screen md:w-[700px]">
      {/* Combined Table */}
      <div className="w-full bg-white rounded-none md:rounded-lg border-x-0 md:border-x border-y border-[#E9EFFC] overflow-hidden">
        {/* Bridge.vETH Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 md:gap-4 p-3 md:p-4 border-b border-[#E9EFFC]">
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-gray-500"></span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Total supply of Bridge.vETH tokens" />
            <span className="text-[10px] md:text-[12px] text-gray-500 text-right">Supply</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Current price in DAI" />
            <span className="text-[10px] md:text-[12px] text-gray-500 text-right">Price in DAI</span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC]">
          <div className="flex items-center gap-3">
            <img src="/img/bridgeveth.svg" alt="Bridge.vETH" className="h-6 w-6" />
            <span className="text-[13px] md:text-[16px] font-medium">Bridge.vETH</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <span className="text-[12px] md:text-[16px] text-gray-500 tabular-nums">1,200,772</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <span className="text-[12px] md:text-[16px] font-medium text-black tabular-nums">8.94</span>
          </div>
        </div>

        {/* Reserve Currencies Header */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] bg-gray-50">
          <span className="text-[10px] md:text-[12px] text-gray-500">Bridge.vETH<br />reserve currencies</span>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Amount of tokens in the bridge reserves" />
            <span className="text-[10px] md:text-[12px] text-gray-500 text-right">In reserves</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Current price of the token in DAI" />
            <span className="text-[10px] md:text-[12px] text-gray-500 text-right">Price in DAI</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Price difference compared to Coinpaprika" />
            <span className="text-[10px] md:text-[12px] text-gray-500 text-right">Compared<br />to Coinpaprika</span>
          </div>
        </div>

        {/* VRSC Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC]">
          <div className="flex items-center gap-3">
            <img src="/img/verus-icon.svg" alt="VRSC" className="h-6 w-6" />
            <span className="text-[13px] md:text-[16px] font-medium">VRSC</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] text-gray-500 tabular-nums">1,952,471.224</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] font-medium text-black tabular-nums">1.37</span>
          </div>
          <div className="flex items-center justify-end text-[#00AA25]">
            <span className="text-[12px] md:text-[16px] tabular-nums">7.61%</span>
          </div>
        </div>

        {/* DAI Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC]">
          <div className="flex items-center gap-3">
            <img src="/img/dai.svg" alt="DAI" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight">DAI</span>
              <span className="text-[10px] md:text-[12px] text-gray-500">DAI.vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] text-gray-500 tabular-nums">2,682,644.018</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] font-medium text-black tabular-nums">1.00</span>
          </div>
          <div className="flex items-center justify-end text-gray-500">
            <span className="text-[12px] md:text-[16px] tabular-nums">0%</span>
          </div>
        </div>

        {/* ETH Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC]">
          <div className="flex items-center gap-3">
            <img src="/img/eth.png" alt="ETH" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight">ETH</span>
              <span className="text-[10px] md:text-[12px] text-gray-500">vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] text-gray-500 tabular-nums">1,688.307</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] font-medium text-black tabular-nums">1,588.96</span>
          </div>
          <div className="flex items-center justify-end text-red-500">
            <span className="text-[12px] md:text-[16px] tabular-nums">0.05%</span>
          </div>
        </div>

        {/* MKR Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4">
          <div className="flex items-center gap-3">
            <img src="/img/mkr.svg" alt="MKR" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight">MKR</span>
              <span className="text-[10px] md:text-[12px] text-gray-500">MKR.vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] text-gray-500 tabular-nums">1,134.674</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[12px] md:text-[16px] font-medium text-black tabular-nums">2,364.24</span>
          </div>
          <div className="flex items-center justify-end text-[#00AA25]">
            <span className="text-[12px] md:text-[16px] tabular-nums">0.08%</span>
          </div>
        </div>

        {/* Total Value Row */}
        <div className="grid grid-cols-2 gap-1 md:gap-4 p-4 md:p-4 bg-gray-50 border-t border-[#E9EFFC]">
          <span className="text-[13px] md:text-[16px] text-black font-medium">Total value of liquidity</span>
          <span className="text-[13px] md:text-[16px] text-black font-medium text-right tabular-nums">10,731,420.55 DAI</span>
        </div>
      </div>
      </div>
  )
}