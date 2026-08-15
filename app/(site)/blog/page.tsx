import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Glyphatic',
  description: 'Architecture patterns, AI-era transformation, and systems engineering insights.',
}

const POSTS = [
  {
    title: 'The Glyphatic Architecture: seven capabilities, one partner',
    excerpt:
      'Why we stopped selling a pile of services and started selling a business transformation ecosystem.',
    tag: 'Strategy',
    date: '2026-08-01',
  },
  {
    title: 'AI transformation is a workforce problem, not a technology problem',
    excerpt:
      'The systems that fail are the ones no one uses. Here is how we make AI actually stick.',
    tag: 'AI',
    date: '2026-07-15',
  },
  {
    title: 'Automation is not a feature. It is the operating layer.',
    excerpt:
      'How to think about process automation, CRM automation, and the digital infrastructure of a company.',
    tag: 'Systems',
    date: '2026-06-20',
  },
  {
    title: 'Mewayz is not software. It is a business operating system.',
    excerpt:
      'Why positioning Mewayz as software undersells the entire delivery model behind it.',
    tag: 'Mewayz',
    date: '2026-05-30',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Blog
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Perspectives on the AI-era transformation.
          </h1>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-lg border border-black/10 bg-white p-7 transition-all hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#A8861D]">
                  {post.tag}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-neutral-900 leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[14px] text-neutral-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[12px] text-neutral-500">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#0F4C81] transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/discuss-architecture"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-[#0F4C81] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
