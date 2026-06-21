import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Luxury Duplexes in Oak Ridge, TN | BIR Luxury Landing',
  description: 'Luxury 3BR/2.5BA duplexes with private garages and premium finishes in Oak Ridge, TN. Contact BIR Luxury Landing for availability.',
  alternates: { canonical: 'https://luxury.teambir.com/duplexes' },
  openGraph: {
    type: 'website',
    url: 'https://luxury.teambir.com/duplexes',
    title: 'Luxury Duplexes in Oak Ridge, TN | BIR Luxury Landing',
    description: 'Luxury 3BR/2.5BA duplexes with private garages and premium finishes in Oak Ridge, TN. Contact BIR Luxury Landing for availability.',
  },
}

export default function DuplexesPage() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Residences</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Luxury<br /><span className="text-accent">Duplexes</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Three-bedroom, 2.5-bath duplexes designed for sophisticated living. 1,400 square feet of premium space with private garage and high-end finishes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Premium Floorplan</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Spacious, thoughtfully designed for modern living</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Specifications</Badge>
                <h3 className="font-display text-3xl text-text mb-6">Unit Features</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted">Bedrooms</span>
                    <span className="font-display text-text text-xl">3</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted">Bathrooms</span>
                    <span className="font-display text-text text-xl">2.5</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted">Square Footage</span>
                    <span className="font-display text-text text-xl">1,400 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted">Garage</span>
                    <span className="font-display text-accent text-xl">Private</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-muted">Layout</span>
                    <span className="font-display text-accent text-xl">Open Concept</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Layout</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">1,400 Square Feet</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Each duplex features an intelligent floor plan with spacious living areas, modern kitchen, private master suite, and dedicated home office nook.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Open-concept living and dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Master suite with ensuite bath</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Two additional bedrooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Premium kitchen with island</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Attached private garage</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Premium Finishes</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">High-end materials and appliances throughout</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Kitchen</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Stainless steel appliances</li>
                  <li>✓ Quartz countertops</li>
                  <li>✓ Custom cabinetry</li>
                  <li>✓ Island with seating</li>
                  <li>✓ Modern lighting fixtures</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Bathrooms</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Luxury tile work</li>
                  <li>✓ Modern fixtures</li>
                  <li>✓ Large soaking tubs</li>
                  <li>✓ Walk-in showers</li>
                  <li>✓ Heated floors (select units)</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Throughout</h4>
                <ul className="space-y-2 text-muted">
                  <li>✓ Engineered hardwood flooring</li>
                  <li>✓ Crown molding details</li>
                  <li>✓ Luxury paint finishes</li>
                  <li>✓ Smart home technology</li>
                  <li>✓ Energy-efficient systems</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities Access */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Community</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Full Access to Amenities</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Duplex residents enjoy complete access to all community amenities, including the resort pool, clubhouse, fitness center, outdoor spaces, and more.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-surface border border-border p-4 rounded">
                  <p className="text-accent font-display text-lg">✓ Pool</p>
                  <p className="text-muted text-xs mt-1">Year-round</p>
                </div>
                <div className="bg-surface border border-border p-4 rounded">
                  <p className="text-accent font-display text-lg">✓ Clubhouse</p>
                  <p className="text-muted text-xs mt-1">Events & meetings</p>
                </div>
                <div className="bg-surface border border-border p-4 rounded">
                  <p className="text-accent font-display text-lg">✓ BBQ Area</p>
                  <p className="text-muted text-xs mt-1">Entertaining space</p>
                </div>
                <div className="bg-surface border border-border p-4 rounded">
                  <p className="text-accent font-display text-lg">✓ Dog Park</p>
                  <p className="text-muted text-xs mt-1">Pet-friendly</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready to Move In</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Schedule Your Tour</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Experience the luxury and space of our duplexes. Contact our leasing team to arrange a private showing.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Tour a Duplex</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
