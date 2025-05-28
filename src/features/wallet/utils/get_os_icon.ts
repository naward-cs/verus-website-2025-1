export type OS = 'Windows' | 'macOS' | 'Linux' | 'Linux ARM' | 'Unknown'

export const getOSIcon = (os: OS) => {
  // In dark mode, we invert the black icons
  // const iconClass = isDarkMode ? 'h-6 w-6 dark:invert' : 'h-6 w-6'

  switch (os) {
    case 'Windows':
      return {src: '/img/windows-black.svg', alt: 'Windows'}

    case 'macOS':
      return {src: '/img/apple-black.svg', alt: 'macOS'}

    case 'Linux':
    case 'Linux ARM':
      return {src: '/img/linux-black.svg', alt: 'Linux'}

    default:
      return {src: '/img/windows-black.svg', alt: 'OS'}
  }
}
