import "./globals.css"
import "./name-effect.css"
import { Inter, Playfair_Display, Bebas_Neue } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata = {
  title: "Reuben Adkins - Guitarist",
  description: "50 years of musical journey - guitarist, performer, and musical storyteller",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  )
}
