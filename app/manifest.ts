import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chronicle Atlas",
    short_name: "Chronicle Atlas",
    description:
      "Publisher of England 871, an immersive guide to medieval England from 871 to 1399.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F4FA",
    theme_color: "#3648DB",
    icons: [
      {
        src: "/brand/atlas-seal-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
