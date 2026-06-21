import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story of Jimmy Bir Singh and the family of companies he built in East Tennessee.',
}

const TIMELINE = [
  { year: 'Early 2000s', event: 'Jimmy Bir Singh establishes his first business in Knoxville, laying the foundation for what would become Team BIR.' },
  { year: '2005', event: 'BIR Materials is founded — supplying aggregates, fill dirt, and crushing services to East Tennessee construction.' },
  { year: '2010', event: 'BIR Transport launches, providing cross-docking and freight logistics solutions across the region.' },
  { year: '2014', event: 'BIR Developments enters general contracting, delivering custom homes and commercial builds.' },
  { year: '2018', event: 'BIR Luxury Landing breaks ground in Oak Ridge — resort-style residential 22 miles from Downtown Knoxville.' },
  { year: '2022', event: 'BIR Travel Plaza opens in Dandridge, offering fuel, dining, trucker services, and RV hookups.' },
  { year: 'Today', event: 'Six companies. One family. Team BIR continues to grow and serve the communities of East Tennessee.' },
]

export default function AboutPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        {/* Hero */}
        <section className="pt-48 pb-24 gradient-mesh">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Our Story</p>
              <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none uppercase" style={{ fontWeight: 800 }}>
                One Family.<br /><span className="text-accent">Six Companies.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-body text-white/60 text-xl max-w-2xl mt-8 leading-relaxed">
                Founded by Jimmy Bir Singh in Knoxville, Tennessee — built on decades of hard work, community, and an unshakeable belief that East Tennessee deserves the best.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <ScrollReveal mode="left">
              <h2 className="font-display text-5xl tracking-wider text-white mb-8 uppercase" style={{ fontWeight: 800 }}>
                Jimmy Bir Singh
              </h2>
              <div className="space-y-5 text-white/55 leading-relaxed font-body">
                <p>Jimmy Bir Singh came to Knoxville with a vision: to build businesses that serve real needs in real communities. Not just to turn a profit, but to create jobs, deliver quality, and earn lasting trust.</p>
                <p>What started as a single venture grew, year by year, into a family of six companies spanning construction materials, residential real estate, freight logistics, general contracting, and hospitality.</p>
                <p>Every business in the BIR family reflects Jimmy's core belief: if you do the work right, take care of your people, and show up for your community — the rest follows.</p>
              </div>
              <div className="mt-10">
                <Button as="a" href="/contact" variant="outline">Work With Us</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="space-y-3">
                {[
                  ['Integrity', 'We do what we say, every time.'],
                  ['Quality', 'No corners cut, ever.'],
                  ['Community', 'Tennessee first, always.'],
                  ['Durability', 'Built to outlast.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-5 items-start p-6 border border-white/[0.06] hover:border-accent/25 transition-colors">
                    <span className="text-accent font-display text-3xl leading-none mt-0.5" style={{ fontWeight: 800 }}>—</span>
                    <div>
                      <p className="font-display text-2xl tracking-wider text-white uppercase mb-0.5" style={{ fontWeight: 700 }}>{title}</p>
                      <p className="font-body text-sm text-white/40">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quote */}
        <section className="py-24 border-t border-white/[0.06]">
          <div className="container-site">
            <ScrollReveal>
              <blockquote className="max-w-3xl">
                <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] tracking-wider text-white leading-snug mb-8 uppercase" style={{ fontWeight: 700 }}>
                  "Opportunity does not come when you are ready for it, you must be ready for the opportunity when it arrives."
                </p>
                <cite className="font-mono text-xs tracking-[0.25em] uppercase text-accent not-italic">— Jimmy Singh</cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 relative">
          <div className="absolute inset-0 gradient-mesh pointer-events-none" />
          <div className="container-site relative z-10">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">History</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] tracking-wider text-white leading-none mb-20 uppercase" style={{ fontWeight: 800 }}>
                Our Timeline
              </h2>
            </ScrollReveal>
            <div className="relative pl-8 border-l border-accent/20 space-y-14">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 70} mode="left">
                  <div className="relative">
                    <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(196,164,74,0.5)]" />
                    <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-2">{item.year}</p>
                    <p className="font-body text-white/55 leading-relaxed max-w-xl">{item.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
