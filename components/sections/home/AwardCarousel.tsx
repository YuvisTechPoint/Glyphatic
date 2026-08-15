'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeInView } from '@/components/animations/FadeInView'

interface Award {
 name: string
 org?: string
}

interface AwardCarouselProps {
 awards: Award[]
 className?: string
}

const ANALYST_COLORS: Record<string, string> = {
 'Gartner': 'border-l-blue-500',
 'Forrester': 'border-l-green-600',
 'Frost & Sullivan': 'border-l-orange-500',
 'GigaOm': 'border-l-purple-500',
 'KuppingerCole': 'border-l-teal-500',
}

export function AwardCarousel({ awards, className }: AwardCarouselProps) {
 const [emblaRef, emblaApi] = useEmblaCarousel(
 { align: 'start', loop: true, dragFree: true },
 [Autoplay({ delay: 4000, stopOnInteraction: true })],
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
 return () => { emblaApi.off('select', onSelect) }
 }, [emblaApi])

 return (
 <section className={cn('section-padding bg-gray-50', className)}>
 <div className="container-wide">
 <FadeInView>
 <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
 <div>
 <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-600 mb-2">
 ANALYST RECOGNITION
 </p>
 <h2 className="font-display text-display-sm text-neutral-900">
 Recognized industry leader
 </h2>
 </div>
 <div className="flex gap-2">
 <button
 type="button"
 onClick={scrollPrev}
 disabled={!canScrollPrev}
 aria-label="Previous awards"
 className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-neutral-600 hover:border-[#FA582D] hover:text-[#FA582D] disabled:opacity-40 transition-colors"
 >
 <ChevronLeft className="h-4 w-4" />
 </button>
 <button
 type="button"
 onClick={scrollNext}
 disabled={!canScrollNext}
 aria-label="Next awards"
 className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-neutral-600 hover:border-[#FA582D] hover:text-[#FA582D] disabled:opacity-40 transition-colors"
 >
 <ChevronRight className="h-4 w-4" />
 </button>
 </div>
 </div>
 </FadeInView>

 <div className="overflow-hidden" ref={emblaRef}>
 <div className="flex gap-5">
 {awards.map((award, i) => {
 const borderColor = award.org ? (ANALYST_COLORS[award.org] || 'border-l-brand-500') : 'border-l-brand-500'
 return (
 <div
 key={`${award.name}-${i}`}
 className={cn(
 'group relative min-w-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4',
 'flex flex-col gap-3 rounded-xl border border-black/5 bg-white/40 backdrop-blur-xl p-7 transition-all duration-500 ease-out',
 'hover:bg-gray-100/80 hover:border-black/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]',
 'border-l-4',
 borderColor,
 )}
 >
 <div className="flex items-center gap-3">
 <Trophy className="h-5 w-5 text-amber-500 shrink-0" strokeWidth={1.5} />
 {award.org && (
 <span className="text-[12px] font-bold text-neutral-600 uppercase tracking-wider">
 {award.org}
 </span>
 )}
 </div>
 <p className="text-[14px] font-medium text-neutral-900/90 leading-snug">
 {award.name}
 </p>
 </div>
 )
 })}
 </div>
 </div>
 </div>
 </section>
 )
}
