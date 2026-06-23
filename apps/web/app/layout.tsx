import type { Metadata } from 'next'
import { Barlow_Condensed, Barlow, JetBrains_Mono } from 'next/font/google'
import { ConstellationBg } from '@/components/sections/ConstellationBg'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Team BIR', template: '%s | Team BIR' },
  description: 'Team BIR is a family of Tennessee-based companies spanning construction, transport, real estate, and hospitality — founded by Jimmy Bir Singh.',
  metadataBase: new URL('https://teambir.com'),
  icons: {
    icon: '/images/mainlogo-gold.png',
    apple: '/images/mainlogo-gold.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable} ${jetbrains.variable}`}>
      <body>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ConstellationBg />
        </div>
        {children}
      </body>
    </html>
  )
}
