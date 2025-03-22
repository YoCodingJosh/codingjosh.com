import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodingJosh",
  description: "Personal website of Josh, a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          {children}
          <footer className="row-start-3 flex flex-col gap-4 flex-wrap items-center justify-center">
            <span>
              Copyright © {new Date().getFullYear()} Josh Kennedy (a.k.a.
              CodingJosh)
            </span>
            <div>
              <a
                href="https://github.com/YoCodingJosh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <span className="px-2">&bull;</span>
              <Link href="/donate" className="hover:underline">
                Buy Me a Coffee or Pizza
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
