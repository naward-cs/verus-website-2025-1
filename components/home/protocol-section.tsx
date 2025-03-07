

import { IoMdDownload } from "react-icons/io";

export function ProtocolSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] bg-gradient-to-b from-[#3165D4] to-[#0A3FB1] rounded-none md:rounded-lg mt-4 md:mt-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="relative w-full h-full px-4 py-16 md:py-24 md:px-8 overflow-hidden">
        {/* Background Pattern - Adds visual interest */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2" 
            style={{ willChange: 'transform' }}
          />
          <div 
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2" 
            style={{ willChange: 'transform' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 md:mb-16">
            <h2 className="text-[32px] md:text-[75px] text-white tracking-tight font-medium text-center max-w-[700px] leading-[1.1] mb-4 md:mb-8">
              World Scale Through{" "}
              <span className="relative">
                <span className="relative inline-block px-2 py-1">
                  <span className="relative z-10 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Multi-Chain
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-200/10 to-white/10 rounded-lg border border-white/20" />
                </span>
              </span>
            </h2>
            <p className="text-[16px] md:text-[24px] text-white/90 tracking-tight font-normal text-center leading-snug max-w-[700px] opacity-85">
              Native multi-chain design enables true global scale. 
Building public infrastructure with truth & privacy for all.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="/intro" 
              className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              Learn more about the Verus Protocol
            </a>
            <a
  href="https://docs.verus.io"
  target="_blank"
  rel="noopener noreferrer"
  className="h-[40px] md:h-[50px] px-6 border-2 border-white rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-center hover:bg-white/10 transition-colors gap-2"
>
  Download Vision Paper (.PDF)
  <IoMdDownload className="h-5 w-5" />
</a>
          </div>
        </div>
      </div>
    </div>
  )
}