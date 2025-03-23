"use client"

import { LuLayoutGrid, LuRocket, LuUsers, LuScale, LuNetwork, LuCoins, LuDatabase, LuArrowUpDown, LuStore } from "react-icons/lu"
import { ExternalLink, MessageCircleQuestion } from "lucide-react"
import { NavLink } from "./NavLink"
import Link from "next/link"
import { IoLogoDiscord } from "react-icons/io5"

// Custom component for PBaaS links
function PBaaSLink({ 
  href, 
  icon, 
  label, 
  title, 
  description 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  title: string; 
  description: string; 
}) {
  return (
    <Link 
      href={href}
      className="group flex items-start pt-3 pb-3 rounded-lg transition-colors" 
    >
      <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-verus-blue/10 dark:group-hover:bg-verus-blue/20 transition-colors">
        {icon}
      </div>
      <div className="ml-3">
        <div className="text-[15px] font-[450] text-gray-800 dark:text-white mb-1 flex items-center gap-2">
          <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">
            {label}
          </span>
          <span className="group-hover:underline">{title}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  )
}

export function BuildSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Get started</h3>
        <div className="space-y-4">
          <NavLink 
            href="/build" 
            icon={<LuLayoutGrid className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Overview"
            description="An overview of all building blocks"
          />
          <NavLink 
            href="/build/verusid/" 
            icon={<div className="relative">
              <img 
                src="/img/at-full-black.svg" 
                alt="VerusID Icon" 
                className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] transition-all dark:hidden"
              />
              <img 
                src="/img/at-full-black.svg" 
                alt="VerusID Icon" 
                className="h-5 w-5 hidden dark:block opacity-50 group-hover:opacity-100 [filter:invert(100%)] group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] transition-all"
              />
            </div>}
            title="VerusID"
            description="The root of everything"
          />
          <NavLink 
            href="/#" 
            icon={<LuRocket className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Get Started"
            description="Developer information to get started"
          />
          <NavLink 
            href="/migrate" 
            icon={<LuUsers className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Migrate Your Community"
            description="Join the Internet of Value"
          />
          <NavLink 
            href="/vs-evm/" 
            icon={<LuScale className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Verus vs EVMs"
            description="Beyond Virtual Machines"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Solutions</h3>
        <div className="space-y-4">
          {/* Use custom PBaaS Link component */}
          <PBaaSLink 
            href="/build/pbaas-chains/" 
            icon={<LuNetwork className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            label="PBaaS"
            title="Blockchains"
            description="Rent-free, interoperable & independent"
          />
          <PBaaSLink 
            href="/build/pbaas-currencies/" 
            icon={<LuCoins className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            label="PBaaS"
            title="Currencies"
            description="Currencies, tokens & liquidity pools"
          />
          <NavLink 
            href="/build/data/" 
            icon={<LuDatabase className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Store & Retrieve Data"
            description="Complete on-chain database"
          />
          <NavLink 
            href="/build/defi-payments/" 
            icon={<LuArrowUpDown className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="DeFi & Payments"
            description="Low fees & MEV-resistant"
          />
          <NavLink 
            href="/build/marketplace/" 
            icon={<LuStore className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Marketplace"
            description="Peer-to-peer marketplace"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Documentation</h3>
        <div className="space-y-2">
          <Link href="https://docs.verus.io" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] text-gray-800 dark:text-white mb-1 flex items-center gap-2">
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link href="#" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] text-gray-800 dark:text-white mb-1 flex items-center gap-2">
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] text-gray-800 dark:text-white mb-1 flex items-center gap-2">
                All API Commands
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          
          {/* Discord Help Section */}
          <Link 
            href="https://www.verus.io/discord" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group mt-8 block rounded-lg bg-gradient-to-br from-[#5865F2] to-[#404EED] p-5 transition-all hover:shadow-lg hover:shadow-[#5865F2]/20"
          >
            <div className="flex items-center">
              <IoLogoDiscord className="h-9 w-9 text-white" />
              <div className="ml-4">
                <div className="text-[17px] font-medium text-white">
                  Need help building with Verus?
                </div>
                <p className="text-[14px] text-white/90 mt-1 font-light">
                  Join the Discord for developer support
                </p>
              </div>
            </div>
            <div className="mt-3 bg-white/10 backdrop-blur-sm rounded-md py-2 px-3 text-white/90 text-[13px] flex items-center justify-between group-hover:bg-white/20 transition-colors">
              <span>Ask questions, share ideas, collaborate</span>
              <span className="flex items-center text-white/80 group-hover:text-white transition-colors">
                Join now 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 