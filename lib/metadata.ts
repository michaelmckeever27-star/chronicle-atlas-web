import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chronicleatlas.com",
);

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      siteName: "Chronicle Atlas",
      title: `${title} | Chronicle Atlas`,
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
      title: `${title} | Chronicle Atlas`,
      description,
      images: ["/og.png"],
    },
  };
}
