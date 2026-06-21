import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Concrete & Asphalt Recycling in Knoxville, TN | BIR Materials',
  description: 'Sustainable concrete and asphalt recycling in Knoxville, TN — reduce demolition waste, lower project costs, and source recycled materials. Call 865-832-6247.',
  alternates: { canonical: 'https://materials.teambir.com/recycling' },
  openGraph: {
    type: 'website',
    url: 'https://materials.teambir.com/recycling',
    title: 'Concrete & Asphalt Recycling in Knoxville, TN | BIR Materials',
    description: 'Sustainable concrete and asphalt recycling in Knoxville, TN — reduce demolition waste, lower project costs, and source recycled materials. Call 865-832-6247.',
  },
}

export default function RecyclingPage() {
  const config = SITE_CONFIGS.materials

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Sustainability</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Materials<br /><span className="text-accent">Recycling</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Sustainable concrete and asphalt recycling for construction projects. Divert demolition waste from landfills and source quality recycled materials.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Recycle */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Impact</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-6">Why Recycle Construction Materials</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Construction waste represents a significant environmental burden. Demolition and construction debris often ends up in landfills. Through sustainable recycling practices, we transform this waste into valuable building materials.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg">→</span>
                    <span className="text-muted"><span className="text-text font-display">Reduce landfill waste</span> by millions of tons annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg">→</span>
                    <span className="text-muted"><span className="text-text font-display">Lower material costs</span> with recycled aggregates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg">→</span>
                    <span className="text-muted"><span className="text-text font-display">Support green building</span> certifications and initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-lg">→</span>
                    <span className="text-muted"><span className="text-text font-display">Conserve natural resources</span> and mining operations</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Environmental Benefit</Badge>
                <h3 className="font-display text-3xl text-accent mb-4">Tons Diverted from Landfills</h3>
                <p className="text-muted mb-6 leading-relaxed">
                  BIR Materials' recycling program has processed thousands of tons of demolition waste, creating valuable materials while preventing landfill burden.
                </p>
                <div className="bg-bg/50 p-6 rounded mb-6">
                  <p className="text-muted text-sm mb-2">Every ton of recycled concrete saves:</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li>✓ 1.5 tons of natural aggregate</li>
                    <li>✓ Mining and processing energy</li>
                    <li>✓ Transportation emissions</li>
                    <li>✓ Landfill space</li>
                  </ul>
                </div>
                <Button as="a" href="/contact" variant="outline" size="md" className="w-full">Learn More</Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recycling Types */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="font-display text-5xl tracking-wider text-text mb-4">What We Recycle</h2>
            <p className="text-muted text-lg mb-12 max-w-2xl">Complete recycling solutions for demolition materials</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card hover>
                <Badge className="mb-4">Concrete</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Concrete Recycling</h3>
                <p className="text-muted mb-6">
                  Process demolition and construction concrete into clean, usable aggregate for new projects. Reinforced concrete, foundation debris, and pavement materials accepted.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Processing:</span> Crushing and separation</p>
                  <p className="text-muted text-sm"><span className="text-accent">Output:</span> Multiple aggregate sizes</p>
                  <p className="text-muted text-sm"><span className="text-accent">Use:</span> Concrete, base, fill material</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card hover>
                <Badge className="mb-4">Asphalt</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Asphalt Recycling</h3>
                <p className="text-muted mb-6">
                  Reclaim asphalt pavement (RAP) processing for use in new asphalt mixes, base courses, and other applications. Milled pavement and millings accepted.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Processing:</span> Milling and crushing</p>
                  <p className="text-muted text-sm"><span className="text-accent">Output:</span> RAP in various gradations</p>
                  <p className="text-muted text-sm"><span className="text-accent">Use:</span> Asphalt, roads, base</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover>
                <Badge className="mb-4">Mixed Materials</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Mixed Demolition</h3>
                <p className="text-muted mb-6">
                  We sort and process mixed demolition debris to separate and recycle valuable components while removing contaminants responsibly.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Processing:</span> Sorting and separation</p>
                  <p className="text-muted text-sm"><span className="text-accent">Output:</span> Multiple material streams</p>
                  <p className="text-muted text-sm"><span className="text-accent">Use:</span> Various construction applications</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card hover>
                <Badge className="mb-4">Compliance</Badge>
                <h3 className="font-display text-2xl text-text mb-3">Environmental Standards</h3>
                <p className="text-muted mb-6">
                  All recycling operations comply with environmental regulations. Contamination screening and proper disposal of non-recyclable materials included.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-muted text-sm"><span className="text-accent">Testing:</span> Quality verification</p>
                  <p className="text-muted text-sm"><span className="text-accent">Compliance:</span> EPA and state standards</p>
                  <p className="text-muted text-sm"><span className="text-accent">Documentation:</span> Tracking and reporting</p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">How It Works</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Our Recycling Process</h2>
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
                  <h4 className="font-display text-2xl text-text mb-2">Collection & Sorting</h4>
                  <p className="text-muted text-lg">Materials arrive at our facility where we assess quality and sort by type for appropriate processing.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Crushing & Processing</h4>
                  <p className="text-muted text-lg">Materials are crushed, screened, and processed into appropriate aggregate sizes for reuse.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Quality Control</h4>
                  <p className="text-muted text-lg">Recycled materials are tested and verified to meet construction standards for safe reuse.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Distribution</h4>
                  <p className="text-muted text-lg">Finished recycled materials are available for purchase or pickup for new construction projects.</p>
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
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get Started</p>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Partner with BIR for Sustainable Practices</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Whether you need to recycle demolition materials or source quality recycled aggregates, BIR Materials can help. Contact us today for pricing and scheduling.
              </p>
              <Button as="a" href="/contact" variant="primary" size="lg">Start Recycling Today</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
