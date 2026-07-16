import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Event Packages & Pricing | BIR Luxury Landing — Oak Ridge, TN',
  description: 'Wedding, corporate, birthday, and pool party packages at BIR Luxury Landing in Oak Ridge, TN. Hourly, full-day, and per-guest pricing.',
  alternates: { canonical: 'https://luxury.teambir.com/packages' },
}

const PACKAGES = [
  {
    name: 'Wedding Packages',
    desc: 'Full ceremony and reception packages across our banquet halls and party hall, with customized planning to make your day unforgettable.',
    rates: ['Hourly rates from $300 to $1,000 per hour', 'Full-day rentals from $5,000 to $10,000', 'Custom packages from $100 to $200 per person'],
    spaces: 'Banquet Hall 1 · Banquet Hall 2 · Party Hall',
  },
  {
    name: 'Corporate Events',
    desc: 'Classy conference rooms and multi-purpose spaces for meetings, retreats, and galas — professional and memorable.',
    rates: ['Hourly rates from $300 to $1,000 per hour', 'Full-day rentals from $5,000 to $10,000', 'Custom packages from $100 to $200 per person'],
    spaces: 'Banquet Hall 1 · Banquet Hall 2',
  },
  {
    name: 'Birthday Parties',
    desc: 'Elegant, customizable event spaces for celebrations of any age and size.',
    rates: ['Hourly rates from $300 to $1,000 per hour', 'Full-day rentals from $5,000 to $10,000', 'Custom packages from $100 to $200 per person'],
    spaces: 'Party Hall · Billiards Room',
  },
  {
    name: 'Pool Parties',
    desc: 'Unforgettable pool parties with exclusive amenities and versatile scheduling.',
    rates: ['Hourly rates from $200 to $500 per hour', 'Full-day rentals from $1,500 to $3,000', 'Custom packages from $50 to $100 per guest'],
    spaces: 'Resort-Style Pool · BBQ Area',
  },
]

export default function PackagesPage() {
  return (
    <main>
      <section className="pt-40 pb-16 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Versatile Venue Options</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Event<br /><span className="text-accent">Packages</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              From an intimate birthday party to a grand wedding, we have a package and price point for every celebration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PACKAGES.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <Card hover className="h-full flex flex-col">
                  <h3 className="font-display text-2xl tracking-wider text-text mb-3">{p.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {p.rates.map(r => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-accent mt-1">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge className="mt-auto self-start">{p.spaces}</Badge>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="mt-12 bg-surface border border-border p-8 text-center">
            <h3 className="font-display text-3xl tracking-wider text-text mb-4">Custom Every Time</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">Every package is customizable — tell us your guest count, date, and vision, and we'll build a quote around it.</p>
            <Button as="a" href={subPath('luxury', '/contact')} size="lg">Get a Quote</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
