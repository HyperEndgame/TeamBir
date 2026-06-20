import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Luxury Apartments',
  description: 'One to four-bedroom luxury apartments with penthouse options and mountain views.',
}

export default function ApartmentsPage() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Residences</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Luxury<br /><span className="text-accent">Apartments</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              One to four-bedroom apartments with stunning mountain views. Penthouse suites available for those seeking the ultimate in luxury living.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Multiple Floor Plans</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Choose the perfect layout for your lifestyle</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">1 Bed / 1 Bath</Badge>
                <h3 className="font-display text-2xl text-text mb-3">One Bedroom</h3>
                <p className="text-muted mb-4">
                  Ideal for professionals and small households. Efficient layout with modern kitchen and comfortable living space. Perfect entry-level luxury.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Sq Ft:</span> 650 - 750</p>
                  <p className="text-muted text-sm"><span className="text-accent">Views:</span> Select units with views</p>
                  <p className="text-muted text-sm"><span className="text-accent">Parking:</span> Included</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">2 Bed / 2 Bath</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Two Bedroom</h3>
                <p className="text-muted mb-4">
                  Extra space for home offices or guests. Two full bathrooms and a larger living area. Great for couples and small families.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Sq Ft:</span> 950 - 1,100</p>
                  <p className="text-muted text-sm"><span className="text-accent">Views:</span> Mountain views</p>
                  <p className="text-muted text-sm"><span className="text-accent">Parking:</span> Included</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">3 Bed / 2.5 Bath</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Three Bedroom</h3>
                <p className="text-muted mb-4">
                  Spacious family living with dedicated guest room. Open-concept design maximizes flow and natural light. Excellent for growing families.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Sq Ft:</span> 1,300 - 1,500</p>
                  <p className="text-muted text-sm"><span className="text-accent">Views:</span> Premium views</p>
                  <p className="text-muted text-sm"><span className="text-accent">Parking:</span> Included</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">4 Bed / 3 Bath</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Penthouse Suite</h3>
                <p className="text-muted mb-4">
                  Ultimate luxury living with four bedrooms, three full bathrooms, and stunning panoramic mountain views. The crown jewel of our community.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Sq Ft:</span> 2,000+</p>
                  <p className="text-muted text-sm"><span className="text-accent">Views:</span> Panoramic mountain vistas</p>
                  <p className="text-muted text-sm"><span className="text-accent">Parking:</span> Multiple spaces</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mountain Views */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Living</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Stunning Mountain Views</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Many of our apartments feature breathtaking views of the surrounding mountains and valleys. Wake up to natural beauty every day.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Panoramic mountain vistas from select units</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">High-floor penthouse units with full views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Large balconies and patios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Floor-to-ceiling windows</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Premium Features</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Why Choose Our Apartments</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-accent font-display mb-1">Modern Finishes</h4>
                    <p className="text-muted text-sm">Contemporary design with premium materials throughout.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-accent font-display mb-1">Smart Home Tech</h4>
                    <p className="text-muted text-sm">Integrated systems for convenience and security.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-accent font-display mb-1">Energy Efficient</h4>
                    <p className="text-muted text-sm">Modern HVAC and insulation for comfort and savings.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-accent font-display mb-1">Parking Included</h4>
                    <p className="text-muted text-sm">Dedicated parking spaces in secure garages.</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Community Amenities</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Recreation</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Resort-style pool</li>
                  <li>✓ Fitness center</li>
                  <li>✓ Yoga studio</li>
                  <li>✓ Game room</li>
                  <li>✓ Billiards lounge</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Outdoor Living</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ BBQ areas</li>
                  <li>✓ Picnic grounds</li>
                  <li>✓ Walking trails</li>
                  <li>✓ Dog park</li>
                  <li>✓ Scenic overlooks</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Convenience</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Clubhouse events</li>
                  <li>✓ Conference room</li>
                  <li>✓ Package delivery</li>
                  <li>✓ Concierge service</li>
                  <li>✓ Maintenance 24/7</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Community</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Social events</li>
                  <li>✓ Resident activities</li>
                  <li>✓ Wellness programs</li>
                  <li>✓ Networking groups</li>
                  <li>✓ Seasonal celebrations</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready to Move In</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Find Your Perfect Apartment</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Schedule a private tour of any of our floor plans. Experience the luxury, views, and amenities that make our apartments special.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Schedule Tour</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
