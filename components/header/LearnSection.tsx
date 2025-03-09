"use client"

import { LuLightbulb, LuMilestone, LuMessageCircleQuestion, LuFileText, LuChartLine } from "react-icons/lu"
import { FaMedium } from "react-icons/fa"
import { ExternalLink } from "lucide-react"
import { NavLink } from "./NavLink"
import Link from "next/link"

export function LearnSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">About</h3>
        <div className="space-y-4">
          <NavLink 
            href="/intro" 
            icon={<LuLightbulb className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="What is Verus?"
            description="Vision, mission & technology"
          />
          <NavLink 
            href="/milestones" 
            icon={<LuMilestone className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Milestones"
            description="Track the journey"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Resources</h3>
        <div className="space-y-4">
          <NavLink 
            href="/faq" 
            icon={<LuMessageCircleQuestion className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="FAQ"
            description="Common questions answered"
          />
          <NavLink 
            href="/#" 
            icon={<LuFileText className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Whitepapers"
            description="Technical documentation"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Updates</h3>
        <div className="space-y-4">
          <NavLink 
            href="/#" 
            icon={<LuChartLine className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Network Statistics"
            description="Live network metrics and data"
          />
          <NavLink 
            href="https://medium.com/veruscoin" 
            icon={<FaMedium className="h-5 w-5 text-black" />}
            title="Blog"
            description="News and updates"
            isExternal={true}
          />
        </div>
      </div>
    </div>
  )
} 