import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIGS } from '@/lib/site-config'
import { DEMO } from '@/lib/demo'

export default function TransportLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Nav config={SITE_CONFIGS.transport} pathPrefix={DEMO ? '/transport' : ''} />
    {children}
    <Footer config={SITE_CONFIGS.transport} pathPrefix={DEMO ? '/transport' : ''} />
  </>
}
