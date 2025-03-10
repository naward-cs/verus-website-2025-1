"use client"

import { IoLogoDiscord } from "react-icons/io5"
import { FaGithub, FaMedium, FaReddit, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="-mx-4 md:mx-0 w-screen md:mt-0 mt-16">
      <div className="relative">
        <img 
          src="/img/bg-footer.webp"
          alt=""
          className="w-full object-cover scale-y-[-1] dark:hidden"
        />
        <img 
          src="/img/bg-darkmode.webp"
          alt=""
          className="w-full object-cover scale-y-[-1] hidden dark:block"
        />
        
        {/* Centered Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h2 className="text-[32px] md:text-[75px] text-white tracking-tight font-medium text-center max-w-[700px] leading-[1.1] [text-shadow:_0_1px_20px_rgb(8_32_84_/_100%)] md:[text-shadow:_0_1px_35px_rgb(8_32_84_/_100%)] dark:[text-shadow:_0_1px_20px_rgb(0_0_0_/_60%)] dark:md:[text-shadow:_0_1px_35px_rgb(0_0_0_/_60%)]">
            Start Building<br />
            the Internet of Value<br />
            Right Now
          </h2>
          
          <a 
            href="https://discord.gg/veruscoin" 
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Join the worldwide community
            <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#010101] text-white">
        {/* Desktop Footer */}
        <div className="hidden md:block max-w-[1220px] mx-auto py-16 px-8">
          <div className="grid grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="col-span-2">
              <Image
                src="/img/verus-logo-white.svg"
                alt="Verus Logo"
                width={120}
                height={32}
                className="h-8 w-auto mb-6"
              />
              <p className="text-[15px] text-gray-400 max-w-[300px]">
                A fundamentally different and better protocol to build Web3, and to empower individuals & communities.
              </p>
            </div>

            {/* Use */}
            <div>
              <h3 className="text-sm font-medium mb-4">Use</h3>
              <ul className="space-y-2">
                <li><Link href="/wallet" className="text-[15px] text-gray-400 hover:text-white transition-colors">Wallet</Link></li>
                <li><Link href="/bridge" className="text-[15px] text-gray-400 hover:text-white transition-colors">Bridge</Link></li>
                <li><Link href="/get-vrsc" className="text-[15px] text-gray-400 hover:text-white transition-colors">Get VRSC</Link></li>
                <li><Link href="/mining" className="text-[15px] text-gray-400 hover:text-white transition-colors">Start Mining</Link></li>
                <li><Link href="/staking" className="text-[15px] text-gray-400 hover:text-white transition-colors">Start Staking</Link></li>
              </ul>
            </div>

            {/* Build */}
            <div>
              <h3 className="text-sm font-medium mb-4">Build</h3>
              <ul className="space-y-2">
                <li><Link href="/build" className="text-[15px] text-gray-400 hover:text-white transition-colors">Overview</Link></li>
                <li><Link href="/migrate" className="text-[15px] text-gray-400 hover:text-white transition-colors">Migrate Your Community</Link></li>
                <li><Link href="/verusid" className="text-[15px] text-gray-400 hover:text-white transition-colors">VerusID</Link></li>
                <li><Link href="/docs" className="text-[15px] text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="text-sm font-medium mb-4">Learn</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[15px] text-gray-400 hover:text-white transition-colors">What is Verus?</Link></li>
                <li><Link href="/milestones" className="text-[15px] text-gray-400 hover:text-white transition-colors">Milestones</Link></li>
                <li><Link href="/faq" className="text-[15px] text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/whitepapers" className="text-[15px] text-gray-400 hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="/stats" className="text-[15px] text-gray-400 hover:text-white transition-colors">Network Statistics</Link></li>
              </ul>
            </div>

            {/* Community & Social */}
            <div>
              <h3 className="text-sm font-medium mb-4">Community</h3>
              <ul className="space-y-2 mb-6">
                <li><Link href="/community" className="text-[15px] text-gray-400 hover:text-white transition-colors">Community Hub</Link></li>
                <li><Link href="/community-projects" className="text-[15px] text-gray-400 hover:text-white transition-colors">Community Projects</Link></li>
                <li><Link href="/bounties" className="text-[15px] text-gray-400 hover:text-white transition-colors">Bounties</Link></li>
                <li><Link href="/contribute" className="text-[15px] text-gray-400 hover:text-white transition-colors">Contribute</Link></li>
              </ul>

              <div className="grid grid-cols-4 gap-4">
                <a href="https://discord.gg/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors">
                  <IoLogoDiscord className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a href="https://github.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="https://medium.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaMedium className="h-5 w-5" />
                </a>
                <a href="https://t.me/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0088cc] transition-colors">
                  <FaTelegram className="h-5 w-5" />
                </a>
                <a href="https://reddit.com/r/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF4500] transition-colors">
                  <FaReddit className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
            <div className="text-[14px] text-gray-400">
              © {new Date().getFullYear()} The Verus Protocol. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[14px] text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden px-6 py-12">
          {/* Logo */}
          <Image
            src="/img/verus-logo-white.svg"
            alt="Verus Logo"
            width={100}
            height={26}
            className="h-6 w-auto mb-8"
          />

          {/* Links */}
          <div className="space-y-8">
            {/* Use */}
            <div>
              <h3 className="text-sm font-medium mb-3">Use</h3>
              <ul className="space-y-2">
                <li><Link href="/wallet" className="text-[14px] text-gray-400">Wallet</Link></li>
                <li><Link href="/bridge" className="text-[14px] text-gray-400">Bridge</Link></li>
                <li><Link href="/get-vrsc" className="text-[14px] text-gray-400">Get VRSC</Link></li>
                <li><Link href="/mining" className="text-[14px] text-gray-400">Start Mining</Link></li>
                <li><Link href="/staking" className="text-[14px] text-gray-400">Start Staking</Link></li>
              </ul>
            </div>

            {/* Build */}
            <div>
              <h3 className="text-sm font-medium mb-3">Build</h3>
              <ul className="space-y-2">
                <li><Link href="/build" className="text-[14px] text-gray-400">Overview</Link></li>
                <li><Link href="/migrate" className="text-[14px] text-gray-400">Migrate Your Community</Link></li>
                <li><Link href="/verusid" className="text-[14px] text-gray-400">VerusID</Link></li>
                <li><Link href="/docs" className="text-[14px] text-gray-400">Documentation</Link></li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="text-sm font-medium mb-3">Learn</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[14px] text-gray-400">What is Verus?</Link></li>
                <li><Link href="/milestones" className="text-[14px] text-gray-400">Milestones</Link></li>
                <li><Link href="/faq" className="text-[14px] text-gray-400">FAQ</Link></li>
                <li><Link href="/whitepapers" className="text-[14px] text-gray-400">Whitepapers</Link></li>
                <li><Link href="/stats" className="text-[14px] text-gray-400">Network Statistics</Link></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-medium mb-3">Community</h3>
              <ul className="space-y-2 mb-4">
                <li><Link href="/community" className="text-[14px] text-gray-400">Community Hub</Link></li>
                <li><Link href="/community-projects" className="text-[14px] text-gray-400">Community Projects</Link></li>
                <li><Link href="/bounties" className="text-[14px] text-gray-400">Bounties</Link></li>
                <li><Link href="/contribute" className="text-[14px] text-gray-400">Contribute</Link></li>
              </ul>

              <div className="grid grid-cols-4 gap-4">
                <a href="https://discord.gg/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  <IoLogoDiscord className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a href="https://github.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="https://medium.com/veruscoin" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  <FaMedium className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-[12px] text-gray-400 mb-4">
              © {new Date().getFullYear()} Verus. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-[12px] text-gray-400">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}