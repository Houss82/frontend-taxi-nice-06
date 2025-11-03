"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { motion } from "framer-motion";
import { Calendar, Clock, Share2, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (params.slug) {
      // Récupérer l'article
      fetch(`/api/blog/${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data.post);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur:", error);
          setLoading(false);
        });

      // Récupérer les articles similaires
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => {
          const filtered = (data.posts || [])
            .filter((p) => p.slug !== params.slug)
            .slice(0, 3);
          setRelatedPosts(filtered);
        });
    }
  }, [params.slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
        .catch((error) => console.log("Erreur de partage:", error));
    } else {
      // Copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier !");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article non trouvé
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            L'article que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryDark transition-colors"
          >
            Retour au blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Blog", url: "/blog", title: "Blog Taxi Nice" },
    { name: post.title, url: `/blog/${post.slug}`, title: post.title },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="article-title">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min de lecture</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-primary hover:text-primaryDark transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Partager</span>
              </button>
            </div>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={true}
              quality={85}
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mots-clés */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-5 h-5 text-gray-500" />
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
          {post && (
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
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-primaryDark rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un chauffeur privé ?
            </h3>
            <p className="text-lg mb-6">
              Réservez dès maintenant votre course avec Taxi Nice Côte d'Azur
            </p>
            <Link
              href="/reservation"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </article>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
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
