# 🔍 Guide : Corriger l'Indexation Google des Articles de Blog (Next.js App Router)

## 📋 Problème Identifié

Vos articles de blog ne sont **pas indexés correctement par Google** ou affichent "Article non trouvé" dans les résultats de recherche, même si les pages fonctionnent correctement pour les utilisateurs.

### Symptômes

- ✅ La page s'affiche correctement dans votre navigateur
- ❌ Google affiche "Article non trouvé" ou un contenu vide
- ❌ Le HTML initial ne contient pas le contenu de l'article
- ❌ Un spinner/loading apparaît avant le contenu

### Cause Racine

Le problème vient de l'utilisation d'un **Client Component** avec `fetch()` côté client :

```jsx
// ❌ MAUVAIS - Client Component
"use client";
export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch(`/api/blog/${slug}`).then(...); // Chargement après rendu
  }, []);
  
  // Le contenu n'est pas dans le HTML initial !
}
```

**Résultat :** Googlebot lit le HTML initial qui ne contient pas le contenu → page vide dans l'index.

---

## ✅ Solution : Convertir en Server Component avec Pré-génération Statique

### Étape 1 : Supprimer "use client" et les Hooks Client

**Avant :**
```jsx
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  // ...
}
```

**Après :**
```jsx
// Pas de "use client" = Server Component par défaut
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  // ...
}
```

### Étape 2 : Ajouter generateStaticParams()

Cette fonction indique à Next.js quelles pages pré-générer au build :

```jsx
// app/blog/[slug]/page.jsx
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

// ✅ Pré-générer toutes les pages au build
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

// ✅ ISR : régénérer toutes les heures (optionnel)
export const revalidate = 3600;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound(); // Utiliser notFound() au lieu d'un rendu conditionnel
  }
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
```

### Étape 3 : Charger les Données Côté Serveur

Dans votre fonction `getPostBySlug()` (dans `lib/blog.js`), assurez-vous qu'elle lit les fichiers directement :

```jsx
// lib/blog.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Traiter le markdown en HTML
  // ...
  
  return {
    slug,
    title: data.title,
    contentHtml: processedContent,
    // ...
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}
```

### Étape 4 : Gérer les Erreurs avec notFound()

Créer une page `not-found.jsx` personnalisée :

```jsx
// app/blog/[slug]/not-found.jsx
import Link from "next/link";

export const metadata = {
  title: "Article non trouvé",
  description: "L'article que vous recherchez n'existe pas.",
  robots: {
    index: false, // ✅ Important : ne pas indexer les 404
    follow: false,
  },
  alternates: {
    canonical: "/blog", // ✅ Canonical vers /blog
  },
};

export default function BlogNotFound() {
  return (
    <div>
      <h1>Article non trouvé</h1>
      <Link href="/blog">Retour au blog</Link>
    </div>
  );
}
```

Dans votre page, utiliser `notFound()` :

```jsx
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound(); // ✅ Retourne la page not-found.jsx
  }
  
  // ...
}
```

### Étape 5 : Améliorer les Métadonnées

Créer un fichier `metadata.js` ou ajouter `generateMetadata()` :

```jsx
// app/blog/[slug]/metadata.js
import { getPostBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
      robots: {
        index: false,
        follow: false,
      },
      alternates: {
        canonical: "/blog",
      },
    };
  }

  return {
    title: `${post.title} | Votre Site`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      url: `https://votre-site.com/blog/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://votre-site.com/blog/${slug}`,
    },
  };
}
```

### Étape 6 : Éviter les Composants Client avec Hooks

Si vous utilisez des composants qui nécessitent des hooks (comme `usePathname()`), créez des versions Server Component séparées :

**Problème :**
```jsx
// ❌ SEONavigation.jsx utilise usePathname()
import { usePathname } from "next/navigation";
```

**Solution :**
```jsx
// ✅ Créer SEOBreadcrumb.jsx (Server Component pur)
// app/components/SEOBreadcrumb.jsx
import Link from "next/link";
import Script from "next/script";

export default function SEOBreadcrumb({ items = [] }) {
  // Pas de hooks, compatible Server Component
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })),
          }),
        }}
      />
      <nav>
        {/* Rendu visuel */}
      </nav>
    </>
  );
}
```

---

## 📝 Checklist de Vérification

- [ ] ✅ Page sans `"use client"`
- [ ] ✅ Fonction `generateStaticParams()` ajoutée
- [ ] ✅ Données chargées avec `await getPostBySlug()` (côté serveur)
- [ ] ✅ Utilisation de `notFound()` pour les 404
- [ ] ✅ Page `not-found.jsx` créée avec métadonnées correctes
- [ ] ✅ `generateMetadata()` pour les métadonnées SEO
- [ ] ✅ Aucun composant avec hooks (`usePathname`, etc.) dans les Server Components
- [ ] ✅ Contenu HTML visible dans le source de la page

---

## 🧪 Tests à Effectuer

### 1. Vérifier le Build

```bash
npm run build
```

Vérifier dans les logs que vos pages sont générées :
```
Route (app)                              Size
┌ ○ /blog/[slug]                         XXX kB
```

### 2. Vérifier le HTML Source

Ouvrir la page en production et faire "Afficher le code source" :

```bash
curl https://votre-site.com/blog/mon-article
```

✅ **Doit contenir** :
```html
<h1>Titre de l'article</h1>
<div>Contenu de l'article...</div>
```

❌ **Ne doit PAS contenir** :
```html
<div>Chargement...</div>
<script>fetch('/api/blog/...')</script>
```

### 3. Tester avec Google Search Console

1. Utiliser l'outil "Inspecter l'URL"
2. Demander l'indexation
3. Vérifier que le HTML rendu contient le contenu

### 4. Vérifier avec un Outil SEO

- **Google Rich Results Test** : https://search.google.com/test/rich-results
- **PageSpeed Insights** : https://pagespeed.web.dev/

---

## 🚀 Résultat Attendu

### Avant (Client Component)
```html
<!-- HTML initial envoyé à Google -->
<div id="__next">
  <div>Chargement...</div>
</div>
<script>
  // Contenu chargé après via JavaScript
</script>
```

### Après (Server Component)
```html
<!-- HTML initial envoyé à Google -->
<div id="__next">
  <article>
    <h1>Titre de l'article</h1>
    <div>
      <p>Contenu complet de l'article...</p>
    </div>
  </article>
</div>
```

✅ **Google voit maintenant le contenu immédiatement !**

---

## 📚 Ressources

- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

---

## ⚠️ Erreurs Courantes

### Erreur : "usePathname can only be used in Client Components"

**Solution :** Créer une version Server Component du composant qui utilise `usePathname()`, ou passer le pathname en prop depuis un composant parent Client.

### Erreur : "Cannot read file during build"

**Solution :** Vérifier que le dossier `content/blog/` existe et que les fichiers sont accessibles. Ajouter des logs de débogage :

```jsx
console.log("Chemin:", path.join(process.cwd(), "content/blog"));
console.log("Existe:", fs.existsSync(postsDirectory));
```

### Erreur : "Page not found" après build

**Solution :** Vérifier que `generateStaticParams()` retourne bien tous les slugs et que le format correspond (`{ slug: "..." }`).

---

**✅ Ce guide peut être réutilisé pour tous vos projets Next.js avec le même problème !**
