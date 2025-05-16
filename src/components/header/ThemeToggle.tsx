"use client"

import { useTheme } from "@/context/ThemeContext"
import { SunMoon, Moon } from "lucide-react"

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="ml-2 p-2 text-verus-blue dark:text-white opacity-50 hover:opacity-100 transition-opacity focus:outline-none"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <SunMoon className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
} 