import Image from 'next/image'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'

export function VerusIDLoginSection() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-8 pb-16 pt-16 shadow-[0_4px_40px_-12px_rgba(30,64,175,0.3)] dark:from-blue-950 dark:to-blue-900 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.5)] md:flex-row md:gap-16 md:rounded-lg md:p-8 md:pl-16 md:pr-8">
        {/* Decorative elements */}
        <div className="absolute left-[-10%] top-0 z-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[60px] dark:bg-white/10"></div>
        <div className="absolute bottom-0 right-0 z-0 h-[200px] w-[200px] rounded-full bg-blue-500/20 blur-[50px] dark:bg-blue-400/10"></div>

        {/* Left Content */}
        <div className="relative z-10 w-full pl-4 md:w-1/2 md:pl-0">
          <Image
            src="/img/verusid-logo-white.svg"
            alt="VerusID Logo"
            height={24}
            width={100}
            className="mb-8 h-6 w-auto md:mb-8"
          />
          <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-white md:text-[40px]">
            Introduce password-free login to your users.
          </h2>
          <p className="mb-8 text-[14px] leading-[1.8] tracking-tight text-white/90 dark:text-white/80 md:text-[15px]">
            Let your users login with their VerusID. No more passwords, no more
            data breaches, no more forgotten credentials. Just scan a QR code
            and you're in.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href={`${env.NEXT_PUBLIC_MONKINS_GITHUB}/veruslogin/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-white/10 bg-white/90 px-8 text-[14px] font-medium text-black backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-white hover:shadow-lg hover:shadow-blue-700/20 dark:bg-white/95 dark:hover:shadow-blue-900/20 md:h-[50px] md:text-[16px]"
            >
              Integrate VerusID
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/build/verusid"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-white/30 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-900/20 md:h-[50px] md:text-[16px]"
            >
              What is VerusID?
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
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="z-10 flex w-full justify-center md:relative md:w-1/2 md:justify-end">
          <Image
            src="/img/login-verusid.png"
            alt="VerusID Login"
            width={300}
            height={300}
            className="h-auto w-[300px] dark:opacity-90 md:w-[450px] md:translate-x-[20px]"
          />
        </div>
      </div>
    </div>
  )
}
