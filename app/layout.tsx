import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
 metadataBase: new URL('https://www.glyphatic.com'),
 title: 'GlyphaticSystems — Boutique Systems Engineering, India',
 description: "India's precision-first technology partner for AI, cloud infrastructure, web & mobile development, and intelligent BPO. Built for teams that won't accept slow.",
 icons: {
 icon: '/images/glyphatic-new-logo.png',
 shortcut: '/images/glyphatic-new-logo.png',
 apple: '/images/glyphatic-new-logo.png',
 },
 openGraph: {
 title: 'GlyphaticSystems — Boutique Systems Engineering, India',
 description: "India's precision-first technology partner for AI, cloud infrastructure, web & mobile development, and intelligent BPO. Built for teams that won't accept slow.",
 url: 'https://www.glyphatic.com',
 type: 'website',
 siteName: 'GlyphaticSystems',
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
 title: 'GlyphaticSystems',
 description: "India's precision-first technology partner.",
 creator: '@GlyphaticSystems',
 images: ['/images/glyphatic-new-logo.png'],
 },
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
 <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
 <body className="font-sans antialiased bg-base-white text-neutral-900">
 {children}
 </body>
 </html>
 )
}
