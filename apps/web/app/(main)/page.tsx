import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIGS } from '@/lib/site-config'
import { siteUrl } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Team BIR — Built to Last. Driven to Deliver.',
  description: SITE_CONFIGS.main.description,
  openGraph: { type: 'website', title: 'Team BIR', description: SITE_CONFIGS.main.description },
  alternates: { canonical: 'https://teambir.com' },
}

const BUSINESSES = [
  {
    key: 'materials',
    name: 'BIR Materials',
    tagline: 'Rock Solid Results',
    description: 'Premium aggregates, fill dirt, topsoil, contract crushing, and materials recycling across Tennessee.',
    href: siteUrl('materials'),
    badge: 'Aggregates & Crushing',
    icon: '⛏',
  },
  {
    key: 'luxury',
    name: 'BIR Luxury Landing',
    tagline: 'Elevated Living',
    description: 'Luxury duplexes, apartments, and condominiums in Oak Ridge, TN — resort-style amenities, 22 mi from Knoxville.',
    href: siteUrl('luxury'),
    badge: 'Residential',
    icon: '🏛',
  },
  {
    key: 'transport',
    name: 'BIR Transport',
    tagline: 'Go With the Best',
    description: 'Cross docking, final mile, overweight assistance, drop trailer storage, and refrigerated logistics.',
    href: siteUrl('transport'),
    badge: 'Trucking & Logistics',
    icon: '🚛',
  },
  {
    key: 'developments',
    name: 'BIR Developments',
    tagline: 'Your Trusted Builder',
    description: 'Custom homes, commercial construction, renovations, and excavation across Knoxville and East Tennessee.',
    href: siteUrl('developments'),
    badge: 'General Contractor',
    icon: '🏗',
  },
  {
    key: 'travel',
    name: 'BIR Travel Plaza',
    tagline: 'Comfort & Convenience',
    description: "Tennessee's premier travel plaza in Dandridge — McDonald's, fuel, truckers lounge, and RV hookups.",
    href: siteUrl('travel'),
    badge: 'Travel & Hospitality',
    icon: '⛽',
  },
]

const STATS = [
  { value: '20+', label: 'Years in Business', unit: '' },
  { value: '6', label: 'Companies', unit: '' },
  { value: '500+', label: 'Projects Delivered', unit: '' },
  { value: 'TN', label: 'Proudly Based in', unit: '' },
]

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Team BIR',
  description: SITE_CONFIGS.main.description,
  url: 'https://teambir.com',
  founder: { '@type': 'Person', name: 'Jimmy Bir Singh' },
  address: { '@type': 'PostalAddress', addressLocality: 'Knoxville', addressRegion: 'TN', addressCountry: 'US' },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={LD_JSON} />
      <Nav config={SITE_CONFIGS.main} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-eagle.jpg"
            alt="Team BIR — Built to Last"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/50 via-[#0B1F2A]/30 to-[#0B1F2A]" />
        </div>

        <div className="relative z-10 container-site text-center py-32">
          <div className="mb-6" style={{ animation: 'fadeUp 0.8s ease forwards' }}>
            <Badge>Knoxville & Dandridge, Tennessee</Badge>
          </div>
          <h1
            className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-wider text-text mb-6 uppercase"
            style={{ animation: 'fadeUp 0.8s ease 0.15s both' }}
          >
            Built to Last.<br />
            <span className="text-accent">Driven to</span> Deliver.
          </h1>
          <p
            className="text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animation: 'fadeUp 0.8s ease 0.3s both' }}
          >
            A family of Tennessee companies founded by Jimmy Bir Singh — spanning construction, transport, real estate, and hospitality.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeUp 0.8s ease 0.45s both' }}
          >
            <Button as="a" href="#businesses" size="lg">Our Companies</Button>
            <Button as="a" href="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-surface border-y border-border">
        <div className="container-site py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-display text-5xl md:text-6xl text-accent tracking-wider mb-1">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-muted">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BUSINESSES GRID */}
      <section id="businesses" className="py-24 md:py-32">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Family"
              title="Our Companies"
              subtitle="Six distinct businesses, one unified mission: building Tennessee's future."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESSES.map((b, i) => (
              <ScrollReveal key={b.key} delay={i * 80}>
                <Link href={b.href} className="group block h-full">
                  <Card hover className="h-full flex flex-col">
                    <div className="text-4xl mb-4">{b.icon}</div>
                    <Badge className="mb-3 w-fit">{b.badge}</Badge>
                    <h3 className="font-display text-3xl tracking-wider text-text mb-1 group-hover:text-accent transition-colors">
                      {b.name}
                    </h3>
                    <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">{b.tagline}</p>
                    <p className="text-muted text-sm leading-relaxed flex-1">{b.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-accent text-sm font-mono tracking-wider">
                      <span>Learn More</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}

            {/* Team BIR corporate card */}
            <ScrollReveal delay={BUSINESSES.length * 80}>
              <Card className="h-full flex flex-col justify-between bg-accent/10 border-accent/40">
                <div>
                  <div className="text-4xl mb-4">🦅</div>
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Corporate</p>
                  <h3 className="font-display text-3xl tracking-wider text-text mb-3">Team BIR</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    The umbrella organization founded by Jimmy Bir Singh — connecting all six companies under one mission.
                  </p>
                </div>
                <Link href="/about" className="mt-6 font-mono text-xs tracking-widest uppercase text-accent hover:text-accent-h transition-colors">
                  Our Story →
                </Link>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Our Story</p>
            <h2 className="font-display text-6xl md:text-7xl tracking-wider text-text leading-none mb-6">
              Rooted in<br /><span className="text-accent">Tennessee.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Founded by Jimmy Bir Singh in Knoxville, Team BIR has grown from a single venture into a family of six companies that together shape the landscape of East Tennessee.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From crushing rock to building homes, moving freight to hosting travelers — every company in the BIR family shares the same foundation: hard work, integrity, and community.
            </p>
            <Button as="a" href="/about" variant="outline">Meet Jimmy Singh</Button>
          </ScrollReveal>

          <ScrollReveal delay={150} className="grid grid-cols-2 gap-4">
            {[
              { label: 'Construction', desc: 'Homes, commercial, excavation' },
              { label: 'Materials', desc: 'Aggregates, crushing, recycling' },
              { label: 'Transport', desc: 'Freight & logistics' },
              { label: 'Hospitality', desc: 'Travel plaza, real estate' },
            ].map((item) => (
              <div key={item.label} className="bg-bg border border-border p-6">
                <p className="font-display text-2xl tracking-wider text-text mb-1">{item.label}</p>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-teal/10 pointer-events-none" />
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get in Touch</p>
            <h2 className="font-display text-6xl md:text-8xl tracking-wider text-text leading-none mb-6">
              Let's Build<br />Something.
            </h2>
            <p className="text-muted text-xl max-w-xl mx-auto mb-10">
              Whether you need aggregates, a new home, freight logistics, or a place to stay — we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/contact" size="lg">Contact Team BIR</Button>
              <Button as="a" href="/businesses" variant="outline" size="lg">View All Companies</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer config={SITE_CONFIGS.main} />
    </>
  )
}
