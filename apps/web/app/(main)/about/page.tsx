import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story of Jimmy Bir Singh and the family of companies he built in East Tennessee.',
}

const TIMELINE = [
  { year: 'Early 2000s', event: 'Jimmy Bir Singh establishes his first business in Knoxville, TN, laying the foundation for what would become Team BIR.' },
  { year: '2005', event: 'BIR Materials is founded — supplying aggregates, fill dirt, and crushing services to the growing East Tennessee construction market.' },
  { year: '2010', event: 'BIR Transport launches, providing cross-docking and logistics solutions to freight partners across the region.' },
  { year: '2014', event: 'BIR Developments enters the general contracting space, delivering custom homes and commercial builds.' },
  { year: '2018', event: 'BIR Luxury Landing breaks ground in Oak Ridge — a resort-style residential community 22 miles from Downtown Knoxville.' },
  { year: '2022', event: 'BIR Travel Plaza opens in Dandridge, offering fuel, dining, trucker services, and RV hookups along a key Tennessee corridor.' },
  { year: 'Today', event: 'Six companies. One family. Team BIR continues to grow and serve the communities of East Tennessee.' },
]

export default function AboutPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 bg-surface border-b border-border">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Our Story</p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
                One Family.<br /><span className="text-accent">Six Companies.</span>
              </h1>
              <p className="text-muted text-xl max-w-2xl leading-relaxed">
                Founded by Jimmy Bir Singh in Knoxville, Tennessee — built on decades of hard work, community, and an unshakeable belief that East Tennessee deserves the best.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-display text-5xl tracking-wider text-text mb-6">Jimmy Bir Singh</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>Jimmy Bir Singh came to Knoxville with a vision: to build businesses that serve real needs in real communities. Not just to turn a profit, but to create jobs, deliver quality, and earn lasting trust.</p>
                <p>What started as a single venture grew, year by year, into a family of six companies spanning construction materials, residential real estate, freight logistics, general contracting, and hospitality.</p>
                <p>Every business in the BIR family reflects Jimmy's core belief: if you do the work right, take care of your people, and show up for your community — the rest follows.</p>
                <p>Today, Team BIR employs hundreds of Tennesseans and touches nearly every sector of the regional economy.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-surface border border-border p-8">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Core Values</p>
                <ul className="space-y-4">
                  {[
                    ['Integrity', 'We do what we say.'],
                    ['Quality', 'We never cut corners.'],
                    ['Community', 'Tennessee first.'],
                    ['Durability', 'Built to outlast.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-4 items-start">
                      <span className="text-accent font-display text-2xl leading-none mt-1">—</span>
                      <div>
                        <p className="text-text font-display text-2xl tracking-wider">{title}</p>
                        <p className="text-muted text-sm">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-surface border-y border-border">
          <div className="container-site">
            <ScrollReveal>
              <h2 className="font-display text-5xl md:text-7xl tracking-wider text-text mb-16">Our History</h2>
            </ScrollReveal>
            <div className="relative border-l-2 border-border pl-8 space-y-12">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 80}>
                  <div className="relative">
                    <span className="absolute -left-10 top-1 w-4 h-4 bg-accent rounded-full border-2 border-bg" />
                    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{item.year}</p>
                    <p className="text-muted leading-relaxed">{item.event}</p>
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
