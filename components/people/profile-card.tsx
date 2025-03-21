// Profile card component for team members
"use client"

import Image from "next/image"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"

export type ProfileCardProps = {
  name: string
  title: string
  description: string
  imageUrl?: string
  twitterHandle?: string
}

export function ProfileCard({ name, title, description, imageUrl, twitterHandle }: ProfileCardProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="relative">
        <div className="flex flex-col items-start">
          {/* Profile image */}
          {imageUrl && (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30 mb-4">
              <Image 
                src={imageUrl} 
                alt={`${name} profile picture`} 
                width={80} 
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Name and title */}
          <div className="mb-2">
            <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-[14px] md:text-[16px] text-verus-blue dark:text-blue-400">
              {title}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          
          {/* Twitter link */}
          {twitterHandle && (
            <Link 
              href={`https://x.com/${twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors mt-auto"
            >
              <FaXTwitter className="h-4 w-4 mr-2" />
              <span className="text-[13px]">@{twitterHandle}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 