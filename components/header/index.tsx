"use client"

// This file provides the header component with navigation for the Verus website
// Last updated: Added theme toggle for dark/light mode

import { Logo } from "./Logo"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { SocialIcons } from "./SocialIcons"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[50px] md:h-[70px] w-full max-w-[1400px] items-center justify-between px-6 transition-all md:px-8">
        <div className="flex items-center">
          <Logo />
          <DesktopNav />
        </div>
        
        <div className="flex items-center">
          <SocialIcons />
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  )
} 