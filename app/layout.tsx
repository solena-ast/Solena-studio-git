import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOLENA | Legacy Institution',
  description: 'We build gravity for culture, capital, and legacy. A creative, strategic, and intelligent luxury growth studio.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}