import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to verify a message signature against a VerusID
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { verusId, signature, message } = await request.json();
    
    // Validate request parameters
    if (!verusId || !signature || !message) {
      return NextResponse.json(
        { error: 'Missing required parameters: verusId, signature, and message are required' },
        { status: 400 }
      );
    }

    // Call Verus API to verify the message
    const response = await fetch('https://api.verus.services', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "verify-message",
        method: "verifymessage",
        params: [verusId, signature, message]
      })
    });

    // Check if the API request was successful
    if (!response.ok) {
      console.error(`Verus API returned status: ${response.status}`);
      return NextResponse.json(
        { error: `Failed to verify message: ${response.statusText}` },
        { status: 500 }
      );
    }

    // Parse and return the verification result
    const data = await response.json();
    
    if (data.error) {
      return NextResponse.json(
        { error: data.error.message || 'Unknown error from Verus API' },
        { status: 400 }
      );
    }

    // Return verification result
    return NextResponse.json({ verified: data.result === true });
  } catch (error) {
    console.error('Error verifying message:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 