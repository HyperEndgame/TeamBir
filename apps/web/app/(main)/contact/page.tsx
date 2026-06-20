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
        <section className="pt-48 pb-24 gradient-mesh">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Get in Touch</p>
              <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none uppercase" style={{ fontWeight: 800 }}>
                Contact<br /><span className="text-accent">Team BIR</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <ScrollReveal>
                <ContactForm siteName="Team BIR" />
              </ScrollReveal>
            </div>

            <div className="md:col-span-2 space-y-10">
              <ScrollReveal delay={100}>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-3">Headquarters</p>
                  <p className="font-display text-2xl tracking-wider text-white mb-1 uppercase" style={{ fontWeight: 700 }}>Knoxville, Tennessee</p>
                  <p className="font-body text-white/40 text-sm">Serving all of East Tennessee</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="gold-line" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-4">Our Companies</p>
                  <ul className="space-y-2">
                    {[
                      'BIR Materials — Aggregates & Crushing',
                      'BIR Luxury Landing — Oak Ridge, TN',
                      'BIR Transport — Freight & Logistics',
                      'BIR Developments — General Contractor',
                      'BIR Travel Plaza — Dandridge, TN',
                    ].map(item => (
                      <li key={item} className="font-body text-sm text-white/40 flex gap-2 items-center">
                        <span className="text-accent/40">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
