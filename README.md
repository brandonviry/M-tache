# M-tâche

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF.svg?logo=vite)
![License](https://img.shields.io/badge/license-No%20License-red.svg)

Une application web moderne et intuitive pour la gestion de vos tâches quotidiennes, développée avec React, TypeScript et Vite.

## 📋 Description

M-tâche est une application de gestion de tâches simple et efficace qui vous permet d'organiser votre travail quotidien. L'application offre une interface utilisateur claire et des fonctionnalités essentielles pour une productivité optimale.

## ✨ Fonctionnalités

### Fonctionnalités actuelles
- ➕ **Ajouter des tâches** - Créez facilement de nouvelles tâches
- ✏️ **Modifier l'intitulé** - Éditez vos tâches en cliquant sur l'icône de modification
- 🗑️ **Supprimer les tâches** - Supprimez les tâches terminées ou non désirées
- 💾 **Sauvegarde automatique** - Vos tâches sont automatiquement sauvegardées dans le navigateur

### Fonctionnalités à venir
- 🎨 **Personnalisation des couleurs** - Thèmes et couleurs personnalisables
- 🔤 **Choix de police** - Options de typographie
- 📝 **Sous-tâches** - Création de tâches hiérarchiques

## 🚀 Technologies utilisées

- **Frontend**: React 18.2.0
- **Langage**: TypeScript 5.4.2
- **Build Tool**: Vite 5.1.6
- **Linting**: ESLint
- **Stockage**: LocalStorage du navigateur

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou pnpm

### Étapes d'installation

1. Clonez le repository
```bash
git clone https://github.com/brandonviry/M-tache.git
cd M-tache
```

2. Installez les dépendances
```bash
# Avec npm
npm install

# Ou avec pnpm
pnpm install
```

3. Lancez l'application en mode développement
```bash
# Avec npm
npm run dev

# Ou avec pnpm
pnpm dev
```

4. Ouvrez votre navigateur à l'adresse `http://localhost:5173`

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run preview` - Prévisualise la version de production

## 🏗️ Structure du projet

```
M-tache/
├── src/
│   ├── ui/
│   │   └── components/
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   └── Button.css
│   │       ├── List/
│   │       │   ├── List.tsx
│   │       │   └── List.css
│   │       └── TaskList/
│   │           └── TaskList.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 💡 Utilisation

1. **Ajouter une tâche** : Cliquez sur le bouton "+" pour créer une nouvelle tâche
2. **Modifier une tâche** : Cliquez sur l'icône de modification (crayon) pour éditer le texte
3. **Supprimer une tâche** : Cliquez sur l'icône de suppression (croix) pour supprimer la tâche
4. **Sauvegarde** : Vos modifications sont automatiquement sauvegardées

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 👨‍💻 Auteur

**VIRY Brandon**

## 📄 Licence

Ce projet n'est sous aucune licence spécifique.

## 🐛 Signaler un bug

Si vous trouvez un bug, n'hésitez pas à ouvrir une issue sur le repository GitHub.

---

*Développé avec ❤️ par VIRY Brandon*
