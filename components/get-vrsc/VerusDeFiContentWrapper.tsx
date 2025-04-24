"use client"

import { useProtocolData } from './ProtocolDataProvider';
import { VerusDeFiSection } from './VerusDeFiSection';

/**
 * Client-side wrapper component that consumes protocol data context
 * and passes it to the server-rendered VerusDeFiSection
 */
export function VerusDeFiContentWrapper() {
  const { protocolData, isLoading } = useProtocolData();
  
  return (
    <VerusDeFiSection protocolData={protocolData} isLoading={isLoading} />
  );
} 