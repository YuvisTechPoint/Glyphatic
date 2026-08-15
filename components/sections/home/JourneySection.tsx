'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CLIENT_JOURNEY, POSITIONING } from '@/lib/services-data'
import { FadeInView } from '@/components/animations/FadeInView'

export function JourneySection() {
  return (
    <section className="section-padding bg-gray-50 border-t border-black/5">
      <div className="container-wide">
        <FadeInView className="max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            The Ultimate Client Journey
          </span>
          <h2 className="mt-4 font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium leading-[1.15] text-neutral-900">
            Give us the business problem.
          </h2>
          <p className="mt-5 text-[1.125rem] text-neutral-600 leading-relaxed max-w-2xl">
            We&apos;ll diagnose it, design the transformation, implement the technology,
            automate the workflows, operate the required functions, and continuously
            optimize the system.
          </p>
        </FadeInView>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CLIENT_JOURNEY.map((stage, i) => (
            <FadeInView key={stage.step} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col rounded-lg border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#0F4C81]/40 hover:shadow-hover">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-[#C9A227]">
                    {stage.step}
                  </span>
                  {i < CLIENT_JOURNEY.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-[#0F4C81]" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900">
                  {stage.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {stage.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-lg border border-black/10 bg-white p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                The real Glyphatic model
              </p>
              <p className="mt-2 font-display text-lg md:text-xl font-medium text-neutral-900 leading-snug">
                {POSITIONING.new}
              </p>
            </div>
            <Link
              href="/discuss-architecture"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#0F4C81] px-7 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Discuss Architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
