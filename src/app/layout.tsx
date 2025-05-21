


import './globals.css';



import type { Metadata } from 'next';



import { env } from '@/configs/env';
import NextTopLoader from 'nextjs-toploader'

import {DevUItools} from '@/components/devTools'
import {Header} from '@/components/header'
import {ThemeProvider} from '@/components/providers/next_theme_provider'

import {geomanist} from './fonts'

export const metadata: Metadata = {
  title: 'The Internet of Value | Verus',
  description:
    'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geomanist.variable}`}
      suppressHydrationWarning
    >
      <body className={`${geomanist.className} antialiased`}>
        <NextTopLoader showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}

          <DevUItools />
        </ThemeProvider>
      </body>
    </html>
  )
}