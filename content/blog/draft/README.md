# 📝 Articles en attente de publication

Ce dossier contient les articles de blog prêts mais **pas encore publiés** (`published: false`).

Les sous-dossiers correspondent aux catégories du site. Un dossier vide disparaît de Git dès que le dernier article est publié automatiquement : il faut alors le recréer.

## 📋 7 dossiers × 5 articles = 35 brouillons

### 🚗 Taxi
| Article | Date prévue |
|---|---|
| taxi-ariane-nice.md | 2026-09-22 |
| taxi-caucade-nice.md | 2026-09-29 |
| taxi-arenes-nice.md | 2026-10-06 |
| taxi-saint-laurent-du-var.md | 2026-10-13 |
| taxi-carros-nice.md | 2026-10-20 |

### 🌍 Voyage et Tourisme
| Article | Date prévue |
|---|---|
| taxi-villages-perches-peillon-peille.md | 2026-09-08 |
| taxi-port-lympia-croisieres-nice.md | 2026-10-27 |
| taxi-grasse-parfumeries-visite.md | 2026-11-03 |
| taxi-stations-ski-alpes-maritimes.md | 2026-11-10 |
| taxi-parcs-jardins-nice.md | 2026-11-17 |

### ✈️ Transferts Aéroport
| Article | Date prévue |
|---|---|
| taxi-aeroport-nice-eze.md | 2026-08-04 |
| taxi-aeroport-nice-monaco.md | 2026-08-18 |
| taxi-aeroport-nice-sophia-antipolis.md | 2026-09-01 |
| taxi-aeroport-nice-grasse.md | 2027-01-05 |
| taxi-aeroport-nice-sanremo.md | 2027-01-12 |

### 📖 Guide Pratique
| Article | Date prévue |
|---|---|
| taxi-affaires-nice-professionnels.md | 2026-08-25 |
| taxi-animaux-nice.md | 2027-01-19 |
| taxi-vs-vtc-nice.md | 2027-01-26 |
| taxi-bagages-aeroport-nice.md | 2027-02-02 |
| taxi-retard-vol-annulation-nice.md | 2027-02-09 |

### 📰 Actualités
| Article | Date prévue |
|---|---|
| taxi-monaco-yacht-show-2026.md | 2026-09-15 |
| taxi-allianz-riviera-ogc-nice.md | 2026-11-24 |
| taxi-congres-nice-acropolis.md | 2027-02-16 |
| taxi-mipim-cannes-2027.md | 2027-02-23 |
| taxi-rentree-universitaire-nice.md | 2027-03-02 |

### 🤝 Partenaires
| Article | Date prévue |
|---|---|
| taxi-cannes-recommandation-locale.md | 2027-03-09 |
| taxi-monaco-recommandation-locale.md | 2027-03-16 |
| taxi-menton-recommandation-locale.md | 2027-03-23 |
| taxi-cagnes-sur-mer-recommandation.md | 2027-03-30 |
| taxi-toulon-hyeres-recommandation.md | 2027-04-06 |

### ❤️ Santé, Mobilité & Bien-être
| Article | Date prévue |
|---|---|
| taxi-chu-pasteur-2-rendez-vous.md | 2026-12-01 |
| taxi-dialyse-soins-reguliers-nice.md | 2026-12-08 |
| taxi-imagerie-irm-scanner-nice.md | 2026-12-15 |
| taxi-cliniques-privees-nice.md | 2026-12-22 |
| taxi-accessibilite-fauteuil-nice.md | 2026-12-29 |

**Total : 35 articles en attente**

---

## 🚀 Publication

Le script GitHub Actions publie automatiquement les articles dont la **date** est atteinte (`published: false` → `true`, déplacement hors de `draft/`).

Publication manuelle :

```bash
node scripts/publish-article.js nom-de-l-article
```

---

## 📝 Organisation

- `content/blog/draft/[Catégorie]/` → non publiés
- `content/blog/` → publiés (`published: true`)

**Anti-cannibalisation** : chaque nouvel article cible un angle distinct (quartier non couvert, village perché ≠ Èze, PMR ≠ seniors, Grasse transfert ≠ Grasse visite ≠ ICI Taxi, etc.).
