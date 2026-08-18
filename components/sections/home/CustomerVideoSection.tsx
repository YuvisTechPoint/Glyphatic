'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowRight, BookOpen, GraduationCap, Building2, Stethoscope, Landmark, ShoppingBag } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

interface Metric {
  value: string
  label: string
}

interface Testimonial {
  id: number
  quote: string
  name: string
  company: string
  industry: string
  icon: any
  metrics: Metric[]
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    quote: 'Implementing Edquate across our 15 schools automated our entire admissions workflow. We reduced admissions processing time by 70%, achieved 95% parent app adoption, and saw a 60% reduction in administrative workload.',
    name: 'Director of Admissions',
    company: 'Leading K-12 School Chain',
    industry: 'Education',
    icon: GraduationCap,
    metrics: [
      { value: '70%', label: 'Admissions Time Saved' },
      { value: '95%', label: 'Parent App Adoption' },
      { value: '60%', label: 'Admin Workload Cut' }
    ]
  },
  {
    id: 1,
    quote: 'Glyphatic redesigned our lead management process, implemented AI-powered qualification, and CRM. The result: 3x improvement in lead-to-visit conversion and a 35% reduction in sales cycle length.',
    name: 'VP of Sales & Marketing',
    company: 'Premium Residential Developer',
    industry: 'Real Estate',
    icon: Building2,
    metrics: [
      { value: '3x', label: 'Lead Conversion' },
      { value: '35%', label: 'Sales Cycle Reduction' },
      { value: '45%', label: 'Sales Productivity' }
    ]
  },
  {
    id: 2,
    quote: 'By automating our appointments and patient communications, we saw an 80% reduction in no-shows, a 50% improvement in patient satisfaction, and a 30% increase in patient retention.',
    name: 'Chief Operating Officer',
    company: 'Multi-Specialty Hospital Chain',
    industry: 'Healthcare',
    icon: Stethoscope,
    metrics: [
      { value: '80%', label: 'Reduction in No-Shows' },
      { value: '50%', label: 'CSAT Improvement' },
      { value: '30%', label: 'Patient Retention' }
    ]
  },
  {
    id: 3,
    quote: 'AI-powered credit scoring and document processing automated our loan applications. We saw a 60% reduction in loan processing time and a 90% reduction in compliance errors.',
    name: 'Head of Lending & Credit',
    company: 'Growing NBFC',
    industry: 'Financial Services',
    icon: Landmark,
    metrics: [
      { value: '60%', label: 'Loan Processing Speed' },
      { value: '90%', label: 'Compliance Error Cut' },
      { value: '40%', label: 'Credit Scoring Accuracy' }
    ]
  },
  {
    id: 4,
    quote: 'Optimizing our checkout experience and implementing AI recommendations reduced cart abandonment by 45%, increased repeat purchases by 55%, and optimized our inventory turnover by 35%.',
    name: 'Director of E-commerce',
    company: 'Fashion E-commerce Platform',
    industry: 'Retail & E-commerce',
    icon: ShoppingBag,
    metrics: [
      { value: '45%', label: 'Lower Cart Abandonment' },
      { value: '55%', label: 'Repeat Purchase Rate' },
      { value: '35%', label: 'Inventory Turnover' }
    ]
  },
]

const CUSTOMER_LOGOS = [
  'Salesforce', 'Infosys', 'Toyota', 'Panasonic', 'Colgate', 'Pfizer', 'Westfield', 'TriHealth', 'Maximus', 'Transgourmet', 'Sabre', 'ADT'
]

export function CustomerVideoSection() {
  const [activeId, setActiveId] = useState(0)
  const currentTestimonial = TESTIMONIALS[activeId]

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-[#06080C] relative overflow-hidden transition-colors duration-200">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.04)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(41,98,255,0.01)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(41,98,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <FadeInView>
          <div className="mb-16">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FA582D] mb-3">
              TRANSFORMATION IN ACTION
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-neutral-900 dark:text-white tracking-tight leading-none">
              Real Impact. <span className="text-[#FA582D]">Proven Outcomes.</span>
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Case Selector */}
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            {TESTIMONIALS.map((item) => {
              const Icon = item.icon
              const isActive = activeId === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    'group flex items-center gap-4 text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden',
                    isActive 
                      ? 'border-[#FA582D]/40 bg-neutral-50 dark:bg-[#121622] shadow-[0_8px_30px_rgba(250,88,45,0.06)] dark:shadow-[0_8px_30px_rgba(250,88,45,0.08)]' 
                      : 'border-neutral-200 dark:border-white/5 bg-[#F9FAFB]/40 dark:bg-[#0e111a]/40 hover:bg-neutral-100/40 dark:hover:bg-[#121622]/40 hover:border-neutral-300 dark:hover:border-white/10'
                  )}
                >
                  <div className={cn(
                    'h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors',
                    isActive ? 'bg-[#FA582D] text-[#0A0D14]' : 'bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'
                  )}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-neutral-900 dark:text-white tracking-wide leading-tight mb-1">
                      {item.company}
                    </h3>
                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      {item.industry}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute right-5 text-[#FA582D]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right Column: Detailed Impact Dashboard */}
          <div className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-3xl border border-neutral-200 dark:border-white/5 bg-neutral-50/80 dark:bg-[#121622]/60 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-xl dark:shadow-2xl min-h-[480px] flex flex-col justify-between"
              >
                {/* Large quote mark decor */}
                <div className="absolute top-8 right-8 opacity-[0.02] dark:opacity-[0.03] text-neutral-950 dark:text-white pointer-events-none select-none">
                  <Quote className="w-48 h-48" strokeWidth={1} />
                </div>

                <div>
                  {/* Top: Outcomes Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 md:gap-6 border-b border-neutral-200 dark:border-white/5 pb-8 mb-8">
                    {currentTestimonial.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[2.25rem] md:text-[3.25rem] font-display font-extrabold text-[#FA582D] leading-none tracking-tight mb-2">
                          {metric.value}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest leading-normal">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <p className="text-[1.125rem] md:text-[1.35rem] font-medium text-neutral-800 dark:text-white/90 leading-relaxed italic pr-8">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom: Client Profile Card */}
                <div className="mt-8 flex items-center gap-4 pt-8 border-t border-neutral-200 dark:border-white/5">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#FA582D] to-orange-400 flex items-center justify-center text-[#0A0D14] font-extrabold text-[16px] tracking-wider shadow-lg">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-neutral-900 dark:text-white tracking-wide">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                      {currentTestimonial.company} &middot; <span className="text-[#FA582D] font-medium">{currentTestimonial.industry}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Logo Marquee Section with Gradient Fades */}
        <div className="mt-20 relative w-full overflow-hidden py-4 border-y border-neutral-200 dark:border-white/5">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#06080C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#06080C] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 items-center justify-center shrink-0"
              >
                <span className="text-[12px] font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-[0.2em]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
