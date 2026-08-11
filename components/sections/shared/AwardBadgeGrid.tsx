'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

export interface AwardBadge {
  name: string
  url?: string
  highlighted?: boolean
}

interface AwardBadgeGridProps {
  awards: AwardBadge[]
  maxVisible?: number
  expandable?: boolean
  className?: string
}

export function AwardBadgeGrid({
  awards,
  maxVisible = 6,
  expandable = true,
  className,
}: AwardBadgeGridProps) {
  const [expanded, setExpanded] = useState(false)
  const visibleAwards = expanded ? awards : awards.slice(0, maxVisible)

  return (
    <div className={className}>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {visibleAwards.map((award) => {
          const content = (
            <motion.div
              whileHover={cardHover}
              className={cn(
                'flex h-20 min-w-[200px] max-w-[240px] shrink-0 flex-col justify-center rounded-lg border bg-white px-4 py-3 shadow-card',
                award.highlighted
                  ? 'border-brand-500 ring-1 ring-brand-500/20'
                  : 'border-base-border',
              )}
            >
              <p className="text-body-sm font-medium leading-snug text-neutral-800">
                {award.name}
              </p>
            </motion.div>
          )

          if (award.url) {
            return (
              <a
                key={award.name}
                href={award.url}
                className="shrink-0 transition-opacity hover:opacity-90"
              >
                {content}
              </a>
            )
          }

          return <div key={award.name}>{content}</div>
        })}
      </div>

      {expandable && awards.length > maxVisible && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-brand-500 hover:text-brand-600"
        >
          {expanded ? 'Show less' : 'See all'}
          <ChevronRight
            className={cn(
              'h-4 w-4 transition-transform',
              expanded && 'rotate-90',
            )}
          />
        </button>
      )}
    </div>
  )
}
