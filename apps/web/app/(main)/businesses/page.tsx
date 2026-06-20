import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Our Businesses',
  description: 'All six Team BIR companies — spanning aggregates, real estate, transport, construction, and hospitality.',
}

const BUSINESSES = [
  { key: 'materials' as const, href: '/materials', icon: '⛏', badge: 'Aggregates & Crushing' },
  { key: 'luxury' as const, href: '/luxury', icon: '🏛', badge: 'Residential Real Estate' },
  { key: 'transport' as const, href: '/transport', icon: '🚛', badge: 'Trucking & Logistics' },
  { key: 'developments' as const, href: '/developments', icon: '🏗', badge: 'General Contractor' },
  { key: 'travel' as const, href: '/travel', icon: '⛽', badge: 'Travel & Hospitality' },
]

export default function BusinessesPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        <section className="pt-40 pb-16 border-b border-border">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Portfolio</p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none">
                Our<br /><span className="text-accent">Companies</span>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESSES.map((b, i) => {
              const cfg = SITE_CONFIGS[b.key]
              return (
                <ScrollReveal key={b.key} delay={i * 100}>
                  <Link href={b.href} className="group block">
                    <Card hover className="flex flex-col h-full">
                      <div className="text-5xl mb-4">{b.icon}</div>
                      <Badge className="mb-4 w-fit">{b.badge}</Badge>
                      <h2 className="font-display text-4xl tracking-wider text-text group-hover:text-accent transition-colors mb-2">{cfg.name}</h2>
                      <p className="font-mono text-xs tracking-widest uppercase text-teal mb-4">{cfg.tagline}</p>
                      <p className="text-muted leading-relaxed flex-1">{cfg.description}</p>
                      <div className="mt-6 font-mono text-xs tracking-widest uppercase text-accent group-hover:text-accent-h transition-colors">
                        Visit Site →
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
