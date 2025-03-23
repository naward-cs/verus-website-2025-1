"use client"

import { LuMessagesSquare, LuBlocks, LuUsers, LuAward, LuHeart } from "react-icons/lu"
import { IoLogoDiscord } from "react-icons/io5"
import { FaXTwitter, FaReddit, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa6"
import { NavLink } from "./NavLink"
import Link from "next/link"

export function CommunitySection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Explore</h3>
        <div className="space-y-4">
          <NavLink 
            href="/community" 
            icon={<LuMessagesSquare className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Community Hub"
            description="Connect with the Verus community"
          />
          <NavLink 
            href="/projects" 
            icon={<LuBlocks className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Community Projects"
            description="Explore community-built projects"
          />
          <NavLink 
            href="/people" 
            icon={<LuUsers className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="People"
            description="Meet the worldwide contributors"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Get Involved</h3>
        <div className="space-y-4">
          {/* Bounties link temporarily hidden
          <NavLink 
            href="/#" 
            icon={<LuAward className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Bounties"
            description="Discover community bounties"
          />
          */}
          <NavLink 
            href="/contribute" 
            icon={<LuHeart className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Contribute"
            description="Help build the future of Verus"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Social Media</h3>
        <div className="space-y-2">
          <Link href="https://www.verus.io/discord" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <IoLogoDiscord className="h-5 w-5 text-[#5865F2] mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">Discord</span>
          </Link>
          <Link href="https://twitter.com/veruscoin" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-5 w-5 text-black dark:text-white mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">X.com</span>
          </Link>
          <Link href="https://t.me/veruscoin" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="h-5 w-5 text-[#0088cc] mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">Telegram</span>
          </Link>
          <Link href="https://reddit.com/r/veruscoin" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <FaReddit className="h-5 w-5 text-[#FF4500] mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">Reddit</span>
          </Link>
          <Link href="https://facebook.com/veruscoin" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-5 w-5 text-[#1877F2] mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">Facebook</span>
          </Link>
          <Link href="https://youtube.com/@veruscoincommunity" className="group flex items-center p-2" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="h-5 w-5 text-[#FF0000] mr-2" />
            <span className="text-[15px] font-[450] text-gray-800 dark:text-white group-hover:underline">YouTube</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 