import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Yuya',
    default: 'Saving | Yuya',
  },
  description: 'Saving Money by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-mono bg-slate-950 text-slate-400'>{children}</body>
    </html>
  )
}
