import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Heart, Lightbulb, Compass, Zap } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'About Us | Glyphatic',
  description: 'Glyphatic is an AI-native business transformation partner. Learn about our mission, vision, and values.',
}

const STATS = [
  { value: 'ONE', label: 'Transformation Partner' },
  { value: '9+', label: 'Industries Served' },
  { value: '7', label: 'Core Capability Areas' },
  { value: '7', label: 'Framework Steps' },
]

const VALUES = [
  {
    title: 'OUTCOMES OVER DELIVERABLES',
    description: 'We are accountable for business results, not project outputs. A successful transformation changes business performance, not PowerPoint slide count.',
    icon: Star,
  },
  {
    title: 'TRUTH OVER COMFORT',
    description: 'We tell you what you need to hear, not what you want to hear. If your strategy won\'t work, we\'ll say so. If your expectations are unrealistic, we\'ll tell you.',
    icon: Heart,
  },
  {
    title: 'EXECUTION OVER THEORY',
    description: 'Strategy matters, but execution determines outcomes. We build and operate, not just recommend.',
    icon: Zap,
  },
  {
    title: 'EXPERTISE OVER CREDENTIALS',
    description: 'We care about whether someone can solve your problem, not where they went to business school.',
    icon: Lightbulb,
  },
  {
    title: 'LONG-TERM OVER SHORT-TERM',
    description: 'We optimize for sustainable transformation, not quick wins that collapse after we leave.',
    icon: Compass,
  },
]

export default function AboutUsPage() {
  return (
    <main className="bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-200">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-200 dark:border-white/5 bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FA582D]/10 to-transparent opacity-50" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <p className="mb-4 text-[#FA582D] font-bold uppercase tracking-widest text-sm">About Glyphatic</p>
            <h1 className="mb-8 max-w-4xl font-display text-[3.5rem] md:text-[5rem] font-bold leading-[1.05] tracking-tight">
              Building the future of intelligent business.
            </h1>
            <p className="max-w-3xl text-xl text-neutral-400 mb-6 leading-relaxed">
              Glyphatic was founded on a simple observation: The way businesses operate is fundamentally changing. AI, automation, and intelligent technology are no longer future possibilities—they're operational realities. But most businesses across India and Asia are struggling to transform.
            </p>
            <p className="max-w-3xl text-lg text-neutral-400 leading-relaxed">
              We're not a consulting firm that hands you recommendations and walks away. We're a transformation partner that combines strategy, AI, technology, automation, human operations, and continuous optimization to deliver measurable business outcomes.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-neutral-200 dark:border-white/5 bg-white dark:bg-[#111111]">
        <div className="container-wide py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeInView key={s.label} delay={i * 0.1} className="text-center">
                <p className="text-[3rem] font-display font-bold text-[#FA582D] mb-2 leading-none">{s.value}</p>
                <p className="text-[13px] font-bold text-neutral-500 uppercase tracking-widest">{s.label}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32">
        <div className="container-wide grid md:grid-cols-2 gap-16 lg:gap-24">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white mb-8">
              Our Vision
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-medium">
              To become the transformation partner that powers India's intelligent business evolution. Every successful business in 2030 will operate differently. We are building Glyphatic to be the partner that makes this transformation accessible, practical, and successful for businesses across India and Asia.
            </p>
          </FadeInView>
          <FadeInView delay={0.2}>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-medium">
              Make intelligent transformation operational for Indian and Asian businesses:
            </p>
            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
              {['Strategic Clarity: Identify where AI, automation, and intelligent operations create value.',
                'Technology Excellence: Deploy world-class solutions adapted for Asian markets.',
                'Operational Impact: Deliver through implementation, operations, and optimization.',
                'Measurable Results: Create real business outcomes, not just deliverables.',
                'Knowledge Transfer: Build internal capabilities so transformation sustains.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-[#FA582D] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
              ))}
            </ul>
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#111111] border-t border-neutral-200 dark:border-white/5">
        <div className="container-wide">
          <FadeInView>
            <h2 className="mb-16 text-center font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white">
              Our Values
            </h2>
          </FadeInView>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <FadeInView key={v.title} delay={i * 0.1}>
                <div className="flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-[#151515] p-10 h-full transition-all hover:border-[#FA582D]/30 group shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FA582D]/10 transition-colors shadow-sm">
                    <v.icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300 group-hover:text-[#FA582D] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">{v.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">{v.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
