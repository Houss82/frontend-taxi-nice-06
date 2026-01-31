#!/usr/bin/env node

/**
 * Script de génération automatique du sitemap.xml
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require("fs");
const path = require("path");

// Configuration
const baseUrl = "https://taxi-nice-06.com";
const currentDate = new Date().toISOString().split("T")[0];

// Fonction pour récupérer les articles de blog
function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

// Générer le sitemap
function generateSitemap() {
  const blogSlugs = getAllPostSlugs().map((post) => `/blog/${post.slug}`);

  const staticPages = [
    "",
    "/reservation",
    "/tarifs",
    "/tarifs?vehicle=glc",
    "/tarifs?vehicle=van",
    "/services",
    "/services/taxi-aeroport-nice",
    "/services/arrivees-destinations",
    "/services/van-premium",
    "/services/flotte-recente",
    "/services/excursions-decouvertes",
    "/services/evenements-mariages",
    "/services/transferts-evenements",
    "/services/vsl",
    "/services/excursions",
    "/contact",
    "/blog",
    "/partenaires",
    // "/a-propos", // Supprimé : page n'existe pas, redirigée vers "/"
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
    ...blogSlugs,
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  staticPages.forEach((page) => {
    const priority =
      page === "" ? "1.0" : page.startsWith("/blog") ? "0.6" : "0.8";
    const changefreq = page === "" ? "weekly" : "monthly";

    sitemap += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Écrire le fichier sitemap
const sitemapContent = generateSitemap();
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemapContent);
console.log("✅ Sitemap généré avec succès:", sitemapPath);

// Compter les URLs
const blogSlugs = getAllPostSlugs().map((post) => `/blog/${post.slug}`);
const staticPages = [
  "",
  "/reservation",
  "/tarifs",
  "/tarifs?vehicle=glc",
  "/tarifs?vehicle=van",
  "/services",
  "/services/taxi-aeroport-nice",
  "/services/arrivees-destinations",
  "/services/van-premium",
  "/services/flotte-recente",
  "/services/excursions-decouvertes",
  "/services/evenements-mariages",
  "/services/transferts-evenements",
  "/services/vsl",
  "/services/excursions",
    "/contact",
    "/blog",
    "/partenaires",
    // "/a-propos", // Supprimé : page n'existe pas, redirigée vers "/"
    "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
  ...blogSlugs,
];
console.log(`📊 ${staticPages.length} URLs incluses`);
