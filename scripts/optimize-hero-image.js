#!/usr/bin/env node

/**
 * Script pour optimiser spécifiquement l'image hero bgimage10.png
 * Cible le problème LCP principal
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHeroImage() {
  const inputPath = path.join(process.cwd(), 'public', 'bgimage10.png');
  const outputDir = path.join(process.cwd(), 'public', 'optimized');
  
  if (!fs.existsSync(inputPath)) {
    console.log('❌ Image bgimage10.png non trouvée');
    return;
  }

  // Créer le dossier de sortie
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    console.log('🔄 Optimisation de bgimage10.png pour LCP...');
    
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Taille originale: ${metadata.width}x${metadata.height} (${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB)`);

    // Optimisations multiples pour différentes tailles d'écran
    const sizes = [
      { width: 640, height: 360, suffix: 'sm' },
      { width: 750, height: 422, suffix: 'md' },
      { width: 1080, height: 608, suffix: 'lg' },
      { width: 1920, height: 1080, suffix: 'xl' }
    ];

    for (const size of sizes) {
      // WebP ultra-optimisé
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ 
          quality: 85,
          effort: 6, // Maximum compression
          smartSubsample: true
        })
        .toFile(path.join(outputDir, `bgimage10-${size.suffix}.webp`));

      // AVIF ultra-optimisé
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .avif({ 
          quality: 80,
          effort: 9 // Maximum compression
        })
        .toFile(path.join(outputDir, `bgimage10-${size.suffix}.avif`));

      // JPEG optimisé comme fallback
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(path.join(outputDir, `bgimage10-${size.suffix}.jpg`));

      console.log(`   ✅ Taille ${size.suffix} générée`);
    }

    // Créer une version ultra-compressée pour le préchargement
    await sharp(inputPath)
      .resize(320, 180, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 60,
        effort: 6
      })
      .toFile(path.join(outputDir, 'bgimage10-tiny.webp'));

    console.log('✅ Optimisation terminée !');
    console.log('💡 Remplacez bgimage10.png par les versions optimisées');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Vérifier si Sharp est installé
try {
  require('sharp');
  optimizeHeroImage().catch(console.error);
} catch (error) {
  console.log('❌ Sharp n\'est pas installé. Installation...');
  console.log('Exécutez: npm install sharp --save-dev');
}
