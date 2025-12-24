#!/usr/bin/env node

/**
 * Script automatique pour publier les articles dont la date correspond à aujourd'hui
 * 
 * Ce script :
 * 1. Vérifie tous les articles dans content/blog/draft/
 * 2. Si la date de l'article = date du jour ET published: false
 * 3. Change published: false → published: true
 * 4. Déplace le fichier de draft/ vers blog/
 * 
 * Usage:
 *   node scripts/auto-publish-articles.js
 * 
 * À exécuter tous les jours à 16h30 via cron ou scheduler
 */

const fs = require('fs');
const path = require('path');

// Déterminer le répertoire de base (peut être différent dans GitHub Actions)
const baseDir = process.cwd();
const draftDir = path.join(baseDir, 'content/blog/draft');
const blogDir = path.join(baseDir, 'content/blog');

// Log pour débogage
if (process.env.CI || process.argv.includes('--debug')) {
  console.log(`🔍 Debug: baseDir = ${baseDir}`);
  console.log(`🔍 Debug: draftDir = ${draftDir}`);
  console.log(`🔍 Debug: blogDir = ${blogDir}`);
  console.log(`🔍 Debug: draftDir exists = ${fs.existsSync(draftDir)}`);
  console.log(`🔍 Debug: blogDir exists = ${fs.existsSync(blogDir)}`);
}

// Fonction pour parser le frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return null;
  }
  
  const frontmatter = match[1];
  const data = {};
  
  // Parser les champs du frontmatter
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
  
  return {
    frontmatter,
    fullMatch: match[0],
    data
  };
}

// Fonction pour formater la date en français
function formatDateFrench(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Fonction pour publier un article
function publishArticle(fileName) {
  try {
    const draftFile = path.join(draftDir, fileName);
    const blogFile = path.join(blogDir, fileName);
    
    // Vérifier que le fichier draft existe
    if (!fs.existsSync(draftFile)) {
      console.error(`❌ Erreur: Fichier draft introuvable: ${fileName}`);
      return false;
    }
    
    // Vérifier que le dossier blog existe, sinon le créer
    if (!fs.existsSync(blogDir)) {
      console.log(`ℹ️  Création du dossier blog: ${blogDir}`);
      fs.mkdirSync(blogDir, { recursive: true });
    }
    
    // Lire le contenu du fichier
    let content = fs.readFileSync(draftFile, 'utf8');
    
    // Parser le frontmatter
    const parsed = parseFrontmatter(content);
    if (!parsed) {
      console.error(`❌ Erreur: Impossible de parser le frontmatter de ${fileName}`);
      return false;
    }
    
    const { frontmatter, fullMatch, data } = parsed;
    
    // Vérifier que published est false
    if (data.published !== false) {
      console.log(`⏭️  ${fileName}: Déjà publié ou published n'est pas false, ignoré`);
      return false;
    }
    
    // Mettre à jour published: false → published: true
    let updatedFrontmatter = frontmatter.replace(/published:\s*false/, 'published: true');
    
    // Si published n'existe pas, l'ajouter
    if (!frontmatter.includes('published:')) {
      updatedFrontmatter = `published: true\n${updatedFrontmatter}`;
    }
    
    // Mettre à jour la date de modification en bas de l'article
    const modificationDate = formatDateFrench(data.date);
    content = content.replace(
      /_Article mis à jour le .*_/,
      `_Article mis à jour le ${modificationDate}_`
    );
    
    // Remplacer le frontmatter
    content = content.replace(fullMatch, `---\n${updatedFrontmatter}\n---`);
    
    // Copier le fichier vers le dossier blog
    fs.writeFileSync(blogFile, content, 'utf8');
    
    // Supprimer le fichier du dossier draft
    fs.unlinkSync(draftFile);
    
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la publication de ${fileName}: ${error.message}`);
    return false;
  }
}

// Fonction principale
function main() {
  console.log('🚀 Démarrage de la vérification automatique des articles...\n');
  
  // Log pour débogage
  if (process.env.CI || process.argv.includes('--debug')) {
    console.log(`🔍 Debug: Working directory = ${process.cwd()}`);
    console.log(`🔍 Debug: draftDir = ${draftDir}`);
    console.log(`🔍 Debug: blogDir = ${blogDir}`);
  }
  
  // Vérifier que le dossier draft existe
  if (!fs.existsSync(draftDir)) {
    console.log(`ℹ️  Le dossier draft n'existe pas: ${draftDir}`);
    console.log(`ℹ️  Vérification du répertoire parent...`);
    const parentDir = path.dirname(draftDir);
    if (fs.existsSync(parentDir)) {
      console.log(`ℹ️  Répertoire parent trouvé: ${parentDir}`);
      console.log(`ℹ️  Contenu: ${fs.readdirSync(parentDir).join(', ')}`);
    }
    console.log('✅ Aucun article à vérifier.\n');
    return;
  }
  
  // Obtenir la date du jour au format YYYY-MM-DD
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  
  console.log(`📅 Date du jour: ${todayString}\n`);
  
  // Lire tous les fichiers .md dans draft/
  const files = fs.readdirSync(draftDir).filter(
    fileName => fileName.endsWith('.md') && !fileName.startsWith('_') && fileName !== 'README.md'
  );
  
  if (files.length === 0) {
    console.log('ℹ️  Aucun article trouvé dans le dossier draft.\n');
    return;
  }
  
  console.log(`📁 ${files.length} article(s) trouvé(s) dans draft/\n`);
  
  let publishedCount = 0;
  let skippedCount = 0;
  
  // Vérifier chaque fichier
  for (const fileName of files) {
    try {
      const draftFile = path.join(draftDir, fileName);
      
      // Vérifier que le fichier existe et est lisible
      if (!fs.existsSync(draftFile)) {
        console.error(`⚠️  ${fileName}: Fichier introuvable, ignoré`);
        skippedCount++;
        continue;
      }
      
      const content = fs.readFileSync(draftFile, 'utf8');
      const parsed = parseFrontmatter(content);
      
      if (!parsed) {
        console.error(`❌ ${fileName}: Impossible de parser le frontmatter`);
        skippedCount++;
        continue;
      }
      
      const { data } = parsed;
      
      // Vérifier si la date correspond à aujourd'hui
      if (data.date === todayString) {
        // Vérifier si published est false
        if (data.published === false) {
          console.log(`📝 ${fileName}: Date correspond à aujourd'hui (${data.date})`);
          console.log(`   Statut: published: false → published: true`);
          
          // Publier l'article
          const success = publishArticle(fileName);
          
          if (success) {
            console.log(`✅ ${fileName}: Publié avec succès et déplacé vers blog/\n`);
            publishedCount++;
          } else {
            console.log(`❌ ${fileName}: Erreur lors de la publication\n`);
            skippedCount++;
          }
        } else {
          console.log(`⏭️  ${fileName}: Date correspond mais déjà publié (published: ${data.published})\n`);
          skippedCount++;
        }
      } else {
        // Date ne correspond pas, afficher pour info si en mode verbose
        if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
          console.log(`⏭️  ${fileName}: Date prévue ${data.date} (pas aujourd'hui)\n`);
        }
        skippedCount++;
      }
    } catch (error) {
      // Gérer les erreurs individuelles sans faire échouer tout le script
      console.error(`❌ ${fileName}: Erreur lors du traitement - ${error.message}`);
      skippedCount++;
      continue;
    }
  }
  
  // Résumé
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Résumé:`);
  console.log(`   ✅ Articles publiés: ${publishedCount}`);
  console.log(`   ⏭️  Articles ignorés: ${skippedCount}`);
  console.log(`   📁 Total vérifié: ${files.length}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  if (publishedCount > 0) {
    console.log('💡 Les articles publiés sont maintenant visibles sur votre site !\n');
  }
}

// Exécuter le script
try {
  main();
  // Toujours terminer avec succès même si aucun article n'a été publié
  // (c'est normal si aucun article n'a la date d'aujourd'hui)
  console.log('✅ Script terminé avec succès\n');
  process.exit(0); // Succès
} catch (error) {
  console.error('❌ Erreur fatale:', error);
  console.error('Stack:', error.stack);
  process.exit(1); // Échec
}

