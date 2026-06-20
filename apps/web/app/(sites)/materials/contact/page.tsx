import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact BIR Materials',
  description: 'Get in touch with BIR Materials in Knoxville, Tennessee for quotes and scheduling.',
}

export default function MaterialsContactPage() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Contact<br /><span className="text-accent">BIR Materials</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Ready to order materials or schedule crushing services? Reach out to our team in Knoxville.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Location</p>
                <h3 className="font-display text-3xl text-text mb-4">Knoxville, Tennessee</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Our quarry and processing facility is conveniently located in Knoxville, serving all of East Tennessee and surrounding regions.
                </p>
                <div className="space-y-3">
                  <p className="text-muted"><span className="text-accent font-display">City:</span> Knoxville</p>
                  <p className="text-muted"><span className="text-accent font-display">Service Area:</span> East Tennessee</p>
                  <p className="text-muted"><span className="text-accent font-display">Access:</span> 24/7 for scheduled pickups</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Contact</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Call for Pricing</h3>
                <div className="bg-bg/50 p-4 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Phone</p>
                  <p className="text-text font-display text-2xl tracking-wider">Call Now</p>
                  <p className="text-muted text-sm mt-2">Available for quotes and scheduling</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Our team responds to inquiries within 24 hours. Have your project details ready for faster quotes.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <Badge className="mb-4">Services</Badge>
                <h3 className="font-display text-2xl text-text mb-6">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Aggregate orders & delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Crushing service scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Equipment rental inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Recycling program participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Custom material requests</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Send a Message</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-4">Request Information</h2>
                <p className="text-muted text-lg">Fill out the form below and we'll respond with pricing, availability, and answers to your questions.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm siteName="BIR Materials" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Process</p>
                <h3 className="font-display text-3xl text-text mb-6">How to Order</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-accent font-display text-2xl flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-display text-text mb-1">Request a Quote</h4>
                      <p className="text-muted text-sm">Contact us with your project details and material needs</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent font-display text-2xl flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-display text-text mb-1">Receive Pricing</h4>
                      <p className="text-muted text-sm">We'll provide detailed pricing based on quantity and delivery</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent font-display text-2xl flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-display text-text mb-1">Confirm Order</h4>
                      <p className="text-muted text-sm">Schedule pickup or arrange delivery at your convenience</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent font-display text-2xl flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-display text-text mb-1">Material Delivery</h4>
                      <p className="text-muted text-sm">Receive your materials on schedule, ready for use</p>
                    </div>
                  </li>
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Common Questions</Badge>
                <h3 className="font-display text-2xl text-text mb-6">FAQ</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-text mb-2">Do you offer delivery?</h4>
                    <p className="text-muted text-sm">Yes, delivery available within service area. Pickup at quarry also available with discounts.</p>
                  </div>
                  <div>
                    <h4 className="font-display text-text mb-2">What are your bulk discounts?</h4>
                    <p className="text-muted text-sm">Volume discounts apply to large orders. Contact us directly for pricing on your specific quantity.</p>
                  </div>
                  <div>
                    <h4 className="font-display text-text mb-2">Can you do custom material blends?</h4>
                    <p className="text-muted text-sm">Absolutely. We can create custom mixes to meet your project specifications and engineering requirements.</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
