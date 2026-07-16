import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/sections/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pool Rules & Regulations | BIR Luxury Landing — Oak Ridge, TN',
  description: 'Pool rules and regulations for members and guests at BIR Luxury Landing in Oak Ridge, TN.',
  alternates: { canonical: 'https://luxury.teambir.com/rules' },
}

const RULES = [
  { title: 'Alcohol and Glass Containers', items: ['No alcohol is allowed in the pool area at any time.', 'Glass containers are strictly prohibited.'] },
  { title: 'Food and Drink', items: ['No food is allowed in the pool or on the pool deck.', 'Drinks, except water, and all food must be consumed in designated areas such as the courtyard or BBQ area.'] },
  { title: 'Supervision of Children', items: ['Children under the age of 16 must be supervised by a parent or guardian at all times.', 'Lifeguards are present to ensure safety but are not responsible for babysitting children.'] },
  { title: 'Checking In', items: ['All members must check in at the front desk before entering the pool area.', 'Guest fees are $5.00 per daily pass for member guests only. Non-members must purchase a membership to access the pool.'] },
  { title: 'Pool Safety', items: ['Proper swimwear is required at all times.', 'Running, diving, or other unsafe behavior is not allowed.', 'Do not block pool exits or safety equipment.'] },
  { title: 'Personal Belongings and Hygiene', items: ['Members are responsible for their own belongings. BIR Luxury Landing is not liable for lost or stolen items.', 'Shower before entering the pool to maintain cleanliness.', 'Hair longer than shoulder length must be tied up or contained under a swim cap.'] },
  { title: 'Pool Equipment and Property', items: ['Do not damage or tamper with any pool equipment or property.', 'Follow all instructions from lifeguards and staff members.', 'Any violation of these rules or disrespect towards staff may result in suspension or termination of membership.'] },
  { title: 'Use of Pool Facilities', items: ['Only BIR Luxury Landing members and their registered guests may use the pool facilities.', 'Guests must be accompanied by a member at all times.', 'No smoking or vaping is allowed in the pool area or any other enclosed space.'] },
  { title: 'Emergency Procedures', items: ["In case of emergency, follow the lifeguards' instructions and evacuate if required.", 'Notify a staff member immediately if you witness unsafe behavior or conditions.'] },
]

export default function RulesPage() {
  return (
    <main>
      <section className="pt-40 pb-16 border-b border-border bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Pool Rules</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-wider text-text leading-none mb-6">
              Rules &amp;<br /><span className="text-accent">Regulations</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              To ensure a safe and enjoyable experience for all members and guests, BIR Luxury Landing has established the following pool rules. By entering the pool area, you agree to abide by these rules.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site max-w-3xl">
          <div className="space-y-10">
            {RULES.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 50}>
                <div className="flex gap-6">
                  <span className="stat-num text-3xl flex-shrink-0 w-10">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-text mb-3" style={{ fontWeight: 700 }}>{r.title}</h3>
                    <ul className="space-y-2">
                      {r.items.map(item => (
                        <li key={item} className="text-muted leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={RULES.length * 50} className="mt-16 pt-10 border-t border-border">
            <p className="text-text font-display text-xl tracking-wide">
              By following these rules, you contribute to a safe and pleasant environment for everyone at BIR Luxury Landing. Thank you for your cooperation, and enjoy your time at the pool!
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
