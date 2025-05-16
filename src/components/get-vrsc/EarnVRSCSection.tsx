import Link from "next/link"
import { Shield } from "lucide-react"

/*
* EarnVRSCSection - Server Component
* - Third section of the Get VRSC page showing mining and staking options
* - Displays information about mining and staking VRSC
* - Includes links to dedicated mining and staking pages
* - Fully server-rendered with no client-side JavaScript
*/

export function EarnVRSCSection() {
  return (
    <section className="w-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
      
      <div className="relative p-6 md:p-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
            Earn VRSC: Mining & Staking
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mining Card */}
          <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>
            
            <div className="relative">
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">Mining</h3>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Mine VRSC using CPU, mobile phones or ARM-devices. Verus is designed to be CPU-mineable, giving consumer hardware a fair chance at mining rewards compared to specialized hardware.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  CPU-optimized algorithm
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Easy-to-use mining software available
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Join mining pools to receive consistent rewards
                </li>
              </ul>
              
              <Link 
                href="/mining"
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Start mining
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Staking Card */}
          <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>
            
            <div className="relative">
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">Staking</h3>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Earn VRSC by staking your VRSC. Verus uses a hybrid PoW/PoS consensus system where stakers earn 50% of block rewards.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  No minimum amount required to start staking
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Low energy consumption compared to mining
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                  <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Run your wallet 24/7 for optimal staking rewards
                </li>
              </ul>
              
              <Link 
                href="/staking"
                className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
              >
                Learn about staking
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 