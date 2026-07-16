import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Book an Event or Schedule a Tour | BIR Luxury Landing — Oak Ridge, TN',
  description: 'Book your event or schedule a property tour at BIR Luxury Landing in Oak Ridge, TN. Hourly event rates from $300. Luxury residences available.',
  alternates: { canonical: 'https://luxury.teambir.com/contact' },
  openGraph: {
    type: 'website',
    url: 'https://luxury.teambir.com/contact',
    title: 'Book an Event or Schedule a Tour | BIR Luxury Landing — Oak Ridge, TN',
    description: 'Book your event or schedule a property tour at BIR Luxury Landing in Oak Ridge, TN. Hourly event rates from $300. Luxury residences available.',
  },
}

export default function LuxuryContactPage() {
  const config = SITE_CONFIGS.luxury

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Contact<br /><span className="text-accent">Leasing</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Schedule a tour, ask about availability, or inquire about our residences. Our team is ready to help.
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
                <h3 className="font-display text-3xl text-text mb-4">Oak Ridge, Tennessee</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Luxury Landing is located in Oak Ridge, just 22 miles from Downtown Knoxville. Beautiful mountain setting with convenient access to the city.
                </p>
                <div className="space-y-3">
                  <p className="text-muted"><span className="text-accent font-display">Community:</span> Oak Ridge</p>
                  <p className="text-muted"><span className="text-accent font-display">Distance to Knoxville:</span> 22 miles</p>
                  <p className="text-muted"><span className="text-accent font-display">Setting:</span> Mountain foothills</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Contact</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Call to Schedule</h3>
                <div className="bg-bg/50 p-4 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Phone</p>
                  <a href="tel:8657224528" className="text-text font-display text-2xl tracking-wider hover:text-accent transition-colors">865-722-4528</a>
                  <p className="text-muted text-sm mt-2">Tours available daily, weekends included</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Our leasing team responds to inquiries within 24 hours. Have your availability ready for faster scheduling.
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
                    <span className="text-muted text-sm">Private property tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Floor plan information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Pricing & lease terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Amenities details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Move-in questions</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Send a Message</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-4">Request Information</h2>
                <p className="text-muted text-lg">Fill out the form below and our leasing team will be in touch shortly with tour availability and pricing information.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm siteName="BIR Luxury Landing" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lease Process */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">How It Works</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Leasing Process</h2>
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
                  <h4 className="font-display text-2xl text-text mb-2">Schedule a Tour</h4>
                  <p className="text-muted text-lg">Call or submit an inquiry to schedule your private tour. Our team will show you available units and amenities.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Review Options</h4>
                  <p className="text-muted text-lg">Explore our duplexes, apartments, and condominiums. Discuss floor plans, pricing, and lease terms with our leasing specialist.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Complete Application</h4>
                  <p className="text-muted text-lg">Submit your application with required documentation. We review applications promptly to move forward with approval.</p>
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
                  <h4 className="font-display text-2xl text-text mb-2">Sign & Move In</h4>
                  <p className="text-muted text-lg">Sign your lease agreement and get your keys. Our team helps with move-in coordination and orientation to the community.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Questions</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">What are the lease terms?</h4>
                <p className="text-muted text-sm mb-4">We offer flexible lease terms ranging from 6 months to 2+ years. Terms can be customized based on your needs.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Are pets allowed?</h4>
                <p className="text-muted text-sm mb-4">Yes, we welcome pets. We have a dedicated dog park and pet-friendly policies. Ask about specific details during your tour.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">What utilities are included?</h4>
                <p className="text-muted text-sm mb-4">Pricing structure varies by unit. Our leasing team will detail what's included in your lease during the tour.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Is parking included?</h4>
                <p className="text-muted text-sm mb-4">Yes. All units include dedicated parking. Duplexes have private garages. Apartments and condos have assigned spaces.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Can I see a unit before signing?</h4>
                <p className="text-muted text-sm mb-4">Absolutely. We encourage tours of available floor plans. Schedule your visit to see the quality and finishes.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">What's the application process?</h4>
                <p className="text-muted text-sm mb-4">Standard application with background and income verification. Our team guides you through the process—typically approved within 5 business days.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
