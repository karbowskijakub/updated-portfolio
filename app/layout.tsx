import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jakub Karbowski',
  description: 'Strony internetowe w ludzkim języku',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className='relative'>
        {children}
        </body>
    </html>
  )
}
