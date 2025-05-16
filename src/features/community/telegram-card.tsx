'use client'

import Link from 'next/link'
import {useState} from 'react'

import {env} from '@/configs/env'
import {ChevronDown, ChevronUp, Globe2} from 'lucide-react'

const telegramChannels = [
  {
    language: 'Main (English)',
    flag: '🇬🇧',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/veruscommunity`,
  },
  {
    language: 'Indonesian',
    flag: '🇮🇩',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/IDVerusCommunity`,
  },
  {
    language: 'Italian',
    flag: '🇮🇹',
    url: `${env.NEXT_PUBLIC_TELEGRAM}/vrscitaly`,
  },
]

export const TelegramCard = () => {
  const [telegramExpanded, setTelegramExpanded] = useState(false)
  return (
    <div className="space-y-3">
      <Link
        href={telegramChannels[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl border border-blue-100/60 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50"
      >
        <span className="mr-1 text-xl">{telegramChannels[0].flag}</span>
        <span className="text-[14px] text-gray-700 dark:text-gray-300">
          {telegramChannels[0].language}
        </span>
      </Link>

      {telegramExpanded && (
        <div className="space-y-2 pt-2">
          {telegramChannels.slice(1).map((channel, index) => (
            <Link
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-blue-100/60 bg-white/80 px-4 py-2 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50"
            >
              <span className="mr-1 text-xl">{channel.flag}</span>
              <span className="text-[13px] text-gray-700 dark:text-gray-300">
                {channel.language}
              </span>
            </Link>
          ))}
        </div>
      )}

      <button
        onClick={() => setTelegramExpanded(!telegramExpanded)}
        className="flex w-full items-center justify-center gap-1 rounded-xl border border-blue-100/60 bg-white/80 px-4 py-2 text-[14px] text-verus-blue backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50 dark:text-white"
      >
        {telegramExpanded ? (
          <>
            <span>Show Less</span>
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            <span>Show More Languages</span>
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>

      <div className="mt-4 border-t border-blue-100/40 pt-4 dark:border-blue-900/20">
        <p className="flex items-start gap-2 text-[13px] text-gray-500 dark:text-gray-400">
          <Globe2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>
            Want to create a channel for your language? Let us know in the
            <Link
              href={env.NEXT_PUBLIC_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-verus-blue hover:underline dark:text-blue-300"
            >
              #marketing
            </Link>
            channel on Discord.
          </span>
        </p>
      </div>
    </div>
  )
}
