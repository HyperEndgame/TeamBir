import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'BIR Travel Plaza',
  description: "Tennessee's premier travel plaza in Dandridge — Jack in the Box, Naan Stop, 100% No Ethanol fuel, 250 parking spaces, and full-hookup RV parking.",
}

const p = (path: string) => subPath('travel', path)

const AMENITIES = [
  { label: 'Jack in the Box', desc: 'Quick-service burgers, tacos, and breakfast — familiar favorites served fast, all day long.', num: '01', href: p('/amenities') },
  { label: 'Naan Stop', desc: 'Fresh Indian-American cuisine right at the plaza — a unique dining experience on the road.', num: '02', href: p('/amenities') },
  { label: 'Fuel', desc: '100% No Ethanol fuel and propane — competitive pricing for all vehicle types.', num: '03', href: p('/amenities') },
  { label: 'Truckers Lounge', desc: '6 on-site showers, on-site laundry, and comfortable rest facilities for professional drivers.', num: '04', href: p('/amenities') },
  { label: 'RV & Truck Parking', desc: '250 total spaces with full hookups — water, electric, sewer — for overnight and extended stays.', num: '05', href: p('/amenities') },
]

export default function TravelHome() {
  return (
    <main>
      <section className="pt-48 pb-28 hero-travel">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Dandridge, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Your Stop.<br /><span className="text-accent">Every Time.</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Tennessee's premier travel plaza at 1217 Deep Springs Rd, Dandridge — 100% No Ethanol fuel, Jack in the Box, Naan Stop, trucker facilities, and full-hookup RV parking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={p('/amenities')} size="lg">See Amenities</Button>
              <Button as="a" href={p('/location')} variant="outline" size="lg">Get Directions</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-white/[0.06]">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '250', label: 'Parking Spaces' },
            { value: '6', label: 'On-Site Showers' },
            { value: '2', label: 'Restaurants' },
            { value: 'I-40', label: 'Easy Access' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Everything You Need</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AMENITIES.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 80} mode="scale">
                <Link href={a.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <span className="stat-num text-4xl mb-6">{a.num}</span>
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {a.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{a.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Details</span>
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
        <div className="container-site relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal mode="left">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Location</p>
            <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] text-white leading-none mb-8" style={{ fontWeight: 800 }}>
              Find Us in<br /><span className="text-accent">Dandridge</span>
            </h2>
            <p className="font-body text-white/55 leading-relaxed mb-10">
              Strategically located at 1217 Deep Springs Rd with easy access to I-40. The perfect stop whether you're passing through or settling in for the night.
            </p>
            <Button as="a" href={p('/location')} variant="outline">View Map</Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {[
                ['Address', '1217 Deep Springs Rd'],
                ['City', 'Dandridge, TN 37725'],
                ['Highway', 'Near I-40'],
                ['Hours', 'Open Daily'],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between p-5 border border-white/[0.07] rounded-lg hover:border-accent/25 transition-colors">
                  <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/60">{label}</p>
                  <p className="font-body text-base text-white/80">{val}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-5" style={{ fontWeight: 800 }}>
              Plan Your Stop
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Fuel, food, showers, and rest — all in one place just off I-40 in Dandridge.</p>
            <Button as="a" href={p('/location')} size="lg">Get Directions</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
