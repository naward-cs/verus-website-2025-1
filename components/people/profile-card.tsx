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
    <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="relative flex-1 flex flex-col">
        {/* Name and title */}
        <div className="mb-4">
          <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <p className="text-[15px] md:text-[17px] text-verus-blue dark:text-blue-400">
            {title}
          </p>
        </div>
        
        {/* Description */}
        <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
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
            <span className="text-[14px]">@{twitterHandle}</span>
          </Link>
        )}
      </div>
    </div>
  )
} 