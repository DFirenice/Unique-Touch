import type { Metadata } from "next"
import type { Viewport } from 'next'
import { Work_Sans, Roboto_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

// variable, subsets
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Unique Touch",
  description: "Discover the relaxation with Unique Touch 4 Wellness",
}
 
export const viewport: Viewport = {
  width: 'device-width',
  // maximumScale: 1,
  minimumScale: 1,
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${robotoMono.variable} antialiased m-0 p-0`}
      >
        {children}
        {/* Ｎｏｔｅ： Add visible time-left progression bar */}
        <Toaster
          position="top-center"
          duration={6500}
        />
      </body>
    </html>
  )
}