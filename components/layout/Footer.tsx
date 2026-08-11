'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Youtube, Podcast } from 'lucide-react'
import {
  MEGA_NAV,
  FOOTER_COMPANY,
  FOOTER_POPULAR,
  FOOTER_LEGAL,
} from '@/lib/nav-data'
import { COPYRIGHT_YEAR, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Logo } from '@/components/layout/Header'
import { LanguageSelector } from '@/components/layout/LanguageSelector'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [email, setEmail] = useState('')
  const productsMenu = MEGA_NAV.find((m) => m.id === 'products')

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className={cn('border-t border-neutral-200 bg-white', className)}>
      {/* Link columns */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Products and Services */}
          <div className="lg:col-span-7">
            <h3 className="label-eyebrow mb-6 text-neutral-400">Products and Services</h3>
            {productsMenu && (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {productsMenu.columns.map((column) => (
                  <div key={column.heading}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wide text-neutral-500">
                      {column.heading}
                    </p>
                    <ul className="space-y-2">
                      {column.links.map((link) => (
                        <li key={`${column.heading}-${link.href}`}>
                          <Link
                            href={link.href}
                            className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="label-eyebrow mb-6 text-neutral-400">Company</h3>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div className="lg:col-span-3">
            <h3 className="label-eyebrow mb-6 text-neutral-400">Popular Links</h3>
            <ul className="space-y-2">
              {FOOTER_POPULAR.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="container-wide flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Logo className="text-base" variant="dark" />
            <nav aria-label="Legal links" className="flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-neutral-500">
              Copyright © {COPYRIGHT_YEAR} {SITE_NAME}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-500 transition-colors"
                aria-label="Podcast"
              >
                <Podcast className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-500 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
            <LanguageSelector variant="dropdown" />
          </div>
        </div>
      </div>
    </footer>
  )
}
