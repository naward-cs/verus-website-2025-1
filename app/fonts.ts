import localFont from 'next/font/local'

export const geomanist = localFont({
  src: [
    {
      path: '../public/fonts/geomanist-regular.woff2',
      weight: '400',
      style: 'normal',
      preload: true
    },
    {
      path: '../public/fonts/geomanist-book.woff2',
      weight: '450',
      style: 'normal',
      preload: false
    },
    {
      path: '../public/fonts/geomanist-medium.woff2',
      weight: '500',
      style: 'normal',
      preload: false
    }
  ],
  display: 'swap',
  variable: '--font-geomanist',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
})