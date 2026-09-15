import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const canonicalUrl = 'https://azino777-6casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: 'Азино777 официальный сайт — мобильный вход и гид по казино',
  description: 'Азино777 официальный сайт: понятный гид по входу, мобильной версии Азино мобиль, играм, платежам, безопасности и ответственному подходу для совершеннолетних пользователей.',
  generator: 'v0.app',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: canonicalUrl,
    siteName: 'Azino777 Guide',
    title: 'Азино777 официальный сайт — мобильный вход и гид по казино',
    description: 'Навигация по Azino777: мобильная версия, форматы игр, платежи и правила ответственного подхода.',
    images: [{ url: '/azino777-hero.png', width: 1600, height: 900, alt: 'Игровой стол Azino777' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Азино777 официальный сайт — гид по платформе',
    description: 'Мобильный вход, игровые форматы, безопасность и FAQ.',
    images: ['/azino777-hero.png'],
  },
  icons: { icon: '/azino777-favicon.svg', apple: '/azino777-favicon.svg' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#151515', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-[#151515]">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
