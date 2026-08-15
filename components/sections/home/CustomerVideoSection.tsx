'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'

const TESTIMONIALS = [
 {
 quote: 'GlyphaticSystems re-architected our legacy monolith into a high-performance Go backend. We saw a 90% reduction in latency and a 60% drop in our AWS bill within the first month.',
 name: 'Chief Technology Officer',
 company: 'FinTech India',
 industry: 'Financial Services',
 },
 {
 quote: 'Their BPO team isn\'t just reading off a script. They integrate deeply with our core operations, using AI tooling to handle complex tier-3 support tickets autonomously.',
 name: 'VP of Operations',
 company: 'SaaS Innovators',
 industry: 'Technology',
 },
 {
 quote: 'We needed a custom LLM pipeline built from scratch. Glyphatic delivered a scalable MLOps infrastructure that processes terabytes of data daily without breaking a sweat.',
 name: 'Director of AI Engineering',
 company: 'HealthAI Corp',
 industry: 'Healthcare',
 },
 {
 quote: 'Unlike typical outsourcing firms, the engineers at Glyphatic push back. They challenged our architecture decisions and ended up saving us months of technical debt.',
 name: 'Head of Engineering',
 company: 'Global Media Group',
 industry: 'Media & Entertainment',
 },
]

const CUSTOMER_LOGOS = [
 'FinTech India', 'SaaS Innovators', 'HealthAI Corp', 'Global Media Group', 'Tech Mahindra', 'Infosys',
 'TCS', 'Wipro', 'HCL', 'Cognizant', 'L&T Info', 'Mindtree',
]

export function CustomerVideoSection() {
 const [current, setCurrent] = useState(0)

 const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
 const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

 const testimonial = TESTIMONIALS[current]

 return (
 <section className="section-padding bg-gray-50">
 <div className="container-wide">
 <FadeInView>
 {/* Testimonial Card */}
 <div 
  className="relative rounded-2xl bg-gradient-to-br from-white via-brand-50 to-brand-100 p-10 md:p-16 overflow-hidden min-h-[400px] flex flex-col justify-center bg-cover bg-center"
 style={{
 backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop")'
 }}
 >
 <div className="absolute inset-0 bg-white/40" /> {/* Dark overlay for text readability */}
 {/* Decorative Elements */}
 <div className="absolute top-8 right-8 opacity-20">
 <Quote className="w-32 h-32 text-neutral-900" strokeWidth={1} />
 </div>
 <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0F4C81]/10 to-transparent" />

 <AnimatePresence mode="wait">
 <motion.div
 key={current}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.4 }}
 className="relative z-10 max-w-3xl"
 >
 <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-medium text-neutral-900 leading-relaxed">
 &ldquo;{testimonial.quote}&rdquo;
 </p>
 <div className="mt-8 flex items-center gap-4">
 <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center text-neutral-900 font-bold text-lg">
 {testimonial.company.charAt(0)}
 </div>
 <div>
 <p className="text-[15px] font-bold text-neutral-900">{testimonial.name}</p>
 <p className="text-[14px] text-neutral-900/60">{testimonial.company} · {testimonial.industry}</p>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>

 {/* Navigation */}
 <div className="absolute bottom-8 right-8 flex gap-2 z-10">
 <button
 type="button"
 onClick={prev}
 aria-label="Previous testimonial"
 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/30 text-neutral-900 hover:bg-black/10 transition-colors"
 >
 <ChevronLeft className="h-5 w-5" />
 </button>
 <button
 type="button"
 onClick={next}
 aria-label="Next testimonial"
 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/30 text-neutral-900 hover:bg-black/10 transition-colors"
 >
 <ChevronRight className="h-5 w-5" />
 </button>
 </div>

 {/* Progress Indicators */}
 <div className="absolute bottom-8 left-10 md:left-16 flex gap-2 z-10">
 {TESTIMONIALS.map((_, i) => (
 <button
 key={i}
 type="button"
 onClick={() => setCurrent(i)}
 aria-label={`Go to testimonial ${i + 1}`}
 className={`h-1.5 rounded-full transition-all ${
  i === current ? 'w-8 bg-[#0F4C81]' : 'w-4 bg-black/20 hover:bg-black/40'
 }`}
 />
 ))}
 </div>
 </div>
 </FadeInView>

 {/* Logo Marquee */}
 <div className="mt-12 overflow-hidden">
 <div className="flex animate-marquee gap-12 whitespace-nowrap">
 {[...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS].map((name, i) => (
 <div
 key={`${name}-${i}`}
 className="flex h-12 items-center justify-center shrink-0"
 >
 <span className="text-[14px] font-bold text-neutral-600 uppercase tracking-widest">
 {name}
 </span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 )
}
