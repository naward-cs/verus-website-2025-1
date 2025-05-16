import { User, Globe, Sparkles } from "lucide-react"
import { FaMedium } from "react-icons/fa"

/*
* Updated: Simplified the real-world applications section to focus on just two example 
* use cases (Social Tokens and Community Currencies) and added text to emphasize that 
* possibilities with the protocol are endless.
* Added links to relevant Medium articles for further reading.
*/
export function RealWorldApplications() {
  return (
    <section className="mb-24 md:mt-32 bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-br from-blue-400/5 to-transparent dark:from-blue-400/10 blur-3xl -z-10"></div>
      
      <div className="p-8 md:p-16 relative">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8">
          <span className="text-gray-600 dark:text-white">Real-World Applications of</span>{" "}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Verus Currencies
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-md blur-sm" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
          Verus currencies enable powerful financial applications beyond traditional cryptocurrencies.
        </p>
        
        <p className="text-center text-[16px] md:text-[18px] text-blue-600 dark:text-blue-400 max-w-3xl mx-auto mb-8 font-medium">
          <Sparkles className="inline-block h-5 w-5 mr-2 mb-1" />
          These are just examples — the possibilities with the Verus Protocol are endless!
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://medium.com/veruscoin/community-currencies-a-case-study-to-explore-new-technical-possibilities-ede897433b55"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-none md:rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px]"
          >
            <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span>Community Currencies: A Case Study to Explore New Technical Possibilities</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <a 
            href="https://medium.com/veruscoin/the-coming-of-age-of-social-tokens-518aed68c8f2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 backdrop-blur-sm px-5 py-3 rounded-none md:rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px]"
          >
            <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span>The Coming of Age of Social Tokens</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Tokens */}
          <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Social Tokens
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Create personalized currencies that connect creators with their communities through direct ownership and engagement.
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Launch influencer tokens with built-in liquidity
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Enable fan communities to participate directly
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create exclusive digital goods and NFTs
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Establish membership systems and access controls
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Generate verifiable online profiles and fan IDs
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Distribute tickets, coupons, and discount codes
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Set up automated reward systems
                </li>
              </ul>
            </div>
          </div>

          {/* Community Currencies */}
          <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Community Currencies
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Build local economic systems with currencies designed specifically for community needs and values.
              </p>
              <ul className="space-y-2 pl-2">
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Launch currencies backed by stable assets
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Enable instant convertibility to other currencies
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create transparent, auditable monetary systems
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Establish local digital goods economies
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Support community governance through multi-sig controls
                </li>
                <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Measure and capture community-contributed value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}