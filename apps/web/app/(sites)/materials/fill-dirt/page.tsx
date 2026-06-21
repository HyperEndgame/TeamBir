import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Fill Dirt & Topsoil in Knoxville, TN | BIR Materials · 865-832-6247',
  description: 'Quality fill dirt and nutrient-rich topsoil for grading, landscaping, and commercial jobsites in Knoxville, TN. Call 865-832-6247.',
  alternates: { canonical: 'https://materials.teambir.com/fill-dirt' },
  openGraph: {
    type: 'website',
    url: 'https://materials.teambir.com/fill-dirt',
    title: 'Fill Dirt & Topsoil in Knoxville, TN | BIR Materials · 865-832-6247',
    description: 'Quality fill dirt and nutrient-rich topsoil for grading, landscaping, and commercial jobsites in Knoxville, TN. Call 865-832-6247.',
  },
}

export default function FillDirtPage() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Materials</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Fill Dirt &<br /><span className="text-accent">Topsoil</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Premium fill dirt and topsoil for grading, landscaping, and site preparation. Available for residential and commercial projects throughout Tennessee.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">Our Products</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Quality materials for every grading need</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Fill Material</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Fill Dirt</h3>
                <p className="text-muted mb-6">
                  High-quality fill dirt for site preparation, foundation backfill, and grading projects. Compacts well and provides stable base support for construction.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Bulk pricing</span> available for large orders</p>
                  <p className="text-muted text-sm"><span className="text-accent">Residential & Commercial</span> projects welcome</p>
                  <p className="text-muted text-sm"><span className="text-accent">Direct pickup</span> or delivery available</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Garden Material</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Topsoil</h3>
                <p className="text-muted mb-6">
                  Rich, organic-matter-infused topsoil for landscaping, gardens, and lawn restoration. Perfect for grass seeding and planting applications.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Nutrient-rich</span> for optimal plant growth</p>
                  <p className="text-muted text-sm"><span className="text-accent">Screened & graded</span> for consistent quality</p>
                  <p className="text-muted text-sm"><span className="text-accent">Landscape & residential</span> focus</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Base Material</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Gravel Mix</h3>
                <p className="text-muted mb-6">
                  Versatile gravel and soil mixture for drainage, stabilization, and general fill applications. Great for parking lots and access roads.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Excellent drainage</span> properties</p>
                  <p className="text-muted text-sm"><span className="text-accent">Compacts securely</span> for durability</p>
                  <p className="text-muted text-sm"><span className="text-accent">Cost-effective</span> base material</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Specialty</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Custom Mixes</h3>
                <p className="text-muted mb-6">
                  Custom soil and fill combinations tailored to your project specifications. We'll blend materials to meet your exact grading and drainage needs.
                </p>
                <div className="space-y-2">
                  <p className="text-muted text-sm"><span className="text-accent">Engineering specs</span> accommodated</p>
                  <p className="text-muted text-sm"><span className="text-accent">Site assessment</span> available</p>
                  <p className="text-muted text-sm"><span className="text-accent">Consultation included</span> with order</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Projects</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Residential Projects</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Whether you're landscaping a new home, building a garden bed, or regrading a lawn, we have the right materials for your residential project.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Garden and landscaping soil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Lawn renovation and restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Foundation and driveway fill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Small-load delivery options</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Projects</p>
                <h3 className="font-display text-4xl tracking-wider text-text mb-6">Commercial Projects</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Large-scale site prep, grading, and fill needs are our specialty. We handle commercial projects of any size with precision and efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Site grading and preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Foundation backfill and fill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Parking lot and road base</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">Bulk delivery with fleet services</span>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Ready to Start</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Get Your Materials Today</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Contact BIR Materials for a free consultation and quote. We'll help you select the right fill dirt or topsoil for your specific project needs.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Request Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
