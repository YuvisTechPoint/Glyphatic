import { Metadata } from 'next'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
  UserCheck, 
  ShieldCheck, 
  Key, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  UserPlus
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Human Identity Security & PAM | Idira® Platform',
  description: 'Privileged Access Management (PAM), IAM, and Zero-Trust identity governance for workforce and vendor users.',
}

const MODULES = [
  {
    icon: ShieldCheck,
    title: 'Privileged Access Management (PAM)',
    subtitle: 'Vaultless Just-in-Time Access',
    description: 'Eliminate standing privileges across production servers, databases, and Kubernetes clusters with automated time-bound privilege elevation.',
    features: ['Just-in-Time Privilege Elevation', 'Session Recording & Live Auditing', 'Vaultless Credential Injection', 'Zero Standing Privileges (ZSP)'],
  },
  {
    icon: Key,
    title: 'Identity & Access Management (IAM)',
    subtitle: 'Adaptive SSO & MFA Integration',
    description: 'Seamless integration with Okta, Azure AD, and Ping Identity featuring adaptive risk-based multi-factor authentication.',
    features: ['Adaptive Risk-Based MFA', 'Unified Single Sign-On (SSO)', 'Automated JIT Provisioning', 'Identity Lifecycle Control'],
  },
  {
    icon: Lock,
    title: 'Workforce Password Management',
    subtitle: 'Enterprise Zero-Knowledge Vaulting',
    description: 'Centralized password vaulting for workforce employees with end-to-end zero-knowledge encryption and breach monitoring.',
    features: ['Zero-Knowledge Encryption', 'Automated Password Rotation', 'Dark Web Breach Alerts', 'Role-Based Sharing Controls'],
  },
  {
    icon: UserPlus,
    title: 'Vendor Privileged Access',
    subtitle: 'Secure Agentless Third-Party Access',
    description: 'Grant temporary, audit-logged access to external contractors and vendors without installing local client agents or exposing internal networks.',
    features: ['Agentless Web Gateway Access', 'Real-time Session Monitoring', 'Time-Bound Automatic Expiry', 'Comprehensive Compliance Logs'],
  },
]

export default function HumanIdentityPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] pt-24 pb-32 text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.18)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="container-wide max-w-[1236px] relative z-10">
          <FadeInView>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
              <Link href="/idira" className="hover:underline">IDIRA® PLATFORM</Link>
              <span>/</span>
              <span>HUMAN IDENTITY SECURITY</span>
            </div>
            <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Privileged Access & <br />
              <span className="text-[#FA582D]">Human Identity Governance.</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-400 font-medium max-w-3xl leading-relaxed mb-10">
              Protect workforce users, administrators, and third-party vendors with vaultless just-in-time access, zero standing privileges, and real-time session auditing.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/discuss-architecture"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Identity Architecture <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Request PAM Demo
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="max-w-3xl mb-16">
              <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                HUMAN SECURITY MODULES
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Complete Privilege Lifecycle Control
              </h2>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODULES.map((mod, idx) => (
              <FadeInView key={mod.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#121212] p-8 md:p-10 h-full flex flex-col justify-between hover:border-[#FA582D]/40 transition-all">
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D]">
                      <mod.icon className="h-6 w-6" />
                    </div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      {mod.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{mod.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{mod.description}</p>
                  </div>

                  <div className="border-t border-white/5 pt-6 space-y-2">
                    {mod.features.map((feat) => (
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

      {/* Bottom CTA Banner */}
      <section className="pt-20">
        <div className="container-wide max-w-[1236px]">
          <FadeInView>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#161616] via-[#111111] to-[#0A0D14] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                  Eliminate standing privileges today.
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Schedule a technical identity review with our principal engineers to eliminate standing admin rights and deploy vaultless PAM.
                </p>
              </div>
              <Link
                href="/discuss-architecture"
                className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Human PAM Scope <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
