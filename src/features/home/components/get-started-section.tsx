import Image from 'next/image'

import {env} from '@/configs/env'
import {IoLogoDiscord} from 'react-icons/io5'
import {LuWallet} from 'react-icons/lu'

export function GetStartedSection() {
  return (
    <div className="-mx-4 mt-4 grid w-screen grid-cols-1 gap-6 md:mx-0 md:max-w-[1220px] md:grid-cols-[1fr,1fr]">
      {/* Wallet Section */}
      <div className="relative h-[340px] w-full overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:h-[490px] md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

        {/* Decorative elements */}
        <div className="absolute right-6 top-6 z-0 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
        <div className="bg-blue-500/3 absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full blur-[60px] dark:bg-blue-500/5"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col border border-blue-100/80 p-8 dark:border-blue-900/30 md:p-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LuWallet className="h-5 w-5 text-verus-blue dark:text-blue-400" />
              <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                Get started
              </span>
            </div>
            <h2 className="mb-4 text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[40px]">
              Choose a wallet.
            </h2>
            <p className="mb-8 max-w-[400px] text-[14px] font-normal leading-[1.3] tracking-tight text-gray-700 dark:text-gray-300 md:text-[18px]">
              Manage your funds and connect with the Verus protocol and other
              connected networks.
            </p>
            <a
              href="/wallet"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
            >
              Choose wallet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
            <Image
              src="/img/wallets-small.png"
              alt="Verus Wallets"
              width={600}
              height={360}
              className="h-auto w-[70%]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Get VRSC Section */}
        <div className="relative h-[190px] w-full overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:h-[237px] md:rounded-lg">
          {/* Background gradient and pattern */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]"></div>

          {/* Decorative element */}
          <div className="absolute right-6 top-6 z-0 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10"></div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between border border-blue-100/80 p-8 dark:border-blue-900/20 md:p-12">
            <div>
              <h2 className="text-[24px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-blue-300 md:text-[36px]">
                Get $VRSC here.
              </h2>
            </div>
            <div>
              <a
                href="/get-vrsc"
                className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/40 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
              >
                How to get VRSC
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </div>

        {/* Discord Section */}
        <div className="relative h-[190px] w-full overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:h-[237px] md:rounded-lg">
          {/* Background gradient and pattern */}
          <div className="absolute inset-0 z-0 bg-[#5865F2] dark:bg-[#404EED]"></div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_70%)]"></div>

          {/* Decorative element */}
          <div className="absolute right-0 top-0 z-0 h-24 w-24 rounded-full bg-white/5 blur-[30px]"></div>
          <div className="absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-[50px]"></div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between border border-indigo-400/10 p-8 md:p-12">
            <h2 className="mb-4 flex items-center gap-4 text-[24px] font-medium leading-[1.1] tracking-tight text-white md:mb-0 md:text-[36px]">
              <IoLogoDiscord className="h-10 w-10" />
              Join the Discord.
            </h2>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={env.NEXT_PUBLIC_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[40px] w-full items-center justify-center rounded-lg border border-white/10 bg-white/90 px-8 text-[14px] font-medium text-[#5865F2] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-white hover:shadow-lg hover:shadow-indigo-700/20 sm:w-fit md:h-[50px] md:text-[16px]"
              >
                Enter Discord server
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              <span className="text-[12px] text-white/90 md:text-[14px]">
                More than 11k joined before you!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
