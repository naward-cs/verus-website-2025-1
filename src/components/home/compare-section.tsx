import { AlertTriangle, AlertCircle, Shield } from "lucide-react"
import { FaMedium } from "react-icons/fa"
import Image from "next/image"

export function CompareSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen md:max-w-[1220px] rounded-none md:rounded-lg overflow-hidden bg-white dark:bg-gray-950 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)]">
        <div className="w-full border-0 md:border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/30 overflow-hidden">
          {/* First Compare Section */}
          <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
            <div className="mb-10 md:mb-20">
              <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center md:max-w-[900px] leading-[1.2] mb-4 md:mb-8">
                <span className="text-gray-600 dark:text-white">Move Beyond Smart Contracts—</span>{""}
                <span className="relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                      The Future of Web3 Architecture
                    </span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
                  </span>
                </span>
              </h2>
              <p className="text-[16px] md:text-[20px] md:mb-8 text-gray-600 dark:text-gray-300 font-normal tracking-tight text-center leading-relaxed md:max-w-[800px]">
                While other protocols rely on complex smart contracts with inherent vulnerabilities,
                Verus achieves Web3 capabilities through pure transaction logic—
                making every interaction as secure as the protocol itself.
              </p>
            </div>

            <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Problems with Smart Contracts */}
              <div className="w-full h-full">
                <div className="h-full p-6 md:p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/70 dark:to-red-900/30 rounded-none md:rounded-lg border border-red-200 dark:border-red-800/40 shadow-lg shadow-red-100/20 dark:shadow-red-900/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-red-100 dark:bg-red-800/30 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-medium text-red-700 dark:text-red-300">
                      The Smart Contract Problem
                    </h3>
                  </div>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">1</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Vulnerable to Exploits</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Complex code with potential vulnerabilities that can be exploited by attackers, leading to millions in lost funds.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">2</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Unpredictable Bugs</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Complex logic and extensive codebases lead to unpredictable bugs that can cause catastrophic failures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">3</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Perfect Code Dependency</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Security entirely depends on flawless code, making even minor oversights potentially catastrophic.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Solution */}
              <div className="w-full h-full">
                <div className="h-full p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/70 dark:to-indigo-900/30 rounded-none md:rounded-lg border border-blue-200 dark:border-blue-700/40 shadow-lg shadow-blue-100/20 dark:shadow-blue-900/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                      <Image
                        src="/img/verus-icon.svg"
                        alt="Verus Icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-medium text-blue-700 dark:text-blue-300">
                      The Verus Advantage
                    </h3>
                  </div>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">1</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Intrinsically Secure</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          Pure transaction logic means there's no complex code to hack — just the verifiable protocol itself.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">2</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Consensus Verified</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          Every action is verified by network consensus, ensuring complete security and validation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">3</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Inherent Protection</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          As secure as the blockchain itself — protected by the same cryptographic guarantees as value transfers.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <a 
              href="https://medium.com/veruscoin/verus-smart-transactions-vs-smart-contracts-f98079c00ed0"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 flex items-center gap-2 md:text-[15px] text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all duration-300 bg-blue-50/80 hover:bg-blue-50 dark:bg-blue-950/40 dark:hover:bg-blue-950/50 px-5 py-3 rounded-none md:rounded-lg border border-blue-200 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md dark:hover:shadow-blue-950/40 hover:-translate-y-[1px]"
            >
              <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span>Read the article: Verus Smart Transactions vs. Smart Contracts</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full border-t border-gray-200 dark:border-gray-800" />
          
          {/* Second Compare Section */}
          <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-8">
            <div className="mb-10 md:mb-20">
              <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center md:max-w-[900px] leading-[1.2] mb-4 md:mb-8">
                <span className="text-gray-600 dark:text-white">Native Protocol Currencies—</span>{""}
                <span className="relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                      Protected by Network Consensus
                    </span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-lg blur-md" />
                  </span>
                </span>
              </h2>
              <p className="text-[16px] md:text-[20px] md:mb-8 text-gray-600 dark:text-gray-300 font-normal tracking-tight text-center leading-relaxed md:max-w-[800px]">
                Most blockchain tokens exist as mere entries in smart contracts. Verus currencies are inherent to the protocol
                itself, securing every asset with the same cryptographic guarantees as the native blockchain.
              </p>
            </div>

            <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Problems with Token Systems */}
              <div className="w-full h-full">
                <div className="h-full p-6 md:p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/70 dark:to-red-900/30 rounded-none md:rounded-lg border border-red-200 dark:border-red-800/40 shadow-lg shadow-red-100/20 dark:shadow-red-900/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-red-100 dark:bg-red-800/30 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-medium text-red-700 dark:text-red-300">
                      Conventional Token Systems
                    </h3>
                  </div>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">1</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Smart Contract Entries</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Tokens exist merely as entries in smart contract state, inheriting all the vulnerabilities of their code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">2</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Limited Verification</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Consensus only verifies that the contract executed, not the validity of the token's supply or transactions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-700 dark:text-red-300 font-semibold text-sm">3</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-red-800 dark:text-red-200">Security Compromises</h4>
                        <p className="text-[14px] md:text-[15px] text-red-700/80 dark:text-red-200/70 leading-relaxed">
                          Vulnerable to hacks targeting the smart contract, which could lead to token theft or unauthorized minting.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Difference */}
              <div className="w-full h-full">
                <div className="h-full p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/70 dark:to-indigo-900/30 rounded-none md:rounded-lg border border-blue-200 dark:border-blue-700/40 shadow-lg shadow-blue-100/20 dark:shadow-blue-900/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-medium text-blue-700 dark:text-blue-300">
                      The Verus Protocol Advantage
                    </h3>
                  </div>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">1</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Protocol-Level Assets</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          All currencies are first-class citizens within the protocol itself, not dependent on smart contract code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">2</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Consensus Protected</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          Every currency operation is directly verified by blockchain consensus, ensuring complete security.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">3</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] md:text-[17px] font-medium text-blue-800 dark:text-blue-200">Same Security as VRSC</h4>
                        <p className="text-[14px] md:text-[15px] text-blue-700/80 dark:text-blue-200/70 leading-relaxed">
                          Verus currencies inherit the same cryptographic security as the underlying blockchain, making them inherently secure.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}