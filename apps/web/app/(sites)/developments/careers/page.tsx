import type { Metadata } from 'next'
import { CareersSection } from '@/components/sections/CareersSection'
import { SITE_CONFIGS } from '@/lib/site-config'
import { CAREERS } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers | BIR Developments — Knoxville, TN',
  description: 'Open driver and labor positions at BIR Developments in Knoxville, TN. Apply online today.',
  alternates: { canonical: 'https://developments.teambir.com/careers' },
}

export default function DevelopmentsCareersPage() {
  return <CareersSection siteKey="developments" siteName={SITE_CONFIGS.developments.name} jobs={CAREERS.developments ?? []} />
}
