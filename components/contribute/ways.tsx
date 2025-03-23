"use client"

import Link from "next/link"
import { IoLogoDiscord, IoLogoGithub } from "react-icons/io5"
import { DollarSign, Code, Users, FileText, Copy } from "lucide-react"
import { useState } from "react"

// Main ways to contribute to Verus
interface ContributionWay {
  title: string
  description: string
  icon: React.ReactNode
  examples: string[]
}

export function ContributionWays() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("Verus Coin Foundation@");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const contributionWays: ContributionWay[] = [
    {
      title: "Technical Contributions",
      description: "Help improve the code, documentation, and infrastructure.",
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      examples: [
        "Develop the core protocol or applications",
        "Test and report bugs",
        "Improve documentation",
        "Build tools and services"
      ]
    },
    {
      title: "Community Support",
      description: "Join discussions and help others learn about Verus.",
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      examples: [
        "Help new users get started",
        "Translate content",
        "Participate in community discussions",
        "Organize community events"
      ]
    },
    {
      title: "Financial Support",
      description: "Donate to help fund ongoing development and operations.",
      icon: <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      examples: [
        "Donate cryptocurrencies",
        "Sponsor specific projects",
        "Mine or stake to support the network",
        "Fund marketing initiatives"
      ]
    }
  ]
  
  return (
    <div className="px-4 md:px-0">
      {/* Simplified contribution ways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contributionWays.map((way, index) => (
          <div 
            key={index}
            className="border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-sm transition-shadow"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                {way.icon}
              </div>
              <h2 className="text-[18px] md:text-[20px] font-medium text-gray-900 dark:text-white">
                {way.title}
              </h2>
            </div>
            
            <p className="text-[15px] text-gray-600 dark:text-gray-300 mb-4">
              {way.description}
            </p>
            
            <div className="text-[14px] text-gray-600 dark:text-gray-300">
              For example:
              <ul className="mt-2 space-y-1">
                {way.examples.map((example, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Action buttons section */}
      <div className="mt-8 mb-12 md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h2 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white mb-4">
          Ready to contribute?
        </h2>
        <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
          Join the community to learn more about Verus and find your own way to contribute.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/donate" 
            className="group h-[40px] md:h-[50px] px-6 bg-blue-600 dark:bg-white/90 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-white backdrop-blur-sm rounded-none md:rounded-lg text-[14px] md:text-[16px] font-medium flex items-center justify-center transition-all duration-300 border border-blue-500 dark:border-white/60 hover:shadow-lg hover:-translate-y-[1px]"
          >
            <DollarSign className="h-5 w-5 mr-2" />
            <span>Donate to Verus</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link 
            href="https://www.verus.io/discord" 
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
          >
            <IoLogoDiscord className="h-5 w-5 mr-2" />
            <span>Join Discord Community</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link 
            href="https://github.com/VerusCoin" 
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
          >
            <IoLogoGithub className="h-5 w-5 mr-2" />
            <span>Explore GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Mining and VerusID section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Mining pool section */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
          <h2 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white mb-4">
            Mine with the Verus community pool:
          </h2>
          
          <div className="mt-4 flex items-center">
            <Link 
              href="https://pool.verus.io" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] md:text-[24px] text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              pool.verus.io
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* VerusID referral section */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
          <h2 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white mb-4">
            Use as referral when registering VerusID:
          </h2>
          
          <div className="mt-4 flex items-center">
            <div className="relative flex-grow">
              <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 pl-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-between">
                <span className="text-gray-800 dark:text-gray-200 text-[16px] md:text-[18px] font-medium">
                  Verus Coin Foundation@
                </span>
                <button 
                  onClick={handleCopy}
                  className="ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {copied ? (
                    <div className="text-green-600 dark:text-green-400 font-medium text-sm">Copied!</div>
                  ) : (
                    <Copy className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 