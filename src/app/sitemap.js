import { getAllPostSlugs, getAllPosts } from "@/lib/blog";

const baseUrl = "https://taxi-nice-06.com";

/**
 * Convertit une date frontmatter (date ou updatedAt) en lastModified sitemap.
 * - Pas de new Date() « maintenant » au build
 * - Rejette dates invalides ou futures
 */
function toSitemapLastModified(raw) {
  if (raw == null || raw === "") return undefined;
  const value = typeof raw === "string" ? raw.trim() : raw;
  const parsed = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;

  const today = new Date();
  const parsedDay = Date.UTC(
    parsed.getUTCFullYear(),
    parsed.getUTCMonth(),
    parsed.getUTCDate()
  );
  const todayDay = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );
  if (parsedDay > todayDay) return undefined;

  return parsed;
}

export default function sitemap() {
  let blogPosts = [];

  try {
    const allPosts = getAllPosts() || [];
    const postDatesMap = {};
    allPosts.forEach((post) => {
      // Priorité : updatedAt (modification significative) puis date (publication)
      const lastModified = toSitemapLastModified(post.updatedAt || post.date);
      if (lastModified) {
        postDatesMap[post.slug] = lastModified;
      }
    });
    blogPosts = (getAllPostSlugs() || []).map(({ slug }) => {
      const entry = {
        url: `${baseUrl}/blog/${slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      };
      if (postDatesMap[slug]) {
        entry.lastModified = postDatesMap[slug];
      }
      return entry;
    });
  } catch (error) {
    console.error("Sitemap blog error:", error);
  }

  // Pages statiques : pas de lastModified artificiel (new Date() au build).
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/reservation", priority: 0.9, changeFrequency: "weekly" },
    {
      path: "/services/taxi-aeroport-nice",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/services/taxi-aeroport-nice-sophia-antipolis",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/vsl", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/taxi-nice-numero", priority: 0.8, changeFrequency: "monthly" },
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
    {
      path: "/services/taxi-assistance-panne-nice",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/partenaires", priority: 0.6, changeFrequency: "monthly" },
    { path: "/secteurs", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/nice-gare", priority: 0.8, changeFrequency: "weekly" },
    {
      path: "/secteurs/nice-port-lympia",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/secteurs/nice-centre-ville",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/secteurs/nice-hopital-pasteur-2",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      path: "/secteurs/centre-lacassagne-nice",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    { path: "/secteurs/monaco", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/cannes", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/antibes", priority: 0.6, changeFrequency: "weekly" },
    { path: "/secteurs/menton", priority: 0.6, changeFrequency: "weekly" },
    {
      path: "/secteurs/saint-tropez",
      priority: 0.6,
      changeFrequency: "weekly",
    },
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
    changeFrequency,
    priority,
  }));

  return [...staticPages, ...blogPosts];
}
