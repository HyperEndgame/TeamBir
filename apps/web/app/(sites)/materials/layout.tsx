import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIGS } from '@/lib/site-config'
import { DEMO } from '@/lib/demo'

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Nav config={SITE_CONFIGS.materials} pathPrefix={DEMO ? '/materials' : ''} />
    {children}
    <Footer config={SITE_CONFIGS.materials} />
  </>
}
