export const DEMO = (process.env.NEXT_PUBLIC_DEMO_MODE ?? 'true') !== 'false'

const SITE_URLS: Record<string, string> = {
  main: '/',
  materials: DEMO ? '/materials' : 'https://materials.teambir.com',
  luxury: DEMO ? '/luxury' : 'https://luxury.teambir.com',
  transport: DEMO ? '/transport' : 'https://transport.teambir.com',
  developments: DEMO ? '/developments' : 'https://developments.teambir.com',
  travel: DEMO ? '/travel' : 'https://travel.teambir.com',
}

export function siteUrl(key: string): string {
  return SITE_URLS[key] ?? '/'
}

export function subPath(siteKey: string, path: string): string {
  return DEMO ? `/${siteKey}${path}` : path
}
