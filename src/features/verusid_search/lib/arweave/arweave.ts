import Arweave from 'arweave'

// Initialize Arweave client
export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
  logging: false,
  timeout: 10000,
})
// export const arweave = Arweave.init({})
