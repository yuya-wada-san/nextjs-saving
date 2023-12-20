import type { Metadata } from 'next'
import './globals.css'
import NextAuthProvider from './providers/NextAuth'

export const metadata: Metadata = {
  title: {
    template: '%s | Yuya',
    default: 'Expense Mng Tool | Yuya',
  },
  description: 'Expense Mnagement Tool by next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
