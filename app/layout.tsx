import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Auburn — Inspired Thai Cuisine',
  description: 'Voted New York’s Best Thai Restaurant. An authentic, modern destination dining experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightest text-darkest min-h-screen flex flex-col antialiased selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
