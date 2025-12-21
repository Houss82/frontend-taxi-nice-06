# 🔍 Guide : Indexation des Articles Publiés Automatiquement

Après chaque publication automatique d'un article via le workflow GitHub Actions, vous devez demander l'indexation dans Google Search Console.

## 📋 Workflow Post-Publication

### Étape 1 : Vérifier que l'article est publié

Le workflow GitHub Actions :
- ✅ Change `published: false` → `published: true`
- ✅ Déplace l'article de `draft/` vers `blog/`
- ✅ Commit et push automatiques

### Étape 2 : Générer la liste des URLs à indexer

Utilisez le script pour lister les articles publiés :

```bash
cd frontend
node scripts/index-new-articles.js
```

Le script génère :
- Une liste dans le terminal
- Un fichier `scripts/urls-to-index.txt` avec toutes les URLs

### Étape 3 : Indexer dans Google Search Console

**Méthode manuelle (recommandée pour commencer)** :

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionnez votre propriété : `taxi-nice-06.com`
3. Allez dans **"Inspection d'URL"** (menu de gauche)
4. Pour chaque URL de l'article publié :
   - Collez l'URL : `https://taxi-nice-06.com/blog/taxi-vieux-nice`
   - Cliquez sur **"Demander l'indexation"**
   - Attendez la validation (quelques minutes à quelques heures)

**Méthode rapide** :
- Ouvrez le fichier `scripts/urls-to-index.txt`
- Copiez-collez les URLs une par une dans Google Search Console

## ⚡ Automatisation (Optionnel)

### Option A : API Google Search Console

Vous pouvez automatiser l'indexation via l'API Google Search Console :

1. **Créer un projet dans Google Cloud Console**
2. **Activer l'API Google Search Console**
3. **Créer des credentials (OAuth 2.0)**
4. **Modifier le workflow GitHub Actions** pour appeler l'API après publication

**Avantages** :
- ✅ Indexation automatique
- ✅ Pas d'intervention manuelle

**Inconvénients** :
- ❌ Configuration initiale complexe
- ❌ Nécessite des credentials Google

### Option B : Service externe (Zapier, Make.com)

Vous pouvez créer un webhook qui :
1. Détecte les nouveaux commits GitHub
2. Extrait l'URL de l'article publié
3. Appelle l'API Google Search Console

## 📊 Vérification de l'Indexation

### Après 24-48h

1. **Google Search Console** → **Indexation** → **Pages**
2. Vérifiez que l'article apparaît comme "Indexée"
3. Vérifiez les performances dans **Performances**

### Outils de vérification

- **Google Search Console** : Inspection d'URL
- **Google Search** : `site:taxi-nice-06.com/blog/taxi-vieux-nice`
- **Rich Results Test** : https://search.google.com/test/rich-results

## ⏱️ Timing Recommandé

**Immédiatement après publication** :
- ✅ Demander l'indexation dans Google Search Console
- ✅ Vérifier que l'article est accessible

**Après 24-48h** :
- ✅ Vérifier que l'article est indexé
- ✅ Vérifier les métadonnées (title, description)

**Après 1 semaine** :
- ✅ Vérifier les premières impressions dans Google Search Console
- ✅ Surveiller les positions pour les mots-clés ciblés

## 📝 Checklist Post-Publication

- [ ] Article publié automatiquement (vérifié dans GitHub Actions)
- [ ] Article visible sur le site (`/blog/[slug]`)
- [ ] URL demandée dans Google Search Console
- [ ] Indexation confirmée (après 24-48h)
- [ ] Métadonnées vérifiées (title, description, image)
- [ ] Sitemap mis à jour automatiquement (Next.js le fait)

## 🔗 Ressources

- **Google Search Console** : https://search.google.com/search-console
- **Documentation API** : https://developers.google.com/webmaster-tools/search-console-api-original
- **Guide d'indexation** : https://developers.google.com/search/docs/crawling-indexing/request-indexing

## 💡 Astuce

Pour gagner du temps, vous pouvez :
1. Créer un bookmark dans votre navigateur vers Google Search Console
2. Utiliser le script `index-new-articles.js` pour générer la liste
3. Indexer tous les nouveaux articles en une seule session (une fois par semaine)


