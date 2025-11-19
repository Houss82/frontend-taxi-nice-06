import { getAllPostSlugs } from "@/lib/blog";

const baseUrl = "https://taxi-nice-06.com";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/taxi-nice", priority: 1.0, changeFrequency: "weekly" },
    { path: "/reservation", priority: 0.9, changeFrequency: "weekly" },
    {
      path: "/services/transferts-aeroport",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/vsl", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/services/arrivees-destinations",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/services/flotte-recente",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/services/evenements-mariages",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/services/transferts-evenements",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/services/excursions-decouvertes",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    { path: "/services/van-premium", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/partenaires", priority: 0.6, changeFrequency: "monthly" },
    { path: "/secteurs", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/nice", priority: 0.9, changeFrequency: "weekly" },
    { path: "/secteurs/nice-gare", priority: 0.8, changeFrequency: "weekly" },
    { path: "/secteurs/nice-centre-ville", priority: 0.8, changeFrequency: "weekly" },
    { path: "/secteurs/monaco", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/cannes", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/antibes", priority: 0.6, changeFrequency: "weekly" },
    { path: "/plan-du-site", priority: 0.5, changeFrequency: "monthly" },
    { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
    {
      path: "/politique-confidentialite",
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getAllPostSlugs().map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}

