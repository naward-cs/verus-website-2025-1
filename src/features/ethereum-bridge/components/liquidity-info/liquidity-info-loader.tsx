export const LiquidityInfoLoader = ({cols = 3}: {cols?: number}) => {
  return (
    <>
      {Array.from({length: cols}).map((_, i) => (
        <div
          key={`${i}-liquidity-loader`}
          className="flex items-center justify-end gap-1"
        >
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      ))}
    </>
  )
}

export const TotalInfoLoader = () => {
  return (
    <div className="ml-auto h-4 w-36 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
  )
}
