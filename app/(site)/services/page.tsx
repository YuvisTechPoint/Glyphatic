import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Cpu, 
  Cloud, 
  Server, 
  Database, 
  Smartphone, 
  Headphones, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Engineering Services | GlyphaticSystems',
  description: 'Boutique technology foundations built for India’s next billion-dollar infrastructure.',
}

const SERVICES = [
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    subtitle: 'Precision AI & LLM Infrastructure',
    description: 'Custom fine-tuning, retrieval-augmented generation (RAG), and high-throughput inference engines engineered for high-concurrency environments.',
    href: '/services/ai-ml',
    features: ['LLM Fine-tuning', 'RAG Pipelines', 'GPU Cluster Optimization', 'Real-time Inference API'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    subtitle: 'Multi-Cloud Resilience & Kubernetes',
    description: 'Cloud-native architecture designed for zero downtime, automated CI/CD pipelines, and multi-region failover across AWS, GCP, and Azure.',
    href: '/services/cloud-infrastructure',
    features: ['Terraform IaC', 'Kubernetes Orchestration', 'Cost Optimization', 'Zero-Downtime Migration'],
  },
  {
    icon: Server,
    title: 'High-Performance Backends',
    subtitle: 'Low-Latency Microservices',
    description: 'Event-driven, distributed backends built in Go, Rust, and Node.js capable of processing millions of concurrent API transactions per second.',
    href: '/services/backend-engineering',
    features: ['gRPC & WebSockets', 'Kafka Event Streaming', 'Sub-10ms Latency', 'Distributed Caching'],
  },
  {
    icon: Database,
    title: 'Data Engineering & MLOps',
    subtitle: 'Peta-Scale Data Warehousing',
    description: 'End-to-end data pipelines, real-time analytics stream processing, and MLOps workflows to turn raw data into instant operational intelligence.',
    href: '/services/data-engineering',
    features: ['Apache Spark / Flink', 'Feature Stores', 'Automated Model Drift Detection', 'Snowflake & ClickHouse'],
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Engineering',
    subtitle: 'Next.js & React Native Solutions',
    description: 'Pixel-perfect, lightning-fast digital applications crafted for seamless user experiences across web, iOS, and Android platforms.',
    href: '/services/web-development',
    features: ['Next.js 14 App Router', 'React Native / Flutter', 'Offline-First Architecture', 'PWA Optimization'],
  },
  {
    icon: Headphones,
    title: 'Intelligent BPO & Operations',
    subtitle: 'Managed Tech Support & Operations',
    description: 'Tech-enabled business process outsourcing powered by automated AI agents and 24/7 specialized L3 engineering support staff.',
    href: '/services/intelligent-bpo',
    features: ['24/7 L3 Support Desk', 'AI Agent Integration', 'Process Automation', 'Custom SLA Monitoring'],
  },
]

const METHODOLOGY = [
  { step: '01', title: 'Architectural Audit', desc: 'In-depth analysis of existing system bottlenecks, latency metrics, and infrastructure overhead.' },
  { step: '02', title: 'PoC in 14 Days', desc: 'Rapid delivery of a functional proof-of-concept proving throughput, latency, and cost reduction.' },
  { step: '03', title: 'Production Scaling', desc: 'Zero-downtime deployment with automated canary releases, monitoring dashboards, and alerting.' },
  { step: '04', title: 'Managed SLA Handoff', desc: 'Continuous 24/7/365 infrastructure monitoring and ongoing L3 engineering support.' },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#0A0D14] pt-24 pb-32 text-neutral-900 dark:text-white transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-neutral-200 dark:border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(250,88,45,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <div className="inline-flex items-center rounded-full border border-[#FA582D]/30 bg-[#FA582D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FA582D] mb-6">
              Engineering Capabilities
            </div>
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Foundational Engineering <br className="hidden sm:block" />
              <span className="text-[#FA582D]">Built to Scale Without Limits.</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
              We design, build, and operate resilient technology foundations for ambitious Indian enterprises demanding sub-second latencies and 99.999% uptime.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <FadeInView>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                  Core Specializations
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  Tailored Technology Solutions
                </h2>
              </div>
              <Link
                href="/discuss-architecture"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FA582D] hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Discuss a custom service scope <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <FadeInView key={service.title} delay={idx * 0.1}>
                <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#111111] p-8 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D] group-hover:bg-[#FA582D] group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-2 mb-8 border-t border-neutral-200 dark:border-white/5 pt-6">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                          <CheckCircle className="h-3.5 w-3.5 text-[#FA582D] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#FA582D] group-hover:text-neutral-900 group-hover:dark:text-white transition-colors"
                    >
                      Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Methodology Section */}
      <section className="py-20 bg-white dark:bg-[#0d1017] border-y border-neutral-200 dark:border-white/5 transition-colors duration-200">
        <div className="container-wide">
          <FadeInView>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
                HOW WE DELIVER
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white">
                Boutique Delivery Methodology
              </h2>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map((m, idx) => (
              <FadeInView key={m.step} delay={idx * 0.15}>
                <div className="rounded-2xl border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-[#121212] p-8 h-full shadow-sm transition-colors duration-200">
                  <div className="text-3xl font-display font-bold text-[#FA582D] mb-4">
                    {m.step}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{m.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pt-20">
        <div className="container-wide">
          <FadeInView>
            <div className="rounded-3xl border border-neutral-200 dark:border-white/10 bg-gradient-to-br from-neutral-100 via-white to-neutral-50 dark:from-[#1a1a1a] dark:via-[#111111] dark:to-[#0A0D14] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden transition-colors duration-200">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                  Ready to upgrade your technology foundation?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                  Connect directly with our lead architects to evaluate your infrastructure, eliminate bottlenecks, and scale with confidence.
                </p>
              </div>
              <Link
                href="/discuss-architecture"
                className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-white transition-colors hover:bg-[#E0431A]"
              >
                Discuss Your Architecture <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
