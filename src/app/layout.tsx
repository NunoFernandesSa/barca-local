import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.localnabarca.pt"),
  title: "Local na Barca | Anuário de Produtores Artesanais",
  description:
    "Descubra os melhores produtores locais de Ponte da Barca e arredores. Anuário completo com produtos artesanais, queijos, vinhos e artesanato da região do Minho.",

  // openGraph for social midia
  openGraph: {
    title: "Local na Barca",
    description:
      "Conecte-se com os melhores produtores artesanais da região do Minho. Descubra produtos locais autênticos e apoie a economia local.",
    url: "https://www.localnabarca.pt",
    siteName: "Local na Barca",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "https://www.localnabarca.pt/og-image.jpg", // Adiciona uma imagem representativa
        width: 1200,
        height: 630,
        alt: "Mapa dos produtores locais de Ponte da Barca e arredores",
      },
    ],
  },

  keywords: [
    "produtores locais",
    "minho",
    "ponte da barca",
    "produtos artesanais",
    "queijo artesanal",
    "vinho verde",
    "artesanato minho",
    "produtos regionais",
    "agricultura familiar",
    "feiras locais",
    "economia local",
    "produtores portugal",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.localnabarca.pt",
    languages: {
      "pt-PT": "https://www.localnabarca.pt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
