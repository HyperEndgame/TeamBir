import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIGS } from '@/lib/site-config'
import { subPath } from '@/lib/demo'

const cfg = SITE_CONFIGS.luxury

export const metadata: Metadata = {
  title: 'Luxury Event Venue & Condominiums in Oak Ridge, TN | BIR Luxury Landing',
  description: '12,000 sq ft event venue in Oak Ridge, TN — weddings, corporate events, birthday parties, and pool gatherings. New luxury condominiums & townhomes.',
  alternates: { canonical: cfg.url },
  openGraph: {
    type: 'website',
    url: cfg.url,
    title: 'BIR Luxury Landing — Event Venue & Condominiums | Oak Ridge, TN',
    description: cfg.description,
  },
}

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: cfg.name,
  description: cfg.description,
  url: cfg.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oak Ridge',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  areaServed: 'East Tennessee',
}

const p = (path: string) => subPath('luxury', path)

const EVENTS = [
  { label: 'Weddings', desc: 'Full ceremony and reception packages — customized planning, elegant spaces, and exceptional service to make your day unforgettable.', num: '01', href: p('/contact') },
  { label: 'Corporate Events', desc: 'Classy conference rooms and multi-purpose spaces for meetings, retreats, and corporate galas. Full corporate packages available.', num: '02', href: p('/contact') },
  { label: 'Birthday Parties', desc: 'Stunning celebration spaces for any age. Customizable layouts and premium amenities for a truly memorable birthday experience.', num: '03', href: p('/contact') },
  { label: 'Pool Parties', desc: 'Exclusive pool party venue with hourly and full-day options. Perfect for intimate gatherings or large celebrations.', num: '04', href: p('/contact') },
]

const UNITS = [
  { label: 'Condominiums', desc: 'New development — premium ownership in East Tennessee with luxury finishes and spectacular views.', href: p('/condominiums'), num: '01' },
  { label: 'Townhomes', desc: '2, 3, and 4-bedroom layouts with upscale finishes and resort-style community amenities.', href: p('/contact'), num: '02' },
  { label: 'Amenities', desc: 'Resort-style pool, billiards room, spa and salon, BBQ area, conference room, and more.', href: p('/amenities'), num: '03' },
  { label: 'Member Portal', desc: 'Residents access accounts, pay invoices, register for events, and communicate with management online.', href: p('/contact'), num: '04' },
]

const STATS = [
  { value: '12K', label: 'Sq Ft Venue' },
  { value: '4', label: 'Event Types' },
  { value: '$300', label: 'Starting/Hour' },
  { value: 'TN', label: 'Oak Ridge' },
]

export default function LuxuryHome() {
  return (
    <main>
      <JsonLd data={LD_JSON} />
      <section className="pt-48 pb-28 hero-luxury">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Oak Ridge, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Unparalleled<br /><span className="text-accent">Luxury</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              12,000 sq ft of curated event space in Oak Ridge — weddings, corporate gatherings, and private celebrations. Luxury condominiums and townhomes now available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={p('/contact')} size="lg">Book an Event</Button>
              <Button as="a" href={p('/amenities')} variant="outline" size="lg">Explore Amenities</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-white/[0.06]">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {STATS.map((s, i) => (
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Event Venue</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Host Your Event
            </h2>
            <p className="font-body text-white/50 max-w-2xl mb-16">
              12,000 sq ft of versatile event space with a billiards room, spa and salon, pool, and fully customizable layouts. Hourly rates from $300–$1,000. Full-day rentals from $5,000–$10,000.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EVENTS.map((e, i) => (
              <ScrollReveal key={e.label} delay={i * 80} mode="scale">
                <Link href={e.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <span className="stat-num text-4xl mb-6">{e.num}</span>
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {e.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{e.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Book Now</span>
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
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Residences</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Live at the Landing
            </h2>
            <p className="font-body text-white/50 max-w-2xl mb-16">
              Our newest community development — 2, 3, and 4-bedroom condominiums and townhomes with luxury finishes, spectacular views, and resort-style amenities.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {UNITS.map((u, i) => (
              <ScrollReveal key={u.label} delay={i * 80} mode="scale">
                <Link href={u.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <span className="stat-num text-4xl mb-6">{u.num}</span>
                    <h3 className="font-display text-xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {u.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{u.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Explore</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-5" style={{ fontWeight: 800 }}>
              Reserve Your Date
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Oak Ridge's premier venue for weddings, corporate events, and private gatherings. Rates from $300/hour.</p>
            <Button as="a" href={p('/contact')} size="lg">Reserve Your Date</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
