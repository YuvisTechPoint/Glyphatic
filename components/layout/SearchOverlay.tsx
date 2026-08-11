'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight, FileText, Shield, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/Input'
import { Modal, ModalFullscreenContent } from '@/components/ui/Modal'

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

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return MOCK_RESULTS.slice(0, 5)
    return MOCK_RESULTS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt?.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalFullscreenContent className="bg-white">
        <div className="container-content flex flex-col pt-20 pb-10">
          <div className="relative max-w-3xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, resources, and more..."
              className="h-14 pl-12 text-base"
              aria-label="Search"
            />
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="label-eyebrow mb-4 text-neutral-500">
              {query ? 'Search results' : 'Popular searches'}
            </p>
            <ul className="divide-y divide-neutral-200">
              {results.length === 0 ? (
                <li className="py-8 text-sm text-neutral-500">
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
                        className={cn(
                          'group flex items-start gap-4 py-4 transition-colors',
                          'hover:bg-neutral-50 -mx-4 px-4 rounded-md'
                        )}
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="font-medium text-neutral-900 group-hover:text-brand-500 transition-colors">
                              {result.title}
                            </span>
                            <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-500" />
                          </span>
                          {result.excerpt && (
                            <span className="mt-1 block text-sm text-neutral-500 line-clamp-2">
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
      </ModalFullscreenContent>
    </Modal>
  )
}
