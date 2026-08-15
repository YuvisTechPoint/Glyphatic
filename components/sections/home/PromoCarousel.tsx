'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROMO_CARDS = [
  {
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
  title: 'The Glyphatic Architecture — seven capabilities, one partner',
  cta: 'Explore the ecosystem',
  href: '/services#journey',
  },
  {
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop',
  title: 'AI Transformation — from AI talk to AI work',
  cta: 'See AI services',
  href: '/services#ai',
  },
  {
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop',
  title: 'Business Automation — remove the manual work',
  cta: 'See automation',
  href: '/services#automation',
  },
  {
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
  title: 'Mewayz — the business operating system',
  cta: 'See Mewayz',
  href: '/services#mewayz',
  },
  {
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
  title: 'Sales & revenue infrastructure that compounds',
  cta: 'See revenue systems',
  href: '/services#revenue',
  },
  {
  image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=400&auto=format&fit=crop',
  title: 'Marketing & growth — actual infrastructure',
  cta: 'See growth',
  href: '/services#growth',
  },
  {
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop',
  title: 'BPO & managed operations — run the functions',
  cta: 'See operations',
  href: '/services#bpo',
  },
  {
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop',
  title: 'Managed services — your digital transformation partner',
  cta: 'See managed services',
  href: '/services#managed',
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
  <section className="bg-gradient-to-r from-[#0F4C81]/5 to-[#C9A227]/10 py-8">
 <div className="container-wide">
 <div className="mb-6 flex items-center justify-between">
 <h2 className="text-[13px] font-bold tracking-[0.15em] text-neutral-900">RECOMMENDED</h2>
 <div className="flex gap-2">
 <button
 type="button"
 onClick={scrollPrev}
 disabled={!canScrollPrev}
 aria-label="Previous recommendations"
 className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/50 text-neutral-900 transition-colors hover:bg-black/10 disabled:opacity-30 disabled:hover:bg-transparent"
 >
 <ChevronLeft className="h-4 w-4" />
 </button>
 <button
 type="button"
 onClick={scrollNext}
 disabled={!canScrollNext}
 aria-label="Next recommendations"
 className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/50 text-neutral-900 transition-colors hover:bg-black/10 disabled:opacity-30 disabled:hover:bg-transparent"
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
 <div className="flex h-[88px] w-[88px] shrink-0 overflow-hidden bg-black/5">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src={card.image}
 alt={card.title}
 className="h-full w-full object-cover"
 loading="lazy"
 />
 </div>
 <div className="flex flex-1 flex-col justify-center">
 <h3 className="line-clamp-2 text-[15px] font-medium leading-[1.3] text-neutral-900">
 {card.title}
 </h3>
 <span className="mt-2 text-[13px] font-normal text-neutral-700">
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
