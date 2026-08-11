'use client'

import { cn } from '@/lib/utils'
import { FadeInView } from '@/components/animations/FadeInView'

interface LogoItem {
  name: string
}

interface TrustedByLogosProps {
  logos?: LogoItem[]
  title?: string
  className?: string
}

const DEFAULT_LOGOS: LogoItem[] = [
  { name: 'FinTech India' },
  { name: 'SaaS Innovators' },
  { name: 'HealthAI Corp' },
  { name: 'Global Media Group' },
  { name: 'Tech Mahindra' },
]

export function TrustedByLogos({ logos = DEFAULT_LOGOS, title, className }: TrustedByLogosProps) {
  return (
    <div className={cn('py-8', className)}>
      {title && (
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 mb-8">
          {title}
        </p>
      )}
      <FadeInView>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 items-center justify-center px-4 grayscale opacity-50 hover:opacity-80 transition-opacity"
            >
              <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.12em] text-neutral-500 whitespace-nowrap select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </FadeInView>
    </div>
  )
}
