import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'BIR Developments',
  description: 'Custom homes, commercial construction, renovations, excavation, and electrical in Knoxville, TN. TN Contractor License #80985.',
}

const p = (path: string) => subPath('developments', path)

const SERVICES = [
  { label: 'Custom Homes', desc: 'From design to final walkthrough — your dream home built with precision and exceptional craftsmanship.', num: '01', href: p('/services') },
  { label: 'Commercial', desc: 'Retail, office, and industrial buildings. On schedule, on budget, every time.', num: '02', href: p('/services') },
  { label: 'Renovations', desc: 'Kitchens, bathrooms, additions, full-home remodels — any size, any scope.', num: '03', href: p('/services') },
  { label: 'Excavation', desc: 'Site prep, grading, and foundation work. Real solutions for every project scale.', num: '04', href: p('/services') },
  { label: 'Electrical', desc: 'Licensed electrical services for residential and commercial projects throughout East Tennessee.', num: '05', href: p('/services') },
  { label: 'Materials Supply', desc: 'Fill dirt, topsoil, stone, and concrete for sale — direct from BIR for your jobsite needs.', num: '06', href: p('/services') },
]

export default function DevelopmentsHome() {
  return (
    <main>
      <section className="pt-48 pb-28 hero-developments">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Knoxville, Tennessee · License #80985</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Your Trusted<br /><span className="text-accent">Builder</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Custom homes, commercial construction, renovations, excavation, and electrical across Knoxville and East Tennessee — built right, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={p('/contact')} size="lg">Free Estimate</Button>
              <Button as="a" href={p('/projects')} variant="outline" size="lg">View Projects</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-white/[0.06]">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '6', label: 'Service Types' },
            { value: 'TN', label: 'Knoxville Base' },
            { value: '#80985', label: 'TN License' },
            { value: '3', label: 'Featured Projects' },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div className="text-center px-4">
                <p className="stat-num text-5xl mb-1">{s.value}</p>
                <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/40">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">What We Build</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} mode="scale">
                <Link href={s.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <span className="stat-num text-4xl mb-6">{s.num}</span>
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {s.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
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
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Featured Projects</p>
              <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] text-white leading-none mb-8" style={{ fontWeight: 800 }}>
                Built by<br /><span className="text-accent">BIR</span>
              </h2>
              <p className="font-body text-white/55 leading-relaxed mb-5">
                From the BIR Luxury Landing event center in Oak Ridge to the Dandridge Travel Plaza and commercial office renovations in Knoxville — every project delivered on time and on budget.
              </p>
              <p className="font-body text-white/40 leading-relaxed mb-10">
                Customer-focused in cost effectiveness, quality, and delivery. Licensed general contractor in Knoxville, TN.
              </p>
              <Button as="a" href={p('/projects')} variant="outline">All Projects</Button>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-3">
                {[
                  ['License', 'TN #80985'],
                  ['Address', '2225 Sycamore Drive'],
                  ['City', 'Knoxville, TN 37921'],
                  ['Email', 'developments@teambir.com'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between p-5 border border-white/[0.07] rounded-lg hover:border-accent/25 transition-colors">
                    <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/60">{label}</p>
                    <p className="font-body text-base text-white/80">{val}</p>
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
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-5" style={{ fontWeight: 800 }}>
              Let's Build<br />Something Great
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Free estimate for any project — residential or commercial. TN Contractor License #80985.</p>
            <Button as="a" href={p('/contact')} size="lg">Request Free Estimate</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
