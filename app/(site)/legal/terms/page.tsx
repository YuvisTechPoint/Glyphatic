import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Glyphatic',
  description: 'The terms governing your use of the Glyphatic website and services.',
}

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Legal
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-[14px] text-neutral-500">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-neutral-700">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">1. Agreement</h2>
              <p className="mt-2">
                By accessing this website, you agree to these Terms of Service. If you do
                not agree, please do not use the site.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">2. Use of the site</h2>
              <p className="mt-2">
                You agree to use this website for lawful purposes only and not to
                interfere with its operation or security.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">3. Intellectual property</h2>
              <p className="mt-2">
                All content, branding, and materials on this site are the property of
                Glyphatic and may not be reproduced without permission.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">4. Services</h2>
              <p className="mt-2">
                Any engagement for services is governed by a separate written agreement.
                Nothing on this website constitutes a binding offer of services.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">5. Limitation of liability</h2>
              <p className="mt-2">
                This website is provided &quot;as is&quot;. To the fullest extent permitted by
                law, Glyphatic disclaims liability for any damages arising from use of
                the site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
