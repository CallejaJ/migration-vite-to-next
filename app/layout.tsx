import type React from "react"
import "./globals.css"
import Navbar from "./components/Navbar"
import { Inter } from "next/font/google"

// Configurar la fuente Inter con todos los pesos necesarios
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Memento ToolKit",
  description: "The All-in-One Web3 Toolkit to Elevate Your Business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
