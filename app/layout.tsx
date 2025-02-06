import "./globals.css"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import type React from "react"
import Script from "next/script"
import { ThemeProvider } from "./components/ThemeProvider"

// const cormorantGaramond = Cormorant_Garamond({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   display: "swap",
// })

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400', 
});

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
    <html lang="en" className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
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

