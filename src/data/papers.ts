// Paper data
export const papers = [
  {
    title: 'Verus Vision Paper',
    subtitle: 'Privacy, Community, Power',
    authors: [
      'Michael J. Toutonghi',
      'Michael F. Toutonghi',
      'Alex R. English',
    ],
    description:
      'The foundational vision that guides the Verus protocol development.',
    url: '/papers/VerusVision.pdf',
    isPrimary: true,
  },
  {
    title: 'Verus Phase I',
    subtitle: 'zk-SNARK Privacy and a Holistic Approach to ASICs',
    authors: ['Michael J. Toutonghi'],
    description:
      "Technical deep dive into Verus's privacy features and ASIC-resistant approach.",
    url: '/papers/VerusPhaseI.pdf',
  },
  {
    title: 'Verus Proof of Power',
    subtitle: 'A Provable Hybrid Solution to 51% Hash Attacks',
    authors: ['Michael J. Toutonghi', 'Michael F. Toutonghi', 'John Westbrook'],
    description:
      "The technical specification for Verus's hybrid consensus mechanism.",
    url: '/papers/VerusPoP.pdf',
  },
  {
    title: 'Building dApps at Any Scale',
    subtitle:
      'Your starting point to get familiar with the protocol that makes dApp development accessible.',
    authors: [],
    description:
      'A practical guide to building decentralized applications using Verus.',
    url: '/papers/Building_dApps_at_Any_Scale.pdf',
  },
]

export type PapersType = (typeof papers)[number]
