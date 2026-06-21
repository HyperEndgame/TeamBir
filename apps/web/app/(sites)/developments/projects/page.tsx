import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Construction Portfolio — Custom Homes & Commercial Projects | BIR Developments',
  description: 'View BIR Developments portfolio of custom homes, commercial builds, and renovation projects across Knoxville and East Tennessee.',
  alternates: { canonical: 'https://developments.teambir.com/projects' },
  openGraph: {
    type: 'website',
    url: 'https://developments.teambir.com/projects',
    title: 'Construction Portfolio — Custom Homes & Commercial Projects | BIR Developments',
    description: 'View BIR Developments portfolio of custom homes, commercial builds, and renovation projects across Knoxville and East Tennessee.',
  },
}

export default function DevelopmentsProjectsPage() {
  const config = SITE_CONFIGS.developments

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Portfolio</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Featured<br /><span className="text-accent">Projects</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              A selection of residential, commercial, and specialty construction projects we've completed in Knoxville and surrounding areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Work</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Completed projects that showcase our expertise</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Project */}
            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Residential Development</Badge>
                <h3 className="font-display text-3xl text-text mb-2">Oak Ridge Condominiums</h3>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Multi-unit residential development</p>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  A premium condominium development in Oak Ridge featuring luxury units with resort-style amenities, thoughtful architecture, and quality finishes. This project demonstrates our capability to manage complex multi-unit residential developments while maintaining the highest standards of construction quality.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Type</p>
                    <p className="text-text font-display text-lg">Multi-Unit</p>
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
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Features:</span> Luxury amenities, modern design</p>
                  <p className="text-muted text-sm"><span className="text-accent">Services:</span> Full construction management</p>
                </div>
              </Card>
            </ScrollReveal>

            {/* Placeholder Projects */}
            <ScrollReveal delay={150}>
              <Card>
                <Badge className="mb-4">Residential</Badge>
                <h3 className="font-display text-3xl text-text mb-2">Custom Homes</h3>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Single-family residential</p>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  High-end custom homes built to client specifications. Each project represents a unique design vision brought to life with premium materials and expert craftsmanship.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Type</p>
                    <p className="text-text font-display text-lg">Custom</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Location</p>
                    <p className="text-text font-display text-lg">Knoxville</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Status</p>
                    <p className="text-text font-display text-lg">Complete</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Range:</span> Various styles & sizes</p>
                  <p className="text-muted text-sm"><span className="text-accent">Approach:</span> Design collaboration</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <Badge className="mb-4">Commercial</Badge>
                <h3 className="font-display text-3xl text-text mb-2">Commercial Buildings</h3>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Office & retail spaces</p>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Professional retail and office buildings designed for function and aesthetics. Our commercial projects include careful project management to minimize disruption to surrounding businesses.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Type</p>
                    <p className="text-text font-display text-lg">Commercial</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Location</p>
                    <p className="text-text font-display text-lg">Knoxville</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Status</p>
                    <p className="text-text font-display text-lg">Complete</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Focus:</span> Function & design</p>
                  <p className="text-muted text-sm"><span className="text-accent">Scale:</span> Small to large</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card>
                <Badge className="mb-4">Renovation</Badge>
                <h3 className="font-display text-3xl text-text mb-2">Residential Renovations</h3>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-4">Remodeling & upgrades</p>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Transform existing homes with expert renovations. Kitchens, bathrooms, room additions, and whole-house upgrades that bring properties into the modern era while respecting their character.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Type</p>
                    <p className="text-text font-display text-lg">Renovation</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Location</p>
                    <p className="text-text font-display text-lg">Knoxville</p>
                  </div>
                  <div className="bg-bg/50 p-3 rounded">
                    <p className="text-muted text-xs mb-1">Status</p>
                    <p className="text-text font-display text-lg">Complete</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Scope:</span> Partial to full</p>
                  <p className="text-muted text-sm"><span className="text-accent">Specialty:</span> Minimal disruption</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Quality */}
      <section className="py-24 border-t border-border border-b">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Standard</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">What Sets Our Projects Apart</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Quality Craftsmanship</h4>
                  <p className="text-muted">Skilled tradespeople with years of experience. Meticulous attention to detail in every aspect of construction.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Premium Materials</h4>
                  <p className="text-muted">Only the best materials used throughout. Durability and appearance matched for long-term satisfaction.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">On-Time Delivery</h4>
                  <p className="text-muted">Professional project management ensures schedules are met. Respecting client timelines is our commitment.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-4">
                <div className="text-accent pt-1">
                  <p className="text-2xl">✓</p>
                </div>
                <div>
                  <h4 className="font-display text-xl text-text mb-2">Client Communication</h4>
                  <p className="text-muted">Regular updates and transparent communication throughout the project. You always know what's happening.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Next</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Let's Build Your Project</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Interested in working with BIR Developments? Contact us to discuss your construction project and get a free estimate.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Request Estimate</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
