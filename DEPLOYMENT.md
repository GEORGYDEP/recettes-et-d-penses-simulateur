# Guide de Déploiement sur GitHub

Ce guide vous explique comment mettre en ligne votre simulateur Budget & Vie sur GitHub.

## 📦 Étape 1 : Créer un repository GitHub

1. Connectez-vous à [GitHub](https://github.com)
2. Cliquez sur le bouton "+" en haut à droite
3. Sélectionnez "New repository"
4. Remplissez les informations :
   - **Repository name** : `budget-simulator` (ou le nom de votre choix)
   - **Description** : "Simulateur interactif de gestion de budget sur 3 mois"
   - **Public** ou **Private** : selon votre préférence
   - ✅ Cochez "Add a README file" (facultatif, vous en avez déjà un)
   - **License** : MIT (facultatif, vous en avez déjà un)
5. Cliquez sur "Create repository"

## 🚀 Étape 2 : Uploader vos fichiers

### Option A : Via l'interface web de GitHub (Plus simple)

1. Sur la page de votre nouveau repository, cliquez sur "Add file" > "Upload files"
2. Glissez-déposez tous les fichiers et dossiers de votre projet :
   - `index.html`
   - `README.md`
   - `LICENSE`
   - `.gitignore`
   - `CONTRIBUTING.md`
   - Dossier `css/` avec `style.css`
   - Dossier `js/` avec tous les fichiers JavaScript
   - Dossier `assets/` (si vous en avez)
3. Ajoutez un message de commit : "Initial commit - Budget simulator"
4. Cliquez sur "Commit changes"

### Option B : Via Git en ligne de commande (Plus professionnel)

```bash
# 1. Naviguez vers le dossier de votre projet
cd /chemin/vers/budget-simulator

# 2. Initialisez Git (si ce n'est pas déjà fait)
git init

# 3. Ajoutez tous les fichiers
git add .

# 4. Faites votre premier commit
git commit -m "Initial commit - Budget simulator"

# 5. Connectez votre repository local au repository GitHub
# Remplacez 'votre-username' par votre nom d'utilisateur GitHub
git remote add origin https://github.com/votre-username/budget-simulator.git

# 6. Définissez la branche principale
git branch -M main

# 7. Poussez vos fichiers vers GitHub
git push -u origin main
```

## 🌐 Étape 3 : Activer GitHub Pages

GitHub Pages permet d'héberger gratuitement votre site web.

1. Sur votre repository, cliquez sur **"Settings"** (⚙️)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous "Source" :
   - **Branch** : Sélectionnez `main`
   - **Folder** : Sélectionnez `/ (root)`
4. Cliquez sur **"Save"**
5. Attendez quelques minutes (généralement 1-5 minutes)
6. Rafraîchissez la page

Vous verrez un message : 
> ✅ Your site is live at `https://votre-username.github.io/budget-simulator/`

## 🎉 Étape 4 : Testez votre site

1. Cliquez sur l'URL fournie par GitHub Pages
2. Testez toutes les fonctionnalités :
   - Validation de l'email
   - Choix des options pour chaque mois
   - Calculs budgétaires
   - Navigation entre les mois
   - Résumés et messages

## 🔧 Mises à jour futures

### Via l'interface web :
1. Allez sur votre repository
2. Naviguez vers le fichier à modifier
3. Cliquez sur l'icône crayon ✏️ pour éditer
4. Faites vos modifications
5. Ajoutez un message de commit décrivant vos changements
6. Cliquez sur "Commit changes"
7. GitHub Pages mettra automatiquement à jour votre site (1-5 minutes)

### Via Git en ligne de commande :
```bash
# 1. Faites vos modifications dans les fichiers

# 2. Ajoutez les fichiers modifiés
git add .

# 3. Committez avec un message descriptif
git commit -m "Fix: correction du calcul du crédit"

# 4. Poussez vers GitHub
git push origin main
```

## 📱 Partager votre simulateur

Une fois déployé, vous pouvez partager l'URL avec :
- Vos étudiants
- Vos collègues enseignants
- Sur les réseaux sociaux
- Dans vos supports de cours

L'URL sera toujours :
```
https://votre-username.github.io/budget-simulator/
```

## 🔒 Configuration du domaine personnalisé (Optionnel)

Si vous avez un domaine personnalisé (ex: budget.istlm.org) :

1. Dans Settings > Pages
2. Sous "Custom domain", entrez votre domaine
3. Cliquez sur "Save"
4. Ajoutez les enregistrements DNS requis chez votre hébergeur

GitHub fournira des instructions détaillées pour la configuration DNS.

## 🐛 Résolution de problèmes

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est bien activé
- Assurez-vous que la branche `main` est sélectionnée
- Attendez 5-10 minutes après activation
- Videz le cache de votre navigateur (Ctrl+F5)

### Les CSS/JS ne se chargent pas
- Vérifiez les chemins dans `index.html`
- Les chemins doivent être relatifs : `css/style.css` et non `/css/style.css`
- Vérifiez la console du navigateur pour les erreurs (F12)

### Erreur 404
- Vérifiez que le fichier `index.html` est bien à la racine
- Assurez-vous d'avoir poussé tous les fichiers vers GitHub

## 📊 Statistiques (Optionnel)

Pour suivre l'utilisation de votre simulateur :
1. Créez un compte [Google Analytics](https://analytics.google.com)
2. Ajoutez le code de suivi dans `index.html` avant `</head>`
3. Vous pourrez voir le nombre de visiteurs, pages vues, etc.

## ✅ Checklist de déploiement

- [ ] Repository créé sur GitHub
- [ ] Tous les fichiers uploadés
- [ ] GitHub Pages activé
- [ ] Site accessible via l'URL GitHub Pages
- [ ] Toutes les fonctionnalités testées
- [ ] Aucune erreur dans la console
- [ ] Design responsive vérifié
- [ ] README.md à jour avec la bonne URL

## 🎓 Pour aller plus loin

- Ajoutez un fichier `CHANGELOG.md` pour suivre les versions
- Créez des issues pour planifier les améliorations
- Invitez des collaborateurs pour travailler ensemble
- Utilisez les "Releases" pour marquer les versions importantes

---

**Besoin d'aide ?**
- Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)
- Ouvrez une issue sur le repository
- Contactez l'équipe technique de l'ISTLM

Bon déploiement ! 🚀
