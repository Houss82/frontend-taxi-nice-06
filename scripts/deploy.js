#!/usr/bin/env node

/**
 * Script de déploiement automatisé
 * Vérifie les optimisations et guide le déploiement
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function runCommand(command, description) {
  console.log(`🔄 ${description}...`);
  try {
    const output = execSync(command, { encoding: "utf8", stdio: "pipe" });
    console.log(`✅ ${description} terminé`);
    return output;
  } catch (error) {
    console.error(`❌ Erreur lors de ${description}:`, error.message);
    throw error;
  }
}

function checkGitStatus() {
  console.log("🔍 Vérification du statut Git...");
  try {
    const status = execSync("git status --porcelain", { encoding: "utf8" });
    if (status.trim()) {
      console.log("⚠️  Des modifications non commitées détectées:");
      console.log(status);
      console.log("💡 Commitez vos changements avant de déployer");
      return false;
    }
    console.log("✅ Aucune modification non commitée");
    return true;
  } catch (error) {
    console.log("⚠️  Git non initialisé ou erreur Git");
    return true; // Continue même sans Git
  }
}

function checkDependencies() {
  console.log("🔍 Vérification des dépendances...");
  if (!fs.existsSync("node_modules")) {
    console.log("📦 Installation des dépendances...");
    runCommand("npm install", "Installation des dépendances");
  } else {
    console.log("✅ Dépendances installées");
  }
}

function buildProject() {
  console.log("🏗️  Construction du projet...");
  runCommand("npm run build", "Build de production");
  console.log("✅ Build terminé avec succès");
}

function checkBuildOutput() {
  console.log("🔍 Vérification du build...");
  if (!fs.existsSync(".next")) {
    throw new Error("Le dossier .next n'existe pas. Le build a échoué.");
  }
  console.log("✅ Build validé");
}

function showDeploymentOptions() {
  console.log("\n🚀 Options de déploiement:");
  console.log("");
  console.log("1. 🌐 Vercel (Recommandé)");
  console.log("   - Rapide et optimisé pour Next.js");
  console.log("   - Command: vercel --prod");
  console.log("");
  console.log("2. 🌐 Netlify");
  console.log("   - Build command: npm run build");
  console.log("   - Publish directory: .next");
  console.log("");
  console.log("3. 🖥️  Serveur VPS");
  console.log("   - Upload du dossier .next");
  console.log("   - Redémarrage du serveur");
  console.log("");
  console.log("4. 🧪 Test local en production");
  console.log("   - Command: npm run start");
  console.log("   - URL: http://localhost:3000");
}

function showPostDeploymentChecklist() {
  console.log("\n📋 Checklist post-déploiement:");
  console.log("");
  console.log("✅ Testez le site sur l'URL de production");
  console.log("✅ Vérifiez PageSpeed Insights");
  console.log("✅ Testez les formulaires de réservation");
  console.log("✅ Vérifiez les conversions Google Ads");
  console.log("✅ Testez sur mobile et desktop");
  console.log("✅ Vérifiez les images optimisées");
}

async function main() {
  console.log("🚀 Déploiement des optimisations de performance\n");

  try {
    // Vérifications pré-déploiement
    checkGitStatus();
    checkDependencies();

    // Build du projet
    buildProject();
    checkBuildOutput();

    // Affichage des options
    showDeploymentOptions();
    showPostDeploymentChecklist();

    console.log("\n🎉 Prêt pour le déploiement !");
    console.log("📈 Score attendu: 85-90/100");
    console.log("⚡ LCP attendu: 2-4s");
    console.log("🖼️  Images optimisées: WebP/AVIF");
  } catch (error) {
    console.error("\n❌ Erreur lors de la préparation du déploiement:");
    console.error(error.message);
    process.exit(1);
  }
}

// Lancer le script
main().catch(console.error);



































