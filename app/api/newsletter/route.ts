import { NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
 email: z.string().email(),
})

export async function POST(request: Request) {
 try {
 const body = await request.json()
 const validatedData = newsletterSchema.parse(body)

 // Simulate network delay
 await new Promise((resolve) => setTimeout(resolve, 1000))
 
 console.log('Newsletter subscription received:', validatedData)

 return NextResponse.json({ success: true, message: 'Subscribed successfully' }, { status: 200 })
 } catch (error) {
 if (error instanceof z.ZodError) {
 return NextResponse.json({ success: false, message: 'Validation failed', errors: error.errors }, { status: 400 })
 }
 return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
 }
}
