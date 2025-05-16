"use client"

import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"

export function SocialIcons() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link href="https://www.verus.io/discord" target="_blank" rel="noopener noreferrer" className="text-verus-blue dark:text-white opacity-50 hover:opacity-100 transition-opacity">
        <IoLogoDiscord className="h-5 w-5" />
      </Link>
      <Link href="https://github.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-verus-blue dark:text-white opacity-50 hover:opacity-100 transition-opacity">
        <FaGithub className="h-5 w-5" />
      </Link>
    </div>
  )
} 