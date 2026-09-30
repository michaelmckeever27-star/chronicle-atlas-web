import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chronicle Atlas",
    short_name: "Chronicle Atlas",
    description:
      "Publisher of England 871, an immersive guide to medieval England from 871 to 1485.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F4FB",
    theme_color: "#3844E7",
    icons: [
      {
        src: "/brand/chronicle-atlas-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/chronicle-atlas-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
