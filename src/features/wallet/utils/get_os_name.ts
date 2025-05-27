export const getOSName = (os: {name?: string; version?: string}) => {
  const osName = os.name?.toLowerCase() || ''
  return osName.includes('win')
    ? 'Windows'
    : osName.includes('mac')
      ? 'macOS'
      : osName.includes('linux')
        ? osName.includes('arm') || osName.includes('aarch64')
          ? 'Linux ARM'
          : 'Linux'
        : 'Unknown'
}
