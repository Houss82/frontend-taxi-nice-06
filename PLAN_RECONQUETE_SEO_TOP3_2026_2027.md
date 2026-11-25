# Plan de reconquête SEO Top 3 — Taxi Nice 06

**Créé le :** 24 novembre 2026  
**Dernière mise à jour :** 25 novembre 2026 (maillage + updatedAt déployés)  
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

## 2. Positions GSC de référence

### Baseline initiale (24 nov. 2026)

| Signal | Valeur | Source |
|--------|--------|--------|
| Home sans www — « taxi nice » | 14,54 | GSC |
| Home avec www — « taxi nice » | 2,26 | GSC |
| Landing aéroport — « taxi aéroport nice » | 40,45 | GSC |
| GBP | corrigée sans www | Manuel 24/11 |

### Fenêtre 1–22 novembre 2026 (données utilisateur)

#### Requête « taxi nice »

| URL | Position moy. | Notes |
|-----|---------------|-------|
| Home www | **2,36** | Dual-host analytics |
| Home sans www | **14,65** | Canonical cible |
| Cannibalisation interne majeure | **Non démontrée** | — |

#### Requête « taxi aéroport nice »

| URL | Position moy. | Notes |
|-----|---------------|-------|
| Home www | **3,41** | Concurrence possible vs landing |
| Home sans www | **23,27** | — |
| Landing `/services/taxi-aeroport-nice` | **39,80** | Page pilier O2 — priorité |
| Article Cannes | **27,19** | Chevauchement potentiel (à différencier en Lot 4) |

#### Backlinks GSC (audit quantitatif)

| Périmètre | Liens | Domaines |
|-----------|-------|----------|
| Total liens externes recensés | **73** | — |
| Home | **48** | **22** domaines |
| Landing aéroport | **6** | **6** domaines |

**Priorité stratégique :** renforcer la landing aéroport (maillage interne + recommandations externes pertinentes).

### Tableau de suivi hebdomadaire

| Date | Position Taxi Nice | Position Taxi Aéroport Nice | Impressions | Clics | CTR | Backlinks | Actions réalisées |
|------|--------------------|-----------------------------|-------------|-------|-----|-----------|-------------------|
| 2026-11-24 | sans www 14,54 / www 2,26 | 40,45 | — | — | — | boutsdumonde → www | Lot 3 `198ad50` + GBP |
| 2026-11-25 | 1–22/11 : www 2,36 / sans www 14,65 | landing 39,80 ; Home www 3,41 ; Cannes 27,19 | — | — | — | GSC : 73 liens (Home 48/22 ; aéroport 6/6) | Maillage `5b92b42` + updatedAt `8117b97` |
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
| **S1** | Technique + Lot 3 | DNS/sitemap ; Lot 3 ; plan |
| **S2** | Maillage + GSC | Maillage Home/aéroport ; updatedAt ; données GSC 1–22/11 |
| **S3–S4** | Différenciation aéroport | Ancres + Cannes/Monaco/Menton/guide (sans rewrite landing) |
| **S5–S6** | Lot 4 | Destinations majeures — après validation |
| **S7–S8** | Netlinking | boutsdumonde ; partenaires locaux ; focus liens vers landing |
| **S9–S10** | Lots blog suivants | Gare/hôtels/Port |
| **S11** | Concurrentiel + UX | CWV ; parcours réservation |
| **S12** | Bilan Top 3 | Rapport 2027 |

---

## 4. État des lots blog

| Lot | Contenu | Statut |
|-----|---------|--------|
| Lot 1 | Nuit, van, Sophia, seniors, réservation | Déployé `e34ecf7` ; `updatedAt` 2026-10-20 |
| Lot 2 | Caucade, Arénas, SLV, Carros, grève | Déployé `3b42aa0` ; `updatedAt` 2026-10-21 |
| Lot 3 | Beaulieu, Villefranche, Cap Ferrat, Cap d’Ail, Èze | Déployé `198ad50` ; `updatedAt` 2026-11-24 (frontmatter seul) |
| Lots 4–15 | Voir `AUDIT_BLOG_SEO_2026.md` | Non démarrés |
| Assistance Panne | Service + article | `91b16cf` — à préserver |

---

## 5. Anomalies / faits techniques

1. Chaîne 2 sauts www (308 puis 301).
2. Apex A `216.198.79.1` (Vercel) vs reco fréquente `216.150.1.1`.
3. Sitemap 107 URLs, sans www, GSC traitement OK.
4. `updatedAt` déployé (`8117b97`) : lastmod = `updatedAt || date`, dates invalidées si futures ; pas de `new Date()` build-time pour lastmod.
5. Backlink boutsdumonde encore en www.
6. Landing aéroport : seulement **6** backlinks / **6** domaines vs Home **48** / **22** — gap d’autorité externe.

---

## 6. Hypothèses

- Dual-host www / sans www = artefact analytics (canonicals OK).
- Sur « taxi aéroport nice », Home www (3,41) et Cannes (27,19) pèsent face à la landing (39,80) — **chevauchement potentiel**, à confirmer en continu ; pas de suppression.
- Priorité O2 = maillage + backlinks vers la landing (pas rewrite Title/H1).

---

## 7. Netlinking

| Priorité | Action | Statut |
|----------|--------|--------|
| P1 | boutsdumonde → URL sans www | À faire |
| P1 | Recommandations externes vers **landing aéroport** (pas seulement Home) | À planifier |
| P1 | GBP sans www | **Terminé** |
| P2 | Partenaires hôtels / garages / OT | À planifier |
| P3 | Export Ahrefs/Semrush | Manquant |

---

## 8. Historique déploiements

| Date | Événement |
|------|-----------|
| 2026-10-20 | Lot 1 `e34ecf7` |
| 2026-10-21 | Lot 2 `3b42aa0` |
| 2026-11 | Assistance `91b16cf` |
| 2026-11-24 | Lot 3 `198ad50` ; GBP |
| 2026-11-25 | Maillage `5b92b42` ; updatedAt `8117b97` |

---

## 9. Indicateurs hebdomadaires

- Positions « taxi nice » / « taxi aéroport nice » (filtre sans www si possible).
- Pages imprimant sur « taxi aéroport nice » (Home, landing, Cannes…).
- Backlinks totaux + part landing vs Home.
- Couverture sitemap / index Lot 3.
- CTR / clics 28 j.

---

## 10. Tâches

### Réalisées (25/11/2026)

- [x] Déploiement maillage Home + aéroport (`5b92b42`)
- [x] `updatedAt` + sitemap lastmod (`8117b97`) — Lots 1–3 datés via Git
- [x] GSC 1–22/11 intégré au pilotage
- [x] Priorité landing aéroport formalisée (maillage + netlinking)

### Restantes

- [ ] Contact boutsdumonde
- [ ] Netlinking ciblé landing aéroport
- [ ] Différenciation Cannes / Monaco / Menton / guide (prépa Lot 4)
- [ ] Lot 4 — après validation
- [ ] Export backlinks outil SEO externe

---

## 11. Prochaine séance

1. Vérifier en GSC l’effet du maillage (impressions landing).  
2. Contacter boutsdumonde + 3–5 opportunités de lien vers `/services/taxi-aeroport-nice`.  
3. Préparer Lot 4 (titles destinations majeures) sans toucher la landing.  
4. Suivre positions Home vs landing sur « taxi aéroport nice ».
