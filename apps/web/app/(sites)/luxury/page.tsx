import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Luxury Landing',
  description: 'Luxury duplexes, apartments, and condominiums in Oak Ridge, TN — 22 miles from Downtown Knoxville with resort-style amenities.',
}

export default function LuxuryHome() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Residential Living</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Elevated Living<br /><span className="text-accent">in Oak Ridge</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Luxury residences just 22 miles from Downtown Knoxville. Experience premier amenities, mountain views, and sophisticated living in Tennessee's premier community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Your Community Awaits</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Thoughtfully designed homes with resort-style amenities</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Residences</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Duplexes</h3>
                <p className="text-muted mb-4">3 bedroom, 2.5 bath luxury duplexes featuring 1,400 sq ft of premium living space with private garages and high-end finishes.</p>
                <Button as="a" href="/duplexes" variant="outline" size="sm">Explore Duplexes</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Residences</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Apartments</h3>
                <p className="text-muted mb-4">One to four-bedroom options with penthouse suites available. Stunning mountain views and modern amenities throughout.</p>
                <Button as="a" href="/apartments" variant="outline" size="sm">View Apartments</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Coming Soon</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Condominiums</h3>
                <p className="text-muted mb-4">New development with pre-sale opportunities. Premier locations with exclusive access to all community amenities.</p>
                <Button as="a" href="/condominiums" variant="outline" size="sm">Pre-Sale Info</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Lifestyle</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Amenities</h3>
                <p className="text-muted mb-4">Resort-style pool, clubhouse, BBQ areas, billiards room, conference facilities, and dog park included for all residents.</p>
                <Button as="a" href="/amenities" variant="outline" size="sm">See Amenities</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location & Lifestyle */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Location</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Oak Ridge Living</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Nestled in the scenic foothills of East Tennessee, our community offers the perfect balance of peaceful residential living and convenient access to Knoxville's vibrant downtown.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Just 22 miles from Downtown Knoxville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Close to fine dining and shopping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Mountain views and natural beauty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Low-density, peaceful neighborhood</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Facts</Badge>
                <h3 className="font-display text-3xl text-accent mb-6">Oak Ridge</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Distance to Knoxville</p>
                    <p className="text-text font-display text-2xl">22 Miles</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Community Status</p>
                    <p className="text-text font-display text-lg">Established & Growing</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Lifestyle</p>
                    <p className="text-text font-display text-lg">Resort-Style Living</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Amenities Preview */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Amenities</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">World-Class Facilities</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Resort Pool</h4>
                <p className="text-muted">Olympic-size swimming pool with cabanas and seasonal activities for all residents and guests.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Clubhouse</h4>
                <p className="text-muted">Premium gathering space with conference facilities, event space, and lounge areas available for resident use.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Outdoor Living</h4>
                <p className="text-muted">BBQ areas, billiards room, and dog park. Perfect for entertaining and enjoying the community.</p>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={250} className="mt-12">
            <Button as="a" href="/amenities" variant="primary" size="lg">Explore All Amenities</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Inquiries</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Ready to Experience Luxury Living?</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Schedule a tour today. Our leasing team is ready to show you why BIR Luxury Landing is Oak Ridge's premier residential community.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Contact Leasing</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
