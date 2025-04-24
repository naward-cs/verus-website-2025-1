interface Query {
  [key: string]: string | string[]
}

const FetchVerusId = async (query: Query) => {
  const endpoint = `https://api.verus.services`

  let result: Record<string, any> = {}
  try {
    result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        jsonrpc: "2.0", 
        id: "search", 
        method: "getidentity", 
        params: [query.id as string]
      }),
    }).then((res) => res.json())
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }

  if (result?.result) {
    return { result: result.result, error: null }
  } else {
    return { result: null, error: result.error }
  }
}

export default FetchVerusId
