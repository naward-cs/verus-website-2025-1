'use client'

import {FeatureTooltip} from './feature-tooltip'

// Feature descriptions as static content
const featureDescriptions = {
  security:
    'Combining PoW & PoS makes Verus provably resistant to 51% attacks. Completely built without vulnerable smart contracts.',
  scalability:
    'Scale through native multi-chain architecture, enabling unlimited horizontal scaling without compromising security or decentralization.',
  decentralization:
    'No barriers to participation means real decentralization. Mine, stake, or run nodes with minimal requirements.',
  interoperability:
    'Connect with any protocol blockchain through provable cross-chain bridging, including Ethereum. True interoperability without custodians.',
  privacy:
    'Optional but powerful zero-knowledge privacy. Choose when to be private and when to be public.',
  identity:
    'Your identity, your control. True self-sovereign identity as a core protocol feature.',
  defi: 'Fair DeFi without MEV exploitation or high fees. The efficiency of native transactions keeps costs low.',
  community:
    'No ICO, no premine, no dev fees. Built for the public good with a fair launch. No special interests, just community-driven development.',
} as const

type FeatureKey = keyof typeof featureDescriptions

export function FeaturesGrid() {
  const FeatureItem = ({
    src,
    alt,
    title,
    feature,
  }: {
    src: string
    alt: string
    title: string
    feature: FeatureKey
  }) => {
    return (
      <FeatureTooltip description={featureDescriptions[feature]}>
        <div className="relative flex flex-col items-center">
          <img
            src={src}
            alt={alt}
            className="mb-2 h-[40px] w-[40px] md:mb-3 md:h-[48px] md:w-[48px]"
          />
          <span className="text-center text-[16px] font-medium text-black dark:text-white md:text-[22px]">
            {title}
          </span>
        </div>
      </FeatureTooltip>
    )
  }

  return (
    <div className="relative w-screen md:max-w-[1220px]">
      {/* Hover indicator - desktop only */}
      <img
        src="/img/hero/hoverme.svg"
        alt="Hover for more info"
        className="absolute -top-8 left-8 hidden h-auto w-32 md:block"
      />

      {/* Click indicator - mobile only */}
      <img
        src="/img/hero/clickme.svg"
        alt="Click for more info"
        className="absolute -top-6 left-8 h-auto w-24 md:hidden"
      />

      <div className="mb-2 border border-white/50 bg-white/40 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800/50 dark:bg-gray-900/60 md:mb-4 md:rounded-lg">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-8 gap-y-8 px-4 py-12 md:grid-cols-4 md:gap-x-16 md:gap-y-16">
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
  )
}
