import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'BIR Luxury Landing',
  description: 'Luxury duplexes, apartments, and condominiums in Oak Ridge, TN — 22 miles from Downtown Knoxville.',
}

const UNITS = [
  { label: 'Duplexes', desc: '3BR/2.5BA spacious homes with private entrances and upscale finishes.', href: '/duplexes', num: '01' },
  { label: 'Apartments', desc: '1–4 bedroom layouts, including penthouse-level suites with sweeping views.', href: '/apartments', num: '02' },
  { label: 'Condominiums', desc: 'New development — premium ownership opportunity in East Tennessee.', href: '/condominiums', num: '03' },
  { label: 'Amenities', desc: 'Resort-style pool, clubhouse, BBQ area, billiards, conference room, and more.', href: '/amenities', num: '04' },
]

const STATS = [
  { value: '22mi', label: 'From Knoxville' },
  { value: '4', label: 'Unit Types' },
  { value: '10+', label: 'Amenities' },
  { value: 'TN', label: 'Oak Ridge' },
]

export default function LuxuryHome() {
  return (
    <main>
      <section className="pt-48 pb-28 gradient-mesh">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Oak Ridge, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none mb-6 uppercase" style={{ fontWeight: 800 }}>
              Elevated<br /><span className="text-accent">Living</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Resort-style luxury living 22 miles from Downtown Knoxville — duplexes, apartments, and condominiums with finishes you won't find anywhere else in East Tennessee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="/apartments" size="lg">View Units</Button>
              <Button as="a" href="/contact" variant="outline" size="lg">Schedule a Tour</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-accent/10">
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">The Community</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-16 uppercase" style={{ fontWeight: 800 }}>
              Find Your Home
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {UNITS.map((u, i) => (
              <ScrollReveal key={u.label} delay={i * 80} mode="scale">
                <Link href={u.href} className="group block">
                  <div className="bg-bg p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface/70">
                    <span className="stat-num text-4xl mb-6">{u.num}</span>
                    <h3 className="font-display text-2xl tracking-wider text-white mb-3 group-hover:text-accent transition-colors uppercase" style={{ fontWeight: 700 }}>
                      {u.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{u.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-accent/60 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-14 transition-all" />
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
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-5 uppercase" style={{ fontWeight: 800 }}>
              Schedule a Tour
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Experience Oak Ridge's finest residential community in person.</p>
            <Button as="a" href="/contact" size="lg">Contact Us Today</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
