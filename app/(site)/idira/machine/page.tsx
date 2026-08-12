import { Metadata } from 'next'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
  KeyRound, 
  Database, 
  Server, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Cpu
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Machine Identity & Secrets Governance | Idira® Platform',
  description: 'Centralize secrets governance, static and dynamic application credentials, and API tokens across multi-cloud environments.',
}

const MODULES = [
  {
    icon: KeyRound,
    title: 'Secrets Management Engine',
    subtitle: 'Dynamic Secrets & Token Rotation',
    description: 'Automate short-lived credentials for PostgreSQL, MySQL, Redis, SSH keys, and cloud API tokens with zero manual overhead.',
    features: ['Dynamic Database Credentials', 'Automated Secret Rotation', 'Central KMS Integration', 'Zero Hardcoded Secrets'],
  },
  {
    icon: Database,
    title: 'Unified Secrets Governance',
    subtitle: 'Multi-Cloud Vault Orchestration',
    description: 'Single-pane-of-glass policy control spanning AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, and Google Cloud Secret Manager.',
    features: ['Multi-Cloud Policy Sync', 'Central Audit Logging', 'Compliance Drift Detection', 'Cross-Cloud Identity Mapping'],
  },
  {
    icon: Server,
    title: 'Application Credentials Delivery',
    subtitle: 'Zero-Trust Pipeline Credentials',
    description: 'Secure, just-in-time credential injection for Kubernetes workloads, GitHub Actions, GitLab CI, and Jenkins runners.',
    features: ['Kubernetes Pod Identity', 'CI/CD Pipeline Secrets Injection', 'Short-Lived TLS Certificates', 'gRPC & REST API Integration'],
  },
  {
    icon: Cloud,
    title: 'Cloud Workload Identity',
    subtitle: 'Serverless & Microservice Tokens',
    description: 'Cryptographically verify workload identities across AWS Lambda, Cloud Run, and ECS tasks with ephemeral token generation.',
    features: ['Ephemeral Workload Tokens', 'SPIFFE / SPIRE Open Standards', 'Zero-Trust Microservice Mesh', 'Automated Certificate Renewal'],
  },
]

export default function MachineIdentityPage() {
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
              <span>MACHINE IDENTITY SECURITY</span>
            </div>
            <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Unified Secrets & <br />
              <span className="text-[#FA582D]">Machine Credentials Governance.</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-400 font-medium max-w-3xl leading-relaxed mb-10">
              Eliminate hardcoded API keys and credentials sprawl. Rotate secrets dynamically and inject short-lived tokens into multi-cloud workloads and CI/CD pipelines.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/discuss-architecture"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Machine Secrets Scope <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Request Secrets Audit
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
                MACHINE SECURITY MODULES
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                End-to-End Machine Identity Automation
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
                  Stop hardcoding secrets in code repos.
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Connect with our cloud security engineers to set up automated secrets rotation and zero-trust credentials injection.
                </p>
              </div>
              <Link
                href="/discuss-architecture"
                className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
              >
                Discuss Secrets Architecture <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
