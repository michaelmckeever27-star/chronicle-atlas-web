import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const fredoka = localFont({
  src: "../public/fonts/fredoka/fredoka-medium-latin.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-heading",
  display: "swap",
});
const nunitoSans = localFont({
  src: "../public/fonts/nunito-sans/nunito-sans-latin.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-body",
  display: "swap",
});

const title = "Chronicle Atlas | England 871 for iPhone";
const description =
  "Step inside medieval England with England 871. Explore illustrated stories, people, places, a timeline and an interactive map from 871 to 1399.";

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
    "medieval history stories",
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
        width: 2400,
        height: 1260,
        alt: "England 871 by Chronicle Atlas — Medieval England. Made fascinating. Explore 871–1399.",
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
  logo: new URL("/brand/atlas-seal-icon.png", siteUrl).toString(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${fredoka.variable} ${nunitoSans.variable}`}>
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
