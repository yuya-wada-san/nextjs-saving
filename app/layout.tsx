import type { Metadata } from 'next'
import './globals.css'
import NextAuthProvider from '@/app/providers/NextAuth'
import Navbar from '@/app/ui/navbar'

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
          <Navbar />
        </NextAuthProvider>
        {children}
      </body>
    </html>
  )
}
