// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://taxi-nice-06.com/sitemap.xml",
    host: "https://taxi-nice-06.com",
  };
}
