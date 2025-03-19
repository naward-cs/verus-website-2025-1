"use client"

import { LuLayoutGrid, LuRocket, LuUsers, LuScale, LuNetwork, LuCoins, LuDatabase, LuArrowUpDown, LuStore } from "react-icons/lu"
import { ExternalLink } from "lucide-react"
import { NavLink } from "./NavLink"
import Link from "next/link"

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
        </div>
      </div>
    </div>
  )
} 