"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe, ChevronDown, ExternalLink, Wallet, Grid as Bridge, Coins, Pickaxe, LineChart, Key, Search, FileCheck, Compass, Book, Users, ChevronRight } from "lucide-react"
import { FaGithub, FaMedium, FaReddit, FaFacebook, FaTelegram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"

import { LuBookOpen, LuWallet, LuArrowLeftRight, LuCpu, LuPercent, LuBadgeCheck, LuGlobe, LuLayoutGrid, LuRocket, LuUsers, LuNetwork, LuCoins, LuDatabase, LuArrowUpDown, LuStore, LuLightbulb, LuMilestone, LuMessageCircleQuestion, LuFileText, LuChartLine, LuMessagesSquare, LuBlocks, LuAward, LuHeart, LuScale } from "react-icons/lu";



import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto flex h-[50px] md:h-[70px] w-full max-w-[1400px] items-center justify-between px-6 transition-all md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="/img/verus-logo-blue.svg"
              alt="Verus Logo"
              width={120}
              height={32}
              className="h-6 md:h-8 w-auto"
            />
            <span className="text-[12px] md:text-[14px] italic text-verus-blue opacity-[.73]">
              Truth & Privacy for All
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-12">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {/* Use Verus */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline data-[state=open]:opacity-100">
                    Use
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="mx-auto max-w-[1400px] p-8">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Get Started</h3>
                          <div className="space-y-4">
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuBookOpen className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1">Get Started</div>
    <p className="text-sm text-gray-500">Information to help you on your way</p>
  </div>
</Link>


                            <Link href="/wallet" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                              <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuWallet className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Wallet</div>
                                <p className="text-sm text-gray-500">Connect securily to the Verus ecosystem</p>
                              </div>
                            </Link>
                            <Link href="/verusid" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <img 
      src="/img/at-full-black.svg" 
      alt="VerusID Icon" 
      className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] transition-all"
    />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1">VerusID</div>
    <p className="text-sm text-gray-500">Be self-sovereign</p>
  </div>
</Link>



                            <Link href="/ethereum-bridge" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                             <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuArrowLeftRight className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Ethereum Bridge</div>
                                <p className="text-sm text-gray-500">Transfer assets between Verus & Ethereum</p>
                              </div>
                            </Link>
                           
                            
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Participate</h3>
                          <div className="space-y-4">
                            <Link href="/mining" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                             <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuCpu className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Start Mining</div>
                                <p className="text-sm text-gray-500">Secure the network</p>
                              </div>
                            </Link>
                            <Link href="/staking" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuPercent className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Start Staking</div>
                                <p className="text-sm text-gray-500">Stake VRSC on a full node</p>
                              </div>
                            </Link>
                             <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <Coins className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Get VRSC</div>
                                <p className="text-sm text-gray-500">Get VRSC through various paths</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Tools</h3>
                          <div className="space-y-4">
                            <Link href="/#" className="group flex items-start pb-3 pt-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <Search className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">VerusID Search</div>
                                <p className="text-sm text-gray-500">Find VerusIDs</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuBadgeCheck className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Verify Signatures</div>
                                <p className="text-sm text-gray-500">Validate signed messages & files</p>
                              </div>
                            </Link>
<Link href="https://insight.verus.io" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
   <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuGlobe className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
      Explorer
      <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
    </div>
    <p className="text-sm text-gray-500">Explore the Verus blockchain</p>
  </div>
</Link>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

{/* Build with Verus */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline data-[state=open]:opacity-100">
                    Build
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="mx-auto max-w-[1400px] p-8">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Get started</h3>
                          <div className="space-y-4">
                            <Link href="/build" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuLayoutGrid className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Overview</div>
                                <p className="text-sm text-gray-500">An overview of all building blocks</p>
                              </div>
                            </Link>
                            <Link href="/build/verusid/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <img 
      src="/img/at-full-black.svg" 
      alt="VerusID Icon" 
      className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:[filter:invert(31%)_sepia(93%)_saturate(1352%)_hue-rotate(213deg)_brightness(97%)_contrast(87%)] transition-all"
    />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1">VerusID</div>
    <p className="text-sm text-gray-500">The root of everything</p>
  </div>
</Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuRocket className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Get Started</div>
                                <p className="text-sm text-gray-500">Developer information to get started</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuUsers className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Migrate Your Community</div>
                                <p className="text-sm text-gray-500">Join the Internet of Value</p>
                              </div>
                            </Link>
                            <Link href="/vs-evm/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuScale className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Verus vs EVMs</div>
                                <p className="text-sm text-gray-500">Beyond Virtual Machines</p>
                              </div>
                            </Link>
                            

                            
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Solutions</h3>
                          <div className="space-y-4">
                            <Link href="/build/pbaas-chains/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuNetwork className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
      <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
      Blockchains
    </div>
    <p className="text-sm text-gray-500">Rent-free, interoperable & independent</p>
  </div>
</Link>

                            <Link href="/build/pbaas-currencies/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuCoins className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
      <span className="text-[11px] font-medium bg-verus-blue/10 text-verus-blue px-1.5 py-0.5 rounded">PBaaS</span>
      Currencies
    </div>
    <p className="text-sm text-gray-500">Currencies, tokens & liquidity pools</p>
  </div>
</Link>
                            <Link href="/build/data/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuDatabase className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Store & Retrieve Data</div>
                                <p className="text-sm text-gray-500">Complete on-chain database</p>
                              </div>
                            </Link>
                            <Link href="/build/defi-payments/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuArrowUpDown className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">DeFi & Payments</div>
                                <p className="text-sm text-gray-500">Low fees & MEV-resistant</p>
                              </div>
                            </Link>
                            <Link href="/build/marketplace/" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuStore className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Marketplace</div>
                                <p className="text-sm text-gray-500">Peer-to-peer marketplace</p>
                              </div>
                            </Link>
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
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>



                

                {/* Learn */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline data-[state=open]:opacity-100">
                    Learn
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="mx-auto max-w-[1400px] p-8">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">About</h3>
                          <div className="space-y-4">
                            <Link href="/intro" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuLightbulb className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">What is Verus?</div>
                                <p className="text-sm text-gray-500">Vision, mission & technology</p>
                              </div>
                            </Link>
                            <Link href="/milestones" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuMilestone className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Milestones</div>
                                <p className="text-sm text-gray-500">Track the journey</p>
                              </div>
                            </Link>

                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Resources</h3>
                          <div className="space-y-4">
                            <Link href="/faq" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuMessageCircleQuestion className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">FAQ</div>
                                <p className="text-sm text-gray-500">Common questions answered</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuFileText className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Whitepapers</div>
                                <p className="text-sm text-gray-500">Technical documentation</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Updates</h3>
                          <div className="space-y-4">
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuChartLine className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Network Statistics</div>
                                <p className="text-sm text-gray-500">Live network metrics and data</p>
                              </div>
                            </Link>
                            <Link href="https://medium.com/veruscoin" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <FaMedium className="h-5 w-5 text-black" />
  </div>
  <div className="ml-3">
    <div className="text-[15px] font-[450] mb-1 flex items-center gap-2">
      Blog
      <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
    <p className="text-sm text-gray-500">News and updates</p>
  </div>
</Link>


                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Community */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline data-[state=open]:opacity-100">
                    Community
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="mx-auto max-w-[1400px] p-8">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Explore</h3>
                          <div className="space-y-4">
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuMessagesSquare className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Community Hub</div>
                                <p className="text-sm text-gray-500">Connect with the Verus community</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuBlocks className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Community Projects</div>
                                <p className="text-sm text-gray-500">Explore community-built projects</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuUsers className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">People</div>
                                <p className="text-sm text-gray-500">Meet the worldwide contributors</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Get Involved</h3>
                          <div className="space-y-4">
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuAward className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Bounties</div>
                                <p className="text-sm text-gray-500">Discover community bounties</p>
                              </div>
                            </Link>
                            <Link href="/#" className="group flex items-start pt-3 pb-3 rounded-lg transition-colors [&>div>div]:hover:underline">
                               <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-verus-blue/10 transition-colors">
    <LuHeart className="h-5 w-5 text-gray-500 group-hover:text-verus-blue transition-colors" />
  </div>
  <div className="ml-3">
                                <div className="text-[15px] font-[450] mb-1">Contribute</div>
                                <p className="text-sm text-gray-500">Help build the future of Verus</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-xs font-medium text-gray-500 uppercase border-b border-gray-200 pb-2">Social Media</h3>
                          <div className="space-y-2">
                            <Link href="https://discord.gg/veruscoin" className="group flex items-center hover:underline p-2">
                              <IoLogoDiscord className="h-5 w-5 text-[#5865F2] mr-2" />
                              <span className="text-[15px] font-[450]">Discord</span>
                            </Link>
                            <Link href="https://twitter.com/veruscoin" className="group flex items-center hover:underline p-2">
                              <FaXTwitter className="h-5 w-5 text-black mr-2" />
                              <span className="text-[15px] font-[450]">X.com</span>
                            </Link>
                            
                            <Link href="https://t.me/veruscoin" className="group flex items-center hover:underline p-2">
                              <FaTelegram className="h-5 w-5 text-[#0088cc] mr-2" />
                              <span className="text-[15px] font-[450]">Telegram</span>
                            </Link>
                            <Link href="https://reddit.com/r/veruscoin" className="group flex items-center hover:underline p-2">
                              <FaReddit className="h-5 w-5 text-[#FF4500] mr-2" />
                              <span className="text-[15px] font-[450]">Reddit</span>
                            </Link>
                            <Link href="https://facebook.com/veruscoin" className="group flex items-center hover:underline p-2">
                              <FaFacebook className="h-5 w-5 text-[#1877F2] mr-2" />
                              <span className="text-[15px] font-[450]">Facebook</span>
                            </Link>
                            <Link href="https://youtube.com/@veruscoin" className="group flex items-center hover:underline p-2">
                              <FaYoutube className="h-5 w-5 text-[#FF0000] mr-2" />
                              <span className="text-[15px] font-[450]">YouTube</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Media - Simple link */}
                <NavigationMenuItem>
                  <Link href="/#" className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline">
                    Media
                  </Link>
                </NavigationMenuItem>

                {/* Donate */}
                <NavigationMenuItem>
                  <Link href="/#" className="text-[15px] font-normal text-black opacity-75 hover:opacity-100 hover:underline">
                    Donate
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://discord.gg/veruscoin" className="text-verus-blue opacity-50 hover:opacity-100 transition-opacity">
            <IoLogoDiscord className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/veruscoin" className="text-verus-blue opacity-50 hover:opacity-100 transition-opacity">
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[50px] md:top-[70px] bottom-0 bg-white transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="p-6">
          {/* Use Verus Section */}
          <div className="border-b border-gray-200">
  <div className={cn(
    "-mx-6 transition-colors",
    openSection === 'use-verus' ? "bg-blue-50" : ""
  )}>
    <div className="px-6">
      <button
        onClick={() => toggleSection('use-verus')}
        className="flex items-center justify-between w-full py-4"
      >
        <span className="text-[15px]">Use</span>
        <ChevronRight className={cn(
          "h-5 w-5 transition-transform",
          openSection === 'use-verus' ? "rotate-90" : ""
        )} />
      </button>
    </div>
  </div>
            {openSection === 'use-verus' && (
              <div className="pb-4">
                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Get Started</h3>
                <div className="space-y-2">
                  <Link href="/#" className="block text-[15px] py-2 pt-4">Get Started</Link>
                  <Link href="/wallet" className="block text-[15px] py-2">Wallet</Link>
                  <Link href="/verusid" className="block text-[15px] py-2">VerusID</Link>
                  <Link href="/ethereum-bridge" className="block text-[15px] py-2">Ethereum Bridge</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Participate</h3>
                <div className="space-y-2">
                  <Link href="/mining" className="block text-[15px] py-2 pt-4">Start Mining</Link>
                  <Link href="/staking" className="block text-[15px] py-2">Start Staking</Link>
                  <Link href="/#" className="block text-[15px] py-2">Get VRSC</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Tools</h3>
                <div className="space-y-2">
                  <Link href="/#" className="block text-[15px] py-2 pt-4">VerusID Search</Link>
                  <Link href="/#" className="block text-[15px] py-2">Verify Signatures</Link>
                  <Link href="https://insight.verus.io" className="block text-[15px] py-2 flex items-center gap-2">
  Explorer
  <ExternalLink className="h-4 w-4 opacity-50" />
</Link>


                </div>
              </div>
            )}
          </div>

                    {/* Build Section */}
          <div className="border-b border-gray-200">
  <div className={cn(
    "-mx-6 transition-colors",
    openSection === 'build' ? "bg-blue-50" : ""
  )}>
    <div className="px-6">
      <button
        onClick={() => toggleSection('build')}
        className="flex items-center justify-between w-full py-4"
      >
        <span className="text-[15px]">Build</span>
        <ChevronRight className={cn(
          "h-5 w-5 transition-transform",
          openSection === 'build' ? "rotate-90" : ""
        )} />
      </button>
    </div>
  </div>
            {openSection === 'build' && (
              <div className="pb-4">
                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Get Started</h3>
                <div className="space-y-2">
                  <Link href="/build/" className="block text-[15px] py-2 pt-4">Overview</Link>
                  <Link href="/build/verusid/" className="block text-[15px] py-2">VerusID</Link>
                  <Link href="/#" className="block text-[15px] py-2">Get Started</Link>
                  <Link href="/#" className="block text-[15px] py-2">Migrate Your Community</Link>
                  <Link href="/vs-evm" className="block text-[15px] py-2">Verus vs EVMs</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Solutions</h3>
                <div className="space-y-2">
                  <Link href="/build/pbaas-chains/" className="block text-[15px] py-2 pt-4">Blockchains</Link>
                  <Link href="/build/pbaas-currencies/" className="block text-[15px] py-2">Currencies</Link>
                  <Link href="/build/data/" className="block text-[15px] py-2">Store & Retrieve Data</Link>
                  <Link href="/build/defi-payments/" className="block text-[15px] py-2">DeFi & Payments</Link>
                  <Link href="/build/marketplace/" className="block text-[15px] py-2">Marketplace</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Tools</h3>
                <div className="space-y-2">

                  <Link href="https://insight.verus.io" className="block text-[15px] py-2 flex items-center gap-2">
  Documentation
  <ExternalLink className="h-4 w-4 opacity-50" />
</Link>
                   <Link href="https://insight.verus.io" className="block text-[15px] py-2 flex items-center gap-2">
  Integration Documentation
  <ExternalLink className="h-4 w-4 opacity-50" />
</Link>
                   <Link href="https://insight.verus.io" className="block text-[15px] py-2 flex items-center gap-2">
  All API Commands
  <ExternalLink className="h-4 w-4 opacity-50" />
</Link>


                </div>
              </div>
            )}
          </div>

          {/* Learn Section */}
          <div className="border-b border-gray-200">
  <div className={cn(
    "-mx-6 transition-colors",
    openSection === 'learn' ? "bg-blue-50" : ""
  )}>
    <div className="px-6">
      <button
        onClick={() => toggleSection('learn')}
        className="flex items-center justify-between w-full py-4"
      >
        <span className="text-[15px]">Learn</span>
        <ChevronRight className={cn(
          "h-5 w-5 transition-transform",
          openSection === 'learn' ? "rotate-90" : ""
        )} />
      </button>
    </div>
  </div>
            {openSection === 'learn' && (
              <div className="pb-4">
                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">About</h3>
                <div className="space-y-2">
                  <Link href="/intro" className="block text-[15px] py-2 pt-4">What is Verus?</Link>
                  <Link href="/milestones" className="block text-[15px] py-2">Milestones</Link>

                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Resources</h3>
                <div className="space-y-2">
                  <Link href="/faq" className="block text-[15px] py-2 pt-4">FAQ</Link>
                  <Link href="/whitepapers" className="block text-[15px] py-2">Whitepapers</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Updates</h3>
                <div className="space-y-2">
                  <Link href="/stats" className="block text-[15px] py-2 pt-4">Network Statistics</Link>
                  <Link href="https://medium.com/veruscoin" className="block text-[15px] py-2">Blog</Link>
                </div>
              </div>
            )}
          </div>

          {/* Community Section */}
          <div className="border-b border-gray-200">
  <div className={cn(
    "-mx-6 transition-colors",
    openSection === 'community' ? "bg-blue-50" : ""
  )}>
    <div className="px-6">
      <button
        onClick={() => toggleSection('community')}
        className="flex items-center justify-between w-full py-4"
      >
        <span className="text-[15px]">Community</span>
        <ChevronRight className={cn(
          "h-5 w-5 transition-transform",
          openSection === 'community' ? "rotate-90" : ""
        )} />
      </button>
    </div>
  </div>
            {openSection === 'community' && (
              <div className="pb-4">
                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Explore</h3>
                <div className="space-y-2">
                  <Link href="/community" className="block text-[15px] py-2 pt-4">Community Hub</Link>
                  <Link href="/community-projects" className="block text-[15px] py-2">Community Projects</Link>
                  <Link href="/people" className="block text-[15px] py-2">People</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Get Involved</h3>
                <div className="space-y-2">
                  <Link href="/bounties" className="block text-[15px] py-2 pt-4">Bounties</Link>
                  <Link href="/contribute" className="block text-[15px] py-2">Contribute</Link>
                </div>

                <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Social Media</h3>
                <div className="space-y-2">
                  <Link href="https://discord.gg/veruscoin" className="flex items-center gap-2 py-2">
                    <IoLogoDiscord className="h-5 w-5 text-[#5865F2]" />
                    <span className="text-[15px]">Discord</span>
                  </Link>
                  <Link href="https://twitter.com/veruscoin" className="flex items-center gap-2 py-2 pt-4">
                    <FaXTwitter className="h-5 w-5" />
                    <span className="text-[15px]">X</span>
                  </Link>
                  
                  <Link href="https://t.me/veruscoin" className="flex items-center gap-2 py-2">
                    <FaTelegram className="h-5 w-5 text-[#0088cc]" />
                    <span className="text-[15px]">Telegram</span>
                  </Link>
                  <Link href="https://reddit.com/r/veruscoin" className="flex items-center gap-2 py-2">
                    <FaReddit className="h-5 w-5 text-[#FF4500]" />
                    <span className="text-[15px]">Reddit</span>
                  </Link>
                  <Link href="https://facebook.com/veruscoin" className="flex items-center gap-2 py-2">
                    <FaFacebook className="h-5 w-5 text-[#1877F2]" />
                    <span className="text-[15px]">Facebook</span>
                  </Link> 
                  <Link href="https://youtube.com/@veruscoin" className="flex items-center gap-2 py-2">
                    <FaYoutube className="h-5 w-5 text-[#FF0000]" />
                    <span className="text-[15px]">YouTube</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Media Link */}
          <Link href="/media" className="block text-[15px] py-4 border-b border-gray-200">
            Media
          </Link>

          {/* Donate Link */}
          <Link href="/donate" className="block text-[15px] py-4 border-b border-gray-200">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}