'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROMO_CARDS = [
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/frontier/unit42_fight-ai_rec-thumbnail_180x180.jpg',
    title: 'Combat Risks from Frontier AI Models',
    cta: 'Watch on demand',
    href: '/unit42/combat-risks-frontier-ai',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/pr/panw-project-potter-organic-social-1080x1080.jpg',
    title: 'Palo Alto Networks to Acquire Portkey to Secure the Rise of AI Agents',
    cta: 'Read the Press Release',
    href: '/company/press/2026/palo-alto-networks-to-acquire-portkey-to-secure-the-rise-of-ai-agents',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/cortex/recommended-fight-ai-with-ai.webp',
    title: 'Fight AI with AI',
    cta: "See what's possible",
    href: '/cortex/fight-ai-with-ai',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/homepage/thumbnail-introducing-prisma-airs-3-0.webp',
    title: 'Introducing Prisma AIRS 3.0',
    cta: 'Read the blog',
    href: '/blog/2026/03/prisma-airs-3-0-autonomous-ai/',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/homepage/panw_tmrw-secured-OD_recommended_180x180.jpg',
    title: 'Defining the future of AI and quantum',
    cta: 'Watch now',
    href: '/tomorrow-secured',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/unit42/ir-report/hero-banner-recommended-unit42.png',
    title: 'Attacks are happening 4x faster. Are you ready?',
    cta: 'Get the Unit 42 IR Report',
    href: '/resources/research/unit-42-incident-response-report',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/unit42/2025/1_unit-42_mxsiam_homepage-thumbnail_180x180.jpg',
    title: 'Unit 42 MSIAM 2.0 is here: The 24/7 managed SOC.',
    cta: "See what's new",
    href: '/blog/2026/02/introducing-unit-42-managed-xsiam-2-0/',
  },
  {
    image: 'https://www.paloaltonetworks.in/content/dam/pan/en_US/images/network-security/quantum-summit-homepage-thumbnail.jpg',
    title: 'Quantum-Safe Summit: Secure today. Ready for tomorrow.',
    cta: 'Watch the summit',
    href: '/quantum-safe',
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
    <section className="bg-gradient-to-r from-[#140605] to-[#090302] py-8">
      <div className="container-wide">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[13px] font-bold tracking-[0.15em] text-white">RECOMMENDED</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous recommendations"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next recommendations"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
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
                <div className="flex h-[88px] w-[88px] shrink-0 overflow-hidden bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="line-clamp-2 text-[15px] font-medium leading-[1.3] text-white">
                    {card.title}
                  </h3>
                  <span className="mt-2 text-[13px] font-normal text-neutral-300">
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
