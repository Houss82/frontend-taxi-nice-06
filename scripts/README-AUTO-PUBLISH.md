# 🤖 Publication Automatique des Articles

Ce système permet de publier automatiquement les articles dont la date correspond à aujourd'hui.

## 📋 Fonctionnement

Le script `auto-publish-articles.js` :
1. ✅ Vérifie tous les articles dans `content/blog/draft/`
2. ✅ Compare la date de chaque article avec la date du jour
3. ✅ Si la date correspond ET `published: false`
4. ✅ Change `published: false` → `published: true`
5. ✅ Déplace le fichier de `draft/` vers `blog/`

## 🚀 Méthodes d'exécution

### Option 1 : Cron Job Local (macOS/Linux)

Pour exécuter le script tous les jours à 16h30 sur votre machine locale :

```bash
# Configurer le cron job
./scripts/setup-cron.sh

# Tester le script manuellement
node scripts/auto-publish-articles.js

# Voir les logs
tail -f logs/cron-auto-publish.log
```

**Avantages** :
- ✅ Fonctionne même si le site n'est pas déployé
- ✅ Exécution locale fiable
- ✅ Pas de dépendance externe

**Inconvénients** :
- ❌ Nécessite que votre machine soit allumée à 16h30
- ❌ Nécessite Node.js installé localement

### Option 2 : GitHub Actions (Recommandé pour GitHub)

Si votre code est sur GitHub, utilisez le workflow GitHub Actions :

1. Le fichier `.github/workflows/auto-publish-articles.yml` est déjà configuré
2. Il s'exécute automatiquement tous les jours à 16h30 UTC (17h30/18h30 heure française)
3. Les changements sont automatiquement commités et pushés

**Avantages** :
- ✅ Fonctionne même si votre machine est éteinte
- ✅ Automatique et fiable
- ✅ Historique dans GitHub

**Inconvénients** :
- ❌ Nécessite que le repo soit sur GitHub
- ❌ Nécessite des droits d'écriture sur le repo

### Option 3 : Vercel Cron Jobs (Recommandé pour Vercel)

Si vous déployez sur Vercel :

1. Le fichier `vercel.json` est déjà configuré
2. L'API route `/api/cron/auto-publish` est prête
3. Vercel exécutera automatiquement le cron job

**Configuration dans Vercel Dashboard** :
- Allez dans votre projet → Settings → Cron Jobs
- Vérifiez que le cron job est actif

**Avantages** :
- ✅ Fonctionne automatiquement sur Vercel
- ✅ Pas de configuration supplémentaire nécessaire
- ✅ Logs disponibles dans Vercel Dashboard

**Inconvénients** :
- ❌ Nécessite un déploiement sur Vercel
- ❌ Nécessite le plan Pro pour les cron jobs (ou utiliser l'API route avec un service externe)

### Option 4 : Service Externe (cron-job.org, etc.)

Vous pouvez utiliser un service externe pour appeler l'API route :

1. Créez un compte sur [cron-job.org](https://cron-job.org) ou similaire
2. Configurez une tâche qui appelle : `https://votre-domaine.com/api/cron/auto-publish`
3. Programmez-la pour 16h30 tous les jours

**Sécurité** : Ajoutez une clé secrète dans `.env.local` :
```
CRON_SECRET=votre-cle-secrete-tres-longue
```

Et configurez le service pour envoyer :
```
Authorization: Bearer votre-cle-secrete-tres-longue
```

## 🧪 Tester le script

Pour tester le script manuellement :

```bash
# Mode normal (affiche seulement les articles à publier aujourd'hui)
node scripts/auto-publish-articles.js

# Mode verbose (affiche tous les articles)
node scripts/auto-publish-articles.js --verbose
```

## 📝 Format des dates

Les dates doivent être au format `YYYY-MM-DD` dans le frontmatter :

```markdown
---
date: "2025-12-21"
published: false
---
```

## 🔍 Vérification

Pour vérifier qu'un article sera publié automatiquement :

1. Vérifiez que l'article est dans `content/blog/draft/`
2. Vérifiez que `published: false` est présent
3. Vérifiez que la date correspond à la date de publication souhaitée
4. Le script publiera automatiquement l'article le jour J à 16h30

## 📊 Logs

Les logs sont disponibles :
- **Cron local** : `logs/cron-auto-publish.log`
- **GitHub Actions** : Dans l'onglet "Actions" de votre repo
- **Vercel** : Dans le dashboard Vercel → Logs
- **API route** : Dans les logs du serveur Next.js

## ⚠️ Notes importantes

1. **Fuseau horaire** : Le script utilise l'heure système. Assurez-vous que votre serveur/cron est configuré avec le bon fuseau horaire.

2. **GitHub Actions** : Utilise UTC. 16h30 UTC = 17h30 CET (hiver) ou 18h30 CEST (été).

3. **Vercel** : Utilise UTC par défaut.

4. **Sécurité** : Si vous utilisez l'API route, protégez-la avec `CRON_SECRET`.

5. **Backup** : Les articles sont déplacés (pas copiés), assurez-vous d'avoir un système de backup (Git).

## 🛠️ Dépannage

**Le script ne s'exécute pas** :
- Vérifiez que le cron job est bien configuré : `crontab -l`
- Vérifiez les logs : `tail -f logs/cron-auto-publish.log`
- Testez manuellement : `node scripts/auto-publish-articles.js`

**Les articles ne sont pas publiés** :
- Vérifiez que la date correspond exactement (format YYYY-MM-DD)
- Vérifiez que `published: false` est présent
- Vérifiez que l'article est dans `draft/`

**Erreurs de permissions** :
- Vérifiez les permissions du script : `chmod +x scripts/auto-publish-articles.js`
- Vérifiez les permissions du dossier `content/blog/`

