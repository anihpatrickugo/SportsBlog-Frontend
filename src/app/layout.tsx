
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/main/Header/index'
import Footer from '@/components/main/Footer/index'
import { CookieConsent } from '@/components/common/Cookies'

const montsarrat = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montsarrat.className} antialiased bg-grey-ultraLight`}>
         <Header />
         {children}
         <Footer/>
         <CookieConsent/>
        </body>
    </html>
  )
}
