# Audit SEO Blog — Taxi Nice 06

**Date :** 18 octobre 2026  
**Site :** https://taxi-nice-06.com/  
**Périmètre :** articles publiés dans `frontend/content/blog/`  
**Statut :** audit et planification uniquement — **aucun article modifié**  
**Publication auto hebdomadaire :** rester suspendue pendant l’opération

---

## 1. Synthèse

- **Articles publiés audités :** 73
- **Brouillons exclus :** dossier `content/blog/draft/` + fichiers `published: false` (ex. `tarifs-taxi-nice-2026.md`)
- **Template exclu :** `_TEMPLATE.md`
- **Répartition :** A=17 · B=16 · C=17 · D=23
- **Orphelins (0 lien interne entrant détecté) :** 34
- **Liens cassés (`/secteurs/nice`) :** 8 articles
- **Double H1 (H1 dans le Markdown) :** 1 (`taxi-groupe-nice-van-7-places`)
- **Image placeholder `/image-glc.png` :** 4 articles récents géo
- **Lots prévus :** 15 (14×5 + 1×3 = 73)

### Légende des catégories

- **A** — Optimisation importante nécessaire
- **B** — Optimisation légère (maillage, métadonnées, corrections ciblées)
- **C** — Satisfaisant : pas de modification majeure
- **D** — Risque élevé de cannibalisation / duplication : analyse avant intervention (pas de suppression automatique)

### Méthode de notation (indicatif)

- **Qualité SEO /10** : profondeur utile, spécificité locale, structure, fraîcheur, signaux techniques
- **Potentiel commercial /10** : proximité des pages € (aéroport, tarifs, VSL, van, réservation, secteurs)
- **Priorité intervention /10** : combinaison potentiel × écart qualité × orphelin / bugs
- Les scores sont relatifs au corpus ; un article court n’est pas pénalisé automatiquement

---

## 2. Principaux problèmes SEO

1. **Maillage entrant insuffisant** — 34 articles sans lien interne entrant depuis le blog/pages scannées.
2. **Cluster quartiers template (~16)** — structure et formulations très proches → risque de duplication / cannibalisation locale.
3. **Fiches géo ultra-courtes (~250–285 mots)** — Caucade, Arènes, SLV, Carros : image GLC générique, orphelines, peu différenciées.
4. **Liens cassés `/secteurs/nice`** — 8 articles pointent vers une URL secteur inexistante.
5. **Cluster médical / VSL** — plusieurs angles qui chevauchent `/services/vsl` et entre eux.
6. **Guides « taxi Nice » génériques** — concurrence potentielle Home / réservation (`guide-complet`, `reserver-taxi-nice-guide`).
7. **Van 7 places vs `/services/van-premium`** — Title/H1 proches + double H1 Markdown.
8. **Lien vers brouillon** — `reserver-taxi-nice-guide` → `/blog/tarifs-taxi-nice-2026` (`published: false`).
9. **Destinations aéroport orphelines** — Beaulieu, Villefranche, Cap Ferrat, Sophia, etc. sous-reliées malgré fort potentiel.
10. **Contenus tourisme / événements** — parfois peu reliés aux pages commerciales ; Ironman / grève avec lien cassé.

---

## 3. Clusters à risque de cannibalisation

| Cluster | Articles concernés | Pages commerciales exposées | Action recommandée |
|---------|-------------------|-----------------------------|--------------------|
| Quartiers Nice (template) | ~16 (Masséna, Vieux Nice, Cimiez, Promenade, etc.) | Secteurs Nice, Home | Lot groupé D : différencier angle / maillage, pas fusion auto |
| Médical / VSL / seniors | 5 | `/services/vsl` | Lot 5 : rôles distincts (guide patient, convention, seniors, Yonne outlier) |
| Fiches géo courtes | 4 (Caucade, Arènes, SLV, Carros) | Secteurs locaux | Lot 2 : enrichir OU différencier fortement |
| Guides réservation / guide complet | 2 | `/`, `/reservation` | Renforcer angle « comment » vs offre Home |
| Van groupe | 1 | `/services/van-premium` | Différencier blog (cas d’usage groupe) vs landing produit |
| Gare SNCF | 1 (+ gare-aéroport déjà traité) | `/secteurs/nice-gare` | Maintenir différenciation actuelle (Lot 6 contrôle) |
| Port / Mont Boron / Régates | 2–3 | Port Lympia | Angle événement / quartier vs fiche Port |
| Sophia Antipolis | 1 | `/services/taxi-aeroport-nice-sophia-antipolis` | Blog = guide trajet ; landing = conversion |

---

## 4. Inventaire complet des articles publiés

| # | URL | Titre | Date | Mot-clé principal | Intention | Mots | Qualité | Local | In | Out | Pages commerciales | Cannib. | Tech | Cat | Q | C | Pr | Dernière optim. Git |
|---|-----|-------|------|-------------------|-----------|------|---------|-------|----|-----|--------------------|---------|------|-----|---|---|----|---------------------|
| 1 | /blog/3-plus-beaux-points-de-vue-nice-2025 | Les 3 meilleurs spots photo de Nice en 2025 : guide panoramas secrets & conseils photographes | 2025-11-29 | Les 3 meilleurs spots photo de Nice en 2025 | Mixte | 3678 | solide | variable | 1 | 5 | /, /services/taxi-aeroport-nice, /reservation | — | — | C | 8.0 | 4.0 | 2.5 | 2026-06-17/image à jou taxi randonnée |
| 2 | /blog/5-lieux-incontournables-nice-2025 | 5 lieux incontournables à visiter à Nice en 2025 : le guide expert pour découvrir la ville comme un local | 2025-11-24 | 5 lieux incontournables à visiter à Nice en 2025 | Mixte | 2529 | lien cassé; à renforcer | variable | 5 | 12 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | lien /secteurs/nice | A | 7.5 | 4.0 | 3.7 | 2026-06-17/image à jou taxi randonnée |
| 3 | /blog/7-meilleurs-marches-nice-2025 | Les 7 meilleurs marchés de Nice en 2025 : spécialités locales, horaires & conseils pratiques | 2025-12-04 | Les 7 meilleurs marchés de Nice en 2025 | Mixte | 2018 | orphelin | variable | 0 | 4 | /, /reservation | — | — | B | 6.5 | 4.0 | 3.0 | 2026-06-17/image à jou taxi randonnée |
| 4 | /blog/centres-medicaux-specialistes-nice-2025 | Centres médicaux et spécialistes Nice 2025 : guide complet des établissements de santé | 2025-12-09 | Centres médicaux et spécialistes Nice 2025 | Transactionnelle santé / VSL | 2313 | risque cannibalisation | moyenne | 5 | 6 | /, /services/vsl, /secteurs/nice-hopital-pasteur-2, /reservation | VSL / Pasteur | — | D | 8.5 | 7.5 | 2.4 | 2026-08-19/new program nice 2 |
| 5 | /blog/choisir-chauffeur-prive-nice | Comment Choisir son Chauffeur Privé à Nice ? Le Guide Complet 2025 | 2025-10-20 | Comment Choisir son Chauffeur Privé à Nice ? Le Guide Comple | Informationnelle / décision | 1019 | orphelin | variable | 0 | 9 | /, /tarifs, /services/taxi-aeroport-nice, /services/vsl | — | — | B | 6.0 | 7.0 | 6.0 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 6 | /blog/comment-acceder-ramatuelle-presquile-saint-tropez | Comment accéder à Ramatuelle et à la presqu'île de Saint-Tropez | 2026-09-13 | Comment accéder à Ramatuelle et à la presqu'île de Saint | Informationnelle locale / proximité | 972 | orphelin | élevée | 0 | 4 | /, /services/taxi-aeroport-nice, /reservation | — | — | B | 6.5 | 5.5 | 3.7 | 2026-09-13/new article ramatuelle |
| 7 | /blog/fete-du-citron-menton-2026-taxi | Fête du Citron Menton 2026 : Taxi & Transferts Nice → Menton | 2026-03-23 | Fête du Citron Menton 2026 | Informationnelle événementielle | 662 | orphelin; à renforcer | moyenne | 0 | 2 | /, /reservation | — | — | A | 5.0 | 5.5 | 4.2 | 2026-06-17/image à jou taxi randonnée |
| 8 | /blog/greve-perturbations-taxi-nice | Grève & Perturbations à Nice : Comment Assurer Votre Taxi (Guide 2025) | 2025-11-13 | Grève & Perturbations à Nice | Informationnelle / décision | 2292 | orphelin; lien cassé; à renforcer | variable | 0 | 13 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | lien /secteurs/nice | A | 6.5 | 7.0 | 6.9 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 9 | /blog/guide-transfert-aeroport-nice | Guide Complet du Transfert depuis l'Aéroport de Nice Côte d'Azur | 2025-10-28 | Guide Complet du Transfert depuis l'Aéroport de Nice Côte d' | Transactionnelle / transfert | 889 | solide | élevée | 4 | 9 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.0 | 8.0 | 2.8 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 10 | /blog/ironman-nice-2025 | Ironman Nice 2026 : dates, parcours et guide complet pour participer | 2026-04-30 | Ironman Nice 2026 | Informationnelle événementielle | 3396 | orphelin; lien cassé; à renforcer | moyenne | 0 | 8 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | lien /secteurs/nice | A | 5.8 | 5.5 | 4.9 | 2026-06-17/image à jou taxi randonnée |
| 11 | /blog/nice-quartiers-developpement-2025 | Nice en mouvement : les quartiers qui se transforment en 2025 et l'impact pour les habitants & entreprises | 2025-11-30 | Nice en mouvement | Informationnelle locale / proximité | 2911 | lien cassé; à renforcer | élevée | 1 | 5 | /, /services/taxi-aeroport-nice, /reservation | — | lien /secteurs/nice | A | 6.3 | 5.5 | 4.8 | 2026-06-17/image à jou taxi randonnée |
| 12 | /blog/nouvelle-convention-transports-medicaux-2025 | Transports médicaux 2025 à Nice : ce que les patients doivent savoir sur la nouvelle convention | 2025-11-28 | Transports médicaux 2025 à Nice | Transactionnelle santé / VSL | 2359 | lien cassé; risque cannibalisation | moyenne | 2 | 9 | /, /tarifs, /services/vsl, /secteurs/nice-hopital-pasteur-2 | VSL / Pasteur | lien /secteurs/nice | D | 6.0 | 7.5 | 5.8 | 2026-08-19/new program nice 2 |
| 13 | /blog/plages-secretes-nice | Plages secrètes & coins cachés de Nice : comment y accéder facilement en Taxi (Guide 2025) | 2025-11-19 | Plages secrètes & coins cachés de Nice | Informationnelle locale / proximité | 1918 | lien cassé; à renforcer | élevée | 5 | 10 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | lien /secteurs/nice | A | 7.5 | 5.5 | 4.3 | 2026-08-19/new program nice 2 |
| 14 | /blog/reserver-taxi-nice-guide | Comment Réserver un Taxi à Nice : Guide Complet 2026 | 2026-03-26 | Comment Réserver un Taxi à Nice | Informationnelle / décision | 711 | orphelin | variable | 0 | 3 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | Home / reservation | — | B | 6.0 | 7.0 | 6.0 | 2026-06-17/image à jou taxi randonnée |
| 15 | /blog/semi-marathon-nice-2026-taxi | Semi-Marathon Nice 2026 : Taxi & Transferts Départ Course | 2026-04-14 | Semi | Informationnelle événementielle | 595 | orphelin; à renforcer | moyenne | 0 | 2 | /, /reservation | — | — | A | 4.7 | 5.5 | 4.3 | 2026-06-17/image à jou taxi randonnée |
| 16 | /blog/taxi-aeroport-nice-antibes | Taxi aéroport Nice vers Antibes : durée, tarifs et conseils pratiques 2025 | 2025-12-13 | Taxi aéroport Nice vers Antibes | Transactionnelle / transfert | 2128 | solide | élevée | 1 | 7 | /, /services/taxi-aeroport-nice, /reservation, /services/taxi-aeroport-nice-sophia-antipolis | — | — | C | 8.0 | 8.0 | 4.3 | 2026-08-29/new program nice 3 |
| 17 | /blog/taxi-aeroport-nice-beaulieu | Taxi Aéroport Nice vers Beaulieu-sur-Mer : Transfert Cap Ferrat - Prix & Réservation 2026 | 2026-06-02 | Taxi Aéroport Nice vers Beaulieu | Transactionnelle / transfert | 912 | orphelin | élevée | 0 | 5 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | — | — | B | 7.0 | 8.0 | 6.2 | 2026-10-18/amelioration home page vs tarif |
| 18 | /blog/taxi-aeroport-nice-cannes | Taxi Aéroport de Nice vers Cannes – Votre Transfert Premium | 2025-11-02 | Taxi Aéroport de Nice vers Cannes | Transactionnelle / transfert | 877 | correct | élevée | 3 | 10 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 7.3 | 8.0 | 4.5 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 19 | /blog/taxi-aeroport-nice-cap-d-ail | Taxi Aéroport Nice vers Cap d'Ail : Transfert Plages & Monaco - Prix & Réservation 2026 | 2026-06-23 | Taxi Aéroport Nice vers Cap d'Ail | Transactionnelle / transfert | 974 | solide | élevée | 1 | 5 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | — | — | C | 7.5 | 8.0 | 4.5 | 2026-06-23/🤖 Auto-publish articles scheduled for 2026-06-23 |
| 20 | /blog/taxi-aeroport-nice-cap-ferrat | Taxi Aéroport Nice vers Cap Ferrat : Transfert Presqu'île de Luxe - Prix & Réservation 2026 | 2026-07-14 | Taxi Aéroport Nice vers Cap Ferrat | Transactionnelle / transfert | 1091 | orphelin | élevée | 0 | 6 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | B | 7.0 | 8.0 | 6.2 | 2026-07-14/🤖 Auto-publish articles scheduled for 2026-07-14 |
| 21 | /blog/taxi-aeroport-nice-eze | Taxi Aéroport Nice vers Èze : Transfert Village perché - Prix & Réservation 2026 | 2026-08-04 | Taxi Aéroport Nice vers Èze | Transactionnelle / transfert | 1344 | solide | élevée | 1 | 6 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.0 | 8.0 | 4.3 | 2026-10-18/amelioration home page vs tarif |
| 22 | /blog/taxi-aeroport-nice-frejus | Taxi Aéroport de Nice vers Fréjus – Transfert Confort Longue Distance | 2025-11-23 | Taxi Aéroport de Nice vers Fréjus | Transactionnelle / transfert | 2146 | solide | élevée | 2 | 10 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.0 | 8.0 | 2.8 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 23 | /blog/taxi-aeroport-nice-menton | Taxi Aéroport de Nice vers Menton – Prix, Réservation & Trajet 2025 | 2025-11-25 | Taxi Aéroport de Nice vers Menton | Transactionnelle / transfert | 2043 | solide | élevée | 6 | 8 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.5 | 8.0 | 2.6 | 2026-06-17/image à jou taxi randonnée |
| 24 | /blog/taxi-aeroport-nice-monaco | Taxi Aéroport Nice vers Monaco : Transfert Principauté - Prix & Réservation 2026 | 2026-08-18 | Taxi Aéroport Nice vers Monaco | Transactionnelle / transfert | 1161 | solide | élevée | 1 | 8 | /, /reservation | — | — | C | 7.5 | 8.0 | 4.5 | 2026-10-18/amelioration home page vs tarif |
| 25 | /blog/taxi-aeroport-nice-saint-tropez | Taxi Aéroport de Nice vers Saint-Tropez – Transfert Premium Longue Distance | 2025-11-16 | Taxi Aéroport de Nice vers Saint | Transactionnelle / transfert | 1778 | solide | élevée | 5 | 11 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.5 | 8.0 | 2.6 | 2026-06-17/image à jou taxi randonnée |
| 26 | /blog/taxi-aeroport-nice-sophia-antipolis | Taxi Aéroport Nice vers Sophia Antipolis : Transfert Technopole - Prix & Réservation 2026 | 2026-09-01 | Taxi Aéroport Nice vers Sophia Antipolis | Transactionnelle / transfert | 1081 | orphelin | élevée | 0 | 4 | /, /reservation | landing Sophia | — | B | 7.0 | 8.0 | 6.2 | 2026-10-18/amelioration home page vs tarif |
| 27 | /blog/taxi-aeroport-nice-villefranche | Taxi Aéroport de Nice vers Villefranche-sur-Mer – Transfert Baie, Prix & Réservation | 2025-11-27 | Taxi Aéroport de Nice vers Villefranche | Transactionnelle / transfert | 1603 | orphelin | élevée | 0 | 11 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | B | 7.5 | 8.0 | 6.0 | 2026-06-17/image à jou taxi randonnée |
| 28 | /blog/taxi-affaires-nice-professionnels | Taxi Affaires Nice : Déplacements Professionnels & Entreprises - Guide 2026 | 2026-08-25 | Taxi Affaires Nice | Informationnelle / décision | 2494 | solide | variable | 2 | 10 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | — | — | C | 8.0 | 7.0 | 2.3 | 2026-09-28/new program nice page home |
| 29 | /blog/taxi-antibes-partenaire | Taxi Antibes & Juan-les-Pins : recommandation locale (question fréquente) | 2025-11-07 | Taxi Antibes & Juan | Informationnelle / partenariat | 334 | contenu mince; orphelin; à renforcer | faible | 0 | 2 | /, /tarifs | — | — | A | 3.0 | 3.5 | 3.0 | 2026-06-17/image à jou taxi randonnée |
| 30 | /blog/taxi-arenes-nice | Taxi L'Arénas Nice : Quartier d'affaires & Aéroport | 2026-10-06 | Taxi L'Arénas Nice | Informationnelle locale / proximité | 285 | contenu mince; orphelin; image générique GLC | moyenne | 0 | 6 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | fiches quartier courtes similaires | image-glc | A | 3.3 | 4.5 | 4.9 | 2026-10-06/🤖 Auto-publish articles scheduled for 2026-10-06 |
| 31 | /blog/taxi-ariane-nice | L'Ariane à Nice : accès, transports et déplacements en taxi | 2026-09-22 | L'Ariane à Nice | Informationnelle locale / proximité | 1835 | orphelin | élevée | 0 | 6 | /, /tarifs, /services/taxi-aeroport-nice, /services/vsl | — | — | C | 6.8 | 5.5 | 3.6 | 2026-09-28/new program nice article ariane |
| 32 | /blog/taxi-carros-nice | Taxi Carros : Zone industrielle, Nice & Aéroport | 2026-10-20 | Taxi Carros | Informationnelle locale / proximité | 257 | contenu mince; orphelin; image générique GLC | moyenne | 0 | 4 | /, /tarifs, /reservation | fiches quartier courtes similaires | image-glc | A | 2.8 | 4.5 | 5.0 | 2026-10-20/🤖 Auto-publish articles scheduled for 2026-10-20 |
| 33 | /blog/taxi-caucade-nice | Taxi Caucade Nice : Ouest niçois, Aéroport & Promenade | 2026-09-29 | Taxi Caucade Nice | Informationnelle locale / proximité | 275 | contenu mince; orphelin; image générique GLC | moyenne | 0 | 5 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | fiches quartier courtes similaires | image-glc | A | 2.8 | 4.5 | 5.0 | 2026-09-29/🤖 Auto-publish articles scheduled for 2026-09-29 |
| 34 | /blog/taxi-cimiez-nice | Taxi Cimiez Nice : Transferts Aéroport, Gare & Hôpital - Service 24/7 | 2025-12-29 | Taxi Cimiez Nice | Informationnelle locale / proximité | 1651 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 35 | /blog/taxi-conventionne-vsl-yonne | Taxi conventionné VSL dans l'Yonne : votre transport médical de confiance | 2026-09-19 | Taxi conventionné VSL dans l'Yonne | Transactionnelle santé / VSL | 1864 | orphelin; risque cannibalisation | moyenne | 0 | 2 | /, /services/vsl | VSL / Pasteur | — | D | 6.2 | 2.5 | 2.5 | 2026-09-19/new article taxi conventionné Yonne |
| 36 | /blog/taxi-excursions-nice | Taxi pour les Excursions depuis Nice : Monaco, Cannes, Èze & Toute la Côte d'Azur | 2025-12-24 | Taxi pour les Excursions depuis Nice | Mixte | 1923 | solide | variable | 3 | 2 | /, /reservation | — | — | C | 8.2 | 4.0 | 1 | 2026-06-17/image à jou taxi randonnée |
| 37 | /blog/taxi-fabron-lanterne-corniche-fleurie-collines | Taxi Fabron Nice : Transferts Aéroport & Centre-ville - Service 24/7 | 2026-03-09 | Taxi Fabron Nice | Informationnelle locale / proximité | 1769 | orphelin; risque cannibalisation | élevée | 0 | 2 | /, /reservation | cluster quartiers template | — | D | 6.8 | 5.5 | 3.6 | 2026-06-17/image à jou taxi randonnée |
| 38 | /blog/taxi-gambetta-fleurs | Taxi Gambetta Nice : Transferts Centre-ville & Aéroport - Service 24/7 | 2026-02-23 | Taxi Gambetta Nice | Informationnelle locale / proximité | 1675 | orphelin; risque cannibalisation | élevée | 0 | 2 | /, /reservation | cluster quartiers template | — | D | 6.8 | 5.5 | 3.6 | 2026-06-17/image à jou taxi randonnée |
| 39 | /blog/taxi-gorbella-cessole | Taxi Gorbella Nice : Transferts Aéroport & Centre-ville - Service 24/7 | 2026-02-16 | Taxi Gorbella Nice | Informationnelle locale / proximité | 1734 | orphelin; risque cannibalisation | élevée | 0 | 2 | /, /reservation | cluster quartiers template | — | D | 6.8 | 5.5 | 3.6 | 2026-06-17/image à jou taxi randonnée |
| 40 | /blog/taxi-grasse-ici-taxi-partenaire | Taxi Grasse : ICI Taxi — Transferts & Taxi VSL Conventionné CPAM | 2026-07-23 | Taxi Grasse | Informationnelle / partenariat | 886 | orphelin | faible | 0 | 5 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | — | — | B | 6.0 | 3.5 | 2.0 | 2026-07-23/new article ici taxi |
| 41 | /blog/taxi-groupe-nice-van-7-places | Taxi Van Nice 7 Places – Mercedes Classe V : Tarifs, Réservation & Service Groupe 2025 | 2025-11-27 | Taxi Van Nice 7 Places | Mixte | 2519 | H1 markdown (double H1); risque cannibalisation | variable | 4 | 8 | /, /tarifs, /services/taxi-aeroport-nice, /services/van-premium | van-premium | double H1 | D | 7.3 | 4.0 | 3.7 | 2026-06-17/image à jou taxi randonnée |
| 42 | /blog/taxi-hotels-nice-transferts | Taxi vers un hôtel à Nice : aéroport, gare et Port Lympia | 2026-05-26 | Taxi vers un hôtel à Nice | Transactionnelle hébergement | 840 | correct | élevée | 4 | 6 | /, /tarifs, /services/taxi-aeroport-nice, /secteurs/nice-gare | aéroport (léger) | — | C | 7.0 | 8.0 | 4.7 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 43 | /blog/taxi-liberation-nice | Taxi Libération Nice : Transferts Centre-ville & Aéroport - Service 24/7 | 2026-05-19 | Taxi Libération Nice | Informationnelle locale / proximité | 1586 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 44 | /blog/taxi-lingostiere-nice | Taxi Lingostière Nice : Transferts Zones Commerciales & Aéroport - Service 24/7 | 2026-03-30 | Taxi Lingostière Nice | Informationnelle locale / proximité | 1559 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 45 | /blog/taxi-magnan-madeleine | Taxi Magnan Nice : Transferts Promenade des Anglais & Aéroport - Service 24/7 | 2026-02-09 | Taxi Magnan Nice | Informationnelle locale / proximité | 1803 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 46 | /blog/taxi-marseille-partenaire | Taxi Marseille : Aéroport Marignane & Gare Saint-Charles (recommandation locale) | 2026-04-30 | Taxi Marseille | Informationnelle / partenariat | 406 | orphelin; à renforcer | faible | 0 | 3 | /, /tarifs, /services/taxi-aeroport-nice | — | — | A | 3.7 | 3.5 | 2.8 | 2026-06-17/image à jou taxi randonnée |
| 47 | /blog/taxi-monaco-yacht-show-2026 | Taxi Monaco Yacht Show 2026 : Transferts Port Hercule & Hôtels - Guide Pratique | 2026-09-15 | Taxi Monaco Yacht Show 2026 | Informationnelle événementielle | 1260 | orphelin | moyenne | 0 | 4 | /, /reservation | — | — | B | 6.8 | 5.5 | 3.6 | 2026-09-21/image article maj |
| 48 | /blog/taxi-mont-boron-port-nice | Taxi Mont-Boron Nice : Transferts Aéroport & Port Lympia - Service 24/7 | 2026-02-02 | Taxi Mont | Informationnelle locale / proximité | 1873 | risque cannibalisation | élevée | 1 | 4 | /, /secteurs/nice-port-lympia, /reservation | cluster quartiers template; Port Lympia | — | D | 7.6 | 5.5 | 3.3 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 49 | /blog/taxi-musees-nice | Taxi pour Visiter les Musées de Nice : Accès Facile aux Musées Matisse, Chagall & Plus | 2025-12-26 | Taxi pour Visiter les Musées de Nice | Informationnelle locale / proximité | 1739 | orphelin | élevée | 0 | 3 | /, /reservation | — | — | B | 7.2 | 5.5 | 3.5 | 2026-06-17/image à jou taxi randonnée |
| 50 | /blog/taxi-nice-gare-aeroport | Correspondance train–avion à Nice : Gare Nice-Ville → Aéroport | 2025-12-02 | Correspondance train | Transactionnelle / transfert | 2927 | solide | élevée | 2 | 5 | /, /services/taxi-aeroport-nice, /services/van-premium, /secteurs/nice-gare | — | — | C | 8.0 | 8.0 | 2.8 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 51 | /blog/taxi-nice-gare-sncf | Gare SNCF de Nice : sorties, accès et prise en charge en taxi | 2025-11-21 | Gare SNCF de Nice | Transactionnelle gare | 1861 | solide | élevée | 9 | 5 | /, /tarifs, /services/taxi-aeroport-nice, /secteurs/nice-gare | secteur nice-gare | — | C | 8.5 | 8.5 | 2.8 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 52 | /blog/taxi-nice-guide-complet-2025 | Choisir un taxi à Nice en 2025 : pièges fréquents, prix, TC et taxis conventionnés | 2025-12-16 | Choisir un taxi à Nice en 2025 | Informationnelle / décision | 2666 | risque cannibalisation | variable | 21 | 7 | /, /tarifs | Home / reservation | — | D | 7.8 | 7.0 | 2.4 | 2026-10-18/amelioration home page vs tarif |
| 53 | /blog/taxi-nice-nord | Taxi Nice Nord : Transferts Aéroport, Gare & Déplacements 24/7 - Service Local | 2026-01-11 | Taxi Nice Nord | Informationnelle locale / proximité | 1656 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 54 | /blog/taxi-nuit-nice-service-nocturne | Taxi de Nuit Nice : Service Nocturne 24/7 - Retours Soirée & Aéroport | 2026-04-28 | Taxi de Nuit Nice | Informationnelle / décision | 693 | orphelin; à renforcer | variable | 0 | 3 | /, /services/taxi-aeroport-nice, /reservation | — | — | A | 5.0 | 7.0 | 6.4 | 2026-06-17/image à jou taxi randonnée |
| 55 | /blog/taxi-pasteur-saint-roch-riquier-republique-acropolis | Taxi Pasteur Nice : Transferts CHU Pasteur & Aéroport - Service 24/7 | 2026-01-25 | Taxi Pasteur Nice | Informationnelle locale / proximité | 2053 | risque cannibalisation | élevée | 2 | 7 | /, /services/vsl, /secteurs/nice-hopital-pasteur-2, /reservation | cluster quartiers template | — | D | 7.6 | 5.5 | 1.8 | 2026-08-29/new program nice 3 |
| 56 | /blog/taxi-personnes-agees-nice-pmr | Taxi Personnes Âgées Nice : Transport Seniors & PMR - Service Adapté | 2026-05-05 | Taxi Personnes Âgées Nice | Transactionnelle santé / VSL | 680 | orphelin; risque cannibalisation | moyenne | 0 | 2 | /, /services/vsl, /reservation | VSL / Pasteur | — | D | 4.7 | 7.5 | 6.7 | 2026-08-19/new program nice 2 |
| 57 | /blog/taxi-place-massena-nice | Taxi Place Masséna Nice : Centre-Ville, Gare & Transferts 24/7 - Service Premium | 2026-01-04 | Taxi Place Masséna Nice | Informationnelle locale / proximité | 1830 | orphelin; risque cannibalisation | élevée | 0 | 2 | /, /reservation | cluster quartiers template | — | D | 6.8 | 5.5 | 3.6 | 2026-06-17/image à jou taxi randonnée |
| 58 | /blog/taxi-plages-nice-2026 | Taxi Plages Nice 2026 : Accès Plages Privées & Publiques - Transfert Mer | 2026-04-06 | Taxi Plages Nice 2026 | Informationnelle locale / proximité | 728 | lien cassé; à renforcer | moyenne | 1 | 3 | /, /reservation | — | lien /secteurs/nice | A | 5.2 | 5.5 | 5.2 | 2026-06-17/image à jou taxi randonnée |
| 59 | /blog/taxi-promenade-des-anglais-nice | Taxi Promenade des Anglais Nice : Hôtels, Plages & Transferts 24/7 - Service Premium | 2026-01-18 | Taxi Promenade des Anglais Nice | Informationnelle locale / proximité | 1806 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 60 | /blog/taxi-randonnees-nice-departs | Taxi Randonnées Nice : Départs Sentiers & Mercantour - Service Matin | 2026-06-16 | Taxi Randonnées Nice | Informationnelle locale / proximité | 709 | correct | moyenne | 1 | 2 | /, /reservation | — | — | B | 6.5 | 5.5 | 3.7 | 2026-06-17/image à jou taxi randonnée |
| 61 | /blog/taxi-regates-nice-2026 | Taxi Régates Nice 2026 : Transferts Port Lympia & Événements Voile | 2026-07-07 | Taxi Régates Nice 2026 | Informationnelle événementielle | 816 | correct | moyenne | 1 | 3 | /, /services/taxi-aeroport-nice, /secteurs/nice-port-lympia, /reservation | Port Lympia (événement) | — | B | 6.2 | 5.5 | 3.8 | 2026-10-20/maj new program nice port lympia et taxi hotels nice transferts |
| 62 | /blog/taxi-restaurants-nice-sortie-soir | Taxi Restaurants Nice : Sortie Dîner en Ville - Service Soirée 24/7 | 2026-07-28 | Taxi Restaurants Nice | Informationnelle locale / proximité | 642 | lien cassé; à renforcer | moyenne | 1 | 3 | /, /reservation | — | lien /secteurs/nice | A | 4.2 | 5.5 | 5.5 | 2026-07-28/🤖 Auto-publish articles scheduled for 2026-07-28 |
| 63 | /blog/taxi-saint-augustin-nice | Taxi Saint-Augustin Nice : Transferts Aéroport & Zones d'Activité - 24/7 | 2026-06-09 | Taxi Saint | Informationnelle locale / proximité | 1669 | risque cannibalisation | élevée | 2 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 64 | /blog/taxi-saint-isidore-nice | Taxi Saint-Isidore Nice : Transferts Aéroport & Zones d'Activité - Service 24/7 | 2026-06-30 | Taxi Saint | Informationnelle locale / proximité | 1553 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-07-06/Fusion : résolution conflit article Saint-Isidore |
| 65 | /blog/taxi-saint-laurent-du-var | Taxi Saint-Laurent-du-Var : Aéroport Nice, Cap 3000 & Centre | 2026-10-13 | Taxi Saint | Informationnelle locale / proximité | 270 | contenu mince; orphelin; image générique GLC | moyenne | 0 | 4 | /, /tarifs, /services/taxi-aeroport-nice, /reservation | fiches quartier courtes similaires | image-glc | A | 2.8 | 4.5 | 5.0 | 2026-10-13/🤖 Auto-publish articles scheduled for 2026-10-13 |
| 66 | /blog/taxi-sites-touristiques-nice | Taxi pour les Sites Touristiques de Nice : Colline du Château, Vieux-Nice, Port & Plus | 2026-01-07 | Taxi pour les Sites Touristiques de Nice | Informationnelle locale / proximité | 1833 | orphelin | élevée | 0 | 2 | /, /reservation | — | — | B | 7.2 | 5.5 | 3.5 | 2026-06-17/image à jou taxi randonnée |
| 67 | /blog/taxi-trinite-nice | Taxi Trinité Nice : Transferts Aéroport & Centre-ville - Service 24/7 | 2026-07-21 | Taxi Trinité Nice | Informationnelle locale / proximité | 1570 | orphelin; risque cannibalisation | élevée | 0 | 2 | /, /reservation | cluster quartiers template | — | D | 6.8 | 5.5 | 3.6 | 2026-07-21/🤖 Auto-publish articles scheduled for 2026-07-21 |
| 68 | /blog/taxi-vacances-scolaires-nice-famille | Taxi Vacances Scolaires Nice : Transferts Famille & Enfants - Guide 2026 | 2026-05-12 | Taxi Vacances Scolaires Nice | Informationnelle événementielle | 627 | orphelin; à renforcer | moyenne | 0 | 3 | /, /services/taxi-aeroport-nice, /reservation | — | — | A | 4.7 | 5.5 | 4.3 | 2026-06-17/image à jou taxi randonnée |
| 69 | /blog/taxi-vieux-nice | Taxi Vieux-Nice : Transferts & Déplacements 24/7 - Chauffeur Local Expert | 2025-12-20 | Taxi Vieux | Informationnelle locale / proximité | 1682 | risque cannibalisation | élevée | 1 | 2 | /, /reservation | cluster quartiers template | — | D | 7.3 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 70 | /blog/taxi-villages-perches-peillon-peille | Peillon, Peille et Sainte-Agnès : 3 villages perchés près de Nice | 2026-09-08 | Peillon, Peille et Sainte | Informationnelle locale / proximité | 2425 | orphelin | élevée | 0 | 6 | /, /tarifs, /reservation | — | — | B | 6.0 | 5.5 | 3.9 | 2026-09-21/image article maj |
| 71 | /blog/tour-de-france-nice-2026-taxi | Taxi Tour de France Nice 2026 : 8-9 août, accès, aéroport et rues fermées | 2026-04-27 | Taxi Tour de France Nice 2026 | Informationnelle événementielle | 2321 | orphelin | moyenne | 0 | 4 | /, /services/taxi-aeroport-nice, /reservation | — | — | B | 7.5 | 5.5 | 3.4 | 2026-06-17/image à jou taxi randonnée |
| 72 | /blog/transport-medical-nice | Transport Médical à Nice – Guide Complet VSL, Taxis Conventionnés & Accompagnement | 2025-11-20 | Transport Médical à Nice | Transactionnelle santé / VSL | 2086 | risque cannibalisation | moyenne | 10 | 10 | /, /tarifs, /services/taxi-aeroport-nice, /services/vsl | VSL / Pasteur | — | D | 8.5 | 7.5 | 2.4 | 2026-08-19/new program nice 2 |
| 73 | /blog/zones-activite-economique-nice-2025 | Zones d'activité économique Nice 2025 : guide complet des parcs d'activité et zones d'implantation | 2025-12-06 | Zones d'activité économique Nice 2025 | Informationnelle locale / proximité | 2102 | solide | élevée | 3 | 4 | /, /services/taxi-aeroport-nice, /reservation | — | — | C | 8.5 | 5.5 | 1.5 | 2026-06-17/image à jou taxi randonnée |

---

## 5. Planning des 15 lots (priorité SEO)

Ordre non chronologique. Clusters à risque regroupés dans les mêmes lots pour analyse croisée.

### Lot 1 — Potentiel commercial + bugs techniques critiques

- `/blog/taxi-nuit-nice-service-nocturne` — **A** — Q5.0/C7.0/Pr6.4 — in:0 — 693 mots — Taxi de Nuit Nice : Service Nocturne 24/7 - Retours Soirée & Aéroport
- `/blog/taxi-groupe-nice-van-7-places` — **D** — Q7.3/C4.0/Pr3.7 — in:4 — 2519 mots — Taxi Van Nice 7 Places – Mercedes Classe V : Tarifs, Réservation & Service Groupe 2025
- `/blog/taxi-aeroport-nice-sophia-antipolis` — **B** — Q7.0/C8.0/Pr6.2 — in:0 — 1081 mots — Taxi Aéroport Nice vers Sophia Antipolis : Transfert Technopole - Prix & Réservation 2026
- `/blog/taxi-personnes-agees-nice-pmr` — **D** — Q4.7/C7.5/Pr6.7 — in:0 — 680 mots — Taxi Personnes Âgées Nice : Transport Seniors & PMR - Service Adapté
- `/blog/reserver-taxi-nice-guide` — **B** — Q6.0/C7.0/Pr6.0 — in:0 — 711 mots — Comment Réserver un Taxi à Nice : Guide Complet 2026

### Lot 2 — Fiches géo minces + grève (liens cassés / images)

- `/blog/taxi-caucade-nice` — **A** — Q2.8/C4.5/Pr5.0 — in:0 — 275 mots — Taxi Caucade Nice : Ouest niçois, Aéroport & Promenade
- `/blog/taxi-arenes-nice` — **A** — Q3.3/C4.5/Pr4.9 — in:0 — 285 mots — Taxi L'Arénas Nice : Quartier d'affaires & Aéroport
- `/blog/taxi-saint-laurent-du-var` — **A** — Q2.8/C4.5/Pr5.0 — in:0 — 270 mots — Taxi Saint-Laurent-du-Var : Aéroport Nice, Cap 3000 & Centre
- `/blog/taxi-carros-nice` — **A** — Q2.8/C4.5/Pr5.0 — in:0 — 257 mots — Taxi Carros : Zone industrielle, Nice & Aéroport
- `/blog/greve-perturbations-taxi-nice` — **A** — Q6.5/C7.0/Pr6.9 — in:0 — 2292 mots — Grève & Perturbations à Nice : Comment Assurer Votre Taxi (Guide 2025)

### Lot 3 — Cluster aéroport orphelins — Baie des Anges Est

- `/blog/taxi-aeroport-nice-beaulieu` — **B** — Q7.0/C8.0/Pr6.2 — in:0 — 912 mots — Taxi Aéroport Nice vers Beaulieu-sur-Mer : Transfert Cap Ferrat - Prix & Réservation 2026
- `/blog/taxi-aeroport-nice-villefranche` — **B** — Q7.5/C8.0/Pr6.0 — in:0 — 1603 mots — Taxi Aéroport de Nice vers Villefranche-sur-Mer – Transfert Baie, Prix & Réservation
- `/blog/taxi-aeroport-nice-cap-ferrat` — **B** — Q7.0/C8.0/Pr6.2 — in:0 — 1091 mots — Taxi Aéroport Nice vers Cap Ferrat : Transfert Presqu'île de Luxe - Prix & Réservation 2026
- `/blog/taxi-aeroport-nice-cap-d-ail` — **C** — Q7.5/C8.0/Pr4.5 — in:1 — 974 mots — Taxi Aéroport Nice vers Cap d'Ail : Transfert Plages & Monaco - Prix & Réservation 2026
- `/blog/taxi-aeroport-nice-eze` — **C** — Q8.0/C8.0/Pr4.3 — in:1 — 1344 mots — Taxi Aéroport Nice vers Èze : Transfert Village perché - Prix & Réservation 2026

### Lot 4 — Cluster aéroport destinations majeures + hub guide

- `/blog/taxi-aeroport-nice-monaco` — **C** — Q7.5/C8.0/Pr4.5 — in:1 — 1161 mots — Taxi Aéroport Nice vers Monaco : Transfert Principauté - Prix & Réservation 2026
- `/blog/taxi-aeroport-nice-cannes` — **C** — Q7.3/C8.0/Pr4.5 — in:3 — 877 mots — Taxi Aéroport de Nice vers Cannes – Votre Transfert Premium
- `/blog/taxi-aeroport-nice-antibes` — **C** — Q8.0/C8.0/Pr4.3 — in:1 — 2128 mots — Taxi aéroport Nice vers Antibes : durée, tarifs et conseils pratiques 2025
- `/blog/taxi-aeroport-nice-menton` — **C** — Q8.5/C8.0/Pr2.6 — in:6 — 2043 mots — Taxi Aéroport de Nice vers Menton – Prix, Réservation & Trajet 2025
- `/blog/guide-transfert-aeroport-nice` — **C** — Q8.0/C8.0/Pr2.8 — in:4 — 889 mots — Guide Complet du Transfert depuis l'Aéroport de Nice Côte d'Azur

### Lot 5 — Cluster médical / VSL (analyse D avant rewrite)

- `/blog/transport-medical-nice` — **D** — Q8.5/C7.5/Pr2.4 — in:10 — 2086 mots — Transport Médical à Nice – Guide Complet VSL, Taxis Conventionnés & Accompagnement
- `/blog/nouvelle-convention-transports-medicaux-2025` — **D** — Q6.0/C7.5/Pr5.8 — in:2 — 2359 mots — Transports médicaux 2025 à Nice : ce que les patients doivent savoir sur la nouvelle convention
- `/blog/centres-medicaux-specialistes-nice-2025` — **D** — Q8.5/C7.5/Pr2.4 — in:5 — 2313 mots — Centres médicaux et spécialistes Nice 2025 : guide complet des établissements de santé
- `/blog/taxi-pasteur-saint-roch-riquier-republique-acropolis` — **D** — Q7.6/C5.5/Pr1.8 — in:2 — 2053 mots — Taxi Pasteur Nice : Transferts CHU Pasteur & Aéroport - Service 24/7
- `/blog/taxi-conventionne-vsl-yonne` — **D** — Q6.2/C2.5/Pr2.5 — in:0 — 1864 mots — Taxi conventionné VSL dans l'Yonne : votre transport médical de confiance

### Lot 6 — Gare / hôtels / Port — contrôle post-optimisations

- `/blog/taxi-nice-gare-sncf` — **C** — Q8.5/C8.5/Pr2.8 — in:9 — 1861 mots — Gare SNCF de Nice : sorties, accès et prise en charge en taxi
- `/blog/taxi-nice-gare-aeroport` — **C** — Q8.0/C8.0/Pr2.8 — in:2 — 2927 mots — Correspondance train–avion à Nice : Gare Nice-Ville → Aéroport
- `/blog/taxi-hotels-nice-transferts` — **C** — Q7.0/C8.0/Pr4.7 — in:4 — 840 mots — Taxi vers un hôtel à Nice : aéroport, gare et Port Lympia
- `/blog/taxi-mont-boron-port-nice` — **D** — Q7.6/C5.5/Pr3.3 — in:1 — 1873 mots — Taxi Mont-Boron Nice : Transferts Aéroport & Port Lympia - Service 24/7
- `/blog/taxi-regates-nice-2026` — **B** — Q6.2/C5.5/Pr3.8 — in:1 — 816 mots — Taxi Régates Nice 2026 : Transferts Port Lympia & Événements Voile

### Lot 7 — Guides génériques + soirée / plages (Home-safe)

- `/blog/taxi-nice-guide-complet-2025` — **D** — Q7.8/C7.0/Pr2.4 — in:21 — 2666 mots — Choisir un taxi à Nice en 2025 : pièges fréquents, prix, TC et taxis conventionnés
- `/blog/choisir-chauffeur-prive-nice` — **B** — Q6.0/C7.0/Pr6.0 — in:0 — 1019 mots — Comment Choisir son Chauffeur Privé à Nice ? Le Guide Complet 2025
- `/blog/taxi-affaires-nice-professionnels` — **C** — Q8.0/C7.0/Pr2.3 — in:2 — 2494 mots — Taxi Affaires Nice : Déplacements Professionnels & Entreprises - Guide 2026
- `/blog/taxi-restaurants-nice-sortie-soir` — **A** — Q4.2/C5.5/Pr5.5 — in:1 — 642 mots — Taxi Restaurants Nice : Sortie Dîner en Ville - Service Soirée 24/7
- `/blog/taxi-plages-nice-2026` — **A** — Q5.2/C5.5/Pr5.2 — in:1 — 728 mots — Taxi Plages Nice 2026 : Accès Plages Privées & Publiques - Transfert Mer

### Lot 8 — Aéroport longue distance + tourisme lieux

- `/blog/taxi-aeroport-nice-frejus` — **C** — Q8.0/C8.0/Pr2.8 — in:2 — 2146 mots — Taxi Aéroport de Nice vers Fréjus – Transfert Confort Longue Distance
- `/blog/taxi-aeroport-nice-saint-tropez` — **C** — Q8.5/C8.0/Pr2.6 — in:5 — 1778 mots — Taxi Aéroport de Nice vers Saint-Tropez – Transfert Premium Longue Distance
- `/blog/5-lieux-incontournables-nice-2025` — **A** — Q7.5/C4.0/Pr3.7 — in:5 — 2529 mots — 5 lieux incontournables à visiter à Nice en 2025 : le guide expert pour découvrir la ville comme un local
- `/blog/7-meilleurs-marches-nice-2025` — **B** — Q6.5/C4.0/Pr3.0 — in:0 — 2018 mots — Les 7 meilleurs marchés de Nice en 2025 : spécialités locales, horaires & conseils pratiques
- `/blog/3-plus-beaux-points-de-vue-nice-2025` — **C** — Q8.0/C4.0/Pr2.5 — in:1 — 3678 mots — Les 3 meilleurs spots photo de Nice en 2025 : guide panoramas secrets & conseils photographes

### Lot 9 — Événements & tourisme plages / Ironman

- `/blog/taxi-excursions-nice` — **C** — Q8.2/C4.0/Pr1 — in:3 — 1923 mots — Taxi pour les Excursions depuis Nice : Monaco, Cannes, Èze & Toute la Côte d'Azur
- `/blog/ironman-nice-2025` — **A** — Q5.8/C5.5/Pr4.9 — in:0 — 3396 mots — Ironman Nice 2026 : dates, parcours et guide complet pour participer
- `/blog/nice-quartiers-developpement-2025` — **A** — Q6.3/C5.5/Pr4.8 — in:1 — 2911 mots — Nice en mouvement : les quartiers qui se transforment en 2025 et l'impact pour les habitants & entreprises
- `/blog/plages-secretes-nice` — **A** — Q7.5/C5.5/Pr4.3 — in:5 — 1918 mots — Plages secrètes & coins cachés de Nice : comment y accéder facilement en Taxi (Guide 2025)
- `/blog/semi-marathon-nice-2026-taxi` — **A** — Q4.7/C5.5/Pr4.3 — in:0 — 595 mots — Semi-Marathon Nice 2026 : Taxi & Transferts Départ Course

### Lot 10 — Famille / événements / villages / randonnées

- `/blog/taxi-vacances-scolaires-nice-famille` — **A** — Q4.7/C5.5/Pr4.3 — in:0 — 627 mots — Taxi Vacances Scolaires Nice : Transferts Famille & Enfants - Guide 2026
- `/blog/fete-du-citron-menton-2026-taxi` — **A** — Q5.0/C5.5/Pr4.2 — in:0 — 662 mots — Fête du Citron Menton 2026 : Taxi & Transferts Nice → Menton
- `/blog/taxi-villages-perches-peillon-peille` — **B** — Q6.0/C5.5/Pr3.9 — in:0 — 2425 mots — Peillon, Peille et Sainte-Agnès : 3 villages perchés près de Nice
- `/blog/comment-acceder-ramatuelle-presquile-saint-tropez` — **B** — Q6.5/C5.5/Pr3.7 — in:0 — 972 mots — Comment accéder à Ramatuelle et à la presqu'île de Saint-Tropez
- `/blog/taxi-randonnees-nice-departs` — **B** — Q6.5/C5.5/Pr3.7 — in:1 — 709 mots — Taxi Randonnées Nice : Départs Sentiers & Mercantour - Service Matin

### Lot 11 — Quartiers + Monaco Yacht Show

- `/blog/taxi-ariane-nice` — **C** — Q6.8/C5.5/Pr3.6 — in:0 — 1835 mots — L'Ariane à Nice : accès, transports et déplacements en taxi
- `/blog/taxi-fabron-lanterne-corniche-fleurie-collines` — **D** — Q6.8/C5.5/Pr3.6 — in:0 — 1769 mots — Taxi Fabron Nice : Transferts Aéroport & Centre-ville - Service 24/7
- `/blog/taxi-gambetta-fleurs` — **D** — Q6.8/C5.5/Pr3.6 — in:0 — 1675 mots — Taxi Gambetta Nice : Transferts Centre-ville & Aéroport - Service 24/7
- `/blog/taxi-gorbella-cessole` — **D** — Q6.8/C5.5/Pr3.6 — in:0 — 1734 mots — Taxi Gorbella Nice : Transferts Aéroport & Centre-ville - Service 24/7
- `/blog/taxi-monaco-yacht-show-2026` — **B** — Q6.8/C5.5/Pr3.6 — in:0 — 1260 mots — Taxi Monaco Yacht Show 2026 : Transferts Port Hercule & Hôtels - Guide Pratique

### Lot 12 — Quartiers template (bloc 1) + musées / sites

- `/blog/taxi-place-massena-nice` — **D** — Q6.8/C5.5/Pr3.6 — in:0 — 1830 mots — Taxi Place Masséna Nice : Centre-Ville, Gare & Transferts 24/7 - Service Premium
- `/blog/taxi-trinite-nice` — **D** — Q6.8/C5.5/Pr3.6 — in:0 — 1570 mots — Taxi Trinité Nice : Transferts Aéroport & Centre-ville - Service 24/7
- `/blog/taxi-musees-nice` — **B** — Q7.2/C5.5/Pr3.5 — in:0 — 1739 mots — Taxi pour Visiter les Musées de Nice : Accès Facile aux Musées Matisse, Chagall & Plus
- `/blog/taxi-sites-touristiques-nice` — **B** — Q7.2/C5.5/Pr3.5 — in:0 — 1833 mots — Taxi pour les Sites Touristiques de Nice : Colline du Château, Vieux-Nice, Port & Plus
- `/blog/taxi-cimiez-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1651 mots — Taxi Cimiez Nice : Transferts Aéroport, Gare & Hôpital - Service 24/7

### Lot 13 — Quartiers template (bloc 2)

- `/blog/taxi-liberation-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1586 mots — Taxi Libération Nice : Transferts Centre-ville & Aéroport - Service 24/7
- `/blog/taxi-lingostiere-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1559 mots — Taxi Lingostière Nice : Transferts Zones Commerciales & Aéroport - Service 24/7
- `/blog/taxi-magnan-madeleine` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1803 mots — Taxi Magnan Nice : Transferts Promenade des Anglais & Aéroport - Service 24/7
- `/blog/taxi-nice-nord` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1656 mots — Taxi Nice Nord : Transferts Aéroport, Gare & Déplacements 24/7 - Service Local
- `/blog/taxi-promenade-des-anglais-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1806 mots — Taxi Promenade des Anglais Nice : Hôtels, Plages & Transferts 24/7 - Service Premium

### Lot 14 — Quartiers template (bloc 3) + TDF + Antibes partenaire

- `/blog/taxi-saint-augustin-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:2 — 1669 mots — Taxi Saint-Augustin Nice : Transferts Aéroport & Zones d'Activité - 24/7
- `/blog/taxi-saint-isidore-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1553 mots — Taxi Saint-Isidore Nice : Transferts Aéroport & Zones d'Activité - Service 24/7
- `/blog/taxi-vieux-nice` — **D** — Q7.3/C5.5/Pr3.4 — in:1 — 1682 mots — Taxi Vieux-Nice : Transferts & Déplacements 24/7 - Chauffeur Local Expert
- `/blog/tour-de-france-nice-2026-taxi` — **B** — Q7.5/C5.5/Pr3.4 — in:0 — 2321 mots — Taxi Tour de France Nice 2026 : 8-9 août, accès, aéroport et rues fermées
- `/blog/taxi-antibes-partenaire` — **A** — Q3.0/C3.5/Pr3.0 — in:0 — 334 mots — Taxi Antibes & Juan-les-Pins : recommandation locale (question fréquente)

### Lot 15 — Partenaires restants + ZAE

- `/blog/taxi-marseille-partenaire` — **A** — Q3.7/C3.5/Pr2.8 — in:0 — 406 mots — Taxi Marseille : Aéroport Marignane & Gare Saint-Charles (recommandation locale)
- `/blog/taxi-grasse-ici-taxi-partenaire` — **B** — Q6.0/C3.5/Pr2.0 — in:0 — 886 mots — Taxi Grasse : ICI Taxi — Transferts & Taxi VSL Conventionné CPAM
- `/blog/zones-activite-economique-nice-2025` — **C** — Q8.5/C5.5/Pr1.5 — in:3 — 2102 mots — Zones d'activité économique Nice 2025 : guide complet des parcs d'activité et zones d'implantation

---

## 6. Lot 1 — Détail opérationnel (à valider avant exécution)

**Objectif du lot :** renforcer 5 contenus à fort levier commercial / maillage, corriger un double H1 et un lien vers brouillon, sans toucher aux pages commerciales déjà optimisées (sauf lien contextuel justifié).

### Taxi de Nuit Nice : Service Nocturne 24/7 - Retours Soirée & Aéroport

1. **URL :** https://taxi-nice-06.com/blog/taxi-nuit-nice-service-nocturne
2. **Problèmes constatés :**
   - Orphelin (0 lien entrant)
   - Contenu correct mais peu ancré localement (horaires tram, zones soirée, aéroport nuit)
   - Maillage sortant limité (pas Home, pas Port, pas gare)
   - Potentiel commercial nuit / aéroport sous-exploité
3. **Modifications recommandées :**
   - Ajouter 2–3 paragraphes ultra-locaux (Promenade, Vieux Nice, Port, vols tardifs T1/T2)
   - Renforcer CTA réservation sans inventer de tarifs
   - Corriger/enrichir maillage (voir liens)
   - Vérifier Title : rester sur « taxi nuit Nice », pas « taxi Nice » générique
4. **Sections à conserver :** Angle service nocturne 24/7; Lien aéroport + réservation; Structure guide pratique
5. **Sections à améliorer :** Spécificité locale; Cas d’usage (soirée, hôtel, vol); Maillage entrant depuis restaurants / plages / Home resources si pertinent
6. **Liens internes à ajouter ou corriger :**
   - Depuis `/blog/taxi-restaurants-nice-sortie-soir` (réciproque déjà partielle)
   - Depuis guides événement / Ironman si pertinent
   - Vers `/` (accueil service) et `/secteurs/nice-port-lympia` ou Port si angle croisière nuit
   - Vers `/tarifs` uniquement si mention prix sans inventer chiffres
7. **Risques de cannibalisation :** Faible avec Home si angle « nuit / après tram » conservé. Éviter Title type « Taxi Nice 24/7 » trop large.
8. **Effort estimé :** Moyen (1–2 h)

### Taxi Van Nice 7 Places – Mercedes Classe V : Tarifs, Réservation & Service Groupe 2025

1. **URL :** https://taxi-nice-06.com/blog/taxi-groupe-nice-van-7-places
2. **Problèmes constatés :**
   - Double H1 : H1 page + `#` Markdown emoji
   - Cannibalisation probable avec `/services/van-premium` (Title/H1 proches)
   - Angle produit très proche de la landing
3. **Modifications recommandées :**
   - Supprimer le H1 Markdown ; garder H2/H3
   - Recentrer sur cas d’usage groupe (famille, aéroport bagages, événements) vs fiche produit van
   - Aligner Title pour ne pas dupliquer la landing van-premium
   - Renforcer liens croisés blog aéroport / hôtels
4. **Sections à conserver :** Infos Mercedes Classe V si factuelles déjà présentes; Liens van-premium, tarifs, aéroport; Sections destinations groupe
5. **Sections à améliorer :** Différenciation vs landing; Structure titres; Preuves locales (gares, hôtels, aéroport groupes)
6. **Liens internes à ajouter ou corriger :**
   - Conserver `/services/van-premium` comme page pilier
   - Ajouter lien depuis articles aéroport famille/groupe si absents
   - Éviter de sur-optimiser les mêmes KW que la landing
7. **Risques de cannibalisation :** Élevé avec van-premium — **ne pas supprimer** ; différencier (blog = guide groupe / cas d’usage).
8. **Effort estimé :** Moyen-élevé (2–3 h)

### Taxi Aéroport Nice vers Sophia Antipolis : Transfert Technopole - Prix & Réservation 2026

1. **URL :** https://taxi-nice-06.com/blog/taxi-aeroport-nice-sophia-antipolis
2. **Problèmes constatés :**
   - Orphelin malgré landing commerciale dédiée
   - Pas de lien vers `/services/taxi-aeroport-nice-sophia-antipolis` ni hub aéroport
   - Sortants surtout blog + réservation
3. **Modifications recommandées :**
   - Lier explicitement la landing Sophia + `/services/taxi-aeroport-nice` + `/tarifs`
   - Clarifier rôle : article = guide trajet / zones technopole ; landing = conversion
   - Ajouter points locaux ( Antipolis, Biot, Valbonne, parking/entreprises ) sans inventer prix
4. **Sections à conserver :** Angle technopole / professionnels; Liens blog Antibes / guide transfert; Longueur actuelle (~1080 mots)
5. **Sections à améliorer :** Maillage commercial; Ancrage entreprises / zones; CTA
6. **Liens internes à ajouter ou corriger :**
   - Vers `/services/taxi-aeroport-nice-sophia-antipolis`
   - Vers `/services/taxi-aeroport-nice`
   - Depuis landing Sophia (1 lien contextuel ressources) si justifié
   - Depuis `guide-transfert-aeroport-nice`
7. **Risques de cannibalisation :** Gérable si Title reste « Aéroport → Sophia » et landing garde l’offre. Pas de fusion.
8. **Effort estimé :** Léger-moyen (1 h)

### Taxi Personnes Âgées Nice : Transport Seniors & PMR - Service Adapté

1. **URL :** https://taxi-nice-06.com/blog/taxi-personnes-agees-nice-pmr
2. **Problèmes constatés :**
   - Orphelin
   - Chevauchement possible avec VSL / transport médical
   - Contenu assez court (~680 mots), peu de cas d’usage locaux
3. **Modifications recommandées :**
   - Positionner clairement : taxi seniors / confort / accompagnement ≠ VSL conventionné
   - Lien fort vers `/services/vsl` pour le cas médical conventionné
   - Ajouter situations locales (Pasteur, Saint-Roch, cliniques) sans dupliquer articles médicaux
4. **Sections à conserver :** Angle seniors & PMR non conventionné; Ton rassurant; CTA réservation
5. **Sections à améliorer :** Frontière VSL vs taxi; Maillage; Exemples quartiers / hôpitaux
6. **Liens internes à ajouter ou corriger :**
   - Vers `/services/vsl` (déjà) + préciser quand basculer
   - Vers `transport-medical-nice` en complémentaire
   - Depuis articles médicaux en lien « alternative non conventionnée »
7. **Risques de cannibalisation :** Moyen avec cluster VSL — différenciation sémantique obligatoire avant enrichissement.
8. **Effort estimé :** Moyen (1,5–2 h)

### Comment Réserver un Taxi à Nice : Guide Complet 2026

1. **URL :** https://taxi-nice-06.com/blog/reserver-taxi-nice-guide
2. **Problèmes constatés :**
   - Orphelin
   - Lien vers `/blog/tarifs-taxi-nice-2026` non publié (brouillon)
   - Risque de concurrence Home / page réservation sur requêtes génériques
3. **Modifications recommandées :**
   - Remplacer le lien tarifs blog par `/tarifs` (page commerciale)
   - Recentrer sur le « comment réserver » (étapes, délais, infos à fournir) plutôt que l’offre globale
   - Ajouter maillage aéroport / gare / nuit
4. **Sections à conserver :** Structure guide étapes; Angle pratique 2026; Lien réservation + aéroport
5. **Sections à améliorer :** Lien cassé/brouillon; Différenciation Home; Cas aéroport/gare/nuit
6. **Liens internes à ajouter ou corriger :**
   - `/tarifs` à la place du brouillon
   - `/secteurs/nice-gare`
   - `/blog/taxi-nuit-nice-service-nocturne`
   - Éviter sur-optimisation « taxi Nice »
7. **Risques de cannibalisation :** Moyen avec Home et `taxi-nice-guide-complet-2025` — garder angle procédural.
8. **Effort estimé :** Léger (45–60 min)

**Effort total Lot 1 (estimé) :** ~6–9 h

---

## 7. Règles pour les futures optimisations (lots validés)

- Modifier **uniquement** les 5 articles du lot + pages sources **strictement nécessaires** au maillage
- **Conserver** URL et canonicals
- **Ne pas inventer** tarifs ni prestations
- **Ne pas** multiplier les mots-clés artificiellement ni allonger sans justification
- Vérifier les liens internes ; corriger les erreurs techniques du lot
- Exécuter le **build** ; produire un rapport avant/après
- **Ne pas déployer** automatiquement
- Ne pas modifier les pages commerciales déjà optimisées, sauf lien contextuel réellement justifié
- Publication automatique hebdomadaire : **rester suspendue**

---

## 8. Recommandations pour les lots suivants

- **Lot 2 :** traiter ensemble les 4 fiches minces (même template) + corriger `/secteurs/nice` dans grève ; remplacer `/image-glc.png`.
- **Lots 3–4 :** maillage hub aéroport (`guide-transfert` + page aéroport) vers destinations ; éviter de réécrire toutes les pages aéroport en profondeur si C.
- **Lot 5 :** workshop cannibalisation VSL avant toute fusion/redirection ; clarifier le rôle de `taxi-conventionne-vsl-yonne` (hors zone ?).
- **Lot 6 :** contrôle qualité post-optimisations gare/hôtels/Port — interventions légères seulement.
- **Lot 7 :** guides génériques en mode « Home-safe » ; corriger liens cassés restaurants/plages.
- **Lots 11–14 :** cluster quartiers — décider d’une grille d’angles uniques avant réécriture en série.
- **Lot 15 :** partenaires mince — décider valeur SEO vs simple page relation.
- Après chaque lot : mettre à jour ce fichier (statut lot, date, écarts avant/après).

---

## 9. Suivi des lots

### Lot 1 — Optimisé + finalisé (20 octobre 2026) — en attente de validation et de déploiement

**Statut :** contenus finalisés en local (affirmations van/PMR + lien brouillon affaires) ; **non déployé** ; auto-publish toujours suspendu.  
**Build finalisation :** OK.

**Articles concernés :**

1. `/blog/taxi-nuit-nice-service-nocturne`
2. `/blog/taxi-groupe-nice-van-7-places`
3. `/blog/taxi-aeroport-nice-sophia-antipolis`
4. `/blog/taxi-personnes-agees-nice-pmr`
5. `/blog/reserver-taxi-nice-guide`

**Résumé des modifications :**

- Nuit : retrait des tarifs/majorations inventés ; ancrage local ; liens tarifs / aéroport / réservation ; maillage entrant restaurants + guide résa.
- Van groupe : suppression double H1 Markdown ; Title recentré « quand choisir » ; critères pratiques ; lien renforcé vers `/services/van-premium` (landing non modifiée).
- Sophia : Title/angle guide pratique ; lien vers landing ; tarifs renvoyés à `/tarifs` + landing ; 1 lien contextuel ajouté sur la landing Sophia.
- Seniors/PMR : distinction taxi classique vs VSL/CPAM ; suppression affirmations « van PMR » non prouvées ; lien VSL.
- Réservation : Title « Guide pratique » ; lien brouillon `/blog/tarifs-taxi-nice-2026` remplacé par `/tarifs` ; angle procédural Home-safe.
- Sources maillage : restaurants, vacances scolaires, guide transfert, antibes, transport médical, choisir chauffeur, landing Sophia.
- Build production : OK (20/10/2026).

**Lots 2–15 :** non démarrés.
