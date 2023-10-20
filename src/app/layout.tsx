import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const quicksand = localFont({ 
  src: [
    {
      path: '../../public/fonts/Quicksand-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Quicksand-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Quicksand-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Quicksand-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/Quicksand-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-quicksand'
 })

export const metadata: Metadata = {
  title: 'Alfons Stoltz',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.variable}>{children}</body>
    </html>
  )
}
