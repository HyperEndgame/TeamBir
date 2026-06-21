import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Free Construction Estimate in Knoxville, TN | BIR Developments · License #80985',
  description: 'Request a free estimate for residential or commercial construction in Knoxville, TN. TN Contractor License #80985.',
  alternates: { canonical: 'https://developments.teambir.com/contact' },
  openGraph: {
    type: 'website',
    url: 'https://developments.teambir.com/contact',
    title: 'Free Construction Estimate in Knoxville, TN | BIR Developments · License #80985',
    description: 'Request a free estimate for residential or commercial construction in Knoxville, TN. TN Contractor License #80985.',
  },
}

export default function DevelopmentsContactPage() {
  const config = SITE_CONFIGS.developments

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Free<br /><span className="text-accent">Estimate</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Tell us about your construction project. We'll provide a detailed estimate with no obligation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Location</p>
                <h3 className="font-display text-3xl text-text mb-4">Knoxville, Tennessee</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Developments is based in Knoxville with decades of experience building throughout East Tennessee. We're ready to help with your project.
                </p>
                <div className="space-y-3">
                  <p className="text-muted"><span className="text-accent font-display">City:</span> Knoxville</p>
                  <p className="text-muted"><span className="text-accent font-display">Service Area:</span> East Tennessee</p>
                  <p className="text-muted"><span className="text-accent font-display">Expertise:</span> All project types</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Contact</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Call for Estimate</h3>
                <div className="bg-bg/50 p-4 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Phone</p>
                  <p className="text-text font-display text-2xl tracking-wider">Call Now</p>
                  <p className="text-muted text-sm mt-2">Free estimates provided promptly</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Have your project details ready for a quick, accurate estimate discussion.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <Badge className="mb-4">Services</Badge>
                <h3 className="font-display text-2xl text-text mb-6">What We Help With</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Free project estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Design consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Timeline planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Budget discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Project questions</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Project Information</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-4">Describe Your Project</h2>
                <p className="text-muted text-lg">Tell us about your construction project. The more details you provide, the more accurate our estimate will be.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm siteName="BIR Developments" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Estimate Process */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Process</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">How We Estimate</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">1</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Submit Project Details</h4>
                  <p className="text-muted text-lg">Provide information about your project scope, materials, timeline, and budget expectations.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">2</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Initial Assessment</h4>
                  <p className="text-muted text-lg">Our team reviews your project and may schedule a site visit to assess conditions and requirements.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">3</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Detailed Estimate</h4>
                  <p className="text-muted text-lg">We provide a comprehensive estimate including labor, materials, timeline, and project scope.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent">
                    <p className="text-white font-display text-lg">4</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-text mb-2">Discussion & Agreement</h4>
                  <p className="text-muted text-lg">We review the estimate with you, answer questions, and discuss the path forward. No obligation.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Helpful</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">What to Prepare</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card>
                <h4 className="font-display text-2xl text-accent mb-4">Project Scope</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Type of project</li>
                  <li>✓ Approximate size/scale</li>
                  <li>✓ Desired timeline</li>
                  <li>✓ Budget range</li>
                  <li>✓ Special requirements</li>
                  <li>✓ Design preferences</li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <h4 className="font-display text-2xl text-accent mb-4">Property Information</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li>✓ Project address</li>
                  <li>✓ Site/property photos</li>
                  <li>✓ Current condition</li>
                  <li>✓ Access information</li>
                  <li>✓ Zoning/permits info</li>
                  <li>✓ Existing plans (if any)</li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
