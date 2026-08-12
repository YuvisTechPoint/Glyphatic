import { Metadata } from 'next'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
  UserCheck, 
  KeyRound, 
  Bot, 
  ShieldAlert, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  FileText,
  Fingerprint
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Idira® Next-Gen Identity Security Platform | GlyphaticSystems',
  description: 'Control the chaos. Secure every identity—human, machine, and AI agentic workloads.',
}

const STATS = [
  { value: '10,000+', label: 'GLOBAL IDENTITY CUSTOMERS' },
  { value: '55%', label: 'OF FORTUNE 500 SECURED' },
  { value: '100%', label: 'HUMAN, MACHINE & AI AGENT COVERAGE' },
  { value: 'LEADER', label: '2025 GARTNER® MAGIC QUADRANT™ FOR PAM' },
]

const PILLARS = [
  {
    icon: UserCheck,
    title: 'Human Identity Security',
    subtitle: 'Privileged Access & Governance',
    description: 'Protect workforce users, third-party vendors, and administrators with just-in-time access, privileged access management (PAM), and zero-trust identity governance.',
    features: ['Privileged Access Management (PAM)', 'Identity & Access Management (IAM)', 'Workforce Password Management', 'Vendor Privileged Access'],
    href: '/idira/human',
  },
  {
    icon: KeyRound,
    title: 'Machine Identity Security',
    subtitle: 'Secrets & Application Credentials',
    description: 'Centralize secrets governance, static and dynamic application credentials, and API tokens across multi-cloud infrastructure and automated CI/CD pipelines.',
    features: ['Unified Secrets Governance', 'Secrets Management Engine', 'Application Credentials Delivery', 'Cloud Workload Identity'],
    href: '/idira/machine',
  },
  {
    icon: Bot,
    title: 'Agentic AI Identity Security',
    subtitle: 'Autonomous Bots & LLM Guardrails',
    description: 'Enforce real-time identity boundaries and behavioral analysis for autonomous AI agents, LLM tool callers, and robotic process automation (RPA) bots.',
    features: ['AI Agent Identity Isolation', 'LLM Tool Execution Control', 'Agentic ITDR Telemetry', 'Autonomous Bot Auditing'],
    href: '/idira/agentic',
  },
]

const PRODUCTS = [
  {
    name: 'Privileged Access Management (PAM)',
    desc: 'Just-in-time access and vaultless privilege controls eliminating standing privileges across enterprise servers.',
  },
  {
    name: 'Unified Secrets Governance',
    desc: 'Single pane of glass policy management for API keys, SSH certs, and database tokens across AWS, GCP, and Azure.',
  },
  {
    name: 'Identity Threat Detection & Response (ITDR)',
    desc: 'Precision AI® engine analyzing identity behavior in real time to catch credential stuffing and session hijacking.',
  },
  {
    name: 'Workforce Password Manager',
    desc: 'Zero-knowledge password vaulting integrated with enterprise SSO for seamless workforce access.',
  },
  {
    name: 'Vendor Privileged Access',
    desc: 'Secure, agentless third-party vendor access with full session recording and automated time-bound revocation.',
  },
  {
    name: '2025 PAM Gartner® Magic Quadrant™ Report',
    desc: 'Read the complete industry analyst evaluation recognizing Idira® as a Leader in Privileged Access Management.',
  },
]

export default function IdiraPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] pt-24 pb-32 text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.18)_0%,_transparent_70%)] pointer-events-none" />
        
        {/* Radial Circuit / Grid Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 32px)',
          }}
        />

        <div className="container-wide max-w-[1236px] relative z-10">
          <FadeInView>
            <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
              IDIRA® NEXT-GENERATION IDENTITY SECURITY PLATFORM
            </span>
            <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Control the Chaos. <br />
              <span className="text-[#FA582D]">Secure Every Identity.</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-400 font-medium max-w-3xl leading-relaxed mb-10">
              Consolidate PAM, Secrets Management, and AI Agentic identity protection into a single Precision AI®-powered platform. Protect 100% of human, machine, and AI agent workloads.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/discuss-architecture"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Identity Architecture <ArrowRight className="h-5 w-5" />
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

      {/* Key Scale Stats Bar */}
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

      {/* 3 Core Identity Pillars */}
      <section className="py-20 lg:py-28">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="max-w-3xl mb-16">
              <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                THE THREE IDENTITY DOMAINS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Unified Identity Defense Across All Workloads
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                Legacy identity tools only manage human users. Idira® extends zero-trust protection to machines and autonomous AI agents.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, idx) => (
              <FadeInView key={pillar.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#121212] p-8 h-full flex flex-col justify-between hover:border-[#FA582D]/40 transition-all">
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D]">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{pillar.description}</p>
                  </div>

                  <div>
                    <div className="border-t border-white/5 pt-6 space-y-2 mb-8">
                      {pillar.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                          <CheckCircle2 className="h-4 w-4 text-[#FA582D] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#FA582D] hover:text-white transition-colors"
                    >
                      Explore Pillar <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
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
                PRODUCT PORTFOLIO
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Idira® Platform Modules
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
                    Request Evaluation <ArrowRight className="h-3.5 w-3.5" />
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
                  Ready to secure every identity across your enterprise?
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Connect with our lead identity architects to evaluate your PAM, Secrets Management, and AI Agentic security requirements.
                </p>
              </div>
              <Link
                href="/discuss-architecture"
                className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Identity Architecture <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
