# 📝 Articles en attente de publication

Ce dossier contient les articles de blog qui sont prêts mais **pas encore publiés** (`published: false`).

## 📋 Articles en attente

Les articles suivants sont prêts à être publiés :

1. **taxi-vieux-nice.md** - Date prévue: 2025-12-21
2. **taxi-cimiez-nice.md** - Date prévue: 2025-12-28
3. **taxi-liberation-nice.md** - Date prévue: 2026-01-04
4. **taxi-nice-nord.md** - Date prévue: 2026-01-11
5. **taxi-promenade-des-anglais-nice.md** - Date prévue: 2026-01-18

## 🚀 Comment publier un article

### Méthode 1 : Utiliser le script (recommandé)

Le script déplace automatiquement l'article de `draft/` vers `blog/` et change `published: false` à `published: true` :

```bash
# Publier avec la date déjà dans le fichier
node scripts/publish-article.js taxi-vieux-nice

# Publier avec une date spécifique (écrase la date du fichier)
node scripts/publish-article.js taxi-cimiez-nice 2025-12-20
```

Le script va :
- ✅ Utiliser la date existante dans le fichier (ou celle passée en argument)
- ✅ Changer `published: false` à `published: true`
- ✅ Mettre à jour la date de modification en bas de l'article
- ✅ Déplacer le fichier de `draft/` vers `blog/`
- ✅ L'article devient immédiatement visible sur le site

### Méthode 2 : Publication manuelle

1. **Ouvrez l'article** dans `content/blog/draft/`

2. **Modifiez le frontmatter** :
   ```markdown
   published: false  →  published: true
   ```

3. **Optionnel** : Modifiez la date si nécessaire :
   ```markdown
   date: "2025-12-21"  # Changez si besoin
   ```

4. **Mettez à jour la date de modification** en bas de l'article :
   ```markdown
   _Article mis à jour le 21 décembre 2025_
   ```

5. **Déplacez le fichier** de `draft/` vers `blog/` :
   ```bash
   mv content/blog/draft/nom-article.md content/blog/nom-article.md
   ```

6. **L'article est maintenant visible** sur votre site !

## 📅 Recommandation de publication

Pour éviter de publier tous les articles le même jour (meilleur pour le SEO), publiez-les progressivement :

- **Semaine 1** : Publier 1-2 articles
- **Semaine 2** : Publier 1-2 articles  
- **Semaine 3** : Publier le reste

Cela permet à Google d'indexer progressivement vos nouveaux contenus et d'éviter les signaux de spam.

## ✅ Vérifications avant publication

Avant de publier un article, vérifiez :

- [ ] La date de publication est correcte
- [ ] Le titre et l'excerpt sont optimisés SEO
- [ ] Les images sont présentes et nommées correctement
- [ ] Les liens internes fonctionnent
- [ ] La date de modification en bas de l'article correspond à la date de publication
- [ ] `published: false` est présent (pour confirmer qu'il n'est pas déjà publié)

## 📝 Note importante

**Organisation visuelle** :
- 📁 `content/blog/draft/` → Articles non publiés (`published: false`)
- 📁 `content/blog/` → Articles publiés (`published: true`)

**Contrôle technique** :
- Les articles avec `published: false` **ne sont pas visibles** sur le site
- Les articles avec `published: true` **sont visibles** sur le site
- Le système lit les deux dossiers mais filtre par `published: true`

**Rétrocompatibilité** :
- Les articles existants sans `published:` sont considérés comme publiés par défaut
