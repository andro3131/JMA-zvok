import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JMA-ZVOK | Profesionalno ozvočenje dogodkov",
  description:
    "Profesionalno ozvočenje in video snemanje za poroke, praznovanja, občinske prireditve in več. Družinski pristop z osebno odgovornostjo za kakovost. Dolenjska in celotna Slovenija.",
  keywords: [
    "ozvočenje",
    "zvok",
    "prireditve",
    "poroke",
    "ozvočenje dogodkov",
    "video snemanje",
    "Dolenjska",
    "Slovenija",
    "JMA-ZVOK",
  ],
  openGraph: {
    title: "JMA-ZVOK | Profesionalno ozvočenje dogodkov",
    description:
      "Profesionalno ozvočenje in video snemanje za poroke, praznovanja, občinske prireditve in več.",
    type: "website",
    locale: "sl_SI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
