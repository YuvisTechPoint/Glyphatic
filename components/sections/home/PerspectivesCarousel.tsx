'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ResourceCard } from '@/components/sections/shared/ResourceCard'
import { FadeInView } from '@/components/animations/FadeInView'

const PERSPECTIVE_CARDS = [
  {
    category: 'INSIGHTS',
    title:
      'Why Most AI Transformation Projects Fail — And How to Avoid It',
    href: '/resources/insights/ai-transformation-failure',
    imageAlt: 'Business strategy dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'RESEARCH',
    title: 'The State of Business Automation in 2026',
    href: '/resources/research/business-automation-2026',
    imageAlt: 'Automation workflow',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'PLAYBOOK',
    title:
      'The Revenue Transformation Playbook for Mid-Market Enterprises',
    href: '/resources/playbooks/revenue-transformation',
    imageAlt: 'Revenue growth chart',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'CASE STUDY',
    title:
      'How a Healthcare Group Reduced Operational Costs by 40% with Intelligent Automation',
    href: '/resources/case-studies/healthcare-automation',
    imageAlt: 'Healthcare operations',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
  },
] as const

export function PerspectivesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
  })
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
    <section className="section-padding bg-neutral-50 dark:bg-[#111111] transition-colors duration-200">
      <div className="container-wide">
        <FadeInView>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl font-display text-display-md text-neutral-900 dark:text-white">
              Ideas that move businesses forward.
            </h2>
            <div className="flex items-center gap-3">
              <Link
                href="/resources"
                className="text-body-md font-medium text-brand-500 hover:text-brand-600"
              >
                View all
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Previous perspectives"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-white hover:border-brand-500 hover:text-brand-500 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next perspectives"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-white hover:border-brand-500 hover:text-brand-500 disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeInView>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {PERSPECTIVE_CARDS.map((card) => (
              <div
                key={card.href}
                className="min-w-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ResourceCard
                  category={card.category}
                  title={card.title}
                  href={card.href}
                  imageAlt={card.imageAlt}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
