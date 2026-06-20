import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Team BIR — Knoxville & Dandridge, Tennessee.',
}

export default function ContactPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        <section className="pt-40 pb-24 border-b border-border">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get in Touch</p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
                Contact<br /><span className="text-accent">Team BIR</span>
              </h1>
              <p className="text-muted text-xl max-w-xl leading-relaxed">
                Reach out about any of our companies or services. We'll connect you with the right team.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal>
              <ContactForm siteName="Team BIR" />
            </ScrollReveal>

            <ScrollReveal delay={150} className="space-y-8">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Location</p>
                <p className="text-text font-display text-2xl tracking-wider mb-1">Knoxville, Tennessee</p>
                <p className="text-muted">Serving all of East Tennessee</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Our Companies</p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>BIR Materials — Aggregates & Crushing</li>
                  <li>BIR Luxury Landing — Residential</li>
                  <li>BIR Transport — Logistics</li>
                  <li>BIR Developments — General Contractor</li>
                  <li>BIR Travel Plaza — Dandridge, TN</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
