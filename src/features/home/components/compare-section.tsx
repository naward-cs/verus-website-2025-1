import Image from 'next/image'

import {env} from '@/configs/env'
import {AlertCircle, AlertTriangle, Shield} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'

export function CompareSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen overflow-hidden rounded-none bg-white shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:max-w-[1220px] md:rounded-lg">
        <div className="w-full overflow-hidden border-0 border-gray-200 bg-white/90 dark:border-gray-800 dark:bg-black/30 md:border">
          {/* First Compare Section */}
          <div className="flex w-full flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
            <div className="mb-10 md:mb-20">
              <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
                <span className="text-gray-600 dark:text-white">
                  Move Beyond Smart Contracts—
                </span>
                {''}
                <span className="relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-transparent dark:to-blue-400">
                      The Future of Web3 Architecture
                    </span>
                    <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 blur-md" />
                  </span>
                </span>
              </h2>
              <p className="text-center text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:mb-8 md:max-w-[800px] md:text-[20px]">
                While other protocols rely on complex smart contracts with
                inherent vulnerabilities, Verus achieves Web3 capabilities
                through pure transaction logic— making every interaction as
                secure as the protocol itself.
              </p>
            </div>

            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Problems with Smart Contracts */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-lg shadow-red-100/20 dark:border-red-800/40 dark:from-red-950/70 dark:to-red-900/30 dark:shadow-red-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-red-100 p-1.5 dark:bg-red-800/30">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                      The Smart Contract Problem
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Vulnerable to Exploits
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Complex code with potential vulnerabilities that can
                          be exploited by attackers, leading to millions in lost
                          funds.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Unpredictable Bugs
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Complex logic and extensive codebases lead to
                          unpredictable bugs that can cause catastrophic
                          failures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Perfect Code Dependency
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Security entirely depends on flawless code, making
                          even minor oversights potentially catastrophic.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Solution */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg shadow-blue-100/20 dark:border-blue-700/40 dark:from-blue-900/70 dark:to-indigo-900/30 dark:shadow-blue-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-blue-100 p-1.5 dark:bg-blue-800/30">
                      <Image
                        src="/img/verus-icon.svg"
                        alt="Verus Icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="text-[16px] font-medium text-blue-700 dark:text-blue-300 md:text-[18px]">
                      The Verus Advantage
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Intrinsically Secure
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Pure transaction logic means there's no complex code
                          to hack — just the verifiable protocol itself.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Consensus Verified
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Every action is verified by network consensus,
                          ensuring complete security and validation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Inherent Protection
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          As secure as the blockchain itself — protected by the
                          same cryptographic guarantees as value transfers.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <a
              href={`${env.NEXT_PUBLIC_VERUS_MEDIUM}/verus-smart-transactions-vs-smart-contracts-f98079c00ed0`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 flex items-center gap-2 rounded-none border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 dark:hover:shadow-blue-950/40 md:rounded-lg md:text-[15px]"
            >
              <FaMedium className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span>
                Read the article: Verus Smart Transactions vs. Smart Contracts
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-200 dark:border-gray-800" />

          {/* Second Compare Section */}
          <div className="flex w-full flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
            <div className="mb-10 md:mb-20">
              <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:max-w-[900px] md:text-[55px]">
                <span className="text-gray-600 dark:text-white">
                  Native Protocol Currencies—
                </span>
                {''}
                <span className="relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 bg-clip-text text-transparent dark:to-blue-400">
                      Protected by Network Consensus
                    </span>
                    <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-md" />
                  </span>
                </span>
              </h2>
              <p className="text-center text-[16px] font-normal leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:mb-8 md:max-w-[800px] md:text-[20px]">
                Most blockchain tokens exist as mere entries in smart contracts.
                Verus currencies are inherent to the protocol itself, securing
                every asset with the same cryptographic guarantees as the native
                blockchain.
              </p>
            </div>

            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Problems with Token Systems */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-lg shadow-red-100/20 dark:border-red-800/40 dark:from-red-950/70 dark:to-red-900/30 dark:shadow-red-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-red-100 p-1.5 dark:bg-red-800/30">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-red-700 dark:text-red-300 md:text-[18px]">
                      Conventional Token Systems
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Smart Contract Entries
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Tokens exist merely as entries in smart contract
                          state, inheriting all the vulnerabilities of their
                          code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Limited Verification
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Consensus only verifies that the contract executed,
                          not the validity of the token's supply or
                          transactions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/30">
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-red-800 dark:text-red-200 md:text-[17px]">
                          Security Compromises
                        </h4>
                        <p className="text-[14px] leading-relaxed text-red-700/80 dark:text-red-200/70 md:text-[15px]">
                          Vulnerable to hacks targeting the smart contract,
                          which could lead to token theft or unauthorized
                          minting.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Verus Difference */}
              <div className="h-full w-full">
                <div className="h-full rounded-none border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg shadow-blue-100/20 dark:border-blue-700/40 dark:from-blue-900/70 dark:to-indigo-900/30 dark:shadow-blue-900/20 md:rounded-lg md:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="rounded-lg bg-blue-100 p-1.5 dark:bg-blue-800/30">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-[16px] font-medium text-blue-700 dark:text-blue-300 md:text-[18px]">
                      The Verus Protocol Advantage
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          1
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Protocol-Level Assets
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          All currencies are first-class citizens within the
                          protocol itself, not dependent on smart contract code.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          2
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Consensus Protected
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Every currency operation is directly verified by
                          blockchain consensus, ensuring complete security.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                          3
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[15px] font-medium text-blue-800 dark:text-blue-200 md:text-[17px]">
                          Same Security as VRSC
                        </h4>
                        <p className="text-[14px] leading-relaxed text-blue-700/80 dark:text-blue-200/70 md:text-[15px]">
                          Verus currencies inherit the same cryptographic
                          security as the underlying blockchain, making them
                          inherently secure.
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
