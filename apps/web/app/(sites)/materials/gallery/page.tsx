import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'

export const metadata: Metadata = {
  title: 'Gallery | BIR Materials — Knoxville, TN',
  description: 'Photos of BIR Materials\' rock crushing equipment, aggregates, and jobsites in Knoxville, TN.',
  alternates: { canonical: 'https://materials.teambir.com/gallery' },
}

const GALLERY_COUNT = 8

export default function GalleryPage() {
  const images = Array.from({ length: GALLERY_COUNT }, (_, i) => `/images/materials-gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`)
  const p = (path: string) => subPath('materials', path)

  return (
    <main>
      <section className="pt-48 pb-16 hero-materials">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">See It For Yourself</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white leading-none mb-6" style={{ fontWeight: 800 }}>
              Our<br /><span className="text-accent">Gallery</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-2xl leading-relaxed">
              Crushing equipment, aggregates, and jobsites from around Knoxville.
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
                  alt={`BIR Materials jobsite photo ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 4 ? 'eager' : 'lazy'}
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
              Need Material?
            </h2>
            <p className="font-body text-white/55 text-lg mb-10">DOT-certified aggregate, fill dirt, and crushing — call 865-832-6247 or quote online.</p>
            <Button as="a" href={p('/contact')} size="lg">Get a Quote</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
