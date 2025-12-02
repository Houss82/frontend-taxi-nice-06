# 📚 Guide Complet : Structure du Blog - Architecture Technique Détaillée

Ce guide détaille **exactement** comment reproduire la structure complète du blog dans un autre projet Next.js, au code près.

---

## 📁 Structure des Fichiers et Dossiers

```
frontend/
├── content/
│   └── blog/                          # Dossier contenant tous les articles Markdown
│       ├── _TEMPLATE.md               # Template d'article (optionnel)
│       ├── article-1.md                # Articles au format .md
│       ├── article-2.md
│       └── ...
│
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.jsx               # Page de listing des articles (Server Component)
│   │   │   └── [slug]/
│   │   │       └── page.jsx          # Page d'article individuel (Server Component)
│   │   └── sitemap.js                 # Génération du sitemap (inclut les articles)
│   │
│   ├── lib/
│   │   ├── blog.js                    # Fonctions de chargement/parsing des articles
│   │   └── blogCategories.jsx        # Configuration des catégories
│   │
│   ├── components/
│   │   └── ResponsiveTableWrapper.jsx # Composant client pour tables responsives
│   │
│   └── app/
│       └── globals.css                # Styles CSS globaux (inclut styles blog)
│
└── public/                            # Images des articles
    ├── image-article-1.jpg
    └── ...
```

---

## 1️⃣ Configuration des Catégories (`src/lib/blogCategories.jsx`)

### Structure Complète

```jsx
// blogCategories.jsx (Server Component)

const blogCategories = [
  {
    id: "taxi",                          // ID unique de la catégorie
    label: "Taxi & Transports",          // Label affiché
    description: "Trajets, tarifs, transferts aéroport...",
    icon: "Car",                         // Nom de l'icône (lucide-react)
    color: {
      bg: "bg-blue-50",                 // Couleur de fond
      border: "border-blue-200",         // Couleur de bordure
      text: "text-blue-700",             // Couleur du texte
      iconBg: "bg-blue-100",            // Fond de l'icône
      iconColor: "text-blue-600",       // Couleur de l'icône
      hover: "hover:bg-blue-100",        // État hover
    },
    // Mapping des catégories d'articles vers cette catégorie principale
    articleCategories: [
      "Transferts Aéroport",
      "Taxi",
      "Transport",
    ],
  },
  {
    id: "voyage",
    label: "Voyage & Tourisme",
    description: "Destinations, activités, plages...",
    icon: "Compass",
    color: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      hover: "hover:bg-pink-100",
    },
    articleCategories: ["Tourisme", "Voyage & Tourisme", "Excursions", "Découvertes"],
  },
  {
    id: "local",
    label: "Vie locale & Entreprises",
    description: "Actualités de la ville, entreprises locales...",
    icon: "Building2",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:bg-green-100",
    },
    articleCategories: ["Partenaires", "Actualités", "Entreprises", "Vie locale & Entreprises"],
  },
  {
    id: "sante",
    label: "Santé, Mobilité & Bien-être",
    description: "Centres de santé, mobilité réduite...",
    icon: "Heart",
    color: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      hover: "hover:bg-rose-100",
    },
    articleCategories: ["Santé", "Mobilité", "VSL"],
  },
  {
    id: "guides",
    label: "Guides pratiques & Lifestyle",
    description: "Conseils pour voyager, checklists...",
    icon: "BookOpen",
    color: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hover: "hover:bg-purple-100",
    },
    articleCategories: [
      "Guides Pratiques",
      "Guide Pratique",
      "Conseils",
      "Conseils Pratiques",
      "Lifestyle",
      "Astuces",
    ],
  },
];

// Fonction pour obtenir l'ID de catégorie à partir de la catégorie d'un article
export function getCategoryIdFromArticleCategory(articleCategory) {
  const category = blogCategories.find((cat) =>
    cat.articleCategories.includes(articleCategory)
  );
  return category ? category.id : null;
}

// Fonction pour obtenir la catégorie à partir de son ID
export function getCategoryById(categoryId) {
  return blogCategories.find((cat) => cat.id === categoryId) || null;
}

export default blogCategories;
```

### Points Clés

- **Mapping flexible** : Plusieurs catégories d'articles peuvent pointer vers une même catégorie principale
- **Icônes** : Utilise `lucide-react` (Car, Compass, Building2, Heart, BookOpen)
- **Couleurs** : Système de couleurs cohérent avec Tailwind CSS
- **Fonctions utilitaires** : `getCategoryIdFromArticleCategory()` et `getCategoryById()` pour la navigation

---

## 2️⃣ Chargement et Parsing des Articles (`src/lib/blog.js`)

### Code Complet

```javascript
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Récupérer tous les articles
export function getAllPosts() {
  // Vérifier si le dossier existe
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Sans titre",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 150) + "...",
        image: data.image || "/bg-image.png",
        category: data.category || "Actualités",
        author: data.author || "Taxi Nice Côte d'Azur",
        ...data,
      };
    });

  // Trier par date (plus récent en premier)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Récupérer un article par son slug
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Convertir le markdown en HTML avec support du HTML brut
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: data.title || "Sans titre",
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + "...",
    image: data.image || "/bg-image.png",
    category: data.category || "Actualités",
    author: data.author || "Taxi Nice Côte d'Azur",
    keywords: data.keywords || [],
    ...data,
  };
}

// Récupérer tous les slugs (pour la génération statique)
export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });
}

// Récupérer les articles par catégorie
export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// Récupérer toutes les catégories
export function getAllCategories() {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}
```

### Dépendances NPM Requises

```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-rehype": "^11.1.1",
    "rehype-raw": "^7.0.0",
    "rehype-stringify": "^10.0.1"
  }
}
```

### Points Clés

- **gray-matter** : Parse le front matter YAML des fichiers Markdown
- **remark/rehype** : Convertit Markdown → HTML avec support du HTML brut
- **Filtrage** : Ignore les fichiers commençant par `_` (templates)
- **Tri** : Articles triés par date décroissante
- **Valeurs par défaut** : Gestion des métadonnées manquantes

---

## 3️⃣ Page de Listing des Articles (`src/app/blog/page.jsx`)

### Code Complet (Server Component)

```jsx
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

// ISR : régénérer toutes les heures
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

      {/* Hero Section */}
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

      {/* Section Articles */}
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
                : "Retrouvez nos articles dédiés aux transferts aéroport de Nice, aux trajets vers Monaco, Cannes ou Antibes et à nos services conventionnés."}
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
```

### Points Clés

- **Server Component** : Pas de `"use client"`, tout est rendu côté serveur
- **ISR** : `revalidate = 3600` (régénération toutes les heures)
- **Filtrage par catégorie** : Via `searchParams.category`
- **Pagination** : Limite à 9 articles sur la page principale
- **Images optimisées** : Utilise `next/image` avec `priority` pour le premier article

---

## 4️⃣ Page d'Article Individuel (`src/app/blog/[slug]/page.jsx`)

### Code Complet (Server Component)

```jsx
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import ResponsiveTableWrapper from "@/components/ResponsiveTableWrapper.jsx";
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
        <div className="max-w-4xl mx-auto px-4 pt-20 sm:pt-10 sm:pb-6">
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
          <ResponsiveTableWrapper
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          >
          </ResponsiveTableWrapper>

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
        </div>
      </article>

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
```

### Points Clés

- **generateStaticParams** : Pré-génère toutes les pages au build
- **ISR** : `revalidate = 3600` pour régénération périodique
- **404 Handling** : Utilise `notFound()` si l'article n'existe pas
- **Schema JSON-LD** : Données structurées pour le SEO
- **Articles similaires** : Affichage de 3 articles aléatoires

---

## 5️⃣ Composant ResponsiveTableWrapper (`src/components/ResponsiveTableWrapper.jsx`)

### Code Complet (Client Component)

```jsx
"use client";

import { useEffect, useRef } from "react";

export default function ResponsiveTableWrapper({ 
  children, 
  className, 
  dangerouslySetInnerHTML 
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Trouver tous les tableaux dans le contenu
    const tables = contentRef.current.querySelectorAll("table");

    tables.forEach((table) => {
      // Vérifier si le tableau est déjà enveloppé
      if (table.parentElement?.classList.contains("table-wrapper")) {
        return;
      }

      // Créer un wrapper pour le tableau
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";

      // Envelopper le tableau
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }, [dangerouslySetInnerHTML]);

  return (
    <div 
      ref={contentRef} 
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  );
}
```

### Points Clés

- **Client Component** : `"use client"` requis pour `useEffect`
- **Dynamique** : Enveloppe automatiquement tous les `<table>` dans `.table-wrapper`
- **Idempotent** : Vérifie si le tableau est déjà enveloppé pour éviter les doublons

---

## 6️⃣ Styles CSS (`src/app/globals.css`)

### Styles Spécifiques au Blog

```css
/* Styles pour les articles de blog (Markdown) */
.prose {
  @apply text-gray-800 leading-relaxed;
}

/* Style pour le titre principal de l'article de blog */
.article-title {
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  color: #0b4f6c !important;
  margin-top: 0 !important;
  margin-bottom: 1.5rem !important;
  padding: 1.5rem 1.5rem !important;
  padding-left: 1.25rem !important;
  background: linear-gradient(
    to right,
    rgba(11, 79, 108, 0.08) 0%,
    rgba(11, 79, 108, 0.03) 50%,
    transparent 100%
  ) !important;
  border-left: 5px solid #0b4f6c !important;
  border-bottom: 3px solid rgba(11, 79, 108, 0.2) !important;
  border-radius: 0.75rem !important;
  letter-spacing: -0.02em !important;
  box-shadow: 0 4px 12px rgba(11, 79, 108, 0.1) !important;
}

.prose h1 {
  @apply text-4xl font-bold text-gray-900 mt-8 mb-4;
  background: linear-gradient(135deg, #0b4f6c 0%, #0ea5e9 50%, #0b4f6c 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1.5rem !important;
  padding-left: 1rem !important;
  padding-bottom: 0.75rem !important;
  border-bottom: 3px solid #0b4f6c !important;
  letter-spacing: -0.02em !important;
  position: relative !important;
}

.prose h2 {
  @apply text-3xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-[#0B4F6C]/20;
  background: linear-gradient(135deg, #0b4f6c 0%, #0284c7 40%, #0ea5e9 60%, #0b4f6c 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1.25rem !important;
  padding: 1rem 1.25rem !important;
  padding-left: 1rem !important;
  border-left: 4px solid #0b4f6c !important;
  border-bottom: 2px solid rgba(11, 79, 108, 0.15) !important;
  position: relative !important;
  border-radius: 0.5rem !important;
  letter-spacing: -0.01em !important;
}

.prose h3 {
  @apply text-2xl font-semibold text-gray-800 mt-6 mb-3;
  background: linear-gradient(135deg, #0b4f6c 0%, #0ea5e9 50%, #0b4f6c 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  margin-top: 2rem !important;
  margin-bottom: 1rem !important;
  padding-left: 0.75rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 2px solid rgba(11, 79, 108, 0.1) !important;
  letter-spacing: -0.005em !important;
}

.prose p {
  @apply mb-4 text-lg leading-relaxed;
}

.prose strong {
  @apply font-bold text-gray-900;
}

.prose ul {
  @apply list-disc list-inside mb-4 space-y-2;
}

.prose ol {
  @apply list-decimal list-inside mb-4 space-y-2;
}

.prose li {
  @apply text-lg ml-4;
}

.prose a {
  @apply text-primary hover:text-primaryDark underline transition-colors;
}

.prose table {
  @apply w-full border-collapse mb-6;
  display: table;
  width: 100%;
  table-layout: auto;
}

.prose th {
  @apply bg-primary text-white font-semibold p-3 text-left;
}

.prose td {
  @apply border border-gray-300 p-3;
}

.prose tr:nth-child(even) {
  @apply bg-gray-50;
}

/* Wrapper pour les tableaux responsives */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;
}

.table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Styles responsives pour les tableaux sur mobile */
@media (max-width: 768px) {
  .table-wrapper table {
    font-size: 0.875rem;
    min-width: 600px;
    width: max-content;
    display: table;
  }

  .table-wrapper th,
  .table-wrapper td {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .table-wrapper th {
    font-size: 0.8125rem;
    padding: 0.625rem 0.75rem;
  }
}

.prose img {
  @apply rounded-lg shadow-lg my-6;
}

/* Containers avec backgrounds légers pour structurer l'article */
.content-box,
.prose .content-box {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #bae6fd 75%, #e0f2fe 100%) !important;
  border: 1px solid #cfe2e8 !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  border-left: 4px solid #0b4f6c !important;
  box-shadow: 0 2px 8px rgba(11, 79, 108, 0.08) !important;
}

.info-box,
.prose .info-box {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #bfdbfe 75%, #dbeafe 100%) !important;
  border: 1px solid #93c5fd !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  border-left: 4px solid #0b4f6c !important;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12) !important;
}

.section-box,
.prose .section-box {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f1f5f9 100%) !important;
  border: 1px solid #cbd5e1 !important;
  border-radius: 0.875rem !important;
  padding: 1.5rem 2rem !important;
  margin: 2rem 0 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06) !important;
}

.highlight-box,
.prose .highlight-box {
  background: linear-gradient(135deg, #fde68a 0%, #fcd34d 25%, #fbbf24 50%, #fcd34d 75%, #fde68a 100%) !important;
  border: 1px solid #f59e0b !important;
  border-radius: 0.75rem !important;
  padding: 1.25rem 1.5rem !important;
  margin: 1.5rem 0 !important;
  box-shadow: 0 3px 10px rgba(245, 158, 11, 0.15) !important;
}

/* Badges KPI */
.kpi-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 1.25rem;
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
}

.badge.success {
  background: #e8f7ec;
  color: #1b7f3a;
  border: 1px solid #cdebd6;
}

.badge.info {
  background: #eaf5ff;
  color: #0b4f6c;
  border: 1px solid #d6e9ff;
}

/* FAQ accordéon */
.faq {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  margin: 0.6rem 0;
  background: #fff;
}

.faq summary {
  cursor: pointer;
  font-weight: 600;
}

.faq[open] {
  background: #f8fafc;
}

/* CTA */
.cta {
  text-align: center;
  margin: 1.25rem 0 1.5rem;
}

.cta-button,
.prose .cta-button {
  display: inline-block !important;
  background: #0b4f6c !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  padding: 0.8rem 1.1rem !important;
  border-radius: 0.75rem !important;
  text-decoration: none !important;
  border: none !important;
}

.cta-button:hover,
.prose .cta-button:hover {
  opacity: 0.95 !important;
  background: #0a4459 !important;
  color: #ffffff !important;
}

.cta-sub,
.prose .cta-sub {
  margin-top: 0.35rem !important;
  font-size: 0.95rem !important;
  color: #475569 !important;
}
```

### Points Clés

- **Styles Markdown** : Classes `.prose` pour le rendu du contenu
- **Tableaux responsives** : `.table-wrapper` avec scroll horizontal sur mobile
- **Composants HTML personnalisés** : `.content-box`, `.info-box`, `.kpi-strip`, `.faq`, `.cta`
- **Responsive** : Media queries pour mobile

---

## 7️⃣ Structure des Fichiers Markdown (`content/blog/article.md`)

### Format Front Matter

```markdown
---
title: "Titre de l'article"
date: "2025-11-27"
excerpt: "Description courte de l'article (150-160 caractères)"
image: "/nom-image.jpg"
category: "Taxi"                    # Doit correspondre à articleCategories dans blogCategories.jsx
author: "Taxi Nice Côte d'Azur"
language: "fr"
keywords:
  [
    "mot-clé 1",
    "mot-clé 2",
    "mot-clé 3",
  ]
---

# Titre Principal (H1)

Introduction de l'article...

<div class="kpi-strip">
  <span class="badge success">✅ Badge 1</span>
  <span class="badge info">🚐 Badge 2</span>
</div>

## Section 1 (H2)

Contenu de la section...

### Sous-section 1.1 (H3)

Détails...

<div class="info-box">
<strong>💡 Astuce :</strong> Texte informatif...
</div>

<div class="content-box">
<strong>Contenu important :</strong> Texte...
</div>

## Section 2 (H2)

Contenu...

| Colonne 1 | Colonne 2 |
| --------- | --------- |
| Donnée 1  | Donnée 2  |

## FAQ

<details class="faq">
<summary><strong>Question 1 ?</strong></summary>
Réponse 1...
</details>

<details class="faq">
<summary><strong>Question 2 ?</strong></summary>
Réponse 2...
</details>

## Conclusion

<div class="cta">
<a class="cta-button" href="/reservation">📲 Réserver</a>
<p class="cta-sub">Texte sous le bouton</p>
</div>
```

### Points Clés

- **Front Matter YAML** : Métadonnées entre `---`
- **HTML brut autorisé** : Grâce à `rehype-raw`
- **Composants HTML personnalisés** : Utilisation de `<div class="...">` pour les boxes
- **FAQ** : Utilise `<details>` avec classe `.faq`

---

## 8️⃣ Génération Statique et ISR

### generateStaticParams

```jsx
// Dans src/app/blog/[slug]/page.jsx

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}
```

### ISR (Incremental Static Regeneration)

```jsx
// Dans src/app/blog/page.jsx et src/app/blog/[slug]/page.jsx

export const revalidate = 3600; // Régénère toutes les heures
```

### Points Clés

- **Static Generation** : Toutes les pages sont pré-générées au build
- **ISR** : Régénération périodique sans rebuild complet
- **Performance** : Pages servies instantanément depuis le cache

---

## 9️⃣ SEO et Schema JSON-LD

### Schema Article (dans `[slug]/page.jsx`)

```jsx
<Script
  id="article-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      image: `https://votre-domaine.com${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author || "Votre Organisation",
      },
      publisher: {
        "@type": "Organization",
        name: "Votre Organisation",
        logo: {
          "@type": "ImageObject",
          url: "https://votre-domaine.com/logo.png",
        },
      },
      description: post.excerpt,
      articleSection: post.category,
      keywords: Array.isArray(post.keywords)
        ? post.keywords.join(", ")
        : post.keywords || "",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://votre-domaine.com/blog/${post.slug}`,
      },
    }),
  }}
/>
```

---

## 🔟 Sitemap (`src/app/sitemap.js`)

### Exemple d'Intégration

```javascript
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap() {
  const baseUrl = "https://votre-domaine.com";
  
  // Articles de blog
  const blogPosts = getAllPostSlugs().map((item) => ({
    url: `${baseUrl}/blog/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // ... autres pages
  ];

  return [...staticPages, ...blogPosts];
}
```

---

## 📦 Dépendances NPM Complètes

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-rehype": "^11.1.1",
    "rehype-raw": "^7.0.0",
    "rehype-stringify": "^10.0.1",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "tailwindcss": "^3.3.0"
  }
}
```

---

## ✅ Checklist de Reproduction

- [ ] Créer le dossier `content/blog/`
- [ ] Créer `src/lib/blog.js` avec toutes les fonctions
- [ ] Créer `src/lib/blogCategories.jsx` avec la configuration
- [ ] Créer `src/app/blog/page.jsx` (listing)
- [ ] Créer `src/app/blog/[slug]/page.jsx` (article individuel)
- [ ] Créer `src/components/ResponsiveTableWrapper.jsx`
- [ ] Ajouter les styles CSS dans `globals.css`
- [ ] Installer les dépendances NPM
- [ ] Créer un article test dans `content/blog/`
- [ ] Vérifier le rendu sur `/blog` et `/blog/[slug]`
- [ ] Configurer le sitemap
- [ ] Tester la génération statique (`npm run build`)

---

## 🎯 Points Techniques Importants

1. **Server Components** : Toutes les pages sont des Server Components (pas de `"use client"`)
2. **ISR** : Utilise `revalidate` pour la régénération périodique
3. **Static Generation** : `generateStaticParams` pour pré-générer toutes les pages
4. **HTML brut** : Support du HTML dans Markdown via `rehype-raw`
5. **Responsive** : Tables avec scroll horizontal sur mobile
6. **SEO** : Schema JSON-LD pour chaque article
7. **Catégories** : Système flexible de mapping catégories → catégories principales

---

**Ce guide contient toute l'architecture nécessaire pour reproduire exactement la structure du blog dans un autre projet Next.js.**

