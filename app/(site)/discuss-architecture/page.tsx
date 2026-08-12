import { Metadata } from 'next'
import { FadeInView } from '@/components/animations/FadeInView'
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Server, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discuss Your Architecture | GlyphaticSystems',
  description: 'Schedule a technical architecture review with Glyphatic Systems engineering leads.',
}

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: 'Latency & Throughput Optimization',
    desc: 'Eliminate system bottlenecks and achieve sub-10ms response times for high-volume transactions.',
  },
  {
    icon: Server,
    title: 'Cloud-Native & Hybrid Design',
    desc: 'Build resilient Kubernetes and Terraform-backed multi-cloud deployments with zero single points of failure.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security & Compliance',
    desc: 'Zero-trust architecture, precision identity control, and end-to-end data encryption by default.',
  },
  {
    icon: Clock,
    title: '14-Day PoC Guarantee',
    desc: 'Receive a working proof-of-concept proving operational benchmarks before committing to full migration.',
  },
]

export default function DiscussArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] pt-24 pb-32 text-white">
      <div className="container-wide">
        
        {/* Header Title */}
        <FadeInView>
          <div className="max-w-3xl mb-16">
            <span className="block text-xs font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
              TECHNICAL CONSULTATION
            </span>
            <h1 className="text-[3rem] md:text-[4rem] font-display font-bold tracking-tight leading-[1.1] mb-6">
              Architect Your <span className="text-[#FA582D]">Next-Gen Infrastructure.</span>
            </h1>
            <p className="text-[1.125rem] text-neutral-400 font-medium leading-relaxed">
              Connect directly with senior L3 systems architects to evaluate your technology stack, resolve scale constraints, and design a bulletproof roadmap.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Technical Context & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <FadeInView delay={0.2}>
              <div className="space-y-6">
                {HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-xl border border-white/5 bg-[#121212] transition-colors hover:border-white/10">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#FA582D]/10 text-[#FA582D] flex items-center justify-center">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagement Commitment Box */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#161616] to-[#0A0D14] p-6 mt-8">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Our Engineering Guarantee</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Every consultation is led by practicing principal engineers—not sales representatives. You will leave with actionable architectural recommendations regardless of whether you choose to partner with us.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FA582D]">
                  <CheckCircle2 className="h-4 w-4" /> 1-Hour Response Time SLA
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Architectural Intake Form */}
          <div className="lg:col-span-7">
            <FadeInView delay={0.3}>
              <div className="rounded-[24px] border border-white/10 bg-[#121212] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FA582D]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">System Intake & Scope</h3>
                <p className="text-neutral-400 text-sm mb-8">Tell us about your current infrastructure and scale requirements.</p>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full h-11 rounded-lg border border-white/10 bg-[#0A0D14] px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" 
                        placeholder="e.g. Vikram Sharma" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full h-11 rounded-lg border border-white/10 bg-[#0A0D14] px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" 
                        placeholder="vikram@company.com" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Company & Role *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full h-11 rounded-lg border border-white/10 bg-[#0A0D14] px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" 
                        placeholder="e.g. Tech Lead at ScalePay" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Primary Architecture Focus *</label>
                      <select 
                        required
                        className="w-full h-11 rounded-lg border border-white/10 bg-[#0A0D14] px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled selected>Select primary goal...</option>
                        <option value="cloud-migration">Cloud Migration & Multi-Cloud DevOps</option>
                        <option value="ai-infrastructure">AI / LLM Infrastructure & RAG</option>
                        <option value="backend-scaling">High-Throughput Backend & Microservices</option>
                        <option value="database-performance">Database & Data Engineering Optimization</option>
                        <option value="security-hardening">Enterprise Security & Compliance</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Current Stack & Concurrency Goals</label>
                    <input 
                      type="text" 
                      className="w-full h-11 rounded-lg border border-white/10 bg-[#0A0D14] px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" 
                      placeholder="e.g. AWS, Kubernetes, Postgres, targeting 100k RPS" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Key Architectural Challenges</label>
                    <textarea 
                      rows={4}
                      className="w-full rounded-lg border border-white/10 bg-[#0A0D14] p-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all resize-none" 
                      placeholder="Describe bottlenecks, current outages, latency spikes, or upcoming scaling milestones..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full h-12 rounded-full bg-[#FA582D] text-black font-bold text-base flex items-center justify-center gap-2 hover:bg-[#E0431A] transition-all shadow-lg hover:shadow-orange-500/20 active:scale-[0.99] mt-4"
                  >
                    Submit Architecture Request <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    Your infrastructure data is protected under strict mutual NDA standards.
                  </p>
                </form>
              </div>
            </FadeInView>
          </div>

        </div>
      </div>
    </main>
  )
}
