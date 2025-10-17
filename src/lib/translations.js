import fs from "fs";
import path from "path";

/**
 * Charge les traductions côté serveur pour éviter le flash de contenu
 */
export async function loadTranslations(locale = "fr") {
  try {
    const translationPath = path.join(
      process.cwd(),
      "public",
      "locales",
      locale,
      "common.json"
    );
    const translationFile = fs.readFileSync(translationPath, "utf8");
    return JSON.parse(translationFile);
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    // Fallback vers le français
    if (locale !== "fr") {
      return loadTranslations("fr");
    }
    return {};
  }
}

/**
 * Génère les props statiques avec les traductions préchargées
 */
export async function getStaticTranslations(locale = "fr") {
  const translations = await loadTranslations(locale);

  return {
    props: {
      initialTranslations: translations,
      locale,
    },
  };
}
