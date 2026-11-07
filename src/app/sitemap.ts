import type { MetadataRoute } from "next";

const SITE = "https://www.nexoragrowth.es";

/* Páginas públicas indexables. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/agendar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/casos/raquel`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/casos/trendspot`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/casos/traslap`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/webs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/privacidad`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
