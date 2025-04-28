import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Wild & Woven | Eco-Friendly Custom Bags",
  description:
    "Sustainable, customizable bags for businesses looking to reduce environmental impact while elevating their brand.",
  keywords:
    "eco bags, sustainable bags, custom bags, eco-friendly, business bags, wholesale bags",
  authors: [{ name: "Wild & Woven" }],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Wild & Woven | Eco-Friendly Custom Bags",
    description:
      "Sustainable, customizable bags for businesses looking to reduce environmental impact while elevating their brand.",
    url: "https://yourdomain.com",
    siteName: "Wild & Woven",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wild & Woven eco-friendly bags",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild & Woven | Eco-Friendly Custom Bags",
    description:
      "Sustainable, customizable bags for businesses looking to reduce environmental impact while elevating their brand.",
    images: ["https://yourdomain.com/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a6741" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
