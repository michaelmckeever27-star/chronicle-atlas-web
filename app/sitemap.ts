import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = [
  "",
  "/england-871",
  "/privacy",
  "/terms-of-use",
  "/support",
  "/account-deletion",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date("2026-09-04"),
    changeFrequency: index < 2 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.5,
  }));
}
