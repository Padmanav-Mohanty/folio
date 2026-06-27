import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Folio — Your Personal Library",
  description:
    "Folio is a personal library where authors share their books and readers find their next obsession — free, forever.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16" style={{ background: "var(--offwhite)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
