'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Mail, Globe2, Building2 } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export default function ContactSalesPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] pt-32 pb-24 transition-colors duration-200">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Trust Signals */}
          <div>
            <FadeInView>
              <div className="w-16 border-t-2 border-[#FA582D] mb-8" />
              <h1 className="font-display text-[3rem] md:text-[4rem] font-medium leading-[1.1] text-neutral-900 dark:text-white mb-6">
                Let's talk about your transformation.
              </h1>
              <p className="text-[1.125rem] text-neutral-600 dark:text-neutral-400 mb-12 max-w-lg leading-relaxed">
                Connect with our experts to discover how Glyphatic can help you build intelligent operations, drive revenue, and secure your digital future.
              </p>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#FA582D]/10 flex items-center justify-center shrink-0">
                    <Globe2 className="h-5 w-5 text-[#FA582D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Global Headquarters</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">123 Innovation Drive<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#FA582D]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#FA582D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Direct Sales</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">+1 (800) 555-0199<br />Mon-Fri, 8am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#FA582D]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#FA582D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Email Us</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">enterprise@glyphatic.com<br />partnerships@glyphatic.com</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.2} className="border-t border-neutral-200 dark:border-white/10 pt-10">
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-60 grayscale">
                <span className="font-display font-bold text-xl text-neutral-900 dark:text-white">Salesforce</span>
                <span className="font-display font-bold text-xl text-neutral-900 dark:text-white">Infosys</span>
                <span className="font-display font-bold text-xl text-neutral-900 dark:text-white">Toyota</span>
                <span className="font-display font-bold text-xl text-neutral-900 dark:text-white">Pfizer</span>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Contact Form */}
          <FadeInView delay={0.3} className="lg:pl-10">
            <div className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
              {/* Form background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FA582D] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">Request Received</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Thank you for reaching out. One of our enterprise experts will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">First Name *</label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Last Name *</label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Work Email *</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Company Name *</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                      <input 
                        required
                        type="text" 
                        id="company" 
                        className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg pl-12 pr-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Primary Interest</label>
                    <select 
                      id="interest" 
                      className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all appearance-none"
                    >
                      <option value="">Select an option...</option>
                      <option value="ai">AI Transformation</option>
                      <option value="digital">Digital Infrastructure</option>
                      <option value="revenue">Growth & Revenue</option>
                      <option value="operations">Intelligent Operations</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[13px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-lg px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FA582D]/50 focus:border-[#FA582D] transition-all resize-none"
                    ></textarea>
                  </div>

                  <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    By submitting this form, you agree to our <a href="/legal-notices/privacy" className="underline hover:text-neutral-900 dark:hover:text-white">Privacy Policy</a>. We will never share your information with third parties.
                  </p>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#FA582D] px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#E0431A]"
                  >
                    Contact Sales
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeInView>

        </div>
      </div>
    </main>
  )
}
