"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { IoLogoDiscord, IoLogoGithub } from "react-icons/io5"
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

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Modified Link component that closes the menu on click
  const MenuLink = ({ href, children, className, ...props }: any) => (
    <Link 
      href={href} 
      className={className} 
      onClick={closeMenu}
      {...props}
    >
      {children}
    </Link>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative z-50 flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative w-5 h-5">
          <span 
            className={cn(
              "absolute left-0 top-1 h-[2px] w-5 bg-gray-600 dark:bg-gray-400 transition-all duration-300",
              isMobileMenuOpen ? "rotate-45 top-[9px]" : "rotate-0"
            )} 
          />
          <span 
            className={cn(
              "absolute left-0 h-[2px] w-5 bg-gray-600 dark:bg-gray-400 transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "opacity-100 top-[9px]"
            )} 
          />
          <span 
            className={cn(
              "absolute left-0 bottom-1 h-[2px] w-5 bg-gray-600 dark:bg-gray-400 transition-all duration-300",
              isMobileMenuOpen ? "-rotate-45 bottom-[9px]" : "rotate-0"
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
              <MenuLink href="/get-started" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Get Started</MenuLink>
              <MenuLink href="/wallet" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Wallet</MenuLink>
              <MenuLink href="/verusid" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">VerusID</MenuLink>
              <MenuLink href="/ethereum-bridge" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Ethereum Bridge</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Participate</h3>
            <div className="space-y-2">
              <MenuLink href="/mining" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Start Mining</MenuLink>
              <MenuLink href="/staking" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Start Staking</MenuLink>
              <MenuLink href="/get-vrsc/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Get VRSC</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Tools</h3>
            <div className="space-y-2">
              <MenuLink href="/#" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">VerusID Search</MenuLink>
              <MenuLink href="/verify" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Verify Signatures</MenuLink>
              <MenuLink href="https://insight.verus.io" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-verus-blue dark:hover:text-blue-400 transition-colors group">
                Explorer
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Build Section */}
          <MobileSection title="Build" isOpen={openSection === 'build'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Get Started</h3>
            <div className="space-y-2">
              <MenuLink href="/build" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Overview</MenuLink>
              <MenuLink href="/build/verusid/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">VerusID</MenuLink>
              <MenuLink href="/#" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Get Started</MenuLink>
              <MenuLink href="/migrate/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Migrate Your Community</MenuLink>
              <MenuLink href="/vs-evm/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Verus vs EVMs</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Solutions</h3>
            <div className="space-y-2">
              <MenuLink href="/build/pbaas-chains/" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Blockchains</MenuLink>
              <MenuLink href="/build/pbaas-currencies/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Currencies</MenuLink>
              <MenuLink href="/build/data/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Store & Retrieve Data</MenuLink>
              <MenuLink href="/build/defi-payments/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">DeFi & Payments</MenuLink>
              <MenuLink href="/build/marketplace/" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Marketplace</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Documentation</h3>
            <div className="space-y-2">
              <MenuLink href="https://docs.verus.io" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
              <MenuLink href="#" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                Integration Documentation
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
              <MenuLink href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                All API Commands
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Learn Section */}
          <MobileSection title="Learn" isOpen={openSection === 'learn'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">About</h3>
            <div className="space-y-2">
              <MenuLink href="/intro" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">What is Verus?</MenuLink>
              <MenuLink href="/milestones" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Milestones</MenuLink>
              <MenuLink href="/green" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Environmentally Friendly</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Resources</h3>
            <div className="space-y-2">
              <MenuLink href="/faq" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">FAQ</MenuLink>
              <MenuLink href="/papers" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Whitepapers</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Updates</h3>
            <div className="space-y-2">
              <MenuLink href="/#" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Network Statistics</MenuLink>
              <MenuLink href="https://medium.com/veruscoin" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                Blog
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
              </MenuLink>
            </div>
          </MobileSection>

          {/* Community Section */}
          <MobileSection title="Community" isOpen={openSection === 'community'} toggleSection={toggleSection}>
            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Explore</h3>
            <div className="space-y-2">
              <MenuLink href="/community" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Community Hub</MenuLink>
              <MenuLink href="/projects" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Community Projects</MenuLink>
              <MenuLink href="/people" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">People</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Get Involved</h3>
            <div className="space-y-2">
              {/* Bounties link temporarily hidden
              <MenuLink href="/#" className="block text-[15px] py-2 pt-4 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Bounties</MenuLink>
              */}
              <MenuLink href="/contribute" className="block text-[15px] py-2 text-gray-700 dark:text-gray-300 hover:text-verus-blue dark:hover:text-blue-400 transition-colors">Contribute</MenuLink>
            </div>

            <h3 className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase pt-8 pb-2 border-b border-gray-200 dark:border-gray-700">Social Media</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
              <MenuLink href="https://www.verus.io/discord" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                  <IoLogoDiscord className="h-4 w-4 text-[#5865F2]" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">Discord</span>
              </MenuLink>
              <MenuLink href="https://twitter.com/veruscoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                  <FaXTwitter className="h-4 w-4 text-black dark:text-white" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">X</span>
              </MenuLink>
              <MenuLink href="https://t.me/veruscoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#0088cc]/10 flex items-center justify-center">
                  <FaTelegram className="h-4 w-4 text-[#0088cc]" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">Telegram</span>
              </MenuLink>
              <MenuLink href="https://reddit.com/r/veruscoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#FF4500]/10 flex items-center justify-center">
                  <FaReddit className="h-4 w-4 text-[#FF4500]" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">Reddit</span>
              </MenuLink>
              <MenuLink href="https://facebook.com/veruscoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                  <FaFacebook className="h-4 w-4 text-[#1877F2]" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">Facebook</span>
              </MenuLink>
              <MenuLink href="https://youtube.com/@veruscoincommunity" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-verus-blue/10 group transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                  <FaYoutube className="h-4 w-4 text-[#FF0000]" />
                </div>
                <span className="text-[15px] text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">YouTube</span>
              </MenuLink>
            </div>
          </MobileSection>

          {/* Media - non-collapsable */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <div className="transition-colors duration-300 -mx-6 rounded-lg hover:bg-gray-50/70 dark:hover:bg-gray-800/30">
              <div className="px-6">
                <MenuLink 
                  href="/media" 
                  className="flex items-center justify-between w-full py-4 group"
                >
                  <span className="text-[15px] font-medium text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
                    Media
                  </span>
                </MenuLink>
              </div>
            </div>
          </div>

          {/* Donate - non-collapsable */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <div className="transition-colors duration-300 -mx-6 rounded-lg hover:bg-gray-50/70 dark:hover:bg-gray-800/30">
              <div className="px-6">
                <MenuLink 
                  href="/donate" 
                  className="flex items-center justify-between w-full py-4 group"
                >
                  <span className="text-[15px] font-medium text-gray-700 dark:text-gray-300 group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
                    Donate
                  </span>
                </MenuLink>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="pt-6 pb-4 flex justify-center gap-5">
            <MenuLink 
              href="https://twitter.com/veruscoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="h-5 w-5 text-black dark:text-white" />
            </MenuLink>
            
            <MenuLink 
              href="https://www.verus.io/discord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-colors"
              aria-label="Discord"
            >
              <IoLogoDiscord className="h-5 w-5 text-[#5865F2]" />
            </MenuLink>
            
            <MenuLink 
              href="https://github.com/VerusCoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800/10 dark:bg-gray-300/10 hover:bg-gray-800/20 dark:hover:bg-gray-300/20 transition-colors"
              aria-label="GitHub"
            >
              <IoLogoGithub className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            </MenuLink>
          </div>
        </nav>
      </div>
    </>
  )
} 