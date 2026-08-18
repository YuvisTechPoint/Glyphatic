'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Database, 
  Layers, 
  LineChart, 
  Settings, 
  Shield, 
  Zap 
} from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function PlaceholderPage({ title }: { title: string }) {
  const pathname = usePathname()

  const getCategoryDetails = () => {
    if (pathname.includes('/products')) {
      return {
        badge: 'Product Ecosystem',
        tagline: 'Intelligent products engineered to make complex work simpler, faster, and more measurable.',
        intro: 'Glyphatic products turn transformation strategy into operating leverage. Each product is designed to work on its own, connect cleanly with your stack, and improve as your teams learn.',
        features: [
          { icon: Cpu, name: 'AI Integration', desc: 'Embedded intelligence that makes decisions, workflows, and insights more useful.' },
          { icon: Layers, name: 'Connected Architecture', desc: 'Composable systems that fit the way your teams already work.' },
          { icon: Shield, name: 'Enterprise Control', desc: 'Governance, security, and observability built into every layer.' },
        ],
        stats: ['Faster decisions', 'Lower operating friction', 'Built to compound'],
      }
    }
    if (pathname.includes('/solutions')) {
      return {
        badge: 'Transformation Solution',
        tagline: 'A practical path from strategic ambition to measurable business change.',
        intro: 'The right transformation is specific to your business. We connect leadership priorities to the technology, operating model, and people changes required to make progress visible and durable.',
        features: [
          { icon: Compass, name: 'Strategic Direction', desc: 'A clear future-state roadmap tied to the outcomes leadership cares about.' },
          { icon: Settings, name: 'Hands-on Delivery', desc: 'Senior operators and builders working inside the change, not around it.' },
          { icon: LineChart, name: 'Measured Progress', desc: 'A visible scorecard for adoption, efficiency, growth, and operational health.' },
        ],
        stats: ['Clearer priorities', 'Adopted by teams', 'Measured ROI'],
      }
    }
    if (pathname.includes('/industries') || pathname.includes('/industry')) {
      return {
        badge: 'Industry Expertise',
        tagline: 'Transformation designed around the realities of your sector.',
        intro: 'Every industry has different constraints, incentives, and definitions of risk. We combine domain understanding with modern technology to improve performance without losing the context that makes your business work.',
        features: [
          { icon: Shield, name: 'Responsible Change', desc: 'Modernize with the controls, compliance, and resilience your sector requires.' },
          { icon: Database, name: 'Modern Foundations', desc: 'Connect legacy systems to cleaner, more capable digital infrastructure.' },
          { icon: Zap, name: 'Domain Fluency', desc: 'Practical recommendations shaped by how your teams actually operate.' },
        ],
        stats: ['Context-first', 'Risk-aware', 'Ready to scale'],
      }
    }
    
    if (pathname.includes('/services') || pathname.includes('/unit42')) {
      return {
        badge: 'Glyphatic Services',
        tagline: 'The expertise and operating muscle to move from idea to impact.',
        intro: 'Our services bring strategy, technology, and execution together around the work that matters most. Start with a focused challenge, then build the capability to keep improving after launch.',
        features: [
          { icon: Compass, name: 'Find the Signal', desc: 'Clarify the opportunity, constraints, and first move that will create momentum.' },
          { icon: Settings, name: 'Build the System', desc: 'Design and implement workflows, technology, and operating rhythms that stick.' },
          { icon: Zap, name: 'Keep It Moving', desc: 'Operate, optimize, and transfer knowledge so progress compounds over time.' },
        ],
        stats: ['Senior-led', 'Execution-focused', 'Built for continuity'],
      }
    }

    return {
      badge: 'Glyphatic Intelligence',
      tagline: 'A sharper view of what is changing, what matters, and what to do next.',
      intro: 'Explore the thinking, frameworks, and practical resources behind modern business transformation. Every asset is built to help a leadership or delivery team make a better next decision.',
      features: [
        { icon: Layers, name: 'Proven Frameworks', desc: 'Structured approaches that make complex transformation easier to navigate.' },
        { icon: LineChart, name: 'Useful Intelligence', desc: 'Evidence and pattern recognition translated into clear decisions.' },
        { icon: CheckCircle2, name: 'Actionable Assets', desc: 'Playbooks, tools, and guidance your team can use immediately.' },
      ],
      stats: ['Practical by design', 'Built for leaders', 'Ready to apply'],
    }
  }

  const { badge, tagline, intro, features, stats } = getCategoryDetails()
  const relatedLinks = pathname.includes('/products')
    ? [{ label: 'Explore all products', href: '/products' }, { label: 'See our solutions', href: '/solutions' }]
    : pathname.includes('/services') || pathname.includes('/unit42')
      ? [{ label: 'View all services', href: '/services' }, { label: 'Meet Glyphatic', href: '/about-us' }]
      : [{ label: 'Why Glyphatic', href: '/why-glyphatic/platformization' }, { label: 'Start a conversation', href: '/company/contact-sales' }]

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] pt-24 transition-colors duration-300">
      <section className="relative overflow-hidden border-b border-neutral-200 pb-20 pt-16 dark:border-white/5 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(250,88,45,0.14),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.9),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_10%,rgba(250,88,45,0.16),transparent_32%),linear-gradient(135deg,rgba(17,19,24,0.8),transparent_60%)]" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FA582D]">
              <span className="h-px w-10 bg-[#FA582D]" />
              {badge}
            </div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">Glyphatic / {pathname.split('/').filter(Boolean).join(' / ') || 'home'}</p>
            <h1 className="mb-8 max-w-5xl font-display text-[3.25rem] font-bold leading-[1.03] tracking-tight text-neutral-900 dark:text-white md:text-[5.5rem]">
              {title}
            </h1>
            <p className="mb-10 max-w-3xl text-[1.25rem] font-medium leading-relaxed text-neutral-600 dark:text-neutral-300">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/company/contact-sales"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FA582D] px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#E0431A]"
              >
                Discuss with an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#details"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-8 py-4 text-[15px] font-bold text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white dark:border-white/5 dark:bg-[#111111]">
        <div className="container-wide grid grid-cols-1 divide-y divide-neutral-200 py-10 dark:divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <FadeInView key={stat} delay={index * 0.08} className="px-0 py-5 first:pt-0 last:pb-0 md:px-8 md:py-2 first:md:pl-0 last:md:pr-0">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">{stat}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">{['Direction', 'Delivery', 'Outcome'][index]}</p>
            </FadeInView>
          ))}
        </div>
      </section>

      <section id="details" className="border-b border-neutral-200 py-24 dark:border-white/5 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeInView>
              <p className="label-eyebrow mb-5">The Glyphatic approach</p>
              <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] text-neutral-900 dark:text-white md:text-[3rem]">
                Make the next move clearer, then make it real.
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                {intro}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We believe lasting capability requires more than recommendations. It requires a shared operating model, thoughtful technology, and the discipline to learn from the system once it is live.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24 dark:bg-[#0d0f13] md:py-32">
        <div className="container-wide">
          <FadeInView>
            <h2 className="font-display text-[2rem] md:text-[2.75rem] font-medium leading-[1.1] text-neutral-900 dark:text-white mb-16 text-center">
              What this unlocks
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeInView key={feature.name} delay={0.1 * i}>
                <div className="group h-full border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FA582D]/40 hover:shadow-lg dark:border-white/5 dark:bg-[#111111]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-neutral-100 transition-colors group-hover:bg-[#FA582D]/10 dark:bg-white/5">
                    <feature.icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300 group-hover:text-[#FA582D] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{feature.name}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-20 dark:border-white/5 dark:bg-[#111111]">
        <div className="container-wide">
          <FadeInView className="mx-auto max-w-4xl">
            <p className="label-eyebrow mb-5">Keep exploring</p>
            <h2 className="mb-8 max-w-3xl font-display text-[2.25rem] font-bold leading-tight text-neutral-900 dark:text-white md:text-[3rem]">
              Build momentum around the work that matters most.
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group inline-flex items-center gap-3 text-base font-bold text-neutral-900 dark:text-white">
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
