import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";

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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio design web developer dev blockchain tech technology ai ml",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row gap-8 md:gap-x-32 md:items-center py-12 p-5 bg-zinc-400 h-screen md:px-64 w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
