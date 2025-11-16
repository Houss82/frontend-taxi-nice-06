import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

// Pré-générer toutes les pages au build
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

// ISR : régénérer toutes les heures
export const revalidate = 3600;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // Si l'article n'existe pas, retourner 404
  if (!post) {
    notFound();
  }

  // Récupérer les articles similaires (côté serveur)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const breadcrumbItems = [
    { name: "Blog", url: "/blog", title: "Blog Taxi Nice" },
    { name: post.title, url: `/blog/${post.slug}`, title: post.title },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 pt-20">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Article */}
      <article className="pt-4 pb-10">
        <div className="max-w-4xl mx-auto px-4 pt-6">
          {/* En-tête */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>5 min de lecture</span>
            </div>
          </div>

          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              style={{
                objectPosition:
                  post.slug === "taxi-aeroport-nice-saint-tropez"
                    ? "60% center"
                    : "center center",
              }}
              priority={true}
              quality={85}
            />
          </div>

          {/* Contenu */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mots-clés */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Schema JSON-LD Article */}
          <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                image: `https://taxi-nice-06.com${post.image}`,
                datePublished: post.date,
                dateModified: post.date,
                author: {
                  "@type": "Organization",
                  name: post.author || "Taxi Nice Côte d'Azur",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Taxi Nice Côte d'Azur",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://taxi-nice-06.com/logo1.png",
                  },
                },
                description: post.excerpt,
                articleSection: post.category,
                keywords: Array.isArray(post.keywords)
                  ? post.keywords.join(", ")
                  : post.keywords || "",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://taxi-nice-06.com/blog/${post.slug}`,
                },
              }),
            }}
          />

          {/* Schema JSON-LD FAQPage pour l'article Saint-Tropez */}
          {post.slug === "taxi-aeroport-nice-saint-tropez" && (
            <Script
              id="faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Combien coûte un transfert Nice → Saint-Tropez ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Le prix est de 280€ à 350€ selon le véhicule choisi : Mercedes Classe E : 280€ (1-3 passagers), Mercedes GLC : 300€ (1-4 passagers), Mercedes Classe V : 350€ (jusqu'à 7 passagers). Le tarif est fixe et garanti, même en cas de bouchons ou de détours.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Combien de temps dure le trajet Nice → Saint-Tropez ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Le trajet dure entre 1h30 et 1h50 selon le trafic : Trafic fluide : ~1h30, Trafic normal : ~1h40, Trafic dense (été, week-end) : 1h50-2h. Votre chauffeur optimise l'itinéraire en temps réel pour minimiser le temps de trajet.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Le chauffeur attend-il en cas de retard d'avion ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, nous suivons votre vol en temps réel et ajustons l'heure d'arrivée automatiquement sans frais supplémentaires. C'est inclus dans notre service premium. Votre chauffeur sera présent même si votre vol a du retard.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Peut-on réserver à l'avance pour Saint-Tropez ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, et c'est même fortement recommandé, surtout en haute saison (juin-septembre). Réservez via notre site de réservation ou par téléphone au 06 51 68 36 87. Vous recevrez une confirmation immédiate.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Proposez-vous des véhicules pour groupes vers Saint-Tropez ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui ! Nous avons des vans premium (Mercedes Classe V) pouvant accueillir jusqu'à 7 passagers avec bagages. Parfait pour les familles ou groupes d'amis se rendant à Saint-Tropez. Tarif : 350€.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Les péages sont-ils inclus dans le prix ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, tous les péages sont inclus dans le tarif fixe. Aucun frais supplémentaire à prévoir. Le prix annoncé est le prix final que vous paierez.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Peut-on faire des arrêts en route vers Saint-Tropez ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, informez-nous lors de la réservation. Un supplément peut s'appliquer selon la durée de l'arrêt. Nous sommes flexibles pour répondre à vos besoins (arrêt à Cannes, Antibes, etc.).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Acceptez-vous les paiements par carte ?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, nous acceptons carte bancaire, espèces et virement. Le paiement se fait directement auprès du chauffeur ou en ligne lors de la réservation pour plus de sécurité.",
                      },
                    },
                  ],
                }),
              }}
            />
          )}
        </div>
      </article>

      {/* Liens vers pages secteurs */}
      <section className="py-12 bg-gradient-to-br from-cyan-50 to-blue-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Découvrez nos services Taxi Nice
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/taxi-nice"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 border border-cyan-200 hover:border-cyan-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    Taxi Nice 24/7
                  </div>
                  <div className="text-sm text-gray-600">Service complet</div>
                </div>
              </Link>
              <Link
                href="/secteurs/nice-gare"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Taxi Nice Gare
                  </div>
                  <div className="text-sm text-gray-600">
                    Transferts gare SNCF
                  </div>
                </div>
              </Link>
              <Link
                href="/secteurs/nice-centre-ville"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Taxi Nice Centre-Ville
                  </div>
                  <div className="text-sm text-gray-600">Courses locales</div>
                </div>
              </Link>
              <Link
                href="/secteurs/nice"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200 hover:border-purple-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Guide Taxi Nice
                  </div>
                  <div className="text-sm text-gray-600">
                    Zones & établissements
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Articles similaires
              </h2>
              <p className="text-lg text-gray-600">
                Continuez votre lecture avec nos autres guides et conseils
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      {relatedPost.category && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                          {relatedPost.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Lire l'article
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
