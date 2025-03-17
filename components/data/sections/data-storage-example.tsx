"use client"

import { Terminal, Database, Code } from "lucide-react"

/*
* Created:
* - Terminal example component showing how to store data in a VerusID/subID
* - Styled with modern gradient backgrounds and developer-focused design
* - Includes explanations of key parameters for data storage 
* - Matches the PBaaS style and other components on the page
*/
export function DataStorageExample() {
  return (
    <section className="mb-24 md:mt-32 relative">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Store Data With</span>{" "}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Simple Commands
              </span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-lg" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Add structured data to your VerusID with a single API call, creating a permanent on-chain data store.
        </p>
      </div>

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
            # Storing multiple data objects in a VerusID using contentmultimap
          </p>
          <p className="text-blue-400 mb-6">
            ./verus updateidentity '{'{'}
          </p>
          <div className="pl-4 mb-6">
            <p className="text-gray-300">
              <span className="text-pink-400">"name"</span>: <span className="text-yellow-300">"yourid"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"contentmultimap"</span>: {'{'}
            </p>
            <div className="pl-4">
              <p className="text-gray-300">
                <span className="text-yellow-300">"iMvTg2HGhKKGYMqtapvRyfZNahbzmD9R3b"</span>: [
              </p>
              <div className="pl-4">
                <p className="text-gray-300">{'{'}</p>
                <div className="pl-4">
                  <p className="text-gray-300">
                    <span className="text-yellow-300">"i4GC1YGEVD21afWudGoFJVdnfjJ5XWnCQv"</span>:{'{'}
                  </p>
                  <div className="pl-4">
                    <p className="text-gray-300">
                      <span className="text-pink-400">"version"</span>: <span className="text-yellow-300">1</span>,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"label"</span>: <span className="text-yellow-300">"i3esdByX2PKx5vJiuNrRb61KAKqsBEMxac"</span>,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"mimetype"</span>: <span className="text-yellow-300">"text/plain"</span>,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"objectdata"</span>: {'{'}
                    </p>
                    <div className="pl-4">
                      <p className="text-gray-300">
                        <span className="text-pink-400">"message"</span>: <span className="text-yellow-300">"Bookshop"</span>
                      </p>
                    </div>
                    <p className="text-gray-300">{"}"}</p>
                  </div>
                  <p className="text-gray-300">{'}'},</p>
                </div>
                <p className="text-gray-300">
                  {'}'}
                </p>
              </div>
              <div className="pl-0 text-gray-300">
                <p><span className="text-blue-300">// Additional data entries omitted for clarity</span></p>
              </div>
              <p className="text-gray-300">
                ]
              </p>
            </div>
            <p className="text-gray-300">
              {'}'}
            </p>
          </div>
          <p className="text-blue-400 mb-4">
            {'}'}'
          </p>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 mt-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">Data Structure</h4>
            <ul className="space-y-2">
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>contentmultimap</strong> - Maps namespaces to collections of data objects, enabling complex data structures
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>iMvTg...D9R3b</strong> - vdxfkey: myId.vrsc::shop
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>i4GC1...nCQv</strong> - This is a dataDescriptor key
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>label</strong> - vdxfkey: myId.vrsc::shop.type
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>objectdata</strong> - Contains the actual content being stored (any JSON structure)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-blue-100/80 dark:border-blue-900/30 mt-8 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-2xl"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">Example Use Case</h4>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              This example stores business location data in a structured format. The three entries contain:
            </p>
            <ul className="space-y-2">
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Business name ("Bookshop")
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Location address ("15 Sea View, Miami, 132523")
              </li>
              <li className="relative text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Property value ("$100,000")
              </li>
            </ul>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Each data point has its own label (vdxfkey) for easy access and querying, while being cryptographically tied to the parent VerusID.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 