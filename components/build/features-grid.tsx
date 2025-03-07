export function FeaturesGrid() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="md:rounded-lg bg-white/40 border border-white/50 mb-2 md:mb-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-4">
          {/* First Row - 3 Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 md:px-0 md:mt-12">
            {/* Low-cost, rapid & easy deployment */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/build/rapid.svg"
                alt="Rapid Development"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] font-medium leading-[1.3] text-black mb-2">
                Low-cost, rapid & easy deployment.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                Save money (on expensive blockchain or Solidity developers) & build fast.
              </p>
            </div>

            {/* Layer-1 security */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/build/security.svg"
                alt="Security"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] leading-[1.3] font-medium text-black mb-2">
                Layer-1 security.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                Every feature is secured by consensus. No smart contract vulnerabilities.
              </p>
            </div>

            {/* Publish & store data on-chain */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/build/data.svg"
                alt="Data Storage"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] leading-[1.3] font-medium text-black mb-2">
                Publish & store data on-chain.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                Use VerusID and VDXF as a controlled public storage system. Publish and store (encrypted) data with multiple levels of nesting.
              </p>
            </div>
          </div>

          {/* Second Row - 2 Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 md:px-0 md:w-full mx-auto md:mb-12">
            {/* Scale for world demand */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/hero/scale.svg"
                alt="Scale for world demand"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] leading-[1.3] font-medium text-black mb-2">
                Scale for world demand.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                Never hit a scaling roadblock due to horizontal scaling and seamless chain interoperability.
              </p>
            </div>

            {/* Full access with API calls */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/build/access.svg"
                alt="API Access"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] leading-[1.3] font-medium text-black mb-2">
                Full access with API calls.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                No smart contract language needed. Only simple API calls.
              </p>
            </div>

            {/* Build in any framework */}
            <div className="p-6 md:p-12 flex flex-col items-center text-center">
              <img 
                src="/img/build/build.svg"
                alt="Build Framework"
                className="h-12 w-12 mb-6"
              />
              <h3 className="text-[16px] md:text-[22px] leading-[1.3] font-medium text-black mb-2">
                Build in any framework.
              </h3>
              <p className="text-[14px] md:text-[15px] text-black/75 leading-relaxed">
                Use your favourite framework to build applications with. All protocol features are accessible with easy to use API calls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}