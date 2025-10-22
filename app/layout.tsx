import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Hunt 3D: Room of ILMAN BAIHAQI",
  description: "A fun 2-level interactive game: Find hidden objects in 3D room + answer frontend developer quiz questions. Built with Next.js 14, React Three Fiber & TailwindCSS. Bilingual (EN/ID), mobile-friendly!",
  keywords: ["3D game", "Next.js", "React Three Fiber", "quiz game", "frontend developer", "educational game", "bilingual", "WebGL"],
  authors: [{ name: "ILMAN BAIHAQI" }],
  creator: "ILMAN BAIHAQI",
  icons: {
    icon: '/icon.svg',
  },
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
        {children}
      </body>
    </html>
  );
}
