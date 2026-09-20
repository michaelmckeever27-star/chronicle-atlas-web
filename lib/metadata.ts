import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chronicleatlas.app",
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
          width: 2400,
          height: 1260,
          alt: "England 871 by Chronicle Atlas — Medieval England. Made fascinating. Explore 871–1399.",
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
