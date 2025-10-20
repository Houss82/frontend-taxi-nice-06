import { getPostBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Taxi Nice Côte d'Azur",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  // Définir l'URL canonique
  const canonicalUrl = `https://taxi-nice-06.com/blog/${post.slug}`;
  const alternateLanguage = post.language === "fr" ? "en" : "fr";

  // Trouver l'article correspondant dans l'autre langue
  const alternateSlugs = {
    "choisir-chauffeur-prive-nice": "choosing-private-driver-nice",
    "choosing-private-driver-nice": "choisir-chauffeur-prive-nice",
    "guide-transfert-aeroport-nice": "nice-airport-transfer-guide",
    "nice-airport-transfer-guide": "guide-transfert-aeroport-nice",
    "excursions-cote-azur": "french-riviera-tours",
    "french-riviera-tours": "excursions-cote-azur",
  };

  const alternateSlug = alternateSlugs[post.slug];
  const alternateUrl = alternateSlug
    ? `https://taxi-nice-06.com/blog/${alternateSlug}`
    : null;

  return {
    title: `${post.title} | Taxi Nice Côte d'Azur`,
    description: post.excerpt,
    keywords: post.keywords || [],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://taxi-nice-06.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://taxi-nice-06.com${post.image}`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [post.language]: canonicalUrl,
        ...(alternateUrl && { [alternateLanguage]: alternateUrl }),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
