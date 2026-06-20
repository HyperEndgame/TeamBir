import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIGS } from '@/lib/site-config'

export default function DevelopmentsLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Nav config={SITE_CONFIGS.developments} />
    {children}
    <Footer config={SITE_CONFIGS.developments} />
  </>
}
