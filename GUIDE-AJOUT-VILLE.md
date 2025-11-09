## Guide : créer des pages villes (secteurs) 100 % Server Components

Ce document résume toutes les étapes réalisées sur le site Taxi Nice-06 pour mettre en place des pages villes (Monaco, Cannes, Antibes). Tu peux répliquer la même architecture dans d’autres projets Next.js (App Router) en adaptant les chemins et URLs.

---

### 1. Structure des fichiers

```
src/app/
├─ secteurs/
│  ├─ page.jsx               → Page liste des secteurs (Server Component)
│  ├─ metadata.js            → Métadonnées de la liste
│  ├─ layout.jsx             → Layout minimal
│  └─ [slug]/
│     ├─ data.js             → Contenu de toutes les villes
│     └─ page.jsx            → Rendu unique qui lit data.js
```

- `data.js` centralise toutes les données (textes, services, FAQ, JSON-LD).
- `page.jsx` s’appuie sur ces données pour générer chaque ville via `generateStaticParams`.

---

### 2. Composants utilitaires

Deux composants serveur réutilisables :

1. `src/components/ActionButtons.jsx`  
   - Boutons téléphone, réservation, WhatsApp.  
   - Uniquement des liens `<a>` ⇒ compatible Server Component.

2. `src/components/HospitalsList.jsx`  
   - Affichage d’une grille d’établissements de santé.  
   - Consomme la clé `hospitals` définie dans `data.js`.

---

### 3. Données (fichier `data.js`)

Chaque entrée de `sectorData` suit cette structure :

```js
monaco: {
  slug: "monaco",
  cityName: "Monaco",
  hero: {
    title,
    highlight,
    subtitle,
    image,
    imageAlt,
  },
  introduction: [...],
  secondaryIntro: [...],
  servicesTitle,
  services: [...],
  coverageDescription,
  coverageAreas: [...],
  map: {
    description,
    info,
    embedUrl,
  },
  infoCards: [...],
  sellingPoints: [...],
  hospitalsTitle,
  hospitals: [...],
  establishmentsTitle,
  establishments: [...],
  faq: [...],
  resource: {
    description,
    links: [
      { label, url, target?, rel? },
      ...
    ],
  },
  specialties: [...],
  pricing: [...],
  commitments: [...],
  homepageLink: {
    before,
    linkText,
    after,
    href: "/",
  },
  localBusiness: {
    name,
    image,
    telephone,
    locality,
    region,
    url,
    latitude,
    longitude,
  },
},
```

- `sectorSlugs = Object.keys(sectorData)` est exporté pour `generateStaticParams`.
- On peut personnaliser chaque ville en modifiant ses arrays (`services`, `coverageAreas`, etc.).

---

### 4. Page individuelle (`secteurs/[slug]/page.jsx`)

Principales caractéristiques :

- `generateStaticParams` → pré-génère toutes les villes.
- `export const revalidate = 3600` → ISR (rafraîchissement toutes les heures).
- `generateMetadata` → construit titre, description, OpenGraph, canonical uniques.
- Rendu 100 % serveur (aucun hook client).
- Breadcrumb `SEOBreadcrumb` + JSON-LD `LocalBusiness`.
- Sections clé :
  - Hero (image, titre, CTA).
  - Services, zones couvertes (listes).
  - Carte Google Maps (`iframe`).
  - Selling points, établissements, FAQ, ressources.
  - `ActionButtons` sticky sous la navbar.

> Astuce : `homepageLink` permet d’insérer un lien naturel vers l’accueil pour chaque ville.

---

### 5. Page liste (`secteurs/page.jsx`)

- Présente résumés de chaque ville.
- Utilise `SEOBreadcrumb`.
- Ajoute CTA vers contact/réservation.

---

### 6. Intégration sur la page d’accueil (`app/page.jsx`)

Objectif : rendre les pages villes visibles directement pour Google.

- Tableau `citySectors` (Server Component) avec slug, tagline, image, couleurs.
- Section “Nos secteurs desservis” :
  - Titre + description + bouton “Tous nos secteurs”.
  - Cartes stylées, chacune avec lien `Link` vers la page ville.
  - Gradients différents pour distinguer visuellement chaque destination.

---

### 7. Sitemap (`public/sitemap.xml`)

Ajouter les URLs suivantes :

```xml
<url>
  <loc>https://domaine.com/secteurs</loc>
  <lastmod>...</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://domaine.com/secteurs/monaco</loc>
  ...
</url>
```

> Mettre à jour `lastmod` après chaque déploiement (facultatif mais recommandé).

---

### 8. Étapes pour ajouter une nouvelle ville

1. **Images**  
   - Déposer le visuel principal dans `public/` (nom sans espace/accents).  
   - Prévoir, si besoin, une image spécifique pour la home.

2. **Données**  
   - Ajouter l’objet dans `sectorData`.  
   - Ajouter le slug dans `sectorSlugs`.

3. **Page d’accueil**  
   - Ajouter une entrée dans `citySectors` (titre, tagline, image, couleurs, réseau).

4. **Sitemap**  
   - Ajouter `/secteurs/<nouvelle-ville>`.

5. **Ressources/SEO**  
   - Renseigner `resource.links` (articles du blog, guides).  
   - Ajuster `homepageLink` si besoin.

6. **Tests**  
   - `npm run build` pour vérifier l’absence d’erreur SSR.  
   - `npm run dev` pour valider visuellement (`/secteurs/<slug>`).

7. **Déploiement & Search Console**  
   - Rebuild, purge de cache CDN si nécessaire.  
   - Re-soumettre le sitemap dans Google Search Console (optionnel mais conseillé).

---

### 9. Bonnes pratiques SEO appliquées

- **Server Components** → HTML complet livré aux crawlers.  
- **Maillage interne** → home, navbar, sitemap, ressources → visibilité rapide.  
- **Contenu riche** → services, FAQ, tables, CTA, JSON-LD.  
- **Canonical et OpenGraph** → générés par `generateMetadata`.

---

### 10. Check-list express

- [ ] Objet ville ajouté à `sectorData`.  
- [ ] Slug ajouté dans `sectorSlugs`.  
- [ ] Images disponibles dans `public/`.  
- [ ] `citySectors` (page d’accueil) mis à jour.  
- [ ] Sitemap complété.  
- [ ] Build + test en local OK.  
- [ ] Déploiement + mise à jour Search Console si besoin.

---

Tu peux réutiliser ce pattern dans n’importe quel projet Next.js 13+ (App Router).  
Pense à remplacer les URLs absolues (`https://taxi-nice-06.com`) par ton domaine.  
Bon chantier ! 🚕🎯
