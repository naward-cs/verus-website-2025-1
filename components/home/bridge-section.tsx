

import Image from "next/image"

export function BridgeSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] md:w-full h-[200px] md:h-auto bg-[#454A75] border-y-2 md:rounded-lg border-2 border-[#2B2E4B] mt-4 md:mt-4">
      <div className="h-full p-8 md:p-16 flex flex-col md:flex-row md:justify-between relative">
        <div>
          <h2 className="text-[22px] md:text-[40px] text-white tracking-tight font-medium leading-[1.1] max-w-[600px]">
            Connecting Verus and Ethereum—trustless & non-custodial.
          </h2>
        </div>
        
        {/* Desktop button */}
        <div className="hidden md:flex flex-col justify-center">
          <a 
            href="/verusid" 
            className="h-[50px] px-6 border-2 border-white rounded-lg text-[16px] font-medium text-white flex items-center justify-center hover:bg-black/10 transition-colors w-fit gap-2"
          >
            Learn more

          </a>
        </div>

        {/* Mobile button */}
        <div className="md:hidden mt-auto">
          <a 
            href="/verusid" 
            className="h-[40px] px-6 border-2 border-white rounded-lg text-[14px] font-medium text-white flex items-center justify-center hover:bg-blue-50 transition-colors w-fit gap-2"
          >
            Learn more
            
          </a>
        </div>
      </div>
    </div>
  )
}