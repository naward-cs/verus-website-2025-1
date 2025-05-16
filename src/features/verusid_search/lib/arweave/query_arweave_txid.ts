import 'server-only'

import {arweave} from './arweave'

export const queryArweaveTransaction = async (txId: string) => {
  try {
    const response = await arweave.api.get(`/${txId}`)
    if (!response.ok) {
      throw new Error(`API txId info fetch error: ${response.statusText}`)
    }
    //TODO: switch to using getData at somepoint. Currently causes error
    // const data = await arweave.transactions.getData(txId,{decode:true,string:true})
    return response.data
  } catch (error) {
    console.error('queryArweaveTransaction: Query error', error)
    return undefined
  }
}
