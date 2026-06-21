import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Construction Services in Knoxville, TN | BIR Developments · License #80985',
  description: 'Custom homes, commercial construction, renovations, excavation, electrical, and materials in Knoxville, TN. TN Contractor License #80985.',
  alternates: { canonical: 'https://developments.teambir.com/services' },
  openGraph: {
    type: 'website',
    url: 'https://developments.teambir.com/services',
    title: 'Construction Services in Knoxville, TN | BIR Developments · License #80985',
    description: 'Custom homes, commercial construction, renovations, excavation, electrical, and materials in Knoxville, TN. TN Contractor License #80985.',
  },
}

export default function DevelopmentsServicesPage() {
  const config = SITE_CONFIGS.developments

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Services</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Construction<br /><span className="text-accent">Services</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Comprehensive construction services for residential, commercial, and specialty projects in Knoxville.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">What We Build</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Services for every type of project</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Residential</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Custom Homes</h3>
                <p className="text-muted mb-6">
                  Build your dream home from the ground up. We work with you from design through completion, ensuring your custom home is exactly what you envision.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Design:</span> Collaborative process</p>
                  <p className="text-muted text-sm"><span className="text-accent">Quality:</span> Premium materials</p>
                  <p className="text-muted text-sm"><span className="text-accent">Timeline:</span> On schedule</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Estimate</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Commercial</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Commercial Construction</h3>
                <p className="text-muted mb-6">
                  Retail spaces, offices, industrial facilities. We manage complex commercial projects with precision, coordination, and professional project management.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Planning:</span> Detailed scheduling</p>
                  <p className="text-muted text-sm"><span className="text-accent">Budget:</span> Transparent pricing</p>
                  <p className="text-muted text-sm"><span className="text-accent">Coordination:</span> Professional crew</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Estimate</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Renovation</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Renovations & Remodeling</h3>
                <p className="text-muted mb-6">
                  Bring new life to existing spaces. Kitchen remodels, bathroom updates, room additions, full home renovations. Transform your property.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Scope:</span> Any size project</p>
                  <p className="text-muted text-sm"><span className="text-accent">Minimal:</span> Disruption management</p>
                  <p className="text-muted text-sm"><span className="text-accent">Modern:</span> Latest materials</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Estimate</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Sitework</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Excavation Services</h3>
                <p className="text-muted mb-6">
                  Site preparation, grading, foundation work, drainage. Our excavation team has the equipment and expertise for any project scale.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Equipment:</span> Modern machinery</p>
                  <p className="text-muted text-sm"><span className="text-accent">Expertise:</span> Professional crew</p>
                  <p className="text-muted text-sm"><span className="text-accent">Precision:</span> Accurate grading</p>
                </div>
                <Button as="a" href="/contact" variant="outline" size="sm">Get Estimate</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Process</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">How We Work</h2>
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
                  <h4 className="font-display text-2xl text-text mb-2">Consultation & Design</h4>
                  <p className="text-muted text-lg">We meet to discuss your vision, review designs, and develop a detailed project plan tailored to your needs.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Permitting & Planning</h4>
                  <p className="text-muted text-lg">We handle all permits and regulatory requirements. Detailed scheduling ensures smooth project execution.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Construction & Management</h4>
                  <p className="text-muted text-lg">Professional crew builds your project. Regular updates and quality inspections throughout construction.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Completion & Handoff</h4>
                  <p className="text-muted text-lg">Final inspections, punch-list completion, and project handoff. You move in to your completed project.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Standard</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Our Commitment to Quality</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Premium Materials</h4>
                  <p className="text-muted">Only the best materials for durability and appearance. Quality at every level of construction.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Expert Craftsmanship</h4>
                  <p className="text-muted">Skilled tradespeople with years of experience. Attention to detail in every aspect of the work.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Regular Inspections</h4>
                  <p className="text-muted">Quality control throughout the project. Multiple inspections to ensure standards are met.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Warranty & Support</h4>
                  <p className="text-muted">Stand behind our work with warranties. Available for questions and support after completion.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Start Your Project Today</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Contact BIR Developments for your construction project. We'll discuss your needs and provide a detailed estimate.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Request Estimate</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
