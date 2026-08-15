import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Glyphatic',
  description: 'How Glyphatic collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Legal
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] text-neutral-500">
            Last updated: August 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-neutral-700">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">1. Information we collect</h2>
              <p className="mt-2">
                When you contact us, request a demo, or subscribe to our newsletter, we
                collect the information you provide — such as your name, business email,
                company, job title, and message. We also collect basic usage data to
                improve our website.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">2. How we use it</h2>
              <p className="mt-2">
                We use your information to respond to inquiries, schedule discussions,
                deliver requested materials, and — with your consent — send updates. We
                do not sell your personal data.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">3. Data protection</h2>
              <p className="mt-2">
                We apply reasonable technical and organizational measures to protect your
                data against unauthorized access, alteration, or disclosure.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">4. Your rights</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of your personal
                data at any time by contacting hello@glyphatic.com.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">5. Contact</h2>
              <p className="mt-2">
                Questions about this policy? Reach us at hello@glyphatic.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
