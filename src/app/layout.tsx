import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { DocumentProvider } from '@/contexts/DocumentContext'
import SideBar from '@/components/SideBar/SideBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amber Docs',
  description: 'Documentation for Amber programming language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <DocumentProvider>
            <nav>
              <Link href="/">Home</Link>
            </nav>
            <main>
              <div className='left'>
                  <SideBar />
              </div>
              <div className='right'>
                  {children}
              </div>
            </main>
          </DocumentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
