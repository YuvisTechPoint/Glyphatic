'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { MegaNavColumn as MegaNavColumnType } from '@/lib/nav-data'
import { cn } from '@/lib/utils'

export interface MegaNavColumnProps {
  column: MegaNavColumnType
  className?: string
}

export function MegaNavColumn({ column, className }: MegaNavColumnProps) {
  return (
    <div className={cn('min-w-0', className)}>
      {column.headingHref ? (
        <Link
          href={column.headingHref}
          className="label-eyebrow mb-3 inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
        >
          {column.heading}
          <ArrowRight className="h-3 w-3" aria-hidden />
        </Link>
      ) : (
        <p className="label-eyebrow mb-3 text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider text-xs">{column.heading}</p>
      )}
      <ul className="space-y-2">
        {column.links.map((link) => (
          <li key={`${column.heading}-${link.href}-${link.label}`}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'block text-sm text-neutral-700 dark:text-neutral-300 font-medium transition-all duration-200',
                'hover:text-[#FA582D] hover:pl-1'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
