import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'BIR Developments',
  description: 'Custom homes, commercial construction, renovations, and excavation in Knoxville, TN.',
}

const SERVICES = [
  { label: 'Custom Homes', desc: 'From design to final walkthrough — your dream home built with precision.', num: '01', href: '/services' },
  { label: 'Commercial', desc: 'Retail, office, and industrial buildings. On schedule, on budget.', num: '02', href: '/services' },
  { label: 'Renovations', desc: 'Kitchens, bathrooms, additions, full-home remodels — any size.', num: '03', href: '/services' },
  { label: 'Excavation', desc: 'Site prep, grading, and foundation work for projects of any scale.', num: '04', href: '/services' },
]

export default function DevelopmentsHome() {
  return (
    <main>
      <section className="pt-48 pb-28 gradient-mesh">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Knoxville, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none mb-6 uppercase" style={{ fontWeight: 800 }}>
              Your Trusted<br /><span className="text-accent">Builder</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Custom homes, commercial construction, renovations, and excavation across Knoxville and East Tennessee — built right, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="/contact" size="lg">Free Estimate</Button>
              <Button as="a" href="/projects" variant="outline" size="lg">View Projects</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">What We Build</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-16 uppercase" style={{ fontWeight: 800 }}>
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} mode="scale">
                <Link href={s.href} className="group block">
                  <div className="bg-bg p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface/70">
                    <span className="stat-num text-4xl mb-6">{s.num}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <ScrollReveal mode="left">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Featured Project</p>
              <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] tracking-wider text-white leading-none mb-8 uppercase" style={{ fontWeight: 800 }}>
                Oak Ridge<br /><span className="text-accent">Condominiums</span>
              </h2>
              <p className="font-body text-white/55 leading-relaxed mb-5">
                Premium multi-unit residential development in Oak Ridge, TN — luxury finishes, resort amenities, and thoughtful design throughout.
              </p>
              <p className="font-body text-white/40 leading-relaxed mb-10">
                This project showcases BIR Developments' ability to deliver complex residential builds on time and on budget.
              </p>
              <Button as="a" href="/projects" variant="outline">All Projects</Button>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-3">
                {[
                  ['Type', 'Multi-unit Residential'],
                  ['Location', 'Oak Ridge, TN'],
                  ['Status', 'Active Development'],
                  ['Scale', 'Large-format'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between p-5 border border-white/[0.07] hover:border-accent/25 transition-colors">
                    <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/60">{label}</p>
                    <p className="font-display text-lg tracking-wider text-white uppercase">{val}</p>
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
              Let's Build<br />Something Great
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Free estimate for any project — residential or commercial.</p>
            <Button as="a" href="/contact" size="lg">Request Free Estimate</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
