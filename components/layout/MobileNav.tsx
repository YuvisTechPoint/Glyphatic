'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Globe, ArrowRight } from 'lucide-react'
import { MEGA_NAV } from '@/lib/nav-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import {
  Modal,
  ModalClose,
  ModalFullscreenContent,
} from '@/components/ui/Modal'
import { Logo } from '@/components/layout/Header'
import { LanguageSelector } from '@/components/layout/LanguageSelector'

export interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSearchOpen?: () => void
}

export function MobileNav({ open, onOpenChange, onSearchOpen }: MobileNavProps) {
  const [langOpen, setLangOpen] = useState(false)

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalFullscreenContent showClose={false} className="overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3">
          <Logo />
          <ModalClose className="relative right-0 top-0 rounded-md p-2 hover:bg-neutral-100">
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </ModalClose>
        </div>

        <div className="px-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            {MEGA_NAV.map((menu) => (
              <AccordionItem key={menu.id} value={menu.id}>
                <AccordionTrigger className="text-base">{menu.label}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pb-2">
                    {menu.columns.map((column) => (
                      <div key={`${menu.id}-${column.heading}`}>
                        <p className="label-eyebrow mb-2 text-neutral-500">{column.heading}</p>
                        <ul className="space-y-2">
                          {column.links.map((link) => (
                            <li key={`${link.href}-${link.label}`}>
                              <Link
                                href={link.href}
                                className="text-sm text-neutral-700 hover:text-brand-500"
                                onClick={() => onOpenChange(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {menu.featured && (
                      <Link
                        href={menu.featured.href}
                        className="flex flex-col rounded-md border border-neutral-200 bg-neutral-50 p-4"
                        onClick={() => onOpenChange(false)}
                      >
                        <span className="label-eyebrow text-brand-500">{menu.featured.label}</span>
                        <span className="mt-1 font-medium text-neutral-900">{menu.featured.title}</span>
                        {menu.featured.description && (
                          <span className="mt-1 text-sm text-neutral-600">{menu.featured.description}</span>
                        )}
                      </Link>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="sticky bottom-0 mt-auto border-t border-neutral-200 bg-white p-4">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                onOpenChange(false)
                onSearchOpen?.()
              }}
              className="flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-800"
            >
              <Search className="h-4 w-4" />
              Search
            </button>

            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-800"
            >
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" />
                India (English)
              </span>
              <ArrowRight className={cn('h-4 w-4 transition-transform', langOpen && 'rotate-90')} />
            </button>
            {langOpen && (
              <div className="rounded-md border border-neutral-200 p-2">
                <LanguageSelector variant="list" />
              </div>
            )}

            <Link
              href="https://support.paloaltonetworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-neutral-700 py-2"
            >
              Support
            </Link>

            <Button variant="primary" size="md" className="w-full" href="/get-started">
              Demos and Trials
            </Button>
          </div>
        </div>
      </ModalFullscreenContent>
    </Modal>
  )
}
