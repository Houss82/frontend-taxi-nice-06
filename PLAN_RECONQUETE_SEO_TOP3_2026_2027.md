# Plan de reconquête SEO Top 3 — Taxi Nice 06

**Créé le :** 24 novembre 2026  
**Dernière mise à jour :** 24 novembre 2026 (après déploiement Lot 3)  
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
| GBP | URL **corrigée** vers https://taxi-nice-06.com/ | Manuel (24/11/2026) |

### Tableau de suivi hebdomadaire

| Date | Position Taxi Nice | Position Taxi Aéroport Nice | Impressions | Clics | CTR | Backlinks | Actions réalisées |
|------|--------------------|-----------------------------|-------------|-------|-----|-----------|-------------------|
| 2026-11-24 | Home sans www 14,54 / www 2,26 (dual-host) | 40,45 | — | — | — | boutsdumonde → www (confirmé) | Audit tech + Lot 3 **déployé** `198ad50` + GBP sans www |
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
| **S1** | Technique + Lot 3 + pilotage | DNS/sitemap audit ; Lot 3 ; ce plan |
| **S2** | Post-deploy Lot 3 + GSC | GBP OK ; audits maillage Home + cluster aéroport (reco) ; resoumettre sitemap |
| **S3–S4** | Cannibalisation aéroport | Ancres + maillage hub ; différencier guide / Cannes / Monaco / Menton (sans rewrite landing) |
| **S5–S6** | Lot 4 (destinations majeures) | Monaco, Cannes, Antibes, Menton, guide — après validation |
| **S7–S8** | Autorité / netlinking | Contacter boutsdumonde ; 5–10 partenaires locaux |
| **S9–S10** | Lots blog suivants | Gare/hôtels/Port ; contrôle Home-safe |
| **S11** | Concurrentiel + UX réservation | Ajustements mineurs ; Core Web Vitals |
| **S12** | Bilan Top 3 | Rapport positions / gaps / plan 2027 |

---

## 4. État des lots blog

| Lot | Contenu | Statut |
|-----|---------|--------|
| Lot 1 | Nuit, van, Sophia, seniors, réservation | **Déployé** `e34ecf7` |
| Lot 2 | Caucade, Arénas, SLV, Carros, grève | **Déployé** `3b42aa0` |
| Lot 3 | Beaulieu, Villefranche, Cap Ferrat, Cap d’Ail, Èze | **Déployé** `198ad50` (24/11/2026) — contrôles prod OK |
| Lots 4–15 | Voir `AUDIT_BLOG_SEO_2026.md` | Non démarrés |
| Cluster Assistance Panne | Service + article | **Déployé** `91b16cf` — à préserver |

---

## 5. Anomalies techniques confirmées

1. Chaîne **2 sauts** : `http://www` → `https://www` (308) → `https://sans-www` (301).
2. Apex DNS **A @ = 216.198.79.1** (réseau Vercel) vs reco fréquente **216.150.1.1** — site 200.
3. `www` en **CNAME** vers `*.vercel-dns-017.com`.
4. Sitemap live **HTTP 200**, XML valide, **107 URLs**, hôte unique sans www (post-deploy Lot 3, `age` bas observé).
5. Pages statiques du sitemap **sans `lastModified` artificiel** ; articles : dates frontmatter (Lot 3 : dates publication d’origine, pas date de réécriture).
6. Backlink externe confirmé vers **www** : `blog-boutsdumonde.fr` → `https://www.taxi-nice-06.com/`.
7. Footer : **aucun lien Accueil** vers `/` (nav uniquement).

---

## 6. Hypothèses à vérifier (GSC / terrain)

- Écarts www vs sans www sur « taxi nice » = artefact Search Analytics / dual-host.
- Alignement GBP sans www réduira le bruit (fait le 24/11 — à mesurer sur 2–4 semaines).
- Pos. ~40 « taxi aéroport nice » = concurrence interne (Home + guide + blogs destinations) — **non confirmée URL par URL sans export GSC**.
- Erreur sitemap GSC temporaire.

---

## 7. Actions de netlinking (manuel)

| Priorité | Action | Statut |
|----------|--------|--------|
| P1 | Demander à boutsdumonde de remplacer www → https://taxi-nice-06.com/ | À faire |
| P1 | Mettre à jour l’URL du Google Business Profile (sans www) | **Terminé** (24/11/2026) |
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
| 2026-11 | Cluster Assistance `91b16cf` |
| 2026-11-24 | Lot 3 finalisé puis **déployé** `198ad50` ; GBP sans www ; audits maillage Home + cluster aéroport (reco) |

---

## 9. Indicateurs hebdomadaires

- Positions moyennes GSC : `taxi nice`, `taxi aéroport nice` (filtre URL sans www si possible).
- Impressions / clics / CTR (28 j glissants).
- Pages recevant des impressions sur ces requêtes (cannibalisation).
- Couverture d’index + erreurs sitemap.
- Backlinks nouveaux / www restants (dès outil externe).
- Conversions réservation (si Analytics disponible).

---

## 10. Tâches — réalisées / restantes

### Réalisées (24/11/2026)

- [x] Audit DNS / sitemap / robots
- [x] Cartographie cannibalisation (analyse)
- [x] Finalisation + **déploiement Lot 3** (`198ad50`)
- [x] Contrôles production Lot 3 (200, canonical, title/H1, images, liens hub, sitemap, index)
- [x] GBP aligné sans www (manuel)
- [x] Audit approfondi maillage Home (10 opportunités — **non appliquées**)
- [x] Audit approfondi cluster aéroport (cartographie — **non appliquée**)
- [x] Audit qualitatif Home + landing aéroport (notes — **sans modification**)
- [x] Vérification sitemap post-déploiement

### Restantes (validation utilisateur requise)

- [ ] Resoumission sitemap GSC
- [ ] Contact boutsdumonde (URL sans www)
- [ ] Application éventuelle des 10 liens Home (après validation)
- [ ] Différenciation / renforts cluster aéroport (Monaco, Menton, Cannes, guide…) après validation
- [ ] Export backlinks outil SEO
- [ ] Mesure concurrentielle depuis Nice
- [ ] Lot 4 — uniquement après validation

---

## 11. Synthèse audits S1 (reco en attente)

### Maillage Home

- ~48 articles éditoriaux avec lien Home ; ~27 articles publiés sans lien Home (dont Lot 3, Sophia, hôtels, nuit, van, gare-aéroport…).
- Nav : liens Accueil (valeur UI élevée, valeur éditoriale faible).
- Footer : **pas de lien Accueil**.
- Voir rapport séance 24/11 pour les 10 opportunités priorisées.

### Cluster aéroport

- Landing : ~55 sources / ~97 occurrences de lien vers `/services/taxi-aeroport-nice`.
- Lot 3 : 3 liens hub / article en prod — **Conserver**.
- Points d’attention (risque **potentiel**, non GSC-confirmé) : `guide-transfert-aeroport-nice` ; titles encore « Prix & Réservation » (Monaco, Menton, Cannes…) ; Monaco **sans** lien hub.
- Catégories : Conserver / Renforcer / Différencier / Examiner fusion — **aucune fusion/suppression** sans validation + GSC.

### Prochaine séance (recommandé)

1. Resoumettre sitemap + vérifier couverture Lot 3.  
2. Valider 3–5 liens Home P1 (footer + hôtels + gare-aéroport + nuit).  
3. Ajouter lien hub sur Monaco + recentrer titles Menton/Cannes/Monaco (Lot 4 prep).  
4. Contacter boutsdumonde.  
5. Extraire GSC « pages » pour « taxi aéroport nice ».
