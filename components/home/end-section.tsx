import { FaGithub } from "react-icons/fa"
import { LuHistory, LuCode } from "react-icons/lu"

export function EndSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] flex flex-col md:flex-row gap-6 mt-4 md:mt-4">
      {/* Milestones Card */}
      <div className="w-full md:w-1/2 h-[180px] md:h-[340px] md:rounded-lg rounded-none overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_70%)] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-blue-400/5 dark:bg-blue-400/10 backdrop-blur-xl z-0"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/3 dark:bg-blue-500/5 blur-[60px] z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-16 flex flex-col border border-blue-100/80 dark:border-blue-900/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LuHistory className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">History</span>
            </div>
            <h2 className="text-[24px] md:text-[40px] text-verus-blue dark:text-blue-300 tracking-tight font-medium leading-[1.1] max-w-[400px]">
              Major milestones over the years. 2018-2025.
            </h2>
            
          </div>
          <div className="mt-auto">
            <a 
              href="/milestones" 
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/40 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
            >
              See milestones
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Open Source Card */}
      <div className="w-full md:w-1/2 h-[180px] md:h-[340px] md:rounded-lg rounded-none overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 to-white dark:from-indigo-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.1),transparent_70%)] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-indigo-400/5 dark:bg-indigo-400/10 backdrop-blur-xl z-0"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/3 dark:bg-indigo-500/5 blur-[60px] z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-16 flex flex-col border border-indigo-100/80 dark:border-indigo-800/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LuCode className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Open Source</span>
            </div>
            <h2 className="text-[24px] md:text-[40px] text-indigo-600 dark:text-indigo-300 tracking-tight font-medium leading-[1.1] max-w-[400px]">
              Verus is 100% open-source.
            </h2>
          </div>
          <div className="mt-auto">
            <a 
              href="https://github.com/VerusCoin" 
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-indigo-950/80 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800/40 rounded-lg text-[14px] md:text-[16px] font-medium text-indigo-600 dark:text-indigo-300 flex items-center justify-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-indigo-950/50 hover:text-indigo-700 dark:hover:text-indigo-200 hover:-translate-y-[1px] w-fit gap-2"
            >
              Go to GitHub
              <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}