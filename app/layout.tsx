import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import MyFooter from '@/components/Footer';
import { ThemeModeScript } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodingJosh',
  description: 'personal website for CodingJosh, a software engineer',
};

export const runtime = 'edge';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Nav />
        <div className="flex-grow">
          {children}
        </div>
        <MyFooter />
      </body>
    </html>
  );
};
