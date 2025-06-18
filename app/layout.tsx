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
  title:
    "Šlep služba Laki Beograd Zvezdara | Brza i pouzdana pomoć na putu 24/7",
  description:
    "Brza i povoljna šlep služba na Zvezdari. Dolazak za 10-15 minuta bilo gde u Beogradu. Dostupni 24/7. Pozovite odmah!",
  icons: {
    icon: "/tow-truck_18042919.png",
    apple: "/apple-touch-icon.png",
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
    canonical: "https://www.",
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
