import Image from "next/image"
import { IoLogoDiscord } from "react-icons/io5"
import { LuWallet, LuCoins } from "react-icons/lu"

export function GetStartedSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-6 mt-4">
      {/* Wallet Section */}
      <div className="w-full h-[340px] md:h-[490px] overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-blue-400/5 dark:bg-blue-400/10 backdrop-blur-xl z-0"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/3 dark:bg-blue-500/5 blur-[60px] z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-16 flex flex-col border border-blue-100/80 dark:border-blue-900/30">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LuWallet className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Get started</span>
            </div>
            <h2 className="text-[24px] md:text-[40px] text-verus-blue dark:text-blue-300 tracking-tight font-medium leading-[1.1] mb-4">
              Choose a wallet.
            </h2>
            <p className="text-[14px] md:text-[18px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.3] font-normal max-w-[400px] mb-8">
              Manage your funds and connect with the Verus protocol and other connected networks.
            </p>
            <a 
              href="/wallets" 
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
            >
              Choose wallet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
            <Image
              src="/img/wallets-small.png"
              alt="Verus Wallets"
              width={600}
              height={360}
              className="w-[70%] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Get VRSC Section */}
        <div className="w-full h-[190px] md:h-[237px] overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
          {/* Background gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)] z-0"></div>
          
          {/* Decorative element */}
          <div className="absolute top-6 right-6 h-14 w-14 rounded-full bg-blue-400/5 dark:bg-blue-400/10 backdrop-blur-xl z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between border border-blue-100/80 dark:border-blue-900/20">
            <div>
              
              <h2 className="text-[24px] md:text-[36px] text-verus-blue dark:text-blue-300 tracking-tight font-medium leading-[1.1]">
                Get $VRSC here.
              </h2>
            </div>
            <div>
              <a 
                href="/get-vrsc" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/40 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                How to get VRSC
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Discord Section */}
        <div className="w-full h-[190px] md:h-[237px] overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
          {/* Background gradient and pattern */}
          <div className="absolute inset-0 bg-[#5865F2] dark:bg-[#404EED] z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_70%)] z-0"></div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 blur-[30px] z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-500/20 blur-[50px] z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between border border-indigo-400/10">
            <h2 className="text-[24px] md:text-[36px] text-white tracking-tight font-medium leading-[1.1] flex items-center gap-4 mb-4 md:mb-0">
              <IoLogoDiscord className="h-10 w-10" />
              Join the Discord.
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <a 
                href="https://www.verus.io/discord"
                target="_blank"
                rel="noopener noreferrer" 
                className="group h-[40px] md:h-[50px] px-8 bg-white/90 backdrop-blur-sm border border-white/10 rounded-lg text-[14px] md:text-[16px] font-medium text-[#5865F2] flex items-center justify-center hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-700/20 hover:-translate-y-[1px] w-full sm:w-fit"
              >
                Enter Discord server
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <span className="text-[12px] md:text-[14px] text-white/90">
                More than 11k joined before you!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}