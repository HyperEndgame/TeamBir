import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Community Amenities',
  description: 'Resort-style amenities including pool, clubhouse, fitness center, and more.',
}

export default function AmenitiesPage() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Community</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              World-Class<br /><span className="text-accent">Amenities</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Luxury resort-style facilities designed for every lifestyle. From recreation to wellness to outdoor living, everything you need is here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Recreation */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Recreation & Wellness</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Premium facilities for active living</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Water Activities</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Resort Pool</h3>
                <p className="text-muted mb-4">
                  Olympic-size swimming pool with heated water and seasonal activities. Cabanas available for rent. Perfect for laps, recreation, or relaxation.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Heated year-round</li>
                  <li>✓ Cabana seating areas</li>
                  <li>✓ Shallow areas for children</li>
                  <li>✓ Weekend activities</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Fitness</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Fitness Center</h3>
                <p className="text-muted mb-4">
                  State-of-the-art fitness facility with modern equipment, free weights, and cardio machines. Group classes available throughout the week.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Cardio equipment</li>
                  <li>✓ Free weights & machines</li>
                  <li>✓ Group fitness classes</li>
                  <li>✓ Personal training available</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Wellness</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Yoga Studio</h3>
                <p className="text-muted mb-4">
                  Dedicated studio space for yoga, pilates, and wellness classes. Scheduled classes throughout the day or bring your own instructor.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Daily yoga classes</li>
                  <li>✓ Pilates & stretching</li>
                  <li>✓ Meditation space</li>
                  <li>✓ Flexible scheduling</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Entertainment</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Game Room</h3>
                <p className="text-muted mb-4">
                  Entertainment space with billiards tables, games, and comfortable lounge seating. Perfect for social gatherings and relaxation.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Billiards & pool tables</li>
                  <li>✓ Board games & cards</li>
                  <li>✓ Lounge seating</li>
                  <li>✓ Social events hosted</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outdoor Living */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Outdoor Living Spaces</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Entertain, relax, and enjoy nature</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Entertaining</Badge>
                <h3 className="font-display text-2xl text-text mb-3">BBQ Area</h3>
                <p className="text-muted mb-4">
                  Multiple outdoor grilling stations with picnic tables and seating areas. Perfect for family barbecues and social gatherings.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Professional-grade grills</li>
                  <li>✓ Picnic tables & seating</li>
                  <li>✓ Shade structures</li>
                  <li>✓ Reserved availability</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Recreation</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Dog Park</h3>
                <p className="text-muted mb-4">
                  Dedicated off-leash dog park for your pets to play and socialize. Fenced area with agility equipment and water stations.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Fully fenced area</li>
                  <li>✓ Agility equipment</li>
                  <li>✓ Water & shade</li>
                  <li>✓ Pet-friendly community</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Walking</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Walking Trails</h3>
                <p className="text-muted mb-4">
                  Scenic walking and biking trails throughout the community. Perfect for morning walks, evening strolls, or active recreation.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Multiple trail routes</li>
                  <li>✓ Mountain views</li>
                  <li>✓ Well-maintained paths</li>
                  <li>✓ Benches & rest areas</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Scenic</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Scenic Overlooks</h3>
                <p className="text-muted mb-4">
                  Multiple viewpoints with stunning vistas of mountains and valleys. Perfect for photography, contemplation, and enjoying nature.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Panoramic views</li>
                  <li>✓ Photography spots</li>
                  <li>✓ Sitting areas</li>
                  <li>✓ Sunrise & sunset views</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Facilities */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Community Facilities</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Space for gathering, events, and business</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Event Space</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Clubhouse</h3>
                <p className="text-muted mb-4">
                  Premier event and gathering space available for resident use. Host parties, meetings, celebrations, or community events.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Flexible layout</li>
                  <li>✓ Catering kitchen</li>
                  <li>✓ AV equipment</li>
                  <li>✓ Resident discounts on rental</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Business</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Conference Room</h3>
                <p className="text-muted mb-4">
                  Professional conference space equipped for meetings and presentations. Available for resident use or small business gatherings.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Conference table</li>
                  <li>✓ AV/projection system</li>
                  <li>✓ Video conferencing setup</li>
                  <li>✓ High-speed internet</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Social</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Lounge Areas</h3>
                <p className="text-muted mb-4">
                  Comfortable indoor and outdoor lounge spaces throughout the community. Perfect for casual gathering and socializing.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Multiple seating areas</li>
                  <li>✓ WiFi connectivity</li>
                  <li>✓ Refreshment stations</li>
                  <li>✓ Quiet retreat spaces</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Concierge</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Resident Services</h3>
                <p className="text-muted mb-4">
                  Professional staff available to assist residents. Package acceptance, guest coordination, and facility reservations.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Package delivery service</li>
                  <li>✓ Facility scheduling</li>
                  <li>✓ Guest management</li>
                  <li>✓ 24/7 maintenance support</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Living</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">A Lifestyle, Not Just a Home</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Our amenities are designed to enhance your quality of life. Whether you're looking to stay active, entertain friends and family, or simply relax, everything you need is right here in our community.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                From morning yoga and pool swimming to evening walks on scenic trails and weekend gatherings at our clubhouse, BIR Luxury Landing offers a complete lifestyle experience in a beautiful mountain setting.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Experience It</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Tour Our Community</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Schedule a property tour and experience our world-class amenities firsthand. Our leasing team is ready to show you everything we have to offer.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Schedule Tour</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
