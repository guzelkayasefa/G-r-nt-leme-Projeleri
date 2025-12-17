import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://roof.community'),
  title: {
    default: 'Roof | Etkinlikleri keşfet, topluluğa katıl',
    template: '%s | Roof'
  },
  description: 'Roof, şehirde sosyal etkinlikler keşfetmek ve yeni arkadaşlıklar kurmak isteyenler için kurulan topluluk girişimi.',
  openGraph: {
    title: 'Roof | Sosyal topluluğa katıl',
    description: 'Roof ile şehirdeki özel buluşmaları keşfet, katılımını paylaş ve yeni arkadaşlarla tanış.',
    url: 'https://roof.community',
    siteName: 'Roof',
    images: [
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: 'Roof tanıtım görseli'
      }
    ],
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof',
    description: 'Roof ile sosyal etkinlikleri keşfet, topluluğa katıl',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[#030712] text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
