import {BridgeLiquidityInfo} from './liquidity-info'

export function BridgeContent() {
  return (
    <div className="flex w-screen flex-col gap-8 md:w-full md:max-w-[1220px] md:flex-row">
      {/* Info Box - Shows above on mobile, right side on desktop */}
      <div className="w-full flex-shrink-0 md:order-2 md:w-[400px]">
        <div className="w-full rounded-none border-x-0 border-y border-[#EFEFEF] bg-white/50 p-8 pb-8 pt-8 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 md:rounded-lg md:border-x md:p-8">
          <h2 className="mb-4 text-[18px] font-medium leading-[1.3] tracking-tight text-black dark:text-white md:text-[22px]">
            Verus Internet Protocol (VIP)—secure bridging.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
              The Verus-Ethereum Bridge uses the Verus Internet Protocol (VIP)
              for cross-chain communication. It relies on cryptographic proofs,
              with witnesses validating notarizations created by network
              validators (miners and stakers of Verus).
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
              The bridge ensures non-custodial, decentralized, secure, and
              transparent cross-chain transactions between Verus and Ethereum.
            </p>
          </div>
          <h2 className="mb-4 mt-8 text-[18px] font-medium leading-[1.3] tracking-tight text-black dark:text-white md:mt-12 md:text-[22px]">
            The Bridge has its own currency with liquidity pool.
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
              Bridge.vETH is a 100% backed currency with 4 currencies in its
              reserves (VRSC, ETH, DAI, MKR). It's also an automated market
              maker (AMM) with which you can convert all four currencies in all
              directions, and also convert them into Bridge.vETH.
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
              The Bridge.vETH currency function is to make the bridging of
              assets simple. From wherever side on the bridge you send it
              converts the fees that you need seamlessly.
            </p>
            <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
              The value of Bridge.vETH increases relative to its reserves when
              fees or interest (Dai Savings Rate) are added to the reserves
              without there being new Bridge.vETH minted.
            </p>
          </div>
        </div>
      </div>

      {/* Liquidity Info - Shows below on mobile, left side on desktop */}
      <div className="relative md:order-1">
        <BridgeLiquidityInfo />

        {/* Security Info - Match width with liquidity info */}
        <div className="mt-4 w-screen rounded-none border-x-0 border-y border-[#E9EFFC] bg-white shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900 md:w-[700px] md:rounded-lg md:border-x">
          <div className="p-6 md:p-8">
            <h2 className="mb-4 text-[18px] font-medium text-black dark:text-white md:text-[22px]">
              Assets secured by miners and stakers.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
                The Verus-Ethereum Bridge allows for the secure transfer and
                conversion of cryptocurrencies between Verus and Ethereum.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
                It's trustless, decentralized and non-custodial, meaning it
                doesn't require users to trust a third party with their funds,
                and no single entity has control over the assets being
                transferred.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-black/75 dark:text-gray-300 md:text-[15px]">
                All assets on the bridge (the Ethereum smart contract) are
                secured by the worldwide Verus network of miners and stakers.
                Nothing is transferred over the bridge until it is proven and
                verified by consensus on the Verus side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
