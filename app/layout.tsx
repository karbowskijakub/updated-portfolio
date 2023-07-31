import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Jakub Karbowski',
  description: 'Strony i aplikacje internetowe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zxx">
      <body className='relative'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
