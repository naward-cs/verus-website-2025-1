import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { geomanist } from './fonts'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'The Internet of Value | Verus',
  description: 'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geomanist.variable}`}>
      <body className={geomanist.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}