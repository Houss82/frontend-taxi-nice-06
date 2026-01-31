#!/usr/bin/env node

/**
 * Script personnalisé pour générer le sitemap après le build
 * Inclut les articles de blog dynamiques
 */

const fs = require("fs");
const path = require("path");

// Configuration
const baseUrl = "https://taxi-nice-06.com";
const currentDate = new Date().toISOString();

// Fonction pour récupérer les articles de blog
function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

// Générer le sitemap personnalisé
function generateCustomSitemap() {
  const blogSlugs = getAllPostSlugs();

  // Priorités et fréquences personnalisées
  const pages = [
    { path: "", priority: 1.0, changefreq: "weekly" },
    { path: "/reservation", priority: 0.9, changefreq: "weekly" },
    { path: "/services/taxi-aeroport-nice", priority: 0.9, changefreq: "weekly" },
    { path: "/tarifs", priority: 0.8, changefreq: "monthly" },
    { path: "/services", priority: 0.8, changefreq: "weekly" },
    { path: "/services/vsl", priority: 0.8, changefreq: "weekly" },
    { path: "/contact", priority: 0.8, changefreq: "monthly" },
    { path: "/services/arrivees-destinations", priority: 0.7, changefreq: "weekly" },
    { path: "/services/excursions", priority: 0.7, changefreq: "weekly" },
    { path: "/services/flotte-recente", priority: 0.7, changefreq: "weekly" },
    { path: "/services/evenements-mariages", priority: 0.7, changefreq: "weekly" },
    { path: "/services/transferts-evenements", priority: 0.7, changefreq: "weekly" },
    { path: "/services/excursions-decouvertes", priority: 0.7, changefreq: "weekly" },
    { path: "/services/van-premium", priority: 0.7, changefreq: "weekly" },
    { path: "/blog", priority: 0.7, changefreq: "weekly" },
    { path: "/partenaires", priority: 0.6, changefreq: "monthly" },
    { path: "/secteurs", priority: 0.6, changefreq: "weekly" },
    { path: "/secteurs/monaco", priority: 0.6, changefreq: "weekly" },
    { path: "/secteurs/cannes", priority: 0.6, changefreq: "weekly" },
    { path: "/secteurs/antibes", priority: 0.6, changefreq: "weekly" },
    { path: "/cgv", priority: 0.3, changefreq: "yearly" },
    { path: "/mentions-legales", priority: 0.3, changefreq: "yearly" },
    { path: "/politique-confidentialite", priority: 0.3, changefreq: "yearly" },
    // Articles de blog
    ...blogSlugs.map((slug) => ({
      path: `/blog/${slug}`,
      priority: 0.6,
      changefreq: "monthly",
    })),
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach((page) => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Écrire le sitemap personnalisé
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
const sitemapContent = generateCustomSitemap();
fs.writeFileSync(sitemapPath, sitemapContent);

// Générer robots.txt
const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /*.ico$

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

const robotsPath = path.join(process.cwd(), "public", "robots.txt");
fs.writeFileSync(robotsPath, robotsContent);

console.log("✅ Sitemap personnalisé généré avec succès");
console.log("✅ robots.txt généré avec succès");
console.log(`📊 ${getAllPostSlugs().length + 19} URLs incluses (${getAllPostSlugs().length} articles de blog)`);

