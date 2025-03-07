

import { Download } from "lucide-react"

export function VisionMissionSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] flex flex-col md:flex-row mt-8 md:mt-24 bg-white/90 rounded-none md:rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      {/* Vision Box */}
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h2 className="text-[18px] md:text-[22px] text-black tracking-tight font-medium leading-[1.1] md:mb-6 mb-4">
          Vision
        </h2>
        <p className="text-[14px] md:text-[15px] text-black tracking-tight leading-[1.8] font-normal opacity-75">
          A world where digital infrastructure favors truth, privacy, and community power—enabling individuals to participate directly in a fair digital economy while keeping sovereign control over personal funds, data and identity.
        </p>
          <a 
          href="https://docs.verus.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-8 md:mt-8 gap-2 text-[14px] md:text-[15px] text-verus-blue hover:underline group"
        >
          <Download className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          Download: Vision Paper
        </a>
      </div>

      {/* Divider - Vertical on desktop, Horizontal on mobile */}
      <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-gray-200 md:self-stretch" />

      {/* Mission Box */}
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h2 className="text-[18px] md:text-[22px] text-black tracking-tight font-medium leading-[1.1] md:mb-6 mb-4">
          Mission
        </h2>
        <p className="text-[14px] md:text-[15px] text-black leading-[1.8] tracking-tight font-normal opacity-75 mb-8">
         To build open, secure, public blockchain infrastructure with consensus-level verification of core primitives, including sovereign identity, currencies, fair DeFi, and data, all with verifiable privacy-preserving technology and fair participation—a network where truth and cooperation emerge from use.
        </p>

      
      </div>
    </div>
  )
}