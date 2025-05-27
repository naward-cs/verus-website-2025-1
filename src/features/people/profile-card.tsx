// Profile card component for team members

import Link from 'next/link'

import {env} from '@/configs/env'
import {FaXTwitter} from 'react-icons/fa6'

export type ProfileCardProps = {
  name: string
  title: string
  description: string

  twitterHandle?: string
}

export function ProfileCard({
  name,
  title,
  description,

  twitterHandle,
}: ProfileCardProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative flex flex-1 flex-col">
        {/* Name and title */}
        <div className="mb-4">
          <h3 className="mb-2 text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            {name}
          </h3>
          <p className="text-[15px] text-verus-blue dark:text-blue-400 md:text-[17px]">
            {title}
          </p>
        </div>

        {/* Description */}
        <p className="mb-6 flex-grow text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
          {description}
        </p>

        {/* Twitter link */}
        {twitterHandle && (
          <Link
            href={`${env.NEXT_PUBLIC_TWITTER}/${twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto flex items-center text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <FaXTwitter className="mr-2 h-4 w-4" />
            <span className="text-[14px]">@{twitterHandle}</span>
          </Link>
        )}
      </div>
    </div>
  )
}
