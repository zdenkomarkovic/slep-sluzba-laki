import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "Šlep služba Purić 032 Čačak",
  description:
    "Šlep služba Purić 032 Čačak – brza i pouzdana vučna služba dostupna 24/7. Pozovite nas za siguran transport vozila!",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: [
    "šlep služba Čačak",
    "vučna služba Čačak",
    "šlep Purić 032",
    "pomoć na putu Čačak",
    " prevoz vozila Čačak",
    "šlepanje automobila",
    "slep cacak",
  ],
  alternates: {
    canonical: "https://www.slep-cacak.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
