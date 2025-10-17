/**
 * Script pour tester le rendu côté serveur et vérifier que les traductions sont bien chargées
 * Usage: node scripts/test-ssr.js
 */

const fs = require("fs");
const path = require("path");

async function testSSR() {
  console.log("🧪 Test du rendu côté serveur...\n");

  try {
    // 1. Vérifier que les fichiers de traduction existent
    const frPath = path.join(__dirname, "../public/locales/fr/common.json");
    const enPath = path.join(__dirname, "../public/locales/en/common.json");

    console.log("📁 Vérification des fichiers de traduction:");

    if (fs.existsSync(frPath)) {
      const frContent = JSON.parse(fs.readFileSync(frPath, "utf8"));
      console.log(
        `✅ Français: ${Object.keys(frContent).length} clés trouvées`
      );
      console.log(
        `   - hero.title: "${frContent.hero?.title || "NON TROUVE"}"`
      );
      console.log(
        `   - seoContent.title: "${
          frContent.seoContent?.title || "NON TROUVE"
        }"`
      );
    } else {
      console.log("❌ Fichier français non trouvé");
    }

    if (fs.existsSync(enPath)) {
      const enContent = JSON.parse(fs.readFileSync(enPath, "utf8"));
      console.log(`✅ Anglais: ${Object.keys(enContent).length} clés trouvées`);
      console.log(
        `   - hero.title: "${enContent.hero?.title || "NON TROUVE"}"`
      );
    } else {
      console.log("❌ Fichier anglais non trouvé");
    }

    // 2. Vérifier la structure du projet
    console.log("\n📁 Vérification de la structure:");

    const libPath = path.join(__dirname, "../src/lib/translations.js");
    const contextPath = path.join(
      __dirname,
      "../src/contexts/LanguageContext.jsx"
    );
    const seoPath = path.join(__dirname, "../src/lib/seo.js");

    console.log(
      `✅ translations.js: ${fs.existsSync(libPath) ? "EXISTE" : "MANQUANT"}`
    );
    console.log(
      `✅ LanguageContext.jsx: ${
        fs.existsSync(contextPath) ? "EXISTE" : "MANQUANT"
      }`
    );
    console.log(`✅ seo.js: ${fs.existsSync(seoPath) ? "EXISTE" : "MANQUANT"}`);

    // 3. Test de chargement des traductions
    console.log("\n🔧 Test de chargement des traductions:");

    try {
      // Simuler le chargement côté serveur
      const frContent = JSON.parse(fs.readFileSync(frPath, "utf8"));

      // Vérifier que les clés importantes existent
      const importantKeys = [
        "hero.title",
        "hero.subtitle",
        "hero.description",
        "navbar.brand",
        "seoContent.title",
        "seoContent.intro",
      ];

      let allKeysPresent = true;
      importantKeys.forEach((key) => {
        const keys = key.split(".");
        let value = frContent;
        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k];
          } else {
            value = null;
            break;
          }
        }

        if (value) {
          console.log(
            `✅ ${key}: "${value.substring(0, 50)}${
              value.length > 50 ? "..." : ""
            }"`
          );
        } else {
          console.log(`❌ ${key}: MANQUANT`);
          allKeysPresent = false;
        }
      });

      if (allKeysPresent) {
        console.log("\n🎉 Toutes les clés importantes sont présentes!");
        console.log(
          "✅ Le système de traduction SSR devrait fonctionner correctement"
        );
      } else {
        console.log("\n⚠️  Certaines clés importantes sont manquantes");
      }
    } catch (error) {
      console.log(`❌ Erreur lors du test: ${error.message}`);
    }

    // 4. Instructions pour tester
    console.log("\n📋 Instructions pour tester:");
    console.log("1. Lancez le serveur: npm run dev");
    console.log("2. Ouvrez http://localhost:3000");
    console.log(
      '3. Vérifiez que vous ne voyez plus "hero.title" mais le vrai texte'
    );
    console.log("4. Regardez le code source de la page (Ctrl+U)");
    console.log('5. Cherchez "hero.title" - il ne devrait PAS apparaître');
    console.log('6. Cherchez "TAXI NICE COTE D\'AZUR" - il DEVRAIT apparaître');
    console.log(
      '7. Testez avec: curl -s http://localhost:3000 | grep -i "taxi nice"'
    );
  } catch (error) {
    console.error("❌ Erreur lors du test SSR:", error);
  }
}

// Exécuter le test
testSSR();
