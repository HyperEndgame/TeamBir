import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Travel Plaza',
  description: "Tennessee's premier travel plaza in Dandridge with McDonald's, fuel, truckers lounge, and full-hookup RV parking.",
}

export default function TravelHome() {
  const config = SITE_CONFIGS.travel

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Welcome</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Your Stop for<br /><span className="text-accent">Comfort & Convenience</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Tennessee's premier travel plaza in Dandridge. Complete amenities for travelers including McDonald's, fuel, truckers lounge, and full-hookup RV parking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plaza Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">About</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">Premier Travel Destination</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Travel Plaza is strategically located in Dandridge, Tennessee, offering complete amenities for travelers of all types. Whether you're a trucker, RV enthusiast, or just passing through, we have everything you need.
                </p>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  From quick meals and fuel to extended stays with full hookups, our plaza is designed with your comfort and convenience in mind.
                </p>
                <Button as="a" href="/amenities" variant="primary" size="lg">Explore Amenities</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Location</Badge>
                <h3 className="font-display text-3xl text-accent mb-6">Dandridge, TN</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Address</p>
                    <p className="text-text font-display text-lg">1217 Deep Springs Rd</p>
                  </div>
                  <div className="border-b border-border pt-3 pb-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">City</p>
                    <p className="text-text font-display text-lg">Dandridge</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">Distance</p>
                    <p className="text-text font-display text-lg">Easy access to I-40</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">What We Offer</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Everything a traveler needs in one convenient location</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Dining</Badge>
                <h3 className="font-display text-2xl text-text mb-3">McDonald's</h3>
                <p className="text-muted mb-4">Quality meals for the whole family. Quick service with familiar favorites, available throughout the day.</p>
                <Button as="a" href="/amenities" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Fuel</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Fuel Services</h3>
                <p className="text-muted mb-4">Convenient fuel pumps for all vehicles. Competitive pricing and easy access for quick refueling stops.</p>
                <Button as="a" href="/amenities" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Comfort</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Truckers Lounge</h3>
                <p className="text-muted mb-4">Comfortable rest area for truck drivers. Seating, facilities, and a welcoming atmosphere for weary travelers.</p>
                <Button as="a" href="/amenities" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">RV Parking</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Full-Hookup RV Parking</h3>
                <p className="text-muted mb-4">Complete RV facilities with water, electric, and sewer hookups. Perfect for overnight or extended stays.</p>
                <Button as="a" href="/amenities" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Stop Here */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Benefits</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Why Stop at BIR Travel Plaza</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Complete Amenities</h4>
                <p className="text-muted">One-stop plaza with everything travelers need. No need to stop elsewhere for fuel, food, or rest.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Clean & Safe</h4>
                <p className="text-muted">Well-maintained facilities with security. A safe, comfortable place to rest and refuel.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Convenient Location</h4>
                <p className="text-muted">Strategically located in Dandridge with easy access to major highways and routes.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">RV Friendly</h4>
                <p className="text-muted">Full hookups for RVs and extended accommodations. Perfect for RV travelers and families.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Truck Driver Focused</h4>
                <p className="text-muted">Dedicated facilities for professional truckers. Comfortable lounge area and parking designed for your needs.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Quality Service</h4>
                <p className="text-muted">Friendly staff and well-maintained facilities. We welcome all travelers with professional service.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready to Visit</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Plan Your Stop</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Located at 1217 Deep Springs Rd, Dandridge TN 37725. Whether you're stopping for fuel and food or settling in for the night with full RV hookups, we're ready to welcome you.
              </p>
              <Button as="a" href="/location" variant="primary" size="lg">Get Directions</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
