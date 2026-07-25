# Kasa - Dashboard d'agence avec React Router

Application de base pour le cours React Router.

## Description

Ceci est l'application de départ pour apprendre React Router. Tous les composants d'interface et les pages sont déjà créés et stylisés pour l'agence Kasa. Votre objectif est de vous concentrer uniquement sur l'apprentissage et l'implémentation de React Router.

**Votre objectif** : Transformer cette application en Single Page Application (SPA) en utilisant React Router, sans avoir à vous soucier de la création des composants d'interface.

## Prérequis

- Node.js (version 18 ou supérieure)
- npm

## Installation

```bash
# Installer les dépendances
npm install
```

## Démarrage

```bash
# Démarrer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run preview` : Prévisualise le build de production
- `npm run lint` : Vérifie le code avec ESLint

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header/         # Navigation principale (utilise <a> pour l'instant)
│   ├── ProjectCard/    # Carte d'affichage d'un projet
│   └── EmployeeCard/   # Carte d'affichage d'un employé
├── data/               # Données mockées
│   ├── employees.js    # 10 employés avec détails complets
│   └── projects.js     # 6 projets avec statuts et progression
├── pages/              # Pages de l'application
│   ├── Home/           # Dashboard principal
│   ├── Projects/       # Liste de tous les projets
│   ├── Employees/      # Liste de tous les employés
│   ├── EmployeeDetail/ # Détail d'un employé (affiche l'employé id=1 pour l'instant)
│   ├── About/          # Page à propos
│   └── Error/          # Page 404
├── main.jsx            # Point d'entrée de l'application
└── index.css           # Styles globaux
```

## Composants disponibles

### Pages

Toutes les pages sont déjà créées avec leurs styles :

- **Home** (`/pages/Home`) : Dashboard affichant un aperçu des projets récents et de l'équipe Kasa
- **Projects** (`/pages/Projects`) : Liste complète des projets Kasa
- **Employees** (`/pages/Employees`) : Liste complète des employés de l'agence
- **EmployeeDetail** (`/pages/EmployeeDetail`) : Détail d'un employé avec biographie, contact et compétences
- **About** (`/pages/About`) : Page à propos de l'agence Kasa
- **Error** (`/pages/Error`) : Page 404 pour les routes inexistantes

### Composants réutilisables

- **Header** : Barre de navigation avec liens Dashboard, Projets, Employés (utilise `<a>` pour l'instant)
- **ProjectCard** : Carte affichant un projet (nom, statut, progression, équipe)
- **EmployeeCard** : Carte affichant un employé (avatar, nom, poste, département)

### Données

- **employeesData** : Tableau de 10 employés avec nom, poste, département, email, téléphone, avatar, biographie et compétences
- **projectsData** : Tableau de 6 projets avec statut (Terminé, En cours, Planifié), progression, équipe et dates
- **getEmployeeById(id)** : Fonction utilitaire pour récupérer un employé par son ID
- **getProjectsByStatus(status)** : Fonction utilitaire pour filtrer les projets par statut

## Technologies utilisées

- **React 19.2.0** : Bibliothèque UI
- **Vite 7.2.4** : Build tool et dev server

## État actuel

L'application affiche le Header et la page Home. Les liens de navigation dans le Header utilisent des balises `<a>` qui rechargent la page entière. Toutes les autres pages existent mais ne sont pas accessibles car React Router n'est pas encore configuré.

**Important** : Les composants sont prêts mais ne sont pas encore connectés par le routing. C'est ce que vous allez apprendre à faire !

## Ce que vous allez apprendre

### Chapitre 1 : Découvrez les SPA et configurez React Router

1. **Installer React Router**
   ```bash
   npm install react-router-dom
   ```

2. **Configurer le routing de base**
   - Utiliser `BrowserRouter`, `Routes`, et `Route`
   - Créer des routes pour Home, Projects, Employees, About
   - Remplacer les `<a>` par des `<Link>` dans le Header
   - Gérer les erreurs 404 avec `path="*"`

3. **Résultat attendu**
   - Navigation entre les pages sans rechargement
   - URL qui change en fonction de la page affichée
   - Page 404 fonctionnelle pour les routes inexistantes

### Chapitre 2 : Navigation et routes dynamiques

1. **Routes avec paramètres**
   - Route dynamique `/employees/:id`
   - Hook `useParams()` pour récupérer l'ID
   - Affichage du détail de l'employé correspondant

2. **Navigation programmatique**
   - Hook `useNavigate()` pour la navigation par code
   - Redirection après actions utilisateur

### Chapitre 3 : Routes imbriquées et layouts

1. **Routes imbriquées**
   - Comprendre le concept d'`Outlet`
   - Organiser les routes hiérarchiquement

2. **Layout partagé**
   - Créer un Layout avec Header commun
   - Utiliser `Outlet` pour le contenu dynamique

## Points d'attention

### Pour le Chapitre 1

Dans le `Header`, vous devrez remplacer :
```jsx
<a href="/" className="nav-link">Dashboard</a>
```

Par :
```jsx
<Link to="/" className="nav-link">Dashboard</Link>
```

### Pour le Chapitre 2

Dans `EmployeeDetail`, vous devrez remplacer :
```jsx
const id = 1
```

Par :
```jsx
const { id } = useParams()
```

---

*Application de base pour le cours OpenClassrooms - React Router*
