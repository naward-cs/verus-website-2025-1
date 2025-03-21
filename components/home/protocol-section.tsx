import { IoMdDownload } from "react-icons/io";

export function ProtocolSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] bg-gradient-to-b from-blue-50 to-white dark:bg-gray-950 dark:bg-none rounded-none md:rounded-lg mt-4 md:mt-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
      <div className="relative w-full h-full px-4 py-16 md:py-24 md:px-8 overflow-hidden backdrop-blur-sm">
        {/* Background Pattern - Adds visual interest */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2" 
            style={{ willChange: 'transform' }}
          />
          <div 
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2" 
            style={{ willChange: 'transform' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 md:mb-16">
            <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center md:max-w-[900px] leading-[1.2] mb-4 md:mb-8">
              <span className="text-gray-600 dark:text-white">Unlimited Scalability—</span>{""}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                    Native Multi-Chain Architecture
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-verus-blue/10 rounded-lg blur-md" />
                </span>
              </span>
            </h2>
            <p className="text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 font-normal tracking-tight text-center leading-relaxed md:max-w-[800px]">
            Verus achieves unlimited scalability by embracing a multi-chain approach rather than scaling up a single blockchain. Instead of pushing the limits of a monolithic chain, Verus enables anyone to launch fully interoperable blockchains as needed, creating a network that scales horizontally—similar to how the internet is built on millions of servers rather than one super-server.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Primary Button - Light/Dark Variants */}
            <a 
              href="/intro" 
              className="group h-[40px] md:h-[50px] px-6 bg-blue-600 dark:bg-white/90 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-white backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium flex items-center justify-center transition-all duration-300 border border-blue-500 dark:border-white/60 hover:shadow-lg hover:-translate-y-[1px]"
            >
              Learn more about the Verus Protocol
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Secondary Button - Light/Dark Variants */}
            <a
              href="https://docs.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-6 bg-white/90 dark:bg-blue-950/40 text-gray-800 dark:text-blue-300 hover:bg-white dark:hover:text-blue-200 backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium flex items-center justify-center gap-2 transition-all duration-300 border border-gray-300 dark:border-blue-800/40 hover:border-gray-400 dark:hover:border-blue-700/60 hover:shadow-lg hover:-translate-y-[1px]"
            >
              <IoMdDownload className="h-5 w-5 group-hover:translate-y-[1px] transition-transform duration-300" />
              Download Vision Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}