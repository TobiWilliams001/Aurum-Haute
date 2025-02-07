import "./globals.css"
import { Hammersmith_One, Montserrat } from "next/font/google"
import type React from "react"
import Script from "next/script"
import { ThemeProvider } from "./components/ThemeProvider"

const hammersmithOne = Hammersmith_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hammersmith",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Aurum Haute - Luxury Redefined",
  description: "Exclusive velvet handbags for the modern woman",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hammersmithOne.variable} ${montserrat.variable}`}>
      <body className={`font-sans antialiased bg-texture`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

