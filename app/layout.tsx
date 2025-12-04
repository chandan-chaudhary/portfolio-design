import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./(dashboard)/_components/Header";
import { ThemeProvider } from "./(dashboard)/_components/ThemeContext";

// import { motion } from "motion/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio design web developer dev blockchain tech technology ai ml",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen w-full antialiased bg-gradient-to-br from-appGradient-from via-appGradient-via to-appGradient-to">
        <ThemeProvider>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
            <Header />
            <main className="w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
