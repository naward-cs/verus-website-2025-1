// Project card component for displaying individual projects

import Link from "next/link"
import { ExternalLink } from "lucide-react"

export type ProjectCategory = "Dashboard" | "Technology" | "Wallet"

export interface ProjectCardProps {
  name: string
  description: string
  url: string
  category: ProjectCategory
}

export function ProjectCard({ name, description, url, category }: ProjectCardProps) {
  return (
    <div className="w-full md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-300 flex flex-col h-[280px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="relative flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white">
            {name}
          </h3>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100/50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap ml-2">
            {category}
          </span>
        </div>
        
        <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 line-clamp-4 overflow-hidden">
          {description}
        </p>
        
        <div className="mt-auto pt-4">
          <Link 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[40px] px-6 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit gap-2"
          >
            Visit Project
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
} 