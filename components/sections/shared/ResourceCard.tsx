import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ResourceCardProps {
  category: string
  title: string
  href: string
  imageAlt?: string
  imageUrl?: string
  className?: string
}

export function ResourceCard({
  category,
  title,
  href,
  imageAlt,
  imageUrl,
  className,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-hover',
        'bg-white dark:bg-[#1a1a1a] border-neutral-200 dark:border-white/10 shadow-card dark:shadow-none transition-colors duration-200',
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={imageAlt ?? title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(250,88,45,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(41,98,255,0.3) 0%, transparent 50%)' }} />
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">{category}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-label uppercase text-brand-500">{category}</span>
        <h3 className="mt-2 font-display text-body-lg font-semibold leading-snug group-hover:text-brand-500 transition-colors text-neutral-900 dark:text-white">
          {title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-body-sm font-medium text-brand-500">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
