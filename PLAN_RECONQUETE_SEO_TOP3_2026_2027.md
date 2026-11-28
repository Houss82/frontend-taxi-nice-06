# Plan de reconquête SEO Top 3 — Taxi Nice 06

**Créé le :** 24 novembre 2026  
**Dernière mise à jour :** 28 novembre 2026 (Home phase 1 déployée — périmètre prudent)  
**Site canonique :** https://taxi-nice-06.com (sans www)  
**Horizon :** 12 semaines (S1 = semaine du 24/11/2026)

---

## 1. Objectifs SEO (stratégie au 28/11/2026)

| Objectif | Requêtes ciblées | Page pilier | Cible |
|----------|------------------|-------------|-------|
| **O1 (priorité)** | `taxi nice`, `taxis nice`, `taxi nice aéroport`, `taxi aéroport nice`, `taxi aeroport nice` | **`/` (Home)** | Top 3 organique |
| O2 (complémentaire) | Intentions transactionnelles aéroport détaillées (T1/T2, parcours résa) | `/services/taxi-aeroport-nice` | Soutien commercial + longue traîne |

**Changement stratégique (28/11) :** la Home est la page prioritaire aussi pour les variantes aéroport. La landing aéroport **reste** une page commerciale utile et maillée, mais **n’est plus** l’objectif de ranking n°1 sur ces requêtes.

**Conservé :** maillage déployé (`5b92b42`) ; canonical sans www ; Lots 1–3 ; cluster Assistance ; auto-publish suspendu.

**Non-objectifs :**

- Ne pas changer le domaine canonique.
- Ne pas réécrire Title/H1 Home ni landing sans validation.
- Ne pas supprimer / désindexer d’articles sans GSC + validation.
- Ne pas commencer le Lot 4 sans validation.

---

## 2. Positions GSC / Windsor.ai

### Baseline initiale (24 nov. 2026)

| Signal | Valeur | Source |
|--------|--------|--------|
| Home sans www — « taxi nice » | 14,54 | GSC |
| Home avec www — « taxi nice » | 2,26 | GSC |
| Landing aéroport — « taxi aéroport nice » | 40,45 | GSC |
| GBP | corrigée sans www | Manuel 24/11 |

### Fenêtre 1–22 novembre 2026

| Requête / URL | Position | Notes |
|---------------|----------|-------|
| taxi nice — Home www | 2,36 | Dual-host |
| taxi nice — Home sans www | 14,65 | Canonical |
| taxi aéroport nice — landing | 39,80 | — |
| taxi aéroport nice — Cannes | 27,19 | Chevauchement potentiel |
| Backlinks GSC | 73 liens ; Home 48/22 dom. ; landing 6/6 | — |

### Windsor.ai — 17–23 nov. vs 24–26 nov. 2026

#### « taxi nice »

| Période | Home sans www | Home www |
|---------|---------------|----------|
| 17–23/11 | 138 impr. · pos. **17,21** | 246 impr. · pos. **2,35** |
| 24–26/11 | 180 impr. · pos. **10,64** | 6 impr. · pos. **2** |

**Signal :** ~**96,8 %** des impressions (deux versions) attribuées à la Home **sans www** sur 24–26/11. Encourageant pour l’alignement GBP / canonique ; **période trop courte** pour causalité ferme avec les optimisations.

#### « taxi aéroport nice »

| Signal | Évolution (Windsor) |
|--------|---------------------|
| Home sans www | pos. **20,68** → **12,76** |
| Landing aéroport | pos. **38,50** → **51,29** |

Cohérent avec le recentrage Home : la Home progresse sur la requête aéroport ; la landing recule en moyenne sur la fenêtre courte observée.

### Tableau de suivi hebdomadaire

| Date | Position Taxi Nice | Position Taxi Aéroport Nice | Impressions | Clics | CTR | Backlinks | Actions réalisées |
|------|--------------------|-----------------------------|-------------|-------|-----|-----------|-------------------|
| 2026-11-24 | sans www 14,54 / www 2,26 | landing 40,45 | — | — | — | boutsdumonde → www | Lot 3 + GBP |
| 2026-11-25 | 1–22/11 : www 2,36 / sw 14,65 | landing 39,80 ; Cannes 27,19 | — | — | — | 73 / Home 48 / landing 6 | Maillage + updatedAt |
| 2026-11-28 | 24–26/11 : sw **10,64** (180 impr.) / www 2 (6 impr.) ; 17–23 : sw 17,21 | Home sw 20,68→**12,76** ; landing 38,50→**51,29** | voir Windsor | — | — | +visitezmoi.fr → Home (dofollow) | Stratégie Home-first ; Home phase 1 (avis 205 + tel) |
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

## 3. Calendrier (ajusté)

| Semaines | Focus | Livrables |
|----------|-------|-----------|
| **S1–S2** | Technique, Lot 3, maillage, updatedAt | Fait |
| **S3** | Stratégie Home-first + audit concurrentiel Home | Fait (28/11) |
| **S4** | Home phase 1 **prudente** (avis 205, tel navbar/hero, lien GBP) | Déployée 28/11 — sans bloc tarifs / Monaco / schema |
| **S5+** | Suite Home (tarifs aéroport, Monaco…) **uniquement après validation** | — |
| **S6+** | Lot 4 / différenciation destinations | Après validation ; sans cannibaliser la Home |
| **S7–S8** | Netlinking prioritaire vers **Home** (+ landing en soutien) | boutsdumonde ; partenaires |
| **S12** | Bilan Top 3 | Rapport 2027 |

---

## 4. État des lots

| Lot | Statut |
|-----|--------|
| Lots 1–3 | Déployés ; `updatedAt` renseigné |
| Lot 4+ | Non démarré |
| Maillage Home/aéroport | Déployé `5b92b42` — **à conserver** |
| Assistance Panne | Préservé |
| Home phase 1 | Déployée (périmètre prudent) |

---

## 5. Backlinks suivis

| Date | Source | Destination | Ancre | rel | Statut |
|------|--------|-------------|-------|-----|--------|
| (antérieur) | blog-boutsdumonde.fr/…/visiter-nice-transports/ | `https://www.taxi-nice-06.com/` | — | — | www à corriger |
| **2026-11-28** | [visitezmoi.fr/…cannes…serenite](https://visitezmoi.fr/cannes-et-ses-grands-evenements-comment-optimiser-ses-deplacements-en-toute-serenite/) | **`https://taxi-nice-06.com/`** (Home) | URL nue | absent (= follow) | HTTP 200 · robots index,follow · canonical auto |

GSC historique : 73 liens ; Home 48/22 domaines ; landing 6/6.

---

## 6. Faits techniques (inchangés)

1. Redirect www en 2 sauts.  
2. Apex DNS Vercel alternatif.  
3. Sitemap 107 URLs ; lastmod = `updatedAt \|\| date`.  
4. Dual-host analytics en voie de consolidation vers sans www (Windsor 24–26/11).

### Point à vérifier ultérieurement (non traité en phase 1)

- **JSON-LD Offer aéroport** dans `StructuredData.jsx` : prix affiché `"À partir de 25€"`. Incohérence potentielle avec la grille GLC jour publiée sur `/tarifs` (Nice centre **40 €** forfait fixe). **Ne pas corriger sans validation** (métadonnée / schema).

---

## 7. Hypothèses

- Consolidation des impressions « taxi nice » vers sans www liée à GBP + redirects (à confirmer sur 4+ semaines).  
- Progression Home sur « taxi aéroport nice » compatible avec Home-first ; baisse landing = à surveiller, pas à « corriger » par rewrite tant que la Home monte.  
- Causalité maillage / Lot 3 **non établie** sur 2–3 jours.

---

## 8. Netlinking

| Priorité | Action | Statut |
|----------|--------|--------|
| P1 | boutsdumonde → sans www | À faire |
| P1 | Nouveaux liens vers **Home** (priorité) | visitezmoi acquis 28/11 |
| P2 | Liens vers landing aéroport (soutien) | Secondaire |
| P2 | Partenaires locaux | À planifier |

---

## 9. Historique

| Date | Événement |
|------|-----------|
| 2026-11-24 | Lot 3 `198ad50` ; GBP |
| 2026-11-25 | Maillage `5b92b42` ; updatedAt `8117b97` |
| 2026-11-28 | Stratégie **Home-first** ; audit Home ; backlink visitezmoi |
| 2026-11-28 | **Home phase 1 prudente déployée** : constante avis 205/5★ ; ReviewsSection ; tel Navbar desktop ; tel + lien GBP sous CTA hero. **Reportés** : bloc tarifs aéroport Home, carte Monaco, correction Schema Offer 25€. |

---

## 10. Tâches

### Réalisées

- [x] Lots 1–3, maillage, updatedAt, GBP, sitemap GSC 107  
- [x] Recentrage stratégique Home (pilotage)  
- [x] Audit Home concurrentiel (lecture seule, 28/11)  
- [x] Vérification backlink visitezmoi.fr  
- [x] Home phase 1 prudente (avis 205, tel, lien GBP) — déployée  

### Restantes

- [ ] Bloc tarifs aéroport Home — **reporté**  
- [ ] Carte Monaco Home — **reportée**  
- [ ] Vérifier / corriger Schema Offer « À partir de 25€ » vs grille 40 € — **reporté**  
- [ ] Contact boutsdumonde  
- [ ] Lot 4 — non démarré  
- [ ] Mesure Lighthouse / CWV Home post-deploy  

---

## 11. Prochaine séance

1. Mesurer 7–14 j Windsor/GSC (sans www uniquement).  
2. Décider suite Home (tarifs aéroport / Monaco / schema) sans risquer le ranking.  
3. Netlinking Home.  
4. Lot 4 uniquement si la Home est stabilisée sur les requêtes O1.
