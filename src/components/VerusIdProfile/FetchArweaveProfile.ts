import {HexToBase64, isBase64url} from './Validators.js'

const FetchArweaveProfile = async (tag: string, publicVdxfid: string) => {
  if (!tag) {
    console.log('FetchArweaveProfile: No tag provided')
    return false
  }

  console.log(
    'FetchArweaveProfile: Processing tag',
    tag,
    'with publicVdxfid',
    publicVdxfid
  )

  // Convert hex to base64url
  const address = HexToBase64(tag)

  if (isBase64url(address)) {
    console.log('FetchArweaveProfile: Valid base64url address', address)

    try {
      console.log('FetchArweaveProfile: Querying API for owner transactions')

      // Use the new API endpoint instead of direct GraphQL
      const baseUrl =
        typeof window !== 'undefined'
          ? window.location.origin
          : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

      const response = await fetch(`${baseUrl}/api/arweaveData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'findOwnerTransactions',
          ownerAddress: address,
          publicVdxfid: publicVdxfid,
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }

      const apiResult = await response.json()
      const ownerResult = apiResult.data

      console.log(
        'FetchArweaveProfile: Received owner query result',
        ownerResult?.data?.transactions?.edges?.length
          ? `with ${ownerResult.data.transactions.edges.length} transactions`
          : 'with no transactions'
      )

      // Process and find the right transaction
      if (ownerResult?.data?.transactions?.edges?.length > 0) {
        console.log(
          'FetchArweaveProfile: Searching for transaction with tag:',
          publicVdxfid
        )

        // Look for a transaction with the publicVdxfid tag
        const matchingTx = ownerResult.data.transactions.edges.find(
          (edge: any) =>
            edge.node.tags.some(
              (tag: any) => tag.name === publicVdxfid && tag.value === '1'
            )
        )

        if (matchingTx) {
          const txId = matchingTx.node.id
          console.log('FetchArweaveProfile: Found matching transaction:', txId)
          return txId
        } else {
          // If no exact match, try to find the manifest tx
          const manifestTxs = ownerResult.data.transactions.edges.filter(
            (edge: any) =>
              edge.node.tags.some(
                (tag: any) => tag.name === 'Type' && tag.value === 'manifest'
              )
          )

          if (manifestTxs.length > 0) {
            const txId = manifestTxs[0].node.id
            console.log(
              'FetchArweaveProfile: Found manifest transaction:',
              txId
            )
            return txId
          }

          // Last resort - WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk for cragorn's specific case
          const knownTxs = ownerResult.data.transactions.edges.find(
            (edge: any) =>
              edge.node.id === 'WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk'
          )

          if (knownTxs) {
            console.log('FetchArweaveProfile: Using known data transaction')
            return 'WSrNhh1VQ_c18hHKhATXw0wEWoMoeaYiYcGkvNNYNfk'
          }

          console.log(
            'FetchArweaveProfile: No transaction with matching tag found'
          )
          return false
        }
      } else {
        console.log(
          'FetchArweaveProfile: No transactions found for owner',
          address
        )
        return false
      }
    } catch (error) {
      console.error('FetchArweaveProfile: Query error', error)
      return false
    }
  } else {
    console.log('FetchArweaveProfile: Invalid base64url address from tag', tag)
    return false
  }
}

export default FetchArweaveProfile
