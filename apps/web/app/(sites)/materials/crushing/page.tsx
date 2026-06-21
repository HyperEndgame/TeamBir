import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contract Rock Crushing Services in Knoxville, TN | BIR Materials',
  description: 'Mobile and stationary rock crushing in Knoxville, TN — on-site and contract crushing at any scale. Call 865-832-6247 for a quote.',
  alternates: { canonical: 'https://materials.teambir.com/crushing' },
  openGraph: {
    type: 'website',
    url: 'https://materials.teambir.com/crushing',
    title: 'Contract Rock Crushing Services in Knoxville, TN | BIR Materials',
    description: 'Mobile and stationary rock crushing in Knoxville, TN — on-site and contract crushing at any scale. Call 865-832-6247 for a quote.',
  },
}

export default function CrushingPage() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Services</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Contract<br /><span className="text-accent">Crushing</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Mobile and stationary crushing services for demolition materials, concrete recycling, and aggregate processing. We bring crushing capacity to your jobsite.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Service Options</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Choose the crushing solution that fits your project</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Equipment Rental</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Mobile Crushing Equipment</h3>
                <p className="text-muted mb-4">
                  Rent our mobile crushing equipment and bring crushing capacity directly to your jobsite. Perfect for processing demolition materials and generating reusable aggregates on-site.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Flexible scheduling</span> to match your timeline</p>
                  <p className="text-muted text-sm"><span className="text-accent">Operator services</span> available if needed</p>
                  <p className="text-muted text-sm"><span className="text-accent">Dust control</span> systems included</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Request Equipment</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Service Provider</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Crushing Services</h3>
                <p className="text-muted mb-4">
                  Let BIR Materials handle the crushing. We provide full-service crushing operations for your demolition materials and project waste.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Complete processing</span> from start to finish</p>
                  <p className="text-muted text-sm"><span className="text-accent">Experienced crew</span> manages operation</p>
                  <p className="text-muted text-sm"><span className="text-accent">Quality control</span> on output materials</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Schedule Service</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Stationary Site</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Our Crushing Facility</h3>
                <p className="text-muted mb-4">
                  Process your materials at our facility in Knoxville. Bring materials for crushing and receive processed aggregates ready for immediate use.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">High-volume capacity</span> processing</p>
                  <p className="text-muted text-sm"><span className="text-accent">Multiple output sizes</span> available</p>
                  <p className="text-muted text-sm"><span className="text-accent">Quick turnaround</span> on orders</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Details</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Recycling</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Material Recycling</h3>
                <p className="text-muted mb-4">
                  Process concrete, asphalt, and mixed demolition materials into usable aggregates. Reduce landfill waste while creating valuable building materials.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Sustainability-focused</span> operations</p>
                  <p className="text-muted text-sm"><span className="text-accent">Contamination removal</span> services</p>
                  <p className="text-muted text-sm"><span className="text-accent">Environmental compliance</span> guaranteed</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Recycle Materials</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Capabilities</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-6">What We Can Process</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Concrete</h4>
                <p className="text-muted mb-4">Demolition and scrap concrete crushed into reusable base aggregate, road stone, or fill material.</p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Reinforced concrete</li>
                  <li>✓ Pavement concrete</li>
                  <li>✓ Large demolition debris</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Asphalt</h4>
                <p className="text-muted mb-4">Milled asphalt pavement processed for reuse in new asphalt, base courses, or landscaping applications.</p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Milled pavement</li>
                  <li>✓ Removed asphalt</li>
                  <li>✓ Mixed asphalt debris</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Mixed Demolition</h4>
                <p className="text-muted mb-4">Sorting and processing of mixed demolition materials to recover valuable aggregates and reduce waste.</p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Construction debris</li>
                  <li>✓ Building demolition</li>
                  <li>✓ Mixed materials</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Benefits</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Why Choose BIR for Crushing</h2>
              <p className="text-muted text-lg leading-relaxed">
                Our crushing services provide cost-effective material processing while supporting sustainable construction practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Cost Savings</h4>
                  <p className="text-muted">Reduce material purchase costs by recycling on-site. Process demolition waste into usable aggregates.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Waste Reduction</h4>
                  <p className="text-muted">Minimize landfill contributions. Transform demolition waste into valuable building materials.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Flexibility</h4>
                  <p className="text-muted">Choose equipment rental, full service, or on-site crushing—whatever fits your project.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Expertise</h4>
                  <p className="text-muted">20+ years of crushing experience. Professional operation and quality output guaranteed.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="mt-12">
            <Button as="a" href="/contact" variant="primary" size="lg">Schedule a Consultation</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
