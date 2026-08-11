import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  inquiryType: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Simulate network delay for realistic loading state
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Contact sales request received:', validatedData)

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: 'Validation failed', errors: error.errors }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
