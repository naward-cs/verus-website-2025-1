import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://explorer.verus.io/ext/getmoneysupply', {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch supply');
    }

    const supply = await response.text();
    return NextResponse.json({ supply: Math.round(parseFloat(supply)) });
  } catch (error) {
    console.error('Error fetching supply:', error);
    return NextResponse.json({ error: 'Failed to fetch supply' }, { status: 500 });
  }
}