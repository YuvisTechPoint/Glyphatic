'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function CustomerTransformationBanner() {
 return (
 <section className="bg-gray-50 py-16 md:py-24">
 <div className="container-wide">
 <FadeInView className="flex flex-col md:flex-row md:items-center justify-between gap-8">
 <div className="md:w-1/2">
 <h2 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.2] text-neutral-900">
 Our customers are securing their <span className="text-[#0F4C81]">digital transformation</span>
 </h2>
 </div>
 <div className="md:w-1/2 flex justify-start md:justify-end">
 <Link
 href="/customers"
  className="group inline-flex items-center gap-2 text-[15px] font-bold text-neutral-900 transition-colors hover:text-[#0F4C81]"
 >
 See testimonials
 <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2} />
 </Link>
 </div>
 </FadeInView>
 </div>
 </section>
 )
}
