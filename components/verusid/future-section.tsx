

import { Download, Code } from "lucide-react"

export function FutureSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg bg-gradient-to-b from-[#E9EFFC] to-white p-8 pt-12 md:p-16 border-2 border-[#E9EFFC] shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
            Building for tomorrow, available today.
          </h2>
          <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8] mb-12">
            While decentralized applications using VerusID are still in development, you can already create your sovereign digital identity, secure your assets, and take control of your data. Join the worldwide community in building a future where users control their own data, privacy is the default, and digital freedom is accessible to all.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="/wallet"
              className="h-[40px] md:h-[50px] px-6 bg-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-center hover:bg-verus-blue/90 transition-colors gap-2"
            >
              <Download className="h-4 w-4" />
              Download wallet
            </a>
            <a 
              href="/docs/verusid"
              className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors gap-2"
            >
              <Code className="h-4 w-4" />
              Build with VerusID
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}