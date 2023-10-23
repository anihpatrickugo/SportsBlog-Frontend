
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/main/Header/index'

const montsarrat = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montsarrat.className} antialiased`}>
        <Header />
        {children}
        </body>
    </html>
  )
}
