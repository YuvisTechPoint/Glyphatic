import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Center | Glyphatic',
  description: 'How Glyphatic approaches security and digital risk.',
}

const PRACTICES = [
  { title: 'Data protection frameworks', body: 'We align to recognized data protection frameworks and apply least-privilege access controls.' },
  { title: 'Security monitoring', body: 'Continuous monitoring and incident-response planning are part of how we operate — not an afterthought.' },
  { title: 'Access management', body: 'Role-based access and strong authentication govern every system we build and run.' },
  { title: 'Compliance support', body: 'We help clients meet regulatory and compliance requirements across their operating layer.' },
]

export default function SecurityPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Legal
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Security Center
          </h1>
          <p className="mt-6 text-[1.125rem] text-neutral-600 leading-relaxed">
            Security is one of those industries where incompetence becomes an incident
            report. We deliver cybersecurity and digital-risk work only with qualified
            specialists.
          </p>

          <div className="mt-10 space-y-6">
            {PRACTICES.map((p) => (
              <div key={p.title} className="rounded-lg border border-black/10 bg-white p-7">
                <h2 className="text-lg font-semibold text-neutral-900">{p.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
