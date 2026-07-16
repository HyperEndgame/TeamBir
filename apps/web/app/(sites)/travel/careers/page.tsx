import type { Metadata } from 'next'
import { CareersSection } from '@/components/sections/CareersSection'
import { SITE_CONFIGS } from '@/lib/site-config'
import { CAREERS } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers | BIR Travel Plaza — Dandridge, TN',
  description: 'Open positions at BIR Travel Plaza and Jack in the Box in Dandridge, TN. Apply online today.',
  alternates: { canonical: 'https://travel.teambir.com/careers' },
}

export default function TravelCareersPage() {
  return <CareersSection siteKey="travel" siteName={SITE_CONFIGS.travel.name} jobs={CAREERS.travel ?? []} />
}
