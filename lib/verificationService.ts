import { verusWebProof } from '@/components/VerusIdProfile/Validators';
import ProofsJSON from '@/data/proofsJSON';

// Fallback controller VDXFID in case import fails
const CONTROLLER_VDXFID = 'i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw';

// Types for the verification service
export interface VerificationRequest {
  user: string;
  type?: string;
  address?: string;
  qualifiedname?: string;
  [key: string]: any;
}

export interface VerificationResult {
  valid: 'true' | 'false' | 'error';
  key1?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  key2?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  overall?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  address?: string;
  proofLink?: string;
}

export async function verifySignature(data: VerificationRequest): Promise<VerificationResult> {
  try {
    // For blockchain addresses, make sure required fields are present
    if (data.type === 'blockchain') {
      if (!data.address || !data.qualifiedname) {
        console.error('Missing required blockchain data:', { address: data.address, qualifiedname: data.qualifiedname });
        return {
          valid: 'error',
          overall: { valid: 'error', message: 'Missing blockchain verification data' },
          address: data.address,
        };
      }
    }
    
    console.log(`Sending verification request for ${data.type || 'unknown'} type:`, data);
    
    // Call the API to verify the signature
    const response = await fetch('/api/verificationCheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.warn(`Verification API returned status ${response.status}.`);
      throw new Error(`Verification API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Verification API response:', result);
    return result;
  } catch (error) {
    console.error('Error verifying signature:', error);
    // Only use fallback if there's an actual error
    return {
      valid: 'error',
      overall: { valid: 'error', message: 'Verification check failed' },
      address: data.address,
    };
  }
}

export async function verifyServiceProof(data: VerificationRequest): Promise<VerificationResult> {
  try {
    // Extract the verification key with fallback
    const controllerVdxfid = ProofsJSON?.controller?.vdxfid || CONTROLLER_VDXFID;
    const verifyKey = data[controllerVdxfid];
    
    if (!verifyKey || typeof verifyKey !== 'string') {
      console.warn('No verification key found');
      return {
        valid: 'error',
        overall: { valid: 'error', message: 'No verification key found' }
      };
    }

    // Call the API directly with all data
    const response = await fetch('/api/verificationCheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.warn(`Verification API returned status ${response.status}.`);
      throw new Error(`Verification API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in service verification:', error);
    // Only use fallback if there's an actual error
    return {
      valid: 'error',
      overall: { valid: 'error', message: 'Service verification failed' }
    };
  }
} 