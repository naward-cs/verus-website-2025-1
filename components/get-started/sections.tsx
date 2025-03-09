"use client"

import { ArrowRight, Wallet, Coins, Database, Cpu, PercentSquare, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function GetStartedSections() {
  return (
    <div className="w-full max-w-[1220px] mt-8 md:mt-16">
      {/* Introduction Section */}
      <div className="w-full md:rounded-lg border-x-0 md:border-2 border-y-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-8 md:p-16 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[24px] md:text-[48px] text-black font-medium tracking-tight text-center mb-6">
            Welcome to Verus
          </h2>
          <p className="text-[16px] md:text-[20px] text-black/75 tracking-tight text-center max-w-[800px] leading-normal">
            Verus is a community-driven, zero-knowledge technology ecosystem creating privacy-preserving
            decentralized tools for the future of digital sovereignty, value, and trust.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Setting Up Your Wallet */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <Wallet className="h-6 w-6 text-verus-blue" />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium mb-2">
                  Setting Up Your Wallet
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight mb-4">
                  Get started with a Verus wallet - the gateway to the Verus ecosystem. Choose between desktop, mobile, or CLI options based on your needs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Secure and self-sovereign
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Available for all major platforms
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Built-in staking & mining features
                  </li>
                </ul>
                <Link 
                  href="/wallet" 
                  className="flex items-center gap-2 text-[14px] md:text-[16px] text-verus-blue font-medium hover:underline group"
                >
                  Set up your wallet
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Getting VRSC */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <Coins className="h-6 w-6 text-verus-blue" />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium mb-2">
                  Getting VRSC
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight mb-4">
                  There are multiple ways to acquire VRSC, the native currency of the Verus ecosystem. Choose the method that works best for you.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Purchase on exchanges
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Mine with your CPU
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Stake your existing coins
                  </li>
                </ul>
                <Link 
                  href="/exchanges" 
                  className="flex items-center gap-2 text-[14px] md:text-[16px] text-verus-blue font-medium hover:underline group"
                >
                  Learn how to get VRSC
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mining */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <Cpu className="h-6 w-6 text-verus-blue" />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium mb-2">
                  Mining VRSC
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight mb-4">
                  Participate in network security and earn rewards by mining Verus. Verus mining is CPU-friendly and accessible to everyone.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    CPU mining optimized for efficiency
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Merge-mine multiple coins simultaneously
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Solo or pool mining options
                  </li>
                </ul>
                <Link 
                  href="/mining" 
                  className="flex items-center gap-2 text-[14px] md:text-[16px] text-verus-blue font-medium hover:underline group"
                >
                  Start mining
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Staking */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-verus-blue/10 flex items-center justify-center flex-shrink-0">
                <PercentSquare className="h-6 w-6 text-verus-blue" />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[22px] text-black font-medium mb-2">
                  Staking VRSC
                </h3>
                <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight mb-4">
                  Earn passive income by staking your VRSC coins. Help secure the network while growing your holdings over time.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Earn rewards on your holdings
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    Low hardware requirements
                  </li>
                  <li className="flex items-center gap-2 text-[14px] md:text-[16px] text-black/75">
                    <ChevronRight className="h-4 w-4 text-verus-blue" />
                    50% of blocks are staking blocks
                  </li>
                </ul>
                <Link 
                  href="/staking" 
                  className="flex items-center gap-2 text-[14px] md:text-[16px] text-verus-blue font-medium hover:underline group"
                >
                  Start staking
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="pt-4 border-t-2 border-[#E9EFFC]">
          <h2 className="text-[20px] md:text-[28px] text-black font-medium tracking-tight text-center mb-8">
            Ready for More? Explore Advanced Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/verusid" 
              className="flex flex-col items-center p-4 rounded-lg border border-blue-100 hover:bg-blue-50/50 transition-colors"
            >
              <div className="h-14 w-14 rounded-full bg-verus-blue/10 flex items-center justify-center mb-3">
                <Image
                  src="/img/at-full-black.svg"
                  alt="VerusID"
                  width={24}
                  height={24}
                  className="h-7 w-7 opacity-60"
                />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-center mb-1">VerusID</h3>
              <p className="text-[14px] text-black/75 text-center">Your self-sovereign identity</p>
            </Link>
            
            <Link 
              href="/ethereum-bridge" 
              className="flex flex-col items-center p-4 rounded-lg border border-blue-100 hover:bg-blue-50/50 transition-colors"
            >
              <div className="h-14 w-14 rounded-full bg-verus-blue/10 flex items-center justify-center mb-3">
                <Database className="h-7 w-7 text-verus-blue/60" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-center mb-1">Ethereum Bridge</h3>
              <p className="text-[14px] text-black/75 text-center">Connect with Ethereum ecosystem</p>
            </Link>
            
            <a 
              href="https://docs.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-blue-100 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="h-14 w-14 rounded-full bg-verus-blue/10 flex items-center justify-center mb-3">
                <ExternalLink className="h-7 w-7 text-verus-blue/60" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-medium text-center mb-1 flex items-center gap-1">
                Documentation
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-[14px] text-black/75 text-center">Detailed guides and resources</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 