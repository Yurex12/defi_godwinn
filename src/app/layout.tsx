import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google'; // Changed Geist to Inter
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DEFI_GODWINN | Content Creator',
  description: 'Portfolio of DEFI_GODWINN - Content Creator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased font-sans`} // Added font-sans
      >
        <Header />
        <main className='mx-auto px-6 mt-30 md:mt-40 container w-full'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
