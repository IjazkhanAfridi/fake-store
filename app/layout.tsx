'use client'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import StoreProvider from './StoreProvider'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })
const MontserratFont = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.className} px-[140px] pt-11`}>
        <Suspense fallback={<div>Loading...</div>}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  )
}
