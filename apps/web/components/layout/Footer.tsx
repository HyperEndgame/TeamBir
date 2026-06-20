import Link from 'next/link'
import type { SiteConfig } from '@/lib/site-config'
import { siteUrl } from '@/lib/demo'

interface Props {
  config: SiteConfig
}

export function Footer({ config }: Props) {
  return (
    <footer className="bg-[#080f14] border-t border-border mt-auto">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-3xl tracking-widest text-text mb-3">{config.name}</p>
          <p className="text-muted text-sm leading-relaxed">{config.description}</p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">Navigation</p>
          <ul className="space-y-2">
            {config.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted text-sm hover:text-text transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">The Family</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-text transition-colors">Team BIR</Link></li>
            <li><Link href={siteUrl('materials')} className="hover:text-text transition-colors">BIR Materials</Link></li>
            <li><Link href={siteUrl('luxury')} className="hover:text-text transition-colors">BIR Luxury Landing</Link></li>
            <li><Link href={siteUrl('transport')} className="hover:text-text transition-colors">BIR Transport</Link></li>
            <li><Link href={siteUrl('developments')} className="hover:text-text transition-colors">BIR Developments</Link></li>
            <li><Link href={siteUrl('travel')} className="hover:text-text transition-colors">BIR Travel Plaza</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-mono tracking-widest">
            © {new Date().getFullYear()} Team BIR. All rights reserved.
          </p>
          <p className="text-muted text-xs font-mono">
            Knoxville / Dandridge, Tennessee
          </p>
        </div>
      </div>
    </footer>
  )
}
