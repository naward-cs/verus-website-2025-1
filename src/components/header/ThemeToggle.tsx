'use client'

import {useTheme} from '@/context/ThemeContext'
import {Moon, SunMoon} from 'lucide-react'

export function ThemeToggle() {
  const {isDark, toggleTheme} = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="ml-2 p-2 text-verus-blue opacity-50 transition-opacity hover:opacity-100 focus:outline-none dark:text-white"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <SunMoon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
