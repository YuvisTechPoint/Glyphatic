import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
 title: 'About Us | Palo Alto Networks',
 description: 'Palo Alto Networks is the global cybersecurity leader. Learn about our mission, leadership, locations, and commitment to a safer digital world.',
}

const STATS = [
 { value: '13,000+', label: 'Employees Worldwide' },
 { value: '80+', label: 'Countries Served' },
 { value: '70K+', label: 'Customers' },
 { value: '$8B+', label: 'Annual Revenue' },
]

const LINKS = [
 { label: 'Corporate Responsibility', href: '/about-us/corporate-responsibility', icon: Globe },
 { label: 'Global Locations', href: '/about-us/locations', icon: MapPin },
 { label: 'Executive Briefing Program', href: '/about-us/executive-briefing-program', icon: Users },
 { label: 'Analyst Recognition', href: '/why-paloaltonetworks/platformization', icon: Award },
]

export default function AboutUsPage() {
 return (
 <>
 {/* Hero */}
 <section className="bg-neutral-950 pb-20 pt-28 text-neutral-900">
 <div className="container-content">
 <p className="label-eyebrow mb-4 text-brand-400">About Us</p>
 <h1 className="mb-6 max-w-3xl text-display-xl font-display">
 We Are the Global Cybersecurity Leader
 </h1>
 <p className="max-w-2xl text-body-xl text-neutral-600">
 Our mission is to protect our way of life in the digital age by preventing successful
 cyberattacks. We safely enable tens of thousands of organisations across 80+ countries
 with our AI-powered security platforms.
 </p>
 </div>
 </section>

 {/* Stats */}
 <section className="border-b border-base-border bg-white">
 <div className="container-content py-10">
 <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
 {STATS.map((s) => (
 <div key={s.label} className="text-center">
 <p className="text-stat-lg font-display font-bold text-brand-500">{s.value}</p>
 <p className="text-body-sm text-neutral-500">{s.label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Mission */}
 <section className="section-padding bg-base-surface">
 <div className="container-narrow text-center">
 <h2 className="mb-6 text-display-md text-neutral-900">Our Mission</h2>
 <blockquote className="text-body-xl italic text-neutral-600">
 "To protect our way of life in the digital age by preventing successful cyberattacks."
 </blockquote>
 </div>
 </section>

 {/* About Links */}
 <section className="section-padding bg-white">
 <div className="container-content">
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {LINKS.map((l) => (
 <Link
 key={l.label}
 href={l.href}
 className="group flex flex-col items-center rounded-md border border-base-border bg-base-surface p-8 text-center hover:shadow-hover hover:border-brand-200 transition-all"
 >
 <l.icon className="mb-4 h-8 w-8 text-brand-500" />
 <span className="font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors">
 {l.label}
 </span>
 <ArrowRight className="mt-2 h-4 w-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
 </Link>
 ))}
 </div>
 </div>
 </section>
 </>
 )
}
