# Budget & Vie : 3 mois pour construire votre ménage

Un simulateur interactif de gestion de budget personnel sur 3 mois, conçu à des fins pédagogiques pour aider les étudiants à comprendre les principes de base de la gestion financière.

## 📋 Description

Ce simulateur permet aux utilisateurs de vivre une simulation budgétaire réaliste sur trois mois en Belgique. Le joueur incarne une personne isolée qui doit faire des choix concernant son logement, son transport, son alimentation et d'autres aspects de sa vie quotidienne tout en gérant ses finances.

## 🎯 Objectifs pédagogiques

- Comprendre le concept de revenu disponible
- Distinguer les dépenses fixes et variables
- Apprendre à anticiper les dépenses et à faire des arbitrages
- Comprendre l'impact des choix de vie sur le budget
- Découvrir les mécanismes d'épargne et de crédit
- Comparer un budget prévisionnel avec la réalité

## 🎮 Fonctionnalités

### Mois 1 - Septembre
- Statut : Au chômage après les études
- Choix du logement (parents, colocation, appartement)
- Impact du statut (co-habitant vs isolé) sur l'allocation chômage
- Gestion du déménagement si nécessaire
- Choix de transport, alimentation, loisirs, etc.

### Mois 2 - Octobre
- Obtention d'un emploi (1 800 €/mois)
- Remboursement automatique du crédit du mois 1 si nécessaire
- Choix de transport vers Charleroi (train vs voiture)
- Impact du transport sur la santé et les dépenses

### Mois 3 - Novembre
- Héritage d'une maison à Bruxelles
- Augmentation de salaire (2 000 €/mois)
- Choix : habiter la maison ou la louer
- Gestion avancée du budget

## 💡 Caractéristiques

- **Taux d'intérêt réalistes** :
  - Épargne : 2%
  - Crédit court terme : 15%
- **Suivi en temps réel** :
  - Compteurs d'épargne et de crédit
  - Tableaux budgétaires détaillés
  - Calcul automatique des soldes
- **Feedback pédagogique** :
  - Résumés mensuels
  - Conseils contextuels
  - Alertes sur les déficits
- **Interface intuitive** :
  - Design moderne et responsive
  - Badges visuels (Fixe/Variable)
  - Progression par étapes

## 🚀 Installation

### Option 1 : Téléchargement direct

1. Clonez ce repository :
```bash
git clone https://github.com/votre-username/budget-simulator.git
cd budget-simulator
```

2. Ouvrez `index.html` dans votre navigateur

### Option 2 : GitHub Pages

Le simulateur peut être hébergé directement sur GitHub Pages :

1. Allez dans Settings > Pages
2. Sélectionnez la branche `main` et le dossier `/root`
3. Votre site sera disponible à : `https://votre-username.github.io/budget-simulator/`

## 📁 Structure du projet

```
budget-simulator/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles CSS
├── js/
│   ├── game.js            # Logique principale du jeu
│   ├── months.js          # Templates des mois
│   └── choices.js         # Gestion des choix utilisateur
├── assets/                # (Optionnel) Images et ressources
└── README.md              # Documentation
```

## 🔧 Technologies utilisées

- **HTML5** : Structure du contenu
- **CSS3** : Design et animations
  - Flexbox & Grid
  - Transitions et animations
  - Design responsive
- **JavaScript (Vanilla)** : Logique applicative
  - Manipulation du DOM
  - Gestion d'état
  - Calculs financiers

## 📱 Responsive Design

Le simulateur est entièrement responsive et s'adapte aux différentes tailles d'écran :
- Desktop (> 768px)
- Tablette (768px - 1024px)
- Mobile (< 768px)

## 🎓 Utilisation pédagogique

### Pour les enseignants

Ce simulateur peut être utilisé dans le cadre de cours sur :
- Éducation financière
- Économie domestique
- Gestion de budget
- Mathématiques appliquées
- Sciences économiques et sociales

### Points de discussion

Après la simulation, discutez avec les étudiants de :
- L'importance d'un emploi stable
- L'impact des intérêts sur l'épargne et le crédit
- Les choix structurants (logement, transport)
- La distinction entre besoins et envies
- L'anticipation et la planification financière

## 🔒 Sécurité et confidentialité

- Validation de l'email @istlm.org requise
- Aucune donnée n'est envoyée à un serveur
- Toutes les données restent dans le navigateur
- Pas de cookies ni de tracking

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Améliorations futures possibles

- [ ] Sauvegarde locale des parties
- [ ] Comparaison avec d'autres joueurs (anonyme)
- [ ] Mode multijoueur/compétition
- [ ] Graphiques et statistiques avancés
- [ ] Plus de scénarios (mariage, enfants, etc.)
- [ ] Export des résultats en PDF
- [ ] Version multilingue (FR/NL/EN)
- [ ] Mode "budget prévisionnel vs réel"

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- Développé pour l'ISTLM (Institut Supérieur de Technologie Liège-Malines)
- Contact : prenom.nom@istlm.org

## 🙏 Remerciements

- Montants inspirés de la réalité belge (2024-2025)
- Taux d'intérêts indicatifs basés sur les moyennes du marché
- Design inspiré des meilleures pratiques UX/UI

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Contactez l'équipe pédagogique de l'ISTLM

---

**Note** : Les montants et situations présentés dans ce simulateur sont arrondis à des fins pédagogiques et peuvent ne pas refléter exactement la réalité de chaque situation individuelle.
