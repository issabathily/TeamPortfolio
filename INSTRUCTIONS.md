# Instructions d'utilisation de la version HTML/Tailwind

Cette version du site est la plus simple, utilisant uniquement HTML, CSS (via Tailwind) et JavaScript vanilla. Aucun framework n'est utilisé.

## Démarrage simple

Le moyen le plus simple de démarrer le site est d'ouvrir directement les fichiers HTML dans votre navigateur. Il suffit de double-cliquer sur `index.html` pour commencer.

## Démarrage avec un serveur local

Si vous souhaitez démarrer le site via un serveur local (recommandé pour un développement), vous avez plusieurs options :

### Option 1 : Utiliser Node.js (inclus dans ce projet)

Si vous avez Node.js installé :

```bash
# À partir du dossier html-version
node serve.js
```

Cela démarrera un serveur local sur http://localhost:8080

### Option 2 : Utiliser Python

Si vous avez Python installé :

```bash
# À partir du dossier html-version
python -m http.server
```

Cela démarrera un serveur local sur http://localhost:8000

### Option 3 : Utiliser un serveur local Live Server dans VS Code

Si vous utilisez Visual Studio Code, vous pouvez installer l'extension "Live Server" et cliquer sur "Go Live" pour démarrer un serveur local.

## Structure des fichiers

- `index.html` : Page d'accueil
- `projects.html` : Page des projets
- `team.html` : Page de l'équipe
- `contact.html` : Page de contact
- `assets/css/styles.css` : Styles CSS (incluant Tailwind via CDN)
- `assets/js/main.js` : JavaScript pour les fonctionnalités interactives

## Modification du contenu

Pour modifier le contenu du site, vous pouvez :

1. Éditer les fichiers HTML directement pour changer la structure
2. Modifier le fichier JavaScript `main.js` pour changer les données (slides, projets, équipe)
3. Ajouter ou modifier les styles dans `styles.css`

## Déploiement

Pour déployer ce site, il suffit de copier tous les fichiers du dossier `html-version` sur votre serveur web ou service d'hébergement.

Bon développement !