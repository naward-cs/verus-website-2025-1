'use client'

import Link from 'next/link'

import {FaGithub} from 'react-icons/fa'
import {IoLogoDiscord} from 'react-icons/io5'

export function SocialIcons() {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <Link
        href="https://www.verus.io/discord"
        target="_blank"
        rel="noopener noreferrer"
        className="text-verus-blue opacity-50 transition-opacity hover:opacity-100 dark:text-white"
      >
        <IoLogoDiscord className="h-5 w-5" />
      </Link>
      <Link
        href="https://github.com/veruscoin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-verus-blue opacity-50 transition-opacity hover:opacity-100 dark:text-white"
      >
        <FaGithub className="h-5 w-5" />
      </Link>
    </div>
  )
}
