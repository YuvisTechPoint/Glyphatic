'use client'

import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'
import { Layers, AppWindow, BookOpen, Cpu, Award } from 'lucide-react'

interface Award {
  name: string
  org?: string
}

interface AwardCarouselProps {
  awards: Award[]
  className?: string
}

const ORG_ICONS: Record<string, any> = {
  'Methodology': Layers,
  'Platform': AppWindow,
  'Intelligence': BookOpen,
  'Approach': Cpu,
}

const ORG_GRADIENTS: Record<string, string> = {
  'Methodology': 'from-orange-500/20 to-brand-600/5 hover:border-orange-500/30',
  'Platform': 'from-blue-500/20 to-indigo-600/5 hover:border-blue-500/30',
  'Intelligence': 'from-emerald-500/20 to-teal-600/5 hover:border-emerald-500/30',
  'Approach': 'from-purple-500/20 to-pink-600/5 hover:border-purple-500/30',
}

const ORG_ACCENTS: Record<string, string> = {
  'Methodology': 'text-orange-400 bg-orange-500/10',
  'Platform': 'text-blue-400 bg-blue-500/10',
  'Intelligence': 'text-emerald-400 bg-emerald-500/10',
  'Approach': 'text-purple-400 bg-purple-500/10',
}

export function AwardCarousel({ awards, className }: AwardCarouselProps) {
  return (
    <section className={cn('section-padding bg-neutral-50 dark:bg-[#0A0D14] relative overflow-hidden transition-colors duration-200', className)}>
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(250,88,45,0.02)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(250,88,45,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(41,98,255,0.01)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(41,98,255,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <FadeInView>
          <div className="mb-12 text-center lg:text-left">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FA582D] mb-3">
              ANALYST RECOGNITION & CREDENTIALS
            </span>
            <h2 className="font-display text-[2.25rem] md:text-[2.75rem] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
              Recognized industry authority
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Glyphatic is certified and recognized across our transformation framework methodology, business platforms, and hybrid operational model.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {awards.map((award, i) => {
            const orgType = award.org || 'Methodology'
            const Icon = ORG_ICONS[orgType] || Award
            const gradient = ORG_GRADIENTS[orgType] || 'from-[#FA582D]/20 to-neutral-900/5'
            const accent = ORG_ACCENTS[orgType] || 'text-[#FA582D] bg-[#FA582D]/10'

            return (
              <FadeInView key={`${award.name}-${i}`} delay={i * 0.1}>
                <div
                  className={cn(
                    'group relative flex flex-col justify-between min-h-[220px] rounded-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-[#12141C] p-6 transition-all duration-300 ease-out shadow-sm dark:shadow-none',
                    'hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1',
                    'bg-gradient-to-br',
                    gradient
                  )}
                >
                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={cn('h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300', accent)}>
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                        {orgType}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-[15px] md:text-[16px] font-semibold text-neutral-900 dark:text-white leading-snug group-hover:text-[#FA582D] transition-colors duration-200">
                      {award.name}
                    </h3>
                  </div>

                  {/* Decorative subtle line at bottom */}
                  <div className="mt-4 w-full h-[1px] bg-neutral-100 dark:bg-white/5 group-hover:bg-[#FA582D]/20 transition-colors" />
                </div>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
