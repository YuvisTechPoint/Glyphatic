import { Metadata } from 'next'
import { FadeInView } from '@/components/animations/FadeInView'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started | GlyphaticSystems',
  description: 'Request a demo, proof of concept, or architecture review.',
}

const BENEFITS = [
  'End-to-end architecture review',
  'Proof of Concept (PoC) within 14 days',
  'Scalability and latency assessment',
  'Dedicated Lead Systems Engineer',
]

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] pt-24 pb-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Context / Trust */}
          <FadeInView>
            <div>
              <div className="inline-flex items-center rounded-full border border-[#FA582D]/30 bg-[#FA582D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FA582D] mb-6">
                Demos & Trials
              </div>
              <h1 className="text-[3rem] lg:text-[4rem] font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
                Start Your Engineering Transformation
              </h1>
              <p className="text-[1.125rem] text-neutral-400 font-medium leading-relaxed mb-10">
                Whether you need to scale an existing monolithic system or build a cloud-native architecture from scratch, our boutique engineering team is ready to deliver. Request a consultation to explore how we can accelerate your technical roadmap.
              </p>

              <div className="space-y-4 mb-12">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FA582D]" />
                    <span className="text-[15px] font-medium text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust block */}
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.714 4.02-3.805 4.887-1.121.365.617.443.916.483 1.135h4.613c-.158-4.992-3.238-9.066-8.328-9.066-4.526 0-6.685 2.115-6.685 6.643v9.799h5.03zm-10.999 0v-7.391c0-5.714 4.02-3.805 4.887-1.121.365.617.443.916.483 1.135h4.613c-.158-4.992-3.238-9.066-8.328-9.066-4.526 0-6.685 2.115-6.685 6.643v9.799h5.03z"/></svg>
                </div>
                <p className="text-neutral-300 text-sm italic mb-4 leading-relaxed">
                  "Glyphatic completely overhauled our legacy backend, reducing latency by 90% and enabling us to handle 10x our peak traffic. Their engineering rigor is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <span className="text-brand-500 text-xs font-bold">CTO</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">SaaS Innovators</div>
                    <div className="text-xs text-neutral-500">Enterprise Client</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Right Column: Lead Form */}
          <FadeInView delay={0.2}>
            <div className="rounded-[24px] border border-white/10 bg-[#111111] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FA582D]/10 blur-[70px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-2">Request an Architecture Review</h3>
              <p className="text-neutral-400 text-[15px] mb-8">Fill out the form below and an engineering lead will contact you within 24 hours.</p>
              
              <form className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-neutral-300 uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full h-11 rounded-lg border border-white/10 bg-black/50 px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-neutral-300 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="w-full h-11 rounded-lg border border-white/10 bg-black/50 px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-neutral-300 uppercase tracking-wide">Work Email</label>
                  <input type="email" className="w-full h-11 rounded-lg border border-white/10 bg-black/50 px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-neutral-300 uppercase tracking-wide">Primary Interest</label>
                  <select className="w-full h-11 rounded-lg border border-white/10 bg-black/50 px-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select an area of focus...</option>
                    <option value="cloud">Cloud Infrastructure & DevOps</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="backend">High-Performance Backends</option>
                    <option value="security">Enterprise Security</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-neutral-300 uppercase tracking-wide">Project Details</label>
                  <textarea className="w-full h-24 rounded-lg border border-white/10 bg-black/50 p-4 text-white text-sm outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all resize-none" placeholder="Briefly describe your infrastructure challenges..."></textarea>
                </div>
                
                <button type="button" className="w-full h-12 rounded-xl bg-[#FA582D] text-black font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#E0431A] transition-colors mt-4">
                  Request Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </FadeInView>

        </div>
      </div>
    </main>
  )
}
