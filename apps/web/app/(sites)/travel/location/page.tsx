import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Directions to BIR Travel Plaza | 1217 Deep Springs Rd, Dandridge TN 37725',
  description: 'Find BIR Travel Plaza at 1217 Deep Springs Rd, Dandridge, TN 37725 — easy access from I-40. Open daily for fuel, food, and RV parking.',
  alternates: { canonical: 'https://travel.teambir.com/location' },
  openGraph: {
    type: 'website',
    url: 'https://travel.teambir.com/location',
    title: 'Directions to BIR Travel Plaza | 1217 Deep Springs Rd, Dandridge TN 37725',
    description: 'Find BIR Travel Plaza at 1217 Deep Springs Rd, Dandridge, TN 37725 — easy access from I-40. Open daily for fuel, food, and RV parking.',
  },
}

export default function TravelLocationPage() {
  const config = SITE_CONFIGS.travel

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Visit Us</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Location &<br /><span className="text-accent">Directions</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Find BIR Travel Plaza in Dandridge, Tennessee with easy access from I-40.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Address */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Dandridge TN</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">Our Location</h2>
                <div className="bg-surface border border-border p-6 rounded mb-8">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Address</p>
                  <p className="text-text font-display text-3xl tracking-wider mb-4">1217 Deep Springs Rd</p>
                  <p className="text-text font-display text-xl tracking-wider mb-6">Dandridge, TN 37725</p>
                  <p className="text-muted text-lg mb-6">Easy access from I-40. Well-marked signage and convenient location for all travelers.</p>
                  <Button as="a" href="https://maps.google.com/?q=1217+Deep+Springs+Road+Dandridge+TN+37725" variant="primary" size="sm" target="_blank" rel="noopener noreferrer">Open in Google Maps</Button>
                </div>

                <h3 className="font-display text-3xl tracking-wider text-text mb-6">Location & Directions</h3>
                <ul className="space-y-4 mb-8">
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

                <Button as="a" href="/contact" variant="primary" size="lg">Contact Us</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Info</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Plaza Details</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Street</p>
                    <p className="text-text font-display text-lg">1217 Deep Springs Rd</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">City</p>
                    <p className="text-text font-display text-lg">Dandridge</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">State & Zip</p>
                    <p className="text-text font-display text-lg">Tennessee 37725</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Access</p>
                    <p className="text-text font-display text-lg">Easy Highway Access</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Hours</p>
                    <p className="text-text font-display text-lg">24/7 Operations</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Directions</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">How to Find Us</h2>
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
                  <h4 className="font-display text-2xl text-text mb-2">From Downtown Knoxville</h4>
                  <p className="text-muted text-lg">Head east on I-40 toward Dandridge. Exit at Deep Springs Rd. Our plaza is well-marked with clear signage. Approximately 30 minutes from downtown.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">From East Tennessee</h4>
                  <p className="text-muted text-lg">Travel west on I-40 toward Knoxville. Exit at Deep Springs Rd in Dandridge. BIR Travel Plaza is clearly visible from the highway. Easy on/off access.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">GPS & Navigation</h4>
                  <p className="text-muted text-lg">Enter "1217 Deep Springs Rd, Dandridge TN 37725" into your GPS or mapping app for turn-by-turn directions. We're easy to find with clear highway signage.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Map</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Find Us on the Map</h2>
          </ScrollReveal>

          <div className="bg-surface border border-border rounded p-8 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-2xl text-muted mb-4">Map View</p>
              <p className="text-muted mb-6">Interactive map placeholder</p>
              <p className="text-muted text-sm">1217 Deep Springs Rd, Dandridge TN 37725</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Services */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Area</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">What's Nearby</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Dandridge</h4>
                <p className="text-muted mb-4">Our plaza is located right in Dandridge, Tennessee with convenient access to local businesses and services in the area.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Knoxville</h4>
                <p className="text-muted mb-4">Just 30 minutes from downtown Knoxville, our location is perfect for travelers heading to or from the Knoxville area.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">I-40 Corridor</h4>
                <p className="text-muted mb-4">Strategic location on the I-40 corridor for easy access from both east and west. Perfect for highway travelers.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Regional Hub</h4>
                <p className="text-muted mb-4">Positioned as a regional hub for travelers, truckers, and RV enthusiasts crossing East Tennessee.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parking Info */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Facilities</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Parking & Access</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-3xl text-text mb-6">Easy Access</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Travel Plaza is designed for easy access from I-40. Clear signage marks the exit, and our facility is conveniently located just off the highway.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Easy on/off from I-40</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Clear highway signage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Spacious parking areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">RV-friendly layout</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <Badge className="mb-4">Parking</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Lot Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-accent font-display text-lg mb-2">Car Parking</p>
                    <p className="text-muted text-sm">Convenient parking for standard vehicles near all amenities.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-accent font-display text-lg mb-2">Truck Parking</p>
                    <p className="text-muted text-sm">Dedicated spaces for 18-wheelers with easy access.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-accent font-display text-lg mb-2">RV Parking</p>
                    <p className="text-muted text-sm">Full-hookup parking with spacious areas for all RV sizes.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-accent font-display text-lg mb-2">Security</p>
                    <p className="text-muted text-sm">Well-lit and monitored parking areas for your safety.</p>
                  </div>
                </div>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready to Visit</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">See You Soon</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Plan your stop at BIR Travel Plaza. Located at 1217 Deep Springs Rd, Dandridge TN 37725. Open 24/7 with complete amenities for all travelers.
              </p>
              <Button as="a" href="/amenities" variant="primary" size="lg">Explore Amenities</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
