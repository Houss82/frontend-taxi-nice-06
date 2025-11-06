import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;
  const url = request.nextUrl.clone();

  // ✅ Redirection HTTP → HTTPS (si ce n'est pas déjà géré par l'hébergeur)
  if (url.protocol === "http:" && url.hostname !== "localhost") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // ✅ Redirection www → non-www (doublon avec next.config.mjs mais sécurité supplémentaire)
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  // ✅ Rediriger toutes les URLs avec ?lang=en vers la version française (sans paramètre)
  if (searchParams.has("lang") && searchParams.get("lang") === "en") {
    // Créer une nouvelle URL sans le paramètre lang
    const newUrl = request.nextUrl.clone();
    newUrl.searchParams.delete("lang");
    
    // Redirection 301 permanente vers la version française
    return NextResponse.redirect(newUrl, 301);
  }

  // Continuer normalement si pas de redirection nécessaire
  return NextResponse.next();
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

