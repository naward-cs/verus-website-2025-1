import Link from 'next/link'

import {env} from '@/configs/env'
import {MessageCircle} from 'lucide-react'

export function TestnetSection() {
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
          Get Testnet Coins
        </h3>
        <p className="mb-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
          To start developing on Verus testnet, you'll need some VRSCTEST coins.
          Join the Discord community and ask in the #pbaas-development channel -
          community members will help you get started.
        </p>
        <Link
          href={env.NEXT_PUBLIC_DISCORD}
          target="_blank"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Join Discord
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
        </Link>
      </div>
    </div>
  )
}
