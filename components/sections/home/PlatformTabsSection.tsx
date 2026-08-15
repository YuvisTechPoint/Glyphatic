'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Trophy, Plus } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { FadeInView } from '@/components/animations/FadeInView'
import { tabPanel } from '@/lib/animations'
import { cn } from '@/lib/utils'

type ThemeColor = 'yellow' | 'green' | 'emerald' | 'blue'

interface PlatformTab {
 id: string
 label: string
 headline: string
 body: string
 themeColor: ThemeColor
 stats: { value: number | string; suffix?: string; label: string; decimals?: number }[]
 ctaText: string
 ctaHref: string
 awards: { name: string; url?: string; org?: string }[]
 logos: { name: string }[]
}

const PLATFORM_TABS: PlatformTab[] = [
 {
 id: 'network',
 label: 'AI-Powered Network Security',
 headline: 'AI-Powered Network Security',
 themeColor: 'yellow',
 body: 'Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.',
 stats: [
 { value: '95', suffix: '%', label: 'OF THE FORTUNE 100' },
 { value: '70', suffix: ' K', label: 'CUSTOMERS' },
 ],
 ctaText: 'Explore Network Security',
 ctaHref: '/network-security',
 awards: [
 { org: 'Gartner', name: '2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall' },
 { org: 'Gartner', name: '2025 Gartner® Magic Quadrant™ for SASE Platforms' },
 { org: 'Forrester', name: 'The Forrester Wave™: Enterprise Firewall Solutions' },
 { org: 'Gartner', name: 'Gartner® Magic Quadrant™ for Single-Vendor SASE' },
 ],
 logos: [
 { name: 'Westfield' },
 { name: 'TriHealth' },
 { name: 'Village Roadshow' },
 { name: 'US Signals' },
 { name: 'Salesforce' },
 ],
 },
 {
 id: 'secops',
 label: 'AI-Driven Security Operations',
 headline: 'AI-Driven Security Operations',
 themeColor: 'green',
 body: 'Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence and automation.',
 stats: [
 { value: '700', suffix: '+', label: 'PARTNER INTEGRATIONS' },
 { value: '480', suffix: ' B', label: 'ENDPOINTS SCANNED DAILY' },
 ],
 ctaText: 'Explore SecOps',
 ctaHref: '/cortex',
 awards: [
 { org: 'Gartner', name: '2024 Gartner® Magic Quadrant™ for Endpoint Protection Platforms' },
 { org: 'Forrester', name: 'Forrester Cybersecurity IR Services Wave' },
 { org: 'Frost & Sullivan', name: 'Frost & Sullivan MDR Radar' },
 { org: 'Forrester', name: 'Forrester Wave™: Extended Detection And Response Platforms, Q2 2024' },
 ],
 logos: [
 { name: 'Infosys' },
 { name: 'Schlumberger' },
 { name: 'Grupo Bimbo' },
 { name: 'Better' },
 { name: 'Toyota' },
 ],
 },
 {
 id: 'cloud',
 label: 'Real-Time Cloud Security',
 headline: 'Real-Time Cloud Security',
 themeColor: 'emerald',
 body: "See more, remediate faster, and prevent what others miss with independent, multi-cloud protection on the only platform that merges the industry's leading CNAPP with best-in-class CDR.",
 stats: [
 { value: '90', suffix: '%', label: 'RISK REDUCTION WITH SHIFT LEFT' },
 { value: '25', suffix: 'x', label: 'REDUCTION IN ALERTS & REMEDIATION WORKFLOWS' },
 ],
 ctaText: 'Explore Cloud Security',
 ctaHref: '/cortex/cloud',
 awards: [
 { org: 'GigaOm', name: 'A Leader and Outperformer in the GigaOm Radar for CIEM' },
 { org: 'GigaOm', name: 'Palo Alto Networks: Cloud Security Leader in First-Ever CNAPP Report' },
 { org: 'Forrester', name: 'The Forrester Wave™: Cloud Workload Security, Q1 2024' },
 { org: 'Frost & Sullivan', name: 'Frost Radar™: Cloud Security Posture Management, 2024' },
 ],
 logos: [
 { name: 'Infosys' },
 { name: 'Schlumberger' },
 { name: 'Grupo Bimbo' },
 { name: 'Toyota' },
 { name: 'Salesforce' },
 ],
 },
 {
 id: 'identity',
 label: 'Next-Generation Identity Security',
 headline: 'Next-Generation Identity Security',
 themeColor: 'blue',
 body: 'Idira secures every identity for the enterprise - human, machine and agentic - with a unified control plane that discovers risk, applies privilege dynamically, and governs the full lifecycle from first access to final session.',
 stats: [
 { value: '10', suffix: ' K', label: 'CUSTOMERS' },
 { value: '55', suffix: '%', label: 'OF THE FORTUNE 500' },
 ],
 ctaText: 'Explore Identity Security',
 ctaHref: '/idira',
 awards: [
 { org: 'Gartner', name: 'Magic Quadrant ® for Privileged Access Management, 2025' },
 { org: 'Forrester', name: 'The Forrester Wave™: Privileged Identity Management, 2025' },
 { org: 'KuppingerCole', name: 'Leadership Compass: Access Management, 2025' },
 { org: 'KuppingerCole', name: 'Leadership Compass: Identity Threat Detection & Response, 2025' },
 ],
 logos: [
 { name: 'Carnival Corporation' },
 { name: 'Maximus' },
 { name: 'Northern Trust' },
 { name: 'Transgourmet' },
 { name: 'Panasonic' },
 ],
 },
]

const THEME_STYLES = {
 yellow: {
 title: 'text-[#FACC15]',
 btnBg: 'bg-[#FACC15]',
 btnText: 'text-black',
 awardBg: 'bg-[#FACC15]',
 iconColor: 'text-[#FACC15]',
 borderLine: 'bg-[#FACC15]',
 },
 green: {
 title: 'text-[#00E676]',
 btnBg: 'bg-[#00E676]',
 btnText: 'text-black',
 awardBg: 'bg-[#00E676]',
 iconColor: 'text-[#00E676]',
 borderLine: 'bg-[#00E676]',
 },
 emerald: {
 title: 'text-[#00C853]', 
 btnBg: 'bg-[#00C853]',
 btnText: 'text-black',
 awardBg: 'bg-[#00C853]',
 iconColor: 'text-[#00C853]',
 borderLine: 'bg-[#00C853]',
 },
 blue: {
 title: 'text-[#2962FF]',
 btnBg: 'bg-[#2962FF]',
 btnText: 'text-neutral-900',
 awardBg: 'bg-[#84FFFF]', // cyan award cards
 iconColor: 'text-[#2962FF]',
 borderLine: 'bg-[#2962FF]',
 }
}

export function PlatformTabsSection() {
 const [activeTab, setActiveTab] = useState(PLATFORM_TABS[0].id)
 const containerRef = useRef<HTMLElement>(null)
 
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end end"]
 })

 useMotionValueEvent(scrollYProgress, "change", (latest) => {
 const numTabs = PLATFORM_TABS.length
 const segment = 1 / numTabs
 
 let index = Math.floor(latest / segment)
 if (index >= numTabs) index = numTabs - 1
 
 const targetTabId = PLATFORM_TABS[index].id
 if (activeTab !== targetTabId) {
 setActiveTab(targetTabId)
 }
 })

 // Prevent default click from breaking the scroll sync. Instead, let them know it's scroll-based.
 // Or alternatively, we can scroll the window to the corresponding segment.
 const handleTabClick = (index: number) => {
 if (!containerRef.current) return
 
 const containerTop = containerRef.current.offsetTop
 const containerHeight = containerRef.current.offsetHeight
 const scrollHeightPerTab = containerHeight / PLATFORM_TABS.length
 
 // Calculate the target scroll position for this tab
 const targetScrollY = containerTop + (scrollHeightPerTab * index) + (scrollHeightPerTab * 0.1)
 
 window.scrollTo({
 top: targetScrollY,
 behavior: 'smooth'
 })
 }

 const current = PLATFORM_TABS.find((t) => t.id === activeTab) ?? PLATFORM_TABS[0]
 const styles = THEME_STYLES[current.themeColor]

 return (
 <section ref={containerRef} className="relative h-[400vh] bg-gray-50">
 <div className="sticky top-0 min-h-screen flex flex-col justify-center py-16 md:py-24 overflow-hidden">
 <div className="container-wide relative z-10 w-full">
 <FadeInView>
 <div className="w-[120px] md:w-[150px] border-t border-[#FA582D] mb-6" />
 <h2 className="max-w-2xl font-display text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.2] text-neutral-900">
 Introducing the Platforms,<br className="hidden md:block" />powered by Precision AI
 </h2>
 </FadeInView>

 <div className="mt-12 md:mt-16">
 <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10">
 {PLATFORM_TABS.map((tab, index) => {
 const isActive = activeTab === tab.id
 const tabStyles = THEME_STYLES[tab.themeColor]
 return (
 <div key={tab.id} className="relative pb-2">
 <button
 type="button"
 onClick={() => handleTabClick(index)}
 className={cn(
 'shrink-0 flex items-center gap-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors',
 isActive ? 'text-neutral-900' : 'text-[#999999] hover:text-neutral-900',
 )}
 >
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors", isActive ? tabStyles.iconColor : "text-[#666666]")}>
 <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 {tab.label}
 </button>
 {isActive && (
 <motion.div
 layoutId="platform-tab-underline"
 className={cn("absolute bottom-0 left-0 right-0 h-[2px]", tabStyles.borderLine)}
 transition={{ type: 'spring', stiffness: 380, damping: 30 }}
 />
 )}
 </div>
 )
 })}
 </div>
 </div>

 <div className="mt-10 md:mt-16 min-h-[500px]">
 <AnimatePresence mode="wait">
 <motion.div
 key={current.id}
 variants={tabPanel}
 initial="hidden"
 animate="visible"
 exit="exit"
 className="relative"
 >
 {/* Ambient Background Graphic behind content */}
 <div className="absolute inset-0 right-1/4 opacity-10 pointer-events-none">
 <div className={cn("w-full h-[600px] bg-gradient-to-tr from-transparent via-current to-transparent", styles.iconColor)} style={{ maskImage: 'repeating-linear-gradient(45deg, black 0, black 1px, transparent 2px, transparent 8px)' }}></div>
 </div>

 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
 {/* Left Content Side */}
 <div>
 <h3 className={cn("font-display text-[2rem] md:text-[2.5rem] leading-tight tracking-[0.15em] uppercase mb-6 md:mb-8", styles.title)}>
 {current.headline}
 </h3>
 
 <p className="max-w-2xl text-[15px] md:text-[16px] text-neutral-900 leading-relaxed font-medium">
 {current.body}
 </p>

 <div className="mt-10 md:mt-12 flex gap-12 md:gap-16">
 {current.stats.map((stat) => (
 <div key={stat.label}>
 <div className="text-[2rem] md:text-[2.5rem] font-bold text-neutral-900 mb-2 leading-none flex items-baseline">
 {stat.value}
 {stat.suffix && <span className="text-[1.5rem] ml-1">{stat.suffix}</span>}
 </div>
 <div className="text-[10px] md:text-[11px] font-bold text-neutral-900 uppercase tracking-widest">
 {stat.label}
 </div>
 </div>
 ))}
 </div>

 <div className="mt-10">
 <Link
 href={current.ctaHref}
 className={cn(
 "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold transition-transform hover:scale-105",
 styles.btnBg,
 styles.btnText
 )}
 >
 {current.ctaText}
 <ArrowRight className="h-4 w-4" />
 </Link>
 </div>
 </div>
 
 {/* Right Content Side - Award Cards */}
 <div className="flex flex-col">
 <div className="flex justify-end mb-4">
 <button className="flex items-center gap-2 text-[12px] font-bold text-neutral-900 hover:text-gray-300 transition-colors uppercase tracking-wider">
 See all
 <Plus className="h-4 w-4" />
 </button>
 </div>
 
 <div className="grid sm:grid-cols-2 gap-4">
 {current.awards.map((award) => (
 <div
 key={award.name}
 className={cn("flex items-start gap-4 p-5 rounded-lg border border-transparent shadow-lg hover:brightness-110 transition-all", styles.awardBg)}
 >
 <Trophy className="h-6 w-6 text-black shrink-0" strokeWidth={1.5} />
 <div className="flex flex-col">
 {award.org && (
 <span className="text-[13px] font-bold text-black mb-1">
 {award.org}
 </span>
 )}
 <span className="text-[12px] text-black font-medium leading-snug">
 {award.name}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <TrustedByLogos logos={current.logos} className="mt-12 md:mt-20 border-t border-black/10 pt-10" />
 </motion.div>
 </AnimatePresence>
 </div>
 </div>
 </div>
 </section>
 )
}
