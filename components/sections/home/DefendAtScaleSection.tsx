'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock } from 'lucide-react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

function NumberCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const spring = useSpring(0, { duration: 1.6, bounce: 0 })
  const display = useTransform(spring, (v) => v.toFixed(decimals))
  const [text, setText] = useState(`0${decimals > 0 ? '.' + '0'.repeat(decimals) : ''}`)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  useEffect(() => {
    return display.on('change', (v) => setText(v))
  }, [display])

  return <span ref={ref}>{text}</span>
}

const STAT_CARDS = [
  {
    id: 1,
    value: 1,
    suffix: ' T',
    label: 'Cloud Events Processed',
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-gradient-to-br from-[#1a1110] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none opacity-100 overflow-hidden">
        {/* Background circuit lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g stroke="#ffffff" strokeWidth="1" opacity="0.05" fill="none">
            <path d="M0,100 L150,100 L200,50 L500,50" />
            <path d="M0,120 L130,120 L180,70 L500,70" />
            <path d="M0,140 L110,140 L160,90 L500,90" />
            <path d="M0,200 L150,200 L200,250 L500,250" />
            <path d="M0,220 L130,220 L180,270 L500,270" />
            <path d="M0,240 L110,240 L160,290 L500,290" />
          </g>
        </svg>

        {/* Glowing connecting lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#glow)">
             <path d="M120,120 L250,120 L350,75 L380,75" stroke="#FA582D" strokeWidth="2" fill="none" opacity="0.8" />
             <path d="M120,120 L250,120 L350,160 L380,160" stroke="#FA582D" strokeWidth="2" fill="none" opacity="0.8" />
             <line x1="80" y1="120" x2="160" y2="120" stroke="#FA582D" strokeWidth="4" filter="blur(2px)" opacity="0.8" />
          </g>
          <defs>
             <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="4" result="blur" />
               <feMerge>
                 <feMergeNode in="blur" />
                 <feMergeNode in="SourceGraphic" />
               </feMerge>
             </filter>
          </defs>
        </svg>

        {/* Cloud Node */}
        <div className="absolute top-[90px] left-[60px] w-16 h-12 bg-[#1a1110] border border-white/10 rounded flex items-center justify-center shadow-[0_0_15px_rgba(250,88,45,0.2)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="1.5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-4.9c.28-.01.55-.1.83-.1a5.5 5.5 0 0 1 0 11z" />
            <circle cx="12" cy="12" r="3" />
            <path d="M14 14l2 2" />
          </svg>
        </div>

        {/* Shield Node */}
        <div className="absolute top-[50px] left-[370px] w-14 h-14 bg-[#1a1110] border border-[#FA582D]/30 rounded flex items-center justify-center shadow-[0_0_20px_rgba(250,88,45,0.3)]">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>

        {/* Lock Node */}
        <div className="absolute top-[135px] left-[370px] w-14 h-12 bg-[#1a1110] border border-white/10 rounded flex items-center justify-center shadow-[0_0_15px_rgba(250,88,45,0.2)]">
          <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="1.5">
             <path d="M17.5 19H9a7 7 0 1 1 6.71-4.9" />
             <rect x="14" y="11" width="6" height="5" rx="1" />
             <path d="M15 11V9a2 2 0 0 1 4 0v2" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    value: 5.77,
    decimals: 2,
    suffix: ' K',
    label: 'Exploit Attempts Detected',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-gradient-to-br from-[#150e0d] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none p-6 opacity-100 flex flex-col justify-start">
        <div className="text-[9px] uppercase text-white font-bold tracking-[0.2em] mb-5">Exploits Detected</div>
        <div className="space-y-4">
           {/* Heartbleed */}
           <div className="flex gap-3 items-center">
             <div className="w-5 h-5 bg-[#FA582D]/10 rounded flex items-center justify-center shrink-0 border border-[#FA582D]/20">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="2">
                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                 <circle cx="12" cy="7" r="4" />
               </svg>
             </div>
             <div>
                <div className="text-[12px] font-medium text-[#FA582D] leading-tight">Heartbleed</div>
                <div className="text-[10px] text-gray-500 leading-tight">Severely impacts enterprise servers</div>
             </div>
           </div>
           {/* Spectre and Meltdown */}
           <div className="flex gap-3 items-center">
             <div className="w-5 h-5 bg-[#FA582D]/10 rounded flex items-center justify-center shrink-0 border border-[#FA582D]/20">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="2">
                 <rect x="4" y="4" width="16" height="16" rx="2" />
                 <path d="M9 9h6v6H9z" />
                 <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
               </svg>
             </div>
             <div>
                <div className="text-[12px] font-medium text-[#FA582D] leading-tight">Spectre and Meltdown</div>
                <div className="text-[10px] text-gray-500 leading-tight">Hardware-based vulnerabilities</div>
             </div>
           </div>
           {/* EternalBlue */}
           <div className="flex gap-3 items-center">
             <div className="w-5 h-5 bg-[#FA582D]/10 rounded flex items-center justify-center shrink-0 border border-[#FA582D]/20">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="2">
                 <path d="M3 21h18M5 21v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4M9 13v-2M15 13v-2M12 11V3l4 4" />
               </svg>
             </div>
             <div>
                <div className="text-[12px] font-medium text-[#FA582D] leading-tight">EternalBlue</div>
                <div className="text-[10px] text-gray-500 leading-tight">Code exploiting a vulnerability</div>
             </div>
           </div>
           {/* ZeroLogon */}
           <div className="flex gap-3 items-center">
             <div className="w-5 h-5 bg-[#FA582D]/10 rounded flex items-center justify-center shrink-0 border border-[#FA582D]/20">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="2">
                 <rect x="5" y="11" width="14" height="10" rx="2" />
                 <circle cx="12" cy="7" r="4" />
                 <path d="M12 15v2" />
               </svg>
             </div>
             <div>
                <div className="text-[12px] font-medium text-[#FA582D] leading-tight">ZeroLogon</div>
                <div className="text-[10px] text-gray-500 leading-tight">Elevation of privilege (EoP) vulnerability</div>
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    value: 1.19,
    decimals: 2,
    suffix: ' M',
    label: 'Malware Executions Blocked',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-gradient-to-br from-[#1c0f0d] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none opacity-100 overflow-hidden">
        {/* Glow behind icon */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FA582D] rounded-full blur-[40px] opacity-20" />
        
        {/* Dashed lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="-10" x2="20%" y2="80" stroke="#FA582D" strokeWidth="1" opacity="0.3" filter="url(#glowLines)" />
          <line x1="35%" y1="-10" x2="35%" y2="100" stroke="#FA582D" strokeWidth="1" opacity="0.5" filter="url(#glowLines)" />
          <line x1="50%" y1="-10" x2="50%" y2="120" stroke="#FA582D" strokeWidth="1" opacity="0.7" filter="url(#glowLines)" />
          <line x1="65%" y1="-10" x2="65%" y2="100" stroke="#FA582D" strokeWidth="1" opacity="0.4" filter="url(#glowLines)" />
          <line x1="80%" y1="-10" x2="80%" y2="80" stroke="#FA582D" strokeWidth="1" opacity="0.3" filter="url(#glowLines)" />
          
          {/* Horizontal intersection line */}
          <line x1="10%" y1="120" x2="90%" y2="120" stroke="#FA582D" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          
          {/* Orange glowing dots at the bottom of the lines */}
          <circle cx="20%" cy="80" r="2" fill="#FA582D" opacity="0.8" />
          <circle cx="35%" cy="100" r="2" fill="#FA582D" opacity="0.8" />
          <circle cx="50%" cy="120" r="2" fill="#FA582D" opacity="1" />
          <circle cx="65%" cy="100" r="2" fill="#FA582D" opacity="0.8" />
          <circle cx="80%" cy="80" r="2" fill="#FA582D" opacity="0.8" />

          <defs>
            <filter id="glowLines">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Central Icon */}
        <div className="absolute top-[108px] left-1/2 -translate-x-1/2 w-8 h-6 bg-[#2a1a18] rounded flex items-center justify-center border border-[#FA582D]/40 shadow-[0_0_10px_rgba(250,88,45,0.5)] transform -rotate-12">
           <div className="w-1 h-3 bg-[#FA582D] transform rotate-45 rounded-full absolute" />
           <div className="w-1 h-3 bg-[#FA582D] transform -rotate-45 rounded-full absolute" />
        </div>
      </div>
    )
  },
  {
    id: 4,
    value: 6.31,
    decimals: 2,
    suffix: ' B',
    label: 'New Unique Objects Analyzed',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-gradient-to-br from-[#1a1110] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none opacity-100 overflow-hidden flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FA582D] rounded-full blur-[60px] opacity-15" />
        
        {/* Grid and crosshairs */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="1 4" opacity="0.05" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="1 4" opacity="0.05" />
          {/* Crosshairs */}
          <path d="M40 30 L40 35 M37.5 32.5 L42.5 32.5" stroke="#FA582D" strokeWidth="1" opacity="0.5" />
          <path d="M220 70 L220 75 M217.5 72.5 L222.5 72.5" stroke="#FA582D" strokeWidth="1" opacity="0.5" />
          <path d="M180 150 L180 155 M177.5 152.5 L182.5 152.5" stroke="#FA582D" strokeWidth="1" opacity="0.5" />
        </svg>

        {/* Waveforms */}
        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="opacity-70 scale-125">
          <g fill="none" stroke="#FA582D" strokeWidth="1">
            <path d="M0,100 C50,20 100,180 150,100 C200,20 250,180 300,100" opacity="0.2" />
            <path d="M0,110 C50,40 100,160 150,110 C200,40 250,160 300,110" opacity="0.3" />
            <path d="M0,120 C50,60 100,140 150,120 C200,60 250,140 300,120" opacity="0.5" strokeWidth="1.5" filter="url(#glowWave)" />
            <path d="M0,130 C50,80 100,120 150,130 C200,80 250,120 300,130" opacity="0.4" />
            <path d="M0,140 C50,100 100,100 150,140 C200,100 250,100 300,140" opacity="0.2" />
            <path d="M0,90 C50,0 100,200 150,90 C200,0 250,200 300,90" opacity="0.1" />
            <path d="M0,105 C70,10 90,190 150,105 C210,10 230,190 300,105" opacity="0.25" />
            <path d="M0,115 C30,30 120,170 150,115 C180,30 270,170 300,115" opacity="0.35" />
          </g>
          <defs>
            <filter id="glowWave">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    )
  },
  {
    id: 5,
    value: 13.83,
    decimals: 2,
    suffix: ' M',
    label: 'New Unique Attack Objects Identified',
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-gradient-to-br from-[#150e0d] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none opacity-100 overflow-hidden flex items-center justify-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FA582D] rounded-full blur-[40px] opacity-10" />
        
        {/* Scanner Box */}
        <div className="w-[140px] h-[140px] relative mt-[-20px]">
           {/* Corners */}
           <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FA582D] opacity-80" />
           <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FA582D] opacity-80" />
           <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FA582D] opacity-80" />
           <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FA582D] opacity-80" />
           
           {/* Crosshairs & Lines */}
           <div className="absolute top-1/2 -left-2 w-[156px] border-t border-dashed border-[#FA582D]/30" />
           <div className="absolute -top-2 left-1/2 h-[156px] border-l border-dashed border-[#FA582D]/30" />
           
           {/* Tiny coordinates */}
           <div className="absolute top-2 right-4 text-[6px] font-mono text-[#FA582D] opacity-70">+45 12</div>
           
           {/* Fingerprint SVG */}
           <div className="absolute inset-0 flex items-center justify-center p-6">
             <svg viewBox="0 0 24 24" fill="none" stroke="#FA582D" strokeWidth="1" className="w-full h-full opacity-90 drop-shadow-[0_0_3px_rgba(250,88,45,0.8)]">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeWidth="0.5" opacity="0.3" />
               <path d="M7 12a5 5 0 0 1 10 0M9 12a3 3 0 0 1 6 0M12 9v6M10 16a4 4 0 0 0 4 0" strokeWidth="1.5" strokeLinecap="round" />
               <path d="M6 15a8 8 0 0 1 12 0" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
               <path d="M5 10a9 9 0 0 1 14 0" strokeWidth="1.2" strokeLinecap="round" />
               <path d="M15 15h.01M9 15h.01M12 18h.01" strokeWidth="2" strokeLinecap="round" />
             </svg>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    value: 11.3,
    decimals: 1,
    suffix: ' B',
    label: 'Attacks Prevented Inline',
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-gradient-to-tr from-[#1c0f0d] to-[#0a0a0a]',
    content: (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="absolute bottom-[-10px] right-[-30px] w-[350px] bg-[#0c0c0c] border border-white/10 rounded-xl shadow-2xl p-5" style={{ transform: 'rotateX(15deg) rotateY(-20deg) rotateZ(5deg)' }}>
          <div className="font-mono text-[9px] leading-[1.6] opacity-90">
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">001</span>
              <span className="text-[#a3a3a3]">&lt;?php</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">002</span>
              <span className="text-[#737373]">// main site php version 2.0</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">003</span>
              <span></span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">004</span>
              <span>
                <span className="text-[#FA582D]">function</span> <span className="text-white">create_category_feeds</span>(<span className="text-[#8ad3de]">$categories</span> = <span className="text-[#a3a3a3]">NULL</span>) {'{'}
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">005</span>
              <span>
                &nbsp;&nbsp;<span className="text-[#FA582D]">global</span> <span className="text-[#8ad3de]">$wpdb</span>, <span className="text-[#8ad3de]">$title</span>, <span className="text-[#8ad3de]">$headcomments</span>;
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">006</span>
              <span></span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">007</span>
              <span>
                &nbsp;&nbsp;<span className="text-[#FA582D]">if</span> ( <span className="text-[#8ad3de]">$categories</span> == <span className="text-[#a3a3a3]">NULL</span> ) {'{'}
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">008</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8ad3de]">$sort_column</span> = <span className="text-[#e2a868]">'term_id'</span>;
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">009</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8ad3de]">$query</span> = <span className="text-[#e2a868]">"SELECT * FROM </span><span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">terms ...</span>
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">010</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FA582D]">JOIN</span> <span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">terms ON ( </span><span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">term_taxonomy.term_id</span>
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">011</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FA582D]">WHERE</span> <span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">term_taxonomy = 'category'</span>
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">012</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FA582D]">ORDER BY</span> <span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">terms.name ASC"</span>;
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">013</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8ad3de]">$categories</span> = <span className="text-[#8ad3de]">$wpdb</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">get_results</span>(<span className="text-[#8ad3de]">$query</span>);
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">014</span>
              <span>
                &nbsp;&nbsp;{'}'}
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">015</span>
              <span>
                &nbsp;&nbsp;<span className="text-[#8ad3de]">$args</span> = <span className="text-[#FA582D]">array</span>(
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">016</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e2a868]">'before_row'</span> <span className="text-[#a3a3a3]">=&gt;</span> <span className="text-[#8ad3de]">Core</span>()<span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">helpers</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">open_grid</span>(),
              </span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/30 text-right pr-2 select-none">017</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e2a868]">'after_row'</span> <span className="text-[#a3a3a3]">=&gt;</span> <span className="text-[#8ad3de]">Core</span>()<span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">helpers</span><span className="text-[#a3a3a3]">-&gt;</span><span className="text-[#e2a868]">close_grid</span>(),
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export function DefendAtScaleSection() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })
  
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-white/5">
      <div className="container-wide">
        <FadeInView>
          <div className="mb-12">
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-white max-w-4xl">
              <span className="text-[#FA582D]">So you can defend at</span> speed and scale.
            </h2>
            <div className="flex items-center gap-2 mt-6 text-white/70 text-[13px] font-medium tracking-wide">
              <Clock className="w-4 h-4" />
              <span>Daily data as of {currentDate} at 7AM PST</span>
            </div>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          {STAT_CARDS.map((card) => (
            <FadeInView key={card.id} className={cn("relative min-h-[320px] rounded-2xl overflow-hidden border border-white/5 p-8 flex flex-col justify-end group transition-colors hover:border-[#FA582D]/30", card.colSpan, card.bgClasses)}>
              {card.content}
              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2 text-[#FA582D]">
                  <span className="text-[2.5rem] md:text-[3.5rem] font-bold leading-none tabular-nums">
                    <NumberCounter value={typeof card.value === 'number' ? card.value : parseFloat(card.value as string)} decimals={card.decimals} />
                  </span>
                  <span className="text-[1.75rem] font-bold leading-none">{card.suffix}</span>
                </div>
                <p className="text-white text-[15px] font-medium tracking-wide">
                  {card.label}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
