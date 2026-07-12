import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySession, COOKIE_NAME } from '@/lib/session'

// In production: materials.teambir.com → rewrite /something → /materials/something
// In demo mode: /materials/... served directly (no rewrite needed; route group handles it)
const SITE_SUBDOMAINS = new Set(['materials', 'luxury', 'transport', 'developments', 'travel', 'fleet'])

const ADMIN_PUBLIC_PATHS = new Set(['/admin/login', '/api/admin/login'])

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    if (ADMIN_PUBLIC_PATHS.has(pathname)) return NextResponse.next()
    const ok = await verifySession(request.cookies.get(COOKIE_NAME)?.value)
    if (ok) return NextResponse.next()
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

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
  matcher: ['/admin/:path*', '/api/admin/:path*', '/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
