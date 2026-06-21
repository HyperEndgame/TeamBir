import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'New Condominiums for Sale in Oak Ridge, TN | BIR Luxury Landing',
  description: 'New luxury condominium development in Oak Ridge, TN — premium finishes, resort amenities, and pre-sale opportunities. Contact us for pricing.',
  alternates: { canonical: 'https://luxury.teambir.com/condominiums' },
  openGraph: {
    type: 'website',
    url: 'https://luxury.teambir.com/condominiums',
    title: 'New Condominiums for Sale in Oak Ridge, TN | BIR Luxury Landing',
    description: 'New luxury condominium development in Oak Ridge, TN — premium finishes, resort amenities, and pre-sale opportunities. Contact us for pricing.',
  },
}

export default function CondominiumsPage() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Coming Soon</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              New<br /><span className="text-accent">Condominiums</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Exciting new condominium development in Oak Ridge. Pre-sale opportunities available now for this premium community addition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Development</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">New Development Phase</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  We're excited to announce our newest condominium development, a premier addition to the BIR Luxury Landing community. This new collection features the latest in design and amenities.
                </p>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  Pre-sale opportunities are now available for select units. This is your chance to secure a prime location in our newest development with potential to benefit from early-buyer advantages.
                </p>
                <Button as="a" href="/contact" variant="primary" size="lg">Express Interest</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Pre-Sale Available</Badge>
                <h3 className="font-display text-3xl text-accent mb-6">Limited Units</h3>
                <div className="bg-bg/50 p-6 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Phase 1 Details</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted text-sm">Select floor plans available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted text-sm">Pre-construction pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted text-sm">Financing options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted text-sm">Move-in projected 2025</span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted text-sm">Contact our sales team for detailed information and floor plan options.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Development Highlights</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">What makes this development exceptional</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Premium Location</h4>
                <p className="text-muted mb-4">
                  Strategically positioned within our established community. Easy access to all resident amenities and just minutes from Knoxville.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Modern Design</h4>
                <p className="text-muted mb-4">
                  Contemporary architecture that complements the landscape. Thoughtfully designed spaces with modern finishes throughout.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Full Amenities</h4>
                <p className="text-muted mb-4">
                  Complete access to resort-style pool, clubhouse, fitness center, BBQ areas, and all community facilities.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Investment Value</h4>
                <p className="text-muted mb-4">
                  Growing community with strong appreciation potential. BIR Luxury Landing is an established, desirable address.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Flexible Options</h4>
                <p className="text-muted mb-4">
                  Multiple floor plans and configurations to suit different lifestyles and family sizes. Owner and investor opportunities.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Quality Construction</h4>
                <p className="text-muted mb-4">
                  Built to BIR standards with premium materials, energy-efficient systems, and meticulous attention to detail.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pre-Sale Advantages */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Opportunity</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Pre-Sale Advantages</h2>
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
                  <h4 className="font-display text-2xl text-text mb-2">Early Pricing</h4>
                  <p className="text-muted text-lg">Lock in pre-construction pricing before phase completion and market appreciation.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Selection Priority</h4>
                  <p className="text-muted text-lg">Choose from available floor plans and preferred locations in the development.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Financing Options</h4>
                  <p className="text-muted text-lg">Flexible financing arrangements available for pre-sale purchasers.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Investment Potential</h4>
                  <p className="text-muted text-lg">Strong appreciation potential as the development completes and community grows.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Interested</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Learn About Pre-Sale Opportunities</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Limited units are available in Phase 1. Contact our sales team today to express your interest, request floor plans, and discuss financing options.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Contact Sales Team</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
