"use client"

import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 md:gap-3">
      <div className="relative">
        <Image
          src="/img/verus-logo-blue.svg"
          alt="Verus Logo"
          width={120}
          height={32}
          className="h-6 md:h-8 w-auto dark:hidden"
        />
        <Image
          src="/img/verus-logo-white.svg"
          alt="Verus Logo"
          width={120}
          height={32}
          className="h-6 md:h-8 w-auto hidden dark:block"
        />
      </div>
      <span className="text-[12px] md:text-[14px] italic text-verus-blue dark:text-white/80 opacity-[.73]">
        Truth & Privacy for All
      </span>
    </Link>
  )
} 