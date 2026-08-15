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
 <div className={cn('py-8 bg-gray-50', className)}>
 {title && (
 <p className="text-center text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-600 mb-8">
 {title}
 </p>
 )}
 <FadeInView>
 <div className="relative flex w-full overflow-hidden">
 {/* Left/Right Fade Masks */}
 <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent"></div>
 <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent"></div>
 
 <div className="animate-marquee flex w-max items-center justify-start gap-12 md:gap-16 lg:gap-24 py-4 pr-12 md:pr-16 lg:pr-24">
 {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
 <div
 key={`${logo.name}-${i}`}
 className="flex h-10 items-center justify-center px-4 opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-300 group cursor-default"
 >
 <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.15em] text-neutral-600 whitespace-nowrap select-none group-hover:text-neutral-900 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
 {logo.name}
 </span>
 </div>
 ))}
 </div>
 </div>
 </FadeInView>
 </div>
 )
}
