import {getProtocolInfo} from "@/features/get-vrsc/server/get-protocol-info"


export const VolumeSection = async () => {
  const protocolData = await getProtocolInfo()
  return protocolData.volume
}

export const LiquidSection = async () => {
  const protocolData = await getProtocolInfo()
  return protocolData.liquidity
}
