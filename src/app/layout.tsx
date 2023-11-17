"use client"

import {useState} from 'react'
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

  const [mobileToggled, setMobileToggled] = useState(false)
 
  return (
    
      <html lang="en">
      <body className={`${montsarrat.className} antialiased scroll-smooth bg-grey-ultraLight ${mobileToggled && 'overflow-y-hidden'}`}>
         <Header mobileMenu={{mobileToggled, setMobileToggled}}/>
         {children}
         <Footer/>
         <CookieConsent/>
        </body>
     </html>


    
    
  )
}
