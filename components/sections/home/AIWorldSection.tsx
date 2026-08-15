'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'

const GOOD_NEWS_STATS = [
 {
 value: 78,
 suffix: '%',
 label: '~1.5X growth',
 sublabel: 'IN USAGE IN LAST \n12 MONTHS'
 },
 {
 value: 94,
 suffix: '%',
 label: 'development',
 sublabel: 'ENTERPRISES USING GEN AI \nSOFTWARE'
 },
] as const

const BAD_NEWS_STATS = [
 {
 value: 56,
 suffix: '%',
 label: 'INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)',
 },
 {
 value: 73,
 suffix: '%',
 label: 'INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)',
 },
 {
 value: 56,
 suffix: '%',
 label: 'INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)',
 },
] as const

function AnimatedCircleStat({ value, suffix, label, sublabel }: { value: number, suffix: string, label: string, sublabel: string }) {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-50px' })
 const spring = useSpring(0, { duration: 1500, bounce: 0 })
 const display = useTransform(spring, (v) => Math.round(v))
 const [text, setText] = useState(0)

 useEffect(() => {
 if (isInView) spring.set(value)
 }, [isInView, spring, value])

 useEffect(() => {
 return display.on('change', (v) => setText(v))
 }, [display])

 const targetOffset = 691.15 - (691.15 * value) / 100

 return (
 <FadeInView className="flex flex-col items-center">
 <div ref={ref} className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
 <svg viewBox="0 0 256 256" className="w-full h-full -rotate-90 drop-shadow-2xl">
 <defs>
 <linearGradient id="stat_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="#FA582D"></stop>
 <stop offset="100%" stopColor="#BF3510"></stop>
 </linearGradient>
 </defs>
 <circle cx="128" cy="128" r="106" fill="rgba(250, 88, 45, 0.08)" stroke="#262626" strokeWidth="24" />
 <motion.circle 
 cx="128" cy="128" r="106" 
 fill="none" stroke="url(#stat_gradient)" strokeWidth="24" strokeLinecap="round"
 strokeDasharray="666.01" 
 initial={{ strokeDashoffset: 666.01 }}
 animate={isInView ? { strokeDashoffset: 666.01 - (666.01 * value) / 100 } : { strokeDashoffset: 666.01 }}
 transition={{ duration: 1.5, ease: "easeOut" }}
 />
 </svg>
 <div className="absolute inset-0 flex items-center justify-center">
 <span className="text-[3rem] md:text-[3.5rem] font-bold text-neutral-900 tracking-tight drop-shadow-md">
 {text} <span className="text-[2rem] md:text-[2.5rem]">{suffix}</span>
 </span>
 </div>
 </div>
 <h4 className="text-[1.35rem] md:text-[1.5rem] font-medium text-[#FA582D] mb-2">{label}</h4>
 <p className="text-[10px] md:text-[11px] font-bold text-neutral-900 tracking-[0.15em] uppercase text-center leading-relaxed whitespace-pre-line">
 {sublabel}
 </p>
 </FadeInView>
 )
}

function AnimatedBarStat({ value, suffix, label }: { value: number, suffix: string, label: string }) {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-50px' })
 const spring = useSpring(0, { duration: 1500, bounce: 0 })
 const display = useTransform(spring, (v) => Math.round(v))
 const [text, setText] = useState(0)

 useEffect(() => {
 if (isInView) spring.set(value)
 }, [isInView, spring, value])

 useEffect(() => {
 return display.on('change', (v) => setText(v))
 }, [display])

 return (
 <div ref={ref} className="w-full">
 <h4 className="text-[11px] md:text-[13px] font-bold text-neutral-900 mb-2 uppercase tracking-[0.05em]">
 {label}
 </h4>
 <div className="flex items-center gap-4">
 <motion.div
 className="h-4 md:h-5 rounded-full bg-gradient-to-r from-transparent via-[#A62B14] to-[#FA582D]"
 initial={{ width: 0 }}
 animate={isInView ? { width: `${value}%` } : { width: 0 }}
 transition={{ duration: 1.5, ease: "easeOut" }}
 />
 <span className="text-[2rem] md:text-[2.5rem] font-bold text-neutral-900 leading-none tracking-tight shrink-0">
 {text}<span className="text-[1.5rem] md:text-[1.75rem]">{suffix}</span>
 </span>
 </div>
 </div>
 )
}

export function AIWorldSection() {
 const videoRef = useRef<HTMLVideoElement>(null)
 const [videoFailed, setVideoFailed] = useState(false)

 useEffect(() => {
 const video = videoRef.current
 if (!video) return

 const prefersReducedMotion = window.matchMedia(
 '(prefers-reduced-motion: reduce)',
 ).matches

 if (prefersReducedMotion) {
 video.pause()
 return
 }

 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 video.play().catch(() => setVideoFailed(true))
 } else {
 video.pause()
 }
 },
 { threshold: 0.2 },
 )

 observer.observe(video)
 return () => observer.disconnect()
 }, [])

 return (
 <section className="bg-white relative overflow-hidden">
 {/* Background Graphic */}
 <div className="absolute right-0 top-0 w-1/2 max-w-[800px] opacity-20 pointer-events-none">
 <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
 <pattern id="diagonal-stripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
 <line x1="0" y1="0" x2="0" y2="16" stroke="#FA582D" strokeWidth="2" />
 </pattern>
 <rect width="400" height="400" fill="url(#diagonal-stripes)" />
 </svg>
 </div>

 {/* Chapter A — The Good News */}
 <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
 <div className="container-wide relative z-10">
 <FadeInView>
 <div className="mb-20 lg:mb-32">
 <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.1] text-neutral-900">
 A new <span className="text-[#FA582D]">AI world</span> is here
 </h2>
 </div>
 </FadeInView>

 <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
 <div className="w-full lg:w-5/12">
 <FadeInView delay={0.2}>
 <span className="block text-[13px] md:text-[15px] font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-6">
 THE GOOD NEWS
 </span>
 <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] font-medium leading-[1.15] text-neutral-900">
 AI is rapidly<br className="hidden md:block" />transforming your<br className="hidden md:block" />organization
 </h3>
 </FadeInView>
 </div>

 <div className="w-full lg:w-7/12">
 <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20">
 {GOOD_NEWS_STATS.map((stat, i) => (
 <AnimatedCircleStat key={i} {...stat} />
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Chapter B — The Bad News */}
 <div className="relative overflow-hidden py-20 lg:py-32">
 {!videoFailed && (
 <video
 ref={videoRef}
 className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
 autoPlay
 muted
 loop
 playsInline
 onError={() => setVideoFailed(true)}
 >
 <source src="/videos/stat-teaser-bg.mp4" type="video/mp4" />
 </video>
 )}

 <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

 <div className="container-wide relative z-10">
 <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
 
 {/* Right Side: Heading */}
 <div className="w-full lg:w-5/12">
 <FadeInView>
 <span className="block text-[11px] font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
 THE BAD NEWS
 </span>
 <h3 className="text-[2rem] md:text-[2.5rem] font-medium leading-[1.2] text-neutral-900">
 Attackers are<br className="hidden md:block" />supercharging their<br className="hidden md:block" />speed and scale.
 </h3>
 </FadeInView>
 </div>

 {/* Left Side: Progress Bars */}
 <div className="w-full lg:w-7/12">
 <ul className="flex flex-col gap-10 md:gap-12">
 {BAD_NEWS_STATS.map((stat, index) => (
 <li key={stat.label} className="w-full">
 <FadeInView delay={0.2 + index * 0.1}>
 <AnimatedBarStat {...stat} />
 </FadeInView>
 </li>
 ))}
 </ul>
 </div>

 </div>
 </div>
 </div>
 </section>
 )
}
