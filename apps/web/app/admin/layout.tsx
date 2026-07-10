import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const anthropic = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-anthropic' })

export const metadata: Metadata = {
  title: 'Admin | Team BIR',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className={`min-h-screen bg-bg text-text font-body ${anthropic.variable}`}>{children}</div>
}
