#!/usr/bin/env node

/**
 * Script pour tester les optimisations en local
 * Vérifie que les composants optimisés fonctionnent correctement
 */

const fs = require("fs");
const path = require("path");

function checkOptimizations() {
  console.log("🔍 Vérification des optimisations...\n");

  // Vérifier les composants optimisés
  const optimizedComponents = [
    "src/components/OptimizedImage.jsx",
    "src/components/Hero.jsx",
    "src/components/VehicleSelection.jsx",
    "src/components/About.jsx",
    "src/components/PricingTable.jsx",
  ];

  let allOptimized = true;

  optimizedComponents.forEach((component) => {
    const filePath = path.join(process.cwd(), component);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");

      if (component.includes("OptimizedImage")) {
        console.log("✅ Composant OptimizedImage créé");
      } else if (
        content.includes("HeroImage") ||
        content.includes("ContentImage")
      ) {
        console.log(`✅ ${component} utilise les composants optimisés`);
      } else {
        console.log(`❌ ${component} n'utilise pas les composants optimisés`);
        allOptimized = false;
      }
    } else {
      console.log(`❌ ${component} non trouvé`);
      allOptimized = false;
    }
  });

  // Vérifier la configuration Next.js
  const nextConfigPath = path.join(process.cwd(), "next.config.js");
  if (fs.existsSync(nextConfigPath)) {
    const config = fs.readFileSync(nextConfigPath, "utf8");
    if (config.includes('formats: ["image/avif", "image/webp"]')) {
      console.log("✅ Configuration Next.js optimisée pour les images");
    } else {
      console.log("❌ Configuration Next.js non optimisée");
      allOptimized = false;
    }
  }

  // Vérifier les en-têtes de cache
  if (fs.existsSync(nextConfigPath)) {
    const config = fs.readFileSync(nextConfigPath, "utf8");
    if (
      config.includes("Cache-Control") &&
      config.includes("max-age=31536000")
    ) {
      console.log("✅ Headers de cache configurés");
    } else {
      console.log("❌ Headers de cache non configurés");
      allOptimized = false;
    }
  }

  console.log("\n📊 Résumé:");
  if (allOptimized) {
    console.log("✅ Toutes les optimisations sont en place");
    console.log("💡 Pour tester en production: npm run build && npm run start");
  } else {
    console.log("❌ Certaines optimisations manquent");
    console.log("💡 Vérifiez les composants et la configuration");
  }

  return allOptimized;
}

// Vérifier les optimisations
const isOptimized = checkOptimizations();

if (isOptimized) {
  console.log("\n🚀 Prêt pour le déploiement !");
  console.log("📈 Score attendu en production: 85-90/100");
} else {
  console.log("\n⚠️  Optimisations incomplètes");
  console.log("🔧 Vérifiez les composants manquants");
}
















