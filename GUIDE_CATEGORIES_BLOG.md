# 📚 Guide Complet : Système de Catégories pour Blog Next.js

Ce guide explique comment implémenter un système de catégories complet avec filtrage, icônes, couleurs et maillage SEO dans un blog Next.js (App Router).

---

## 🎯 Objectif

Créer un système de catégories pour le blog avec :

- ✅ Catégories définies dans un fichier Server Component
- ✅ Filtrage par catégorie via query params
- ✅ Icônes et couleurs pastel pour chaque catégorie
- ✅ Comptage d'articles par catégorie
- ✅ Mapping automatique des catégories d'articles vers les catégories principales
- ✅ Liens cliquables et navigation intuitive

---

## 📁 Structure des Fichiers

```
frontend/
├── src/
│   ├── lib/
│   │   └── blogCategories.jsx          ← Définition des catégories
│   └── app/
│       └── blog/
│           ├── page.jsx                 ← Page blog avec filtrage
│           └── [slug]/
│               └── page.jsx             ← Page article individuel
```

---

## 📝 Étape 1 : Créer le Fichier de Catégories

### Fichier : `src/lib/blogCategories.jsx`

Créez un fichier Server Component qui définit toutes les catégories :

```jsx
// blogCategories.jsx (Server Component)

const blogCategories = [
  {
    id: "taxi",
    label: "Taxi & Transports",
    description:
      "Trajets, tarifs, transferts aéroport, taxi conventionné, longues distances et services de transport.",
    icon: "Car",
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hover: "hover:bg-blue-100",
    },
    // Mapping des catégories d'articles vers cette catégorie
    articleCategories: ["Transferts Aéroport", "Taxi", "Transport"],
  },
  {
    id: "voyage",
    label: "Voyage & Tourisme",
    description:
      "Destinations, activités, plages, visites, Côte d'Azur, idées de sorties et découvertes.",
    icon: "Compass",
    color: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      hover: "hover:bg-pink-100",
    },
    articleCategories: ["Tourisme", "Excursions", "Découvertes"],
  },
  {
    id: "local",
    label: "Vie locale & Entreprises",
    description:
      "Actualités de la ville, entreprises locales, artisans, restaurants, événements et nouveautés.",
    icon: "Building2",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:bg-green-100",
    },
    articleCategories: ["Partenaires", "Actualités", "Entreprises"],
  },
  {
    id: "sante",
    label: "Santé, Mobilité & Bien-être",
    description:
      "Centres de santé, mobilité réduite, taxi conventionné, accessibilité, hôpitaux et services liés à la santé.",
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
    description:
      "Conseils pour voyager, checklists, organisation, sécurité, astuces et guides pratiques.",
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

### 📋 Structure d'une Catégorie

Chaque catégorie contient :

- **`id`** : Identifiant unique (slug-friendly)
- **`label`** : Nom affiché de la catégorie
- **`description`** : Description pour le SEO et l'UX
- **`icon`** : Nom de l'icône (lucide-react)
- **`color`** : Objet avec toutes les couleurs Tailwind CSS
- **`articleCategories`** : Tableau des catégories d'articles qui correspondent

---

## 📝 Étape 2 : Modifier la Page Blog Principale

### Fichier : `src/app/blog/page.jsx`

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

export const revalidate = 3600;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const selectedCategoryId = searchParams?.category || null;
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

      {/* Breadcrumb */}
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
                  href={isActive ? "/blog" : `/blog?category=${category.id}`}
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

      {/* Liste des Articles */}
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

                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>

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

---

## 🔧 Points Clés de l'Implémentation

### 1. **Gestion des Query Params**

```jsx
const selectedCategoryId = searchParams?.category || null;
const selectedCategory = selectedCategoryId
  ? getCategoryById(selectedCategoryId)
  : null;
```

- Récupère le paramètre `?category=id` depuis l'URL
- Trouve la catégorie correspondante

### 2. **Filtrage des Articles**

```jsx
if (selectedCategory) {
  filteredPosts = allPosts.filter((post) => {
    const postCategoryId = getCategoryIdFromArticleCategory(post.category);
    return postCategoryId === selectedCategoryId;
  });
}
```

- Filtre les articles selon la catégorie sélectionnée
- Utilise le mapping `articleCategories` pour faire correspondre

### 3. **Comptage d'Articles**

```jsx
const categoryPosts = allPosts.filter((post) => {
  const postCategoryId = getCategoryIdFromArticleCategory(post.category);
  return postCategoryId === category.id;
});
const postCount = categoryPosts.length;
```

- Compte le nombre d'articles par catégorie
- Affiche un badge avec le nombre

### 4. **Mapping des Icônes**

```jsx
const iconMap = {
  Car: Car,
  Compass: Compass,
  Building2: Building2,
  Heart: Heart,
  BookOpen: BookOpen,
};
const IconComponent = iconMap[category.icon] || Car;
```

- Mappe les noms d'icônes vers les composants lucide-react
- Permet d'utiliser des icônes dynamiques

### 5. **Couleurs Dynamiques**

```jsx
className={`${category.color.bg} ${category.color.border} ...`}
```

- Utilise les couleurs définies dans chaque catégorie
- Permet un style cohérent et personnalisé par catégorie

---

## 🎨 Personnalisation des Couleurs

### Palette de Couleurs Pastel Recommandée

```jsx
// Bleu (Taxi/Transport)
bg: "bg-blue-50",
border: "border-blue-200",
text: "text-blue-700",
iconBg: "bg-blue-100",
iconColor: "text-blue-600",

// Rose (Voyage/Tourisme)
bg: "bg-pink-50",
border: "border-pink-200",
text: "text-pink-700",
iconBg: "bg-pink-100",
iconColor: "text-pink-600",

// Vert (Local/Entreprises)
bg: "bg-green-50",
border: "border-green-200",
text: "text-green-700",
iconBg: "bg-green-100",
iconColor: "text-green-600",

// Rose foncé (Santé/Bien-être)
bg: "bg-rose-50",
border: "border-rose-200",
text: "text-rose-700",
iconBg: "bg-rose-100",
iconColor: "text-rose-600",

// Violet (Guides/Lifestyle)
bg: "bg-purple-50",
border: "border-purple-200",
text: "text-purple-700",
iconBg: "bg-purple-100",
iconColor: "text-purple-600",
```

---

## 📦 Dépendances Nécessaires

### Packages npm

```bash
npm install lucide-react
```

### Imports Requis

```jsx
import blogCategories, {
  getCategoryIdFromArticleCategory,
  getCategoryById,
} from "@/lib/blogCategories";
import {
  Car,
  Compass,
  Building2,
  Heart,
  BookOpen,
  Calendar,
  Clock,
  User,
} from "lucide-react";
```

---

## 🔄 Mapping des Catégories d'Articles

### Comment ça fonctionne ?

1. **Dans vos articles Markdown**, vous définissez une catégorie :

   ```yaml
   category: "Transferts Aéroport"
   ```

2. **Dans `blogCategories.jsx`**, vous mappez cette catégorie vers une catégorie principale :

   ```jsx
   articleCategories: [
     "Transferts Aéroport",  // ← Correspond à cette catégorie
     "Taxi",
     "Transport",
   ],
   ```

3. **La fonction `getCategoryIdFromArticleCategory()`** trouve automatiquement la catégorie principale :
   ```jsx
   const postCategoryId = getCategoryIdFromArticleCategory(
     "Transferts Aéroport"
   );
   // Retourne : "taxi"
   ```

### Exemple de Mapping

| Catégorie Article     | Catégorie Principale         | ID       |
| --------------------- | ---------------------------- | -------- |
| "Transferts Aéroport" | Taxi & Transports            | `taxi`   |
| "Tourisme"            | Voyage & Tourisme            | `voyage` |
| "Partenaires"         | Vie locale & Entreprises     | `local`  |
| "Guides Pratiques"    | Guides pratiques & Lifestyle | `guides` |

---

## ✅ Checklist d'Implémentation

### Étape 1 : Créer le fichier de catégories

- [ ] Créer `src/lib/blogCategories.jsx`
- [ ] Définir toutes les catégories avec leurs propriétés
- [ ] Ajouter les fonctions utilitaires (`getCategoryIdFromArticleCategory`, `getCategoryById`)

### Étape 2 : Modifier la page blog

- [ ] Importer `blogCategories` et les fonctions utilitaires
- [ ] Importer les icônes nécessaires depuis `lucide-react`
- [ ] Ajouter la gestion des `searchParams`
- [ ] Implémenter le filtrage des articles
- [ ] Ajouter la section catégories avec icônes et couleurs
- [ ] Ajouter le bouton "Voir tous les articles" quand une catégorie est sélectionnée

### Étape 3 : Modifier les cartes d'articles

- [ ] Ajouter le badge de catégorie avec les couleurs dynamiques
- [ ] Rendre le badge cliquable pour filtrer par catégorie

### Étape 4 : Tester

- [ ] Vérifier que les catégories s'affichent correctement
- [ ] Tester le filtrage par catégorie (`/blog?category=taxi`)
- [ ] Vérifier que le comptage d'articles fonctionne
- [ ] Tester les liens de catégories sur les articles

---

## 🎯 Avantages SEO

### 1. **Meilleure Organisation**

- Google comprend mieux la structure de votre blog
- Meilleure indexation par thématique

### 2. **Expérience Utilisateur**

- Navigation intuitive par catégories
- Filtrage rapide du contenu
- Meilleur engagement (temps passé sur le site)

### 3. **Maillage Interne**

- Liens entre articles de même catégorie
- Meilleure distribution du PageRank

### 4. **Rich Snippets Potentiels**

- Structure claire pour Google
- Possibilité de rich snippets par catégorie

---

## 🔍 Exemples d'URLs Générées

```
/blog                          → Tous les articles
/blog?category=taxi            → Articles Taxi & Transports
/blog?category=voyage          → Articles Voyage & Tourisme
/blog?category=local           → Articles Vie locale
/blog?category=sante           → Articles Santé & Mobilité
/blog?category=guides          → Articles Guides pratiques
```

---

## 💡 Personnalisation Avancée

### Ajouter une Nouvelle Catégorie

1. **Ajouter dans `blogCategories.jsx`** :

```jsx
{
  id: "nouvelle-categorie",
  label: "Nouvelle Catégorie",
  description: "Description de la catégorie.",
  icon: "Star",  // Choisir une icône lucide-react
  color: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    hover: "hover:bg-yellow-100",
  },
  articleCategories: ["Catégorie Article 1", "Catégorie Article 2"],
},
```

2. **Importer l'icône dans `page.jsx`** :

```jsx
import { Star } from "lucide-react";
```

3. **Ajouter dans le mapping des icônes** :

```jsx
const iconMap = {
  // ... autres icônes
  Star: Star,
};
```

### Modifier les Couleurs d'une Catégorie

Modifiez simplement l'objet `color` dans `blogCategories.jsx` :

```jsx
color: {
  bg: "bg-indigo-50",        // Fond de la carte
  border: "border-indigo-200", // Bordure
  text: "text-indigo-700",    // Texte du titre
  iconBg: "bg-indigo-100",    // Fond de l'icône
  iconColor: "text-indigo-600", // Couleur de l'icône
  hover: "hover:bg-indigo-100", // Effet hover
},
```

---

## 🐛 Dépannage

### Problème : Les catégories ne s'affichent pas

**Solution** :

- Vérifier que `blogCategories.jsx` est bien importé
- Vérifier que les icônes sont bien importées depuis `lucide-react`
- Vérifier la console pour les erreurs

### Problème : Le filtrage ne fonctionne pas

**Solution** :

- Vérifier que `searchParams` est bien passé au composant
- Vérifier que `getCategoryIdFromArticleCategory()` retourne bien un ID
- Vérifier que les `articleCategories` dans `blogCategories.jsx` correspondent aux catégories de vos articles

### Problème : Les couleurs ne s'appliquent pas

**Solution** :

- Vérifier que Tailwind CSS est bien configuré
- Vérifier que les classes de couleur existent dans votre config Tailwind
- Vérifier la syntaxe des classes (pas d'espaces dans les noms de classes)

---

## 📊 Structure des Données

### Format d'un Article

```javascript
{
  slug: "mon-article",
  title: "Titre de l'article",
  category: "Transferts Aéroport",  // ← Catégorie de l'article
  date: "2025-11-19",
  excerpt: "Description...",
  image: "/image.jpg",
  author: "Auteur",
}
```

### Format d'une Catégorie

```javascript
{
  id: "taxi",                    // Identifiant unique
  label: "Taxi & Transports",    // Nom affiché
  description: "Description...",  // Description SEO
  icon: "Car",                   // Nom de l'icône
  color: { /* ... */ },          // Couleurs Tailwind
  articleCategories: [           // Catégories d'articles correspondantes
    "Transferts Aéroport",
    "Taxi",
  ],
}
```

---

## 🚀 Optimisations Futures Possibles

1. **Pagination par catégorie** : Limiter à 9 articles par page
2. **Tri par date/popularité** : Ajouter des options de tri
3. **Recherche par catégorie** : Combiner recherche + filtrage catégorie
4. **Breadcrumbs dynamiques** : Ajouter la catégorie dans le breadcrumb
5. **RSS Feed par catégorie** : Créer des flux RSS par catégorie

---

## 📝 Notes Importantes

### Server Components vs Client Components

- ✅ `blogCategories.jsx` : **Server Component** (pas de `"use client"`)
- ✅ `page.jsx` : **Server Component** (utilise `searchParams` côté serveur)
- ✅ Les icônes `lucide-react` fonctionnent dans les Server Components

### Performance

- Le filtrage se fait côté serveur (pas de JavaScript client)
- Les catégories sont générées au build (statique)
- Pas d'impact sur les performances

### SEO

- Les URLs avec query params (`?category=taxi`) sont indexables
- Google comprend la structure de catégories
- Meilleur maillage interne entre articles de même catégorie

---

## ✅ Résumé

Ce système de catégories permet de :

1. ✅ **Organiser** votre blog par thématiques
2. ✅ **Filtrer** les articles par catégorie
3. ✅ **Améliorer l'UX** avec des icônes et couleurs
4. ✅ **Améliorer le SEO** avec un meilleur maillage interne
5. ✅ **Compter** les articles par catégorie
6. ✅ **Mapper** automatiquement les catégories d'articles

**Temps d'implémentation estimé :** 1-2 heures  
**Complexité :** Moyenne  
**Impact SEO :** Élevé  
**Impact UX :** Très élevé

---

**Date de création :** 18 novembre 2025  
**Version :** 1.0  
**Compatibilité :** Next.js 15+ (App Router), React 19+
