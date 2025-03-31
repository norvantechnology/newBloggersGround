import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../client/src/index.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Bloggers Ground | Tech Blogging Platform',
    template: '%s | Bloggers Ground'
  },
  description: 'A modern platform for tech enthusiasts, creators, and knowledge seekers to discover, learn, and share.',
  keywords: ['blog', 'technology', 'programming', 'web development', 'tech news', 'tutorials'],
  authors: [{ name: 'Bloggers Ground Team' }],
  creator: 'Bloggers Ground',
  publisher: 'Bloggers Ground',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bloggersground.com',
    title: 'Bloggers Ground | Tech Blogging Platform',
    description: 'A modern platform for tech enthusiasts, creators, and knowledge seekers to discover, learn, and share.',
    siteName: 'Bloggers Ground',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloggers Ground | Tech Blogging Platform',
    description: 'A modern platform for tech enthusiasts, creators, and knowledge seekers to discover, learn, and share.',
    creator: '@bloggersground',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}