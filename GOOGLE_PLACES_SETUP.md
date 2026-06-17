# Configuration Google Places API

## Étapes pour configurer l'API Google Places

### 1. Obtenir une clé API Google

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Places :
   - Allez dans "APIs & Services" > "Library"
   - Recherchez "Places API"
   - Cliquez sur "Enable"
4. Créez une clé API :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "API Key"
   - Copiez votre clé API

### 2. Configurer la clé API

1. Créez un fichier `.env.local` dans le dossier `frontend/`
2. Ajoutez votre clé API :

```bash
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=votre_cle_api_ici
```

### 3. Sécuriser votre clé API (Recommandé)

1. Dans Google Cloud Console, allez dans "APIs & Services" > "Credentials"
2. Cliquez sur votre clé API
3. Dans "Application restrictions", sélectionnez "HTTP referrers"
4. Ajoutez vos domaines :
   - `http://localhost:3000/*` (pour le développement)
   - `https://votre-domaine.com/*` (pour la production)

### 4. Tester l'intégration

1. Redémarrez votre serveur de développement :

   ```bash
   npm run dev
   ```

2. Allez sur la page de réservation
3. Tapez dans les champs d'adresse
4. Vous devriez voir des suggestions d'adresses en temps réel

## Fonctionnalités

- ✅ Autocomplétion d'adresses en temps réel
- ✅ Limitation géographique à la France
- ✅ Fallback vers des adresses locales si l'API n'est pas disponible
- ✅ Interface utilisateur intuitive
- ✅ Gestion des erreurs

## Coûts

- Google Places API : ~$0.017 par requête
- 1000 requêtes = ~$17
- Consultez la [documentation officielle](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing) pour plus de détails

## Support

Si vous rencontrez des problèmes :

1. Vérifiez que votre clé API est correcte
2. Vérifiez que l'API Places est activée
3. Vérifiez les restrictions de domaine
4. Consultez la console du navigateur pour les erreurs
