export const buildQuery = (address: string) => {
  const queryObject = {
    query: `{
    transactions(
      first: 10
      sort: HEIGHT_DESC
      owners: ["${address}"]
    ) {
        edges {
          node {
            id
            tags {
              name
              value
            }
          }
        }
      }
    }`,
  }
  return queryObject
}
