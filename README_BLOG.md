# 📰 Blog - Guide Rapide

## 🚀 Ajouter un article en 3 étapes

### 1. Créer le fichier

Dans le dossier `content/blog/`, créez un nouveau fichier `.md` :

```
mon-nouvel-article.md
```

### 2. Ajouter les métadonnées

En haut du fichier, ajoutez :

```yaml
---
title: "Votre Titre d'Article"
date: "2025-01-20"
excerpt: "Courte description de l'article (150 caractères max)"
image: "/votre-image.jpg"
category: "Guides Pratiques"
author: "Taxi Nice Côte d'Azur"
keywords: ["mot-clé1", "mot-clé2", "mot-clé3"]
---
```

### 3. Écrire le contenu

```markdown
# Titre Principal

Introduction de votre article...

## Section 1

Contenu de la section 1...

## Section 2

Contenu de la section 2...

## Conclusion

Votre conclusion et call-to-action...
```

**C'est tout !** L'article apparaît automatiquement sur `/blog` 🎉

---

## 📝 Utiliser ChatGPT

### Prompt simple

```
Écris un article de blog de 1000 mots sur "sujet"
pour un service de taxi premium à Nice.
Format : Markdown
Inclure : H2, H3, listes, émojis, FAQ, CTA
Mots-clés : taxi nice, chauffeur privé
```

Copiez-collez le résultat dans votre fichier `.md` !

---

## 📁 Structure des fichiers

```
content/blog/
├── _TEMPLATE.md          ← Template à copier
├── article-1.md          ← Vos articles
├── article-2.md
└── article-3.md
```

---

## ✅ Checklist article SEO

- [ ] Titre avec mot-clé (50-70 caractères)
- [ ] Meta description (150 caractères)
- [ ] 800+ mots minimum
- [ ] 3-5 mots-clés
- [ ] Image optimisée (<500KB)
- [ ] H2 et H3 pour structure
- [ ] Listes à puces
- [ ] FAQ (questions/réponses)
- [ ] Call-to-action final

---

## 🎯 Catégories disponibles

- `Guides Pratiques` - Tutoriels détaillés
- `Conseils` - Astuces et recommandations
- `Tourisme` - Découverte de la région
- `Actualités` - News et événements

---

## 📸 Images

1. Placez vos images dans `/public/`
2. Référencez-les : `image: "/mon-image.jpg"`
3. Taille recommandée : 1200x630px
4. Optimisez le poids (<500KB)

---

## 🔗 Liens utiles

- **Template complet** : `content/blog/_TEMPLATE.md`
- **Guide détaillé** : `GUIDE_BLOG.md`
- **Markdown** : https://www.markdownguide.org/

---

## ❓ Besoin d'aide ?

Consultez le `GUIDE_BLOG.md` pour :

- Idées de sujets
- Prompts ChatGPT avancés
- Optimisation SEO
- Calendrier éditorial

**Bon blogging ! ✍️**















