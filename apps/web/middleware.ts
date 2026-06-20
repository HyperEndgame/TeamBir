import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In production: materials.teambir.com → rewrite /something → /materials/something
// In demo mode: /materials/... served directly (no rewrite needed; route group handles it)
const SITE_SUBDOMAINS = new Set(['materials', 'luxury', 'transport', 'developments', 'travel'])

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const subdomain = host.split('.')[0].toLowerCase()
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

  if (!isDemo && SITE_SUBDOMAINS.has(subdomain)) {
    const url = request.nextUrl.clone()
    const incomingPath = url.pathname === '/' ? '' : url.pathname
    url.pathname = `/${subdomain}${incomingPath}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
