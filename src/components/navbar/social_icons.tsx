import Link from 'next/link';



import {env} from '@/configs/env'
import {FaGithub} from 'react-icons/fa'
import {IoLogoDiscord} from 'react-icons/io5'

export function SocialIcons() {
  return (
    <div className="ml-2 hidden items-center gap-4 md:flex">
      <Link
        href={env.NEXT_PUBLIC_DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="text-verus-blue opacity-50 transition-opacity hover:opacity-100 dark:text-white"
      >
        <IoLogoDiscord className="size-5" />
      </Link>
      <Link
        href={env.NEXT_PUBLIC_VERUS_GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="text-verus-blue opacity-50 transition-opacity hover:opacity-100 dark:text-white"
      >
        <FaGithub className="size-5" />
      </Link>
    </div>
  )
}