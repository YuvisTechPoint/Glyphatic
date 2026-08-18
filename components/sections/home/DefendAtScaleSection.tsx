'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

const SOLUTION_CARDS = [
  {
    id: 1,
    title: 'AI Transformation',
    description: 'Make AI operational across your organization. Ideal for: Organizations ready to move beyond AI pilots to enterprise-wide implementation.',
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#1a1110] dark:to-[#0a0a0a]',
  },
  {
    id: 2,
    title: 'Digital Transformation',
    description: 'Modernize outdated systems, processes, and technology infrastructure. Ideal for: Businesses held back by outdated technology infrastructure.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#150e0d] dark:to-[#0a0a0a]',
  },
  {
    id: 3,
    title: 'Revenue Transformation',
    description: 'Build stronger, more efficient sales and revenue engines. Ideal for: Organizations where revenue growth has stalled despite increased marketing investment.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#1c0f0d] dark:to-[#0a0a0a]',
  },
  {
    id: 4,
    title: 'Operational Transformation',
    description: 'Eliminate inefficient processes and operational bottlenecks. Ideal for: Businesses where operational inefficiency is limiting growth and profitability.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#1a1110] dark:to-[#0a0a0a]',
  },
  {
    id: 5,
    title: 'Customer Experience Transformation',
    description: 'Build faster, smarter, more responsive customer journeys. Ideal for: Organizations where customer experience has become a competitive disadvantage.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#150e0d] dark:to-[#0a0a0a]',
  },
  {
    id: 6,
    title: 'Workforce Transformation',
    description: 'Make people and technology work better together. Ideal for: Organizations struggling with technology adoption and workforce productivity.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-tr dark:from-[#1c0f0d] dark:to-[#0a0a0a]',
  },
  {
    id: 7,
    title: 'Brand & Authority Transformation',
    description: 'Build market recognition, trust, and category authority. Ideal for: Businesses with strong products but weak market presence and brand recognition.',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#1a1110] dark:to-[#0a0a0a]',
  },
  {
    id: 8,
    title: 'Business Modernization',
    description: 'Bring fragmented infrastructure into one connected, intelligent system. Ideal for: Growing businesses where fragmented systems have become a scaling bottleneck.',
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-white dark:bg-gradient-to-br dark:from-[#150e0d] dark:to-[#0a0a0a]',
  },
]

export function DefendAtScaleSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-white/5 transition-colors duration-200">
      <div className="container-wide">
        <FadeInView>
          <div className="mb-12">
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white max-w-4xl">
              <span className="text-[#FA582D]">Solve the problems</span> holding your business back.
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          {SOLUTION_CARDS.map((card) => (
            <FadeInView key={card.id} className={cn("relative min-h-[280px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/5 p-8 flex flex-col justify-end group transition-colors hover:border-[#FA582D]/30 shadow-sm", card.colSpan, card.bgClasses)}>
              {/* Orange glow accent */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.12)_0%,_transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-[1.5rem] md:text-[1.75rem] font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-neutral-600 dark:text-white/60 text-[15px] font-medium tracking-wide">
                  {card.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView className="mt-12">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-[#FA582D] px-6 py-3 text-[14px] font-bold text-neutral-900 dark:text-white transition-colors hover:bg-[#FA582D]/10"
          >
            Explore All Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
