#!/usr/bin/env node

/**
 * Script d'optimisation des images pour améliorer les performances
 * Convertit les images PNG/JPEG en WebP/AVIF et les redimensionne
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration des tailles d'images
const IMAGE_SIZES = {
  hero: { width: 1920, height: 1080, quality: 90 },
  content: { width: 800, height: 600, quality: 85 },
  thumbnail: { width: 400, height: 300, quality: 80 },
  icon: { width: 96, height: 64, quality: 80 },
};

// Images critiques à optimiser en priorité
const CRITICAL_IMAGES = [
  { src: "bgimage10.png", type: "hero", priority: true },
  { src: "imageGLC.png", type: "content", priority: true },
  { src: "image-van.png", type: "content", priority: true },
  { src: "expérience2.jpeg", type: "content", priority: true },
  { src: "expertise.jpg", type: "content", priority: false },
  { src: "perso.jpeg", type: "content", priority: false },
  { src: "premium.jpeg", type: "content", priority: false },
];

async function optimizeImage(imagePath, outputDir, config) {
  try {
    const inputPath = path.join(process.cwd(), "public", imagePath);
    const baseName = path.parse(imagePath).name;

    // Vérifier si l'image source existe
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Image non trouvée: ${imagePath}`);
      return;
    }

    // Créer le dossier de sortie s'il n'existe pas
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const sharpInstance = sharp(inputPath);
    const metadata = await sharpInstance.metadata();

    console.log(
      `🔄 Optimisation de ${imagePath} (${metadata.width}x${metadata.height})`
    );

    // Redimensionner et optimiser
    const resized = sharpInstance
      .resize(config.width, config.height, {
        fit: "cover",
        position: "center",
      })
      .sharpen()
      .normalize();

    // Générer WebP
    await resized
      .webp({ quality: config.quality })
      .toFile(path.join(outputDir, `${baseName}.webp`));

    // Générer AVIF (format plus moderne)
    await resized
      .avif({ quality: config.quality })
      .toFile(path.join(outputDir, `${baseName}.avif`));

    // Générer une version JPEG optimisée comme fallback
    await resized
      .jpeg({ quality: config.quality, progressive: true })
      .toFile(path.join(outputDir, `${baseName}-optimized.jpg`));

    console.log(`✅ ${imagePath} optimisé avec succès`);

    // Afficher les économies de taille
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(path.join(outputDir, `${baseName}.webp`)).size;
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(
      1
    );

    console.log(
      `   📊 Économies: ${savings}% (${(originalSize / 1024 / 1024).toFixed(
        2
      )}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB)`
    );
  } catch (error) {
    console.error(
      `❌ Erreur lors de l'optimisation de ${imagePath}:`,
      error.message
    );
  }
}

async function main() {
  console.log("🚀 Début de l'optimisation des images...\n");

  const outputDir = path.join(process.cwd(), "public", "optimized");

  // Optimiser les images critiques en priorité
  for (const image of CRITICAL_IMAGES) {
    if (image.priority) {
      await optimizeImage(image.src, outputDir, IMAGE_SIZES[image.type]);
    }
  }

  console.log("\n📋 Résumé des optimisations:");
  console.log("   - Images converties en WebP et AVIF");
  console.log("   - Images redimensionnées selon leur usage");
  console.log("   - Qualité optimisée pour le web");
  console.log("   - Fichiers sauvegardés dans /public/optimized/");

  console.log("\n💡 Prochaines étapes:");
  console.log(
    "   1. Mettre à jour les composants pour utiliser les images optimisées"
  );
  console.log("   2. Tester les performances avec PageSpeed Insights");
  console.log("   3. Déployer les changements");
}

// Vérifier si Sharp est installé
try {
  require("sharp");
  main().catch(console.error);
} catch (error) {
  console.log("❌ Sharp n'est pas installé. Installation...");
  console.log("Exécutez: npm install sharp --save-dev");
  console.log("Puis relancez: node scripts/optimize-images.js");
}

































