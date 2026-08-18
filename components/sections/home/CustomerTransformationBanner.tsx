'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function CustomerTransformationBanner() {
  return (
    <section className="bg-neutral-50 dark:bg-[#111111] py-16 md:py-24 transition-colors duration-200">
      <div className="container-wide">
        <FadeInView className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.2] text-neutral-900 dark:text-white">
              <span className="text-[#C84727]">Transformation</span> in action.
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-start md:justify-end">
            <Link
              href="/resources/case-studies"
              className="group inline-flex items-center gap-2 text-[15px] font-bold text-neutral-900 dark:text-white transition-colors hover:text-[#C84727]"
            >
              Explore Case Studies
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
