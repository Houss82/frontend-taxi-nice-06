# 🤖 GitHub Actions - Publication Automatique

Ce workflow publie automatiquement les articles dont la date correspond à aujourd'hui.

## 📅 Programmation

- **Fréquence** : Tous les jours à 16h30 UTC
- **Heure française** : 17h30 (hiver) / 18h30 (été)

## 🔄 Fonctionnement

1. ✅ Checkout du repository
2. ✅ Installation des dépendances Node.js
3. ✅ Exécution du script `auto-publish-articles.js`
4. ✅ Vérification des changements
5. ✅ Commit et push automatiques si des articles ont été publiés

## 🚀 Activation

Le workflow est **automatiquement activé** dès que le fichier est présent dans `.github/workflows/`.

Pour vérifier qu'il est actif :
1. Allez dans votre repo GitHub
2. Onglet **Actions**
3. Vous devriez voir "Auto Publish Articles" dans la liste

## 🧪 Test manuel

Vous pouvez déclencher le workflow manuellement :

1. Allez dans **Actions** → **Auto Publish Articles**
2. Cliquez sur **Run workflow**
3. Sélectionnez la branche (généralement `main` ou `master`)
4. Cliquez sur **Run workflow**

## 📊 Logs

Les logs de chaque exécution sont disponibles dans l'onglet **Actions** :
- ✅ Succès : Les articles ont été publiés et commités
- ⚠️ Aucun changement : Aucun article à publier aujourd'hui
- ❌ Erreur : Vérifiez les logs pour diagnostiquer

## ⚙️ Configuration

### Modifier l'heure d'exécution

Éditez le fichier `.github/workflows/auto-publish-articles.yml` :

```yaml
schedule:
  - cron: '30 16 * * *'  # Format: minute heure jour mois jour-semaine
```

**Exemples** :
- `'30 16 * * *'` → 16h30 UTC tous les jours
- `'0 9 * * *'` → 9h00 UTC tous les jours
- `'0 14 * * 1-5'` → 14h00 UTC du lundi au vendredi

### Permissions

Le workflow utilise `GITHUB_TOKEN` avec les permissions `contents: write` pour pouvoir push les changements.

## 🔒 Sécurité

- ✅ Le workflow utilise le token GitHub automatique (`GITHUB_TOKEN`)
- ✅ Les permissions sont limitées à `contents: write`
- ✅ Aucune clé secrète nécessaire

## 📝 Format des commits

Les commits automatiques suivent ce format :
```
🤖 Auto-publish articles scheduled for 2025-12-21
```

## ⚠️ Notes importantes

1. **Fuseau horaire** : Le cron utilise UTC. 16h30 UTC = 17h30 CET / 18h30 CEST

2. **Branche** : Le workflow push sur la branche d'où il a été déclenché (généralement `main` ou `master`)

3. **Dépendances** : Assurez-vous que `package.json` et `package-lock.json` sont à jour dans `frontend/`

4. **Première exécution** : La première exécution peut prendre quelques minutes pour installer les dépendances

## 🛠️ Dépannage

**Le workflow ne s'exécute pas** :
- Vérifiez que le fichier est dans `.github/workflows/`
- Vérifiez que le repo est sur GitHub (pas seulement local)
- Vérifiez les permissions du repo

**Les articles ne sont pas publiés** :
- Vérifiez les logs dans l'onglet Actions
- Vérifiez que les dates sont au format `YYYY-MM-DD`
- Vérifiez que `published: false` est présent dans les articles

**Erreur de push** :
- Vérifiez que le workflow a les permissions `contents: write`
- Vérifiez que la branche existe et est accessible

