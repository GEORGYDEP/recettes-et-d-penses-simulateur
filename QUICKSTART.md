# 🚀 Démarrage Rapide - Budget & Vie Simulator

## ⚡ Installation en 3 étapes

### 1️⃣ Téléchargez les fichiers
Téléchargez tous les fichiers de ce repository sur votre ordinateur.

### 2️⃣ Ouvrez le simulateur
Double-cliquez sur `index.html` - Le simulateur s'ouvre dans votre navigateur !

### 3️⃣ Commencez à jouer
Entrez une adresse email `@istlm.org` et commencez votre simulation budgétaire.

---

## 📁 Structure des fichiers

```
budget-simulator/
│
├── 📄 index.html              ← PAGE PRINCIPALE (ouvrir ce fichier)
│
├── 📁 css/
│   └── style.css              ← Tous les styles
│
├── 📁 js/
│   ├── game.js                ← Logique du jeu
│   ├── months.js              ← Contenu des 3 mois
│   └── choices.js             ← Gestion des choix
│
├── 📖 README.md               ← Documentation complète
├── 🚀 DEPLOYMENT.md           ← Guide GitHub Pages
├── 🤝 CONTRIBUTING.md         ← Guide de contribution
├── 📋 QUICKSTART.md           ← Ce fichier !
├── 📜 LICENSE                 ← Licence MIT
└── 🚫 .gitignore              ← Fichiers à ignorer
```

---

## 🎮 Comment jouer

### Mois 1 - Septembre
1. **Entrez votre email** `prenom.nom@istlm.org`
2. **Choisissez votre logement** (parents, colocation ou appartement)
3. **Sélectionnez vos dépenses** pour chaque catégorie
4. **Visualisez votre budget** dans le tableau
5. **Terminez le mois** et découvrez votre solde

### Mois 2 - Octobre
- 🎉 Vous obtenez un emploi (1 800 €/mois)
- Remboursez votre crédit si nécessaire
- Choisissez votre mode de transport vers Charleroi

### Mois 3 - Novembre
- 🏡 Vous héritez d'une maison à Bruxelles
- 💰 Augmentation de salaire (2 000 €/mois)
- Décidez : habiter ou louer la maison

---

## 💡 Astuces

### Pour un budget équilibré :
- ✅ Choisissez des dépenses adaptées à vos revenus
- ✅ Anticipez les remboursements de crédit
- ✅ L'épargne rapporte 2%, le crédit coûte 15% !
- ✅ Un emploi change tout au mois 2

### Pour une bonne expérience :
- 📱 Fonctionne sur mobile, tablette et ordinateur
- 🌐 Utilisez un navigateur récent (Chrome, Firefox, Safari, Edge)
- 🔄 Rechargez la page pour recommencer

---

## 🌐 Mettre en ligne sur GitHub

### Option Simple (sans Git)
1. Créez un compte sur [GitHub.com](https://github.com)
2. Créez un nouveau repository (bouton "+ New")
3. Uploadez tous vos fichiers via l'interface web
4. Activez GitHub Pages dans Settings > Pages
5. Votre site sera en ligne à : `https://votre-nom.github.io/budget-simulator/`

**👉 Voir [DEPLOYMENT.md](DEPLOYMENT.md) pour le guide détaillé**

---

## 🔧 Personnalisation

### Modifier les montants
Éditez `js/months.js` et cherchez les valeurs numériques :
```javascript
// Exemple : changer le salaire du mois 2
income: 1800,  // ← Changez cette valeur
```

### Modifier les couleurs
Éditez `css/style.css` et cherchez les couleurs :
```css
/* Exemple : changer la couleur principale */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                    /* ↑ Changez ces couleurs */
```

### Ajouter du contenu
Éditez `js/months.js` et modifiez le HTML dans les fonctions `loadMonth1()`, `loadMonth2()`, `loadMonth3()`

---

## ❓ Questions Fréquentes

### Q : Dois-je installer quelque chose ?
**R :** Non ! Juste un navigateur web moderne.

### Q : Mes données sont-elles sauvegardées ?
**R :** Non, tout reste dans votre navigateur. Rechargez = recommencer.

### Q : Puis-je modifier l'email requis ?
**R :** Oui, dans `js/game.js`, ligne 28 : modifiez `@istlm\.org`

### Q : Le simulateur fonctionne-t-il hors ligne ?
**R :** Oui ! Une fois téléchargé, aucune connexion internet n'est nécessaire.

### Q : Puis-je l'utiliser pour mes cours ?
**R :** Absolument ! C'est son but. Licence MIT = libre d'utilisation.

### Q : Comment signaler un bug ?
**R :** Ouvrez une "Issue" sur GitHub ou contactez-nous.

---

## 📞 Support

### Besoin d'aide ?
- 📖 Lisez le [README.md](README.md) complet
- 🚀 Consultez [DEPLOYMENT.md](DEPLOYMENT.md) pour GitHub
- 🐛 Signalez un bug via GitHub Issues
- 📧 Contactez : prenom.nom@istlm.org

### Contribuer
- 🤝 Voir [CONTRIBUTING.md](CONTRIBUTING.md)
- 🍴 Fork le projet sur GitHub
- ⭐ Donnez une étoile si vous aimez !

---

## 🎯 Prochaines étapes

1. ✅ Testez le simulateur localement
2. ✅ Lisez la documentation complète
3. ✅ Mettez-le en ligne sur GitHub Pages
4. ✅ Partagez avec vos étudiants
5. ✅ Collectez les retours
6. ✅ Améliorez et contribuez !

---

## 📊 Statistiques du Projet

- **Fichiers** : 8 fichiers (HTML, CSS, JS, MD)
- **Lignes de code** : ~2500 lignes
- **Mois simulés** : 3
- **Choix possibles** : 50+
- **Scénarios uniques** : 1000+

---

**Créé avec ❤️ pour l'éducation financière**

Bon simulateur ! 🎮💰

---

*Dernière mise à jour : Octobre 2025*
