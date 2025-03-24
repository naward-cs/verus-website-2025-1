"use client"

import { LuBookOpen, LuWallet, LuArrowLeftRight, LuCpu, LuPercent, LuBadgeCheck, LuGlobe } from "react-icons/lu"
import { Search, Coins } from "lucide-react" 
import { NavLink } from "./NavLink"

export function UseSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Get Started</h3>
        <div className="space-y-4">
          <NavLink 
            href="/get-started" 
            icon={<LuBookOpen className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Get Started"
            description="Information to help you on your way"
          />
          <NavLink 
            href="/wallet" 
            icon={<LuWallet className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Wallet"
            description="Connect securily to the Verus ecosystem"
          />
          <NavLink 
            href="/verusid" 
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
            description="Be self-sovereign"
          />
          <NavLink 
            href="/ethereum-bridge" 
            icon={<LuArrowLeftRight className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Ethereum Bridge"
            description="Transfer assets between Verus & Ethereum"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Participate</h3>
        <div className="space-y-4">
          <NavLink 
            href="/mining" 
            icon={<LuCpu className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Start Mining"
            description="Secure the network"
          />
          <NavLink 
            href="/staking" 
            icon={<LuPercent className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Start Staking"
            description="Stake VRSC on a full node"
          />
          <NavLink 
            href="/get-vrsc" 
            icon={<Coins className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Get VRSC"
            description="Get VRSC through various paths"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase border-b border-gray-200 dark:border-gray-700 pb-2">Tools</h3>
        <div className="space-y-4">
          <NavLink 
            href="/#" 
            icon={<Search className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="VerusID Search"
            description="Find VerusIDs"
          />
          <NavLink 
            href="/verify" 
            icon={<LuBadgeCheck className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Verify Signatures"
            description="Validate signed messages & files"
          />
          <NavLink 
            href="https://insight.verus.io" 
            icon={<LuGlobe className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />}
            title="Explorer"
            description="Explore the Verus blockchain"
            isExternal={true}
          />
        </div>
      </div>
    </div>
  )
} 