import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;
  
  // Ne pas traiter les requêtes locales
  if (request.nextUrl.hostname === "localhost" || request.nextUrl.hostname === "127.0.0.1") {
    return NextResponse.next();
  }

  // ✅ NOTE : Les redirections HTTP → HTTPS et www → non-www sont gérées par vercel.json
  // Le middleware ne gère QUE les paramètres ?lang=en et /en pour éviter la double redirection
  
  const hasLangEN = searchParams.has("lang") && searchParams.get("lang") === "en";
  const isENPath = pathname === "/en" || pathname.startsWith("/en/");

  // Si aucune redirection n'est nécessaire, continuer
  if (!hasLangEN && !isENPath) {
    return NextResponse.next();
  }

  // ✅ VERSION CANONIQUE : https://taxi-nice-06.com (sans www, HTTPS uniquement)
  // Construire l'URL canonique finale
  const canonicalUrl = new URL(request.url);
  canonicalUrl.protocol = "https:";
  canonicalUrl.hostname = "taxi-nice-06.com";
  
  // Supprimer le paramètre lang=en si présent
  if (hasLangEN) {
    canonicalUrl.searchParams.delete("lang");
  }
  
  // Rediriger /en vers /
  if (isENPath) {
    canonicalUrl.pathname = "/";
  }

  // Redirection 301 permanente vers la version canonique
  return NextResponse.redirect(canonicalUrl, 301);
}

// Appliquer le middleware à toutes les routes sauf les fichiers statiques
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - *.ico (all icon files)
     * - *.png, *.jpg, *.jpeg, *.gif, *.svg (image files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.ico$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
  ],
};

