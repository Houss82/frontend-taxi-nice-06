#!/usr/bin/env node

/**
 * Script de validation des catégories du blog
 * 
 * Ce script vérifie que toutes les catégories utilisées dans les articles
 * sont bien mappées dans blogCategories.jsx
 * 
 * Usage:
 *   node scripts/validate-categories.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(process.cwd(), 'content/blog');
const categoriesFile = path.join(process.cwd(), 'src/lib/blogCategories.jsx');

// Fonction pour extraire les catégories depuis blogCategories.jsx
function extractCategoriesFromConfig() {
  try {
    const content = fs.readFileSync(categoriesFile, 'utf8');
    const articleCategories = [];
    
    // Extraire tous les articleCategories des objets de configuration
    const regex = /articleCategories:\s*\[([^\]]+)\]/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      const categoriesString = match[1];
      // Extraire les catégories entre guillemets
      const categoryRegex = /"([^"]+)"/g;
      let categoryMatch;
      
      while ((categoryMatch = categoryRegex.exec(categoriesString)) !== null) {
        articleCategories.push(categoryMatch[1]);
      }
    }
    
    return [...new Set(articleCategories)]; // Supprimer les doublons
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture de ${categoriesFile}:`, error.message);
    return [];
  }
}

// Fonction pour extraire les catégories des articles
function extractCategoriesFromArticles() {
  const categories = new Set();
  
  if (!fs.existsSync(blogDir)) {
    console.error(`❌ Le dossier ${blogDir} n'existe pas`);
    return [];
  }
  
  // Fonction pour récupérer récursivement tous les fichiers .md
  function getMarkdownFiles(dir, relativePath = '') {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relPath = relativePath ? path.join(relativePath, item.name) : item.name;
      if (item.isDirectory()) {
        results.push(...getMarkdownFiles(fullPath, relPath));
      } else if (item.name.endsWith('.md') && !item.name.startsWith('_') && item.name !== 'README.md') {
        results.push({ path: fullPath, relPath });
      }
    }
    return results;
  }

  // Lire tous les fichiers .md dans blog/ et draft/ (récursivement)
  const blogFiles = getMarkdownFiles(blogDir);
  const draftFiles = getMarkdownFiles(path.join(blogDir, 'draft'));
  const allFiles = [...blogFiles, ...draftFiles];
  
  allFiles.forEach(({ path: filePath }) => {
      try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        
        if (data.category) {
          categories.add(data.category);
        }
      } catch (error) {
        console.error(`⚠️  Erreur lors de la lecture de ${filePath}:`, error.message);
      }
  });
  
  return Array.from(categories);
}

// Fonction principale
function main() {
  console.log('🔍 Validation des catégories du blog...\n');
  
  // Extraire les catégories
  const configuredCategories = extractCategoriesFromConfig();
  const articleCategories = extractCategoriesFromArticles();
  
  console.log(`📋 Catégories configurées dans blogCategories.jsx: ${configuredCategories.length}`);
  console.log(`📝 Catégories utilisées dans les articles: ${articleCategories.length}\n`);
  
  // Trouver les catégories non mappées
  const unmappedCategories = articleCategories.filter(
    cat => !configuredCategories.includes(cat)
  );
  
  // Trouver les catégories configurées mais non utilisées
  const unusedCategories = configuredCategories.filter(
    cat => !articleCategories.includes(cat)
  );
  
  // Afficher les résultats
  if (unmappedCategories.length === 0) {
    console.log('✅ Toutes les catégories sont correctement mappées !\n');
  } else {
    console.log('❌ Catégories non mappées (à ajouter dans blogCategories.jsx):');
    unmappedCategories.forEach(cat => {
      console.log(`   - "${cat}"`);
    });
    console.log('');
  }
  
  if (unusedCategories.length > 0) {
    console.log('ℹ️  Catégories configurées mais non utilisées dans les articles:');
    unusedCategories.forEach(cat => {
      console.log(`   - "${cat}"`);
    });
    console.log('');
  }
  
  // Afficher le mapping complet
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 Mapping des catégories:\n');
  
  articleCategories.forEach(cat => {
    const isMapped = configuredCategories.includes(cat);
    const status = isMapped ? '✅' : '❌';
    console.log(`${status} "${cat}"`);
  });
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Code de sortie
  if (unmappedCategories.length > 0) {
    console.log('💡 Pour corriger, ajoutez les catégories manquantes dans src/lib/blogCategories.jsx\n');
    process.exit(1);
  } else {
    console.log('✅ Validation réussie !\n');
    process.exit(0);
  }
}

// Exécuter le script
try {
  main();
} catch (error) {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
}

