import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import type { SiteConfig } from '@/lib/site-config'
import { siteUrl } from '@/lib/demo'

interface Props { config: SiteConfig }

const FAMILY_LINKS = [
  { label: 'Team BIR', href: '/' },
  { label: 'BIR Materials', href: siteUrl('materials') },
  { label: 'BIR Luxury Landing', href: siteUrl('luxury') },
  { label: 'BIR Transport', href: siteUrl('transport') },
  { label: 'BIR Developments', href: siteUrl('developments') },
  { label: 'BIR Travel Plaza', href: siteUrl('travel') },
]

export function Footer({ config }: Props) {
  return (
    <footer style={{ background: '#0b101a', position: 'relative', zIndex: 1 }}>
      <div className="gold-line" />
      <div className="container-site py-20 grid grid-cols-1 md:grid-cols-3 gap-14">
        <div>
          <Logo className="mb-6" />
          <p className="font-body text-sm text-white/35 leading-relaxed max-w-xs">{config.description}</p>
        </div>

        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-accent mb-5">Navigation</p>
          <ul className="space-y-3">
            {config.nav.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-white/40 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-accent mb-5">The Family</p>
          <ul className="space-y-3">
            {FAMILY_LINKS.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-white/40 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/25">
            © {new Date().getFullYear()} Team BIR. All rights reserved.
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/25">
            Powered by{' '}
            <a href="https://zectron.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Zectron Industries
            </a>
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/25">
            Knoxville / Dandridge, Tennessee
          </p>
        </div>
      </div>
    </footer>
  )
}
