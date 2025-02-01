import type React from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-r from-pink-100 to-white">
          <header className="bg-pink-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-3xl font-bold text-pink-700">
                MummaCare
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/symptoms" className="text-pink-700 hover:text-pink-900">
                      Symptoms
                    </Link>
                  </li>
                  <li>
                    <Link href="/weekly" className="text-pink-700 hover:text-pink-900">
                      Weekly
                    </Link>
                  </li>
                  <li>
                    <Link href="/library" className="text-pink-700 hover:text-pink-900">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-pink-700 hover:text-pink-900">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/emergency" className="text-pink-700 hover:text-pink-900">
                      Emergency
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="container mx-auto mt-8 p-4">{children}</main>
          <footer className="bg-pink-200 p-4 mt-12">
            <div className="container mx-auto text-center text-pink-700">
              &copy; 2023 MummaCare. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

