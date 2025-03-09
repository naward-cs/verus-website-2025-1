"use client"

import { FeatureTooltip } from './feature-tooltip'

// Feature descriptions as static content
const featureDescriptions = {
  security: "Combining PoW & PoS makes Verus provably resistant to 51% attacks. Completely built without vulnerable smart contracts.",
  scalability: "Scale through native multi-chain architecture, enabling unlimited horizontal scaling without compromising security or decentralization.",
  decentralization: "No barriers to participation means real decentralization. Mine, stake, or run nodes with minimal requirements.",
  interoperability: "Connect with any protocol blockchain through provable cross-chain bridging, including Ethereum. True interoperability without custodians.",
  privacy: "Optional but powerful zero-knowledge privacy. Choose when to be private and when to be public.",
  identity: "Your identity, your control. True self-sovereign identity as a core protocol feature.",
  defi: "Fair DeFi without MEV exploitation or high fees. The efficiency of native transactions keeps costs low.",
  community: "No ICO, no premine, no dev fees. Built for the public good with a fair launch. No special interests, just community-driven development."
} as const;

type FeatureKey = keyof typeof featureDescriptions;

export function FeaturesGrid() {
  const FeatureItem = ({ 
    src, 
    alt, 
    title, 
    feature 
  }: { 
    src: string
    alt: string
    title: string
    feature: FeatureKey
  }) => {
    return (
      <FeatureTooltip 
        description={featureDescriptions[feature]}
      >
        <div className="flex flex-col items-center relative">
          <img 
            src={src}
            alt={alt}
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] md:mb-3 mb-2"
          />
          <span className="text-[16px] md:text-[22px] text-black dark:text-white font-medium text-center">
            {title}
          </span>
        </div>
      </FeatureTooltip>
    );
  };

  return (
    <div className="relative w-screen md:max-w-[1220px]">
      {/* Hover indicator - desktop only */}
      <img 
        src="/img/hero/hoverme.svg"
        alt="Hover for more info"
        className="hidden md:block absolute left-8 w-32 -top-8 h-auto"
      />

      {/* Click indicator - mobile only */}
      <img 
        src="/img/hero/clickme.svg"
        alt="Click for more info"
        className="md:hidden absolute left-8 w-24 -top-6 h-auto"
      />

      <div className="md:rounded-lg bg-white/40 dark:bg-gray-900/60 border border-white/50 dark:border-gray-800/50 mb-2 md:mb-4 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-16 md:gap-y-16 gap-y-8 py-12 max-w-[1200px] mx-auto px-4">
          <FeatureItem
            src="/img/hero/security.svg"
            alt="Security"
            title="Security"
            feature="security"
          />
          <FeatureItem
            src="/img/hero/scale.svg"
            alt="Scalability"
            title="Scalability"
            feature="scalability"
          />
          <FeatureItem
            src="/img/hero/decentr.svg"
            alt="Decentralization"
            title="Decentralization"
            feature="decentralization"
          />
          <FeatureItem
            src="/img/hero/interop.png"
            alt="Interoperability"
            title="Interoperability"
            feature="interoperability"
          />
          <FeatureItem
            src="/img/hero/privacy.svg"
            alt="Privacy"
            title="Privacy"
            feature="privacy"
          />
          <FeatureItem
            src="/img/hero/identity.png"
            alt="Identity"
            title="Identity"
            feature="identity"
          />
          <FeatureItem
            src="/img/hero/defi.png"
            alt="DeFi"
            title="DeFi"
            feature="defi"
          />
          <FeatureItem
            src="/img/hero/commbuilt.svg"
            alt="Community-built"
            title="Community-built"
            feature="community"
          />
        </div>
      </div>
    </div>
  );
}