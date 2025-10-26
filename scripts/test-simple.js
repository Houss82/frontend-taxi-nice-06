const fs = require("fs");
const path = require("path");

console.log("Test du system de traduction SSR...\n");

// Test des fichiers de traduction
const frPath = path.join(__dirname, "../public/locales/fr/common.json");
const enPath = path.join(__dirname, "../public/locales/en/common.json");

if (fs.existsSync(frPath)) {
  const frContent = JSON.parse(fs.readFileSync(frPath, "utf8"));
  console.log("Fichier francais OK:", Object.keys(frContent).length, "cles");
  console.log("hero.title:", frContent.hero?.title || "MANQUANT");
  console.log("seoContent.title:", frContent.seoContent?.title || "MANQUANT");
} else {
  console.log("Fichier francais MANQUANT");
}

if (fs.existsSync(enPath)) {
  const enContent = JSON.parse(fs.readFileSync(enPath, "utf8"));
  console.log("Fichier anglais OK:", Object.keys(enContent).length, "cles");
} else {
  console.log("Fichier anglais MANQUANT");
}

// Test des fichiers de code
const libPath = path.join(__dirname, "../src/lib/translations.js");
const contextPath = path.join(__dirname, "../src/contexts/LanguageContext.jsx");

console.log("\nFichiers de code:");
console.log("translations.js:", fs.existsSync(libPath) ? "EXISTE" : "MANQUANT");
console.log(
  "LanguageContext.jsx:",
  fs.existsSync(contextPath) ? "EXISTE" : "MANQUANT"
);

console.log("\nInstructions:");
console.log("1. npm run dev");
console.log("2. Ouvrir http://localhost:3000");
console.log("3. Verifier que hero.title n apparait plus");
console.log("4. Voir le code source (Ctrl+U)");


















