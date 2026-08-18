'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROMO_CARDS = [
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=180&auto=format&fit=crop',
    title: 'AI Transformation Playbook for Indian Enterprises',
    cta: 'A complete framework for implementing AI across operations, sales, and customer engagement in Indian market conditions.',
    href: '/resources/playbooks/ai-transformation',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=180&auto=format&fit=crop',
    title: 'AI Readiness Assessment 2026',
    cta: "Evaluate your organization's preparedness for intelligent automation and AI-driven operations.",
    href: '/resources/tools/ai-readiness-assessment',
  },
  {
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=180&auto=format&fit=crop',
    title: 'The Future of Intelligent Operations in Asia',
    cta: 'How businesses across India and APAC are rebuilding operations around AI, automation, and hybrid workforce models.',
    href: '/resources/reports/intelligent-operations',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=180&auto=format&fit=crop',
    title: 'Industry Transformation Report 2026',
    cta: 'Deep research into how education, healthcare, real estate, financial services, and retail sectors are evolving.',
    href: '/resources/research/industry-transformation-report',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=180&auto=format&fit=crop',
    title: 'Business Transformation Insights',
    cta: 'Strategic perspectives on technology adoption, operational excellence, and revenue acceleration for Asian markets.',
    href: '/resources/insights/business-transformation',
  },
] as const

export function PromoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: false, dragFree: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })],
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="bg-neutral-100 dark:bg-[#0e0a09] py-8 transition-colors duration-200">
      <div className="container-wide">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[13px] font-bold tracking-[0.15em] text-[#FA582D]">GLYPHATIC INTELLIGENCE</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous recommendations"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-white/50 text-neutral-800 dark:text-white transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next recommendations"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-white/50 text-neutral-800 dark:text-white transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">
            {PROMO_CARDS.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className={cn(
                  'group flex w-[320px] shrink-0 items-center gap-4 transition-opacity hover:opacity-80',
                )}
              >
                <div className="flex h-[88px] w-[88px] shrink-0 overflow-hidden bg-neutral-200 dark:bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="line-clamp-2 text-[15px] font-medium leading-[1.3] text-neutral-900 dark:text-white">
                    {card.title}
                  </h3>
                  <span className="mt-2 text-[13px] font-normal text-neutral-600 dark:text-neutral-300">
                    {card.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
