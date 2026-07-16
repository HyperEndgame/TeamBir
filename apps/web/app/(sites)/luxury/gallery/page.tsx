import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Gallery | BIR Luxury Landing — Oak Ridge, TN',
  description: 'See BIR Luxury Landing\'s event venue, pool, and party spaces in Oak Ridge, TN.',
  alternates: { canonical: 'https://luxury.teambir.com/gallery' },
}

const GALLERY_COUNT = 32

export default function GalleryPage() {
  const images = Array.from({ length: GALLERY_COUNT }, (_, i) => `/images/luxury-gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`)

  return (
    <main>
      <section className="pt-40 pb-16 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">See It For Yourself</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              The<br /><span className="text-accent">Gallery</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              A look at events, pool parties, and celebrations hosted at BIR Luxury Landing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {images.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block break-inside-avoid overflow-hidden rounded-xl border border-white/[0.07] hover:border-accent/30 transition-colors"
              >
                <Image
                  src={src}
                  alt={`BIR Luxury Landing event photo ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 6 ? 'eager' : 'lazy'}
                />
              </a>
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
              Ready to Book?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">Reserve your date at Oak Ridge's premier event venue.</p>
            <Button as="a" href={subPath('luxury', '/contact')} size="lg">Book an Event</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
