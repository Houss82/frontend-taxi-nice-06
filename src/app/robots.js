export default function robots() {
  const baseUrl = "https://taxi-nice-cote-dazur.vercel.app"; // Remplacez par votre URL de production

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
