import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 9);
  const categories = Array.from(
    new Set(latestPosts.map((post) => post.category).filter(Boolean))
  );

  const breadcrumbItems = [
    {
      name: "Blog",
      url: "/blog",
      title: "Blog Taxi Nice Côte d'Azur",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-0">
      <Navbar />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/news copie 2.jpg"
          alt="Blog Taxi Nice Côte d'Azur"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primaryDark/90"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Blog & Actualités Taxi Nice 06
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Guides pratiques, conseils transfert et actualités mobilité Côte
              d'Azur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dernières publications
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Retrouvez nos articles dédiés aux transferts aéroport de Nice,
                aux trajets vers Monaco, Cannes ou Antibes et à nos services
                conventionnés. Chaque guide est rédigé en interne pour répondre
                aux questions les plus fréquentes de nos passagers.
              </p>
            </div>
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wide"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {latestPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun article disponible pour le moment.
              </p>
              <p className="text-gray-500 mt-2">
                Revenez bientôt pour découvrir nos actualités !
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`} prefetch>
                    <div className="relative h-64 overflow-hidden group">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        priority={post.slug === latestPosts[0]?.slug}
                      />
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />5 min
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} prefetch>
                      <h2 className="text-2xl font-bold text-gray-900 leading-tight hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        prefetch
                        className="text-primary font-semibold hover:underline"
                      >
                        Lire plus →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
