import Image from "next/image"
import { AtSign } from "lucide-react"

export function VerusIDSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] md:w-full h-[330px] md:h-[320px] overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg mt-4 md:mt-4">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/10 dark:to-gray-950 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] z-0"></div>
      
      {/* Decorative elements - moved below content to prevent overlap */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-[80px] transform translate-x-1/3 translate-y-1/3 z-0"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-[60px] transform -translate-x-1/3 -translate-y-1/3 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between border border-blue-100/80 dark:border-blue-900/20">
        <div className="max-w-[600px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
              <AtSign className="h-3 w-3" />
            </div>
            <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Identity</span>
          </div>
          <h2 className="text-[24px] md:text-[36px] text-gray-900 dark:text-white tracking-tight font-medium leading-[1.1]">
            Experience true self-sovereignty with VerusID.
          </h2>
          <p className="md:text-[18px] text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.3] font-normal mt-4 max-w-[600px]">
            Your identity, your keys, your data—all in one place.
          </p>
        </div>
        
        {/* Desktop button - added higher z-index and relative positioning */}
        <div className="hidden md:flex md:items-center mt-8 md:mt-0 relative z-20">
          <a 
            href="/verusid" 
            className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-blue-600 dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-700 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            Learn about VerusID
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile button - added higher z-index and relative positioning */}
        <div className="md:hidden mt-8 relative z-20">
          <a 
            href="/verusid" 
            className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-blue-600 dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-700 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            Learn about VerusID
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}