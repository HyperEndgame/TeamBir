import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact BIR Travel Plaza',
  description: 'Get in touch with BIR Travel Plaza for inquiries and reservations.',
}

export default function TravelContactPage() {
  const config = SITE_CONFIGS.travel

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Get In Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Contact<br /><span className="text-accent">Us</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Questions about our amenities or need to make a reservation? Contact us today.
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
                <h3 className="font-display text-3xl text-text mb-4">Dandridge, Tennessee</h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  BIR Travel Plaza is located in Dandridge, Tennessee with 24/7 operations. Open to all travelers, truckers, and RV enthusiasts.
                </p>
                <div className="space-y-3">
                  <p className="text-muted"><span className="text-accent font-display">Address:</span> 1217 Deep Springs Rd</p>
                  <p className="text-muted"><span className="text-accent font-display">City:</span> Dandridge, TN 37725</p>
                  <p className="text-muted"><span className="text-accent font-display">Hours:</span> Open 24/7</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <Badge className="mb-4">Quick Contact</Badge>
                <h3 className="font-display text-2xl text-text mb-6">Call Us</h3>
                <div className="bg-bg/50 p-4 rounded mb-6">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">Phone</p>
                  <p className="text-text font-display text-2xl tracking-wider">Call Now</p>
                  <p className="text-muted text-sm mt-2">Available 24 hours a day</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Have your inquiry or reservation request ready for quick assistance.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <Badge className="mb-4">Services</Badge>
                <h3 className="font-display text-2xl text-text mb-6">We Can Help With</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">RV parking reservations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Amenities information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Facility questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">Group bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted text-sm">General inquiries</span>
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
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Message</p>
                <h2 className="font-display text-5xl tracking-wider text-text mb-4">Send Us a Message</h2>
                <p className="text-muted text-lg">Have a question or want to make a reservation? Fill out the form below and we'll get back to you shortly.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm siteName="BIR Travel Plaza" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-24 border-b border-border">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Hours</p>
            <h2 className="font-display text-5xl tracking-wider text-text mb-12">Open 24/7</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Card>
                <h4 className="font-display text-2xl text-text mb-4">McDonald's Hours</h4>
                <div className="space-y-2 text-muted text-sm">
                  <p><span className="text-accent">Breakfast:</span> 5:00 AM - 10:30 AM</p>
                  <p><span className="text-accent">Lunch/Dinner:</span> 10:30 AM - 11:00 PM</p>
                  <p><span className="text-accent">Late Night:</span> 11:00 PM - 5:00 AM</p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <h4 className="font-display text-2xl text-text mb-4">Facility Hours</h4>
                <div className="space-y-2 text-muted text-sm">
                  <p><span className="text-accent">Fuel:</span> Available 24/7</p>
                  <p><span className="text-accent">Truckers Lounge:</span> Available 24/7</p>
                  <p><span className="text-accent">RV Parking:</span> Available 24/7</p>
                </div>
              </Card>
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
                <h4 className="font-display text-xl text-text mb-3">Can I reserve RV spots in advance?</h4>
                <p className="text-muted text-sm">Yes, we accept reservations for RV parking. Contact us directly to book your spot.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">What are the RV hookup costs?</h4>
                <p className="text-muted text-sm">Pricing is competitive and varies based on stay length. Call for current rates and availability.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Is parking available for large rigs?</h4>
                <p className="text-muted text-sm">Absolutely. We have dedicated truck parking with spacious areas for 18-wheelers.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Are there shower facilities?</h4>
                <p className="text-muted text-sm">Yes, we offer facilities in our truckers lounge for all travelers. Contact us for details.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Can I get WiFi at the plaza?</h4>
                <p className="text-muted text-sm">WiFi availability varies. Contact us for current connectivity options at the facility.</p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <Card>
                <h4 className="font-display text-xl text-text mb-3">Is the plaza accessible 24/7?</h4>
                <p className="text-muted text-sm">Yes, BIR Travel Plaza is open 24 hours a day, 7 days a week for all travelers.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
