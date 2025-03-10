"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { IoLogoDiscord } from "react-icons/io5"
import { FaReddit, FaFacebook, FaTwitter } from "react-icons/fa"
import { FaXTwitter, FaYoutube, FaTelegram } from "react-icons/fa6"

type SectionProps = {
  title: string;
  isOpen: boolean;
  toggleSection: (section: string) => void;
  children: React.ReactNode;
}

// Component for expandable mobile navigation sections
function MobileSection({ title, isOpen, toggleSection, children }: SectionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen, children])

  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <div className={cn(
        "transition-colors duration-300 -mx-6 rounded-lg",
        isOpen ? "bg-blue-50/70 dark:bg-blue-950/30" : "hover:bg-gray-50/70 dark:hover:bg-gray-800/30"
      )}>
        <div className="px-6">
          <button
            onClick={() => toggleSection(title.toLowerCase())}
            className="flex items-center justify-between w-full py-4 group"
          >
            <span className="text-[15px] font-medium text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
              {title}
            </span>
            <div className={cn(
              "h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300",
              isOpen ? "bg-verus-blue" : "bg-gray-100 dark:bg-gray-700 group-hover:bg-verus-blue/20 dark:group-hover:bg-verus-blue/30"
            )}>
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform duration-300",
                isOpen ? "rotate-90 text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-verus-blue dark:group-hover:text-blue-400"
              )} />
            </div>
          </button>
        </div>
      </div>
      
      <div 
        style={{ 
          height: isOpen ? contentHeight : 0,
          overflow: 'hidden',
          transition: 'height 0.3s ease'
        }}
      >
        <div ref={contentRef} className="pb-6 pt-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative z-50 flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-verus-blue/10 dark:hover:bg-verus-blue/20 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative w-6 h-6">
          <span 
            className={cn(
              "absolute left-0 top-[11px] h-[2px] w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300",
              isMobileMenuOpen ? "rotate-45" : "rotate-0"
            )} 
          />
          <span 
            className={cn(
              "absolute left-0 top-[11px] h-[2px] w-6 bg-gray-800 dark:bg-gray-200 transition-all duration-300",
              isMobileMenuOpen ? "-rotate-45" : "rotate-0"
            )} 
          />
        </div>
      </button>

      {/* Mobile Menu with improved styling but no animations */}
      <div
        className={cn(
          "fixed inset-x-0 top-[50px] md:top-[70px] bottom-0 bg-white dark:bg-gray-950 shadow-2xl dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] md:hidden overflow-y-auto z-40 transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-50/20 dark:bg-blue-950/20 opacity-30" />
        <div className="absolute top-0 right-0 h-full w-[25%] bg-gradient-to-l from-verus-blue/5 to-transparent" />
        
        <nav className="p-6 relative">
          {/* Use Verus Section */}
          <MobileSection title="Use" isOpen={openSection === 'use'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Get Started</h3>
            <div className="space-y-2">
              <Link href="/get-started" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Get Started</Link>
              <Link href="/wallet" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Wallet</Link>
              <Link href="/verusid" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">VerusID</Link>
              <Link href="/ethereum-bridge" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Ethereum Bridge</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Participate</h3>
            <div className="space-y-2">
              <Link href="/mining" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Start Mining</Link>
              <Link href="/staking" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Start Staking</Link>
              <Link href="/exchanges" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Get VRSC</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Tools</h3>
            <div className="space-y-2">
              <Link href="/#" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">VerusID Search</Link>
              <Link href="/#" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Verify Signatures</Link>
              <Link href="https://insight.verus.io" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-verus-blue dark:hover:text-blue-400 transition-colors group">
                Explorer
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </Link>
            </div>
          </MobileSection>

          {/* Build Section */}
          <MobileSection title="Build" isOpen={openSection === 'build'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Get Started</h3>
            <div className="space-y-2">
              <Link href="/build/" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">Overview</Link>
              <Link href="/build/verusid/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">VerusID</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Get Started</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Migrate Your Community</Link>
              <Link href="/vs-evm/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Verus vs EVMs</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Solutions</h3>
            <div className="space-y-2">
              <Link href="/build/pbaas-chains/" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">Blockchains</Link>
              <Link href="/build/pbaas-currencies/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Currencies</Link>
              <Link href="/build/data/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Store & Retrieve Data</Link>
              <Link href="/build/defi-payments/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">DeFi & Payments</Link>
              <Link href="/build/marketplace/" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Marketplace</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Documentation</h3>
            <div className="space-y-2">
              <Link href="https://docs.verus.io" className="block text-[15px] py-2 flex items-center gap-2 hover:text-verus-blue transition-colors group">
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </Link>
              <Link href="#" className="block text-[15px] py-2 flex items-center gap-2 hover:text-verus-blue transition-colors group">
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </Link>
              <Link href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md" className="block text-[15px] py-2 flex items-center gap-2 hover:text-verus-blue transition-colors group">
                All API Commands
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </Link>
            </div>
          </MobileSection>

          {/* Learn Section */}
          <MobileSection title="Learn" isOpen={openSection === 'learn'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">About</h3>
            <div className="space-y-2">
              <Link href="/intro" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">What is Verus?</Link>
              <Link href="/milestones" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Milestones</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Resources</h3>
            <div className="space-y-2">
              <Link href="/faq" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">FAQ</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Whitepapers</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Updates</h3>
            <div className="space-y-2">
              <Link href="/#" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">Network Statistics</Link>
              <Link href="https://medium.com/veruscoin" className="block text-[15px] py-2 flex items-center gap-2 hover:text-verus-blue transition-colors group">
                Blog
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </Link>
            </div>
          </MobileSection>

          {/* Community Section */}
          <MobileSection title="Community" isOpen={openSection === 'community'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Explore</h3>
            <div className="space-y-2">
              <Link href="/#" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">Community Hub</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Community Projects</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">People</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Get Involved</h3>
            <div className="space-y-2">
              <Link href="/#" className="block text-[15px] py-2 pt-4 hover:text-verus-blue transition-colors">Bounties</Link>
              <Link href="/#" className="block text-[15px] py-2 hover:text-verus-blue transition-colors">Contribute</Link>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 uppercase pt-8 pb-2 border-b border-gray-200">Social Media</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
              <Link href="https://discord.gg/veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                  <IoLogoDiscord className="h-4 w-4 text-[#5865F2]" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">Discord</span>
              </Link>
              <Link href="https://twitter.com/veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                  <FaXTwitter className="h-4 w-4 text-black dark:text-white" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">X</span>
              </Link>
              <Link href="https://t.me/veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#0088cc]/10 flex items-center justify-center">
                  <FaTelegram className="h-4 w-4 text-[#0088cc]" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">Telegram</span>
              </Link>
              <Link href="https://reddit.com/r/veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#FF4500]/10 flex items-center justify-center">
                  <FaReddit className="h-4 w-4 text-[#FF4500]" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">Reddit</span>
              </Link>
              <Link href="https://facebook.com/veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                  <FaFacebook className="h-4 w-4 text-[#1877F2]" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">Facebook</span>
              </Link>
              <Link href="https://youtube.com/@veruscoin" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                  <FaYoutube className="h-4 w-4 text-[#FF0000]" />
                </div>
                <span className="text-[15px] group-hover:text-verus-blue transition-colors">YouTube</span>
              </Link>
            </div>
          </MobileSection>

          {/* Media & Donate Links */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Link href="/media" className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-50 hover:bg-verus-blue/10 transition-colors group">
              <span className="text-[15px] font-medium group-hover:text-verus-blue transition-colors">Media</span>
            </Link>
            <Link href="/donate" className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-verus-blue/10 hover:bg-verus-blue/20 transition-colors group">
              <span className="text-[15px] font-medium text-verus-blue">Donate</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
} 