// Project list component with filtering capabilities
'use client'

import {useState} from 'react'

import {ProjectCard, ProjectCardProps, ProjectCategory} from './project-card'
import {ProjectFilter} from './project-filter'

// This can be moved to a separate data file when the list gets larger
export const projects: ProjectCardProps[] = [
  {
    name: 'Verus Desktop',
    description: 'Desktop wallet for ecosystem currencies and for staking.',
    url: 'https://verus.io/wallet',
    category: 'Wallet' as ProjectCategory,
  },
  {
    name: 'Verus Mobile',
    description: 'Mobile wallet for Verus and ecosystem currencies.',
    url: 'https://verus.io/wallet',
    category: 'Wallet' as ProjectCategory,
  },
  {
    name: 'Verus Insight Explorer',
    description:
      'Blockchain explorer for the Verus network showing transactions, blocks, and network statistics in real-time.',
    url: 'https://insight.verus.io',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'Verus Wisdom',
    description:
      'Dashboard for network statistics, mining difficulty, staking rewards, market data for VRSC, and much more',
    url: 'https://www.veruswisdom.com',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'VerusIDs.com',
    description:
      'Overview of registered VerusIDs, VerusIDs on offer and tool to create API command for registrations.',
    url: 'https://www.verusids.com',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'Verus-Ethereum Bridge',
    description:
      'Cross-chain bridge for moving currencies and tokens between Verus and Ethereum. Non-custodial and trustless.',
    url: 'https://eth.verusbridge.io',
    category: 'Technology' as ProjectCategory,
  },
  {
    name: 'VaultAlert',
    description:
      'Easy tool to check the status of Verus Vault on your VerusID.',
    url: 'https://wwww.vaultalert.net',
    category: 'Technology' as ProjectCategory,
  },
  {
    name: 'Valu',
    description:
      'Valu combines the power of the Verus Blockchain, Zero Knowledge Privacy, AI, Social Messengers and Mixed Reality to create Decentralized. Distributed, People Powered, Verified Community Network Economies. Valu bridges the physical and digital worlds, empoweringusers with ownership, privacy, and collaboration in gamified, open-source ecosystems. Aligning the interests of users and communities to create sustainable distributed decentralized network economies.',
    url: 'https://www.valu.earth',
    category: 'Technology' as ProjectCategory,
  },
  {
    name: "Faldt's Cryptodashboard",
    description:
      'Large dashboard with all information on basket currencies, TVL, volume and much more.',
    url: 'https://cryptodashboard.faldt.net',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'VerusMarkets',
    description:
      'Information about decentralized on-chain currency pricing and volume, liquidity pool reserves, TVL and more',
    url: 'https://www.verusmarkets.com',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'ValuVerse',
    description:
      'ValuVerse Metaverse environment. Log in with a .valuid VerusID (currently offered for free on the Verus Discord in the #valuverse channel), explore, have meetings, transact. Under construction and much more being built.',
    url: 'https://live.valuverse.net/auth',
    category: 'Technology' as ProjectCategory,
  },
  {
    name: 'raw.verus.trading',
    description:
      'Barebones, raw liquidity pool (basket currencies) reserve data.',
    url: 'https://raw.verus.trading',
    category: 'Dashboard' as ProjectCategory,
  },
  {
    name: 'VerusInvoices',
    description: 'Easily ceate invoices to share and use with Verus Mobile.',
    url: 'https://www.verusinvoices.com',
    category: 'Technology' as ProjectCategory,
  },
].sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name

export function ProjectList() {
  const categories: ProjectCategory[] = ['Dashboard', 'Technology', 'Wallet']
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilterChange = (selectedCategory: ProjectCategory | null) => {
    if (selectedCategory === null) {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      )
    }
  }

  return (
    <div>
      <ProjectFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            url={project.url}
            category={project.category}
          />
        ))}
      </div>
    </div>
  )
}
