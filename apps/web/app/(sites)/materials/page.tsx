import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIGS } from '@/lib/site-config'
import { subPath } from '@/lib/demo'

const cfg = SITE_CONFIGS.materials

export const metadata: Metadata = {
  title: 'Aggregates, Fill Dirt & Rock Crushing in Knoxville, TN | BIR Materials',
  description: 'Premium aggregates (#57, #78, #89), fill dirt, topsoil, contract crushing, and concrete recycling in Knoxville, TN. DOT-certified. Call 865-832-6247.',
  alternates: { canonical: cfg.url },
  openGraph: {
    type: 'website',
    url: cfg.url,
    title: 'BIR Materials — Aggregates & Crushing | Knoxville, TN',
    description: cfg.description,
  },
}

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: cfg.name,
  description: cfg.description,
  url: cfg.url,
  telephone: cfg.schema.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: cfg.address!.street,
    addressLocality: cfg.address!.city,
    addressRegion: cfg.address!.state,
    postalCode: cfg.address!.zip,
    addressCountry: 'US',
  },
  areaServed: 'East Tennessee',
}

const p = (path: string) => subPath('materials', path)

const SERVICES = [
  { label: 'Aggregates', desc: 'Multiple sizes: #57, #78, #89, #6-10 — for concrete, asphalt, drainage, and landscaping.', href: p('/aggregates'), num: '01' },
  { label: 'Fill Dirt & Topsoil', desc: 'Quality fill dirt and nutrient-rich topsoil for grading, landscaping, and commercial jobsites.', href: p('/fill-dirt'), num: '02' },
  { label: 'Concrete', desc: 'Concrete production and paving — foundations, slabs, walkways, and concrete paving projects.', href: p('/contact'), num: '03' },
  { label: 'Rock Crushing', desc: 'Mobile and stationary crushing services. Process your own material on-site at scale.', href: p('/crushing'), num: '04' },
  { label: 'Contract Crushing', desc: 'Custom contract crushing for large-scale operations — bring the crusher to your project.', href: p('/crushing'), num: '05' },
  { label: 'Recycling', desc: 'Concrete and asphalt recycling — reduce waste, lower costs, source sustainable materials.', href: p('/recycling'), num: '06' },
]

const WHY_US = [
  { label: 'Quality Assurance', desc: 'Materials and services held to the highest standard — durability and reliability on every project.' },
  { label: 'Sustainability', desc: 'Green process initiatives focused on recycling and reusing materials to reduce environmental impact.' },
  { label: 'Comprehensive Services', desc: 'From rock crushing to materials processing, a complete range of services for any construction need.' },
  { label: 'Customer Focus', desc: 'Personalized service and support from project inception to completion.' },
  { label: 'Competitive Pricing', desc: 'High-quality materials and services at prices that deliver real value.' },
  { label: 'Expertise & Innovation', desc: 'An experienced team leveraging advanced techniques and technology for superior results.' },
]

const GALLERY_PREVIEW = [1, 3, 5, 7].map(n => `/images/materials-gallery/gallery-${String(n).padStart(2, '0')}.jpg`)

export default function MaterialsHome() {
  return (
    <main>
      <JsonLd data={LD_JSON} />
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/materials-hero.jpg"
            alt="BIR Materials rock crushing equipment on a jobsite"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/55 to-bg" />
          <div className="absolute inset-0 hero-materials opacity-80" />
        </div>
        <div className="container-site relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Knoxville, Tennessee · 865-832-6247</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Rock Solid<br /><span className="text-accent">Results</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
              Bulk aggregates, fill dirt, DOT-certified crushing, and concrete recycling — from our Knoxville yard straight to your jobsite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={p('/contact')} size="lg">Request a Quote</Button>
              <Button as="a" href={p('/aggregates')} variant="outline" size="lg">View Products</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 glass border-y border-white/[0.06]">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '6', label: 'Product Lines' },
            { value: 'DOT', label: 'Certified' },
            { value: '100%', label: 'Recycled Option' },
            { value: 'TN', label: 'Knoxville Yard' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Products & Services</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              What We Supply
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} mode="scale">
                <Link href={s.href} className="group block h-full">
                  <div className="bg-surface/40 border border-white/[0.07] rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface hover:border-accent/20">
                    <div className="flex items-start justify-between mb-6">
                      <span className="stat-num text-4xl">{s.num}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white mb-3 group-hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                      {s.label}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-accent transition-colors">
                      <div className="h-px w-8 bg-current group-hover:w-12 transition-all" />
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Learn More</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Why Choose Us</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
              Built to Deliver
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((w, i) => (
              <ScrollReveal key={w.label} delay={i * 80}>
                <div className="p-8 h-full border border-white/[0.07] rounded-xl">
                  <h3 className="font-display text-xl text-white mb-3" style={{ fontWeight: 700 }}>{w.label}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">See It For Yourself</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-10" style={{ fontWeight: 800 }}>
              The Gallery
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {GALLERY_PREVIEW.map((src, i) => (
              <ScrollReveal key={src} delay={i * 60} mode="scale">
                <Link href={p('/gallery')} className="group block relative aspect-[4/5] overflow-hidden rounded-xl border border-white/[0.07] hover:border-accent/30 transition-colors">
                  <Image src={src} alt="BIR Materials jobsite" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <Button as="a" href={p('/gallery')} variant="outline">View Full Gallery</Button>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal mode="left">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">Commitment</p>
              <h2 className="font-display text-[clamp(2rem,4vw,4.5rem)] text-white leading-none mb-8" style={{ fontWeight: 800 }}>
                Built on<br /><span className="text-accent">Sustainability</span>
              </h2>
              <p className="font-body text-white/55 leading-relaxed mb-5">
                Our recycling program diverts tons of demolition waste from landfills each year, providing cost-effective, eco-friendly materials for new construction projects across Tennessee.
              </p>
              <p className="font-body text-white/45 leading-relaxed mb-10">
                From efficient extraction to sustainable processing — every BIR Materials operation is built to be good for your project and good for Tennessee.
              </p>
              <Button as="a" href={p('/contact')} variant="outline">Get in Touch</Button>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-3">
                {[
                  ['Address', '2601 Western Avenue'],
                  ['City', 'Knoxville, TN 37921'],
                  ['Phone', '865-832-6247'],
                  ['Email', 'materials@teambir.com'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between p-5 border border-white/[0.07] rounded-lg hover:border-accent/25 transition-colors">
                    <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/60">{label}</p>
                    <p className="font-body text-base text-white/80">{val}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-5" style={{ fontWeight: 800 }}>
              Need Material?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">DOT-certified aggregate, fill dirt, and crushing — call 865-832-6247 or quote online. Delivery available.</p>
            <Button as="a" href={p('/contact')} size="lg">Get a Quote</Button>
            <SocialLinks social={cfg.social} className="flex items-center justify-center gap-3 mt-10" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
