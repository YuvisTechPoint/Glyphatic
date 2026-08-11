import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

interface DemoCTAProps {
  headline?: string
  subheadline?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
  className?: string
}

export function DemoCTA({
  headline = 'Ready to secure your organization with AI?',
  subheadline = 'See how Palo Alto Networks platforms powered by Precision AI® can transform your security posture.',
  primaryLabel = 'Get a demo',
  primaryHref = '/demos',
  secondaryLabel = 'Talk to sales',
  secondaryHref = '/company/contact-sales',
  dark = false,
  className,
}: DemoCTAProps) {
  return (
    <section
      className={cn(
        'section-padding',
        dark ? 'bg-base-ink text-white' : 'bg-base-surface',
        className,
      )}
    >
      <div className="container-content text-center">
        <FadeInView>
          <h2
            className={cn(
              'font-display text-display-md',
              dark ? 'text-white' : 'text-neutral-900',
            )}
          >
            {headline}
          </h2>
          <p
            className={cn(
              'mx-auto mt-4 max-w-2xl text-body-lg',
              dark ? 'text-darkSection-textMuted' : 'text-neutral-600',
            )}
          >
            {subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant={dark ? 'dark' : 'primary'} size="lg" href={primaryHref}>
              {primaryLabel}
            </Button>
            <Button
              variant={dark ? 'ghost' : 'secondary'}
              size="lg"
              className={dark ? 'text-white hover:text-brand-300' : undefined}
              href={secondaryHref}
            >
              {secondaryLabel}
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
