'use client'
// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./(dashboard)/_components/Header";
import { ThemeProvider } from "./(dashboard)/_components/ThemeContext";

// import { motion } from "motion/react"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Portfolio design web developer dev blockchain tech technology ai ml",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" >
        <body className="flex flex-col items-center justify-center gap-8  py-12 bg-white dark:bg-black  text-black dark:text-white w-full ">
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
