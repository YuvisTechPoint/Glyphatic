import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Process partner application (e.g., save to DB or send email)
    console.log('Received partner application:', body)
    
    return NextResponse.json(
      { message: 'Partner application received successfully.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to submit partner application.' },
      { status: 500 }
    )
  }
}
