# Plan de reconquête SEO Top 3 — Taxi Nice 06

**Créé le :** 24 novembre 2026  
**Site canonique :** https://taxi-nice-06.com (sans www)  
**Horizon :** 12 semaines (S1 = semaine du 24/11/2026)

---

## 1. Objectifs SEO

| Objectif | Requête | Page pilier | Cible |
|----------|---------|-------------|-------|
| O1 | `taxi nice` | `/` (Home) | Top 3 organique France |
| O2 | `taxi aéroport nice` | `/services/taxi-aeroport-nice` | Top 3 organique France |

**Non-objectifs (protections) :**

- Ne pas changer le domaine canonique.
- Ne pas réécrire Title/H1 Home ni landing aéroport sans validation.
- Ne pas supprimer / désindexer d’articles sans analyse GSC + validation.
- Auto-publication : rester suspendue.

---

## 2. Positions GSC de référence (24 nov. 2026)

Données fournies / audit — **ne pas inventer** les cellules manquantes.

| Signal | Valeur de référence | Source |
|--------|---------------------|--------|
| Home sans www — « taxi nice » | position moy. **14,54** | GSC (utilisateur) |
| Home avec www — « taxi nice » | position moy. **2,26** | GSC / Windsor (utilisateur) |
| Landing aéroport — « taxi aéroport nice » | position moy. **40,45** | GSC (utilisateur) |
| Canonical Google Home | sans www, indexée | Inspection GSC |
| Canonical Google aéroport | sans www, indexée | Inspection GSC |
| www | reconnue comme redirection | Inspection GSC |
| GBP | URL encore en www → alignement prévu | Manuel |

### Tableau de suivi hebdomadaire

| Date | Position Taxi Nice | Position Taxi Aéroport Nice | Impressions | Clics | CTR | Backlinks | Actions réalisées |
|------|--------------------|-----------------------------|-------------|-------|-----|-----------|-------------------|
| 2026-11-24 | Home sans www 14,54 / www 2,26 (même requête, dual-host) | 40,45 | — | — | — | boutsdumonde → www (confirmé) | Audit technique + Lot 3 local + plan |
| S2 | | | | | | | |
| S3 | | | | | | | |
| S4 | | | | | | | |
| S5 | | | | | | | |
| S6 | | | | | | | |
| S7 | | | | | | | |
| S8 | | | | | | | |
| S9 | | | | | | | |
| S10 | | | | | | | |
| S11 | | | | | | | |
| S12 | | | | | | | |

---

## 3. Calendrier 12 semaines (indicatif)

| Semaines | Focus | Livrables |
|----------|-------|-----------|
| **S1** | Technique + Lot 3 + pilotage | DNS/sitemap audit ; finaliser Lot 3 local ; ce plan |
| **S2** | Déploiement Lot 3 + GSC | Commit/deploy Lot 3 après validation ; soumettre sitemap ; aligner GBP sans www |
| **S3–S4** | Cannibalisation aéroport | Ancres + maillage hub ; différencier guide-transfert / Cannes / Monaco (sans rewrite landing) |
| **S5–S6** | Lot 4 (destinations majeures) | Monaco, Cannes, Antibes, Menton, guide — après validation Lot 3 en prod |
| **S7–S8** | Autorité / netlinking | Contacter boutsdumonde ; 5–10 partenaires locaux ; annuaires sérieux |
| **S9–S10** | Lots blog suivants (5 puis 6 si pertinent) | Gare/hôtels/Port ; contrôle Home-safe |
| **S11** | Concurrentiel + UX réservation | Ajustements mineurs parcours ; mesure Core Web Vitals |
| **S12** | Bilan Top 3 | Rapport positions / gaps / plan 2027 |

---

## 4. État des lots blog

| Lot | Contenu | Statut |
|-----|---------|--------|
| Lot 1 | Nuit, van, Sophia, seniors, réservation | **Déployé** `e34ecf7` |
| Lot 2 | Caucade, Arénas, SLV, Carros, grève | **Déployé** `3b42aa0` |
| Lot 3 | Beaulieu, Villefranche, Cap Ferrat, Cap d’Ail, Èze | **Local finalisé** — en attente validation / commit / deploy |
| Lots 4–15 | Voir `AUDIT_BLOG_SEO_2026.md` | Non démarrés |
| Cluster Assistance Panne | Service + article | **Déployé** `91b16cf` — à préserver |

---

## 5. Anomalies techniques confirmées

1. Chaîne **2 sauts** : `http://www` → `https://www` (308) → `https://sans-www` (301).
2. Apex DNS **A @ = 216.198.79.1** (réseau Vercel) alors que Vercel recommande souvent **216.150.1.1** → avertissement dashboard possible ; site répond 200 via Vercel.
3. `www` en **CNAME** vers `*.vercel-dns-017.com` (IP 216.150.1.1 / 216.150.16.1) — cohérent avec redirect.
4. Sitemap live **HTTP 200**, XML valide, **107 URLs**, hôte unique sans www ; pages Home + commerciales présentes.
5. Pages statiques du sitemap **sans `lastModified` artificiel** (choix technique) ; articles blog : `lastModified` = date frontmatter.
6. Cache Vercel sitemap observé avec **age élevé** (~6 j) — peut contribuer à une erreur GSC « temporaire ».
7. Backlink externe confirmé vers **www** : `blog-boutsdumonde.fr` → `https://www.taxi-nice-06.com/`.

---

## 6. Hypothèses à vérifier (GSC / terrain)

- Les écarts de position www vs sans www sur « taxi nice » sont un artefact Search Analytics / dual-host, pas une division d’autorité.
- L’alignement GBP sans www réduira le bruit statistique.
- La pos. ~40 sur « taxi aéroport nice » vient surtout de la **concurrence interne** (Home + guide + blogs destinations).
- L’erreur sitemap GSC est temporaire (cache / traitement), pas une corruption XML.

---

## 7. Actions de netlinking (manuel)

| Priorité | Action | Statut |
|----------|--------|--------|
| P1 | Demander à boutsdumonde de remplacer www → https://taxi-nice-06.com/ | À faire |
| P1 | Mettre à jour l’URL du Google Business Profile (sans www) | Prévu (manuel) |
| P2 | Contacter 5–10 hôtels / garages / offices pour citation + lien | À planifier |
| P2 | Vérifier annuaires locaux (OT Nice, mairie, CCI) | À faire |
| P3 | Export Ahrefs/Semrush/Majestic pour audit backlinks complet | Données manquantes |

---

## 8. Historique modifications / déploiements

| Date | Événement |
|------|-----------|
| 2025-11 | Redirect www → non-www (vercel.json / middleware) |
| 2026-10-20 | Lot 1 déployé `e34ecf7` ; auto-publish suspendu |
| 2026-10 | Lot 2 déployé `3b42aa0` |
| 2026-11 | Cluster Assistance `91b16cf` (+ corrections SEO techniques) |
| 2026-11-24 | Lot 3 finalisé en local ; création de ce plan |

---

## 9. Indicateurs hebdomadaires

- Positions moyennes GSC : `taxi nice`, `taxi aéroport nice` (filtre URL sans www uniquement si possible).
- Impressions / clics / CTR (28 j glissants).
- Pages recevant des impressions sur ces requêtes (cannibalisation).
- Couverture d’index + erreurs sitemap.
- Backlinks nouveaux / www restants (dès outil externe).
- Conversions réservation (si Analytics disponible).

---

## 10. Tâches S1 — réalisées / restantes

### Réalisées (24/11/2026)

- [x] Audit DNS / sitemap / robots
- [x] Cartographie cannibalisation (analyse)
- [x] Finalisation Lot 3 locale (5 articles + images + maillage)
- [x] Vérification backlink boutsdumonde
- [x] Grille concurrentielle préparatoire
- [x] Création de ce fichier de pilotage
- [x] `npm run build` OK (Next.js 15.5.7, 114 pages, exit 0) — non déployé

### Restantes (validation utilisateur requise)

- [ ] Commit + déploiement Lot 3
- [ ] Resoumission sitemap GSC
- [ ] Alignement GBP sans www
- [ ] Contact boutsdumonde (URL)
- [ ] Export backlinks outil SEO
- [ ] Mesure concurrentielle depuis Nice (organique vs Maps vs Ads)
- [ ] Lot 4 — uniquement après validation
