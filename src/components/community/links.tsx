// Social media links and community resources for the Verus ecosystem
'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'

import {ChevronDown, ChevronUp, Globe2} from 'lucide-react'
import {
  FaFacebook,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import {IoLogoDiscord} from 'react-icons/io5'

// Define image paths for the vertical scrolling images (separated into left and right columns)
const leftColumnImages = Array.from(
  {length: 10},
  (_, i) => `/img/community/${i + 1}.webp`
)
const rightColumnImages = Array.from(
  {length: 9},
  (_, i) => `/img/community/${i + 11}.webp`
)

const communityPlatforms = [
  {
    name: 'Discord',
    icon: <IoLogoDiscord className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://www.verus.io/discord',
    description:
      'Join the vibrant Discord community to chat with developers, ask questions, and stay up-to-date with the latest news.',
    primary: true,
  },
  {
    name: 'X (Twitter)',
    icon: <FaXTwitter className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://x.com/veruscoin',
    description:
      'Follow X for announcements, updates, and community highlights.',
    primary: false,
  },
  {
    name: 'Reddit',
    icon: <FaReddit className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://www.reddit.com/r/veruscoin/',
    description:
      'Join discussions, share ideas, and get involved with the community.',
    primary: false,
  },
  {
    name: 'YouTube',
    icon: <FaYoutube className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://www.youtube.com/c/veruscoincommunity',
    description:
      'Watch tutorials, developer updates, and recordings of community calls.',
    primary: false,
  },
  {
    name: 'Medium',
    icon: <FaMedium className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://medium.com/veruscoin',
    description:
      'Read in-depth articles about Verus technology, protocol updates, and ecosystem news.',
    primary: false,
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: 'https://www.facebook.com/VerusCoin',
    description: 'Follow the Facebook page for community updates and events.',
    primary: false,
  },
]

const telegramChannels = [
  {language: 'Main (English)', flag: '🇬🇧', url: 'https://t.me/veruscommunity'},
  {language: 'Indonesian', flag: '🇮🇩', url: 'https://t.me/IDVerusCommunity'},
  {language: 'Italian', flag: '🇮🇹', url: 'https://t.me/vrscitaly'},
]

export function CommunityLinks() {
  const [telegramExpanded, setTelegramExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Safari animation fix - force animation recognition after mount
    setTimeout(() => {
      const containers = document.querySelectorAll(
        '.scrolling-container-up, .scrolling-container-down'
      )
      containers.forEach((container) => {
        // Force a reflow by reading a layout property and making a tiny style change
        const _ = container.getBoundingClientRect()
        // Cast to HTMLElement to access style property
        ;(container as HTMLElement).style.transform = 'translateZ(0)'
      })
    }, 50)
  }, [])

  // Only try to animate after component has mounted on client
  if (!isMounted && typeof window !== 'undefined') {
    return <div className="mb-16 w-full">Loading...</div>
  }

  return (
    <div className="mb-16 w-full">
      {/* Hero Discord Section with Images - New Design */}
      <div className="relative mb-8 overflow-hidden rounded-3xl border border-blue-100/80 bg-white/70 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
        {/* Decorative elements */}
        <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
        <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

        <div className="flex flex-col lg:flex-row">
          {/* Left content side */}
          <div className="relative z-10 w-full p-8 md:p-12 lg:w-1/2 lg:p-16">
            <h2 className="mb-4 text-[32px] font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-[48px]">
              Connect with the growing community.
            </h2>
            <p className="mb-8 max-w-[500px] text-[16px] tracking-tight text-gray-600 dark:text-gray-300 md:text-[18px]">
              Join developers, builders, entrepreneurs, miners, stakers and
              blockchain enthusiasts building a decentralized future. It's also
              the best place to stay up-to-date with all protocol updates.
            </p>

            <Link
              href="https://www.verus.io/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:text-[16px]"
            >
              <IoLogoDiscord className="mr-3 h-5 w-5" />
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

          {/* Right image grid side - desktop only - with smooth infinite scrolling */}
          <div className="relative hidden h-[500px] w-1/2 overflow-hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
              {/* Left column - scrolling up with continuous scroll technique */}
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0">
                  <div className="scrolling-container-up inline-flex h-auto flex-col gap-3">
                    {/* Images for left column (1-10) */}
                    {[...leftColumnImages, ...leftColumnImages].map(
                      (src, index) => (
                        <div
                          key={`img-left-${index}`}
                          className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                        >
                          <img
                            src={src}
                            alt={`Community Image ${(index % 10) + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right column - scrolling down with continuous scroll technique */}
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0">
                  <div className="scrolling-container-down inline-flex h-auto flex-col gap-3">
                    {/* Images for right column (11-19) */}
                    {[...rightColumnImages, ...rightColumnImages].map(
                      (src, index) => (
                        <div
                          key={`img-right-${index}`}
                          className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                        >
                          <img
                            src={src}
                            alt={`Community Image ${(index % 9) + 11}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Social Platform Cards - Without hover effects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Telegram card with dropdown */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-4">
              <FaTelegram className="h-8 w-8 text-verus-blue dark:text-white" />
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
                Telegram
              </h3>
            </div>

            <p className="mb-4 text-[15px] text-gray-600 dark:text-gray-300">
              Join Telegram groups in various languages to connect with the
              global Verus community.
            </p>

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
                    Want to create a channel for your language? Let us know in
                    the
                    <Link
                      href="https://www.verus.io/discord"
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
          </div>
        </div>

        {/* Other social platforms */}
        {communityPlatforms
          .filter((platform) => platform.name !== 'Discord')
          .map((platform, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-4">
                  {platform.icon}
                  <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
                    {platform.name}
                  </h3>
                </div>

                <p className="mb-5 text-[15px] text-gray-600 dark:text-gray-300">
                  {platform.description}
                </p>

                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[40px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-white"
                >
                  Visit {platform.name}
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
          ))}
      </div>
    </div>
  )
}
