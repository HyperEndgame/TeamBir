import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SITE_CONFIGS } from '@/lib/site-config'
import { siteUrl } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Our Businesses',
  description: 'All six Team BIR companies — spanning aggregates, real estate, transport, construction, and hospitality.',
}

const BUSINESSES = [
  { key: 'materials' as const, href: siteUrl('materials'), badge: 'Aggregates & Crushing', num: '01' },
  { key: 'luxury' as const, href: siteUrl('luxury'), badge: 'Residential Real Estate', num: '02' },
  { key: 'transport' as const, href: siteUrl('transport'), badge: 'Trucking & Logistics', num: '03' },
  { key: 'developments' as const, href: siteUrl('developments'), badge: 'General Contractor', num: '04' },
  { key: 'travel' as const, href: siteUrl('travel'), badge: 'Travel & Hospitality', num: '05' },
]

export default function BusinessesPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        <section className="pt-48 pb-24 gradient-mesh">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Portfolio</p>
              <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none uppercase" style={{ fontWeight: 800 }}>
                Our<br /><span className="text-accent">Companies</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-28">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
              {BUSINESSES.map((b, i) => {
                const cfg = SITE_CONFIGS[b.key]
                return (
                  <ScrollReveal key={b.key} delay={i * 80} mode="scale">
                    <Link href={b.href} className="group block">
                      <div className="bg-bg p-10 h-full flex flex-col transition-all duration-300 hover:bg-surface/60">
                        <div className="flex items-start justify-between mb-8">
                          <span className="stat-num text-5xl">{b.num}</span>
                          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent/60 border border-accent/20 px-2 py-1">
                            {b.badge}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl tracking-wider text-white mb-2 group-hover:text-accent transition-colors uppercase" style={{ fontWeight: 700 }}>
                          {cfg.name}
                        </h2>
                        <p className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-accent/50 mb-5">{cfg.tagline}</p>
                        <p className="font-body text-white/50 leading-relaxed flex-1">{cfg.description}</p>
                        <div className="mt-10 flex items-center gap-3 text-accent/60 group-hover:text-accent transition-all">
                          <div className="h-px w-10 bg-current transition-all group-hover:w-16" />
                          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Visit Site</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}

              {/* Naanstop — coming soon */}
              <ScrollReveal delay={5 * 80} mode="scale">
                <Link href="/naanstop" className="group block">
                  <div className="bg-bg p-10 h-full flex flex-col transition-all duration-300 hover:bg-surface/60">
                    <div className="flex items-start justify-between mb-8">
                      <span className="stat-num text-5xl">06</span>
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent/60 border border-accent/20 px-2 py-1">
                        Food & Beverage
                      </span>
                    </div>
                    <h2 className="font-display text-3xl tracking-wider text-white mb-2 group-hover:text-accent transition-colors uppercase" style={{ fontWeight: 700 }}>
                      Naanstop
                    </h2>
                    <p className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-accent/50 mb-5">Coming Soon</p>
                    <p className="font-body text-white/50 leading-relaxed flex-1">Something new is on the way. Stay tuned.</p>
                    <div className="mt-10 flex items-center gap-3 text-accent/60 group-hover:text-accent transition-all">
                      <div className="h-px w-10 bg-current transition-all group-hover:w-16" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Learn More</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
