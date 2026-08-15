'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DIVISIONS, SERVICE_CATEGORIES } from '@/lib/services-data'
import { FadeInView } from '@/components/animations/FadeInView'

export function DivisionsSection() {
  return (
    <section className="section-padding bg-white border-t border-black/5">
      <div className="container-wide">
        <FadeInView className="max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            The Glyphatic Architecture
          </span>
          <h2 className="mt-4 font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium leading-[1.15] text-neutral-900">
            Seven capabilities.
            <br />
            One transformation partner.
          </h2>
          <p className="mt-5 text-[1.125rem] text-neutral-600 leading-relaxed max-w-2xl">
            Not a random pile of services. Seven integrated divisions — behind each
            one sits the full delivery portfolio across 15 disciplines.
          </p>
        </FadeInView>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIVISIONS.map((division, i) => (
            <FadeInView key={division.id} delay={i * 0.05}>
              <Link
                href={`/services#${division.id}`}
                className="group relative flex h-full flex-col rounded-lg border border-black/10 bg-white p-7 transition-all duration-300 hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.5rem] font-bold leading-none text-neutral-200 transition-colors group-hover:text-[#0F4C81]/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px w-10 bg-[#C9A227]" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-neutral-900">
                  {division.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#A8861D]">
                  {division.tagline}
                </p>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-neutral-600">
                  {division.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {division.categoryIds.map((categoryId) => {
                    const category = SERVICE_CATEGORIES.find((c) => c.id === categoryId)
                    return (
                      <span
                        key={categoryId}
                        className="rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition-colors group-hover:border-[#0F4C81]/20 group-hover:bg-[#0F4C81]/5"
                      >
                        {category?.title ?? categoryId}
                      </span>
                    )
                  })}
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0F4C81]">
                  Explore division
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
