# 📝 Articles en attente de publication

Ce dossier contient les articles de blog qui sont prêts mais **pas encore publiés** (`published: false`).

## 📋 Articles en attente (par catégorie)

### 🚗 Taxi
| Article | Date prévue |
|---|---|
| taxi-trinite-nice.md | 2026-07-21 |

### 🌍 Tourisme
| Article | Date prévue |
|---|---|
| taxi-regates-nice-2026.md | 2026-07-07 |
| taxi-restaurants-nice-sortie-soir.md | 2026-07-28 |
| taxi-vignobles-bellet-nice.md | 2026-09-08 |

### ✈️ Transferts Aéroport
| Article | Date prévue |
|---|---|
| taxi-aeroport-nice-cap-ferrat.md | 2026-07-14 |
| taxi-aeroport-nice-eze.md | 2026-08-04 |
| taxi-aeroport-nice-monaco.md | 2026-08-18 |
| taxi-aeroport-nice-sophia-antipolis.md | 2026-09-01 |

### 📖 Guide Pratique
| Article | Date prévue |
|---|---|
| taxi-animaux-nice.md | 2026-08-11 |
| taxi-affaires-nice-professionnels.md | 2026-08-25 |

### 📰 Actualités
| Article | Date prévue |
|---|---|
| taxi-monaco-yacht-show-2026.md | 2026-09-15 |

**Total : 11 articles en attente sur 5 catégories**

---

## 🚀 Comment publier un article

### Méthode 1 : Utiliser le script (recommandé)

Le script déplace automatiquement l'article de `draft/` vers `blog/` et change `published: false` à `published: true` :

```bash
# Publier avec la date déjà dans le fichier
node scripts/publish-article.js taxi-trinite-nice

# Publier avec une date spécifique (écrase la date du fichier)
node scripts/publish-article.js taxi-trinite-nice 2026-07-21
```

Le script va :
- ✅ Utiliser la date existante dans le fichier (ou celle passée en argument)
- ✅ Changer `published: false` à `published: true`
- ✅ Mettre à jour la date de modification en bas de l'article
- ✅ Déplacer le fichier de `draft/` vers `blog/`
- ✅ L'article devient immédiatement visible sur le site

### Méthode 2 : Publication automatique (GitHub Actions)

Le script `auto-publish-articles.js` vérifie chaque jour les articles dont la date correspond et les publie automatiquement.

### Méthode 3 : Publication manuelle

1. **Ouvrez l'article** dans `content/blog/draft/`
2. **Modifiez le frontmatter** : `published: false` → `published: true`
3. **Mettez à jour la date de modification** en bas de l'article
4. **Déplacez le fichier** de `draft/` vers `blog/`

---

## 📅 Calendrier de publication recommandé

Les articles sont planifiés **1 par semaine** pour une indexation progressive par Google :

| Semaine | Article | Catégorie |
|---|---|---|
| 7 juil. | Régates Nice 2026 | Tourisme |
| 14 juil. | Cap Ferrat | Transferts Aéroport |
| 21 juil. | Trinité Nice | Taxi |
| 28 juil. | Restaurants sortie soir | Tourisme |
| 4 août | Èze | Transferts Aéroport |
| 11 août | Animaux de compagnie | Guide Pratique |
| 18 août | Aéroport → Monaco | Transferts Aéroport |
| 25 août | Taxi affaires | Guide Pratique |
| 1 sept. | Sophia Antipolis | Transferts Aéroport |
| 8 sept. | Vignobles de Bellet | Tourisme |
| 15 sept. | Monaco Yacht Show 2026 | Actualités |

---

## ✅ Vérifications avant publication

Avant de publier un article, vérifiez :

- [ ] La date de publication est correcte
- [ ] Le titre et l'excerpt sont optimisés SEO
- [ ] L'image est présente dans `/public/` et nommée correctement
- [ ] Les liens internes fonctionnent
- [ ] La date de modification en bas de l'article correspond à la date de publication
- [ ] `published: false` est présent (pour confirmer qu'il n'est pas déjà publié)
- [ ] La catégorie est mappée dans `src/lib/blogCategories.jsx`

---

## 📝 Note importante

**Organisation visuelle** :
- 📁 `content/blog/draft/[Catégorie]/` → Articles non publiés (`published: false`)
- 📁 `content/blog/` → Articles publiés (`published: true`)

**Contrôle technique** :
- Les articles avec `published: false` **ne sont pas visibles** sur le site
- Les articles avec `published: true` **sont visibles** sur le site
- Le système lit les deux dossiers mais filtre par `published: true`

**Stratégie anti-cannibalisation** :
- Chaque article cible un **mot-clé unique** (quartier, destination, thématique)
- Les articles complémentaires se lient entre eux via des liens internes
- Pas de doublon avec les articles déjà publiés
