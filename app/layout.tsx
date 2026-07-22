import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const title = "Chronicle Atlas | History, vividly told";
const description =
  "Immersive history apps, guided courses and interactive storytelling—beginning with England 871, covering medieval England from 871 to 1399.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | Chronicle Atlas",
  },
  description,
  applicationName: "Chronicle Atlas",
  category: "education",
  keywords: [
    "history apps",
    "England 871",
    "medieval England 871–1399",
    "Alfred the Great to Richard II",
    "interactive history",
    "history courses",
  ],
  authors: [{ name: "Chronicle Atlas Ltd" }],
  creator: "Chronicle Atlas Ltd",
  publisher: "Chronicle Atlas Ltd",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Chronicle Atlas",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Chronicle Atlas — England 871, covering medieval England from 871 to 1399.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chronicle Atlas Ltd",
  url: siteUrl.toString(),
  email: "hello@chronicleatlas.app",
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
