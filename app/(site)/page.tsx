import { HeroVideoSection } from '@/components/sections/home/HeroVideoSection'
import { PromoCarousel } from '@/components/sections/home/PromoCarousel'
import { AIWorldSection } from '@/components/sections/home/AIWorldSection'
import { PlatformizationSection } from '@/components/sections/home/PlatformizationSection'
import { PlatformTabsSection } from '@/components/sections/home/PlatformTabsSection'
import { DefendAtScaleSection } from '@/components/sections/home/DefendAtScaleSection'
import { Unit42Section } from '@/components/sections/home/Unit42Section'
import { AwardCarousel } from '@/components/sections/home/AwardCarousel'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { ServicesTabSection } from '@/components/sections/home/ServicesTabSection'
import { SolutionsTabSection } from '@/components/sections/home/SolutionsTabSection'
import { CustomerTransformationBanner } from '@/components/sections/home/CustomerTransformationBanner'
import { CustomerVideoSection } from '@/components/sections/home/CustomerVideoSection'
import { EngageGridSection } from '@/components/sections/home/EngageGridSection'
import { PerspectivesCarousel } from '@/components/sections/home/PerspectivesCarousel'
import { NewsletterSection } from '@/components/sections/home/NewsletterSection'

const GLOBAL_AWARDS = [
  { org: 'Gartner', name: '2025 Gartner® Magic Quadrant™ for Custom Software Engineering' },
  { org: 'Forrester', name: 'The Forrester Wave™: Modern Application Development, Q4 2025' },
  { org: 'Everest Group', name: 'PEAK Matrix® for Advanced IT Services 2025' },
  { org: 'GigaOm', name: 'A Leader in the GigaOm Radar for Cloud Native Engineering' },
  { org: 'IDC', name: 'IDC MarketScape: Worldwide Cloud Professional Services 2025' },
]

export default function Home() {
  return (
    <>
      <HeroVideoSection />
      <PromoCarousel />
      <AIWorldSection />
      <PlatformizationSection />
      <PlatformTabsSection />
      <DefendAtScaleSection />
      <Unit42Section />
      <TrustedByLogos title="Trusted by teams building what's next." />
      <AwardCarousel awards={GLOBAL_AWARDS} />
      <ServicesTabSection />
      <SolutionsTabSection />
      <CustomerTransformationBanner />
      <CustomerVideoSection />
      <EngageGridSection />
      <PerspectivesCarousel />
      <NewsletterSection />
    </>
  )
}
