'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function NewsletterSection() {
 const [email, setEmail] = useState('')
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

 async function handleSubmit(e: React.FormEvent) {
 e.preventDefault()
 setStatus('loading')

 try {
 const res = await fetch('/api/newsletter', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ email }),
 })
 if (!res.ok) throw new Error('Subscription failed')
 setStatus('success')
 setEmail('')
 } catch {
 setStatus('error')
 }
 }

 return (
  <section className="relative bg-gray-50 py-20 lg:py-24 overflow-hidden border-t border-black/5">
  <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/5 via-transparent to-[#0F4C81]/5" />

 <div className="container-wide relative z-10">
 <FadeInView>
 <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20">
 {/* Left: Heading */}
 <div className="lg:w-[45%]">
 <h2 className="font-display text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium leading-[1.2] text-neutral-900">
 The Glyphatic Signal.
 </h2>
 <p className="mt-4 text-[1.125rem] text-neutral-900/80 leading-relaxed max-w-xl">
 Monthly. Technical. No fluff. Architecture patterns, India market intelligence, and systems engineering insights from the engineers actually building it.
 </p>
 </div>

 {/* Right: Form */}
 <div className="lg:w-[50%] lg:pt-2">
 <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full">
 <div className="relative flex-1 w-full">
 <input
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="Enter your email now to subscribe!"
 className="w-full h-12 bg-transparent border-0 border-b border-black/20 px-0 text-[16px] text-neutral-900 placeholder:text-neutral-900/70 focus:border-[#0F4C81] focus:outline-none focus:ring-0 transition-colors font-serif"
 aria-label="Email address"
 />
 {/* Small icon in input (optional) */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#0F4C81] text-white text-[10px] flex items-center justify-center font-bold">
 ✓
 </div>
 </div>
 
 <button
 type="submit"
 disabled={status === 'loading'}
  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0F4C81] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#0B3A66] disabled:opacity-50"
 >
 {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
 <ArrowRight className="h-4 w-4" />
 </button>
 </form>

  {status === 'success' && (
  <p className="mt-3 text-[14px] text-green-700">
  Thank you for subscribing!
  </p>
  )}
  {status === 'error' && (
  <p className="mt-3 text-[14px] text-red-600">
  Something went wrong. Please try again.
  </p>
  )}

 <p className="mt-6 text-[12px] md:text-[13px] text-neutral-900/80 leading-relaxed font-medium">
 By submitting this form, I understand my personal data will be processed in
 accordance with{' '}
 <Link href="/legal/privacy" className="text-neutral-900 underline underline-offset-2 hover:text-[#0F4C81] transition-colors font-bold">
 GlyphaticSystems Privacy Statement
 </Link>{' '}
 and{' '}
 <Link href="/legal/terms" className="text-neutral-900 underline underline-offset-2 hover:text-[#0F4C81] transition-colors font-bold">
 Terms of Use.
 </Link>
 </p>
 </div>
 </div>
 </FadeInView>
 </div>
 </section>
 )
}
