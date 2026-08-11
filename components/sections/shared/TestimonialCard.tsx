import { cn } from '@/lib/utils'

export interface TestimonialCardProps {
  quote: string
  author?: string
  role?: string
  company?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        'rounded-lg border border-base-border bg-white p-8 shadow-card',
        className,
      )}
    >
      <p className="font-display text-body-lg italic leading-relaxed text-neutral-800">
        &ldquo;{quote}&rdquo;
      </p>
      {(author || company) && (
        <footer className="mt-6 border-t border-base-border pt-4">
          {author && (
            <cite className="not-italic font-semibold text-neutral-900">{author}</cite>
          )}
          {(role || company) && (
            <p className="text-body-sm text-neutral-500">
              {[role, company].filter(Boolean).join(', ')}
            </p>
          )}
        </footer>
      )}
    </blockquote>
  )
}
