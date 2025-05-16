// Format in reserves numbers or show n/a for null values
export const formatReserves = (num?: number) => {
  if (!num) return 'n/a'
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  })
}

// Format price numbers with appropriate decimal precision or show n/a for null values
export const formatPrice = (price?: number, currency?: string) => {
  if (!price) return 'n/a'

  if (currency === 'VRSC' || currency === 'DAI.vETH') {
    // Show with 2 decimal places
    return price.toFixed(2)
  } else if (currency === 'vETH' || currency === 'MKR.vETH') {
    // Show with 6 decimal places for small values
    return price.toFixed(6)
  } else {
    // Bridge.vETH price
    return price.toFixed(6)
  }
}

// Format the total value with M suffix or show n/a for null values
export const formatTotalValue = (value?: number) => {
  if (!value) return 'n/a'

  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + 'M'
  } else {
    return value.toLocaleString()
  }
}

// Format price comparison percentage with sign and 2 decimal places or show n/a for null values
export const formatPriceComparison = (percentage?: number) => {
  if (percentage === undefined) return 'n/a'
  if (percentage === 0) return '0%'

  const formattedPercentage = Math.abs(percentage).toFixed(2)
  return percentage > 0
    ? `+${formattedPercentage}%`
    : `-${formattedPercentage}%`
}

// Get appropriate class for price comparison (green for positive, red for negative)
export const getPriceComparisonClass = (percentage?: number) => {
  if (percentage === undefined || percentage === 0)
    return 'text-gray-500 dark:text-gray-400'
  // if (percentage === 0) return 'text-gray-500 dark:text-gray-400'
  return percentage > 0
    ? 'text-[#00AA25] dark:text-green-400'
    : 'text-red-500 dark:text-red-400'
}
