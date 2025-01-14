# Modern Web

Modern Web est un projet complet de création de sites web comprenant un **front-end** (React) et un **back-end** (Node.js). Ce site permet de présenter mes services, mes réalisations, mes tarifs, et inclut un blog pour les dernières actualités, ainsi qu'un formulaire de contact.

---

## Structure du projet
**Backend**
├── backend/       # Code serveur (Node.js, Express)
**Frontend**
└── frontend/      # Application front-end (React, Vite)

---

## Prérequis

- [Node.js](https://nodejs.org) (Version recommandée : 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Instructions pour démarrer le projet

### 1. Lancer le front-end
Accédez au dossier `frontend`, installez les dépendances, puis lancez le serveur de développement :

```bash
cd frontend
npm install
npm run dev
```

L’application sera disponible à cette adresse :
```bash
http://localhost:5173
```

### 2. Lancer le back-end

Accédez au dossier backend, installez les dépendances, puis démarrez le serveur :
```bash
cd backend
npm install
npm start
```

L’API sera accessible à cette adresse :
```bash
http://localhost:3001
```

---

## Technologies utilisées

**Frontend**
  - React : Framework JavaScript pour construire l’interface utilisateur.
  - Vite : Outil rapide pour le développement front-end.
  - SCSS : Préprocesseur pour des styles avancés.


**Backend**
  - Node.js : Environnement d’exécution JavaScript côté serveur.
  -	Express : Framework pour construire des APIs REST.
	- Cors : Middleware pour gérer les requêtes cross-origin.

---

## Fonctionnalités principales
	•	Navigation fluide entre les sections grâce à React Router.
	•	Blog intégré pour partager les dernières actualités.
	•	Tarifs dynamiques et affichage des réalisations.
	•	Formulaire de contact pour permettre aux utilisateurs de vous joindre facilement.
	•	Architecture modulaire pour séparer le front-end et le back-end.

---

## Scripts disponibles

Frontend
	•	npm run dev : Démarre le serveur de développement.
	•	npm run build : Construit l’application pour la production.
	•	npm run preview : Prévisualise l’application en production.

Backend
	•	npm start : Démarre le serveur en mode production.
	•	npm run dev : Démarre le serveur avec nodemon pour le rechargement automatique.

--- 

## Licence

Ce projet est sous licence MIT.