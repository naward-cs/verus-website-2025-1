// Press kit component with introduction, fact sheet, and other information about Verus
import Link from "next/link"
import { Download } from "lucide-react"

export function PressKit() {
  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
          Press Kit
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mt-2">
          Key information about the Verus Protocol for journalists, content creators, and whoever needs it. 
        </p>
        
       
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Brief Introduction */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Brief Introduction
          </h3>
          <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300">
            The Verus Protocol is a decentralized cryptocurrency network that empowers communities and individuals to be self-sovereign. As a powerful and secure platform to build dApps and the Web3, Verus offers unparalleled opportunities for organizations, entrepreneurs, businesses and developers.
          </p>
        </div>
        
        {/* Fact Sheet */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Fact Sheet
          </h3>
          <ul className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3 list-disc pl-5">
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Launch Date:</span> The blockchain's first block was on 21 May 2018.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Consensus Mechanism:</span> Proof of Power, combining 50% proof-of-work and 50% proof-of-stake and immune to 51% hash attacks.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Scalability:</span> The protocol is unlimited in scale by way of deploying an unlimited amount of interoperable blockchains.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Smart Transactions:</span> Instead of traditional smart contracts, the protocol uses more powerful and secure smart transactions.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Lead Developer:</span> Michael J. Toutonghi, recognized founder and architect of Microsoft's .NET platform, and former Vice President and Technical Fellow at Microsoft.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-gray-200">Fair Launch:</span> No ICO, no premine, no dev fees or tax. All coins are fairly mined and staked.
            </li>
          </ul>
        </div>
        
        {/* Origins and Mission */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Origins and Mission
          </h3>
          <div className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              Verus was conceived in 2018 by a team of visionary developers led by Michael J. Toutonghi. Born from the idea that blockchain technology could do more than just facilitate transactions, Verus envisions a more equitable and transparent society enabled by blockchain technology.
            </p>
            <p>
              The mission is to create a secure, privacy-centric platform that empowers people to express opinions anonymously yet verifiably, participate in a fair decentralized economy, and establish self-sovereign identities. Verus aims to leverage collective human intelligence and integrate machine learning while preserving privacy.
            </p>
            <p>
              Verus seeks to build tools that incentivize community behavior and enable direct querying of populations to surface honest public opinion. By rewarding positive contributions and respecting individual privacy, Verus aims to create a more transparent and equitable framework for society, fostering trust and cooperation in a decentralized digital ecosystem.
            </p>
          </div>
        </div>
        
        {/* Development Journey */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Development Journey
          </h3>
          <div className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              The development journey of Verus began months before the first block was mined. From the very beginning, the protocol was designed to address the limitations of existing blockchain technologies. Over time, Verus has achieved many significant milestones.
            </p>
            <p>
              The protocol's development has been marked by constant innovation, such as the full release of its Public Blockchains as a Service protocol in May 2023, and the release of the first non-custodial and consensus proven bridge to Ethereum in October 2023. And the protocol will continue to drive innovation in the blockchain world.
            </p>
          </div>
        </div>
        
        {/* Key Features and Achievements */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Key Features and Achievements
          </h3>
          <div className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              One of Verus' key standout features is its Proof of Power consensus mechanism, which balances the strengths of proof-of-work and proof-of-stake to maintain network security.
            </p>
            <p>
              Another is the full release of its Public Blockchain as a Service (PBaaS), which enabled the unlimited scale multi-chain and multi-currency part of the protocol, featuring UTXO-resistant DeFi.
            </p>
            <p>
              The protocol's fair launch, with no ICO, premine, dev fees, or taxes, underscores its commitment to equity and fairness, and is a prerequisite for being credibly neutral public infrastructure.
            </p>
          </div>
        </div>
        
        {/* Community and Ecosystem */}
        <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Community and Ecosystem
          </h3>
          <div className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              Verus is not a company or business, it is best compared to Bitcoin. The protocol thrives on active community involvement, and it is the worldwide community that steers the direction of the protocol.
            </p>
            <p>
              The community plays a pivotal role in the protocol's development, contributing to various initiatives and ensuring the network's decentralized nature. The governance of the protocol comprises the nodes, miners, and stakers.
            </p>
          </div>
        </div>
        
        {/* Vision for the Future */}
        <div className="col-span-1 md:col-span-2 md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm">
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">
            Vision for the Future
          </h3>
          <div className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              Now that the foundation is finished (in Oct 2023) it is time to actively attract entrepreneurs, developers and builders. As more people understand what value Verus can bring them, the bigger the ecosystem will grow.
            </p>
            <p>
              The Verus Protocol is here now, and everyone can utilize it, without permission, to start building Web3 and any type of dApps. Some examples are voting and polling systems, payment systems, social media platforms, customer loyalty programs, (private) communication networks, and so much more that is possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 