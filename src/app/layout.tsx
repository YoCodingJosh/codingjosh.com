import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-4 sm:p-8 border-1 border-dashed border-gray-400 w-full sm:w-auto">
              <Navbar />
              {children}
            </main>
            <footer className="mt-7 row-start-3 flex flex-col gap-4 flex-wrap items-center justify-center">
              <span>
                Copyright &copy; {new Date().getFullYear()} Josh Kennedy (a.k.a.
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
                  Buy Me a Tea or Pizza
                </Link>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
