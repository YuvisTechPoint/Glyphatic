'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MegaNav } from '@/components/layout/MegaNav'
import { LanguageSelector } from '@/components/layout/LanguageSelector'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import { MobileNav } from '@/components/layout/MobileNav'

export interface HeaderProps {
  className?: string
}

function Logo({ className, variant = 'light' }: { className?: string; variant?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2', className)}
      aria-label="Glyphatic home"
    >
      <img src="/images/Glyphatic%20Orange%20Logo.png" alt="Glyphatic Logo" className="h-8 md:h-10 w-auto rounded-md object-contain" />
      <span className={cn(
        "text-xl md:text-2xl font-bold tracking-tight lowercase",
        variant === 'light' ? 'text-white' : 'text-neutral-900'
      )}>glyphatic</span>
    </Link>
  )
}

export function Header({ className }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'absolute top-0 z-[100] w-full h-[60px] lg:h-[74px] bg-transparent border-b border-white/10',
          className
        )}
      >
        <div className="container-wide flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-6 lg:gap-10">
            <Logo className="shrink-0" variant="light" />
            <MegaNav />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-white/80 transition-colors focus-visible:outline-none"
              aria-label="Open search"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2.5} />
            </button>

            <LanguageSelector />

            <Link
              href="/support"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-[14px] font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              Support
            </Link>

            <Link
              href="/get-started"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#FA582D] px-5 py-2 text-[14px] font-semibold text-black transition-colors hover:bg-[#E0431A]"
            >
              Demos and Trials
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden focus-visible:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      {/* Mobile Navigation */}
      <MobileNav
        open={isMobileNavOpen}
        onOpenChange={setIsMobileNavOpen}
        onSearchOpen={() => {
          setIsMobileNavOpen(false)
          setTimeout(() => setIsSearchOpen(true), 200)
        }}
      />
    </>
  )
}

export { Logo }
