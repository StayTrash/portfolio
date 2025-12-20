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
  title: "Shubham - Portfolio",
  description: "Creative Full Stack Developer portfolio showcasing projects and skills",
  openGraph: {
    title: "Shubham - Portfolio",
    description: "Creative Full Stack Developer portfolio showcasing projects and skills",
    images: [
      {
        url: "/image/og.png",
        width: 1200,
        height: 630,
        alt: "Shubham - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham - Portfolio",
    description: "Creative Full Stack Developer portfolio showcasing projects and skills",
    images: ["/image/og.png"],
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
