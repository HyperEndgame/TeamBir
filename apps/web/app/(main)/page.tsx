import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { ConstellationBg } from '@/components/sections/ConstellationBg'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIGS } from '@/lib/site-config'
import { siteUrl } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Team BIR — Go With the Best.',
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
    logo: '/images/logo-materials.png',
    num: '01',
  },
  {
    key: 'luxury',
    name: 'BIR Luxury Landing',
    tagline: 'Elevated Living',
    description: 'Luxury duplexes, apartments, and condominiums in Oak Ridge, TN — resort-style amenities, 22 mi from Knoxville.',
    href: siteUrl('luxury'),
    badge: 'Residential Real Estate',
    logo: '/images/logo-luxury.png',
    num: '02',
  },
  {
    key: 'transport',
    name: 'BIR Transport',
    tagline: 'Go With the Best',
    description: 'Cross docking, final mile, overweight assistance, drop trailer storage, and refrigerated logistics.',
    href: siteUrl('transport'),
    badge: 'Trucking & Logistics',
    logo: '/images/logo-transport.png',
    num: '03',
  },
  {
    key: 'developments',
    name: 'BIR Developments',
    tagline: 'Your Trusted Builder',
    description: 'Custom homes, commercial construction, renovations, and excavation across Knoxville and East Tennessee.',
    href: siteUrl('developments'),
    badge: 'General Contractor',
    logo: '/images/logo-developments.png',
    num: '04',
  },
  {
    key: 'travel',
    name: 'BIR Travel Plaza',
    tagline: 'Comfort & Convenience',
    description: "Tennessee's premier travel plaza in Dandridge — Jack in the Box, Naan Stop, fuel, truckers lounge, and RV hookups.",
    href: siteUrl('travel'),
    badge: 'Travel & Hospitality',
    logo: '/images/logo-travel.png',
    num: '05',
  },
]

const STATS = [
  { value: '20+', label: 'Years in Business' },
  { value: '6', label: 'Companies' },
  { value: '500+', label: 'Projects Delivered' },
  { value: 'TN', label: 'Proudly Tennessee' },
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

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Eagle image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-eagle.avif"
            alt="Team BIR"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-left"
            style={{ transform: 'scale(1.04)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/40 to-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/40" />
        </div>

        {/* Grain texture */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 container-site text-center py-40">
          {/* Eyebrow */}
          <div className="hero-animate" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-accent/80 mb-8">
              Knoxville &amp; Dandridge, Tennessee
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-white mb-8 hero-animate"
            style={{ animationDelay: '0.25s', fontWeight: 800, letterSpacing: '-0.01em' }}
          >
            Go With<br />
            <span style={{
              background: 'linear-gradient(135deg, #F5D060 0%, #E8B020 50%, #B88A18 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              the Best.
            </span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed hero-animate"
            style={{ animationDelay: '0.4s' }}
          >
            A family of Tennessee companies founded by Jimmy Bir Singh — spanning construction, transport, real estate, and hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate" style={{ animationDelay: '0.55s' }}>
            <Button as="a" href="#businesses" size="lg">Our Companies</Button>
            <Button as="a" href="/contact" variant="outline" size="lg">Get in Touch</Button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hero-animate" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative py-12 glass border-y border-accent/10 overflow-hidden">
        <ConstellationBg className="opacity-50" />
        <div className="ticker-track flex items-center gap-0 w-max">
          {[...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-12">
                <p className="stat-num text-5xl md:text-6xl mb-1">{s.value}</p>
                <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-muted">{s.label}</p>
              </div>
              <div className="w-px h-10 bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BUSINESSES GRID ── */}
      <section id="businesses" className="relative py-28 md:py-36 gradient-mesh">
        <ConstellationBg />
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">The Portfolio</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              Our Companies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESSES.map((b, i) => (
              <ScrollReveal key={b.key} delay={i * 60} mode="scale">
                <Link href={b.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <div className="flex items-start justify-between mb-6">
                      <span className="stat-num text-4xl">{b.num}</span>
                      <div className="relative h-10 w-24 flex-shrink-0">
                        <Image src={b.logo} alt={b.name} fill className="object-contain object-right opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-1 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {b.name}
                    </h3>
                    <p className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-accent/50 mb-4">{b.tagline}</p>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{b.description}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase">Explore</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                        <path d="M2 6h8M6 2l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* Team BIR card */}
            <ScrollReveal delay={BUSINESSES.length * 60} mode="scale">
              <Link href="/about" className="group block h-full">
                <div className="border border-accent/15 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-accent/35"
                  style={{ background: 'linear-gradient(135deg, rgba(232,176,32,0.06) 0%, rgba(15,21,33,0.98) 70%)' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="stat-num text-4xl">06</span>
                    <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-accent/50 px-2 py-1">Corporate</span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-1 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                    Team BIR
                  </h3>
                  <p className="font-body text-[0.7rem] tracking-[0.15em] uppercase text-accent/50 mb-4">The Umbrella</p>
                  <p className="font-body text-sm text-white/50 leading-relaxed flex-1">
                    The parent organization founded by Jimmy Bir Singh — connecting all six companies under one mission and one family.
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-accent/50 group-hover:text-accent transition-colors">
                    <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase">Our Story</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                      <path d="M2 6h8M6 2l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="relative py-28">
        <ConstellationBg />
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <ScrollReveal mode="left">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5">Our Story</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-8" style={{ fontWeight: 800 }}>
              Rooted in<br /><span className="text-accent">Tennessee.</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-4 text-[1.05rem]">
              Founded by Jimmy Bir Singh in Knoxville, Team BIR has grown from a single venture into a family of six companies that together shape the landscape of East Tennessee.
            </p>
            <p className="font-body text-white/50 leading-relaxed mb-10">
              From crushing rock to building homes, moving freight to hosting travelers — every BIR company shares the same foundation: hard work, integrity, and community.
            </p>
            <Button as="a" href="/about" variant="outline">Meet the Founder</Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['Construction', 'Homes, commercial, excavation'],
                ['Materials', 'Aggregates, crushing, recycling'],
                ['Transport', 'Freight & logistics'],
                ['Hospitality', 'Travel plaza, real estate'],
              ].map(([title, desc]) => (
                <div key={title} className="p-6 border border-white/[0.07] hover:border-accent/30 transition-colors">
                  <p className="font-display text-xl text-white mb-1" style={{ fontWeight: 700 }}>{title}</p>
                  <p className="font-body text-xs text-white/40">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold pointer-events-none" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,164,74,0.08) 0%, transparent 70%)',
        }} />
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="absolute bottom-0 left-0 right-0 gold-line" />

        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5">Get in Touch</p>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Let's Build<br />Something.
            </h2>
            <p className="font-body text-white/60 text-xl max-w-lg mx-auto mb-12">
              Whether you need aggregates, a new home, freight logistics, or a place to stay.
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
