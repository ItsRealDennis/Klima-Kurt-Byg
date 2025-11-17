import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klima Kurt Byg | Byggeri med Omtanke for Fremtiden",
  description:
    "Vi kombinerer kvalitetshåndværk med bæredygtige løsninger der holder i mange år. Vores fokus er at levere solide resultater med minimal miljøpåvirkning.",
  keywords: [
    "bæredygtigt byggeri",
    "grøn byggevirksomhed",
    "kvalitetshåndværk",
    "miljøvenligt byggeri",
    "Danmark",
    "Klima Kurt",
  ],
  authors: [{ name: "Klima Kurt Byg" }],
  openGraph: {
    type: "website",
    locale: "da_DK",
    title: "Klima Kurt Byg | Byggeri med Omtanke for Fremtiden",
    description:
      "Vi kombinerer kvalitetshåndværk med bæredygtige løsninger der holder i mange år.",
    siteName: "Klima Kurt Byg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
