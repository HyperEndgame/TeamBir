import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Amenities — Jack in the Box, Fuel & RV Parking | BIR Travel Plaza Dandridge TN',
  description: 'BIR Travel Plaza amenities in Dandridge, TN — Jack in the Box, Naan Stop, 100% No Ethanol fuel, trucker showers, and 250 full-hookup RV spaces near I-40.',
  alternates: { canonical: 'https://travel.teambir.com/amenities' },
  openGraph: {
    type: 'website',
    url: 'https://travel.teambir.com/amenities',
    title: 'Amenities — Jack in the Box, Fuel & RV Parking | BIR Travel Plaza Dandridge TN',
    description: 'BIR Travel Plaza amenities in Dandridge, TN — Jack in the Box, Naan Stop, 100% No Ethanol fuel, trucker showers, and 250 full-hookup RV spaces near I-40.',
  },
}

export default function TravelAmenitiesPage() {
  const config = SITE_CONFIGS.travel

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Facilities</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Plaza<br /><span className="text-accent">Amenities</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Complete facilities and services designed for every traveler. Everything you need in one convenient stop.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Amenities</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Complete services for travelers</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Dining</Badge>
                <h3 className="font-display text-2xl text-text mb-3">McDonald's</h3>
                <p className="text-muted mb-6">
                  Quality meals available throughout the day. From breakfast to dinner, McDonald's offers familiar favorites and quick service for hungry travelers.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Hours:</span> Open daily</p>
                  <p className="text-muted text-sm"><span className="text-accent">Menu:</span> Full selection</p>
                  <p className="text-muted text-sm"><span className="text-accent">Service:</span> Counter & mobile order</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Fuel</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Fuel Services</h3>
                <p className="text-muted mb-6">
                  Convenient fuel pumps for all vehicle types. Competitive pricing, easy access, and quick service to get you back on the road fast.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Hours:</span> 24/7 availability</p>
                  <p className="text-muted text-sm"><span className="text-accent">Pricing:</span> Competitive rates</p>
                  <p className="text-muted text-sm"><span className="text-accent">Access:</span> Easy pump access</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Rest Area</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Truckers Lounge</h3>
                <p className="text-muted mb-6">
                  Comfortable rest area designed specifically for truck drivers. A welcoming space to rest, relax, and recharge before continuing your journey.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Features:</span> Comfortable seating</p>
                  <p className="text-muted text-sm"><span className="text-accent">Facilities:</span> Rest & refresh</p>
                  <p className="text-muted text-sm"><span className="text-accent">Atmosphere:</span> Welcoming & clean</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">RV Parking</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Full-Hookup RV Parking</h3>
                <p className="text-muted mb-6">
                  Complete RV facilities with water, electric, and sewer hookups. Perfect for overnight stays or extended visits. Spacious parking areas for all RV sizes.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Hookups:</span> Water, electric, sewer</p>
                  <p className="text-muted text-sm"><span className="text-accent">Space:</span> Multiple RV sizes</p>
                  <p className="text-muted text-sm"><span className="text-accent">Access:</span> Easy on/off highways</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Dining</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">McDonald's Restaurant</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Enjoy quality meals at our on-site McDonald's. Whether you're looking for a quick breakfast, lunch, or dinner, our restaurant offers the familiar menu and service you expect.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Full breakfast menu in the morning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Lunch and dinner selections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Beverages and desserts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Quick service for on-the-go travelers</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Service</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Dining Hours</h3>
                <div className="bg-bg/50 p-6 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Open Daily</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-accent font-display text-sm">Breakfast</p>
                      <p className="text-muted text-sm">5:00 AM - 10:30 AM</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-accent font-display text-sm">Lunch & Dinner</p>
                      <p className="text-muted text-sm">10:30 AM - 11:00 PM</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-accent font-display text-sm">Late Night</p>
                      <p className="text-muted text-sm">11:00 PM - 5:00 AM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RV Section */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <Card>
                <Badge className="mb-4">RV Facilities</Badge>
                <h3 className="font-display text-3xl text-text mb-6">Full-Hookup Parking</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-b border-border pb-3">
                    <p className="text-accent font-display text-lg">Water Hookup</p>
                    <p className="text-muted text-sm">Fresh water supply to your RV</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="text-accent font-display text-lg">Electric Hookup</p>
                    <p className="text-muted text-sm">30/50 amp service available</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-accent font-display text-lg">Sewer Hookup</p>
                    <p className="text-muted text-sm">Convenient waste disposal</p>
                  </div>
                </div>
                <Button as="a" href="/contact" variant="primary" size="sm">Reserve Spot</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Overnight</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Stay Comfortable</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Our full-hookup RV parking offers everything you need for a comfortable stay. Whether overnight or extended stays, we provide complete facilities designed for RV travelers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Spacious parking areas for all RV sizes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Full water, electric, and sewer hookups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Well-maintained facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Safe, secure environment</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Getting Here</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Directions</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">BIR Travel Plaza is conveniently located just off I-40 in Dandridge, TN.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <Card>
                <Badge className="mb-4">Address</Badge>
                <h3 className="font-display text-2xl text-text mb-4">BIR Travel Plaza</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  1217 Deep Springs Road<br />
                  Dandridge, TN 37725<br />
                  United States
                </p>
                <Button as="a" href="https://maps.google.com/?q=1217+Deep+Springs+Road+Dandridge+TN+37725" variant="primary" size="sm" target="_blank" rel="noopener noreferrer">Open in Google Maps</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">From I-40</p>
                <h3 className="font-display text-3xl tracking-wider text-text mb-6">Step-by-Step</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1 shrink-0">01</span>
                    <span className="text-muted">Take <span className="text-text">I-40 to Exit 417</span> (Dandridge / Deep Springs Road)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1 shrink-0">02</span>
                    <span className="text-muted">Turn onto <span className="text-text">Deep Springs Road</span> heading south</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1 shrink-0">03</span>
                    <span className="text-muted">BIR Travel Plaza is immediately on your right at <span className="text-text">1217 Deep Springs Road</span></span>
                  </li>
                </ul>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Plan Your Visit</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Everything You Need in One Stop</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                BIR Travel Plaza offers complete amenities for travelers. Stop by today and experience convenient, quality service at every facility.
              </p>
              <Button as="a" href="https://maps.google.com/?q=1217+Deep+Springs+Road+Dandridge+TN+37725" variant="primary" size="lg" target="_blank" rel="noopener noreferrer">Get Directions</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
