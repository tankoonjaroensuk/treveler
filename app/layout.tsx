import './globals.css'
import { ReactNode } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export const metadata = {
  title: 'Traveler Thailand',
  description: 'Destination lists Stay , Eat & Explore Food & Beverage Wellness & Spa Accommodation Healthcare & Beauty Car & Bike Rental Shopping Properties Worth-seeing Education Profession...',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>

        <Navbar />

        <main className='flex-1 p-4'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
