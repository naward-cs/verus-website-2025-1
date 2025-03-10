"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

type NavMenuItemProps = {
  title: string;
  href?: string;
  children?: ReactNode;
}

export function NavMenuItem({ title, href, children }: NavMenuItemProps) {
  // If there's no children, render a simple link
  if (!children && href) {
    return (
      <NavigationMenuItem>
        <Link href={href} className="text-[15px] font-normal text-black dark:text-white opacity-75 hover:opacity-100 hover:underline">
          {title}
        </Link>
      </NavigationMenuItem>
    )
  }

  // Otherwise, render a dropdown menu
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-[15px] font-normal text-black dark:text-white opacity-75 hover:opacity-100 hover:underline data-[state=open]:opacity-100">
        {title}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mx-auto max-w-[1400px] p-8">
          {children}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
} 