"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function TestnetNotice() {
  return (
    <div className="mb-12 rounded-xl border border-blue-100/80 dark:border-blue-900/30 bg-gradient-to-r from-blue-50/50 to-white/50 dark:from-blue-950/50 dark:to-gray-900/50 backdrop-blur-sm p-6 relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
      
      <div className="relative flex items-start gap-4">
        <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <MessageCircle className="h-5 w-5" />
        </div>
        
        <div>
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">
            Need Testnet Coins?
          </h3>
          <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            To start developing on Verus testnet, you'll need some VRSCTEST coins. Join our Discord community and ask in the #pbaas-development channel - our community members will help you get started.
          </p>
          <Link 
            href="https://www.verus.io/discord"
            target="_blank"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Join Discord
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 