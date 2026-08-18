'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Youtube, Podcast, Sun, Moon } from 'lucide-react'
import {
  FOOTER_COMPANY,
  FOOTER_PRODUCTS,
  FOOTER_SOLUTIONS,
  FOOTER_SERVICES,
  FOOTER_INDUSTRIES,
  FOOTER_RESOURCES,
  FOOTER_PARTNERS,
  FOOTER_LEGAL,
} from '@/lib/nav-data'
import { COPYRIGHT_YEAR, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/layout/Header'
import { LanguageSelector } from '@/components/layout/LanguageSelector'
import { useTheme } from '@/components/theme/ThemeProvider'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

import { ThemeToggle } from '@/components/theme/ThemeToggle'

export interface FooterProps {
  className?: string
}

const FOOTER_COLUMNS = [
  { heading: 'Company', links: FOOTER_COMPANY },
  { heading: 'Products', links: FOOTER_PRODUCTS },
  { heading: 'Solutions', links: FOOTER_SOLUTIONS },
  { heading: 'Services', links: FOOTER_SERVICES },
  { heading: 'Industries', links: FOOTER_INDUSTRIES },
  { heading: 'Resources', links: FOOTER_RESOURCES },
  { heading: 'Partners', links: FOOTER_PARTNERS },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#0B0C0E] text-neutral-900 dark:text-neutral-100 transition-colors duration-200', className)}>
      {/* Tagline */}
      <div className="container-wide pt-12 lg:pt-16 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
          <Logo className="text-base text-neutral-900 dark:text-white" variant="dark" />
          <p className="text-[14px] font-medium text-neutral-600 dark:text-neutral-400 tracking-wide">
            {SITE_TAGLINE}
          </p>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-wide pb-12 lg:pb-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="label-eyebrow mb-6 text-neutral-400 dark:text-neutral-500">{column.heading}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200 dark:border-white/10">
        <div className="container-wide flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <nav aria-label="Legal links" className="flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Copyright © {COPYRIGHT_YEAR} {SITE_NAME}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
                aria-label="Podcast"
              >
                <Podcast className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#FA582D] transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
            <ThemeToggle />
            <LanguageSelector variant="dropdown" />
          </div>
        </div>
      </div>
    </footer>
  )
}
