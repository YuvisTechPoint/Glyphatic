'use client'

import React from 'react'
import { Check, Minus } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export interface ComparisonRow {
  feature: string
  values: (string | boolean)[] // True for checkmark, false for dash, string for text
}

export interface ComparisonTableProps {
  title: string
  description?: string
  headers: string[]
  rows: ComparisonRow[]
}

export function ComparisonTable({ title, description, headers, rows }: ComparisonTableProps) {
  return (
    <section className="section-padding bg-base-surface">
      <div className="container-content">
        <FadeInView className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-neutral-900">{title}</h2>
          {description && (
            <p className="mt-4 text-body-lg text-neutral-600">{description}</p>
          )}
        </FadeInView>

        <div className="mt-16 overflow-hidden rounded-xl border border-base-border bg-white shadow-card">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-body-md text-neutral-600">
              <thead className="bg-neutral-50 text-body-sm font-semibold text-neutral-900">
                <tr>
                  <th scope="col" className="px-6 py-4 border-b border-base-border min-w-[200px]">
                    Capabilities
                  </th>
                  {headers.map((header, i) => (
                    <th key={i} scope="col" className="px-6 py-4 border-b border-base-border min-w-[150px] text-center">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-base-border">
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-neutral-50/50">
                    <td className="px-6 py-4 font-medium text-neutral-900">
                      {row.feature}
                    </td>
                    {row.values.map((val, valIndex) => (
                      <td key={valIndex} className="px-6 py-4 text-center">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <Check className="mx-auto h-5 w-5 text-brand-500" aria-label="Included" />
                          ) : (
                            <Minus className="mx-auto h-5 w-5 text-neutral-300" aria-label="Not included" />
                          )
                        ) : (
                          <span className="text-neutral-700">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
