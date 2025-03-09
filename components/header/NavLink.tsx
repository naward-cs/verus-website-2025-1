"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { ExternalLink } from "lucide-react"

type NavLinkProps = {
  href: string
  icon: ReactNode
  title: ReactNode
  description?: string
  isExternal?: boolean
}

export function NavLink({ href, icon, title, description, isExternal }: NavLinkProps) {
  return (
    <Link href={href} className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline" target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
      <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
        {icon}
      </div>
      <div className="ml-3">
        <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
          {title}
          {isExternal && <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />}
        </div>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </Link>
  )
} 