import { Metadata } from 'next'
import { BookOpen, ShieldCheck, Users, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
 title: 'Support | GlyphaticSystems',
 description: 'Enterprise-grade support and resources for GlyphaticSystems clients.',
}

const SUPPORT_RESOURCES = [
 {
 icon: BookOpen,
 title: 'Technical Documentation',
 description: 'Explore comprehensive API references, integration guides, and architecture blueprints.',
 href: '/resources/architecture-patterns',
 linkText: 'Read the docs',
 },
 {
 icon: ShieldCheck,
 title: 'Managed Services Support',
 description: 'Priority access to our L3 engineering team. Guaranteed 24/7 SLA for mission-critical systems.',
 href: '#managed-services',
 linkText: 'View SLA details',
 },
 {
 icon: Users,
 title: 'Community & Open Source',
 description: 'Join our developer community to discuss best practices, scalable systems, and open-source contributions.',
 href: '/open-source',
 linkText: 'Join community',
 },
 {
 icon: MessageSquare,
 title: 'Open a Support Ticket',
 description: 'Submit an architecture review request or report a technical issue. We respond within 1 hour.',
 href: '#ticket',
 linkText: 'Submit ticket',
 },
]

export default function SupportPage() {
 return (
 <main className="min-h-screen bg-white pt-24 pb-32">
 {/* Hero Section */}
 <section className="relative overflow-hidden py-16 lg:py-24 border-b border-black/5">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(250,88,45,0.1)_0%,_transparent_50%)] pointer-events-none" />
 <div className="container-wide relative z-10">
 <FadeInView>
 <h1 className="text-[3rem] lg:text-[4rem] font-display font-bold text-neutral-900 tracking-tight mb-6">
 Glyphatic Support Hub
 </h1>
 <p className="text-[1.125rem] lg:text-[1.25rem] text-neutral-600 font-medium max-w-2xl leading-relaxed">
 Get direct access to our systems engineering team, extensive documentation, and community resources to scale your infrastructure confidently.
 </p>
 </FadeInView>
 </div>
 </section>

 {/* Resources Grid */}
 <section className="py-16 lg:py-24">
 <div className="container-wide">
 <FadeInView delay={0.2}>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
 {SUPPORT_RESOURCES.map((resource, i) => (
 <div 
 key={i}
 className="group relative flex flex-col rounded-2xl border border-black/10 bg-gray-50 p-8 lg:p-10 transition-all hover:bg-white hover:border-black/20"
 >
 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA582D]/10 text-[#FA582D]">
 <resource.icon className="h-6 w-6" />
 </div>
 <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">
 {resource.title}
 </h3>
 <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
 {resource.description}
 </p>
 <Link 
 href={resource.href}
 className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#FA582D] transition-colors group-hover:text-neutral-900"
 >
 {resource.linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
 </Link>
 </div>
 ))}
 </div>
 </FadeInView>
 </div>
 </section>

 {/* FAQ / Ticket Section */}
 <section className="py-16" id="ticket">
 <div className="container-wide">
 <FadeInView delay={0.4}>
 <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-8 lg:p-16 text-center">
 <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
 Need Priority Assistance?
 </h2>
 <p className="text-neutral-600 max-w-xl mx-auto mb-8">
 If you are a Managed Services client experiencing a critical incident, please use your dedicated Slack channel or escalate via the portal.
 </p>
 <Link
 href="mailto:support@glyphaticsystems.com"
 className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-black transition-colors hover:bg-neutral-200"
 >
 Email Support Team
 </Link>
 </div>
 </FadeInView>
 </div>
 </section>
 </main>
 )
}
