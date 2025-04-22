// Static milestone data that can be server-rendered
export const milestones = [
  {
    date: "MAY 2018",
    title: "Genesis: A Fair Beginning",
    description: "The Verus blockchain began with just a 15-minute notice, launching without premine, ICO, or developer fees to ensure community ownership from the start. The initial release introduced VerusHash 1.0 and the balanced Verus Proof of Power consensus, combining proof-of-work and proof-of-stake in equal measure. Privacy was built into the foundation with zk-SNARKs technology, establishing core principles that would guide the project's development.",
    link: {
      text: "Bitcointalk announcement thread",
      url: "https://bitcointalk.org/index.php?topic=4070404.0"
    }
  },
  {
    date: "OCT 2018",
    title: "StakeGuard Solution & Privacy Upgrade",
    description: "Verus achieved a significant breakthrough by implementing StakeGuard, elegantly solving the long-standing Nothing at Stake problem that had plagued proof-of-stake systems since their inception. Simultaneously, the integration of Zcash's Sapling technology improved the performance of shielded transactions on the network. These technical improvements demonstrated the project's commitment to addressing foundational blockchain challenges.",
    link: {
      text: "Read how Verus fixed 'nothing-at-stake'",
      url: "https://medium.com/veruscoin/how-verus-solved-nothing-at-stake-and-weak-subjectivity-proof-of-stake-problems-b4dd6a85086e"
    }
  },
  {
    date: "DEC 2018",
    title: "VerusHash 2.0: Mining Equality",
    description: "Verus developed and deployed VerusHash 2.0, an algorithm that substantially reduced the mining efficiency gap between everyday computers and specialized hardware. The update allowed regular CPUs to compete effectively with GPUs and FPGAs, expanding access to mining rewards beyond those with resources for expensive equipment. This development strengthened network decentralization by enabling a more diverse group of participants to secure the blockchain."
  },
  {
    date: "DEC 2019",
    title: "VerusID & Mining Refinement",
    description: "December 2019 marked the activation of VerusID on mainnet, bringing blockchain-native self-sovereign identities to Verus users for the first time. Alongside this identity innovation, VerusHash 2.1 further refined the mining algorithm to better equalize participation across hardware types, with modest adjustments favoring consumer CPUs."
  },
  {
    date: "NOV 2021",
    title: "Verus Vault & Marketplace",
    description: "Verus enhanced its identity system with the addition of Verus Vault, providing time-locking capabilities that protect funds stored in VerusIDs against theft or unauthorized access. The network also deployed the VerusID Marketplace, allowing users to trade VerusIDs and VRSC directly on-chain without requiring third parties. These developments strengthened the practical utility of the Verus ecosystem for both secure storage and trustless exchange."
  },
  {
    date: "MAY 2023",
    title: "PBaaS & Protocol DeFi",
    description: "May 2023 saw the deployment of complete PBaaS functionality, enabling the launch of interconnected blockchains and various currency types without requiring specialized technical knowledge. The update included protocol-level DeFi capabilities designed to resist manipulation through front-running and other common tactics. These advancements expanded Verus from a single blockchain to a scalable, interconnected ecosystem of chains and currencies."
  },
  {
    date: "OCT 2023",
    title: "Verus-Ethereum Bridge",
    description: "The Verus-Ethereum Bridge went live in October, establishing a secure pathway between the Verus and Ethereum ecosystems without requiring users to trust third-party custodians. Accompanying the bridge was Bridge.vETH, a basket currency (liquidity pool) combining VRSC, ETH, DAI, and MKR to facilitate efficient cross-chain conversions. This integration expanded the Verus network's reach while maintaining its consensus-proven security model."
  },
  {
    date: "DEC 2023",
    title: "Auto-arbitrage",
    description: "December brought support for auto-arbitrage functionality, connecting the on-chain marketplace's limit orders with DeFi liquidity baskets to improve overall market efficiency."
  },
  {
    date: "MAR 2024",
    title: "Verus Storage",
    description: "March 2024 introduced Verus Storage, providing native data storage capabilities across all PBaaS chains in the ecosystem. This feature allows users to store indexed, retrievable data directly on-chain with a standardized fee structure based on storage size. This addition extends the capabilities of Verus and its PBaaS chains to serve as both transaction networks and decentralized data repositories."
  }
] as const;