'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function HeroVideoSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-white lg:min-h-screen">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0A0D14 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(15,76,129,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-wide relative z-10 pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8861D]">
            AI-Native Business Transformation
          </div>
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] tracking-tight leading-[1.08] text-neutral-900"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          We don&apos;t just design transformations.
          <span className="text-[#0F4C81]"> We operate them.</span>
        </motion.h1>

        <FadeInView delay={0.2}>
          <p className="mt-6 max-w-[650px] text-[1.125rem] md:text-[1.25rem] font-medium leading-[1.6] text-neutral-600">
            Seven integrated divisions — Strategy, AI, Systems, Growth, Authority,
            Operations, and Intelligence — delivering end-to-end business
            transformation for the AI era.
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/discuss-architecture"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#0F4C81] px-8 text-[15px] font-bold text-white transition-all hover:bg-[#0B3A66] shadow-lg shadow-[#0F4C81]/20"
            >
              Discuss Transformation <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-neutral-300 px-8 text-[15px] font-bold text-neutral-900 transition-all hover:border-[#0F4C81] hover:text-[#0F4C81]"
            >
              Explore the Ecosystem
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.6}>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-black/10 pt-10">
            {[
              { value: '7', label: 'Integrated Divisions' },
              { value: '74+', label: 'Services Delivered' },
              { value: '15+', label: 'Industries Served' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
