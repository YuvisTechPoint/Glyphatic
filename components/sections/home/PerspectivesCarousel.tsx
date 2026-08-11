'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ResourceCard } from '@/components/sections/shared/ResourceCard'
import { FadeInView } from '@/components/animations/FadeInView'

const PERSPECTIVE_CARDS = [
  {
    category: 'CASE STUDY',
    title:
      'Why We Rewrote Our Client\'s Payment Service in Rust',
    href: '/case-studies/rust-payment-service',
    imageAlt: 'Rust code on screen',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'ARCHITECTURE',
    title: 'eBPF for Dummies: High-Performance Networking',
    href: '/blog/ebpf-for-dummies',
    imageAlt: 'Network nodes',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'INDUSTRY INSIGHT',
    title:
      'The True Cost of Offshore Engineering in 2026',
    href: '/blog/true-cost-offshore-engineering',
    imageAlt: 'Business graphs',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'OPEN SOURCE',
    title:
      'Introducing Go-Migrate: Our Open-Source Tool for Zero-Downtime Data Migrations',
    href: '/open-source/go-migrate',
    imageAlt: 'Terminal output',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
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
    <section className="section-padding bg-[#111111]">
      <div className="container-wide">
        <FadeInView>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl font-display text-display-md text-white">
              Engineering insights from the teams actually building it.
            </h2>
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white hover:border-brand-500 hover:text-brand-500 disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next perspectives"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white hover:border-brand-500 hover:text-brand-500 disabled:opacity-40"
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
                  theme="dark"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
