#!/usr/bin/env node

/**
 * Script pour publier un article depuis le dossier draft vers le dossier blog
 * Change published: false à published: true et déplace le fichier
 * 
 * Usage:
 *   node scripts/publish-article.js nom-article [date]
 * 
 * Exemples:
 *   node scripts/publish-article.js taxi-vieux-nice
 *   node scripts/publish-article.js taxi-cimiez-nice 2025-12-20
 */

const fs = require('fs');
const path = require('path');

const draftDir = path.join(process.cwd(), 'content/blog/draft');
const blogDir = path.join(process.cwd(), 'content/blog');

// Récupérer les arguments
const articleName = process.argv[2];
const publishDateArg = process.argv[3]; // Date passée en argument (optionnelle)

if (!articleName) {
  console.error('❌ Erreur: Vous devez spécifier le nom de l\'article');
  console.log('\nUsage: node scripts/publish-article.js nom-article [date]');
  console.log('\nExemples:');
  console.log('  node scripts/publish-article.js taxi-vieux-nice');
  console.log('  node scripts/publish-article.js taxi-cimiez-nice 2025-12-20');
  process.exit(1);
}

// Vérifier que le fichier existe dans draft
const draftFile = path.join(draftDir, `${articleName}.md`);
const blogFile = path.join(blogDir, `${articleName}.md`);

if (!fs.existsSync(draftFile)) {
  console.error(`❌ Erreur: L'article "${articleName}.md" n'existe pas dans le dossier draft`);
  console.log(`\nFichiers disponibles dans draft:`);
  const files = fs.readdirSync(draftDir).filter(f => f.endsWith('.md') && f !== 'README.md');
  if (files.length > 0) {
    files.forEach(f => console.log(`  - ${f}`));
  } else {
    console.log(`  (aucun fichier trouvé)`);
  }
  process.exit(1);
}

if (fs.existsSync(blogFile)) {
  console.error(`❌ Erreur: L'article "${articleName}.md" existe déjà dans le dossier blog`);
  console.log(`💡 Pour le republier, supprimez-le d'abord du dossier blog ou modifiez-le directement`);
  process.exit(1);
}

// Lire le contenu du fichier
let content = fs.readFileSync(draftFile, 'utf8');

// Mettre à jour la date dans le frontmatter
const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
const match = content.match(frontmatterRegex);

if (match) {
  let frontmatter = match[1];
  
  // Déterminer quelle date utiliser
  let finalDate;
  if (publishDateArg) {
    // Date passée en argument, l'utiliser
    finalDate = publishDateArg;
    console.log(`📅 Utilisation de la date spécifiée: ${finalDate}`);
  } else {
    // Pas de date passée en argument, lire la date existante dans le fichier
    const dateMatch = frontmatter.match(/date:\s*"([^"]*)"/);
    if (dateMatch && dateMatch[1]) {
      finalDate = dateMatch[1];
      console.log(`📅 Utilisation de la date existante dans le fichier: ${finalDate}`);
    } else {
      // Pas de date dans le fichier, utiliser la date du jour
      finalDate = new Date().toISOString().split('T')[0];
      console.log(`📅 Aucune date trouvée, utilisation de la date du jour: ${finalDate}`);
    }
  }
  
  // Mettre à jour ou ajouter la date
  if (frontmatter.includes('date:')) {
    frontmatter = frontmatter.replace(/date:\s*"[^"]*"/, `date: "${finalDate}"`);
  } else {
    frontmatter = `date: "${finalDate}"\n${frontmatter}`;
  }
  
  // Changer published: false à published: true
  if (frontmatter.includes('published:')) {
    frontmatter = frontmatter.replace(/published:\s*(true|false)/, 'published: true');
  } else {
    // Ajouter published: true si absent
    frontmatter = `published: true\n${frontmatter}`;
  }
  
  // Mettre à jour la date de modification en bas de l'article
  const modificationDate = new Date(finalDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  content = content.replace(
    /_Article mis à jour le .*_/,
    `_Article mis à jour le ${modificationDate}_`
  );
  
  content = content.replace(frontmatterRegex, `---\n${frontmatter}\n---`);
}

// Copier le fichier vers le dossier blog avec published: true
fs.writeFileSync(blogFile, content, 'utf8');

// Supprimer le fichier du dossier draft
fs.unlinkSync(draftFile);

// Récupérer la date finale utilisée depuis le contenu modifié
const finalDateMatch = content.match(/date:\s*"([^"]*)"/);
const finalDateUsed = finalDateMatch ? finalDateMatch[1] : 'Date non trouvée';

console.log(`✅ Article "${articleName}.md" publié avec succès !`);
console.log(`📅 Date de publication: ${finalDateUsed}`);
console.log(`📝 Statut: published: true`);
console.log(`📁 Fichier déplacé de: ${draftFile}`);
console.log(`📁 Vers: ${blogFile}`);
console.log(`\n💡 L'article est maintenant visible sur votre site !`);
