import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

const postsDirectory = path.join(process.cwd(), "content/blog");

/** Brouillon si `published: false` dans le frontmatter ; absent = publié. */
export function isPostPublished(data) {
  return data?.published !== false;
}

/** Frontmatter YAML : `keywords` peut être une liste ou une chaîne « a, b, c ». */
export function normalizeKeywords(keywords) {
  if (keywords == null) return [];
  if (Array.isArray(keywords)) {
    return keywords.map(String).map((k) => k.trim()).filter(Boolean);
  }
  if (typeof keywords === "string") {
    return keywords
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
  }
  return [];
}

// Récupérer tous les articles publiés
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
        keywords: normalizeKeywords(data.keywords),
      };
    })
    .filter((post) => isPostPublished(post));

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

  if (!isPostPublished(data)) {
    return null;
  }

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
    ...data,
    keywords: normalizeKeywords(data.keywords),
  };
}

// Récupérer tous les slugs publiés (génération statique, sitemap)
export function getAllPostSlugs() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
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
