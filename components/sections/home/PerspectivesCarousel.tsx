'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ResourceCard } from '@/components/sections/shared/ResourceCard'
import { FadeInView } from '@/components/animations/FadeInView'

const PERSPECTIVE_CARDS = [
  {
  category: 'ARCHITECTURE',
  title:
  'The Glyphatic Architecture: Seven Capabilities, One Partner',
  href: '/services',
  imageAlt: 'Transformation architecture diagram',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
  category: 'AI',
  title: 'AI Transformation Is a Workforce Problem, Not a Technology Problem',
  href: '/services#ai',
  imageAlt: 'AI and people working together',
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
  category: 'SYSTEMS',
  title:
  'Automation Is Not a Feature. It Is the Operating Layer.',
  href: '/services#automation',
  imageAlt: 'Automation workflows',
  imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
  category: 'PLATFORM',
  title:
  'Mewayz Is Not Software. It Is a Business Operating System.',
  href: '/services#mewayz',
  imageAlt: 'Business operating system dashboard',
  imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
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
 <section className="section-padding bg-gray-50">
 <div className="container-wide">
 <FadeInView>
 <div className="flex flex-wrap items-end justify-between gap-4">
 <h2 className="max-w-2xl font-display text-display-md text-neutral-900">
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
 className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/20 text-neutral-900 hover:border-brand-500 hover:text-brand-500 disabled:opacity-40"
 >
 <ChevronLeft className="h-4 w-4" />
 </button>
 <button
 type="button"
 onClick={scrollNext}
 disabled={!canScrollNext}
 aria-label="Next perspectives"
 className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/20 text-neutral-900 hover:border-brand-500 hover:text-brand-500 disabled:opacity-40"
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
