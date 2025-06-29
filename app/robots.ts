import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // ✅ Adjust if you have real admin/private routes
    },
    sitemap: "https://www.indowoven.com/sitemap.xml",
  };
}
