'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn('divide-y divide-base-border rounded-lg border border-base-border', className)}
    >
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`item-${index}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-body-lg font-semibold text-neutral-900 hover:text-brand-500">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]">
            <p className="px-6 pb-5 text-body-md text-neutral-600">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
