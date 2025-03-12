import { Download, Code } from "lucide-react"

export function FutureSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="w-full md:rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden relative">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/10 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_70%)] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-[80px] transform translate-x-1/3 translate-y-1/3 z-0"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-[60px] transform -translate-x-1/3 -translate-y-1/3 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 pt-12 md:p-16 border border-blue-100/80 dark:border-blue-900/20">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue dark:text-blue-400 tracking-tight font-medium leading-[1.1] mb-4">
              Building for tomorrow, available today.
            </h2>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8] mb-12">
              While decentralized applications using VerusID are still in development, you can already create your sovereign digital identity, secure your assets, and take control of your data. Join the worldwide community in building a future where users control their own data, privacy is the default, and digital freedom is accessible to all.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="/wallet"
                className="group h-[40px] md:h-[50px] px-6 bg-blue-600 dark:bg-white/90 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-white backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium flex items-center justify-center transition-all duration-300 border border-blue-500 dark:border-white/60 hover:shadow-lg hover:-translate-y-[1px]"
              >
                Download wallet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/build/verusid"
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Build with VerusID
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}