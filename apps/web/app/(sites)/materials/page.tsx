import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Materials',
  description: 'Premium aggregates, fill dirt, topsoil, contract crushing, and sustainable materials recycling in Tennessee.',
}

export default function MaterialsHome() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Quality Materials</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Rock Solid<br /><span className="text-accent">Results</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Premium aggregates, fill dirt, topsoil, contract crushing, and sustainable materials recycling. Serving Tennessee's construction and development industries with the highest quality materials.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Services</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Complete materials solutions from quarry to jobsite</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Aggregates</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Premium Aggregates</h3>
                <p className="text-muted mb-4">Multiple sizes available: #57, #78, #89, #6-10. Perfect for concrete, asphalt, drainage, and landscaping projects.</p>
                <Button as="a" href="/aggregates" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Fill & Soil</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Fill Dirt & Topsoil</h3>
                <p className="text-muted mb-4">Grade, fill, and landscape with our quality fill dirt and topsoil. Residential and commercial projects handled with precision.</p>
                <Button as="a" href="/fill-dirt" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Crushing</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Contract Crushing</h3>
                <p className="text-muted mb-4">Mobile and stationary crushing services. Process your own materials or use our equipment for large-scale operations.</p>
                <Button as="a" href="/crushing" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Recycling</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Materials Recycling</h3>
                <p className="text-muted mb-4">Concrete and asphalt recycling for sustainable construction. Reduce waste while sourcing quality recycled materials.</p>
                <Button as="a" href="/recycling" variant="outline" size="sm">Learn More</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Commitment</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Sustainable Building Practices</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                BIR Materials is committed to sustainable practices in every aspect of our operation. From recycling concrete and asphalt to efficient extraction and processing, we're building a better future for Tennessee.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Our recycling program diverts tons of demolition waste from landfills annually, providing cost-effective, eco-friendly materials for new construction projects. Partner with us for materials that are good for your project and good for the environment.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Get a Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
