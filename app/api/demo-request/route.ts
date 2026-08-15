import { NextResponse } from 'next/server'
import { z } from 'zod'

const demoSchema = z.object({
 firstName: z.string().min(1),
 lastName: z.string().min(1),
 email: z.string().email(),
 company: z.string().min(1),
 country: z.string().min(1),
})

export async function POST(request: Request) {
 try {
 const body = await request.json()
 const validatedData = demoSchema.parse(body)

 // TODO: In a real implementation, you would:
 // 1. Save this lead to a database or CRM (Salesforce, HubSpot)
 // 2. Send an email notification using Resend or SendGrid
 // 3. Possibly trigger a Slack webhook
 
 // Simulate network delay for realistic loading state
 await new Promise((resolve) => setTimeout(resolve, 1500))
 
 console.log('Demo request received:', validatedData)

 return NextResponse.json({ success: true, message: 'Demo request received successfully' }, { status: 200 })
 } catch (error) {
 if (error instanceof z.ZodError) {
 return NextResponse.json({ success: false, message: 'Validation failed', errors: error.errors }, { status: 400 })
 }
 return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
 }
}
