import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { getAllPosts } from "@/lib/blog";
import blogCategories, {
  getCategoryIdFromArticleCategory,
  getCategoryById,
} from "@/lib/blogCategories";
import {
  Calendar,
  Clock,
  User,
  Car,
  Compass,
  Building2,
  Heart,
  BookOpen,
} from "lucide-react";
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

export default async function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const resolvedSearchParams = await searchParams;
  const selectedCategoryId = resolvedSearchParams?.category || null;
  const selectedCategory = selectedCategoryId
    ? getCategoryById(selectedCategoryId)
    : null;

  // Filtrer les articles selon la catégorie sélectionnée
  let filteredPosts = allPosts;
  if (selectedCategory) {
    filteredPosts = allPosts.filter((post) => {
      const postCategoryId = getCategoryIdFromArticleCategory(post.category);
      return postCategoryId === selectedCategoryId;
    });
  }

  const displayedPosts = selectedCategory
    ? filteredPosts
    : filteredPosts.slice(0, 9);

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

      {/* Section Catégories */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explorez nos catégories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos articles organisés par thématiques pour trouver
              rapidement l'information dont vous avez besoin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => {
              const isActive = selectedCategoryId === category.id;
              const categoryPosts = allPosts.filter((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category
                );
                return postCategoryId === category.id;
              });
              const postCount = categoryPosts.length;

              // Mapping des icônes
              const iconMap = {
                Car: Car,
                Compass: Compass,
                Building2: Building2,
                Heart: Heart,
                BookOpen: BookOpen,
              };
              const IconComponent = iconMap[category.icon] || Car;

              return (
                <Link
                  key={category.id}
                  href={
                    isActive ? "/blog" : `/blog?category=${category.id}`
                  }
                  className={`block rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                    isActive
                      ? `${category.color.bg} ${category.color.border} border-2`
                      : `bg-white ${category.color.border} hover:${category.color.hover}`
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${category.color.iconBg} ${category.color.iconColor} p-3 rounded-xl flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className={`text-xl font-bold ${
                            isActive ? category.color.text : "text-gray-900"
                          }`}
                        >
                          {category.label}
                        </h3>
                        {postCount > 0 && (
                          <span
                            className={`px-2 py-1 ${category.color.bg} ${category.color.text} rounded-full text-xs font-semibold ml-2 flex-shrink-0`}
                          >
                            {postCount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {selectedCategory && (
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Voir tous les articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory
                ? `Articles : ${selectedCategory.label}`
                : "Dernières publications"}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {selectedCategory
                ? `Découvrez tous nos articles dans la catégorie "${selectedCategory.label}".`
                : "Retrouvez nos articles dédiés aux transferts aéroport de Nice, aux trajets vers Monaco, Cannes ou Antibes et à nos services conventionnés. Chaque guide est rédigé en interne pour répondre aux questions les plus fréquentes de nos passagers."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {displayedPosts.length === 0 ? (
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
              {displayedPosts.map((post) => {
                const postCategoryId = getCategoryIdFromArticleCategory(
                  post.category
                );
                const postCategory = postCategoryId
                  ? getCategoryById(postCategoryId)
                  : null;

                return (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <Link href={`/blog/${post.slug}`} prefetch>
                      <div className="relative h-64 overflow-hidden group">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                          priority={post.slug === displayedPosts[0]?.slug}
                        />
                      </div>
                    </Link>
                    {postCategory && (
                      <Link
                        href={`/blog?category=${postCategory.id}`}
                        className="absolute top-4 left-4 z-10"
                      >
                        <span
                          className={`px-3 py-1 ${postCategory.color.bg} ${postCategory.color.text} rounded-full text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity border ${postCategory.color.border}`}
                        >
                          {postCategory.label}
                        </span>
                      </Link>
                    )}
                  </div>

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
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
