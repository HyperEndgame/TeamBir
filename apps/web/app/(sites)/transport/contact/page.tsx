import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact BIR Transport',
  description: 'Get a quote for transport and logistics services. USDOT 717687.',
}

export default function TransportContactPage() {
  const config = SITE_CONFIGS.transport

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Request a<br /><span className="text-accent">Quote</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Need transportation or logistics services? Contact our team to discuss your shipment and get a competitive quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Credentials</p>
                <h3 className="font-display text-3xl text-text mb-4">Licensed & Insured</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Transport operates under USDOT authority with full insurance coverage. Professional, compliant transportation services you can trust.
                </p>
                <div className="space-y-3">
                  <p className="text-muted"><span className="text-accent font-display">USDOT:</span> 717687</p>
                  <p className="text-muted"><span className="text-accent font-display">Coverage:</span> Fully insured</p>
                  <p className="text-muted"><span className="text-accent font-display">Operations:</span> Interstate service</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Contact</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Call for Quote</h3>
                <div className="bg-bg/50 p-4 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Phone</p>
                  <p className="text-text font-display text-2xl tracking-wider">Call Now</p>
                  <p className="text-muted text-sm mt-2">Available for quote requests and scheduling</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Have your shipment details ready for faster, more accurate quotes.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <Badge className="mb-4">Services</Badge>
                <h3 className="font-display text-2xl text-text mb-6">What We Can Help With</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Shipment quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Cross-docking services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Final mile delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Trailer storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Overweight hauls</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Quote Request</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-4">Send Your Shipment Details</h2>
                <p className="text-muted text-lg">Fill out the form below with your transportation needs. We'll respond with a detailed quote within 24 hours.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm siteName="BIR Transport" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Process</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">How to Get a Quote</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">1</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Provide Details</h4>
                  <p className="text-muted text-lg">Share your shipment specs: origin, destination, weight, dimensions, freight type, and any special requirements.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">2</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Receive Quote</h4>
                  <p className="text-muted text-lg">We analyze your shipment and provide a competitive quote with transparent pricing and service details.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">3</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Confirm & Schedule</h4>
                  <p className="text-muted text-lg">Accept the quote and schedule pickup/delivery. We handle all logistics from start to finish.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">4</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Shipment Delivered</h4>
                  <p className="text-muted text-lg">Professional handling and on-time delivery. Full tracking available throughout the journey.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Information Needed */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Preparation</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Info for Faster Quotes</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card>
                <h4 className="font-display text-2xl text-accent mb-4">Shipment Details</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Weight (total lbs)</li>
                  <li>✓ Dimensions (L x W x H)</li>
                  <li>✓ Freight type/class</li>
                  <li>✓ Hazmat info (if applicable)</li>
                  <li>✓ Special handling needs</li>
                  <li>✓ Pickup/delivery dates</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <h4 className="font-display text-2xl text-accent mb-4">Location Info</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Pickup address</li>
                  <li>✓ Delivery address</li>
                  <li>✓ Loading/dock availability</li>
                  <li>✓ Contact person</li>
                  <li>✓ Phone & email</li>
                  <li>✓ Access requirements</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
