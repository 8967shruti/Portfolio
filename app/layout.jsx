import React from "react"
import  { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shruti Gupta - Portfolio",
  description: "Fullstack Developer Portfolio - Passionate about building seamless, user-friendly web applications",
  keywords: ["Shruti Gupta", "Fullstack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Shruti Gupta" }],
  creator: "Shruti Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Shruti Gupta - Fullstack Developer Portfolio",
    description: "Passionate about building seamless, user-friendly web applications",
    siteName: "Shruti Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shruti Gupta - Fullstack Developer Portfolio",
    description: "Passionate about building seamless, user-friendly web applications",
    creator: "@shrutigupta200",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
