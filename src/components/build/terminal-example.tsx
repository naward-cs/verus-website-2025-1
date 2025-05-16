"use client"

import { Terminal } from "lucide-react"
import Link from "next/link"

export function TerminalExample() {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-xl p-6 md:p-8 shadow-lg border border-gray-800/80 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 text-gray-400 text-xs font-mono">Terminal - verus</div>
        </div>
        
        <div className="pt-8 font-mono text-[13px] md:text-[14px] leading-relaxed overflow-x-auto">
          <p className="text-green-400 mb-4">
            # Get help with Verus commands
          </p>
          <p className="text-blue-400 mb-2">
            ./verus help
          </p>
          <div className="text-gray-300 space-y-1">
            <p>== Addressindex ==</p>
            <p>getaddressbalance</p>
            <p>getaddressdeltas</p>
            <p>getaddressutxos</p>
            <p>getaddresstxids</p>
            <p>== Blockchain ==</p>
            <p>getbestblockhash</p>
            <p>getblock</p>
            <p>getblockchaininfo</p>
            <p>== Currencies ==</p>
            <p>definecurrency</p>
            <p>getcurrency</p>
            <p>listcurrencies</p>
            <p>sendcurrency</p>
            <p>== Identity ==</p>
            <p>getidentity</p>
            <p>registernamecommitment</p>
            <p>registeridentity</p>
            <p>updateidentity</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Terminal className="h-4 w-4" />
        </div>
        <Link 
          href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md"
          target="_blank"
          className="text-[14px] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          View full command documentation →
        </Link>
      </div>
    </div>
  )
} 