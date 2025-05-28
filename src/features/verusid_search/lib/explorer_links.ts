// Get explorer link based on the key type
export const getExplorerLink = (keyType: string, address?: string) => {
  if (!address) return undefined

  if (
    keyType.toLowerCase().includes('verus') ||
    keyType.toLowerCase().includes('vrsc')
  ) {
    return `https://explorer.verus.io/address/${address}`
  }

  if (keyType.toLowerCase().includes('btc')) {
    return `https://www.blockchain.com/btc/address/${address}`
  }

  if (keyType.toLowerCase().includes('eth')) {
    return `https://etherscan.io/address/${address}`
  }

  return undefined
}
