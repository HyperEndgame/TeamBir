import type { Metadata } from 'next'
import { CareersSection } from '@/components/sections/CareersSection'
import { SITE_CONFIGS } from '@/lib/site-config'
import { CAREERS } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers | BIR Transport — Knoxville, TN',
  description: 'CDL and non-CDL driver positions at BIR Transport in Knoxville, TN. Apply online today.',
  alternates: { canonical: 'https://transport.teambir.com/careers' },
}

export default function TransportCareersPage() {
  return <CareersSection siteKey="transport" siteName={SITE_CONFIGS.transport.name} jobs={CAREERS.transport ?? []} />
}
