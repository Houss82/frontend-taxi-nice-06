# Configuration API Adresse.data.gouv.fr

## API Française Gratuite pour l'Autocomplétion d'Adresses

### 🎯 Avantages de l'API Adresse.data.gouv.fr

- ✅ **100% Gratuite** - Aucun coût
- ✅ **France uniquement** - Parfait pour votre service taxi
- ✅ **Données officielles** - Base Adresse Nationale (BAN)
- ✅ **Pas de clé API** - Utilisation directe
- ✅ **Haute précision** - Adresses françaises complètes

### 🚀 Utilisation

L'API est déjà configurée et fonctionne automatiquement ! Aucune configuration nécessaire.

### 📍 Fonctionnalités

- ✅ Autocomplétion d'adresses en temps réel
- ✅ Limitation géographique à la France
- ✅ Fallback vers des adresses locales si l'API n'est pas disponible
- ✅ Interface utilisateur intuitive avec contexte
- ✅ Gestion des erreurs robuste

### 🔧 API Endpoint

```
https://api-adresse.data.gouv.fr/search/?q={query}&limit=5&type=housenumber&autocomplete=1
```

### 📊 Paramètres

- `q` : Requête de recherche (minimum 3 caractères)
- `limit` : Nombre maximum de résultats (5)
- `type` : Type d'adresse (housenumber pour adresses complètes)
- `autocomplete` : Mode autocomplétion activé

### 🎨 Interface

- **Adresse principale** : Nom de l'adresse en gras
- **Contexte** : Ville, département en petit texte
- **Icône** : Pin de localisation
- **Hover** : Effet de survol pour la sélection

### 🛡️ Fallback

En cas d'erreur de l'API, le système utilise automatiquement une liste d'adresses locales de la Côte d'Azur :

- Aéroport Nice Côte d'Azur
- Gare de Nice-Ville
- Promenade des Anglais
- Place Masséna
- Vieux Nice
- Port de Nice
- Monaco, Cannes, etc.

### 📚 Documentation Officielle

- [API Adresse.data.gouv.fr](https://adresse.data.gouv.fr/api-doc/adresse)
- [Base Adresse Nationale](https://adresse.data.gouv.fr/)

### 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez votre connexion internet
2. Consultez la console du navigateur pour les erreurs
3. L'API est maintenue par l'État français et très fiable

### 🎉 Résultat

Votre formulaire de réservation utilise maintenant l'API officielle française pour l'autocomplétion d'adresses, entièrement gratuite et parfaitement adaptée à votre service de taxi sur la Côte d'Azur !

