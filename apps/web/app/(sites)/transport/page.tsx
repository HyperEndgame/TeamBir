import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIGS } from '@/lib/site-config'
import { subPath } from '@/lib/demo'

const cfg = SITE_CONFIGS.transport

export const metadata: Metadata = {
  title: 'Trucking & Logistics in Tennessee | BIR Transport · USDOT 717687',
  description: 'Family-owned Tennessee trucking — dry van truckload, cross docking, final mile, overweight hauls, truck parking, and boat/RV storage. Call 540-980-7530.',
  alternates: { canonical: cfg.url },
  openGraph: {
    type: 'website',
    url: cfg.url,
    title: 'BIR Transport — Trucking & Logistics | Tennessee · USDOT 717687',
    description: cfg.description,
  },
}

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: cfg.name,
  description: cfg.description,
  url: cfg.url,
  telephone: cfg.schema.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Knoxville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  areaServed: ['Tennessee', 'United States'],
}

const p = (path: string) => subPath('transport', path)

const SERVICES = [
  { label: 'Dry Van Truckload', desc: 'Primary freight service — reliable dry van transportation across Tennessee and the USA with on-time delivery.', num: '01', href: p('/services') },
  { label: 'Cross Docking', desc: 'Efficient inbound-to-outbound transfer. Reduces storage time and moves goods faster.', num: '02', href: p('/services') },
  { label: 'Final Mile', desc: 'Professional last-mile delivery. Fast turnaround, every shipment handled with care.', num: '03', href: p('/services') },
  { label: 'Overweight Hauls', desc: 'Oversized and overweight loads. Full permitting and escort services included.', num: '04', href: p('/services') },
  { label: 'Drop Trailer Storage', desc: 'Secure trailer storage facilities — short or long term, cost-effective rates.', num: '05', href: p('/services') },
  { label: 'Truck Parking', desc: 'Secure, spacious parking near major highways — keeping your fleet safe and accessible.', num: '06', href: p('/services') },
  { label: 'Boat & RV Storage', desc: 'Safe, accessible, weather-protected storage for your boat, RV, or motor home.', num: '07', href: p('/services') },
  { label: 'Commercial Storage', desc: 'Short and long-term warehousing solutions to keep your goods secure until needed.', num: '08', href: p('/services') },
]

export default function TransportHome() {
  return (
    <main>
      <JsonLd data={LD_JSON} />
      <section className="pt-48 pb-28 hero-transport">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">USDOT 717687 · Knoxville, Tennessee</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Go With<br /><span className="text-accent">the Best</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Family-owned Tennessee trucking — dry van truckload, cross docking, final mile, overweight hauls, and secure storage. Where family matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={p('/services')} size="lg">Our Services</Button>
              <Button as="a" href={p('/contact')} variant="outline" size="lg">Request a Quote</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-white/[0.06]">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '8', label: 'Service Types' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">What We Move & Store</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60} mode="scale">
                <Link href={s.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <span className="stat-num text-4xl mb-6">{s.num}</span>
                    <h3 className="font-display text-xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Why BIR Transport</p>
            <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] text-white leading-none mb-8" style={{ fontWeight: 800 }}>
              Family.<br /><span className="text-accent">Not a Number.</span>
            </h2>
            <p className="font-body text-white/55 leading-relaxed mb-5">
              At BIR Transport, we value drivers, their families, and hard work. Safety and retention bonuses, real home time, and a personal relationship with ownership — not a corporate number.
            </p>
            <p className="font-body text-white/40 leading-relaxed mb-10">
              Our smaller, selective fleet means better drivers handle your freight — resulting in an extremely high on-time delivery rate with near-zero rejection and damage rates.
            </p>
            <Button as="a" href={p('/contact')} variant="outline">Get a Quote</Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {[
                ['USDOT Number', '717687'],
                ['Phone', '540-980-7530'],
                ['Email', 'jimmybir@birtransport.com'],
                ['Operations', 'Interstate Trucking'],
                ['Insurance', 'Fully Insured'],
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
              Ready to Ship?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Get a quote for any load, any route — call 540-980-7530 or submit online.</p>
            <Button as="a" href={p('/contact')} size="lg">Request a Quote</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
