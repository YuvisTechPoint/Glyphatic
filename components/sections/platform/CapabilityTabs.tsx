'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsUnderlineIndicator } from '@/components/ui/Tabs'
import { FadeInView } from '@/components/animations/FadeInView'

export interface CapabilityTabContent {
  title: string
  body: string
  features: string[]
  visual?: React.ReactNode // Slot for image or 3D
}

export interface CapabilityTab {
  id: string
  label: string
  content: CapabilityTabContent
}

export interface CapabilityTabsProps {
  title: string
  description?: string
  tabs: CapabilityTab[]
  defaultValue?: string
}

export function CapabilityTabs({ title, description, tabs, defaultValue }: CapabilityTabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue ?? tabs[0]?.id)

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <FadeInView className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-neutral-900">{title}</h2>
          {description && (
            <p className="mt-4 text-body-lg text-neutral-600">{description}</p>
          )}
        </FadeInView>

        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="justify-center border-b-base-border overflow-x-auto whitespace-nowrap scrollbar-none pb-px">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  showIndicator={false}
                  className="text-body-md"
                >
                  {tab.label}
                  {activeTab === tab.id && <TabsUnderlineIndicator />}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-display text-display-sm text-neutral-900">
                      {tab.content.title}
                    </h3>
                    <p className="mt-4 text-body-lg text-neutral-600">
                      {tab.content.body}
                    </p>
                    {tab.content.features.length > 0 && (
                      <ul className="mt-8 space-y-4">
                        {tab.content.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-brand-500 mt-0.5 shrink-0" />
                            <span className="ml-3 text-body-md text-neutral-800">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {tab.content.visual && (
                    <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-base-surface border border-base-border shadow-lg flex items-center justify-center">
                      {tab.content.visual}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
