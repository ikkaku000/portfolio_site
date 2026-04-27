import type { MetadataRoute } from "next";

const SITE_URL = "https://portfoliosite-six-gamma.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
