'use client'

import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { Search as SearchIcon, X, ArrowRight, FileText, Shield, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

type SearchResult = {
 title: string
 href: string
 type: 'product' | 'resource' | 'page'
 excerpt?: string
}

const MOCK_RESULTS: SearchResult[] = [
 {
 title: 'Prisma AIRS — Secure AI by Design',
 href: '/ai-security/prisma-airs',
 type: 'product',
 excerpt: 'Protect AI apps, agents, models, and data across the enterprise.',
 },
 {
 title: 'Cortex XSIAM',
 href: '/cortex/cortex-xsiam',
 type: 'product',
 excerpt: 'AI-driven security operations platform powered by unified data.',
 },
 {
 title: 'Idira — Next-Generation Identity Security',
 href: '/idira',
 type: 'product',
 excerpt: 'Secure every identity for the AI enterprise.',
 },
 {
 title: 'Unit 42 Threat Research',
 href: '/unit42',
 type: 'resource',
 excerpt: 'World-renowned threat intelligence and incident response.',
 },
 {
 title: 'Network Security Platform',
 href: '/network-security',
 type: 'page',
 excerpt: 'Strata Network Security Platform powered by Precision AI.',
 },
 {
 title: 'Cyberpedia',
 href: '/cyberpedia',
 type: 'resource',
 excerpt: 'Your cybersecurity encyclopedia — definitions and guides.',
 },
]

const typeIcons = {
 product: Shield,
 resource: BookOpen,
 page: FileText,
} as const

export interface SearchOverlayProps {
 open: boolean
 onOpenChange: (open: boolean) => void
}

export function SearchOverlay({ open, onOpenChange }: SearchOverlayProps) {
 const [query, setQuery] = useState('')

 useEffect(() => {
 const handleKeyDown = (e: KeyboardEvent) => {
 if (e.key === 'Escape') {
 onOpenChange(false)
 }
 }
 if (open) {
 window.addEventListener('keydown', handleKeyDown)
 }
 return () => window.removeEventListener('keydown', handleKeyDown)
 }, [open, onOpenChange])

 const results = useMemo(() => {
 const q = query.trim().toLowerCase()
 if (!q) return MOCK_RESULTS.slice(0, 5)
 return MOCK_RESULTS.filter(
 (item) =>
 item.title.toLowerCase().includes(q) ||
 item.excerpt?.toLowerCase().includes(q)
 )
 }, [query])

 if (!open) return null

 return (
 <div className="fixed inset-0 z-[150] bg-white/40 backdrop-blur-sm animate-in fade-in-0 duration-200">
 {/* Top Search Bar Container */}
 <div className="container-wide pt-3">
 <div className="relative flex items-center justify-between gap-4 rounded-xl bg-gray-50 p-3 px-6 shadow-2xl border border-black/10 text-neutral-900">
 
 <div className="flex items-center gap-3 shrink-0">
 <Link href="/" onClick={() => onOpenChange(false)} className="inline-flex items-center gap-2">
 <img src="/images/Glyphatic%20Orange%20Logo.png" alt="Glyphatic Logo" className="h-7 w-auto rounded-md object-contain" />
 <span className="text-lg font-bold tracking-tight lowercase text-neutral-900">glyphatic</span>
 </Link>
 <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 border-l border-black/20 pl-3">
 Search
 </span>
 </div>

 <div className="relative flex-1 max-w-4xl">
 <input
 autoFocus
 type="text"
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 className="w-full h-10 rounded-full border border-white/15 bg-[#1f1f1f] px-5 text-sm text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-[#FA582D] focus:ring-1 focus:ring-[#FA582D] transition-all"
 placeholder=""
 aria-label="Search"
 />
 </div>

 <button
 type="button"
 onClick={() => onOpenChange(false)}
 className="p-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-black/10 transition-colors shrink-0"
 aria-label="Close search"
 >
 <X className="h-5 w-5" />
 </button>

 {/* Results Dropdown Panel */}
 <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-gray-50 border border-black/10 shadow-2xl p-6 text-neutral-900 max-h-[70vh] overflow-y-auto">
 <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
 {query ? 'Search results' : 'Popular searches'}
 </p>
 <ul className="divide-y divide-white/10">
 {results.length === 0 ? (
 <li className="py-6 text-sm text-neutral-600">
 No results found. Try a different search term.
 </li>
 ) : (
 results.map((result) => {
 const Icon = typeIcons[result.type]
 return (
 <li key={result.href}>
 <Link
 href={result.href}
 onClick={() => onOpenChange(false)}
 className="group flex items-start gap-4 py-3.5 hover:bg-black/5 -mx-3 px-3 rounded-lg transition-colors"
 >
 <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FA582D]/10 text-[#FA582D]">
 <Icon className="h-4 w-4" />
 </span>
 <span className="min-w-0 flex-1">
 <span className="flex items-center gap-2">
 <span className="font-semibold text-neutral-900 group-hover:text-[#FA582D] transition-colors text-sm">
 {result.title}
 </span>
 <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#FA582D]" />
 </span>
 {result.excerpt && (
 <span className="mt-0.5 block text-xs text-neutral-600 line-clamp-1">
 {result.excerpt}
 </span>
 )}
 </span>
 </Link>
 </li>
 )
 })
 )}
 </ul>
 </div>

 </div>
 </div>
 </div>
 )
}
