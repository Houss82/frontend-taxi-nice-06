/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Compilation optimisée
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Désactiver ESLint pendant le build pour éviter les warnings d'options obsolètes
  eslint: {
    ignoreDuringBuilds: false, // Garder ESLint activé mais ignorer les warnings
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Redirections 301 pour corriger les erreurs 404 et unifier les versions
  async redirects() {
    return [
      // Anciennes redirections
      {
        source: "/en",
        destination: "/",
        permanent: true, // Redirection 301 - version anglaise non implémentée
      },
      {
        source: "/a-propos",
        destination: "/",
        permanent: true, // Redirection 301 vers l'accueil (gère aussi /a-propos?lang=en)
      },
      // ✅ NOTE : La redirection www → non-www est gérée par vercel.json pour éviter la double redirection
      // Cette redirection dans next.config.mjs est désactivée car vercel.json la traite en premier
      // ✅ Redirection trailing slash → sans trailing slash (sauf pour la racine)
      // Évite les doublons /services/ vs /services
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      // ✅ Redirection ancienne URL service vers nouvelle URL
      {
        source: "/services/excursions",
        destination: "/services/excursions-decouvertes",
        permanent: true, // 301 - Ancienne page déplacée vers la nouvelle
      },
      // ✅ Redirection URL singulier vers nouvelle URL
      {
        source: "/services/transfert-aeroport",
        destination: "/services/taxi-aeroport-nice",
        permanent: true, // 301 - Ancienne URL singulier → nouvelle URL
      },
      // ✅ Redirection ancienne URL pluriel vers nouvelle URL
      {
        source: "/services/transferts-aeroport",
        destination: "/services/taxi-aeroport-nice",
        permanent: true, // 301 - Ancienne URL pluriel → nouvelle URL
      },
      // ✅ Redirection page secteurs/nice vers page d'accueil (évite cannibalisation SEO)
      {
        source: "/secteurs/nice",
        destination: "/",
        permanent: true, // 301 - Redirection vers page d'accueil
      },
      // ✅ Redirection page taxi-nice vers page d'accueil (évite cannibalisation SEO)
      {
        source: "/taxi-nice",
        destination: "/",
        permanent: true, // 301 - Redirection vers page d'accueil
      },
      // ✅ Redirections anciens slugs anglais vers les articles FR
      {
        source: "/blog/nice-airport-transfer-guide",
        destination: "/blog/guide-transfert-aeroport-nice",
        permanent: true,
      },
      {
        source: "/blog/choosing-private-driver-nice",
        destination: "/blog/choisir-chauffeur-prive-nice",
        permanent: true,
      },
      {
        source: "/blog/french-riviera-tours",
        destination: "/blog/taxi-excursions-nice",
        permanent: true,
      },
      {
        source: "/blog/excursions-cote-azur",
        destination: "/blog/taxi-excursions-nice",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
