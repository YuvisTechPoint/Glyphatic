import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {
 try {
 const secret = req.nextUrl.searchParams.get('secret')
 
 // Validate secret
 if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
 return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
 }

 const body = await req.json()
 const { _type, slug } = body

 // Example revalidation logic based on document type
 if (_type === 'blogPost' && slug?.current) {
 revalidatePath(`/blog/${slug.current}`)
 revalidateTag('blogPost')
 } else if (_type === 'product' && slug?.current) {
 revalidatePath(`/products/${slug.current}`)
 revalidateTag('product')
 } else {
 // Revalidate everything if type isn't specifically handled
 revalidatePath('/', 'layout')
 }

 return NextResponse.json({ revalidated: true, now: Date.now() })
 } catch (err) {
 return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
 }
}
