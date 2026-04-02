import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mujtabahassan.com'),
  title: {
    default: 'Mujtaba Hassan | Videographer & Visual Storyteller',
    template: '%s | Mujtaba Hassan',
  },
  description:
    'Freelance videographer and video editor with 2+ years of experience. Cinematic filming, editing, drone footage, and content production based in Pakistan.',
  keywords: [
    'videographer',
    'video editor',
    'Pakistan',
    'cinematographer',
    'freelance',
    'drone footage',
    'DJI Mavic',
    'Sony A3',
    'content creation',
  ],
  authors: [{ name: 'Mujtaba Hassan' }],
  creator: 'Mujtaba Hassan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mujtabahassan.com',
    siteName: 'Mujtaba Hassan',
    title: 'Mujtaba Hassan | Visual Storyteller',
    description:
      'Cinematic videography and video editing. Available for freelance projects.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mujtaba Hassan — Videographer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mujtaba Hassan | Visual Storyteller',
    description: 'Freelance videographer. Cinematic filming, editing, drone footage.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[var(--color-gold)] focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
