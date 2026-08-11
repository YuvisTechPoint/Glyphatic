'use client'

import { useState } from 'react'
import { Check, Globe } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

type Region = {
  id: string
  label: string
  locale: string
  active?: boolean
  disabled?: boolean
}

const REGIONS: Region[] = [
  { id: 'in-en', label: 'India (English)', locale: 'en-IN', active: true },
  { id: 'us-en', label: 'United States (English)', locale: 'en-US', disabled: true },
  { id: 'uk-en', label: 'United Kingdom (English)', locale: 'en-GB', disabled: true },
  { id: 'de-de', label: 'Germany (Deutsch)', locale: 'de-DE', disabled: true },
  { id: 'jp-ja', label: 'Japan (日本語)', locale: 'ja-JP', disabled: true },
  { id: 'au-en', label: 'Australia (English)', locale: 'en-AU', disabled: true },
]

export interface LanguageSelectorProps {
  variant?: 'dropdown' | 'list'
  className?: string
}

export function LanguageSelector({ variant = 'dropdown', className }: LanguageSelectorProps) {
  const [selected, setSelected] = useState(REGIONS.find((r) => r.active)?.id ?? 'in-en')

  if (variant === 'list') {
    return (
      <ul className={cn('space-y-1', className)}>
        {REGIONS.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              disabled={region.disabled}
              onClick={() => !region.disabled && setSelected(region.id)}
              className={cn(
                'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm',
                region.id === selected && 'bg-brand-50 text-brand-700',
                region.disabled
                  ? 'cursor-not-allowed text-neutral-400'
                  : 'text-neutral-800 hover:bg-neutral-50'
              )}
            >
              {region.label}
              {region.id === selected && <Check className="h-4 w-4" />}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          'hidden md:inline-flex items-center justify-center rounded-full p-1.5',
          'text-white hover:bg-white/10 transition-colors',
          'focus-visible:outline-none',
          className
        )}
        aria-label="Select language and region"
      >
        <Globe className="h-[18px] w-[18px]" strokeWidth={2.2} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className={cn(
            'z-[150] min-w-[240px] rounded-md border border-neutral-200 bg-white p-1 shadow-nav',
            'animate-in fade-in-0 zoom-in-95'
          )}
        >
          <DropdownMenu.Label className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Select region
          </DropdownMenu.Label>
          {REGIONS.map((region) => (
            <DropdownMenu.Item
              key={region.id}
              disabled={region.disabled}
              onSelect={() => !region.disabled && setSelected(region.id)}
              className={cn(
                'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm outline-none',
                'focus:bg-neutral-50 data-[disabled]:cursor-not-allowed data-[disabled]:text-neutral-400',
                region.id === selected && 'bg-brand-50 text-brand-700'
              )}
            >
              {region.label}
              {region.id === selected && <Check className="h-4 w-4" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-neutral-200" />
          <p className="px-3 py-2 text-xs text-neutral-500">
            Additional regions coming soon.
          </p>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
