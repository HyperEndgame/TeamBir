import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Trucking Services — Dry Van, Cross Dock & Final Mile | BIR Transport TN',
  description: 'Tennessee trucking: dry van truckload, cross docking, final mile, overweight hauls, drop trailer storage, and boat/RV storage. USDOT 717687.',
  alternates: { canonical: 'https://transport.teambir.com/services' },
  openGraph: {
    type: 'website',
    url: 'https://transport.teambir.com/services',
    title: 'Trucking Services — Dry Van, Cross Dock & Final Mile | BIR Transport TN',
    description: 'Tennessee trucking: dry van truckload, cross docking, final mile, overweight hauls, drop trailer storage, and boat/RV storage. USDOT 717687.',
  },
}

export default function TransportServicesPage() {
  const config = SITE_CONFIGS.transport

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Solutions</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Transportation<br /><span className="text-accent">Services</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Complete range of trucking and logistics services. From cross-docking to specialized hauls, we have the solution for your shipment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Services</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Professional transportation solutions for every need</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Cross Docking</h3>
                <p className="text-muted mb-6">
                  Efficient transfer station for goods. Inbound shipments are sorted and transferred directly to outbound vehicles, minimizing storage time and reducing costs.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Perfect for:</span> High-velocity goods</p>
                  <p className="text-muted text-sm"><span className="text-accent">Benefit:</span> Reduced handling & storage costs</p>
                  <p className="text-muted text-sm"><span className="text-accent">Speed:</span> Quick turnaround times</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Final Mile Delivery</h3>
                <p className="text-muted mb-6">
                  Last-mile delivery services to end customers. Professional, on-time delivery with tracking and confirmation. Reliable service that builds customer satisfaction.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Speed:</span> Quick delivery times</p>
                  <p className="text-muted text-sm"><span className="text-accent">Tracking:</span> Full visibility included</p>
                  <p className="text-muted text-sm"><span className="text-accent">Reliability:</span> On-time guaranteed</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Re-deliveries</h3>
                <p className="text-muted mb-6">
                  Efficient handling of failed deliveries. We manage return attempts with professionalism and resolve delivery issues quickly. Minimize customer frustration with successful delivery.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Process:</span> Professional handling</p>
                  <p className="text-muted text-sm"><span className="text-accent">Communication:</span> Proactive coordination</p>
                  <p className="text-muted text-sm"><span className="text-accent">Result:</span> Successful delivery</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Overweight Assistance</h3>
                <p className="text-muted mb-6">
                  Expert handling of oversized and overweight hauls. Full permitting, routing, escort services, and specialized equipment. Safe, legal transport of heavy loads.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Expertise:</span> Specialized equipment</p>
                  <p className="text-muted text-sm"><span className="text-accent">Compliance:</span> Full permitting included</p>
                  <p className="text-muted text-sm"><span className="text-accent">Safety:</span> Professional handling</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Drop Trailer Storage</h3>
                <p className="text-muted mb-6">
                  Secure drop-trailer storage facilities for temporary and long-term needs. Cost-effective solution for staging goods and managing inventory. Flexible rental terms.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Facility:</span> Secure & climate-controlled</p>
                  <p className="text-muted text-sm"><span className="text-accent">Terms:</span> Short or long-term available</p>
                  <p className="text-muted text-sm"><span className="text-accent">Cost:</span> Competitive rates</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card hover>
                <Badge className="mb-4">Service</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Refrigerated Storage</h3>
                <p className="text-muted mb-6">
                  Temperature-controlled storage for perishable goods, pharmaceuticals, and temperature-sensitive products. Maintains product integrity and compliance with regulatory requirements.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Control:</span> Precise temperature management</p>
                  <p className="text-muted text-sm"><span className="text-accent">Compliance:</span> Meets industry standards</p>
                  <p className="text-muted text-sm"><span className="text-accent">Monitoring:</span> 24/7 oversight</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why These Services */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Business</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Optimize Your Supply Chain</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Reduce Costs</h4>
                  <p className="text-muted">Efficient logistics minimize storage, handling, and transportation expenses. Better margins through optimized operations.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Faster Delivery</h4>
                  <p className="text-muted">Professional logistics keep goods moving. Cross-docking and final mile services ensure quick time-to-customer.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Reliable Service</h4>
                  <p className="text-muted">Professional operations mean on-time delivery and happy customers. Build loyalty through consistent performance.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Flexible Scaling</h4>
                  <p className="text-muted">Services that grow with your business. Seasonal peaks, new products, expansion markets—we adapt.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Next Steps</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Ready to Improve Your Logistics?</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Contact BIR Transport to discuss your specific shipping and logistics needs. We'll provide customized solutions and competitive pricing.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Get a Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
