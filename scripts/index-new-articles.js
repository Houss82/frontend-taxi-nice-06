#!/usr/bin/env node

/**
 * Script pour identifier les nouveaux articles publiés et générer les URLs à indexer
 * 
 * Ce script compare les articles publiés avec ceux déjà indexés et liste les nouveaux
 * à indexer dans Google Search Console
 * 
 * Usage:
 *   node scripts/index-new-articles.js
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'content/blog');
const baseUrl = 'https://taxi-nice-06.com';

// Fonction pour parser le frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return null;
  }
  
  const frontmatter = match[1];
  const data = {};
  
  const dateMatch = frontmatter.match(/date:\s*"([^"]*)"/);
  const publishedMatch = frontmatter.match(/published:\s*(true|false)/);
  
  if (dateMatch) {
    data.date = dateMatch[1];
  }
  
  if (publishedMatch) {
    data.published = publishedMatch[1] === 'true';
  } else {
    data.published = true; // Par défaut publié si non spécifié
  }
  
  return data;
}

// Fonction pour lire les articles publiés
function getPublishedArticles() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDir);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') && !fileName.startsWith('_') && fileName !== 'README.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const parsed = parseFrontmatter(fileContents);
      
      if (!parsed || parsed.published !== true) {
        return null;
      }
      
      return {
        slug,
        url: `${baseUrl}/blog/${slug}`,
        date: parsed.date || new Date().toISOString().split('T')[0],
        fileName,
      };
    })
    .filter((item) => item !== null);
}

// Fonction principale
function main() {
  console.log('🔍 Recherche des articles publiés...\n');
  
  const publishedArticles = getPublishedArticles();
  
  if (publishedArticles.length === 0) {
    console.log('ℹ️  Aucun article publié trouvé.\n');
    return;
  }
  
  // Trier par date (plus récent en premier)
  publishedArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  
  console.log(`📊 ${publishedArticles.length} article(s) publié(s) trouvé(s)\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📝 URLs à indexer dans Google Search Console :\n');
  
  publishedArticles.forEach((article, index) => {
    console.log(`${index + 1}. ${article.url}`);
    console.log(`   Slug: ${article.slug}`);
    console.log(`   Date: ${article.date}`);
    console.log('');
  });
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n📋 Instructions pour l\'indexation :\n');
  console.log('1. Allez sur Google Search Console : https://search.google.com/search-console');
  console.log('2. Sélectionnez votre propriété : taxi-nice-06.com');
  console.log('3. Allez dans "Inspection d\'URL"');
  console.log('4. Pour chaque URL ci-dessus :');
  console.log('   - Collez l\'URL dans le champ de recherche');
  console.log('   - Cliquez sur "Demander l\'indexation"');
  console.log('   - Attendez la validation (quelques minutes à quelques heures)');
  console.log('\n💡 Astuce : Vous pouvez aussi utiliser l\'API Google Search Console');
  console.log('   pour automatiser l\'indexation (nécessite une configuration API).\n');
  
  // Générer un fichier avec les URLs pour faciliter le copier-coller
  const urlsFile = path.join(process.cwd(), 'scripts', 'urls-to-index.txt');
  const urlsContent = publishedArticles.map(a => a.url).join('\n');
  fs.writeFileSync(urlsFile, urlsContent, 'utf8');
  
  console.log(`✅ Liste des URLs sauvegardée dans : ${urlsFile}`);
  console.log('   Vous pouvez copier-coller ces URLs directement dans Google Search Console.\n');
}

// Exécuter le script
main();


