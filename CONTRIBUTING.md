# Guide de Contribution

Merci de votre intérêt pour contribuer au projet Budget & Vie ! 🎉

## Comment contribuer

### Signaler un bug 🐛

Si vous trouvez un bug, veuillez créer une issue avec :
- Une description claire du problème
- Les étapes pour reproduire le bug
- Le comportement attendu vs le comportement actuel
- Des captures d'écran si pertinent
- Votre navigateur et version

### Proposer une amélioration 💡

Pour proposer une nouvelle fonctionnalité :
1. Vérifiez qu'elle n'existe pas déjà dans les issues
2. Créez une nouvelle issue avec le tag "enhancement"
3. Décrivez clairement la fonctionnalité et son intérêt pédagogique

### Soumettre des modifications 🔧

1. **Forkez le projet**
   ```bash
   git clone https://github.com/votre-username/budget-simulator.git
   ```

2. **Créez une branche**
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

3. **Faites vos modifications**
   - Suivez le style de code existant
   - Commentez votre code si nécessaire
   - Testez sur différents navigateurs

4. **Committez vos changements**
   ```bash
   git commit -m "Add: description claire de la modification"
   ```

5. **Poussez vers votre fork**
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```

6. **Ouvrez une Pull Request**
   - Décrivez vos changements
   - Référencez les issues liées
   - Ajoutez des captures d'écran si pertinent

## Standards de code

### HTML
- Utilisez l'indentation à 4 espaces
- Utilisez des balises sémantiques
- Commentez les sections complexes

### CSS
- Organisez le CSS par composants
- Utilisez des noms de classes descriptifs
- Évitez les !important sauf nécessité absolue
- Maintenez la compatibilité responsive

### JavaScript
- Utilisez camelCase pour les variables et fonctions
- Commentez la logique complexe
- Évitez les variables globales excessives
- Testez vos fonctions

## Tests

Avant de soumettre votre PR, vérifiez :
- [ ] Le simulateur fonctionne sur Chrome, Firefox, Safari
- [ ] Le design est responsive (mobile, tablette, desktop)
- [ ] Aucune erreur dans la console
- [ ] Les calculs financiers sont corrects
- [ ] L'expérience utilisateur est fluide

## Structure du projet

```
budget-simulator/
├── index.html          # Point d'entrée
├── css/
│   └── style.css      # Tous les styles
├── js/
│   ├── game.js        # État du jeu et logique principale
│   ├── months.js      # Templates HTML des mois
│   └── choices.js     # Gestion des choix utilisateur
└── assets/            # Images et ressources
```

## Bonnes pratiques

### Accessibilité
- Utilisez des labels appropriés
- Assurez un bon contraste de couleurs
- Testez la navigation au clavier
- Ajoutez des attributs ARIA si nécessaire

### Performance
- Optimisez les images
- Minimisez les reflows DOM
- Évitez les animations lourdes
- Gardez le code léger

### Pédagogie
- Les modifications doivent conserver l'objectif pédagogique
- Les messages doivent être clairs et bienveillants
- Les montants doivent rester réalistes pour la Belgique

## Questions ?

N'hésitez pas à :
- Ouvrir une issue pour discussion
- Contacter les mainteneurs
- Consulter le README pour plus d'informations

Merci pour votre contribution ! 🙏
