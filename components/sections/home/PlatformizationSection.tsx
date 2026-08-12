'use client'

import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'

const STATS = [
  {
    prefix: '',
    value: '90',
    suffix: ' %',
    title: 'reduction in MTTR',
    description: 'Drive innovation and digital transformation with AI.',
  },
  {
    prefix: 'up to ',
    value: '30.9',
    suffix: ' B',
    title: 'inline attacks blocked per day',
    description: 'Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.',
  },
  {
    prefix: '',
    value: '480',
    suffix: ' B',
    title: 'endpoints scanned daily',
    description: 'Enable better, faster security with an integrated suite of battle-tested, AI-driven products.',
  },
]

export function PlatformizationSection() {
  return (
    <section className="relative bg-[#0a0a0a] pt-16 pb-[128px] overflow-hidden">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle overlay to fade pattern at edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="container-wide max-w-[1236px] relative z-10">
        <FadeInView>
          {/* Title Header Section (64px padding, 603px title width, 37.5px font) */}
          <div className="py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
            <div className="max-w-[603px]">
              <span className="block text-[11px] font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
                WHY GLYPHATIC
              </span>
              <h2 className="text-[26px] md:text-[37.5px] font-medium leading-[1.4] text-white">
                Platformization empowers you to harness AI-ready infrastructure.{' '}
                <br className="hidden lg:block" />
                <span className="text-[#FA582D]">
                  And leverage services powered by Precision AI<sup className="text-xl">®</sup> to keep everything secure.
                </span>
              </h2>
            </div>
            
            <div className="shrink-0 mb-2">
              <Link 
                href="/why-glyphatic/platformization" 
                className="inline-flex items-center gap-2 rounded-full border border-[#FA582D] px-6 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-[#FA582D]/10"
              >
                See our platform approach
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-between min-h-[460px] md:min-h-[490px] rounded-[28px] border border-white/[0.08] bg-[#121212] p-8 md:p-10 overflow-hidden shadow-2xl"
              >
                {/* Top Right Orange Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.22)_0%,_transparent_60%)] pointer-events-none" />
                
                {/* Diagonal lines pattern overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 20px)',
                    maskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 80%)'
                  }}
                />
                
                {/* Top Content: Numbers + Heading */}
                <div className="relative z-10">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white leading-[1.3] tracking-tight">
                    <span className="flex items-baseline flex-wrap gap-x-2.5 gap-y-1 mb-4">
                      {stat.prefix && (
                        <span className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="text-[3.75rem] md:text-[4.25rem] font-display font-bold text-[#FA582D] leading-[0.9] tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[2.75rem] md:text-[3.25rem] font-display font-bold text-[#FA582D] leading-[0.9]">
                        {stat.suffix}
                      </span>
                    </span>
                    <span className="block max-w-[280px]">{stat.title}</span>
                  </h3>
                </div>

                {/* Bottom Content: Description Paragraph */}
                <div className="relative z-10 mt-8 pt-4">
                  <p className="text-[14px] md:text-[15px] text-neutral-400 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
