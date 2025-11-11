const baseUrl = "https://taxi-nice-06.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/*.ico$"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
