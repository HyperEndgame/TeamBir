import type { SiteKey } from './site-config'

const SUBDOMAIN_MAP: Record<string, SiteKey> = {
  materials: 'materials',
  luxury: 'luxury',
  transport: 'transport',
  developments: 'developments',
  travel: 'travel',
  teambir: 'main',
  www: 'main',
  bir: 'main',
}

export function getSiteKey(host: string): SiteKey {
  const subdomain = host.split('.')[0].toLowerCase()
  return SUBDOMAIN_MAP[subdomain] ?? 'main'
}
