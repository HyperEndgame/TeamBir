import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Developments',
  description: 'Custom homes, commercial construction, renovations, and excavation services in Knoxville, TN.',
}

export default function DevelopmentsHome() {
  const config = SITE_CONFIGS.developments

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Building Excellence</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Your Trusted<br /><span className="text-accent">Builder</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Custom homes, commercial construction, renovations, and excavation services in Knoxville. Building exceptional projects that last.
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
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">Quality Construction Services</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Developments has built a reputation for excellence in Knoxville. From residential custom homes to large commercial projects, we deliver exceptional results.
                </p>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  Our team brings decades of construction experience, meticulous attention to detail, and a commitment to client satisfaction. We build relationships as strong as our structures.
                </p>
                <Button as="a" href="/services" variant="primary" size="lg">Explore Our Services</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Expertise</Badge>
                <h3 className="font-display text-3xl text-text mb-6">Construction Specialties</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-3">
                    <p className="text-accent font-display text-lg">Custom Homes</p>
                    <p className="text-muted text-sm">Residential excellence</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="text-accent font-display text-lg">Commercial</p>
                    <p className="text-muted text-sm">Retail & office spaces</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="text-accent font-display text-lg">Renovations</p>
                    <p className="text-muted text-sm">Remodeling & upgrades</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-accent font-display text-lg">Excavation</p>
                    <p className="text-muted text-sm">Site prep & grading</p>
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
            <p className="text-muted text-lg mb-12 max-w-2xl">Complete construction solutions</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Residential</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Custom Homes</h3>
                <p className="text-muted mb-4">
                  Build your dream home. From design consultation to final walkthrough, we bring your vision to life with quality craftsmanship and attention to detail.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Commercial</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Commercial Construction</h3>
                <p className="text-muted mb-4">
                  Retail, office, and industrial buildings. We manage complex commercial projects with precision, staying on schedule and budget.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Renovation</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Renovations & Remodeling</h3>
                <p className="text-muted mb-4">
                  Breathe new life into existing properties. Kitchen remodels, bathroom upgrades, room additions, and full home renovations.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Sitework</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Excavation Services</h3>
                <p className="text-muted mb-4">
                  Site preparation, grading, foundation work. Our excavation team handles projects of any size with professional equipment and expertise.
                </p>
                <Button as="a" href="/services" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Featured Project</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">See what we're building</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card>
              <Badge className="mb-4">Residential Development</Badge>
              <h3 className="font-display text-3xl text-text mb-2">Oak Ridge Condominiums</h3>
              <p className="text-accent font-mono text-xs tracking-widest uppercase mb-6">Multi-unit residential development</p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                A premium condominium development in Oak Ridge featuring luxury units, resort-style amenities, and thoughtful design. This project showcases our commitment to quality and customer satisfaction.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-bg/50 p-3 rounded">
                  <p className="text-muted text-xs mb-1">Unit Type</p>
                  <p className="text-text font-display text-lg">Multi-unit</p>
                </div>
                <div className="bg-bg/50 p-3 rounded">
                  <p className="text-muted text-xs mb-1">Location</p>
                  <p className="text-text font-display text-lg">Oak Ridge</p>
                </div>
                <div className="bg-bg/50 p-3 rounded">
                  <p className="text-muted text-xs mb-1">Status</p>
                  <p className="text-text font-display text-lg">Active</p>
                </div>
              </div>
              <Button as="a" href="/projects" variant="outline" size="sm">View All Projects</Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose BIR */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Advantage</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Why Choose BIR Developments</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Experience</h4>
                <p className="text-muted">Decades of construction expertise. We've built hundreds of projects in Knoxville and surrounding areas.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Quality</h4>
                <p className="text-muted">Superior craftsmanship and materials. Every project built to last with meticulous attention to detail.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Communication</h4>
                <p className="text-muted">Transparent process from start to finish. Regular updates and responsive to client needs.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">On Time</h4>
                <p className="text-muted">Reliable scheduling and project management. We meet deadlines and respect your timeline.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">On Budget</h4>
                <p className="text-muted">Fair pricing with no surprise costs. Transparent estimates and professional budget management.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Local</h4>
                <p className="text-muted">Knoxville-based company with deep community roots and proven track record.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Next Project</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Let's Build Something Great</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Whether you're planning a custom home, commercial building, renovation, or excavation project, BIR Developments is ready to help. Contact us for a free estimate.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Request Free Estimate</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
