// Static milestone data that can be server-rendered
export const milestones = [
  {
    date: "MAY 2018",
    title: "Verus blockchain launch",
    description: "Start of the Verus blockchain with a 15 minute notice to the world. No premine, no ICO, no dev-fees. Ramping up of block rewards. Including VerusHash 1.0, Verus Proof of Power (50% proof-of-work, 50% proof-of-stake), zk-SNARKs private transactions.",
    link: {
      text: "Bitcointalk announcement thread →",
      url: "https://bitcointalk.org/index.php?topic=4070404.0"
    }
  },
  {
    date: "OCT 2018",
    title: "StakeGuard & Sapling",
    description: "Verus solves the proof-of-stake 'Nothing at Stake'-problem. And adding Zcash's Sapling support.",
    link: {
      text: "Read how Verus fixed 'nothing-at-stake' →",
      url: "https://medium.com/veruscoin/verus-proof-of-stake-paper-1-overview-dc0b052dac"
    }
  },
  {
    date: "DEC 2018",
    title: "VerusHash 2.0",
    description: "Closing the performance gap between CPU, GPU and FPGA."
  },
  {
    date: "DEC 2019",
    title: "VerusID & VerusHash 2.1",
    description: "Enabling VerusID on Verus mainnet. VerusHash 2.1 introduces an adjustment to the equalization technology, which tilts the balance a bit more favorably towards CPUs."
  },
  {
    date: "NOV 2021",
    title: "Verus Vault & Marketplace",
    description: "Verus Vault and the completely decentralized, no third party required VerusID Marketplace are now on mainnet."
  },
  {
    date: "MAY 2023",
    title: "Multi-chain & multi-currency",
    description: "Enabling the full Public Blockchains as a Service protocol. Launch currencies (e.g. tokens, liquidity pools) and interoperable blockchains. Enables MEV-resistant Verus DeFi."
  },
  {
    date: "OCT 2023",
    title: "Verus-Ethereum Bridge",
    description: "Launch of the non-custodial, decentralized and consensus proven bridge between Verus and Ethereum. Including the liquidity pool currency BridgevETH with VRSC, ETH, DAI & MKR in its reserves."
  },
  {
    date: "DEC 2023",
    title: "Auto-arbitrage",
    description: "Support for auto-arbitrage that uses the on-chain peer-to-peer marketplace of limit orders to crowdsource liquidity for Verus DeFi liquidity baskets."
  },
  {
    date: "MAR 2024",
    title: "Verus Storage",
    description: "With Verus Storage, every PBaaS chain immediately offers a fee-based storage capability for indexed data on the blockchain."
  }
] as const;