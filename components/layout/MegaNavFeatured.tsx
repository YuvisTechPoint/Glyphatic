'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { MegaNavFeatured as MegaNavFeaturedType } from '@/lib/nav-data'
import { cn } from '@/lib/utils'

export interface MegaNavFeaturedProps {
  featured: MegaNavFeaturedType
  className?: string
}

export function MegaNavFeatured({ featured, className }: MegaNavFeaturedProps) {
  return (
    <Link
      href={featured.href}
      className={cn(
        'group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-md',
        'border border-neutral-200 bg-neutral-950 p-5 text-white transition-shadow hover:shadow-hover',
        className
      )}
    >
      {featured.image ? (
        <Image
          src={featured.image}
          alt=""
          fill
          className="object-cover opacity-60 transition-opacity group-hover:opacity-70"
          sizes="280px"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-neutral-950" aria-hidden />
      )}
      <div className="relative z-10">
        <span className="label-eyebrow text-brand-300">{featured.label}</span>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{featured.title}</h3>
        {featured.description && (
          <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{featured.description}</p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-300 group-hover:text-white transition-colors">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
