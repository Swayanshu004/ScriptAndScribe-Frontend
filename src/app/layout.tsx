import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
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
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="w-screen absolute z-10 top-0">
          <Navbar />
        </div>
        <div className="w-screen pt-16">
          {children}
        </div>
        <div className="w-screen">
          <Footer />
        </div>
      </body>
    </html>
  );
}
