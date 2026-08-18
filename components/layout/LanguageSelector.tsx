'use client'

import { useState, useEffect } from 'react'
import { Check, Globe } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

type Region = {
  id: string
  label: string
  locale: string
  googleLang: string
}

const REGIONS: Region[] = [
  { id: 'in-en', label: 'India (English)', locale: 'en-IN', googleLang: 'en' },
  { id: 'us-en', label: 'United States (English)', locale: 'en-US', googleLang: 'en' },
  { id: 'uk-en', label: 'United Kingdom (English)', locale: 'en-GB', googleLang: 'en' },
  { id: 'de-de', label: 'Germany (Deutsch)', locale: 'de-DE', googleLang: 'de' },
  { id: 'jp-ja', label: 'Japan (日本語)', locale: 'ja-JP', googleLang: 'ja' },
  { id: 'au-en', label: 'Australia (English)', locale: 'en-AU', googleLang: 'en' },
]

export interface LanguageSelectorProps {
  variant?: 'dropdown' | 'list'
  className?: string
}

export function LanguageSelector({ variant = 'dropdown', className }: LanguageSelectorProps) {
  const [selected, setSelected] = useState('in-en')

  useEffect(() => {
    // Add Google Translate script if not present
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script')
      addScript.id = 'google-translate-script'
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      
      const addInit = document.createElement('script')
      addInit.id = 'google-translate-init'
      addInit.innerHTML = `
        function googleTranslateElementInit() {
          new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
        }
      `
      
      document.body.appendChild(addInit)
      document.body.appendChild(addScript)
      
      // Add hidden div for the translate element
      const translateDiv = document.createElement('div')
      translateDiv.id = 'google_translate_element'
      translateDiv.style.display = 'none'
      document.body.appendChild(translateDiv)
    }
  }, [])

  const handleSelect = (regionId: string) => {
    setSelected(regionId)
    
    const region = REGIONS.find((r) => r.id === regionId)
    if (!region) return

    // Trigger Google Translate change
    setTimeout(() => {
      const selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (selectField) {
        selectField.value = region.googleLang
        selectField.dispatchEvent(new Event('change'))
      }
    }, 300)
  }

  // Hide the google translate banner via CSS
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      body { top: 0 !important; }
      .skiptranslate { display: none !important; }
    `
    document.head.appendChild(style)
  }, [])

  if (variant === 'list') {
    return (
      <ul className={cn('space-y-1', className)}>
        {REGIONS.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => handleSelect(region.id)}
              className={cn(
                'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm',
                region.id === selected && 'bg-brand-50 text-brand-700',
                'text-neutral-800 hover:bg-neutral-50'
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
            'z-[150] min-w-[240px] rounded-md border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-1 shadow-nav',
            'animate-in fade-in-0 zoom-in-95'
          )}
        >
          <DropdownMenu.Label className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Select region
          </DropdownMenu.Label>
          {REGIONS.map((region) => (
            <DropdownMenu.Item
              key={region.id}
              onSelect={() => handleSelect(region.id)}
              className={cn(
                'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm outline-none transition-colors',
                'focus:bg-neutral-50 dark:focus:bg-white/10 text-neutral-800 dark:text-neutral-200',
                region.id === selected && 'bg-[#FA582D]/10 text-[#FA582D]'
              )}
            >
              {region.label}
              {region.id === selected && <Check className="h-4 w-4" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-neutral-200 dark:bg-white/10" />
          <p className="px-3 py-2 text-xs text-neutral-500 dark:text-neutral-400">
            Additional regions coming soon.
          </p>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
