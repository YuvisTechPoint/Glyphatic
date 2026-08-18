'use client'

import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'

const STATS = [
  {
    prefix: '',
    value: 'ONE',
    suffix: '',
    title: 'ONE TRANSFORMATION PARTNER',
    description: 'We don\'t hand you recommendations and disappear. We diagnose your business, design the transformation architecture, deploy the technology, implement the automation, operate critical functions where needed, and optimize continuously. You get one partner accountable for actual business outcomes—not just deliverables.',
  },
  {
    prefix: '',
    value: 'AI',
    suffix: ' +',
    title: 'AI + HUMAN INTELLIGENCE',
    description: 'AI and automation are powerful. But they don\'t replace strategic thinking, creative problem-solving, relationship management, or complex decision-making. They amplify them. Our model combines intelligent technology with expert human operations.',
  },
  {
    prefix: '',
    value: '∞',
    suffix: '',
    title: 'BUILT TO OPERATE AT SCALE',
    description: 'Most transformation projects fail during implementation or collapse after the consultants leave. Why? Because they weren\'t designed to operate in real business conditions. We build transformation systems engineered to run at scale in Indian and Asian market realities.',
  },
]

export function PlatformizationSection() {
  return (
    <section className="relative bg-white dark:bg-[#0a0a0a] pt-16 pb-[128px] overflow-hidden transition-colors duration-200">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle overlay to fade pattern at edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a]" />

      <div className="container-wide max-w-[1236px] relative z-10">
        <FadeInView>
          {/* Title Header Section */}
          <div className="py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
            <div className="max-w-[700px]">
              <span className="block text-[11px] font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
                WHY GLYPHATIC
              </span>
              <h2 className="text-[26px] md:text-[37.5px] font-medium leading-[1.4] text-neutral-900 dark:text-white mb-6">
                Transformation requires more than technology.
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
                Most consulting firms give you strategy documents. Most agencies give you campaigns. Most BPOs give you labor arbitrage. Most technology vendors give you software licenses. <strong>None of them transform your business.</strong>
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed font-semibold">
                Real transformation requires strategy, technology, implementation, operations, and continuous optimization working as one integrated system.
              </p>
            </div>
            
            <div className="shrink-0 mb-2">
              <Link 
                href="/why-glyphatic" 
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-[#FA582D] px-6 py-2.5 text-[14px] font-bold text-neutral-800 dark:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-[#FA582D]/10"
              >
                Our Transformation Approach
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-between min-h-[460px] md:min-h-[490px] rounded-[28px] border border-neutral-200 dark:border-white/[0.08] bg-neutral-50 dark:bg-[#121212] p-8 md:p-10 overflow-hidden shadow-2xl transition-colors duration-200"
              >
                {/* Top Right Orange Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.22)_0%,_transparent_60%)] pointer-events-none" />
                
                {/* Diagonal lines pattern overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(120,120,120,0.05), rgba(120,120,120,0.05) 1px, transparent 1px, transparent 20px)',
                    maskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 80%)'
                  }}
                />
                
                {/* Top Content: Numbers + Heading */}
                <div className="relative z-10">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-neutral-900 dark:text-white leading-[1.3] tracking-tight">
                    <span className="flex items-baseline flex-wrap gap-x-2.5 gap-y-1 mb-4">
                      {stat.prefix && (
                        <span className="text-[24px] md:text-[28px] font-bold text-neutral-900 dark:text-white tracking-tight">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="text-[3.75rem] md:text-[4.25rem] font-display font-bold text-[#FA582D] leading-[0.9] tracking-tight">
                        {stat.value}
                      </span>
                      {stat.suffix && (
                        <span className="text-[2.75rem] md:text-[3.25rem] font-display font-bold text-[#FA582D] leading-[0.9]">
                          {stat.suffix}
                        </span>
                      )}
                    </span>
                    <span className="block max-w-[280px]">{stat.title}</span>
                  </h3>
                </div>

                {/* Bottom Content: Description Paragraph */}
                <div className="relative z-10 mt-8 pt-4">
                  <p className="text-[14px] md:text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
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
