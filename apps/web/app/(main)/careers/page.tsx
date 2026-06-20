import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Team BIR family — open positions across construction, transport, real estate, and hospitality in Tennessee.',
}

const OPENINGS = [
  { company: 'BIR Materials', role: 'Equipment Operator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Transport', role: 'CDL-A Driver', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Transport', role: 'Logistics Coordinator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Developments', role: 'Construction Superintendent', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Developments', role: 'Estimator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Luxury Landing', role: 'Leasing Agent', type: 'Full-time', location: 'Oak Ridge, TN' },
  { company: 'BIR Travel Plaza', role: 'Fuel Attendant', type: 'Part-time', location: 'Dandridge, TN' },
  { company: 'Team BIR', role: 'General Inquiry', type: 'All types', location: 'East Tennessee' },
]

export default function CareersPage() {
  const config = SITE_CONFIGS.main
  return (
    <>
      <Nav config={config} />
      <main>
        <section className="pt-40 pb-16 border-b border-border">
          <div className="container-site">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Join the Family</p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
                Work With<br /><span className="text-accent">Team BIR</span>
              </h1>
              <p className="text-muted text-xl max-w-2xl leading-relaxed">
                We're always looking for driven, dependable people to join our family of Tennessee companies.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site">
            <ScrollReveal>
              <h2 className="font-display text-5xl tracking-wider text-text mb-12">Open Positions</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OPENINGS.map((job, i) => (
                <ScrollReveal key={`${job.company}-${job.role}`} delay={i * 60}>
                  <Card hover className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{job.company}</p>
                      <h3 className="font-display text-2xl tracking-wider text-text mb-1">{job.role}</h3>
                      <p className="text-muted text-sm">{job.location}</p>
                    </div>
                    <Badge>{job.type}</Badge>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200} className="mt-16 bg-surface border border-border p-8 text-center">
              <h3 className="font-display text-4xl tracking-wider text-text mb-4">Don't See Your Role?</h3>
              <p className="text-muted mb-6">We're always growing. Send us your resume and we'll reach out when the right opportunity opens up.</p>
              <Button as="a" href="/contact" size="lg">Get in Touch</Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  )
}
