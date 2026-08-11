'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface AwardBadgeProps {
  title: string
  caption?: string
  image?: string
  href?: string
  className?: string
}

export function AwardBadge({ title, caption, image, href, className }: AwardBadgeProps) {
  const content = (
    <div
      className={cn(
        'flex flex-col items-center rounded-md border border-neutral-200 bg-white p-4',
        'shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover',
        href && 'cursor-pointer',
        className
      )}
    >
      <div className="flex h-16 w-full items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={120}
            height={64}
            className="max-h-16 w-auto object-contain grayscale"
          />
        ) : (
          <div className="flex h-14 w-full items-center justify-center rounded-md bg-neutral-50 px-3 text-center">
            <span className="text-xs font-semibold leading-tight text-neutral-700">{title}</span>
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-2 line-clamp-2 text-center text-[11px] leading-snug text-neutral-500">
          {caption}
        </p>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
