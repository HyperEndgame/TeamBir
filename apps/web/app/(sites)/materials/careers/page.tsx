import type { Metadata } from 'next'
import { CareersSection } from '@/components/sections/CareersSection'
import { SITE_CONFIGS } from '@/lib/site-config'
import { CAREERS } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers | BIR Materials — Knoxville, TN',
  description: 'Open driver and labor positions at BIR Materials in Knoxville, TN. Apply online today.',
  alternates: { canonical: 'https://materials.teambir.com/careers' },
}

export default function MaterialsCareersPage() {
  return <CareersSection siteKey="materials" siteName={SITE_CONFIGS.materials.name} jobs={CAREERS.materials ?? []} />
}
