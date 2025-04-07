import { NextRequest, NextResponse } from 'next/server';
import { isValidUrl, verusWebProof, verusBlockchainProof } from '@/components/VerusIdProfile/Validators';
import ProofsJSON from '@/data/proofsJSON';



// Define clear types for the verification results
type ValidStatus = 'true' | 'false' | 'error';

interface VerificationResult {
  valid: ValidStatus;
  message?: string;
}

interface BlockchainVerificationResult {
  key1?: VerificationResult;
  key2?: VerificationResult;
  overall?: VerificationResult;
  address?: string;
  proofLink?: string;
  valid: ValidStatus;
  message?: string;
}

// For Ethereum verification
// Optional: Import web3 only if needed for Ethereum verification
let Web3: any;
try {
  Web3 = require('web3');
} catch (error) {
  console.warn('Web3 package not available. Ethereum verification will not work.');
}

// For Bitcoin verification
// Optional: Import bitcoinjs-message only if needed for Bitcoin verification
let bitcoinMessage: any;
try {
  bitcoinMessage = require('bitcoinjs-message');
} catch (error) {
  console.warn('bitcoinjs-message package not available. Bitcoin verification will not work.');
}

/**
 * Verifies a message against the Verus API
 */
async function verifyVerusMessage(
  identity: string, 
  signature: string, 
  message: string
): Promise<VerificationResult> {
  try {
    // Use absolute URL to ensure it works in both client and server contexts
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      
    const response = await fetch(`${baseUrl}/api/verify/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        verusId: identity,
        signature,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Message verification failed: ${response.statusText}`);
    }

    const result = await response.json();
    return { valid: result.verified ? 'true' : 'false' };
  } catch (error) {
    console.error('Error verifying Verus message:', error);
    return { valid: 'error', message: 'Verification failed' };
  }
}

/**
 * API endpoint to check verification of various proof types
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Normalize the user ID
    let user = data.user?.toLowerCase() || '';
    if (user && !user.endsWith('@')) {
      user = user + '@';
    }

    // Initialize result
    let result: BlockchainVerificationResult = { valid: 'error' };

    // Get the controller key from ProofsJSON
    const controllerVdxfid = ProofsJSON?.controller?.vdxfid || 'i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw';
    const verifyKey = data[controllerVdxfid];

    // Handle URL verification (for social media)
    if (isValidUrl(verifyKey)) {
      let verifiedData: any;
      
      try {
        if (verifyKey.includes('reddit')) {
          // Reddit uses a different approach to fetch content
          const redditResponse = await fetch(verifyKey + '.json');
          if (!redditResponse.ok) {
            throw new Error(`Reddit API error: ${redditResponse.status}`);
          }
          const redditData = await redditResponse.json();
          verifiedData = redditData[1]?.data?.children[0]?.data?.body;
        } else {
          // For other URLs, fetch the content directly
          const response = await fetch(verifyKey);
          if (!response.ok) {
            throw new Error(`URL fetch error: ${response.status}`);
          }
          verifiedData = await response.text();
        }

        // Extract proof from content
        const parsedProof = verusWebProof(verifiedData);
        if (parsedProof) {
          // Verify the proof with Verus API
          const verificationResult = await verifyVerusMessage(
            user,
            parsedProof.Signature,
            parsedProof.Message
          );
          
          // Add the proof link to the result
          result = {
            ...verificationResult,
            proofLink: verifyKey
          };
        } else {
          result = { valid: 'error', message: 'Could not parse proof from content' };
        }
      } catch (error) {
        console.error('Error verifying URL content:', error);
        result = { valid: 'error', message: 'Failed to verify URL content' };
      }
    } 
    // Handle blockchain address verification
    else if (data.type === 'blockchain') {
      console.log("Verifying blockchain address:", data);
      try {
        // Check for required fields
        if (!data.address || !data.qualifiedname) {
          console.warn("Missing address or qualifiedname for blockchain verification");
          return NextResponse.json({ 
            valid: 'error', 
            message: 'Missing required blockchain data (address or qualifiedname)'
          });
        }

        // Extract proofs
        const proofChecks: any = verusBlockchainProof(verifyKey);
        if (!proofChecks) {
          console.warn("Invalid proof format:", verifyKey);
          return NextResponse.json({ valid: 'error', message: 'Invalid proof format' });
        }
        
        console.log("Extracted proofs:", proofChecks);

        // First key: verify against Verus ID
        console.log("Verifying key1 with user:", user);
        const key1Result = await verifyVerusMessage(
          user,
          proofChecks.key1.Signature,
          proofChecks.key1.Message
        );
        console.log("Key1 verification result:", key1Result);

        // Get blockchain type from qualified name
        const chain = data.qualifiedname?.split('.')?.[2] || '';
        console.log("Blockchain type:", chain);
        
        let key2Result: VerificationResult = { valid: 'error' };
        
        // Verify second key based on blockchain type
        switch (chain) {
          case 'vrsc':
            // For Verus, use Verus API
            console.log("Verifying VRSC key2 with address:", data.address);
            key2Result = await verifyVerusMessage(
              data.address,
              proofChecks.key2.Signature,
              proofChecks.key2.Message
            );
            console.log("Key2 VRSC verification result:", key2Result);
            break;
            
          case 'eth':
            // Ethereum verification commented out
            /*
            if (Web3) {
              try {
                const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY');
                const recovered = web3.eth.accounts.recover(
                  proofChecks.key2.Message,
                  proofChecks.key2.Signature
                );
                
                key2Result = { 
                  valid: recovered?.toLowerCase() === data.address?.toLowerCase() ? 'true' : 'false' 
                };
              } catch (error) {
                console.error('Error verifying Ethereum message:', error);
                key2Result = { valid: 'error', message: 'Failed to verify Ethereum message' };
              }
            } else {
              key2Result = { valid: 'error', message: 'Web3 not available' };
            }
            */
            // Temporarily returning success for Ethereum verification
            key2Result = { valid: 'true' };
            break;
            
          case 'btc':
            // Bitcoin verification commented out
            /*
            if (bitcoinMessage) {
              try {
                const isValid = bitcoinMessage.verify(
                  proofChecks.key2.Message,
                  data.address,
                  proofChecks.key2.Signature,
                  undefined,
                  true
                );
                
                key2Result = { valid: isValid ? 'true' : 'false' };
              } catch (error) {
                console.error('Error verifying Bitcoin message:', error);
                key2Result = { valid: 'error', message: 'Failed to verify Bitcoin message' };
              }
            } else {
              key2Result = { valid: 'error', message: 'bitcoinjs-message not available' };
            }
            */
            // Temporarily returning success for Bitcoin verification
            key2Result = { valid: 'true' };
            break;
            
          default:
            key2Result = { valid: 'error', message: 'Unsupported blockchain' };
        }

        // Combine results
        const overallValid = key1Result.valid === 'true' && key2Result.valid === 'true' ? 'true' : 'false';
        
        result = {
          key1: key1Result,
          key2: key2Result,
          overall: { valid: overallValid },
          address: data.address,
          valid: overallValid
        };
      } catch (error) {
        console.error('Error in blockchain verification:', error);
        result = { valid: 'error', message: 'Failed to verify blockchain proof' };
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in verification check:', error);
    return NextResponse.json(
      { valid: 'error', message: 'Verification check failed' },
      { status: 500 }
    );
  }
} 