// Social media links and community resources for the Verus ecosystem
"use client"

import { useState, useEffect } from "react"
import { IoLogoDiscord } from "react-icons/io5"
import { FaXTwitter, FaTelegram, FaYoutube, FaFacebook, FaReddit, FaMedium } from "react-icons/fa6"
import { ChevronDown, ChevronUp, Globe2 } from "lucide-react"
import Link from "next/link"

// Define image paths for the vertical scrolling images (separated into left and right columns)
const leftColumnImages = Array.from({ length: 10 }, (_, i) => `/img/community/${i + 1}.png`)
const rightColumnImages = Array.from({ length: 9 }, (_, i) => `/img/community/${i + 11}.png`)

const communityPlatforms = [
  {
    name: "Discord",
    icon: <IoLogoDiscord className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://www.verus.io/discord",
    description: "Join the vibrant Discord community to chat with developers, ask questions, and stay up-to-date with the latest news.",
    primary: true
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://x.com/veruscoin",
    description: "Follow X for announcements, updates, and community highlights.",
    primary: false
  },
  {
    name: "Reddit",
    icon: <FaReddit className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://www.reddit.com/r/veruscoin/",
    description: "Join discussions, share ideas, and get involved with the community.",
    primary: false
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://www.youtube.com/c/veruscoincommunity",
    description: "Watch tutorials, developer updates, and recordings of community calls.",
    primary: false
  },
  {
    name: "Medium",
    icon: <FaMedium className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://medium.com/veruscoin",
    description: "Read in-depth articles about Verus technology, protocol updates, and ecosystem news.",
    primary: false
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="h-8 w-8 text-verus-blue dark:text-white" />,
    url: "https://www.facebook.com/VerusCoin",
    description: "Follow the Facebook page for community updates and events.",
    primary: false
  }
]

const telegramChannels = [
  { language: "Main (English)", flag: "🇬🇧", url: "https://t.me/veruscommunity" },
  { language: "Indonesian", flag: "🇮🇩", url: "https://t.me/IDVerusCommunity" },
  { language: "Italian", flag: "🇮🇹", url: "https://t.me/vrscitaly" }
]

export function CommunityLinks() {
  const [telegramExpanded, setTelegramExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Only try to animate after component has mounted on client
  if (!isMounted && typeof window !== 'undefined') {
    return <div className="w-full mb-16">Loading...</div>
  }
  
  return (
    <div className="w-full mb-16">
      {/* Hero Discord Section with Images - New Design */}
      <div className="mb-8 overflow-hidden relative rounded-3xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
        <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Left content side */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 relative z-10">
            <h2 className="text-[32px] md:text-[48px] text-gray-900 dark:text-white tracking-tight leading-[1.1] font-medium mb-4">
              Connect with the growing community.
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 tracking-tight mb-8 max-w-[500px]">
              Join developers, miners, stakers and blockchain enthusiasts building a decentralized future. It's also the best place to stay up-to-date with all protocol updates.
            </p>
            
            <Link 
              href="https://www.verus.io/discord" 
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-6 bg-blue-600 dark:bg-white/90 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-white backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium flex items-center justify-center transition-all duration-300 border border-blue-500 dark:border-white/60 hover:shadow-lg hover:-translate-y-[1px]"
            >
              <IoLogoDiscord className="h-5 w-5 mr-3" />
              Join Discord
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          {/* Right image grid side - desktop only - with smooth infinite scrolling */}
          <div className="hidden lg:block w-1/2 relative overflow-hidden h-[500px]">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
              {/* Left column - scrolling up with continuous scroll technique */}
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0">
                  <div className="scrolling-container-up h-auto inline-flex flex-col gap-3">
                    {/* Images for left column (1-10) */}
                    {[...leftColumnImages, ...leftColumnImages].map((src, index) => (
                      <div 
                        key={`img-left-${index}`} 
                        className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                      >
                        <img 
                          src={src} 
                          alt={`Community Image ${index % 10 + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column - scrolling down with continuous scroll technique */}
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0">
                  <div className="scrolling-container-down h-auto inline-flex flex-col gap-3">
                    {/* Images for right column (11-19) */}
                    {[...rightColumnImages, ...rightColumnImages].map((src, index) => (
                      <div 
                        key={`img-right-${index}`} 
                        className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                      >
                        <img 
                          src={src} 
                          alt={`Community Image ${index % 9 + 11}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Original Social Platform Cards - Without hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Telegram card with dropdown */}
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <FaTelegram className="h-8 w-8 text-verus-blue dark:text-white" />
              <h3 className="text-[18px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                Telegram
              </h3>
            </div>
            
            <p className="text-[15px] text-gray-600 dark:text-gray-300 mb-4">
              Join Telegram groups in various languages to connect with the global Verus community.
            </p>
            
            <div className="space-y-3">
              <Link 
                href={telegramChannels[0].url}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20"
              >
                <span className="text-xl mr-1">{telegramChannels[0].flag}</span>
                <span className="text-[14px] text-gray-700 dark:text-gray-300">{telegramChannels[0].language}</span>
              </Link>
              
              {telegramExpanded && (
                <div className="space-y-2 pt-2">
                  {telegramChannels.slice(1).map((channel, index) => (
                    <Link 
                      key={index}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-100/60 dark:border-blue-900/20"
                    >
                      <span className="text-xl mr-1">{channel.flag}</span>
                      <span className="text-[13px] text-gray-700 dark:text-gray-300">{channel.language}</span>
                    </Link>
                  ))}
                </div>
              )}
              
              <button 
                onClick={() => setTelegramExpanded(!telegramExpanded)}
                className="w-full flex items-center justify-center gap-1 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-100/60 dark:border-blue-900/20 text-[14px] text-verus-blue dark:text-white"
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
              
              <div className="mt-4 pt-4 border-t border-blue-100/40 dark:border-blue-900/20">
                <p className="text-[13px] text-gray-500 dark:text-gray-400 flex items-start gap-2">
                  <Globe2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Want to create a channel for your language? Let us know in the 
                    <Link href="https://www.verus.io/discord" target="_blank" rel="noopener noreferrer" className="text-verus-blue dark:text-blue-300 hover:underline mx-1">
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
        {communityPlatforms.filter(platform => platform.name !== "Discord").map((platform, index) => (
          <div 
            key={index}
            className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                {platform.icon}
                <h3 className="text-[18px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                  {platform.name}
                </h3>
              </div>
              
              <p className="text-[15px] text-gray-600 dark:text-gray-300 mb-5">
                {platform.description}
              </p>
              
              <Link 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-[40px] px-6 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-white flex items-center justify-center"
              >
                Visit {platform.name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 