import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { subPath } from '@/lib/demo'
import type { JobOpening } from '@/lib/careers'

export function CareersSection({ siteKey, siteName, jobs }: { siteKey: string; siteName: string; jobs: JobOpening[] }) {
  return (
    <>
      <section className="pt-40 pb-16 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Join the Team</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Careers at<br /><span className="text-accent">{siteName}</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              We're always looking for driven, dependable people. Apply below.
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
            {jobs.map((job, i) => (
              <ScrollReveal key={job.role} delay={i * 60}>
                <Card hover className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl tracking-wider text-text mb-1">{job.role}</h3>
                    <p className="text-muted text-sm mb-3">{job.location}</p>
                    <Badge>{job.type}</Badge>
                  </div>
                  <Button as="a" href={job.applyUrl} target="_blank" rel="noopener noreferrer" size="sm">
                    Apply
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="mt-16 bg-surface border border-border p-8 text-center">
            <h3 className="font-display text-4xl tracking-wider text-text mb-4">Don't See Your Role?</h3>
            <p className="text-muted mb-6">Send us your info and we'll reach out when the right opportunity opens up.</p>
            <Button as="a" href={subPath(siteKey, '/contact')} size="lg">Get in Touch</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
