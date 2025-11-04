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
    console.warn(`⚠️ Dossier blog introuvable: ${postsDirectory}`);
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

  // Logs de débogage (seulement en développement)
  if (process.env.NODE_ENV === "development") {
    console.log(`📄 Recherche article: ${slug}`);
    console.log(`📂 Chemin recherché: ${fullPath}`);
    console.log(`📁 Dossier blog: ${postsDirectory}`);
    console.log(`✅ Dossier existe: ${fs.existsSync(postsDirectory)}`);
  }

  if (!fs.existsSync(fullPath)) {
    if (process.env.NODE_ENV === "development") {
      console.error(`❌ Fichier introuvable: ${fullPath}`);
      // Lister les fichiers disponibles pour aider au débogage
      if (fs.existsSync(postsDirectory)) {
        const availableFiles = fs.readdirSync(postsDirectory);
        console.log(`📋 Fichiers disponibles:`, availableFiles);
      }
    }
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
    console.warn(`⚠️ Dossier blog introuvable: ${postsDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });

  if (process.env.NODE_ENV === "development") {
    console.log(
      `📝 Slugs générés:`,
      slugs.map((s) => s.slug)
    );
  }

  return slugs;
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
