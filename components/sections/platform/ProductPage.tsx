import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { PlatformHero } from '@/components/sections/platform/PlatformHero'
import { PlatformCTA } from '@/components/sections/platform/PlatformCTA'
import { DemoCTA } from '@/components/sections/shared/DemoCTA'
import { StatBannerRow } from '@/components/sections/shared/StatBannerRow'
import { FAQAccordion } from '@/components/sections/shared/FAQAccordion'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Stat {
 /** Numeric value passed to StatCounter */
 value: number
 label: string
 /** Optional suffix displayed after the number, e.g. '%', 'K', 'B' */
 suffix?: string
 /** Optional prefix displayed before the number, e.g. '$' */
 prefix?: string
 decimals?: number
}

export interface Feature {
 icon?: LucideIcon
 title: string
 description: string
 href?: string
}

export interface ProductPageProps {
 /** Eyebrow label e.g. "Strata™ Network Security" */
 eyebrow: string
 /** Main page title */
 title: string
 /** Page description */
 description: string
 /** Primary CTA — defaults to /demos */
 primaryCta?: { text: string; href: string }
 /** Secondary CTA — defaults to /company/contact-sales */
 secondaryCta?: { text: string; href: string }
 /** Key metrics to show in the stat banner */
 stats?: Stat[]
 /** Feature/benefit cards */
 features?: Feature[]
 /** FAQ entries */
 faqs?: { question: string; answer: string }[]
 /** Any extra JSX to inject between the feature grid and the FAQ */
 children?: ReactNode
 /** Override the bottom CTA headline */
 ctaHeadline?: string
}

// ─── Feature Grid (inline, no extra import needed) ───────────────────────────

function FeatureGrid({ features }: { features: Feature[] }) {
 return (
 <section className="section-padding bg-base-surface">
 <div className="container-content">
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {features.map((f) => (
 <div
 key={f.title}
 className="rounded-md border border-base-border bg-white p-6 shadow-card hover:shadow-hover transition-shadow duration-200"
 >
 {f.icon && (
 <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-50">
 <f.icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
 </span>
 )}
 <h3 className="mb-2 text-base font-semibold text-neutral-900">{f.title}</h3>
 <p className="text-body-sm text-neutral-600">{f.description}</p>
 {f.href && (
 <a
 href={f.href}
 className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-600"
 >
 Learn more →
 </a>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}

// ─── Main Template ────────────────────────────────────────────────────────────

/**
 * ProductPage — reusable template for all ~60 product/sub-product pages.
 * Composes: PlatformHero → StatBannerRow → FeatureGrid → children slot →
 * FAQAccordion → DemoCTA
 */
export function ProductPage({
 eyebrow,
 title,
 description,
 primaryCta = { text: 'Get a Demo', href: '/demos' },
 secondaryCta = { text: 'Contact Sales', href: '/company/contact-sales' },
 stats,
 features,
 faqs,
 children,
 ctaHeadline,
}: ProductPageProps) {
 return (
 <>
 {/* Hero */}
 <PlatformHero
 eyebrow={eyebrow}
 title={title}
 description={description}
 primaryCta={primaryCta}
 secondaryCta={secondaryCta}
 />

 {/* Stats */}
 {stats && stats.length > 0 && (
 <section className="section-padding bg-white">
 <div className="container-content">
 <StatBannerRow
 stats={stats.map((s) => ({
 value: s.value,
 label: s.label,
 suffix: s.suffix,
 prefix: s.prefix,
 decimals: s.decimals,
 }))}
 columns={stats.length <= 2 ? 2 : stats.length === 3 ? 3 : 4}
 />
 </div>
 </section>
 )}

 {/* Features */}
 {features && features.length > 0 && (
 <FeatureGrid features={features} />
 )}

 {/* Extra slot for page-specific sections */}
 {children}

 {/* FAQ */}
 {faqs && faqs.length > 0 && (
 <section className="section-padding bg-white">
 <div className="container-narrow">
 <h2 className="mb-10 text-center text-display-sm text-neutral-900">
 Frequently Asked Questions
 </h2>
 <FAQAccordion items={faqs} />
 </div>
 </section>
 )}

 {/* Bottom CTA */}
 <DemoCTA
 headline={ctaHeadline ?? `Ready to explore ${title}?`}
 subheadline="Talk to a Palo Alto Networks expert and see how we can help secure your organisation."
 primaryLabel={primaryCta.text}
 primaryHref={primaryCta.href}
 secondaryLabel={secondaryCta.text}
 secondaryHref={secondaryCta.href}
 />
 </>
 )
}
