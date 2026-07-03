import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy — Team BIR',
  description: 'Privacy Policy for Team BIR and its family of companies.',
  alternates: { canonical: 'https://teambir.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav config={SITE_CONFIGS.main} />
      <main className="pt-32 pb-28">
        <div className="container-site max-w-3xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Legal</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none mb-12" style={{ fontWeight: 800 }}>
            Privacy Policy
          </h1>

          <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-16">
            Effective: July 3, 2026
          </p>

          <div className="space-y-12 font-body text-white/60 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>1. Who We Are</h2>
              <p>
                Team BIR is a family of Tennessee-based companies founded by Jimmy Bir Singh, headquartered in Knoxville, TN.
                This policy covers teambir.com and all company subdomains (materials.teambir.com, luxury.teambir.com,
                transport.teambir.com, developments.teambir.com, travel.teambir.com).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>2. Information We Collect</h2>
              <p className="mb-4">We collect information you provide directly, including:</p>
              <ul className="list-none space-y-2 pl-4 border-l border-accent/20">
                <li>Name, email address, and phone number submitted via contact forms</li>
                <li>Message content submitted through our contact pages</li>
                <li>Business inquiries and quote requests</li>
              </ul>
              <p className="mt-4">
                We also collect standard server logs (IP address, browser type, pages visited) through our hosting
                infrastructure. We do not use third-party analytics trackers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>3. EagleBot Chat Assistant</h2>
              <p className="mb-4">
                Our website includes EagleBot, an AI chat assistant that answers questions about Team BIR and its
                companies. When you use EagleBot:
              </p>
              <ul className="list-none space-y-2 pl-4 border-l border-accent/20">
                <li>Your messages are sent to OpenRouter, a third-party AI service provider, to generate a response</li>
                <li>Chat messages are not stored on our servers after your session ends</li>
                <li>Do not share sensitive personal information (e.g., financial or health details) in the chat</li>
              </ul>
              <p className="mt-4">
                EagleBot is limited to answering questions about Team BIR and its companies and does not provide
                legal, financial, or professional advice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>4. How We Use Your Information</h2>
              <ul className="list-none space-y-2 pl-4 border-l border-accent/20">
                <li>To respond to your inquiries and service requests</li>
                <li>To provide quotes, schedule services, or follow up on business matters</li>
                <li>To improve our websites and services</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>5. Cookies</h2>
              <p>
                Our websites use only essential cookies required for site functionality (e.g., session management).
                We do not use advertising cookies or cross-site tracking.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>6. Data Retention</h2>
              <p>
                Contact form submissions are retained for up to 2 years to support ongoing business relationships,
                then deleted unless required for legal or contractual reasons.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>7. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time by
                contacting us at the address below. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>8. Security</h2>
              <p>
                All data is transmitted over HTTPS. We implement reasonable technical and organizational measures
                to protect your information against unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>9. Contact</h2>
              <p>Questions about this policy? Reach us at:</p>
              <div className="mt-4 pl-4 border-l border-accent/20 space-y-1">
                <p>Team BIR</p>
                <p>Knoxville, Tennessee</p>
                <p>
                  <a href="/contact" className="text-accent hover:text-accent/80 transition-colors">Contact form</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-white mb-4" style={{ fontWeight: 700 }}>10. Changes to This Policy</h2>
              <p>
                We may update this policy periodically. The effective date at the top of this page reflects
                the most recent revision. Continued use of our sites after changes constitutes acceptance.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer config={SITE_CONFIGS.main} />
    </>
  )
}
