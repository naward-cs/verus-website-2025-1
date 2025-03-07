

import Image from "next/image"

export function VerusIDSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] md:w-full h-[280px] md:h-auto bg-gradient-to-b from-[#E9EFFC] to-white border-y-2 md:rounded-lg border-2 border-[#E9EFFC] mt-4 md:mt-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="h-full p-8 md:p-16 flex flex-col md:flex-row md:justify-between relative">
        <div>
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] max-w-[500px]">
            Experience true
            self-sovereignty
            with VerusID.
          </h2>
          <p className="md:text-[18px] text-[14px] text-black tracking-tight leading-[1.3] font-normal mt-4 opacity-75 max-w-[300px]">
            Your identity, your keys, your data—all in one place.
          </p>
        </div>
        
        {/* Desktop button */}
        <div className="hidden md:flex flex-col justify-center">
          <a 
            href="/verusid" 
            className="h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit gap-2"
          >
            Learn about VerusID
            <Image
              src="/img/verusid-icon.svg"
              alt="VerusID Icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
        </div>

        {/* Mobile button */}
        <div className="md:hidden mt-auto">
          <a 
            href="/verusid" 
            className="h-[40px] px-6 border-2 border-verus-blue rounded-lg text-[14px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit gap-2"
          >
            Learn about VerusID
            <Image
              src="/img/verusid-icon.svg"
              alt="VerusID Icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </div>
  )
}