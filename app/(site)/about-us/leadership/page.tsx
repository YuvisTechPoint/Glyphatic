import { Metadata } from 'next'
import { FadeInView } from '@/components/animations/FadeInView'
import { Linkedin } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Leadership Team | Glyphatic',
 description: 'Meet the executive leadership team behind Glyphatic\'s AI-native business transformation ecosystem.',
}

const LEADERS = [
 {
 name: 'Debanjan Sandhaki',
 title: 'Founder & CEO',
 bio: 'The architect behind Glyphatic\'s unique end-to-end transformation ecosystem. Debanjan believes that true transformation isn\'t won in boardrooms—it\'s won in operations.',
 image: '/images/ceo-debanjan-sandhaki.jpg',
 linkedin: '#'
 },
 {
 name: 'Yuvraj Prasad',
 title: 'Chief Operating Officer',
 bio: 'Overseeing Glyphatic\'s managed operations and BPO divisions, Yuvraj ensures that every strategic transformation scales reliably and executes flawlessly post-implementation.',
 image: '/images/leader-yuvraj-prasad.jpg',
 linkedin: '#'
 }
]

export default function LeadershipPage() {
 return (
 <main className="min-h-screen bg-white pt-24 pb-32 text-neutral-900">
 <div className="container-wide">
 
 <FadeInView>
 <div className="max-w-3xl mb-16">
 <span className="block text-xs font-bold tracking-[0.15em] text-[#0F4C81] uppercase mb-4">
 GLYPHATIC LEADERSHIP
 </span>
 <h1 className="text-[3rem] md:text-[4rem] font-display font-bold tracking-tight leading-[1.1] mb-6">
 The architects of <span className="text-[#0F4C81]">transformation.</span>
 </h1>
 <p className="text-[1.125rem] text-neutral-600 font-medium leading-relaxed">
 Our leadership team brings together deep expertise across strategy, artificial intelligence, enterprise systems, and managed operations.
 </p>
 </div>
 </FadeInView>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {LEADERS.map((leader, idx) => (
 <FadeInView key={leader.name} delay={idx * 0.1}>
 <div className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-lg hover:border-[#0F4C81]/30 hover:shadow-2xl transition-all">
 <div className="aspect-[4/5] overflow-hidden relative">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img 
 src={leader.image} 
 alt={leader.name}
 className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
 </div>
 
 <div className="p-8">
 <div className="flex items-center justify-between mb-2">
 <h3 className="text-2xl font-bold text-neutral-900">{leader.name}</h3>
 <a href={leader.linkedin} className="text-neutral-500 hover:text-[#0F4C81] transition-colors" aria-label={`${leader.name} LinkedIn`}>
 <Linkedin className="w-5 h-5" />
 </a>
 </div>
 <p className="text-sm font-bold text-[#0F4C81] uppercase tracking-wider mb-4">
 {leader.title}
 </p>
 <p className="text-sm text-neutral-600 leading-relaxed">
 {leader.bio}
 </p>
 </div>
 </div>
 </FadeInView>
 ))}
 </div>
 
 </div>
 </main>
 )
}
