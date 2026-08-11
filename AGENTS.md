# 🛡️ SOFTWARE REQUIREMENTS SPECIFICATION
## Palo Alto Networks (India) Clone — Full-Stack Production Build
### Version 1.0 | Master Document for Cursor AI

---

> **Reference Site:** https://www.paloaltonetworks.in/
> **Visual References:** 21st.dev, motion.dev, v0.dev
> **Stack:** Next.js 14+ · TypeScript · Tailwind CSS · Framer Motion · Three.js / React Three Fiber · Sanity CMS · Prisma · PostgreSQL
> **Target:** Pixel-perfect, production-ready, enterprise-grade global cybersecurity marketing website with cinematic hero video, animated threat-stat dashboards, tabbed platform showcases, and massive mega-navigation

---

## ⚠️ SCOPE NOTE — READ FIRST

Palo Alto Networks' real site spans **thousands of pages** (every product, every sub-product, every industry, every region). This SRS defines a **faithful, fully-functional clone of the flagship experience**: the homepage, the primary mega-navigation architecture, and one fully-built representative page per major site section (Platform pillar page, Solution page, Industry page, Resource/Blog system, Company pages). The file/folder structure and CMS schema are built to **scale infinitely** — Cursor should follow the established page template pattern to generate any additional product/solution pages the user requests afterward. Do not attempt to hand-build all ~2,000 real pages in one pass; build the architecture + representative pages exactly as specified, and the pattern will repeat cleanly for the rest.

---

## TABLE OF CONTENTS

1. [Executive Summary & Brand Identity](#1-executive-summary--brand-identity)
2. [Complete Tech Stack](#2-complete-tech-stack)
3. [Full Project File Structure](#3-full-project-file-structure)
4. [Design System — Tokens, Typography, Spacing](#4-design-system--tokens-typography-spacing)
5. [3D Visuals & Animation System](#5-3d-visuals--animation-system)
6. [Global Layout Components — Mega Navigation](#6-global-layout-components--mega-navigation)
7. [Page-by-Page Specifications](#7-page-by-page-specifications)
8. [Component Library — Complete Spec](#8-component-library--complete-spec)
9. [Database Schema — Prisma](#9-database-schema--prisma)
10. [API Routes](#10-api-routes)
11. [CMS — Content Architecture](#11-cms--content-architecture)
12. [SEO Architecture](#12-seo-architecture)
13. [Performance Requirements](#13-performance-requirements)
14. [Localization / Multi-Region Architecture](#14-localization--multi-region-architecture)
15. [Deployment Architecture](#15-deployment-architecture)
16. [Environment Variables](#16-environment-variables)
17. [Implementation Order](#17-implementation-order)
18. [Final Acceptance Checklist](#18-final-acceptance-checklist)

---

## 1. EXECUTIVE SUMMARY & BRAND IDENTITY

### What We're Building
A pixel-perfect, production-grade clone of the **paloaltonetworks.in** marketing site — a global enterprise cybersecurity company's flagship web presence. This is the largest and most structurally complex of the three reference builds: massive mega-navigation, video-driven hero storytelling, animated statistic counters proving scale ("30.9B inline attacks blocked per day"), tabbed multi-platform showcases, award/analyst-recognition carousels, and a sprawling resource/content ecosystem (blog, Cyberpedia glossary, Unit 42 threat research, newsroom).

Elevate the clone with:
- **Cinematic looping background video** in the hero (MP4, muted/autoplay) with animated stat overlays
- **3D threat-network visualization** — an animated globe with attack-vector arcs, representing "30.9B inline attacks blocked per day"
- **Scroll-linked stat counters** that roll up dramatically as sections enter viewport
- **Multi-level mega-navigation** (6 top-level menus: Products, Solutions, Services, Industries, Partners, Resources) with rich preview cards
- **Tabbed platform showcase** (4 tabs: Network Security / SecOps / Cloud Security / Identity Security) with animated stat panels and analyst-award carousels
- **Logo trust-bar marquees** repeated contextually per platform tab
- **"Here for you" persona grid** (Executives / Specialists / Partners / Customers) with tabbed content switching

### Brand Identity (from live site)
- **Company:** Palo Alto Networks, Inc.
- **Tagline (site-wide):** "The Global Cybersecurity Leader"
- **Current hero campaign:** "Control the chaos. Secure every identity." — introducing **Idira®**, next-gen identity security platform
- **Mission statement:** "We are the global cybersecurity leader. Our mission is to protect our way of life in the digital age by preventing successful cyberattacks."
- **Core concept:** "Platformization" — AI-ready infrastructure secured by **Precision AI®** across four platforms: Network Security (Strata™), Security Operations (Cortex®), Cloud Security (Cortex Cloud / Prisma Cloud), Identity Security (Idira®)
- **Tone:** Authoritative, data-driven, enterprise-grade, urgent-but-controlled ("chaos" framing balanced by "control")
- **Visual identity:** White/light backgrounds with occasional near-black dramatic sections, signature **orange (#FA582D-ish)** accent color, clean sans-serif type, dense card grids, heavy use of real customer logos and analyst-award badges
- **Twitter/X:** @PaloAltoNtwks
- **Region:** India site (paloaltonetworks.in), English (IN) locale, no pricing shown (enterprise B2B sales-assisted model)
- **Copyright:** © 2026 Palo Alto Networks. All Rights Reserved.

### Key Stats (from live site — must be replicated exactly)
```
AI TRANSFORMATION (The Good News):
  78%   — growth in AI usage in last 12 months (~1.5x)
  94%   — enterprises using gen AI software

ATTACKER ESCALATION (The Bad News) — YoY 2023:
  56%   — increase in exploited zero days
  73%   — increase in ransomware attacks
  56%   — increase in data breaches and leaks

PLATFORMIZATION IMPACT:
  90%   — reduction in MTTR (mean time to resolution)
  30.9B — inline attacks blocked per day
  480B  — endpoints scanned daily

NETWORK SECURITY (Strata):
  95%   — of the Fortune 100 (customers)
  70K   — customers
  13x   — recognized network security leader

SECURITY OPERATIONS (Cortex):
  700+  — partner integrations
  480B  — endpoints scanned daily
  15x   — leader from Code to Cloud to SOC

CLOUD SECURITY (Cortex Cloud):
  90%   — risk reduction with shift left
  25x   — reduction in alerts & remediation workflows

IDENTITY SECURITY (Idira):
  10K   — customers
  55%   — of the Fortune 500

UNIT 42 (Threat Intel & IR):
  1K+   — matters per year
  24/7/365 — incident response availability
  200+  — threat researchers
  30M   — malware samples analyzed per day
  1K+   — incident response engagements a year
  150+  — trusted partner of law firms
```

### Named Customer Logos (recreate as logo assets/placeholders)
Westfield, TriHealth, Village Roadshow, US Signals, Salesforce, Infosys, Schlumberger, Grupo Bimbo, Toyota, Carnival Corporation, Maximus, Northern Trust, Transgourmet, Panasonic, Colgate, Grant Thornton, Invest Bank, Sabre, ADT, Resolution Life, Dish, Caesar's, Flex, AutoNation, Aaron's, Pfizer, NBC Universal

### Major Product/Platform Brand Names (must use exact naming)
- **Strata™** — Network Security Platform
- **Cortex®** — AI-Driven Security Operations Platform (includes Cortex XSIAM, Cortex XDR, Cortex XSOAR, Cortex Xpanse)
- **Cortex Cloud** — Real-time Cloud Security (formerly Prisma Cloud)
- **Idira®** — Next-Generation Identity Security Platform (Human, Machine, Agentic identities)
- **Prisma SASE / Prisma Access / Prisma Browser / Prisma SD-WAN**
- **Prisma AIRS** — AI security (agents, models, data)
- **Unit 42®** — Threat Intelligence & Incident Response
- **Precision AI®** — the underlying AI engine branding across all platforms
- **PAN-OS / Panorama** — firewall OS and management

---

## 2. COMPLETE TECH STACK

### Frontend
```
Framework:          Next.js 14+ (App Router, RSC, Streaming, Parallel Routes for mega-nav)
Language:           TypeScript 5.x (strict mode)
Styling:            Tailwind CSS 3.x + CSS custom properties
Animations:         Framer Motion 11.x
3D / WebGL:         Three.js 0.165+ + @react-three/fiber + @react-three/drei
Video:              Native HTML5 video with IntersectionObserver-gated autoplay
Data Viz:           D3.js (animated counters, arc/threat-map visualizations)
Icons:              Lucide React + custom brand SVG icon set
Fonts:              Inter Variable (body) + a bold geometric sans for display (fallback: Manrope)
Forms:              React Hook Form 7.x + Zod 3.x
State:              Zustand 4.x + React Context
UI Primitives:      Radix UI (NavigationMenu is critical here — mega-menu backbone)
Rich Text:          next-mdx-remote (blog, Cyberpedia articles)
Carousel:           embla-carousel-react (award badges, logo walls, persona tabs)
```

### Backend
```
API:                Next.js App Router Route Handlers
Database ORM:       Prisma 5.x
Database:           PostgreSQL 16
Auth:               NextAuth.js v5 (CMS/admin only — public site has no user accounts)
Email:              Resend + React Email
File Storage:       Cloudinary (logos, award badges, hero video posters)
Search:             Algolia (global site search — spans products, blog, Cyberpedia, resources)
Rate Limiting:      Upstash Redis
```

### CMS / Content
```
Platform:           Sanity.io v3
  - Products, Solutions, Industries, Blog Posts, Cyberpedia Articles,
    Press Releases, Events, Customer Stories, Awards/Analyst Reports
  - GROQ queries, Portable Text, real-time preview
  - Webhook → /api/revalidate for ISR
  - Embedded Studio at /studio
```

### DevOps / Analytics
```
Hosting:            Vercel (Enterprise-tier equivalent: Edge Network, high concurrency)
DB Hosting:         Supabase (PostgreSQL, pooled connections)
Analytics:          Google Analytics 4 + Google Tag Manager (dataLayer event architecture)
Search:             Algolia (typo-tolerant global search across all content types)
Error Tracking:     Sentry
Monitoring:         Vercel Analytics + Speed Insights
CI/CD:              GitHub Actions → Vercel
```

### Key npm Packages
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "three": "^0.165.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "d3": "^7.9.0",
    "@types/d3": "^7.4.0",
    "@sanity/client": "^6.15.0",
    "next-sanity": "^9.0.0",
    "next-mdx-remote": "^4.4.1",
    "rehype-highlight": "^7.0.0",
    "remark-gfm": "^4.0.0",
    "prisma": "^5.14.0",
    "@prisma/client": "^5.14.0",
    "next-auth": "^5.0.0-beta",
    "resend": "^3.2.0",
    "@react-email/components": "^0.0.21",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.4.0",
    "zustand": "^4.5.0",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "lucide-react": "^0.378.0",
    "algoliasearch": "^4.23.0",
    "react-instantsearch": "^7.7.0",
    "embla-carousel-react": "^8.1.0",
    "embla-carousel-autoplay": "^8.1.0",
    "next-sitemap": "^4.2.3",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "date-fns": "^3.6.0",
    "reading-time": "^1.5.0",
    "sharp": "^0.33.4",
    "@upstash/redis": "^1.31.0",
    "@upstash/ratelimit": "^1.2.1"
  }
}
```

---

## 3. FULL PROJECT FILE STRUCTURE

```
panw-clone/
│
├── app/
│   ├── layout.tsx                            # Root: fonts, GTM dataLayer, global schema
│   ├── globals.css
│   ├── not-found.tsx
│   ├── error.tsx
│   │
│   ├── (site)/                               # Public marketing site route group
│   │   ├── layout.tsx                        # Header (mega-nav) + Footer
│   │   ├── page.tsx                          # Homepage /
│   │   │
│   │   ├── network-security/
│   │   │   ├── page.tsx                      # Platform pillar page (Strata)
│   │   │   ├── next-generation-firewall/page.tsx
│   │   │   ├── hardware-firewall-innovations/page.tsx
│   │   │   ├── software-firewalls/page.tsx
│   │   │   ├── strata-cloud-manager/page.tsx
│   │   │   ├── sd-wan-subscription/page.tsx
│   │   │   ├── pan-os/page.tsx
│   │   │   ├── panorama/page.tsx
│   │   │   ├── security-subscriptions/page.tsx
│   │   │   ├── advanced-threat-prevention/page.tsx
│   │   │   ├── advanced-url-filtering/page.tsx
│   │   │   ├── advanced-wildfire/page.tsx
│   │   │   ├── advanced-dns-security/page.tsx
│   │   │   ├── enterprise-device-security/page.tsx
│   │   │   ├── medical-device-security/page.tsx
│   │   │   ├── strengthen-your-network-security-foundation/page.tsx
│   │   │   ├── simplify-network-security-management/page.tsx
│   │   │   └── protect-your-extended-network/page.tsx
│   │   │
│   │   ├── sase/
│   │   │   ├── page.tsx                      # Prisma SASE pillar
│   │   │   ├── access/page.tsx                # Prisma Access
│   │   │   ├── prisma-browser/page.tsx
│   │   │   ├── sd-wan/page.tsx
│   │   │   ├── app-acceleration/page.tsx
│   │   │   ├── adem/page.tsx
│   │   │   ├── enterprise-data-loss-prevention/page.tsx
│   │   │   ├── remote-browser-isolation/page.tsx
│   │   │   ├── saas-security/page.tsx
│   │   │   ├── ai-access-security/page.tsx
│   │   │   └── secure-work-on-any-device/page.tsx
│   │   │
│   │   ├── ai-security/
│   │   │   ├── page.tsx                      # AI Security pillar
│   │   │   └── prisma-airs/page.tsx
│   │   │
│   │   ├── cortex/
│   │   │   ├── page.tsx                      # SecOps platform pillar
│   │   │   ├── cortex-xsiam/page.tsx
│   │   │   ├── cortex-xdr/page.tsx
│   │   │   ├── cortex-xsoar/page.tsx
│   │   │   ├── cortex-xpanse/page.tsx
│   │   │   ├── managed-detection-and-response/page.tsx
│   │   │   ├── managed-xsiam/page.tsx
│   │   │   ├── fight-ai-with-ai/page.tsx
│   │   │   └── cloud/
│   │   │       ├── page.tsx                  # Cortex Cloud pillar
│   │   │       ├── application-security/page.tsx
│   │   │       ├── cloud-posture-security/page.tsx
│   │   │       └── runtime-security/page.tsx
│   │   │
│   │   ├── prisma/
│   │   │   └── cloud/page.tsx                # Legacy Prisma Cloud redirect page
│   │   │
│   │   ├── idira/
│   │   │   ├── page.tsx                      # Identity Security pillar
│   │   │   ├── human/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── privileged-access-management/page.tsx
│   │   │   │   ├── identity-and-access-management/page.tsx
│   │   │   │   ├── endpoint-privilege-manager/page.tsx
│   │   │   │   ├── identity-governance/page.tsx
│   │   │   │   ├── workforce-password-management/page.tsx
│   │   │   │   └── vendor-privileged-access/page.tsx
│   │   │   ├── machine/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── secrets-management/page.tsx
│   │   │   │   ├── unified-secrets-governance/page.tsx
│   │   │   │   └── application-credentials-delivery/page.tsx
│   │   │   ├── agentic/page.tsx
│   │   │   └── 2025-magic-quadrant-report-for-pam/page.tsx
│   │   │
│   │   ├── unit42/
│   │   │   ├── page.tsx                      # Unit 42 pillar
│   │   │   ├── retainer/page.tsx
│   │   │   ├── incident-response/page.tsx
│   │   │   ├── assess/page.tsx
│   │   │   ├── respond/
│   │   │   │   ├── page.tsx
│   │   │   │   └── managed-detection-response/page.tsx
│   │   │   ├── threat-intelligence-partners/page.tsx
│   │   │   ├── transform/page.tsx
│   │   │   ├── contact-unit42/page.tsx
│   │   │   └── combat-risks-frontier-ai/page.tsx
│   │   │
│   │   ├── industry/
│   │   │   ├── public-sector/page.tsx
│   │   │   ├── financial-services/page.tsx
│   │   │   ├── manufacturing/page.tsx
│   │   │   ├── healthcare/page.tsx
│   │   │   └── small-medium-business-portfolio/page.tsx
│   │   │
│   │   ├── why-paloaltonetworks/
│   │   │   ├── platformization/page.tsx
│   │   │   ├── cyber-predictions/page.tsx
│   │   │   └── nam-cxo-portfolio/page.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── education/page.tsx
│   │   │   └── customer-success-tools/page.tsx
│   │   │
│   │   ├── partners/
│   │   │   ├── page.tsx
│   │   │   ├── nextwave-partner-portal-login/page.tsx
│   │   │   └── managed-security-services-provider-program/page.tsx
│   │   │
│   │   ├── customers/page.tsx
│   │   ├── demos/page.tsx
│   │   ├── get-started/page.tsx
│   │   │
│   │   ├── resources/
│   │   │   ├── page.tsx                      # Content Library
│   │   │   └── research/
│   │   │       └── unit-42-incident-response-report/page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [year]/[month]/[slug]/page.tsx  # matches /blog/2026/05/slug pattern
│   │   │
│   │   ├── perspectives/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   │
│   │   ├── cybersecurity-perspectives/
│   │   │   └── cyber-perspectives-magazine/page.tsx
│   │   │
│   │   ├── cyberpedia/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   │
│   │   ├── communities/page.tsx
│   │   │
│   │   ├── company/
│   │   │   ├── contact-sales/page.tsx
│   │   │   ├── press/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [year]/[slug]/page.tsx
│   │   │   └── newsroom/page.tsx
│   │   │
│   │   ├── about-us/
│   │   │   ├── page.tsx
│   │   │   ├── corporate-responsibility/page.tsx
│   │   │   ├── locations/page.tsx
│   │   │   └── executive-briefing-program/page.tsx
│   │   │
│   │   ├── products/
│   │   │   └── products-a-z/page.tsx
│   │   │
│   │   ├── podcasts/
│   │   │   └── threat-vector/page.tsx
│   │   │
│   │   ├── quantum-safe/page.tsx
│   │   ├── tomorrow-secured/page.tsx
│   │   │
│   │   ├── legal-notices/
│   │   │   ├── privacy/page.tsx
│   │   │   ├── terms-of-use/page.tsx
│   │   │   └── trust-center/
│   │   │       ├── page.tsx
│   │   │       └── compliance/page.tsx
│   │   ├── legal/page.tsx
│   │   ├── security-disclosure/page.tsx
│   │   └── sitemap/page.tsx
│   │
│   ├── studio/[[...tool]]/page.tsx
│   │
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── contact-sales/route.ts
│       ├── demo-request/route.ts
│       ├── newsletter/route.ts
│       ├── search/route.ts
│       ├── revalidate/route.ts
│       └── partner-application/route.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.tsx                        # Top bar + mega nav trigger
│   │   ├── MegaNav.tsx                       # Full mega-navigation system (6 menus)
│   │   ├── MegaNavPanel.tsx                  # Individual dropdown panel (Products/Solutions/etc.)
│   │   ├── MegaNavColumn.tsx                 # Column of links within a panel
│   │   ├── MegaNavFeatured.tsx               # Featured promo card within panel
│   │   ├── SearchOverlay.tsx                 # Full-screen search modal (Algolia)
│   │   ├── LanguageSelector.tsx              # Region/language dropdown
│   │   ├── MobileNav.tsx                     # Mobile accordion mega-nav
│   │   ├── PromoStrip.tsx                    # "RECOMMENDED" scrolling promo carousel
│   │   └── Footer.tsx                        # Massive multi-column footer
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Modal.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Spinner.tsx
│   │   └── AwardBadge.tsx                    # Analyst recognition badge component
│   │
│   ├── 3d/
│   │   ├── SceneCanvas.tsx
│   │   ├── ThreatGlobe.tsx                   # 3D globe with attack-arc animations
│   │   ├── DataParticleField.tsx
│   │   ├── NetworkMesh.tsx                   # Abstract node network (for platform tabs)
│   │   └── ShieldMesh.tsx                    # Abstract 3D shield/security visual
│   │
│   ├── animations/
│   │   ├── FadeUp.tsx
│   │   ├── FadeIn.tsx
│   │   ├── StaggerChildren.tsx
│   │   ├── SlideIn.tsx
│   │   ├── CountUp.tsx
│   │   ├── TextReveal.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── ParallaxSection.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── charts/
│   │   ├── CircularProgress.tsx
│   │   ├── StatCounter.tsx                   # Large rolling number w/ suffix (78%, 30.9B, etc.)
│   │   └── ArcThreatMap.tsx                  # D3 arc lines on abstract map projection
│   │
│   ├── sections/
│   │   │
│   │   ├── home/
│   │   │   ├── HeroVideoSection.tsx          # Full-bleed looping video hero
│   │   │   ├── PromoCarousel.tsx             # "RECOMMENDED" horizontal scroll cards
│   │   │   ├── AIWorldSection.tsx            # "Good news / bad news" stat comparison w/ video bg
│   │   │   ├── PlatformizationSection.tsx    # 3-stat "Why PANW" banner
│   │   │   ├── PlatformTabsSection.tsx       # 4-tab platform showcase (huge section)
│   │   │   ├── AwardCarousel.tsx             # Analyst recognition logo carousel
│   │   │   ├── TrustedByLogos.tsx            # Customer logo bar (contextual per tab)
│   │   │   ├── ServicesTabSection.tsx        # Unit 42 services single-tab section
│   │   │   ├── SolutionsTabSection.tsx       # 7-tab "Secure whatever wherever" section
│   │   │   ├── CustomerVideoSection.tsx      # Featured customer video testimonial
│   │   │   ├── EngageGridSection.tsx         # "Here for you" 4-persona tab + 12-card grid
│   │   │   ├── PerspectivesCarousel.tsx      # Thought leadership article carousel
│   │   │   └── NewsletterSection.tsx
│   │   │
│   │   ├── platform/                         # Shared across pillar pages (Network Security, Cortex, etc.)
│   │   │   ├── PlatformHero.tsx
│   │   │   ├── PlatformStatBanner.tsx
│   │   │   ├── ProductGrid.tsx               # Sub-product card grid
│   │   │   ├── CapabilityTabs.tsx
│   │   │   ├── AnalystAwardsSection.tsx
│   │   │   ├── CustomerStoriesSection.tsx
│   │   │   ├── ComparisonTable.tsx           # Feature comparison matrix
│   │   │   ├── FAQSection.tsx
│   │   │   └── PlatformCTA.tsx               # "Get demo" / "Contact sales" CTA banner
│   │   │
│   │   ├── industry/
│   │   │   ├── IndustryHero.tsx
│   │   │   ├── IndustryChallenges.tsx
│   │   │   ├── IndustrySolutions.tsx
│   │   │   ├── IndustryCaseStudies.tsx
│   │   │   └── IndustryCompliance.tsx        # Regulatory/compliance callouts
│   │   │
│   │   └── shared/
│   │       ├── StatBannerRow.tsx             # Reusable N-stat row w/ CountUp
│   │       ├── AwardBadgeGrid.tsx
│   │       ├── LogoMarquee.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── ResourceCard.tsx
│   │       ├── FAQAccordion.tsx
│   │       ├── DemoCTA.tsx
│   │       └── NewsletterInline.tsx
│   │
│   ├── forms/
│   │   ├── ContactSalesForm.tsx
│   │   ├── DemoRequestForm.tsx
│   │   ├── PartnerApplicationForm.tsx
│   │   └── NewsletterForm.tsx
│   │
│   ├── resources/
│   │   ├── ArticleCard.tsx
│   │   ├── BlogPostCard.tsx
│   │   ├── PressReleaseCard.tsx
│   │   ├── CyberpediaCard.tsx
│   │   ├── ContentLibraryFilters.tsx         # Massive faceted filter UI (type, topic, industry)
│   │   ├── ArticleBody.tsx
│   │   ├── TableOfContents.tsx
│   │   └── RelatedResources.tsx
│   │
│   └── search/
│       ├── SearchInput.tsx
│       ├── SearchResults.tsx
│       └── SearchResultCard.tsx
│
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── sanity.ts
│   ├── sanity.queries.ts
│   ├── sanity.image.ts
│   ├── email.ts
│   ├── algolia.ts
│   ├── utils.ts
│   ├── validations.ts
│   ├── animations.ts
│   ├── nav-data.ts                           # Static mega-nav structure (large config object)
│   └── constants.ts
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   ├── useMediaQuery.ts
│   ├── useCountUp.ts
│   ├── useVideoAutoplay.ts                   # IntersectionObserver-gated video play/pause
│   ├── useMegaNavState.ts                    # Open/close/hover-intent state for nav
│   └── usePrefersReducedMotion.ts
│
├── sanity/
│   ├── sanity.config.ts
│   ├── schemaTypes/
│   │   ├── product.ts
│   │   ├── solution.ts
│   │   ├── industryPage.ts
│   │   ├── blogPost.ts
│   │   ├── author.ts
│   │   ├── category.ts
│   │   ├── cyberpediaArticle.ts
│   │   ├── pressRelease.ts
│   │   ├── customerStory.ts
│   │   ├── award.ts                          # Analyst recognition entries
│   │   ├── event.ts
│   │   └── blockContent.ts
│   └── components/
│       └── StudioLogo.tsx
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│
├── public/
│   ├── images/
│   │   ├── logo-dark.svg
│   │   ├── logo-light.svg
│   │   ├── favicon.png
│   │   ├── og-image.png
│   │   ├── customers/                        # All named customer logos
│   │   ├── awards/                           # Analyst award badge graphics
│   │   └── team/
│   ├── videos/
│   │   ├── homepage-hero-bg.mp4
│   │   ├── stat-teaser-bg.mp4
│   │   └── homepage-hero-bg-mobile.mp4
│   ├── models/
│   │   └── threat-globe.glb
│   └── fonts/
│       ├── Manrope-Variable.woff2
│       └── Inter-Variable.woff2
│
├── content/
│   └── legal/
│       ├── privacy.mdx
│       ├── terms-of-use.mdx
│       └── trust-center.mdx
│
├── styles/
│   └── globals.css
│
├── types/
│   ├── index.ts
│   ├── sanity.ts
│   └── database.ts
│
├── middleware.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── postcss.config.js
└── README.md
```

---

## 4. DESIGN SYSTEM — TOKENS, TYPOGRAPHY, SPACING

### 4.1 Color Palette

```typescript
// tailwind.config.ts

colors: {
  // ── Base (light-first design — opposite of typical dark-mode SaaS themes)
  base: {
    white:     '#FFFFFF',
    surface:   '#F7F7F8',   // Light gray section backgrounds
    elevated:  '#FFFFFF',
    ink:       '#0B0C0E',   // Near-black for dramatic dark sections (hero, CTA)
    inkAlt:    '#111318',   // Slightly lighter dark section variant
    border:    '#E5E5E7',
    borderDark:'#26272B',
  },

  // ── Brand Orange (primary accent)
  brand: {
    50:  '#FFF3EE',
    100: '#FFE1D2',
    200: '#FFC0A3',
    300: '#FF9868',
    400: '#FA6A38',
    500: '#FA582D',   // ← Primary PANW orange
    600: '#E0431A',
    700: '#B93712',
    800: '#8F2B0E',
    900: '#6B200A',
  },

  // ── Secondary Teal/Cyan (theme-color meta from live site: #8ad3de)
  teal: {
    100: '#E3F7F9',
    300: '#A9E4EA',
    500: '#8AD3DE',   // ← Secondary accent, used sparingly (icon backgrounds, highlights)
    700: '#4FA6B3',
  },

  // ── Neutrals
  neutral: {
    0:   '#FFFFFF',
    50:  '#FAFAFA',
    100: '#F2F2F3',
    200: '#E5E5E7',
    300: '#D4D4D8',
    400: '#A3A3AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#0B0C0E',
  },

  // ── Semantic
  success: '#1B8A5A',
  warning: '#D97706',
  error:   '#DC2626',
  info:    '#0EA5E9',

  // ── Dark section (hero / stat-teaser) variant text colors
  darkSection: {
    text:       '#FFFFFF',
    textMuted:  '#A3A3AA',
    accentText: '#FF9868',   // lighter orange for readability on black
  }
}
```

### 4.2 Typography

```typescript
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],           // Body copy, UI
  display: ['Manrope', 'Inter', 'sans-serif'],              // Headlines — bold geometric
  mono:    ['JetBrains Mono', 'monospace'],                 // Stat labels, technical tags
}

fontSize: {
  'display-2xl': ['4rem',    { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
  'display-xl':  ['3.25rem', { lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '800' }],
  'display-lg':  ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.015em',fontWeight: '700' }],
  'display-md':  ['2.25rem', { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' }],
  'display-sm':  ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],

  'stat-xl':     ['4.5rem',  { lineHeight: '1',    letterSpacing: '-0.02em', fontWeight: '800' }], // "30.9B" style
  'stat-lg':     ['3rem',    { lineHeight: '1',    letterSpacing: '-0.015em',fontWeight: '800' }],
  'stat-md':     ['2.25rem', { lineHeight: '1',    fontWeight: '700' }],

  'body-xl':     ['1.25rem', { lineHeight: '1.65', fontWeight: '400' }],
  'body-lg':     ['1.125rem',{ lineHeight: '1.6',  fontWeight: '400' }],
  'body-md':     ['1rem',    { lineHeight: '1.6',  fontWeight: '400' }],
  'body-sm':     ['0.875rem',{ lineHeight: '1.5',  fontWeight: '400' }],
  'label':       ['0.6875rem',{ lineHeight: '1.3', fontWeight: '700', letterSpacing: '0.08em' }], // ALL-CAPS eyebrow labels
}
```

### 4.3 Spacing & Layout

```
Max content width:      1280px
Wide (hero/tabs):       1440px
Narrow (article):       760px

Section vertical padding:  py-16 lg:py-24 xl:py-28
Container horizontal:      px-4 sm:px-6 lg:px-10

Card radius:    rounded-lg (10px) — tighter corners than typical consumer SaaS
Button radius:  rounded-sm to rounded-md (4-6px) — square-ish, corporate, NOT pill-shaped
                (this is a key visual differentiator vs. typical SaaS marketing sites)
Input radius:   rounded-md (6px)

Border default: 1px solid var(--base-border)
Shadow card:    0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)
Shadow hover:   0 8px 24px rgba(0,0,0,0.12)
Shadow nav:     0 12px 32px rgba(0,0,0,0.15)
```

### 4.4 CSS Custom Properties

```css
@layer base {
  :root {
    --bg-white:      #FFFFFF;
    --bg-surface:    #F7F7F8;
    --bg-ink:        #0B0C0E;
    --bg-ink-alt:    #111318;

    --text-primary:    #18181B;
    --text-secondary:  #52525B;
    --text-muted:      #A3A3AA;
    --text-inverse:    #FFFFFF;
    --text-inverse-muted: #A3A3AA;

    --brand-primary:   #FA582D;
    --brand-hover:     #E0431A;
    --accent-teal:     #8AD3DE;

    --border-default:  #E5E5E7;
    --border-dark:      #26272B;

    --shadow-card:      0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08);
    --shadow-hover:      0 8px 24px rgba(0,0,0,0.12);
    --shadow-nav:        0 12px 32px rgba(0,0,0,0.15);

    --ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1);
    --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);
    --transition-base:  all 0.2s var(--ease-out-expo);
  }
}

/* Dark hero video section overlay */
.hero-video-overlay {
  background: linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.75) 100%);
}

/* Orange gradient text (used sparingly, e.g. big campaign headline accents) */
.text-gradient-brand {
  background: linear-gradient(120deg, #FA582D, #FF9868);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 5. 3D VISUALS & ANIMATION SYSTEM

### 5.1 Three.js Scene Components

#### ThreatGlobe.tsx — Signature 3D Element
```tsx
// Represents "30.9B inline attacks blocked per day" — a rotating globe with
// animated arc lines representing blocked attack vectors traveling and being
// intercepted mid-arc (visualized as a spark/flash where the "block" happens)

// Implementation:
//   - Base: wireframe sphere (low-poly, THREE.IcosahedronGeometry or SphereGeometry wireframe)
//     Color: neutral-300 lines at 40% opacity (light theme) or teal at 30% (dark sections)
//   - Landmass dots: instanced points approximating continents (optional simplified world map texture)
//   - Attack arcs: ~15-20 concurrent QuadraticBezierCurve3 arcs between random surface points
//     Color: brand orange (#FA582D), animated draw-in with a bright leading point
//     Mid-arc "block" event: arc stops partway, flashes, and fades (represents interception)
//   - New arcs spawn continuously (staggered intervals, 300-800ms apart)
//   - Globe auto-rotates slowly: 0.001 rad/frame on Y axis
//   - Used in: Homepage "Platformization" section background, Network Security pillar hero

// Camera: position [0,0,6], fov 40
// Lighting: ambient 0.6 + directional white light for shading
// Performance: hidden on mobile, dynamic import ssr:false, dpr [1,1.5]
```

#### NetworkMesh.tsx
```tsx
// Abstract node-edge mesh for platform tab backgrounds (SecOps, Cloud, Identity tabs)
// Simpler than ThreatGlobe — a flat/near-flat plane of interconnected nodes
// Nodes pulse in sequence suggesting "unified data" (Cortex XSIAM concept)
// Color-coded per active tab (blue=network, purple=secops, green=cloud, orange=identity)
```

#### ShieldMesh.tsx
```tsx
// Abstract 3D shield form built from extruded/faceted geometry
// Subtle rotation + breathing scale animation
// Used in: Idira (Identity) pillar hero, Unit 42 hero
// Material: MeshPhysicalMaterial with slight transmission/glass effect, orange rim light
```

### 5.2 Video Hero System

```tsx
// components/sections/home/HeroVideoSection.tsx
//
// Structure:
//   <video> full-bleed background, object-fit: cover, muted, loop, playsInline, autoPlay
//   Poster image shown until video loads (prevents flash of empty black)
//   Dark gradient overlay (.hero-video-overlay) for text legibility
//   Content (headline, subhead, CTAs) positioned absolute, z-index above overlay
//
// useVideoAutoplay hook:
//   - IntersectionObserver: pauses video when scrolled out of view (perf + battery)
//   - Respects prefers-reduced-motion: shows static poster frame instead of playing video
//   - Mobile: swaps to a lighter/shorter mobile-optimized video source or falls back to poster only
//
// Headline: "Control the chaos.\nSecure every identity."
//   Font: Manrope 800, display-2xl, white
//   Animation: TextReveal (word-by-word), staggered
//
// Subheadline: "Introducing Idira®, the next-generation identity security
//   platform that secures every identity for the AI enterprise."
//   Font: Inter 400, body-xl, neutral-200
//
// CTAs:
//   Primary: "Discover Idira" → /idira (brand orange button, rounded-md — NOT pill)
//   Secondary: "Read the launch blog" → ghost/underline link style
```

### 5.3 D3-Powered Data Visualizations

#### StatCounter.tsx
```tsx
// Large rolling number component used extensively across the site
// Props: value (number), suffix ('%','B','K','x'), prefix, decimals, label, duration
// Examples to support:
//   78 + '%'          → "78%"
//   30.9 + 'B'         → "30.9B"
//   480 + 'B'          → "480B"
//   70 + 'K'           → "70K"
//   13 + 'x'           → "13x"
//   90 + '%'           → "90%"
// Animation: useInView triggers CountUp from 0 → value, duration 1.6s, easeOut
// Typography: stat-xl / stat-lg / stat-md per context (hero stats larger than card stats)
```

#### ArcThreatMap.tsx
```tsx
// D3-based 2D fallback/supplement to ThreatGlobe for lighter sections
// Simplified world map (SVG path, equirectangular projection, low detail)
// Animated arc lines connecting random coordinate pairs, drawn with stroke-dashoffset
// Used in: smaller inline contexts where full 3D globe is too heavy (e.g. card backgrounds)
```

### 5.4 Framer Motion Animation Library

```typescript
// lib/animations.ts

import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } }
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
}

// Tab content crossfade (platform tabs, solutions tabs, persona tabs)
export const tabPanel: Variants = {
  hidden:  { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, x: -12, transition: { duration: 0.2 } }
}

// Tab underline indicator — use Framer Motion layoutId for shared-element sliding underline
// <motion.div layoutId="tab-underline" className="..." />

// Award carousel — continuous auto-scroll marquee (paired with embla-carousel-autoplay)

// Mega-nav panel entrance
export const navPanel: Variants = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.12 } }
}

// Card hover
export const cardHover = {
  y: -4,
  boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
  transition: { type: 'spring', stiffness: 380, damping: 28 }
}
```

### 5.5 CSS Animations

```css
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes pulseNode {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.3); }
}

@keyframes arcFlash {
  0%   { opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes videoFadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes shimmerBadge {
  0%   { background-position: -150% 0; }
  100% { background-position: 150% 0; }
}
```

---

## 6. GLOBAL LAYOUT COMPONENTS — MEGA NAVIGATION

### 6.1 Header.tsx / MegaNav.tsx — Complete Specification

This is the most structurally complex component on the site. Build it as a config-driven system (`lib/nav-data.ts`) so content editors (and Cursor, on follow-up prompts) can extend it without touching component code.

```
Position: Sticky top-0, z-index 100
Height: 72px desktop / 60px mobile
Background: white, border-bottom 1px var(--border-default)
  (Header is opaque from the start — no transparent-hero blend, since hero video
   sits BELOW the header, not behind it)

Logo (left): Palo Alto Networks wordmark SVG, dark version, ~180px wide, links to /

Top-level menu items (6): Products | Solutions | Services | Industries | Partners | Resources
  Each: Radix NavigationMenu.Trigger, font-medium 15px, neutral-800
  Hover/open state: brand-orange bottom border indicator (2px), text color unchanged
  Click/hover-intent: opens full-width mega panel below header (not a small dropdown —
    it's a large panel spanning most of viewport width)

Right-side utility icons:
  Search icon → opens SearchOverlay (full-screen modal)
  "EN" language selector → opens LanguageSelector dropdown (region/language picker)
  "Support" link → external support portal
  "Demos and Trials" CTA button → /get-started (brand orange, rounded-md, filled)

── MegaNavPanel structure (generic, reused per top-level item) ──────────────

Panel container:
  Full-width (or centered max-w-[1280px]), positioned absolute below header
  Background: white, shadow-nav, border-top 1px var(--border-default)
  Padding: py-10 px-10
  Grid layout: 3-5 columns depending on menu (columns = MegaNavColumn components)
  Rightmost column often reserved for a MegaNavFeatured promo card (image + headline + CTA)

MegaNavColumn:
  Column heading (uppercase, label style, neutral-500) e.g. "AI-Powered Network Security Platform"
  List of links below, each: icon (optional, 16px) + link text
  Link hover: text color → brand-orange, subtle left-padding shift (4px) transition

MegaNavFeatured:
  Card with background image or solid brand color
  Small label ("FEATURED" or category tag)
  Headline (2 lines max)
  CTA link with arrow icon
  Used for promoting: Idira launch, Prisma AIRS 3.0, latest Unit 42 report, etc.

── PRODUCTS MENU — full column structure (mirrored in footer) ───────────────

Column 1 — AI-Powered Network Security Platform:
  AI-Powered Network Security Platform (heading link)
  Secure AI by Design
  Prisma AIRS
  AI Access Security
  Cloud Delivered Security Services
  Advanced Threat Prevention
  Advanced URL Filtering
  Advanced WildFire
  Advanced DNS Security
  Enterprise Data Loss Prevention
  Enterprise IoT Security
  Medical IoT Security
  Industrial OT Security
  SaaS Security

Column 2 — Firewalls & SASE:
  Next-Generation Firewalls
  Hardware Firewalls
  Software Firewalls
  Strata Cloud Manager
  SD-WAN for NGFW
  PAN-OS
  Panorama
  Secure Access Service Edge
  Prisma SASE
  Application Acceleration
  Autonomous Digital Experience Management
  Enterprise DLP
  Prisma Access
  Prisma Browser
  Prisma SD-WAN
  Remote Browser Isolation
  SaaS Security

Column 3 — SecOps & Cloud:
  AI-Driven Security Operations Platform
  Cloud Security (Cortex Cloud)
  Application Security
  Cloud Posture Security
  Cloud Runtime Security
  Prisma Cloud
  AI-Driven SOC
  Cortex XSIAM
  Cortex XDR
  Cortex XSOAR
  Cortex Xpanse
  Unit 42 Managed Detection & Response
  Managed XSIAM

Column 4 — Identity Security:
  Next-Generation Identity Security
  Privileged Access Management
  Identity and Access Management
  Endpoint Privilege Manager
  Identity Governance
  Workforce Password Management
  Agentic Identities
  Secrets Management
  Unified Secrets Governance
  Application Credentials Delivery
  Vendor Privileged Access

Column 5 (Featured card):
  Promotes current campaign — e.g. Idira launch banner

── SOLUTIONS MENU (maps to homepage "Secure whatever, wherever" 7 tabs) ─────

Column 1 — Secure Your AI Ecosystem:
  Secure AI apps, agents, models, and data at every step (→ Prisma AIRS)
  Secure the use of GenAI applications in the enterprise (→ AI Access Security)

Column 2 — Secure Your Network:
  Secure the whole enterprise consistently
  Apply AI inline to prevent evasive threats
  Simplify network security operations
  Adopt Zero Trust across the network
  Reduce complexity with AI-powered SASE
  Secure work on any device

Column 3 — Secure Your Cloud:
  The future of real-time cloud, today
  Stop risks at the source
  Rapidly prioritize and remediate risks across any cloud
  Prevent cloud attacks in real-time
  Detect, investigate and respond to threats across enterprise and cloud

Column 4 — Secure Your Identities:
  Close the access gaps attackers walk through
  Secure machine identities at the scale AI demands
  Secure agentic identities to accelerate AI innovation
  Discover and govern every entitlement
  Eliminate standing privilege

Column 5 — Automate Your SOC:
  Reign in security operations with one platform
  Accelerate threat detection and response
  Deliver security at speed and scale with automation
  Secure and shrink your attack surface

Column 6 — By Industry:
  Public sector | Financial services | Manufacturing | Healthcare | SMB

── SERVICES MENU ─────────────────────────────────────────────────────────────

  Threat Intel and Incident Response Services (Unit 42)
  Proactive Assessments
  Incident Response
  Transform Your Security Strategy
  Discover Threat Intelligence
  Education and Training
  Customer Success Tools

── INDUSTRIES MENU ───────────────────────────────────────────────────────────

  Public Sector | Financial Services | Manufacturing | Healthcare | SMB

── PARTNERS MENU ─────────────────────────────────────────────────────────────

  Partner Portal (login)
  Become a Partner
  Managed Services Program
  NextWave Partner Program overview

── RESOURCES MENU ────────────────────────────────────────────────────────────

  Blog | Communities | Content Library | Cyberpedia | Event Center |
  Products A-Z | Product Certifications | Report a Vulnerability |
  Tech Docs | Unit 42 (research site) | Newsroom

Animation: navPanel variant (opacity + y, 180ms). Hover-intent delay: 150ms before
  opening (prevents flicker on fast mouse pass), 300ms delay before closing.
  Implemented via useMegaNavState hook with setTimeout debouncing.

Mobile MegaNav:
  Hamburger → full-screen overlay
  Top-level items as accordion triggers; expanding reveals column content stacked vertically
  Search + language selector + CTA buttons pinned at bottom
```

### 6.2 PromoStrip.tsx — "RECOMMENDED" Carousel

```
Positioned directly below hero video, above the fold transition
Horizontal scrolling card strip (embla-carousel, drag + arrow nav)
Each card: small thumbnail/icon + eyebrow label + title + "Watch/Read/See" CTA link
Cards from live site:
  "Frontier AI" — Combat Risks from Frontier AI Models — Watch on demand
  "Intent to Acquire Portkey" — Palo Alto Networks to Acquire Portkey — Read the Press Release
  "Fight AI with AI" — See what's possible
  "Introducing Prisma AIRS 3.0" — Read the blog
  "tomorrow secured" — Defining the future of AI and quantum — Watch now
  "Attacks are happening 4x faster. Are you ready?" — Get the Unit 42 IR Report
  "Unit 42 Managed XSIAM 2.0" — See what's new
  "Quantum-Safe Summit" — Watch the summit
Card style: compact, border, white bg, small thumbnail image left, text right
Auto-scroll: subtle continuous drift, pauses on hover/interaction
```

### 6.3 Footer.tsx — Complete Specification

```
Background: white with border-top
Layout: 2 large columns (Products and Services | Company) + newsletter row above

Newsletter row (top of footer):
  "Get the latest news, invites to events, and threat alerts"
  Email input + "Sign up" button (inline, horizontal on desktop)
  Consent text: "By submitting this form, I understand my personal data will be
    processed in accordance with Palo Alto Networks Privacy Statement and Terms of Use."
    (both inline links)

Column group 1 — "Products and Services" (very long list, sub-grouped internally):
  Mirrors the full Products mega-nav column content (all ~50 product links)
  Rendered as a dense multi-sub-column layout (3-4 internal columns within this section)

Column group 2 — "Company":
  About Us | Careers | Contact Us | Corporate Responsibility | Customers |
  Investor Relations | Location | Newsroom

Column group 3 — "Popular Links":
  Blog | Communities | Content Library | Cyberpedia | Event Center |
  Manage Email Preferences | Products A-Z | Product Certifications |
  Report a Vulnerability | Sitemap | Tech Docs | Unit 42 |
  Do Not Sell or Share My Personal Information

Bottom bar:
  Logo (small)
  Legal links: Privacy | Trust Center | Terms of Use | Documents
  "Copyright © 2026 Palo Alto Networks. All Rights Reserved"
  Social icons: YouTube | Podcast | Facebook | LinkedIn | Twitter/X
  Region selector: "IN — Select your language" (repeats language selector from header)

Typography: all footer links body-sm, neutral-500 → neutral-900 hover
Heading labels: label style (uppercase, letter-spaced, neutral-400)
```

---

## 7. PAGE-BY-PAGE SPECIFICATIONS

---

### 7.1 HOMEPAGE (/) — Complete Section-by-Section

#### Section 1: Hero Video (see 5.2 HeroVideoSection.tsx spec above)
```
Full-bleed video bg: /videos/homepage-hero-bg.mp4
H1: "Control the chaos. Secure every identity."
Subhead: "Introducing Idira®, the next-generation identity security platform
  that secures every identity for the AI enterprise."
CTA primary: "Discover Idira" → /idira
CTA secondary: "Read the launch blog" → /blog/2026/05/idira-journey-democratize-privilege-controls/
```

#### Section 2: Promo Strip (see 6.2)
```
Horizontal RECOMMENDED carousel, 8 cards, positioned directly under hero
```

#### Section 3: A New AI World (Good News / Bad News)

```
Background: white transitioning to dark video section
Layout: Split into two visual "chapters" within one scroll section

Chapter A — "THE GOOD NEWS":
  Eyebrow: "THE GOOD NEWS" (label style, neutral-500)
  H2: "AI is rapidly transforming your organization"
  2 stat call-outs:
    "78%" — "~1.5X growth in usage in last 12 months"
    "94%" — "development enterprises using gen AI software"
  Stat style: StatCounter component, stat-lg size

Chapter B — "THE BAD NEWS" (dark video background section):
  Video bg: /videos/stat-teaser-bg.mp4 (looping, muted)
  Overlay: dark gradient for text legibility
  Eyebrow: "THE BAD NEWS" (label style, orange on dark)
  H2 (white): "Attackers are supercharging their speed and scale."
  3 stat cards (dark themed, white text, orange numbers):
    "56%" — "INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)"
    "73%" — "INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)"
    "56%" — "INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)"

Animation: StatCounter CountUp triggers per card on scroll entry, staggered 150ms apart
Layout: cards in a row desktop, stacked mobile
```

#### Section 4: Platformization (Why PANW)

```
Background: white
Eyebrow: "WHY PALO ALTO NETWORKS"
H2: "Platformization empowers you to harness AI-ready infrastructure. And
  leverage services powered by Precision AI® to keep everything secure."
CTA: "See our platform approach" → /why-paloaltonetworks/platformization

3 stat/benefit cards (icon + big stat + description):
  1. "90% reduction in MTTR" — "Drive innovation and digital transformation with AI."
  2. "up to 30.9B inline attacks blocked per day" — "Proactively monitor, analyze and
     prevent sophisticated threats in real time with less complexity, enabling secure
     growth and innovation for your organization."
  3. "480B endpoints scanned daily" — "Enable better, faster security with an
     integrated suite of battle-tested, AI-driven products."

Background decoration: ThreatGlobe.tsx 3D canvas, subtle, positioned right/behind cards
```

#### Section 5: Platform Tabs Section (MASSIVE — core homepage feature)

```
H2: "Introducing the Platforms, powered by Precision AI"

4 tabs (Radix Tabs, underline indicator via layoutId):
  Tab 1: "AI-Powered Network Security"
  Tab 2: "AI-Driven Security Operations"
  Tab 3: "Real-Time Cloud Security"
  Tab 4: "Next-Generation Identity Security"

Each tab panel contains (full template, reused 4x):
  H3: platform name
  Body paragraph (platform description)
  2 stat call-outs (StatCounter)
  Primary CTA: "Explore [Platform]" → platform pillar page
  "Nx [category] leader" badge + "See all" link → opens AwardBadgeGrid modal/expansion
  AwardBadgeGrid: horizontal scroll of analyst award badge images (Gartner MQ, Forrester
    Wave, etc.) — see full list per tab below
  "Trusted by the best" — LogoMarquee of 5 customer logos (contextual per tab)

── TAB 1: AI-Powered Network Security ──
  Body: "Securing everyone and everything from the latest threats in every location.
    Built for Zero Trust and powered by AI, the Strata™ Network Security Platform
    proactively monitors, analyzes and prevents sophisticated threats in real time
    with less complexity, enabling secure growth and innovation for your organization."
  Stats: "95% of the Fortune 100" | "70K Customers"
  CTA: "Explore Network Security" → /network-security
  Badge: "13x network security leader" + "See all"
  Awards (13): 2025 Gartner MQ for Hybrid Mesh Firewall | 2025 Gartner MQ for SASE
    Platforms | Forrester Wave: Enterprise Firewall Solutions | Gartner MQ for
    Single-Vendor SASE | Gartner MQ for Network Firewalls | Gartner MQ for SD-WAN |
    ABI Research Industrial FW Competitive Assessment | Gartner MQ for Security
    Service Edge | Forrester Wave: OT Security Solutions | Forrester New Wave: ZTNA |
    Forrester New Wave: Zero Trust Platform Providers | Frost Radar: Zero Trust
    Browser Security | Frost & Sullivan Healthcare IoMT Radar
  Logos: Westfield, TriHealth, Village Roadshow, US Signals, Salesforce

── TAB 2: AI-Driven Security Operations ──
  Body: "Transform the SOC and enable better, faster security with the #1 AI-driven
    SecOps platform powered by unified data, artificial intelligence and automation."
  Stats: "700+ partner integrations" | "480B Endpoints scanned daily"
  CTA: "Explore SecOps" → /cortex
  Badge: "15x Leader from Code to Cloud to SOC" + "See all"
  Awards (4): 2024 Gartner MQ for Endpoint Protection Platforms | Forrester
    Cybersecurity IR Services Wave | Frost & Sullivan MDR Radar | Forrester Wave:
    Extended Detection And Response Platforms Q2 2024
  Logos: Infosys, Schlumberger, Grupo Bimbo, Better, Toyota

── TAB 3: Real-Time Cloud Security ──
  Body: "See more, remediate faster, and prevent what others miss with independent,
    multi-cloud protection on the only platform that merges the industry's leading
    CNAPP with best-in-class CDR."
  Stats: "90% risk reduction with shift left" | "25x reduction in alerts & remediation workflows"
  CTA: "Explore Cloud Security" → /cortex/cloud
  Badge: "See all" (no leading Nx claim on this tab)
  Awards (8): GigaOm Radar for CIEM (Leader/Outperformer) | First-Ever CNAPP Report
    Leader | Forrester Wave: Cloud Workload Security Q1 2024 | Frost Radar: CSPM 2024 |
    Frost Radar CNAPP Leader | Leadership Compass: SOAR | KuppingerCole Leadership
    Compass: Attack Surface Management | GigaOm Radar 2024: Supply Chain Security Leader

── TAB 4: Next-Generation Identity Security ──
  Body: "Idira secures every identity for the enterprise - human, machine and
    agentic - with a unified control plane that discovers risk, applies privilege
    dynamically, and governs the full lifecycle from first access to final session."
  Stats: "10K Customers" | "55% OF THE FORTUNE 500"
  CTA: "Explore Identity Security" → /idira
  Badge: "See all" (features 1 highlighted award: Magic Quadrant for PAM 2025, linked)
  Awards (9): Magic Quadrant for PAM 2025 (linked) | Forrester Wave: Privileged
    Identity Management 2025 | Leadership Compass: Access Management 2025 |
    Leadership Compass: Identity Threat Detection & Response 2025 | Frost Radar:
    Key & Secrets Management 2025 | Leadership Compass: Passwordless Auth
    Enterprises 2026 | Leadership Compass: Passwordless Auth B2C 2026 | Leadership
    Compass: Enterprise Secrets Management 2025 | Leadership Compass: PAM 2025 |
    Radar for PAM 2025
  Logos: Carnival Corporation, Maximus, Northern Trust, Transgourmet, Panasonic

Tab switch animation: tabPanel variant (crossfade + slight x-shift), underline
  indicator slides via shared layoutId
AwardBadgeGrid: horizontal scroll row, each badge ~120×80px card, grayscale-ish
  award logos on white cards, subtle border
```

#### Section 6: Intelligence-driven. Response-ready. (Unit 42 single-tab section)

```
H2: "Intelligence-driven. Response-ready."
Single tab: "Threat Intel & Incident Response"
Body: "Unit 42's world-renowned threat researchers, elite incident responders and
  expert security consultants will guide you with a threat-informed approach
  before, during and after an incident."
Stats (2 lead + 4 supporting):
  "1K+ MATTERS PER YEAR" | "24/7/365 incident response"
  "200+ threat researchers" | "30M malware samples analyzed per day" |
  "1K+ incident response engagements a year" | "150+ trusted partner of law firms"
CTA: "Explore Unit 42" → /unit42
Logos: Colgate, Grant Thornton, Invest Bank, Sabre, ADT
```

#### Section 7: Secure Whatever, Wherever (7-tab Solutions section)

```
H2: "Secure whatever, whenever, wherever — with less complexity."

7 tabs: Secure Your AI ecosystem | Secure your network | Secure your cloud |
  Secure Your Identities | Automate your SOC | Threat intel and incident
  response services | Solutions by industry

Each tab: background image + bulleted link list (content per tab specified in
  section 6.1 "SOLUTIONS MENU" above — same content, presented as a large visual
  tab panel with background imagery instead of a nav dropdown)

Layout: tab triggers as horizontal scrollable pill row (7 items, may wrap on tablet)
Panel: full-width background image with dark overlay, bullet links overlaid in
  white text, each link has a right-chevron icon
```

#### Section 8: Customer Video Testimonial

```
H2: "Our customers are securing their digital transformation"
Link: "See testimonials" → /customers
Large video player (recreate as native <video> with custom play button overlay,
  or embed placeholder iframe)
Below: LogoMarquee — Resolution Life, Better, Dish, Salesforce, Caesar's, Flex,
  AutoNation, Aaron's, Pfizer, NBC Universal, Schlumberger, Grupo Bimbo
```

#### Section 9: Here for You. Here for What's Next. (Persona Grid)

```
H2: "Here for you. Here for what's next."

4 persona tabs: Executives | Specialists | Partners | Customers
(Tabs filter/highlight relevant cards in the 12-card grid below — recreate as a
 filterable grid)

13 cards (icon/image + title + description + CTA link):
  1. "Ignite on Tour" — "Meet decision-makers, experts and practitioners for a day
     of hands-on learning, strategy building and networking." → "Attend our global roadshow"
  2. "Executive Briefing Center" — "Get a customized plan to see how our platforms,
     threat intelligence and expert services help you secure the way forward." →
     "Plan a collaborative discussion"
  3. "Under Attack? We're Here." — "Unit 42® Incident Response explains the breach,
     works with you to contain and remedy it, and gets you back to business." →
     "Our experts are standing by"
  4. "AI-powered security platforms" — "Expert advice and insights for using
     AI-powered solutions to streamline your security posture and mitigate risk." →
     "Get expert insights"
  5. "Product Demo Center" — "Visit the demo center to see solution experts walk
     you through our comprehensive cybersecurity portfolio in action." →
     "Take our products for a spin"
  6. "Future-proof your Security" — "Meet the trusted, proven and awarded products
     that make a positive difference in your security and business outcomes." →
     "Get to know our products"
  7. "Events Around the World" — "Browse all scheduled global events by
     cybersecurity technology interest, industry, region, use case and more." →
     "Join us in person or online"
  8. "Partner Portal" — "Don't try to tackle security challenges alone. Tap into
     the world's most interoperable cloud and AI security platform." →
     "Log into our partner interface"
  9. "Become a Partner" — "Be part of a global community of world-class innovators
     committed to making security breaches a thing of the past." →
     "Apply to our partner community"
  10. "Managed Services Program" — "Provide managed security services that reduce
      cost, increase average revenue per customer and maximize market reach." →
      "Experience specialized tech"
  11. "Customer Login" — "Security, performance and ease of use: Three qualities
      our customers like most about our cybersecurity products." → "Sign in"
  12. "Education and Training" — "Expand your wisdom and skills with world-class
      training, certification and accreditation, including digital learning." →
      "Learn from security experts"
  13. "Customer Success Tools" — "Guidance, oversight and 24/7 support from
      cybersecurity experts to help expedite your setup and initial configuration." →
      "Make the most of our resources"

Grid: 3 columns desktop, 2 tablet, 1 mobile
Card style: image/icon top, title, description, arrow-link CTA at bottom
Persona filter (optional interactive layer): clicking a persona tab
  highlights/reorders relevant cards using Framer Motion layout animations
```

#### Section 10: Perspectives Carousel (Thought Leadership)

```
H2: "Staying ahead demands perspectives you can trust."
Link: "View all" → /perspectives/
Carousel (prev/next arrows), cards:
  1. "ARTICLE" — "Securing Your AI-Powered Network Transformation: A Guide for
     C-Suite Leaders" — thumbnail: hacking code image
  2. "ARTICLE" — "A New Era of Cybersecurity with AI" — thumbnail: Unit 42
     incident response report
  3. "ARTICLE" — "When It Comes to Cyber Resilience and AI, Be Sure to Stretch
     the Limits of Your Imagination" — thumbnail: State of Cloud-Native Security
     Report 2023
  4. "MAGAZINE" — "Quarterly thought leadership on the issues that matter most
     to cybersecurity executives" — thumbnail: Cyber Perspectives Magazine

Card style: category badge (ARTICLE/MAGAZINE), thumbnail image, title, subtitle
```

#### Section 11: Newsletter Signup

```
"Get the latest news, invites to events, and threat alerts"
Email input + "Sign up" button
Consent text with Privacy Statement + Terms of Use links
POST → /api/newsletter
```

---

### 7.2 PLATFORM PILLAR PAGE TEMPLATE — /network-security (Strata)

```
This is the master template for ALL platform pillar pages: /network-security,
/cortex, /cortex/cloud, /idira, /sase, /ai-security. Build this ONE page fully;
Cursor should reuse PlatformHero, PlatformStatBanner, ProductGrid,
CapabilityTabs, AnalystAwardsSection, CustomerStoriesSection, FAQSection,
PlatformCTA components identically for the other pillar pages, swapping content.

─── Section 1: Platform Hero ──────────────────────────────────────────────

Background: white or subtle gradient, OR video bg for flagship platforms
Eyebrow: "AI-POWERED NETWORK SECURITY PLATFORM"
H1: "The Strata™ Network Security Platform"
Body: "Securing everyone and everything from the latest threats in every
  location. Built for Zero Trust and powered by Precision AI®."
CTA primary: "Get a demo" → /demos
CTA secondary: "Talk to sales" → /company/contact-sales
Hero visual: product screenshot/dashboard mockup in styled frame (perspective tilt)

─── Section 2: Stat Banner ─────────────────────────────────────────────────

3-4 StatCounter cards: "95% of the Fortune 100" | "70K Customers" |
  "13x network security leader" | "30.9B inline attacks blocked per day"

─── Section 3: Product Grid (sub-products within this platform) ────────────

H2: "Explore the platform"
Grid of product cards (from mega-nav Column 1+2 content):
  Next-Generation Firewalls | Hardware Firewalls | Software Firewalls |
  Strata Cloud Manager | SD-WAN for NGFW | PAN-OS | Panorama |
  Advanced Threat Prevention | Advanced URL Filtering | Advanced WildFire |
  Advanced DNS Security | Enterprise IoT Security | Medical IoT Security
Each card: icon, product name, 1-line description, "Learn more →" link to sub-page

─── Section 4: Capability Deep-Dive Tabs ────────────────────────────────────

Tabs matching homepage solutions content:
  "Secure the whole enterprise" | "Apply AI inline" | "Simplify operations" |
  "Adopt Zero Trust" | "AI-powered SASE" | "Secure any device"
Each tab: headline + body + supporting image + link

─── Section 5: Analyst Recognition ──────────────────────────────────────────

"13x network security leader" + full AwardBadgeGrid (13 badges from homepage tab 1)
"See all" expands full grid (modal or inline expand)

─── Section 6: Customer Stories ─────────────────────────────────────────────

3 customer case study cards with logo, headline result, quote, "Read story" link
LogoMarquee: Westfield, TriHealth, Village Roadshow, US Signals, Salesforce (+ more)

─── Section 7: Comparison / Why Strata (optional table) ────────────────────

Feature comparison table: Strata vs. traditional/legacy approach
Rows: Zero Trust enforcement | AI threat prevention | Unified management |
  Cloud-delivered updates | etc.

─── Section 8: FAQ ───────────────────────────────────────────────────────────

Radix Accordion, 6-8 platform-specific questions

─── Section 9: Page CTA ──────────────────────────────────────────────────────

"Ready to secure your network with AI?"
"Get a demo" + "Contact sales" (dual CTA)
```

---

### 7.3 PRODUCT SUB-PAGE TEMPLATE — /network-security/next-generation-firewall

```
Simpler than pillar page — single product focus

H1: "Next-Generation Firewalls"
Body: Product description paragraph
Hero visual: hardware/software product image

Sections:
  1. Key capabilities (3-6 feature cards with icons)
  2. Product line variants (Hardware NGFW models / Software NGFW / Cloud NGFW —
     rendered as a 3-tab or 3-card selector)
  3. Technical specifications table (optional, collapsible)
  4. Integration ecosystem (logos of compatible tools)
  5. Customer proof (1-2 case study snippets)
  6. Resources (related datasheets, whitepapers — PDF download links)
  7. Page CTA: "Get a demo" / "Contact sales" / "Compare models"
```

---

### 7.4 SOLUTIONS PAGE TEMPLATE — /ai-security

```
H1: "Secure AI by Design"
Body: Overview of AI security challenge + Palo Alto Networks' approach

Sections:
  1. The AI security challenge (problem framing, stats)
  2. Solution pillars: Prisma AIRS (apps/agents/models/data) + AI Access Security
     (GenAI app usage governance) — 2 large feature blocks
  3. How it works (process diagram / steps)
  4. Use cases grid (secure copilots, secure AI agents, secure training data, etc.)
  5. Customer proof
  6. Related resources (Unit 42 "Combat Risks from Frontier AI Models" callout)
  7. Page CTA
```

---

### 7.5 INDUSTRY PAGE TEMPLATE — /industry/financial-services

```
H1: "Cybersecurity for Financial Services"
Body: Industry-specific value proposition

Sections:
  1. Industry challenges (regulatory pressure, fraud, legacy systems — 3-4 pain points)
  2. Relevant solutions (curated subset of products/platforms mapped to this industry)
  3. Compliance & regulatory callouts (specific to financial services: PCI-DSS,
     SOX, regional banking regulations)
  4. Customer case studies (financial services customers specifically)
  5. Industry-specific resources (reports, whitepapers)
  6. Page CTA: "Talk to a financial services security expert"

Reuse this template for: Public Sector, Manufacturing, Healthcare, SMB
  (swap challenges, compliance callouts, and customer logos per industry)
```

---

### 7.6 WHY PALO ALTO NETWORKS / PLATFORMIZATION (/why-paloaltonetworks/platformization)

```
H1: "Platformization: One platform. Total protection."
Explains the strategic rationale for consolidating security onto fewer,
integrated platforms vs. point solutions.

Sections:
  1. The problem with point solutions (tool sprawl, integration gaps, alert fatigue)
  2. The platformization thesis (unified data, AI leverage, reduced complexity)
  3. Proof points (90% MTTR reduction, cost savings stats)
  4. Analyst validation (quotes/citations from Gartner, Forrester on platform consolidation trend)
  5. Customer transformation stories
  6. Page CTA
```

---

### 7.7 CUSTOMERS (/customers)

```
H1: "Our customers are securing their digital transformation"
Filterable grid of customer stories:
  Filter by: Industry | Platform used | Company size | Region
Each card: logo, headline result stat, industry tag, "Read story →"
Featured video testimonial at top (same as homepage Section 8, expanded)
Individual customer story pages: /customers/[slug] (not deeply speced here —
  follows CustomerStoriesSection pattern with full narrative: Challenge/Solution/Results)
```

---

### 7.8 UNIT 42 (/unit42)

```
H1: "Unit 42® — Threat Intelligence & Incident Response"
Body: Full mission statement + stats (matching homepage Section 6 content, expanded)

Sections:
  1. Services overview: Retainer | Incident Response | Proactive Assessments |
     Managed Detection & Response | Threat Intelligence Partners
  2. "Under attack?" urgent CTA banner (red/orange alert styling) — 24/7 hotline CTA
  3. Threat research highlights (latest reports, blog posts from Unit 42 research team)
  4. Team credibility (200+ researchers, stats)
  5. Customer trust logos (Colgate, Grant Thornton, Invest Bank, Sabre, ADT)
  6. Related: /unit42/contact-unit42 (emergency contact form — high urgency UI)
```

---

### 7.9 RESOURCES / CONTENT LIBRARY (/resources)

```
H1: "Content Library"
Massive faceted search/filter interface (ContentLibraryFilters.tsx):
  Filters: Content Type (Whitepaper/Report/Datasheet/Webinar/Video/Analyst Report) |
    Topic (Network Security/Cloud/SecOps/Identity/AI) | Industry | Product
Search bar (Algolia-powered, instant results)
Grid of resource cards (paginated or infinite scroll)
Each: type badge, thumbnail, title, gated/ungated indicator, download/view CTA
Lead-gated content: clicking opens a short form (name/email/company) before download
```

---

### 7.10 BLOG (/blog + /blog/[year]/[month]/[slug])

```
Listing:
  H1: "Blog"
  Category filter tabs (Network Security, Cloud, SecOps, Identity, Threat
    Research, Company News, etc.)
  Grid of BlogPostCard: thumbnail, category badge, title, excerpt, author, date

Individual post (URL pattern matches live site: /blog/2026/05/idira-journey-.../ ):
  Standard article template: H1, author byline, date, featured image, MDX body,
    ToC sidebar, author bio, related posts, social share
  Category-specific styling (e.g., threat research posts get a distinct badge color)
```

---

### 7.11 CYBERPEDIA (/cyberpedia + /cyberpedia/[slug])

```
H1: "Cyberpedia — Your Cybersecurity Encyclopedia"
Search-first UX: prominent search bar at top ("What is a firewall?" style queries)
Alphabetical/category browse grid below search
Individual article: definition-style content (What is X? / How does X work? /
  Why does X matter?), heavily internally linked to related terms and products
  Structured similarly to a glossary/wiki — short, scannable, SEO-optimized
  Related Cyberpedia terms sidebar
  "See how Palo Alto Networks addresses this" CTA linking to relevant product
```

---

### 7.12 ABOUT US (/about-us)

```
H1: "About Palo Alto Networks"
Sections:
  1. Mission statement (exact copy from meta description: "We are the global
     cybersecurity leader. Our mission is to protect our way of life in the
     digital age by preventing successful cyberattacks.")
  2. Company facts/stats (founded year, employee count, customer count, global reach)
  3. Leadership team grid
  4. Corporate responsibility highlights (link to /about-us/corporate-responsibility)
  5. Global locations map (link to /about-us/locations)
  6. Investor relations callout (external link)
  7. Newsroom callout (link to /company/newsroom)
```

---

### 7.13 CAREERS

```
Live site links externally to jobs.paloaltonetworks.com — recreate as either:
  (a) A simple landing page with culture content + external "View open roles" CTA, or
  (b) A full internal JobPosting-backed listing (reuse pattern from other SRS docs)
Recommend (a) for fidelity to the real site's architecture.
```

---

### 7.14 CONTACT SALES (/company/contact-sales)

```
H1: "Contact Sales"
ContactSalesForm.tsx:
  Fields: First Name*, Last Name*, Business Email*, Company*, Job Title*,
    Country*, Phone, Company Size (select), Product Interest (multi-select:
    Network Security/SecOps/Cloud/Identity/AI Security), Message
  Submit → /api/contact-sales
  Success: "A member of our sales team will contact you within 1 business day."
Right sidebar: regional sales contact info, or "Prefer to talk now?" phone CTA
```

---

### 7.15 GET STARTED / DEMOS (/get-started + /demos)

```
/get-started — "Future-proof your Security"
  Grid of entry points: Free trials | Product demos | Talk to sales | Download
    datasheets — routes to relevant sub-flows

/demos — "Product Demo Center"
  Grid of on-demand product demo videos, organized by platform
  Each: thumbnail, product name, duration, "Watch demo" (opens video modal)
```

---

### 7.16 NEWSROOM / PRESS (/company/newsroom + /company/press/[year]/[slug])

```
Listing: H1 "Newsroom", filterable press release grid (by year, by topic)
Individual press release: standard PR template — dateline, headline, body,
  boilerplate "About Palo Alto Networks" footer, media contact info
Example from live site: "Palo Alto Networks to Acquire Portkey to Secure the
  Rise of AI Agents" — build this as a real example press release page
```

---

### 7.17 EVENTS CENTER

```
Live site links externally to events.paloaltonetworks.com
Recreate as internal /events listing page:
  H1: "Events Around the World"
  Filter: Upcoming | On-demand | By region | By topic
  Event cards: date, location (or "Virtual"), title, "Register" / "Watch on-demand"
  Featured: "Ignite on Tour" roadshow — prominent hero card
```

---

### 7.18 PARTNERS

```
/partners — "NextWave Partner Program" overview
  H1: "Partner with the world's cybersecurity leader"
  Sections: Program tiers, benefits, "Become a Partner" CTA (PartnerApplicationForm),
    "Partner Portal Login" CTA (external), Managed Security Services Provider
    Program callout
PartnerApplicationForm.tsx: Company info, partner type (Reseller/MSSP/Technology/
  Consulting), region, contact details → /api/partner-application
```

---

### 7.19 LEGAL (/legal-notices/privacy, /terms-of-use, /trust-center)

```
Standard static legal document pages (MDX-sourced from content/legal/)
Trust Center (/legal-notices/trust-center): more elaborate — sections on
  compliance certifications (ISO 27001, SOC 2, etc.), security practices,
  sub-processor list, link to /legal-notices/trust-center/compliance for
  full certification grid (badge images per certification)
```

---

## 8. COMPONENT LIBRARY — COMPLETE SPEC

### 8.1 Button.tsx
```tsx
// Variants: 'primary' (brand orange fill) | 'secondary' (white/outline) |
//   'ghost' (text only) | 'dark' (for use on dark video sections — white fill, dark text)
// Radius: rounded-md (6px) — NOT pill-shaped (key PANW visual signature)
// Sizes: sm | md | lg
// Icon support: leftIcon/rightIcon (Lucide), arrow-right common on link-style CTAs
```

### 8.2 MegaNavPanel.tsx
```tsx
// Radix NavigationMenu.Content wrapper
// Renders N MegaNavColumn children + optional MegaNavFeatured
// Handles responsive column count (3-5 based on content volume)
// Animation: navPanel variant
// Hover-intent timing handled by parent useMegaNavState hook
```

### 8.3 StatCounter.tsx
```tsx
// Core reusable stat component — used 40+ times across the site
// Props: value, suffix, prefix, decimals, label, sublabel, size ('sm'|'md'|'lg'|'xl'),
//   theme ('light'|'dark'), color ('default'|'brand')
// CountUp via framer-motion animate(), triggered by useInView
// Dark theme variant: white number, muted-gray sublabel (for video/dark sections)
```

### 8.4 AwardBadgeGrid.tsx
```tsx
// Horizontal scrollable row of award/analyst badges
// Props: awards[] (name, image, url?), maxVisible, expandable
// "See all" expands to full grid (modal or accordion reveal)
// Each badge: white card, border, badge image centered, small caption below
// Hover: subtle lift + shadow
```

### 8.5 TabPlatformShowcase.tsx (composite — used for the homepage 4-tab section)
```tsx
// Combines: Radix Tabs + tabPanel animation + StatCounter + AwardBadgeGrid +
//   LogoMarquee into one cohesive section component
// Props: tabs[] = [{ label, headline, body, stats[], ctaText, ctaHref, badgeText,
//   awards[], logos[] }]
// Underline indicator: motion.div with layoutId="platform-tab-underline"
```

### 8.6 SolutionsTabPanel.tsx
```tsx
// For the 7-tab "Secure whatever, wherever" section
// Props: tab data with backgroundImage + bulletLinks[]
// Renders full-width image bg with dark overlay + white bulleted link list
// Bullet items: chevron-right icon + text, hover: text slides right 4px
```

### 8.7 PersonaCardGrid.tsx
```tsx
// "Here for you" 4-persona filterable grid
// Props: personas[] (Executives/Specialists/Partners/Customers), cards[] with
//   persona tags (a card can belong to multiple personas)
// Filter interaction: clicking a persona tab re-sorts/highlights matching cards
//   using Framer Motion layout animations (shared layout for smooth reflow)
```

### 8.8 ContentLibraryFilters.tsx
```tsx
// Faceted filter sidebar/bar for /resources
// Multi-select checkboxes grouped by facet (Content Type, Topic, Industry, Product)
// URL state sync: filters reflected in query params for shareable/bookmarkable results
// "Clear all" + active filter chip row
// Connects to Algolia for instant filtered results (no full page reload)
```

### 8.9 LogoMarquee.tsx
```tsx
// Reusable infinite-scroll logo strip, used contextually with different logo sets
// per section (platform tab, industry page, customer section, etc.)
// Props: logos[] (name, imageUrl), speed, pauseOnHover
```

### 8.10 SearchOverlay.tsx
```tsx
// Full-screen modal triggered by header search icon
// Algolia InstantSearch integration
// Instant results grouped by content type (Products, Blog, Cyberpedia, Resources)
// Keyboard: Esc to close, arrow keys to navigate results, Enter to select
// Recent searches (localStorage) shown when input is empty
```

---

## 9. DATABASE SCHEMA — PRISMA

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ─── Auth ──────────────────────────────────────────────────────────────────
model User {
  id        String    @id @default(cuid())
  name      String?
  email     String    @unique
  image     String?
  role      Role      @default(EDITOR)
  accounts  Account[]
  sessions  Session[]
  createdAt DateTime  @default(now())
}
enum Role { ADMIN EDITOR }

model Account {
  id                String  @id @default(cuid())
  userId            String
  provider          String
  providerAccountId String
  access_token      String? @db.Text
  refresh_token     String? @db.Text
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  @@unique([identifier, token])
}

// ─── Sales & Partner Leads ────────────────────────────────────────────────
model ContactSalesLead {
  id              String       @id @default(cuid())
  firstName       String
  lastName        String
  email           String
  company         String
  jobTitle        String
  country         String
  phone           String?
  companySize     CompanySize?
  productInterest String[]
  message         String?      @db.Text
  ipAddress       String?
  utmSource       String?
  utmMedium       String?
  utmCampaign     String?
  status          LeadStatus   @default(NEW)
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt
}

enum CompanySize { UNDER_500 SIZE_500_2000 SIZE_2000_10000 OVER_10000 }
enum LeadStatus { NEW CONTACTED QUALIFIED DEMO_SCHEDULED CONVERTED LOST }

model DemoRequest {
  id          String     @id @default(cuid())
  firstName   String
  lastName    String
  email       String
  company     String
  jobTitle    String
  platform    String?    // which platform demo requested
  status      LeadStatus @default(NEW)
  createdAt   DateTime   @default(now())
}

model PartnerApplication {
  id           String   @id @default(cuid())
  companyName  String
  contactName  String
  email        String
  partnerType  String   // Reseller / MSSP / Technology / Consulting
  region       String
  message      String?  @db.Text
  status       String   @default("pending")
  createdAt    DateTime @default(now())
}

// ─── Newsletter ─────────────────────────────────────────────────────────────
model NewsletterSubscriber {
  id          String   @id @default(cuid())
  email       String   @unique
  isActive    Boolean  @default(true)
  source      String?
  createdAt   DateTime @default(now())
}

// ─── Content mirrors (Sanity → PG for search/admin) ──────────────────────────
model ContentItem {
  id          String      @id @default(cuid())
  sanityId    String      @unique
  type        ContentType
  title       String
  slug        String
  category    String?
  industry    String?
  published   Boolean     @default(false)
  publishedAt DateTime?
  viewCount   Int         @default(0)
  createdAt   DateTime    @default(now())
}

enum ContentType {
  PRODUCT
  SOLUTION
  INDUSTRY_PAGE
  BLOG_POST
  CYBERPEDIA_ARTICLE
  PRESS_RELEASE
  CUSTOMER_STORY
  RESOURCE
  EVENT
}

// ─── Gated resource downloads ────────────────────────────────────────────────
model ResourceDownload {
  id          String   @id @default(cuid())
  resourceSlug String
  firstName   String
  lastName    String
  email       String
  company     String
  jobTitle    String?
  createdAt   DateTime @default(now())
}

// ─── Award / analyst recognition catalog ─────────────────────────────────────
model Award {
  id          String   @id @default(cuid())
  title       String
  analystFirm String   // Gartner, Forrester, Frost & Sullivan, etc.
  platform    String   // network-security, secops, cloud, identity
  badgeImage  String?
  url         String?
  year        Int
  order       Int      @default(0)
  createdAt   DateTime @default(now())
}

// ─── Analytics ────────────────────────────────────────────────────────────────
model PageView {
  id        String   @id @default(cuid())
  path      String
  referer   String?
  country   String?
  createdAt DateTime @default(now())
  @@index([path])
  @@index([createdAt])
}
```

---

## 10. API ROUTES

```typescript
// POST /api/contact-sales
//   Zod validate → honeypot check → rate limit (5/hr/IP) → save ContactSalesLead
//   → notify internal sales team email → confirmation email to lead
//   → optional CRM sync (Salesforce/HubSpot)

// POST /api/demo-request
//   Similar flow → save DemoRequest → notify + confirm

// POST /api/partner-application
//   Save PartnerApplication → notify partner team → confirm to applicant

// POST /api/newsletter
//   Validate → dedupe check → save NewsletterSubscriber → welcome email

// GET /api/search?q=...&type=product|blog|cyberpedia|resource
//   Algolia proxy, server-side key, returns grouped results by content type

// POST /api/revalidate
//   Sanity webhook → ISR revalidation for affected content type/path
```

---

## 11. CMS — CONTENT ARCHITECTURE

```typescript
// sanity/schemaTypes/product.ts — platform/product pages
{
  name: 'product',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'platformFamily', type: 'string' }, // network-security | cortex | idira | sase
    { name: 'tagline', type: 'string' },
    { name: 'description', type: 'blockContent' },
    { name: 'heroImage', type: 'image' },
    { name: 'stats', type: 'array', of: [{ type: 'object', fields: [
      { name: 'value', type: 'string' }, { name: 'label', type: 'string' }
    ]}]},
    { name: 'features', type: 'array', of: [{ type: 'object', fields: [
      { name: 'title', type: 'string' }, { name: 'description', type: 'text' },
      { name: 'icon', type: 'string' }
    ]}]},
    { name: 'seoTitle', type: 'string' },
    { name: 'seoDescription', type: 'text' },
    { name: 'published', type: 'boolean' },
  ]
}

// sanity/schemaTypes/award.ts
{
  name: 'award',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'analystFirm', type: 'string' },
    { name: 'platform', type: 'string' },
    { name: 'badgeImage', type: 'image' },
    { name: 'url', type: 'url' },
    { name: 'year', type: 'number' },
  ]
}

// Additional schemas: solution.ts, industryPage.ts, blogPost.ts, author.ts,
//   category.ts, cyberpediaArticle.ts, pressRelease.ts, customerStory.ts,
//   event.ts — each follows the established pattern from title/slug/body/meta
//   fields, extended with domain-specific fields as needed (e.g. customerStory
//   adds industry, platform-used, metrics[])
```

---

## 12. SEO ARCHITECTURE

```typescript
// Metadata template (per page)
export const metadata: Metadata = {
  title: '{Page Title} | Palo Alto Networks',
  description: '{150-160 char description}',
  metadataBase: new URL('https://www.paloaltonetworks.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Palo Alto Networks',
    title: '{Page Title}',
    description: '{description}',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    site: '@PaloAltoNtwks',
    creator: '@PaloAltoNtwks',
  },
  alternates: { canonical: 'https://www.paloaltonetworks.in/{path}' },
}

// JSON-LD: Organization (root layout)
{
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Palo Alto Networks',
  url: 'https://www.paloaltonetworks.in',
  logo: '/images/logo-dark.svg',
  sameAs: [
    'https://www.youtube.com/user/paloaltonetworks',
    'https://www.facebook.com/PaloAltoNetworks/',
    'https://www.linkedin.com/company/palo-alto-networks',
    'https://twitter.com/PaloAltoNtwks'
  ]
}

// JSON-LD: Product (per platform/product page)
// JSON-LD: NewsArticle (press releases)
// JSON-LD: BlogPosting (blog posts)
// JSON-LD: DefinedTerm (Cyberpedia articles — glossary schema)
// JSON-LD: FAQPage (platform pages with FAQ sections)

// next-sitemap.config.js — given the scale, generate sitemap index files
//   (sitemap-products.xml, sitemap-blog.xml, sitemap-cyberpedia.xml, etc.)
//   rather than one flat sitemap, matching real enterprise-scale SEO practice
```

---

## 13. PERFORMANCE REQUIREMENTS

```
Lighthouse targets: Performance ≥ 88 (video-heavy hero is a known tradeoff vs.
  90+ on lighter sites — mitigate via poster-image-first loading + lazy video),
  Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95

Core Web Vitals: LCP < 2.8s (hero video poster counts as LCP element — must be
  optimized, not the video itself), INP < 200ms, CLS < 0.1

Video optimization:
  - Compress hero MP4 aggressively (target < 3MB for 15-20s loop)
  - Serve poster image immediately, swap to video once buffered
  - Mobile: serve a shorter/lower-res video variant or poster-only
  - pause video via IntersectionObserver when out of view
  - prefers-reduced-motion: never autoplay, show poster only

3D:
  - ThreatGlobe, NetworkMesh, ShieldMesh all dynamic-imported, ssr:false
  - Hidden below md breakpoint
  - dpr capped, dispose on unmount

Mega-nav performance:
  - Nav content data is static (lib/nav-data.ts), not fetched — zero runtime cost
  - Panels are code-split per top-level menu if bundle size becomes a concern

Images: next/image everywhere, AVIF/WebP, explicit dimensions, Sanity CDN
Fonts: self-hosted Inter + Manrope variable fonts, preloaded, font-display: swap
Content pages: ISR revalidate 3600s (blog, resources), 300s (homepage promo strip)
```

---

## 14. LOCALIZATION / MULTI-REGION ARCHITECTURE

```
The live site is the India-locale variant (paloaltonetworks.in, en_IN) of a
globally multi-regional site. Build the clone with i18n-ready architecture even
though only English (IN) content is required for this build:

- Keep flat routes for this build, but store locale as a constant 'en-IN' in
  lib/constants.ts and route all copy/date/number formatting through a
  formatter utility, so future locales can be added cleanly later
- LanguageSelector.tsx component is built and functional in the header/footer
  even if it only lists 'India (English)' as the sole real option plus a few
  disabled/placeholder region entries — matches the real site's UX pattern
  without requiring full multi-locale content investment
- Date formatting: DD Month YYYY (Indian English convention)
- No currency/pricing shown anywhere (matches real site — enterprise B2B sales-assisted model)
```

---

## 15. DEPLOYMENT ARCHITECTURE

```
Frontend + API:  Vercel (Enterprise-tier settings: higher function memory/duration
                  for search/video-adjacent routes)
Database:        Supabase (PostgreSQL, pooled)
CMS:             Sanity.io (Growth/Enterprise plan — large content volume)
Search:          Algolia (multi-index: products, blog, cyberpedia, resources)
Email:           Resend (sales notifications, confirmations, newsletter)
Video hosting:   Self-hosted MP4 via Vercel/CDN for hero loops (small, optimized
                  files); larger customer testimonial/demo videos via Cloudinary
                  video or a dedicated video host (Mux) if budget allows
Monitoring:      Sentry + Vercel Analytics
CI/CD:           GitHub Actions → Vercel, PR preview deployments
```

---

## 16. ENVIRONMENT VARIABLES

```bash
# ── App ──────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://www.paloaltonetworks.in
NEXT_PUBLIC_SITE_NAME="Palo Alto Networks"
NEXT_PUBLIC_LOCALE=en-IN

# ── Database ─────────────────────────────────────────────────────────────
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# ── Auth ─────────────────────────────────────────────────────────────────
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://www.paloaltonetworks.in"

# ── Sanity ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="..."
SANITY_WEBHOOK_SECRET="..."

# ── Email ────────────────────────────────────────────────────────────────
RESEND_API_KEY="re_..."
EMAIL_FROM="Palo Alto Networks <noreply@paloaltonetworks.in>"
EMAIL_SALES="sales-in@paloaltonetworks.in"
EMAIL_PARTNERS="partners@paloaltonetworks.in"

# ── Algolia ──────────────────────────────────────────────────────────────
NEXT_PUBLIC_ALGOLIA_APP_ID="..."
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY="..."
ALGOLIA_ADMIN_KEY="..."

# ── Analytics ────────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"

# ── Rate Limiting ────────────────────────────────────────────────────────
UPSTASH_REDIS_REST_URL="..."
UPSTASH_REDIS_REST_TOKEN="..."

# ── Error Tracking ───────────────────────────────────────────────────────
SENTRY_DSN="..."
NEXT_PUBLIC_SENTRY_DSN="..."

# ── Cloudinary (video/image) ─────────────────────────────────────────────
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

---

## 17. IMPLEMENTATION ORDER

### Phase 1 — Foundation (Days 1-4)
```
[ ] Initialize Next.js 14 + TypeScript + Tailwind
[ ] Configure full color/type/spacing design tokens
[ ] Install all dependencies
[ ] Prisma + Supabase setup, push schema, seed Awards + sample content
[ ] Sanity project + all schemas
[ ] Resend + React Email setup
[ ] Algolia multi-index setup
[ ] Sentry setup
[ ] Build lib/nav-data.ts — the full mega-nav config object (all 6 menus,
      all columns, all links from section 6.1 — this is foundational and large)
```

### Phase 2 — Mega Navigation & Layout (Days 5-9)
```
[ ] Build useMegaNavState hook (hover-intent debouncing)
[ ] Build MegaNav.tsx + MegaNavPanel + MegaNavColumn + MegaNavFeatured
[ ] Build all 6 mega-nav panels from nav-data.ts (Products, Solutions,
      Services, Industries, Partners, Resources)
[ ] Build SearchOverlay.tsx (Algolia InstantSearch)
[ ] Build LanguageSelector.tsx
[ ] Build MobileNav.tsx (accordion mega-nav)
[ ] Build Header.tsx (assembles all of the above)
[ ] Build Footer.tsx (massive multi-column, from full link inventory)
[ ] Build PromoStrip.tsx
[ ] Test mega-nav at all breakpoints, keyboard nav, screen reader pass
```

### Phase 3 — 3D, Video & Animation Systems (Days 10-13)
```
[ ] Build useVideoAutoplay hook
[ ] Source/produce hero + stat-teaser looping MP4s (or placeholder equivalents)
[ ] Build HeroVideoSection.tsx
[ ] Build ThreatGlobe.tsx, NetworkMesh.tsx, ShieldMesh.tsx
[ ] Build StatCounter.tsx (core reusable component, test all format variants)
[ ] Build ArcThreatMap.tsx
[ ] Build all Framer Motion variant wrappers
[ ] Test reduced-motion fallbacks (video → poster, 3D → hidden, counters → static)
```

### Phase 4 — Homepage (Days 14-19)
```
[ ] HeroVideoSection (full)
[ ] PromoCarousel
[ ] AIWorldSection (good news/bad news dual chapter)
[ ] PlatformizationSection
[ ] TabPlatformShowcase (4-tab — the biggest single component on the site)
[ ] AwardBadgeGrid seeded with all award data per tab
[ ] ServicesTabSection (Unit 42)
[ ] SolutionsTabPanel (7-tab)
[ ] CustomerVideoSection
[ ] PersonaCardGrid (13 cards)
[ ] PerspectivesCarousel
[ ] NewsletterSection
[ ] Full homepage integration test
```

### Phase 5 — Platform Pillar Pages (Days 20-25)
```
[ ] Build shared platform template components (PlatformHero, PlatformStatBanner,
      ProductGrid, CapabilityTabs, AnalystAwardsSection, CustomerStoriesSection,
      ComparisonTable, FAQSection, PlatformCTA)
[ ] /network-security — full build (reference implementation)
[ ] /cortex — reuse template, swap content
[ ] /cortex/cloud — reuse template
[ ] /idira — reuse template
[ ] /sase — reuse template
[ ] /ai-security — reuse template
[ ] Build 3-5 representative product sub-pages (e.g. next-generation-firewall,
      cortex-xsiam, prisma-access) as pattern examples
```

### Phase 6 — Solutions, Industries, Why Us (Days 26-29)
```
[ ] Build IndustryHero, IndustryChallenges, IndustrySolutions,
      IndustryCaseStudies, IndustryCompliance components
[ ] /industry/financial-services — full build (reference)
[ ] /industry/public-sector, /manufacturing, /healthcare,
      /small-medium-business-portfolio — reuse template
[ ] /ai-security solutions page
[ ] /why-paloaltonetworks/platformization
[ ] /unit42 — full build
```

### Phase 7 — Resources & Content Ecosystem (Days 30-36)
```
[ ] ContentLibraryFilters.tsx + Algolia integration
[ ] /resources — Content Library full build
[ ] /blog — listing + article template
[ ] /cyberpedia — listing + article template (glossary-style)
[ ] /perspectives — listing + article
[ ] /company/newsroom + /company/press/[year]/[slug]
[ ] TableOfContents, ArticleBody (MDX), RelatedResources components
[ ] Test ISR + Sanity webhook revalidation across all content types
```

### Phase 8 — Company, Forms, Partners (Days 37-40)
```
[ ] /about-us + sub-pages
[ ] /customers
[ ] /company/contact-sales — ContactSalesForm
[ ] /get-started, /demos
[ ] /partners — PartnerApplicationForm
[ ] /events (internal events listing)
[ ] Wire all forms → API routes → DB → email notifications
[ ] Test rate limiting + honeypot on all forms
```

### Phase 9 — Legal, SEO, Performance (Days 41-44)
```
[ ] Legal pages (privacy, terms, trust center) — MDX content
[ ] Metadata on every page template
[ ] JSON-LD: Organization, Product, NewsArticle, BlogPosting, DefinedTerm, FAQPage
[ ] Sitemap index (segmented by content type)
[ ] Image optimization pass (all next/image, explicit dims)
[ ] Video optimization pass (compression, poster-first loading)
[ ] Font self-hosting + preload
[ ] Lighthouse audits across homepage + 3 representative deep pages
[ ] Fix CLS/LCP/INP issues
```

### Phase 10 — Deployment & QA (Days 45-48)
```
[ ] GitHub → Vercel connection, env vars set
[ ] Sanity webhook → /api/revalidate configured
[ ] Preview deployment full QA pass
[ ] Production deployment
[ ] GA4 + GTM verified firing
[ ] Sentry verified capturing errors
[ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
[ ] Mobile test (iOS Safari, Android Chrome) — especially mega-nav + video hero
[ ] Full link audit (no 404s across the built page set)
[ ] Final Lighthouse pass
```

---

## 18. FINAL ACCEPTANCE CHECKLIST

### Visual & Navigation
- [ ] Mega-nav renders all 6 top-level menus with correct column content
- [ ] Mega-nav hover-intent timing feels smooth (no flicker on fast mouse pass)
- [ ] Mobile mega-nav (accordion) functional and complete
- [ ] SearchOverlay opens, searches across content types, keyboard-navigable
- [ ] Footer contains full link inventory (Products/Services, Company, Popular Links)
- [ ] Color palette matches: white/light base, near-black dramatic sections, orange CTA accent
- [ ] Buttons use rounded-md (NOT pill-shaped) — key brand distinction
- [ ] Typography: Manrope display + Inter body, correct weight/size hierarchy

### Hero & Video
- [ ] Hero video autoplays muted/looped on desktop, respects reduced-motion
- [ ] Video pauses when scrolled out of view
- [ ] Mobile shows optimized/lighter video or poster fallback
- [ ] Headline + CTA content legible over video (overlay gradient working)

### 3D & Animation
- [ ] ThreatGlobe renders with animated attack arcs (desktop only)
- [ ] StatCounter animates correctly for all formats (%, B, K, x, decimals)
- [ ] Platform tab switcher (4 tabs) crossfades smoothly, underline slides via layoutId
- [ ] Solutions tab switcher (7 tabs) functional
- [ ] Persona card grid filter/reflow animates smoothly
- [ ] Award badge carousels scroll/expand correctly
- [ ] prefers-reduced-motion disables all motion + video autoplay + 3D globally

### Content Accuracy
- [ ] All homepage stats match source exactly (78%, 94%, 56%, 73%, 56%, 90%,
      30.9B, 480B, 95%, 70K, 13x, 700+, 15x, 90%, 25x, 10K, 55%, 1K+, 200+, 30M, 150+)
- [ ] All platform tab copy matches source content
- [ ] All 4 platform pillar pages built with correct branding (Strata, Cortex,
      Cortex Cloud, Idira)
- [ ] Award badge lists complete per platform tab (13/4/8/9+1 as specified)
- [ ] Customer logo sets correct per section (contextual, not generic)

### Forms & Leads
- [ ] Contact Sales form validates, saves, notifies, confirms
- [ ] Demo Request form functional
- [ ] Partner Application form functional
- [ ] Newsletter signup functional with consent text + working privacy/terms links
- [ ] Rate limiting + honeypot active on all forms

### Content/CMS
- [ ] Blog listing + article pages render from Sanity
- [ ] Cyberpedia listing + article pages render, glossary-style UX
- [ ] Newsroom/press releases render
- [ ] Content Library filters work and connect to Algolia
- [ ] ISR revalidation triggered correctly by Sanity webhooks

### SEO & Performance
- [ ] Metadata complete on every built page
- [ ] JSON-LD present per content type (Org, Product, Article, DefinedTerm, FAQ)
- [ ] Segmented sitemap index generated
- [ ] Lighthouse Performance ≥ 88 on homepage (video tradeoff acknowledged),
      ≥ 90 on non-video pages
- [ ] Lighthouse Accessibility ≥ 95
- [ ] No broken links across all built pages
- [ ] All images have alt text

### Security
- [ ] No secrets in client bundle
- [ ] /studio protected by NextAuth
- [ ] CSP headers configured
- [ ] Rate limiting active on all lead-capture endpoints

---

## APPENDIX A: NAV DATA CONFIG SKELETON

```typescript
// lib/nav-data.ts — foundational config object, extend per section 6.1

export const MEGA_NAV: MegaNavMenu[] = [
  {
    id: 'products',
    label: 'Products',
    columns: [
      {
        heading: 'AI-Powered Network Security Platform',
        links: [
          { label: 'AI-Powered Network Security Platform', href: '/network-security' },
          { label: 'Secure AI by Design', href: '/ai-security' },
          { label: 'Prisma AIRS', href: '/ai-security/prisma-airs' },
          { label: 'AI Access Security', href: '/sase/ai-access-security' },
          { label: 'Cloud Delivered Security Services', href: '/network-security/security-subscriptions' },
          { label: 'Advanced Threat Prevention', href: '/network-security/advanced-threat-prevention' },
          { label: 'Advanced URL Filtering', href: '/network-security/advanced-url-filtering' },
          { label: 'Advanced WildFire', href: '/network-security/advanced-wildfire' },
          { label: 'Advanced DNS Security', href: '/network-security/advanced-dns-security' },
          { label: 'Enterprise Data Loss Prevention', href: '/sase/enterprise-data-loss-prevention' },
          { label: 'Enterprise IoT Security', href: '/network-security/enterprise-device-security' },
          { label: 'Medical IoT Security', href: '/network-security/medical-device-security' },
          { label: 'SaaS Security', href: '/sase/saas-security' },
        ],
      },
      // ... columns 2-4 per section 6.1 spec, populated identically
    ],
    featured: {
      label: 'FEATURED',
      title: 'Introducing Idira®',
      href: '/idira',
      image: '/images/nav-featured-idira.jpg',
    },
  },
  // ... 'solutions', 'services', 'industries', 'partners', 'resources' menus
]
```

---

*End of SRS Document — Palo Alto Networks (India) Clone*

**Total representative pages built:** 35+ (with infinitely extensible templates for the remaining ~2,000 real-site pages)
**Total components:** 75+
**API endpoints:** 6
**Database models:** 11
**Sanity schemas:** 12
**3D scenes:** 3
**Mega-nav menus:** 6 (30+ columns, 150+ individual links)
**Homepage sections:** 11

This document is the single source of truth for the representative build. Every
homepage section, platform pillar template, and shared component documented
here must be implemented exactly as specified before extending the pattern to
additional product/solution/industry pages.

<RULE[AGENTS.md]>
# 🎨 UI & VISUAL DESIGN MASTER PLAN
### Phase-Wise Design Build Plan — Companion to the SRS, Execution, and Content Documents
### Version 1.0

---

> **Applies to:** Rocket SaaS Clone · Qualytics Clone · Palo Alto Networks Clone
> **Purpose:** The SRS docs specify *what* to build and the Execution Plan specifies
> *when* to build it — this document specifies *how it should look and feel* at
> every stage, with a phase-wise design production pipeline (wireframe → visual
> design → motion/graphics → prototype → dev handoff → design QA) that runs
> ahead of and alongside the engineering sprints.
> **Reads alongside:** each SRS's Section 4 (Design System) and Section 5
> (3D/Animation System) — this document operationalizes those specs into an
> actual design production workflow.

---

## TABLE OF CONTENTS

1. [Design Philosophy Per Project](#1-design-philosophy-per-project)
2. [Design System Foundations — What Gets Built First](#2-design-system-foundations--what-gets-built-first)
3. [Figma File Architecture](#3-figma-file-architecture)
4. [Graphics, Illustration & Iconography Plan](#4-graphics-illustration--iconography-plan)
5. [Phase-Wise Design Build Plan](#5-phase-wise-design-build-plan)
6. [Screen-by-Screen Design Priority Map](#6-screen-by-screen-design-priority-map)
7. [Motion & Interaction Design Plan](#7-motion--interaction-design-plan)
8. [Responsive Design Strategy](#8-responsive-design-strategy)
9. [Prototyping & Stakeholder Review Plan](#9-prototyping--stakeholder-review-plan)
10. [Design-to-Dev Handoff Protocol](#10-design-to-dev-handoff-protocol)
11. [Design QA Checklist (Per Phase)](#11-design-qa-checklist-per-phase)
12. [Accessibility-in-Design Checklist](#12-accessibility-in-design-checklist)
13. [Design Tooling Stack](#13-design-tooling-stack)
14. [Master Timeline — Design Track Overlaid on Execution Plan](#14-master-timeline--design-track-overlaid-on-execution-plan)

---

## 1. DESIGN PHILOSOPHY PER PROJECT

Before any pixel gets pushed, lock in a one-paragraph design philosophy per
project. Every subsequent design decision gets tested against this — it's
the tie-breaker when two design directions both "look fine."

### Rocket SaaS — *"Approachable Ambition"*
Dark, spacious, cosmic — but warm, not cold. Gradients feel optimistic
(blue→purple, not corporate navy). Rounded everything (pill buttons,
rounded-2xl cards) signals friendliness. The 3D astronaut/rocket motifs
should feel playful and aspirational, like a startup that's confident but
not stiff. **Test:** if a screen looks like it belongs on a bank's website,
it's wrong for this project — soften it.

### Qualytics — *"Precision Under Pressure"*
Near-black backgrounds, sharp orange accents, dense data visualization.
Every visual element should feel like it's *doing work* — even decorative
3D scenes reference actual data-flow concepts, not abstract prettiness.
Typography is confident and technical without being cold. **Test:** if a
screen could describe a consumer app instead of an enterprise data platform,
add more precision/density — this audience trusts rigor, not charm.

### Palo Alto Networks — *"Controlled Authority"*
Light, spacious, corporate-clean by default — with dramatic near-black
sections used sparingly for maximum impact (video hero, "bad news" stat
section). Orange is a signal color, used for CTAs and critical stats, not
decoration. Square-ish corners (rounded-md, not pill) signal seriousness.
**Test:** if a screen feels playful or trendy, it's wrong — this brand's
entire visual grammar is "we are the adults in the room during a crisis."

---

## 2. DESIGN SYSTEM FOUNDATIONS — WHAT GETS BUILT FIRST

Design systems get built bottom-up: tokens → primitives → patterns →
templates → pages. Skipping levels is the #1 cause of visual inconsistency
across a 20-50 page site.

```
LEVEL 0 — Tokens
  Color palette, type scale, spacing scale, radius scale, shadow scale,
  motion easing curves — all taken directly from each SRS's Section 4.
  Build these as Figma Variables (not just styles) so they can later export
  cleanly to the Tailwind config, keeping design and code as one source of
  truth rather than two documents that drift apart.

LEVEL 1 — Primitives
  Button (all variants/states), Input, Badge, Card (base), Checkbox,
  Toggle, Tooltip, Tag/Chip. Design every STATE, not just the default:
  default / hover / focus / active / disabled / loading / error.
  This is the level most commonly under-designed — teams design the
  default button and improvise the disabled state in code later, which is
  where inconsistency creeps in.

LEVEL 2 — Patterns
  Composed from primitives: FAQ Accordion, Testimonial Card, Stat Counter
  display, Form field group (label + input + error message), Nav dropdown
  panel, Tab switcher, Modal/Dialog, Toast/notification.

LEVEL 3 — Section Templates
  Hero (per project's hero style), Feature grid, Logo marquee, CTA banner,
  Tab-driven showcase, Stat banner row, Card grid (3-col/4-col variants).

LEVEL 4 — Page Compositions
  Actual pages assembled from Level 3 templates + real copy. This is where
  most of the visible design work happens, but it should be assembly, not
  invention — if a page composition needs a wholly new visual pattern,
  that's a signal to go back and add it properly at Level 2 or 3, not
  hack it as a one-off.
```

**Rule of thumb:** no page composition (Level 4) should introduce a visual
pattern that doesn't already exist at Level 1-3. If it does, stop, formalize
the new pattern at the right level first, THEN use it in the page. This
single discipline is what prevents a 40-page site from looking like it was
designed by five different people.

---

## 3. FIGMA FILE ARCHITECTURE

Recommended file structure — one Figma project per clone, with consistent
internal structure so a designer moving between projects doesn't relearn
navigation each time:

```
[Project Name] — Design System
  Page: 🎨 Tokens          (color/type/spacing/radius/shadow variable definitions)
  Page: 🧱 Primitives       (Level 1 components, all states, organized in a grid)
  Page: 🧩 Patterns         (Level 2 composed components)
  Page: 📐 Templates        (Level 3 section templates)
  Page: 🖼️ Icon Library     (all icons used, single source, exported as SVG)

[Project Name] — Pages
  Page: 🏠 Homepage         (desktop + tablet + mobile frames, side by side)
  Page: 📄 [Template Type 1] (e.g. Service Page — reference + notes on
                              what varies per stamped-out instance)
  Page: 📄 [Template Type 2]
  ... one page per template type, matching the Execution Plan's Track D
      template list exactly
  Page: 🎬 Motion Specs      (annotated screenshots + written motion specs
                              for every animated element — see Section 7)

[Project Name] — Graphics & 3D
  Page: 🪐 3D Scene References (still-frame mockups / mood references for
                                each Three.js scene, even though the scene
                                itself is built in code, not Figma — this
                                page aligns the 3D dev with the visual intent)
  Page: 🎨 Illustration Assets  (any custom illustrations, exported)
  Page: 🎥 Video Storyboards    (for PANW's hero video — shot list / storyboard)
```

**Naming convention:** `[Component]/[Variant]/[State]` for every layer
(e.g., `Button/Primary/Hover`) — this makes the Figma file searchable and
keeps component variant management (Figma's native variant properties)
clean rather than a flat list of oddly-named duplicate frames.

---

## 4. GRAPHICS, ILLUSTRATION & ICONOGRAPHY PLAN

### 4.1 Icon Strategy

All three SRS docs specify **Lucide React** as the base icon library. Design
plan:

```
[ ] Audit every icon referenced across all 3 SRS docs into one master list
[ ] Confirm each exists in Lucide's set (it's large — most common UI/concept
    icons are covered)
[ ] For icons NOT in Lucide (e.g., very specific concept icons like Rocket
    SaaS's "facepalm illustration" or Qualytics's data-flow glyphs), design
    custom SVG icons that MATCH Lucide's stroke width (typically 1.5-2px)
    and corner radius conventions, so custom icons don't visually clash
    with the library icons sitting next to them
[ ] Export custom icons at 24×24 viewBox (Lucide's standard) for drop-in consistency
```

### 4.2 Illustration Needs Per Project

| Project | Illustration need | Style direction |
|---|---|---|
| Rocket SaaS | Astronaut/rocket/dog-in-spacesuit motifs (hero, problem-statement section, footer CTA) | Flat-to-semi-dimensional illustration, warm gradient fills, friendly proportions (not hyper-realistic) — think modern SaaS illustration style, not corporate stock art |
| Rocket SaaS | "The Control Gap" style diagrams (process/funnel visuals) | Simplified, labeled diagram style — clarity over decoration |
| Qualytics | Abstract data-flow/network diagrams (used as both static illustration AND reference for the 3D DataFlowNetwork scene) | Geometric, precise, thin-line style matching the "Precision Under Pressure" philosophy |
| Qualytics | Product dashboard mockups (for the 3-tab showcase) | Realistic UI mockup style — these need to look like an actual believable enterprise SaaS product screen, high fidelity |
| PANW | Product dashboard mockups (per platform pillar page) | Realistic UI mockup style, higher visual polish than Qualytics's given PANW's larger brand scale |
| PANW | Abstract threat/network visuals (referenced by ThreatGlobe 3D scene and any static fallback images) | Data-visualization style — arcs, nodes, subtle motion-implying compositions |
| PANW | Award badge alternatives (if real analyst badges aren't licensed — see Content Strategy Plan Section 2.5) | Custom badge/seal graphic system in the site's own visual language — ribbon or shield motifs, brand orange, avoid anything resembling a specific analyst firm's actual badge design |

### 4.3 Product Screenshot / Dashboard Mockup Plan

All three sites feature "product UI" screenshots (dashboards, tab-demo
images) even though none of these are real functioning products — they're
marketing illustrations of a hypothetical product. Treat these as a
**dedicated design workstream**, not an afterthought:

```
[ ] Define a lightweight internal "product UI" design system BEFORE
    designing individual mockup screens — its own mini color palette
    (can reuse the marketing site's tokens), its own component style for
    charts/tables/nav — so all dashboard mockups across a project look
    like they belong to the same imagined product, not five different products
[ ] Design 1 "hero" dashboard mockup first (the one most prominently shown,
    e.g., the SRS's hero product visual) — get this approved before
    designing the remaining 5-10 supporting mockups
[ ] Keep mockup content internally consistent — if a mockup shows
    "70K customers" in one screenshot, don't show a contradicting number
    in another mockup elsewhere on the site
```

---

## 5. PHASE-WISE DESIGN BUILD PLAN

This is the core deliverable — a phase-by-phase design production pipeline,
sequenced to feed the Execution Plan's engineering sprints just ahead of
when each sprint needs finished design assets (design should typically run
0.5-1 sprint AHEAD of the matching engineering track, never behind).

```
┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 1 — Discovery & Reference Audit                        │
│ Maps ahead of: Engineering Sprint 0                                 │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Screenshot/archive every page of the live reference site (the SRS
      docs already did this analysis — this step is capturing the actual
      pixels, not just the content, as a visual reference library)
  [ ] Extract exact colors via eyedropper from reference screenshots,
      cross-check against the SRS's documented hex values (the SRS values
      are the source of truth if there's any discrepancy — reference
      screenshots can have JPEG compression color drift)
  [ ] Confirm font choices — check reference site's actual font-family via
      browser devtools if possible, cross-check against SRS Section 4.2
  [ ] Write/confirm the one-paragraph Design Philosophy (Section 1 above)
      with whoever owns final visual sign-off

  EXIT CRITERIA: A locked mood board + confirmed token values, signed off
  before any Figma component work begins.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 2 — Token & Primitive System                           │
│ Maps ahead of: Engineering Sprint A1 (Base UI Primitives)           │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Build Figma Variables for full color/type/spacing/radius/shadow scale
  [ ] Design every Level 1 primitive (Section 2) in every state
  [ ] Design the icon library page — confirm the Lucide subset + any
      custom icons (Section 4.1)
  [ ] Peer design review: does every primitive match the project's Design
      Philosophy test from Section 1?

  EXIT CRITERIA: Engineering can start Sprint A1 by translating this file
  directly into code — every state, every token, unambiguous.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 3 — Navigation & Layout System                         │
│ Maps ahead of: Engineering Sprint A2 (Header/Footer/Nav)             │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Design Header at all scroll states (top / scrolled) if applicable
      per project
  [ ] Design every nav dropdown/mega-panel — for PANW, this is a MAJOR
      design effort (6 menus × 3-5 columns each) — budget accordingly,
      do not treat it as a quick task
  [ ] Design Footer (all column groups)
  [ ] Design Mobile nav (hamburger state, open state, any accordion
      sub-states)
  [ ] Design empty/loading states for anything dynamic in the nav
      (e.g., search overlay with no query yet vs. with results)

  EXIT CRITERIA: A designer or PM can click through a Figma prototype of
  the full nav system (desktop + mobile) and it behaves correctly —
  every dropdown opens, every link target is specified.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 4 — Pattern & Template Library                         │
│ Maps ahead of: Engineering Sprint B (3D/Animation) — runs in         │
│ PARALLEL with Sprint B since 3D dev doesn't block pattern design     │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Design every Level 2 pattern (FAQ Accordion, Testimonial Card,
      Stat Counter, Tab switcher, Modal, Form field group)
  [ ] Design every Level 3 section template (Hero variants, Feature grid,
      Logo marquee, CTA banner, Card grid variants)
  [ ] Design the "product UI" mockup mini-system (Section 4.3) and the
      first hero dashboard mockup
  [ ] Design 3D scene mood references (still-frame compositions showing
      intended look — color, density, composition — for the dev building
      the actual Three.js scene to reference; this is NOT the same as
      building the 3D scene in Figma, it's a target reference image)

  EXIT CRITERIA: Every reusable pattern/template needed for Level 4 page
  composition exists and is approved — Phase 5 should be assembly, not invention.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 5 — Homepage Composition                               │
│ Maps ahead of: Engineering Sprint C (Homepage Build)                 │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Compose the full homepage, section by section, using ONLY approved
      Level 1-3 components from Phases 2-4
  [ ] Any NEW visual pattern discovered during this phase gets pulled back
      into Phase 4's template library and formalized BEFORE being used
      here — don't let homepage composition quietly become where
      one-off, undocumented patterns get invented
  [ ] Design at 3 breakpoints minimum (375 / 1024 / 1440) — see Section 8
      for the full responsive strategy
  [ ] Get explicit stakeholder sign-off on the homepage specifically —
      it's the highest-visibility page and the one most likely to trigger
      late-stage "let's reconsider this" feedback; better to surface that
      now than after 10 more pages have been built matching its patterns

  EXIT CRITERIA: Homepage design approved, at all breakpoints, before
  Engineering Sprint C begins building it.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 6 — Template Page Composition (the "stamp-out" set)    │
│ Maps ahead of: Engineering Sprint D (Secondary Pages & Templates)    │
└─────────────────────────────────────────────────────────────────────┘
  [ ] For each template TYPE (service page / platform pillar / industry
      page / product sub-page / blog post / etc.), design ONE fully
      composed reference page
  [ ] Explicitly annotate what VARIES between instances of this template
      (headline, stat values, image) vs. what STAYS FIXED (layout,
      component choice, spacing) — this annotation is what lets
      engineering build a truly data-driven template rather than a
      one-off page that gets copy-pasted and hand-edited
  [ ] Design 2nd/3rd instances of at least one template type as a
      validation exercise — does the template hold up with different
      content lengths (a longer headline, a shorter description)? This
      catches layout fragility before engineering builds 10 instances of
      a template that breaks on the 4th one

  EXIT CRITERIA: Each template type has 1 fully-designed reference + explicit
  variable/fixed annotations + 1 stress-tested second instance.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 7 — Forms, States & Edge Cases                         │
│ Maps ahead of: Engineering Sprint E (CMS, Forms & Backend)           │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Design every form (Contact, Demo Request, Newsletter, Partner
      Application, etc. per project) — default, focused, error, and
      success/confirmation states
  [ ] Design empty states (e.g., resource library with no results
      matching a filter, blog listing before any posts published)
  [ ] Design loading/skeleton states for anything CMS-driven
  [ ] Design 404 page and error boundary page

  EXIT CRITERIA: No form or dynamic content area reaches engineering
  without an explicit design for its non-happy-path states.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 8 — Motion & Graphics Finalization                     │
│ Maps ahead of: Engineering Sprint F (SEO/Performance/Hardening)      │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Finalize all Motion Specs (Section 7) — every animated element gets
      a written spec, not left to developer interpretation
  [ ] Finalize video storyboard/shot list (PANW hero video) and hand off
      to whoever is producing it (see Content Strategy Plan Section 2.6)
  [ ] Finalize all custom illustration assets, exported and organized
  [ ] Final visual QA pass across the whole design file — check for token
      drift (a color or spacing value that quietly deviates from the
      system, common in late-stage composition work)

  EXIT CRITERIA: Design file is feature-complete and internally consistent;
  this is the last phase where NEW visual decisions should be made — Phase
  9 is refinement/QA only.

┌─────────────────────────────────────────────────────────────────────┐
│ DESIGN PHASE 9 — Launch QA & Polish                                 │
│ Maps ahead of: Engineering Sprint G (Deployment & Launch)            │
└─────────────────────────────────────────────────────────────────────┘
  [ ] Design review of the ACTUAL BUILT SITE (not the Figma file) against
      the design file — this is the pixel-parity check, see Section 11
  [ ] Triage and prioritize any visual bugs found (pixel-parity misses,
      responsive breakpoint issues, animation timing mismatches)
  [ ] Sign off on launch-readiness from a visual design perspective —
      this is a distinct sign-off from engineering QA sign-off, don't
      collapse them into one checkbox
```

---

## 6. SCREEN-BY-SCREEN DESIGN PRIORITY MAP

Not every page deserves equal design attention. Use this priority tiering
(applies across all 3 projects, adjust specific page names per project) to
allocate design hours sensibly:

```
TIER 1 — Full bespoke design, highest polish
  Homepage, primary Platform/Service pillar page (the one template
  reference), primary conversion pages (Demo Request / Contact / Get Started)

TIER 2 — Full design via template, moderate per-instance customization
  Remaining pillar/service pages, Industry pages, About Us, Customers/
  Testimonials pages

TIER 3 — Template-driven, minimal per-instance design time
  Individual blog posts, individual Cyberpedia articles, individual press
  releases, individual customer story pages — design the TEMPLATE
  thoroughly (Tier 1 effort on the template itself) but each instance
  should require near-zero additional design decisions

TIER 4 — Utility pages, minimal design investment
  Legal pages (Privacy/Terms), 404, Sitemap — clean, on-brand, but simple;
  don't over-invest here
```

Communicate this tiering explicitly to the design team so hours aren't
accidentally spent achieving Tier 1 polish on a Tier 3 page (a common
failure mode when a designer perfectionist-loops on whatever page they
happen to be working on, regardless of its actual visibility/impact).

---

## 7. MOTION & INTERACTION DESIGN PLAN

Static Figma frames can't fully specify motion — every animated element
needs a **written motion spec**, not just "make it feel nice" left to the
developer. Use this format for every animated element cataloged during
Design Phase 8:

```
MOTION SPEC TEMPLATE:

Element: _______________________
Trigger: (scroll into view / hover / click / page load / tab switch)
Property animated: (opacity / y-position / scale / color / etc.)
From → To values: _______________________
Duration: _______________________
Easing: (reference the SRS's named easing curves — ease-out-expo,
         ease-spring, etc. — don't invent new easing per-element)
Delay/stagger (if part of a group): _______________________
Repeat behavior: (once / loop / hover-only, does it reverse on hover-out)
Reduced-motion fallback: (what happens instead when
  prefers-reduced-motion is set — per every SRS, this should almost
  always be "appears instantly in final state," confirm no exceptions)
```

### Motion inventory per project (build one spec per row, minimum)

| Project | High-priority motion elements needing specs |
|---|---|
| Rocket SaaS | Hero text reveal, CTA magnetic-button effect, testimonial carousel transitions, CountUp stat animations, tech-logo marquee speed, 3D astronaut breathing animation |
| Qualytics | 3-tab crossfade + underline slide, CircularProgress ring draw-in, DataFlowNetwork pulse timing, CountUp stat animations |
| PANW | Hero video fade-in, 4-tab and 7-tab crossfade + underline slide, StatCounter animations (highest volume of any project — 40+ instances per SRS), ThreatGlobe arc animation timing, PersonaCardGrid filter/reflow animation, mega-nav panel open/close timing |

**Design deliverable:** a single `MOTION_SPECS.md` (or a dedicated Figma
page per Section 3) cataloging every row above with the full template
filled in — this becomes a direct checklist for engineering's Sprint B and
prevents "eyeballing it" drift between what was designed and what ships.

---

## 8. RESPONSIVE DESIGN STRATEGY

Design at these exact breakpoints (matching every SRS's stated test
breakpoints) — don't design "responsive" abstractly, design each concrete size:

```
375px   — Mobile (primary mobile design target — most real traffic clusters
          near this width)
768px   — Tablet (often the most-skipped breakpoint in practice — allocate
          explicit time, don't just let 375px content stretch)
1024px  — Small desktop / large tablet landscape
1440px  — Primary desktop design target
```

### Per-breakpoint design rules

```
[ ] Every Level 3 template gets explicitly designed (not just "auto-
    reflowed") at 375px and 1440px minimum — 768px and 1024px can be
    interpolated by the developer IF the 375/1440 designs make the
    interpolation path obvious, but complex components (mega-nav,
    multi-column stat grids) need explicit 768px/1024px designs too
[ ] Mobile is not "desktop with things stacked" — actively redesign
    information hierarchy for mobile where needed (e.g., PANW's 4-column
    stat rows become 2×2 grids, not a single squeezed column; the 7-tab
    solutions section becomes a scrollable pill row, not 7 stacked panels)
[ ] 3D scenes and hero videos are explicitly OMITTED below 768px per every
    SRS's performance spec — design the mobile hero with this in mind
    (a strong static/gradient background, not a "missing" 3D element)
[ ] Touch target minimum 44×44px on all interactive elements at mobile
    breakpoints — audit nav items, card CTAs, form inputs specifically
```

---

## 9. PROTOTYPING & STAKEHOLDER REVIEW PLAN

Don't wait until the built site exists to get feedback — use Figma
prototyping to validate flows before engineering builds them.

```
PROTOTYPE 1 — Navigation flow (after Design Phase 3)
  Clickable prototype of the full nav system — every dropdown, every
  mobile accordion state. Review with stakeholders BEFORE Phase 4 begins,
  since nav patterns get reused everywhere downstream.

PROTOTYPE 2 — Homepage scroll-through (after Design Phase 5)
  A scrollable, clickable prototype of the full homepage at desktop +
  mobile. This is the highest-stakes review of the whole design process —
  budget a real review meeting, not an async Slack link.

PROTOTYPE 3 — Primary conversion flow (after Design Phase 7)
  Click from a CTA button through to a completed form submission
  (including the success state) — validate the full conversion path feels
  smooth, not just that each screen looks good in isolation.

PROTOTYPE 4 — Full site click-through (after Design Phase 9, pre-launch)
  One comprehensive prototype linking every designed page — this is the
  final pre-launch sanity check that the whole site *feels* like one
  coherent product, not a collection of individually-approved pages.
```

**Review discipline:** for every prototype review, capture feedback as
specific, actionable items in the project's tracker (not just verbal notes
in a meeting) — and explicitly mark each item as "must-fix before next
phase" vs. "backlog for post-launch," so review meetings don't silently
expand scope without anyone deciding to.

---

## 10. DESIGN-TO-DEV HANDOFF PROTOCOL

```
[ ] Figma file access granted to all engineering team members (view/inspect,
    not necessarily edit)
[ ] Every component's spacing/sizing verified as using the token system,
    not arbitrary pixel values — engineering should be able to read a
    spacing value in Figma and find the matching Tailwind token, not have
    to guess-and-round
[ ] Every color reference resolved to a token name, not a raw hex value —
    same reasoning
[ ] Icon/illustration assets exported and placed in an agreed shared
    location (matches each SRS's public/images/ structure) BEFORE the
    engineering sprint that needs them starts, not requested mid-sprint
[ ] Motion specs (Section 7) delivered as a reviewable checklist, not
    buried as annotations scattered across Figma frames
[ ] A recurring (even brief, 15-min) design-dev sync during Phases 5-9,
    so questions get resolved in real time rather than queued as async
    comments that stall a sprint
```

---

## 11. DESIGN QA CHECKLIST (PER PHASE)

Run this at the end of every Design Phase in Section 5, not just once at
the very end:

```
[ ] Every element traces back to a token (Section 2) — no ad-hoc colors/
    spacing/radii introduced during composition
[ ] Every animated element has a motion spec (Section 7) — nothing left
    as "developer's best judgment"
[ ] Every interactive element has all states designed (hover/focus/active/
    disabled/error as applicable) — not just the default
[ ] Design matches the project's Design Philosophy test (Section 1) — spot
    check 3-5 screens against the one-paragraph philosophy
[ ] Responsive breakpoints checked per Section 8's rules, not just "looks
    fine when I resize the frame"
[ ] Accessibility checklist run (Section 12)
```

### Post-launch pixel-parity QA (Design Phase 9 specific)

```
[ ] Side-by-side screenshot comparison: Figma design vs. built site,
    for every Tier 1 page (Section 6), at 375px and 1440px
[ ] Flag any deviation beyond minor sub-pixel rendering differences —
    categorize each as: (a) acceptable engineering interpretation,
    (b) needs a design fix, or (c) needs an engineering fix — don't leave
    deviations uncategorized
```

---

## 12. ACCESSIBILITY-IN-DESIGN CHECKLIST

Accessibility is cheaper to design correctly than to retrofit. Check this
during design, not just during the Execution Plan's Track F engineering
accessibility pass:

```
[ ] Color contrast: run every text/background color pairing through a
    contrast checker (WCAG AA minimum: 4.5:1 for body text, 3:1 for large
    text/UI components) — pay special attention to: light text on
    gradient backgrounds (Rocket SaaS), orange text on dark backgrounds
    (Qualytics/PANW), any "muted" gray text color used for secondary content
[ ] Never use color as the ONLY signal for state (e.g., form field errors
    need an icon/text change, not just a red border; active nav items need
    more than just a color change)
[ ] Focus states designed explicitly for every interactive element — not
    left to the browser default, but also never REMOVED without a
    designed replacement (a common and serious accessibility regression)
[ ] Text sizing: confirm body text never goes below 14px (project's
    body-sm token) anywhere, including in dense areas like footers/legal text
[ ] Touch targets ≥44×44px at mobile breakpoints (Section 8)
[ ] Motion: every scroll-triggered or auto-playing animation has a
    designed "reduced motion" alternative state, not just an assumption
    that engineering will "handle it" (Section 7's template makes this explicit)
```

---

## 13. DESIGN TOOLING STACK

```
Design & prototyping:    Figma (Variables for tokens, Components with
                          variant properties for states)
Icon source:              Lucide icon set (Figma community file) + custom
                          SVG icons matching its stroke conventions
3D mood references:       Static renders/mockups only — NOT built in
                          Figma; use Blender/Spline/reference photography
                          to create mood-reference stills that inform the
                          actual Three.js implementation
Motion prototyping:       Figma's native prototyping for simple transitions;
                          for complex motion (3D scenes, tab crossfades),
                          written specs (Section 7) are the primary
                          artifact, not a Figma prototype attempt
Handoff:                  Figma Dev Mode (inspect panel) — confirm the
                          whole engineering team has access
Version control:          Figma's built-in version history + branching for
                          major redesign explorations, so the main file
                          stays stable for ongoing dev reference
Asset export:             SVG for icons/illustrations, WebP/AVIF-ready PNG
                          exports for any raster mockups (matching each
                          SRS's image optimization requirements)
```

---

## 14. MASTER TIMELINE — DESIGN TRACK OVERLAID ON EXECUTION PLAN

This table lines up every Design Phase from Section 5 against the matching
Engineering Sprint Track from the Next Phase Execution Plan, showing the
intentional lead time.

| Design Phase | Engineering Track it feeds | Recommended lead time |
|---|---|---|
| 1 — Discovery & Reference Audit | Sprint 0 | Complete before Sprint 0 starts |
| 2 — Token & Primitive System | Track A1 (Base UI Primitives) | 3-5 days ahead |
| 3 — Navigation & Layout System | Track A2 (Header/Footer/Nav) | 3-5 days ahead (PANW: 1 full sprint ahead, given mega-nav scale) |
| 4 — Pattern & Template Library | Track B (3D/Animation) — runs parallel | Overlaps; patterns don't block 3D dev |
| 5 — Homepage Composition | Track C (Homepage Build) | 1 sprint ahead |
| 6 — Template Page Composition | Track D (Secondary Pages) | 1 sprint ahead |
| 7 — Forms, States & Edge Cases | Track E (CMS, Forms & Backend) | 3-5 days ahead |
| 8 — Motion & Graphics Finalization | Track F (SEO/Performance) | Overlaps; finalize before Track F's Lighthouse passes need final assets |
| 9 — Launch QA & Polish | Track G (Deployment & Launch) | Runs during Track G, as the design-side counterpart to engineering launch QA |

**Golden rule:** if engineering ever reaches a sprint and the matching
design phase isn't done, that sprint should either (a) pull forward
lower-priority work that doesn't depend on the missing design, or (b) slip —
never (c) let engineers freelance the missing design decisions themselves,
which is how visual inconsistency enters a project silently and
compounds across every subsequent page.

---

*End of UI & Visual Design Master Plan.*

**Full document set for these three clone projects:**
- `ROCKET_SAAS_CLONE_SRS.md` / `QUALYTICS_CLONE_SRS.md` / `PALOALTO_CLONE_SRS.md`
  — engineering specifications
- `NEXT_PHASE_EXECUTION_PLAN.md` — sprint-level engineering build plan
- `CONTENT_STRATEGY_PLAN.md` — editorial, copywriting & asset-sourcing plan
- `UI_VISUAL_DESIGN_MASTER_PLAN.md` (this document) — phase-wise design
  production plan, sequenced to run ahead of the engineering execution plan
</RULE[AGENTS.md]>