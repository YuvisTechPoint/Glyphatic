import { HeroVideoSection } from '@/components/sections/home/HeroVideoSection'
import { PromoCarousel } from '@/components/sections/home/PromoCarousel'
import { AIWorldSection } from '@/components/sections/home/AIWorldSection'
import { PlatformizationSection } from '@/components/sections/home/PlatformizationSection'
import { PlatformTabsSection } from '@/components/sections/home/PlatformTabsSection'
import { DefendAtScaleSection } from '@/components/sections/home/DefendAtScaleSection'
import { AwardCarousel } from '@/components/sections/home/AwardCarousel'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { SolutionsTabSection } from '@/components/sections/home/SolutionsTabSection'
import { CustomerTransformationBanner } from '@/components/sections/home/CustomerTransformationBanner'
import { CustomerVideoSection } from '@/components/sections/home/CustomerVideoSection'
import { EngageGridSection } from '@/components/sections/home/EngageGridSection'
import { PerspectivesCarousel } from '@/components/sections/home/PerspectivesCarousel'
import { NewsletterSection } from '@/components/sections/home/NewsletterSection'

const GLOBAL_AWARDS = [
  { org: 'Methodology', name: 'The Glyphatic Transformation Framework — 7-Step Methodology' },
  { org: 'Platform', name: 'Mewayz — Business Operating System' },
  { org: 'Platform', name: 'Edquate — AI-Powered Education Intelligence' },
  { org: 'Intelligence', name: 'Glyphatic Intelligence — Research, Insights & Playbooks' },
  { org: 'Approach', name: 'AI + Human Intelligence Operating Model' },
]

export default function Home() {
  return (
    <>
      {/* 01. Hero */}
      <HeroVideoSection />
      {/* 02. Glyphatic Intelligence */}
      <PromoCarousel />
      {/* 03. The Business Shift */}
      <AIWorldSection />
      {/* 04. Why Glyphatic */}
      <PlatformizationSection />
      {/* 05. Core Capabilities */}
      <PlatformTabsSection />
      {/* 06. Solutions */}
      <DefendAtScaleSection />
      {/* 07. Products */}
      <SolutionsTabSection />
      {/* Trusted By */}
      <TrustedByLogos title="Trusted by teams driving transformation." />
      {/* Awards / IP */}
      <AwardCarousel awards={GLOBAL_AWARDS} />
      {/* 10. Case Studies Banner */}
      <CustomerTransformationBanner />
      {/* 11. Testimonials */}
      <CustomerVideoSection />
      {/* 09. Transformation Framework */}
      <EngageGridSection />
      {/* 14. Glyphatic Intelligence / Resources */}
      <PerspectivesCarousel />
      {/* 15. Executive CTA */}
      <NewsletterSection />
    </>
  )
}
