import { Metadata } from 'next'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
 ShieldCheck, 
 Cpu, 
 Layers, 
 Zap, 
 ArrowRight, 
 CheckCircle2, 
 XCircle,
 Activity,
 Lock,
 Globe
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Platformization Approach | GlyphaticSystems',
 description: 'Learn how Glyphatic Systems platformization empowers enterprises with AI-ready infrastructure and Precision AI security.',
}

const PILLARS = [
 {
 icon: Cpu,
 title: 'Precision AI® Engine',
 description: 'Autonomous threat detection and real-time log telemetry processing billions of data points daily with sub-second response times.',
 },
 {
 icon: Layers,
 title: 'Unified Architecture Data Mesh',
 description: 'Eliminate data silos with a single pane of glass spanning cloud workloads, microservices, and network perimeters.',
 },
 {
 icon: Lock,
 title: 'Agentic & Identity Security',
 description: 'Zero-trust privilege management for human users, automated machine credentials, and autonomous AI agents.',
 },
 {
 icon: Activity,
 title: 'Automated 90% MTTR Reduction',
 description: 'Self-healing infrastructure pipelines that automatically isolate breaches, roll back state, and resolve incidents without human delay.',
 },
]

const COMPARISON = [
 {
 aspect: 'Incident Response Time (MTTR)',
 before: 'Hours or days of manual investigation across disjointed tools',
 after: 'Sub-minute automated remediation (90% MTTR reduction)',
 },
 {
 aspect: 'Security Tool Sprawl',
 before: '25+ point solutions with overlapping alert fatigue',
 after: 'Single unified platform with Precision AI telemetry',
 },
 {
 aspect: 'AI Readiness & Compliance',
 before: 'Unmonitored shadow AI usage and data leakage risks',
 after: 'Built-in governance, AI model guardrails, and automated audit logs',
 },
 {
 aspect: 'Infrastructure Overhead',
 before: 'High maintenance costs and complex inter-vendor integrations',
 after: 'Streamlined boutique architecture built for 10x scale',
 },
]

export default function PlatformizationPage() {
 return (
 <main className="min-h-screen bg-white pt-24 pb-32 text-neutral-900">
 
 {/* Hero Section */}
 <section className="relative overflow-hidden py-20 lg:py-28 border-b border-black/5">
 <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.15)_0%,_transparent_70%)] pointer-events-none" />
 
 {/* Diagonal stripes pattern overlay */}
 <div 
 className="absolute inset-0 pointer-events-none opacity-20"
 style={{
 backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)',
 }}
 />

 <div className="container-wide max-w-[1236px] relative z-10">
 <FadeInView>
 <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
 GLYPHATIC PLATFORMIZATION APPROACH
 </span>
 <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-display font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
 Consolidate Complexity. <br />
 <span className="text-[#FA582D]">Harness AI-Ready Infrastructure.</span>
 </h1>
 <p className="text-[1.125rem] md:text-[1.25rem] text-neutral-600 font-medium max-w-3xl leading-relaxed mb-10">
 Modern enterprises cannot scale using fragmented point solutions. Our platformization framework unifies network security, cloud telemetry, and identity protection into a single, high-performance foundation powered by Precision AI®.
 </p>

 <div className="flex flex-wrap items-center gap-5">
 <Link
 href="/discuss-architecture"
 className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
 >
 Discuss Platform Scope <ArrowRight className="h-5 w-5" />
 </Link>
 <Link
 href="/services"
 className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/20 px-8 text-base font-bold text-neutral-900 transition-colors hover:bg-black/10"
 >
 Explore Platform Services
 </Link>
 </div>
 </FadeInView>
 </div>
 </section>

 {/* Core Platformization Pillars */}
 <section className="py-20 lg:py-28">
 <div className="container-wide max-w-[1236px]">
 <FadeInView>
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
 FOUR PILLARS OF CONTROL
 </span>
 <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">
 Why Enterprise Leaders Choose Platformization
 </h2>
 </div>
 </FadeInView>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {PILLARS.map((pillar, idx) => (
 <FadeInView key={pillar.title} delay={idx * 0.1}>
 <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 h-full relative overflow-hidden group hover:border-[#FA582D]/40 transition-all">
 <div className="absolute top-0 right-0 p-8 text-neutral-900/5 group-hover:text-[#FA582D]/10 transition-colors">
 <pillar.icon className="h-24 w-24" />
 </div>
 <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D] relative z-10">
 <pillar.icon className="h-6 w-6" />
 </div>
 <h3 className="text-2xl font-bold text-neutral-900 mb-3 relative z-10">{pillar.title}</h3>
 <p className="text-neutral-600 text-sm leading-relaxed relative z-10">{pillar.description}</p>
 </div>
 </FadeInView>
 ))}
 </div>
 </div>
 </section>

 {/* Before vs After Comparison Grid */}
 <section className="py-20 bg-[#0d1017] border-y border-black/5">
 <div className="container-wide max-w-[1236px]">
 <FadeInView>
 <div className="max-w-3xl mb-16">
 <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-3">
 TRANSFORMATION IMPACT
 </span>
 <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
 Legacy Tool Sprawl vs. Platform Integration
 </h2>
 <p className="text-neutral-600 text-base">
 Comparing traditional fragmented operations with Glyphatic's unified platform approach.
 </p>
 </div>
 </FadeInView>

 <div className="space-y-4">
 {COMPARISON.map((item, idx) => (
 <FadeInView key={item.aspect} delay={idx * 0.1}>
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-xl border border-black/5 bg-white p-6 items-center">
 <div className="lg:col-span-4 font-bold text-neutral-900 text-base">
 {item.aspect}
 </div>
 <div className="lg:col-span-4 flex items-center gap-3 text-xs text-neutral-600 bg-red-500/5 p-3 rounded-lg border border-red-500/10">
 <XCircle className="h-4 w-4 text-red-400 shrink-0" />
 <span>{item.before}</span>
 </div>
 <div className="lg:col-span-4 flex items-center gap-3 text-xs text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
 <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
 <span>{item.after}</span>
 </div>
 </div>
 </FadeInView>
 ))}
 </div>
 </div>
 </section>

 {/* Bottom CTA */}
 <section className="pt-20">
 <div className="container-wide max-w-[1236px]">
 <FadeInView>
 <div className="rounded-3xl border border-black/10 bg-gradient-to-r from-[#161616] via-[#111111] to-[#0A0D14] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
 <div className="max-w-2xl">
 <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
 Ready to embrace platformization?
 </h2>
 <p className="text-neutral-600 text-base leading-relaxed">
 Schedule an architecture review with our principal engineers to design your platform transition plan.
 </p>
 </div>
 <Link
 href="/discuss-architecture"
 className="shrink-0 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FA582D] px-8 text-base font-bold text-black transition-colors hover:bg-[#E0431A]"
 >
 Discuss Platform Scope <ArrowRight className="h-5 w-5" />
 </Link>
 </div>
 </FadeInView>
 </div>
 </section>

 </main>
 )
}
