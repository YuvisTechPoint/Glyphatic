import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glyphatic.com'),
  title: 'Glyphatic — Transform. Automate. Operate. Scale.',
  description: 'AI-native business transformation, technology, and operations for the modern enterprise. Glyphatic helps organizations modernize, automate, and operate at scale.',
  icons: {
    icon: '/images/glyphatic-new-logo.png',
    shortcut: '/images/glyphatic-new-logo.png',
    apple: '/images/glyphatic-new-logo.png',
  },
  openGraph: {
    title: 'Glyphatic — Transform. Automate. Operate. Scale.',
    description: 'AI-native business transformation, technology, and operations for the modern enterprise. Glyphatic helps organizations modernize, automate, and operate at scale.',
    url: 'https://www.glyphatic.com',
    type: 'website',
    siteName: 'Glyphatic',
    images: [
      {
        url: '/images/glyphatic-new-logo.png',
        width: 800,
        height: 600,
        alt: 'Glyphatic Logo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glyphatic — Transform. Automate. Operate. Scale.',
    description: 'AI-native business transformation, technology, and operations for the modern enterprise.',
    creator: '@glyphatic',
    images: ['/images/glyphatic-new-logo.png'],
  },
}

import { ThemeProvider } from '@/components/theme/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-base-white text-neutral-900 dark:bg-[#0A0D14] dark:text-neutral-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
