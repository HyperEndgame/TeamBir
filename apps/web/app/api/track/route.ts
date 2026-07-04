import { NextRequest, NextResponse } from 'next/server'
import { insertPageView } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { path, referrer } = await request.json()
    if (typeof path !== 'string' || !path.startsWith('/') || path.length > 200 || path.startsWith('/admin')) {
      return new NextResponse(null, { status: 204 })
    }
    insertPageView(path, typeof referrer === 'string' ? referrer.slice(0, 300) : null)
  } catch {
    // ignore malformed beacons
  }
  return new NextResponse(null, { status: 204 })
}
