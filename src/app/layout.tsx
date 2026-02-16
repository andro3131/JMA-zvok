import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JMAzvok | Profesionalno ozvočenje dogodkov",
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
    "JMAzvok",
  ],
  icons: {
    icon: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771280487/fav-jma_txtgew.png",
    apple: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771280487/fav-jma_txtgew.png",
  },
  openGraph: {
    title: "JMAzvok | Profesionalno ozvočenje dogodkov",
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
