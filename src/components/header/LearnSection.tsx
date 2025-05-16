'use client'

import Link from 'next/link'

import {ExternalLink} from 'lucide-react'
import {FaMedium} from 'react-icons/fa'
import {
  LuChartLine,
  LuFileText,
  LuLeaf,
  LuLightbulb,
  LuMessageCircleQuestion,
  LuMilestone,
} from 'react-icons/lu'

import {NavLink} from './NavLink'

export function LearnSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          About
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/intro"
            icon={
              <LuLightbulb className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="What is Verus?"
            description="Vision, mission & technology"
          />
          <NavLink
            href="/milestones"
            icon={
              <LuMilestone className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Milestones"
            description="Track the journey"
          />
          <NavLink
            href="/green"
            icon={
              <LuLeaf className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Environmentally Friendly"
            description="Green, secure, and sustainable"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Resources
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/faq"
            icon={
              <LuMessageCircleQuestion className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="FAQ"
            description="Common questions answered"
          />
          <NavLink
            href="/papers"
            icon={
              <LuFileText className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Papers"
            description="Published papers & literature"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
          Updates
        </h3>
        <div className="space-y-4">
          <NavLink
            href="/statistics"
            icon={
              <LuChartLine className="h-5 w-5 text-gray-500 transition-colors group-hover:text-verus-blue" />
            }
            title="Network Statistics"
            description="Live network metrics and data"
          />
          <NavLink
            href="https://medium.com/veruscoin"
            icon={
              <FaMedium className="h-5 w-5 text-gray-700 transition-colors group-hover:text-verus-blue dark:text-gray-300" />
            }
            title="Blog"
            description="News and updates"
            isExternal={true}
          />
        </div>
      </div>
    </div>
  )
}
