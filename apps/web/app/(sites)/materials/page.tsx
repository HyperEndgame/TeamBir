import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'BIR Materials',
  description: 'Premium aggregates, fill dirt, topsoil, contract crushing, and sustainable materials recycling in Tennessee.',
}

const SERVICES = [
  { label: 'Aggregates', desc: 'Multiple sizes: #57, #78, #89, #6-10 — concrete, asphalt, drainage, landscaping.', href: '/aggregates', num: '01' },
  { label: 'Fill Dirt', desc: 'Quality fill dirt and topsoil for grading, residential and commercial jobsites.', href: '/fill-dirt', num: '02' },
  { label: 'Crushing', desc: 'Mobile and stationary crushing services. Process your own material at scale.', href: '/crushing', num: '03' },
  { label: 'Recycling', desc: 'Concrete and asphalt recycling — reduce waste, source sustainable materials.', href: '/recycling', num: '04' },
]

export default function MaterialsHome() {
  const config = SITE_CONFIGS.materials
  return (
    <main>
      <section className="pt-48 pb-24 gradient-mesh">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Knoxville, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none mb-6 uppercase" style={{ fontWeight: 800 }}>
              Rock Solid<br /><span className="text-accent">Results</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Premium aggregates, fill dirt, topsoil, contract crushing, and sustainable recycling — serving Tennessee construction since day one.
            </p>
            <Button as="a" href="/contact" size="lg">Request a Quote</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">What We Offer</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-16 uppercase" style={{ fontWeight: 800 }}>
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} mode="scale">
                <Link href={s.href} className="group block">
                  <div className="bg-bg p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface/70">
                    <div className="flex items-start justify-between mb-6">
                      <span className="stat-num text-4xl">{s.num}</span>
                    </div>
                    <h3 className="font-display text-2xl tracking-wider text-white mb-3 group-hover:text-accent transition-colors uppercase" style={{ fontWeight: 700 }}>
                      {s.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-accent/60 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-14 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Learn More</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal mode="left">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Commitment</p>
              <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] tracking-wider text-white leading-none mb-8 uppercase" style={{ fontWeight: 800 }}>
                Built on<br /><span className="text-accent">Sustainability</span>
              </h2>
              <p className="font-body text-white/55 leading-relaxed mb-5">
                Our recycling program diverts tons of demolition waste from landfills each year, providing cost-effective, eco-friendly materials for new construction projects.
              </p>
              <p className="font-body text-white/45 leading-relaxed mb-10">
                From efficient extraction to sustainable processing — every BIR Materials operation is built to be good for your project and good for Tennessee.
              </p>
              <Button as="a" href="/contact" variant="outline">Get in Touch</Button>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['On-site Delivery', 'We bring it to you'],
                  ['Custom Quantities', 'Small to large scale'],
                  ['Certified Quality', 'Industry standards'],
                  ['Recycled Options', 'Eco-friendly materials'],
                ].map(([t, d]) => (
                  <div key={t} className="p-6 border border-white/[0.07] hover:border-accent/25 transition-colors">
                    <p className="font-display text-lg tracking-wider text-white mb-1 uppercase" style={{ fontWeight: 700 }}>{t}</p>
                    <p className="font-body text-xs text-white/35">{d}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-5 uppercase" style={{ fontWeight: 800 }}>
              Ready to Order?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Get a quote for any material, any quantity, anywhere in Tennessee.</p>
            <Button as="a" href="/contact" size="lg">Contact BIR Materials</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
