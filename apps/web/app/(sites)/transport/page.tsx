import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Transport',
  description: 'Tennessee-based trucking and logistics services. USDOT 717687.',
}

export default function TransportHome() {
  const config = SITE_CONFIGS.transport

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Trucking & Logistics</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Go With<br /><span className="text-accent">the Best</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Professional trucking and logistics services serving Tennessee and beyond. Cross-docking, final mile delivery, overweight assistance, and specialized storage solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">About</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">Professional Transportation Solutions</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Transport brings decades of experience in the trucking and logistics industry. We specialize in comprehensive transportation solutions that keep supply chains moving efficiently.
                </p>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  From specialized cross-docking services to overweight haul assistance, we have the equipment, expertise, and reliability your business needs. Licensed, insured, and committed to on-time delivery.
                </p>
                <Button as="a" href="/services" variant="primary" size="lg">Explore Services</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Credentials</Badge>
                <h3 className="font-display text-3xl text-accent mb-6">USDOT 717687</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">USDOT Number</p>
                    <p className="text-text font-display text-2xl">717687</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Operations</p>
                    <p className="text-text font-display text-lg">Interstate Trucking</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Safety Rating</p>
                    <p className="text-text font-display text-lg">Professional Fleet</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Insurance</p>
                    <p className="text-text font-display text-lg">Fully Insured</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Services</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Complete transportation and logistics solutions</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Warehousing</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Cross Docking</h3>
                <p className="text-muted mb-4">
                  Efficient transfer of goods from inbound to outbound vehicles. Reduces storage time and costs while keeping goods in transit.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Delivery</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Final Mile Delivery</h3>
                <p className="text-muted mb-4">
                  Quick, reliable last-mile delivery to customers. Fast turnaround and professional handling of every shipment.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Specialized</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Overweight Assistance</h3>
                <p className="text-muted mb-4">
                  Expert handling of oversized and overweight hauls. Full permitting and escort services included.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Storage</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Drop Trailer Storage</h3>
                <p className="text-muted mb-4">
                  Secure drop-trailer storage facilities. Cost-effective solution for temporary and long-term needs.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose BIR */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Advantage</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Why Choose BIR Transport</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Reliability</h4>
                <p className="text-muted">On-time delivery guaranteed. Professional drivers and well-maintained equipment. Your shipment is in good hands.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Experience</h4>
                <p className="text-muted">Decades of transportation expertise. We handle standard and specialized shipments with equal professionalism.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Compliance</h4>
                <p className="text-muted">USDOT licensed and fully insured. We follow all regulations and safety standards for interstate commerce.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Competitive Pricing</h4>
                <p className="text-muted">Fair, transparent rates for all services. No hidden fees. Get accurate quotes for your specific needs.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Flexibility</h4>
                <p className="text-muted">We work around your schedule. Custom solutions for unique shipments and special requirements.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Support</h4>
                <p className="text-muted">Responsive customer service. Real support for real problems. We're here when you need us.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready To Ship</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Get a Quote Today</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Contact BIR Transport for transportation and logistics solutions. We'll provide a detailed quote based on your specific shipment requirements.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Request Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
