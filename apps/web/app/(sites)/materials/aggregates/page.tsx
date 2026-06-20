import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Premium Aggregates',
  description: 'Multiple sizes of premium aggregates for concrete, asphalt, and construction projects.',
}

export default function AggregatesPage() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Materials</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Premium<br /><span className="text-accent">Aggregates</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Quality crushed stone and gravel for concrete, asphalt, landscaping, and drainage projects. Available in multiple sizes, ready for pickup at our Knoxville quarry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Aggregate Sizes */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Available Sizes</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Select the right aggregate for your application</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Size #57</Badge>
                <h3 className="font-display text-3xl text-accent mb-2">#57</h3>
                <p className="text-muted mb-4 leading-relaxed">
                  1" - 0" crushed stone. Ideal for drainage systems, railroad ballast, and landscape edging. Excellent base material for roads and driveways.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Size #78</Badge>
                <h3 className="font-display text-3xl text-accent mb-2">#78</h3>
                <p className="text-muted mb-4 leading-relaxed">
                  5/8" - 0" crushed gravel. Common for concrete mixing, asphalt base courses, and general fill. Versatile for most construction applications.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Size #89</Badge>
                <h3 className="font-display text-3xl text-accent mb-2">#89</h3>
                <p className="text-muted mb-4 leading-relaxed">
                  3/8" - 0" pea gravel. Fine grade aggregate for concrete finishing, asphalt top courses, and decorative landscaping applications.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Size #6-10</Badge>
                <h3 className="font-display text-3xl text-accent mb-2">#6-10</h3>
                <p className="text-muted mb-4 leading-relaxed">
                  3/4" - 3/8" stone. Premium size for exposed aggregate concrete, architectural finishes, and high-visibility landscaping projects.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pickup & Pricing */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Service</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Quarry Pickup Available</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Pick up materials directly from our Knoxville quarry for the best value. We accommodate trucks of all sizes and can load multiple aggregate types in a single run.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">24/7 access to quarry for scheduled pickups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Professional loading assistance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Bulk discounts for large orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Flexibility on load weights and configurations</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Pricing</p>
                <h3 className="font-display text-3xl text-text mb-6">Call for Current Pricing</h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Our pricing is competitive and based on current market rates, aggregate size, and order volume. Contact us directly for a quote tailored to your project needs.
                </p>
                <Button as="a" href="/contact" variant="primary" size="lg" className="w-full justify-center mb-4">Get a Quote</Button>
                <div className="bg-bg/50 p-4 rounded">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Direct Contact</p>
                  <p className="text-text font-display text-2xl tracking-wider mb-1">Call Now</p>
                  <p className="text-muted text-sm">Ask about volume discounts and same-day scheduling</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Uses</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Common Applications</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Concrete & Asphalt</h4>
                <p className="text-muted">Premium aggregates for concrete mixing and asphalt base courses. Engineered for strength and durability.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Drainage Systems</h4>
                <p className="text-muted">Sized for proper drainage in foundation work, septic systems, and landscape drainage applications.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <h4 className="font-display text-2xl text-accent mb-3">Landscaping</h4>
                <p className="text-muted">Decorative and functional aggregates for hardscaping, pathways, and decorative landscape features.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
