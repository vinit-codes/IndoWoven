import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.indowoven.com/",
      lastModified,
      changeFrequency: "daily",
      priority: 1.0, // Homepage - most important
    },
    {
      url: "https://www.indowoven.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6, // About pages don’t change often
    },
    {
      url: "https://www.indowoven.com/products",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9, // Frequent updates & important for traffic
    },
    {
      url: "https://www.indowoven.com/contact",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4, // Rarely changes, low priority
    },
  ];
}
