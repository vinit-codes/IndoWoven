import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "IndoWoven | Bulk Eco-Friendly Canvas Bags & Kits for Businesses",
  description:
    "IndoWoven supplies high-quality, sustainable canvas school bags and kits for businesses. Order customizable eco-friendly bags in bulk to uplift your brand responsibly.",
  keywords:
    "IndoWoven, bulk canvas bags, eco-friendly school bags, sustainable kits, custom canvas bags, corporate gifting, branded eco bags, wholesale eco-friendly bags, B2B eco bags",
  authors: [{ name: "IndoWoven" }],
  metadataBase: new URL("https://www.indowoven.com"),
  openGraph: {
    title: "IndoWoven | Bulk Eco-Friendly Canvas Bags & Kits for Businesses",
    description:
      "Buy sustainable, customizable canvas school bags and kits in bulk from IndoWoven. Perfect for corporate gifting and branding with an eco-friendly touch.",
    url: "https://www.indowoven.com",
    siteName: "IndoWoven",
    images: [
      {
        url: "https://www.indowoven.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndoWoven eco-friendly canvas bags and kits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndoWoven | Bulk Eco-Friendly Canvas Bags & Kits for Businesses",
    description:
      "Sustainable, bulk custom canvas bags and kits for businesses looking to uplift their brand while caring for the planet.",
    images: ["https://www.indowoven.com/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* SEO essentials */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#4a6741" />

        {/* ✅ Structured Data: Organization schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IndoWoven",
              url: "https://www.indowoven.com",
              logo: "https://www.indowoven.com/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/indowoven",
                "https://www.instagram.com/indowoven",
              ],
            }),
          }}
        />
      </head>

      <body className="flex flex-col min-h-screen antialiased text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
