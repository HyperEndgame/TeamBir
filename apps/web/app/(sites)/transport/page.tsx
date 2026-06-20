import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'BIR Transport',
  description: 'Tennessee-based trucking and logistics — cross docking, final mile, overweight assistance. USDOT 717687.',
}

const SERVICES = [
  { label: 'Cross Docking', desc: 'Efficient inbound-to-outbound transfer. Reduces storage time and moves goods faster.', num: '01', href: '/services' },
  { label: 'Final Mile', desc: 'Professional last-mile delivery. Fast turnaround, every shipment handled with care.', num: '02', href: '/services' },
  { label: 'Overweight Hauls', desc: 'Oversized and overweight loads. Full permitting and escort services included.', num: '03', href: '/services' },
  { label: 'Drop Trailer Storage', desc: 'Secure trailer storage facilities — short or long term, cost-effective rates.', num: '04', href: '/services' },
  { label: 'Refrigerated Storage', desc: 'Temperature-controlled warehousing for perishable freight.', num: '05', href: '/services' },
  { label: 'Re-deliveries', desc: 'Missed delivery recovery and re-route services across Tennessee.', num: '06', href: '/services' },
]

export default function TransportHome() {
  return (
    <main>
      <section className="pt-48 pb-28 gradient-mesh">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">USDOT 717687</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] tracking-wider text-white leading-none mb-6 uppercase" style={{ fontWeight: 800 }}>
              Go With<br /><span className="text-accent">the Best</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Tennessee-based trucking and logistics — cross-docking, final mile, overweight assistance, drop trailer storage, and refrigerated freight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="/services" size="lg">Our Services</Button>
              <Button as="a" href="/contact" variant="outline" size="lg">Request a Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-accent/10">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '6', label: 'Service Types' },
            { value: 'TN', label: 'Home State' },
            { value: 'DOT', label: 'Licensed & Insured' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">What We Move</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-16 uppercase" style={{ fontWeight: 800 }}>
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60} mode="scale">
                <Link href={s.href} className="group block">
                  <div className="bg-bg p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface/70">
                    <span className="stat-num text-4xl mb-6">{s.num}</span>
                    <h3 className="font-display text-xl tracking-wider text-white mb-3 group-hover:text-accent transition-colors uppercase" style={{ fontWeight: 700 }}>
                      {s.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{s.desc}</p>
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Credentials</p>
            <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] tracking-wider text-white leading-none mb-8 uppercase" style={{ fontWeight: 800 }}>
              Licensed.<br /><span className="text-accent">Insured.</span><br />Ready.
            </h2>
            <p className="font-body text-white/55 leading-relaxed mb-10">
              USDOT 717687 — we operate interstate and hold all required licenses and insurance to move your freight professionally, on time, every time.
            </p>
            <Button as="a" href="/contact" variant="outline">Get a Quote</Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {[
                ['USDOT Number', '717687'],
                ['Operations', 'Interstate Trucking'],
                ['Equipment', 'Modern Fleet'],
                ['Insurance', 'Fully Insured'],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between p-5 border border-white/[0.07] hover:border-accent/25 transition-colors">
                  <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/60">{label}</p>
                  <p className="font-display text-lg tracking-wider text-white uppercase">{val}</p>
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
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] tracking-wider text-white leading-none mb-5 uppercase" style={{ fontWeight: 800 }}>
              Ready to Ship?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Get a quote for any load, any route, anywhere in Tennessee.</p>
            <Button as="a" href="/contact" size="lg">Request a Quote</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
