"use client";

import { Suspense } from "react";
import { LanguageProvider } from "./LanguageContext.jsx";

// Composant wrapper pour éviter les erreurs de build avec useSearchParams
function LanguageProviderWrapper({ children, initialTranslations }) {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <LanguageProvider initialTranslations={initialTranslations}>
        {children}
      </LanguageProvider>
    </Suspense>
  );
}

export default LanguageProviderWrapper;
