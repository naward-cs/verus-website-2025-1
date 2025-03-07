import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { geomanist } from './fonts'

export const metadata: Metadata = {
  title: 'Verus - The Internet of Value',
  description: 'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geomanist.variable}`}>
      <body className={geomanist.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}