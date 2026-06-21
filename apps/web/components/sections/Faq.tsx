'use client'
import { useState } from 'react'
import { ScrollReveal } from '@/components/sections/ScrollReveal'

const FAQS = [
  {
    q: 'What is Team BIR?',
    a: 'Team BIR is a family of Tennessee-based companies founded by Jimmy Bir Singh. The umbrella organization connects six businesses spanning aggregates, transport, luxury real estate, construction, and travel hospitality.',
  },
  {
    q: 'Where does Team BIR operate?',
    a: 'All Team BIR companies are rooted in East Tennessee — headquartered in Knoxville and Dandridge, with reach across the region and beyond for logistics and transport.',
  },
  {
    q: 'How do I request a quote or get in touch?',
    a: "Visit our Contact page or go directly to the company you need. Each business has its own team ready to help — whether it's materials, a build, freight, or accommodations.",
  },
  {
    q: 'Which companies are part of the Team BIR family?',
    a: 'BIR Materials (aggregates & crushing), BIR Luxury Landing (residential real estate), BIR Transport (trucking & logistics), BIR Developments (general contractor), and BIR Travel Plaza (travel & hospitality).',
  },
  {
    q: 'Is Team BIR hiring?',
    a: "Opportunities vary by division. Check the Jobs page on the specific company site you're interested in, or reach out through our contact form and we'll point you in the right direction.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-28 relative">
      <div className="container-site">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4">FAQ</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-16" style={{ fontWeight: 800 }}>
            Common<br />Questions.
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto divide-y divide-white/[0.06]">
          {FAQS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-xl text-white group-hover:text-accent transition-colors pr-8" style={{ fontWeight: 700 }}>
                  {item.q}
                </span>
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </button>
              {open === i && (
                <p className="font-body text-white/55 leading-relaxed pb-6 text-[1.05rem]">
                  {item.a}
                </p>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
