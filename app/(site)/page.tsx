import { HeroVideoSection } from '@/components/sections/home/HeroVideoSection'
import { PromoCarousel } from '@/components/sections/home/PromoCarousel'
import { DivisionsSection } from '@/components/sections/home/DivisionsSection'
import { JourneySection } from '@/components/sections/home/JourneySection'
import { DefendAtScaleSection } from '@/components/sections/home/DefendAtScaleSection'
import { FounderQuoteSection } from '@/components/sections/home/FounderQuoteSection'
import { EngageGridSection } from '@/components/sections/home/EngageGridSection'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { CustomerVideoSection } from '@/components/sections/home/CustomerVideoSection'
import { CustomerTransformationBanner } from '@/components/sections/home/CustomerTransformationBanner'
import { AwardCarousel } from '@/components/sections/home/AwardCarousel'
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
      <DivisionsSection />
      <JourneySection />
      <DefendAtScaleSection />
      <FounderQuoteSection />
      <EngageGridSection />
      <TrustedByLogos title="Trusted by teams building what's next." />
      <CustomerVideoSection />
      <CustomerTransformationBanner />
      <AwardCarousel awards={GLOBAL_AWARDS} />
      <PerspectivesCarousel />
      <NewsletterSection />
    </>
  )
}
