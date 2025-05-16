import { LuCpu, LuPercent } from "react-icons/lu";

export function ParticipationSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] flex flex-col md:flex-row gap-6 mt-4 md:mt-4">
      {/* Mining Card */}
      <div className="w-full md:w-1/2 h-[320px] md:min-h-[420px] md:rounded-lg rounded-none overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-12 flex flex-col border border-blue-100/80 dark:border-blue-900/30">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <LuCpu className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Participate</span>
              </div>
              <h2 className="text-[24px] md:text-[42px] text-verus-blue dark:text-blue-300 tracking-tight font-medium leading-[1.1] max-w-[400px]">
                Mine Verus with mobile phone, CPU & ARM.
              </h2>
              <p className="md:text-[18px] text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.3] font-normal mt-5 max-w-[400px]">
                Mine up to 22 ecosystem coins, simultaneously. No specialized equipment required.
              </p>
            </div>
          </div>
          <div className="mt-auto flex">
            <a 
              href="/mining" 
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
            >
              Start mining
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-blue-400/5 dark:bg-blue-400/10 backdrop-blur-xl"></div>
          <div className="absolute bottom-10 right-5 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100/20 to-blue-300/10 dark:from-blue-800/10 dark:to-blue-600/5 backdrop-blur-xl"></div>
        </div>
      </div>

      {/* Staking Card */}
      <div className="w-full md:w-1/2 h-[320px] md:min-h-[420px] md:rounded-lg rounded-none overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)] z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-12 flex flex-col border border-indigo-100/80 dark:border-indigo-900/30">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <LuPercent className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Earn</span>
              </div>
              <h2 className="text-[24px] md:text-[42px] text-indigo-600 dark:text-indigo-300 tracking-tight font-medium leading-[1.1] max-w-[400px]">
                Run a node.<br />Start staking.<br />Get rewarded.
              </h2>
            </div>
          </div>
          <div className="mt-auto flex">
            <a 
              href="/staking" 
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-indigo-950/80 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-indigo-600 dark:text-indigo-300 flex items-center justify-center hover:border-indigo-300 dark:hover:border-indigo-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-indigo-950/50 hover:text-indigo-700 dark:hover:text-indigo-200 hover:-translate-y-[1px] w-fit"
            >
              Start staking
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-indigo-400/5 dark:bg-indigo-400/10 backdrop-blur-xl"></div>
          <div className="absolute bottom-10 right-5 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-100/20 to-indigo-300/10 dark:from-indigo-800/10 dark:to-indigo-600/5 backdrop-blur-xl"></div>
        </div>
      </div>
    </div>
  )
}