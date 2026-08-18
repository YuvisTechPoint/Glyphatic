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
    <section 
      className="relative bg-white dark:bg-[#0d0d0d] py-20 lg:py-24 overflow-hidden border-t border-neutral-200 dark:border-white/5 bg-no-repeat transition-colors duration-200"
      style={{
        backgroundImage: 'url("https://www.paloaltonetworks.in/etc/clientlibs/clean/imgs/2023/footer-form-bg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0d0d0d] via-transparent to-white dark:to-[#0d0d0d] transition-colors duration-200" />

      <div className="container-wide relative z-10">
        <FadeInView>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20">
            {/* Left: Heading */}
            <div className="lg:w-[45%]">
              <h2 className="font-display text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium leading-[1.2] text-neutral-900 dark:text-white">
                Your transformation starts with a conversation.
              </h2>
              <p className="mt-4 text-[1.125rem] text-neutral-600 dark:text-white/80 leading-relaxed max-w-xl">
                Tell us where your business is today. We&apos;ll help identify where intelligence, technology, automation, and operational transformation can create the greatest impact.
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
                    placeholder="Enter your business email"
                    className="w-full h-12 bg-transparent border-0 border-b border-neutral-300 dark:border-white/20 px-0 text-[16px] text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/70 focus:border-[#FA582D] focus:outline-none focus:ring-0 transition-colors font-serif"
                    aria-label="Email address"
                  />
                  {/* Small icon in input (optional) */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#3a8b75] text-white text-[10px] flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#C84727] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#FA582D] disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Talk to Glyphatic'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-3 text-[14px] text-[#00E676]">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-[14px] text-[#FF5252]">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link 
                  href="/services"
                  className="text-[14px] font-bold text-neutral-900 dark:text-white underline underline-offset-4 hover:text-[#FA582D] transition-colors"
                >
                  Explore Our Capabilities
                </Link>
              </div>

              <p className="mt-6 text-[12px] md:text-[13px] text-neutral-600 dark:text-white/80 leading-relaxed font-medium">
                By submitting this form, I understand my personal data will be processed in
                accordance with{' '}
                <Link href="/legal/privacy" className="text-neutral-900 dark:text-white underline underline-offset-2 hover:text-[#FA582D] transition-colors font-bold">
                  Glyphatic Privacy Statement
                </Link>{' '}
                and{' '}
                <Link href="/legal/terms" className="text-neutral-900 dark:text-white underline underline-offset-2 hover:text-[#FA582D] transition-colors font-bold">
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
