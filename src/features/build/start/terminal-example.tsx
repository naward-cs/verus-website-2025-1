import Link from 'next/link'

import {Terminal} from 'lucide-react'

export function TerminalExample() {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden rounded-xl border border-gray-800/80 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-lg md:p-8">
        <div className="absolute left-0 right-0 top-0 flex h-10 items-center bg-gradient-to-r from-gray-800 to-gray-900 px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 font-mono text-xs text-gray-400">
            Terminal - verus
          </div>
        </div>

        <div className="overflow-x-auto pt-8 font-mono text-[13px] leading-relaxed md:text-[14px]">
          <p className="mb-4 text-green-400"># Get help with Verus commands</p>
          <p className="mb-2 text-blue-400">./verus help</p>
          <div className="space-y-1 text-gray-300">
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
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
          <Terminal className="h-4 w-4" />
        </div>
        <Link
          href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md"
          target="_blank"
          className="text-[14px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View full command documentation →
        </Link>
      </div>
    </div>
  )
}
