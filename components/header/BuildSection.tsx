"use client"

import { LuLayoutGrid, LuRocket, LuUsers, LuScale, LuNetwork, LuCoins, LuDatabase, LuArrowUpDown, LuStore } from "react-icons/lu"
import { ExternalLink } from "lucide-react"
import { NavLink } from "./NavLink"
import Link from "next/link"

export function BuildSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Get started</h3>
        <div className="space-y-4">
          <NavLink 
            href="/build" 
            icon={<LuLayoutGrid className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Overview"
            description="An overview of all building blocks"
          />
          <NavLink 
            href="/build/verusid/" 
            icon={<img 
              src="/img/at-full-black.svg" 
              alt="VerusID Icon" 
              className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] transition-all"
            />}
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
            href="/#" 
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
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Solutions</h3>
        <div className="space-y-4">
          <NavLink 
            href="/build/pbaas-chains/" 
            icon={<LuNetwork className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title={<span className="flex items-center gap-2">
              <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
              Blockchains
            </span>}
            description="Rent-free, interoperable & independent"
          />
          <NavLink 
            href="/build/pbaas-currencies/" 
            icon={<LuCoins className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title={<span className="flex items-center gap-2">
              <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
              Currencies
            </span>}
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
        <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Documentation</h3>
        <div className="space-y-2">
          <Link href="https://docs.verus.io" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link href="#" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
          <Link href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md" className="group flex items-start p-2 rounded-lg transition-colors [&>div>div]:hover:underline">
            <div>
              <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
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