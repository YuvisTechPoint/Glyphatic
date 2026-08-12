import { Metadata } from 'next'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
  ShieldCheck, 
  Cpu, 
  Server, 
  Globe, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Radio,
  Layers,
  Activity
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Strata™ Network Security Platform | GlyphaticSystems',
  description: 'Zero-Trust Network Security powered by Precision AI®. Protect your perimeter, cloud, and remote workforce.',
}

const STATS = [
  { value: '95%', label: 'OF FORTUNE 100 CUSTOMERS' },
  { value: '70,000+', label: 'GLOBAL ENTERPRISE CUSTOMERS' },
  { value: '30.9 B', label: 'INLINE ATTACKS BLOCKED DAILY' },
  { value: '13x', label: 'LEADER IN ANALYST RATINGS' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'Next-Generation Firewalls (NGFW)',
    subtitle: 'Physical, Virtual & Cloud-Native Form Factors',
    description: 'Inline AI-powered prevention stopping unknown zero-day exploits across hardware (PA-Series), virtualized environments (VM-Series), and Kubernetes (CN-Series).',
    features: ['Hardware PA-Series', 'Virtual VM-Series', 'Containerized CN-Series', 'Inline Deep Packet Inspection'],
  },
  {
    icon: Cpu,
    title: 'Strata™ Cloud Manager',
    subtitle: 'AI-Powered Centralized Management',
    description: 'Unified management console providing AIOps, predictive configuration analysis, and single-pane-of-glass policy orchestration for all firewalls.',
    features: ['Predictive AIOps', 'Central Policy Engine', 'Automated Health Audits', 'Zero-Touch Provisioning'],
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security Subscriptions',
    subtitle: 'Precision AI® Threat Intelligence',
    description: 'Real-time defense powered by WildFire® malware analysis, Advanced URL Filtering, and Advanced DNS Security blocking malicious domains instantly.',
    features: ['WildFire® Real-Time Analysis', 'Advanced URL Filtering', 'Advanced DNS Security', 'IoT & Medical Device Security'],
  },
  {
    icon: Radio,
    title: 'Prisma SASE & SD-WAN',
    subtitle: 'Hybrid & Branch Office Security',
    description: 'Seamless integration with Prisma Access and SD-WAN subscriptions to deliver zero-trust network access (ZTNA 2.0) for remote employees.',
    features: ['ZTNA 2.0 Access', 'Autonomous DEM (ADEM)', 'App Acceleration', 'Enterprise DLP'],
  },
]

const PRODUCTS = [
  {
    name: 'PAN-OS® Operating System',
    desc: 'The foundational security operating system driving all Strata Next-Gen Firewalls with native inline AI.',
  },
  {
    name: 'Panorama™ Management',
    desc: 'Centralized network security management for global firewall deployments across cloud and data centers.',
  },
  {
    name: 'Advanced Threat Prevention',
    desc: 'Prevents unknown command-and-control (C2) channels and zero-day exploits before they impact your network.',
  },
  {
    name: 'Advanced URL Filtering',
    desc: 'Web security engine preventing web-based attacks, evasive phishing, and weaponized AI-generated domains.',
  },
  {
    name: 'Advanced WildFire®',
    desc: 'Cloud-based malware analysis engine analyzing 30M+ unknown samples daily to generate instant immunity signatures.',
  },
  {
    name: 'Enterprise IoT & Medical Security',
    desc: 'ML-powered device discovery and automated policy generation for unmanaged IoT and critical medical devices.',
  },
]

export default function NetworkSecurityPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] pt-24 pb-32 text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.15)_0%,_transparent_70%)] pointer-events-none" />
        
        {/* Dot Matrix Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="container-wide max-w-[1236px] relative z-10">
          <FadeInView>
            <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
              STRATA™ NETWORK SECURITY PLATFORM
            </span>
            <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Zero-Trust Network Security. <br />
              <span className="text-[#FA582D]">Powered by Precision AI®.</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-400 font-medium max-w-3xl leading-relaxed mb-10">
              Protect your network perimeter, cloud edges, data centers, and hybrid branch locations with automated inline threat prevention blocking 30.9 billion attacks per day.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/discuss-architecture"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Network Architecture <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Services Scope
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-16 bg-[#111111] border-b border-white/5">
        <div className="container-wide max-w-[1236px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <FadeInView key={stat.label} delay={idx * 0.1} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#FA582D] mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold tracking-[0.15em] text-neutral-400 uppercase">
                  {stat.label}
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="max-w-3xl mb-16">
              <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                PLATFORM ARCHITECTURE
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Complete Perimeter & Cloud Protection
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                Consolidate your firewalls, SASE connectivity, and threat subscriptions into one seamless platform.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <FadeInView key={cap.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#121212] p-8 md:p-10 h-full flex flex-col justify-between hover:border-[#FA582D]/40 transition-all">
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D]">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{cap.description}</p>
                  </div>

                  <div className="border-t border-white/5 pt-6 space-y-2">
                    {cap.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                        <CheckCircle2 className="h-4 w-4 text-[#FA582D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Products Grid */}
      <section className="py-20 bg-[#0d1017] border-y border-white/5">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="max-w-3xl mb-16">
              <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                PRODUCT ECOSYSTEM
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Strata™ Subscriptions & Innovations
              </h2>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod, idx) => (
              <FadeInView key={prod.name} delay={idx * 0.1}>
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{prod.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">{prod.desc}</p>
                  </div>
                  <Link
                    href="/discuss-architecture"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FA582D] hover:text-white transition-colors"
                  >
                    Request Datasheet <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pt-20">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#161616] via-[#111111] to-[#0A0D14] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                  Ready to secure your network perimeter?
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Connect with our lead network engineers to evaluate your current firewall topology, latency requirements, and Zero-Trust rollout plan.
                </p>
              </div>
              <Link
                href="/discuss-architecture"
                className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Network Architecture <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
