import { BridgeLiquidityInfo } from "./liquidity-info"

export function BridgeContent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:max-w-[1220px] w-screen md:w-full">
      {/* Info Box - Shows above on mobile, right side on desktop */}
      <div className="md:order-2 md:w-[400px] flex-shrink-0 w-full ">
        <div className="w-full rounded-none md:rounded-lg border-x-0 md:border-x border-y border-[#EFEFEF] p-8 pt-8 pb-8 md:p-8 bg-white/50">
          <h2 className="text-[18px] md:text-[22px] tracking-tight text-black font-medium mb-4 leading-[1.3]">
            Verus Internet Protocol (VIP)—secure bridging.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The Verus-Ethereum Bridge uses the Verus Internet Protocol (VIP) for cross-chain communication. It relies on cryptographic proofs, with witnesses validating notarizations created by network validators (miners and stakers of Verus).
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The bridge ensures non-custodial, decentralized, secure, and transparent cross-chain transactions between Verus and Ethereum.
            </p>
          </div>
          <h2 className="text-[18px] md:text-[22px] md:mt-12 mt-8 tracking-tight text-black font-medium mb-4 leading-[1.3]">
            The Bridge has its own currency with liquidity pool.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Bridge.vETH is a 100% backed currency with 4 currencies in its reserves (VRSC, ETH, DAI, MKR). It’s also an automated market maker (AMM) with which you can convert all four currencies in all directions, and also convert them into Bridge.vETH.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The Bridge.vETH currency function is to make the bridging of assets simple. From wherever side on the bridge you send it converts the fees that you need seamlessly.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The value of Bridge.vETH increases relative to its reserves when fees or interest (Dai Savings Rate) are added to the reserves without there being new Bridge.vETH minted.
            </p>
          </div>
        </div>
      </div>

      {/* Liquidity Info - Shows below on mobile, left side on desktop */}
      <div className="md:order-1">
        <BridgeLiquidityInfo />

        {/* Security Info - Match width with liquidity info */}
        <div className="w-screen md:w-[700px] bg-white rounded-none md:rounded-lg border-x-0 md:border-x border-y border-[#E9EFFC] overflow-hidden mt-4">
          <div className="p-6 md:p-8">
            <h2 className="text-[18px] md:text-[22px] text-black font-medium mb-4">
              Assets secured by miners and stakers.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                The Verus-Ethereum Bridge allows for the secure transfer and conversion of cryptocurrencies between Verus and Ethereum.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                It's trustless, decentralized and non-custodial, meaning it doesn't require users to trust a third party with their funds, and no single entity has control over the assets being transferred.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                All assets on the bridge (the Ethereum smart contract) are secured by the worldwide Verus network of miners and stakers. Nothing is transferred over the bridge until it is proven and verified by consensus on the Verus side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}