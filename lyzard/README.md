# 🦎 Lyzard.ai — Frontend Web Application (React + Vite)

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Aesthetics-Premium-darkgreen?style=for-the-badge" alt="Premium Design" />
</p>

Ce répertoire contient l'application frontend de **Lyzard.ai**, une plateforme SaaS moderne d'intelligence artificielle permettant de concevoir et d'exporter des sites internet et des landing pages haut de gamme en moins de 30 secondes à partir d'un simple prompt textuel (y compris en Darija).

Le frontend est conçu comme une **Single Page Application (SPA)** ultra-rapide et immersive, combinant des animations complexes avec une interface d'édition en temps réel (split-screen) pour offrir une expérience utilisateur exceptionnelle.

---

## ✨ Fonctionnalités Clés du Frontend

- **Landing Page Premium & Responsive** : Section Hero captivante, carrousels de fonctionnalités interactive, grilles maçonnées (`MasonryGrid`), grilles de services, et section de tarification dynamique.
- **Dashboard V2 (Workspace Complet)** :
  - **Interface Split-Screen** : Un espace de travail divisé affichant l'historique des requêtes/chat et l'aperçu du site généré en temps réel.
  - **Éditeur interactif** : Chat interactif permettant de soumettre des modifications et d'affiner le site section par section grâce à l'IA.
  - **Bac à sable (Sandbox Iframe)** : Rendu sécurisé et isolé du code HTML/CSS généré en temps réel.
  - **Panneau de Configuration** : Export direct sous format ZIP, gestion des versions antérieures avec historique de restauration (Rollback) et configuration des paramètres du projet.
- **Système de Paiement Intégré (PaymentModal)** : Un parcours d'achat moderne et sécurisé, prenant en charge les offres **Free**, **Pro** et **Pro Max** avec choix de facturation mensuelle ou annuelle.
- **Gestion Multilingue Native** : Système de traduction performant (Français et Anglais) géré via un contexte React persistant (`LanguageContext` stocké en local).
- **Effets Visuels Avancés** : Intégration fluide de micro-animations (Framer Motion, Reveal, Sparkles), de décors d'arrière-plan interactifs, d'animations de particules (tsParticles) et de célébrations visuelles (Canvas Confetti).

---

## 🛠️ Stack Technique & Dépendances

Le projet s'appuie sur un écosystème moderne de pointe :

### Coeur du Projet
* **React 19.2** — Utilisation des dernières API de React pour des performances optimales.
* **Vite 8.0** — Serveur de développement instantané et compilation ultra-rapide.
* **React Router DOM v7** — Gestion fluide de l'authentification et des routes applicatives.

### Interface & Graphisme
* **Tailwind CSS v4 & PostCSS** — Conception moderne basée sur des variables CSS de nouvelle génération et des utilitaires personnalisés.
* **Framer Motion 12 & Motion** — Micro-interactions, transitions de pages et animations physiques avancées.
* **Lucide React** — Pack d'icônes vectorielles personnalisables de haute qualité.
* **tsParticles (slim)** — Arrière-plans interactifs avec effets de constellation/particules.
* **Canvas Confetti** — Effet festif lors du succès d'une génération ou d'un paiement.
* **Radix UI Slot** — Composants utilitaires pour l'accessibilité et la réutilisation de styles.

### Services & API
* **Supabase Client (@supabase/supabase-js)** — Authentification sécurisée des utilisateurs (Google Auth / Email + Password), persistance des sessions et gestion des jetons d'accès.
* **API Client Personnalisé (`src/lib/api.js`)** — Encapsule toutes les requêtes vers le serveur Laravel 11 avec gestion automatique des en-têtes d'autorisation (Bearer JWT) et un délai d'attente (timeout) prolongé de 5 minutes pour les générations complexes par IA.

---

## 📂 Architecture des Dossiers

L'application est structurée de manière modulaire :

```
lyzard/
├── public/                 # Assets statiques (logos, icônes)
├── src/
│   ├── assets/             # Images, illustrations et fichiers multimédias
│   ├── components/         # Composants réutilisables de l'application
│   │   ├── auth/           # Formulaires de connexion, inscription et réinitialisation
│   │   │   ├── SignInCard.tsx
│   │   │   ├── SignUp.tsx
│   │   │   └── ForgotPassword.tsx
│   │   ├── dashboard/      # Structure principale de l'espace de travail
│   │   │   └── DashboardV2.jsx  # Le coeur de l'interface d'édition et chat IA
│   │   ├── landing/        # Sections de la page d'accueil de Lyzard
│   │   │   ├── Hero.jsx, Navbar.jsx, Footer.jsx
│   │   │   ├── CardsCarousel.jsx, ServicesSlider.jsx
│   │   │   ├── Pricing.jsx, WhySection.jsx, WhoIsItFor.jsx
│   │   │   └── ConnectWithUs.jsx
│   │   └── ui/             # Composants atomiques d'interface premium
│   │       ├── Card.jsx, button.tsx, textarea.tsx
│   │       ├── PaymentModal.jsx  # Fenêtre modale d'achat et validation de cartes
│   │       ├── Sparkles.jsx, TimelineAnimation.jsx
│   │       └── VerticalCutReveal.jsx  # Animations typographiques premium
│   ├── lib/                # Logique métier, utilitaires et configurations
│   │   ├── api.js          # Client HTTP fetch configuré pour le backend Laravel
│   │   ├── supabase.js     # Initialisation du client Supabase
│   │   ├── LanguageContext.jsx # Contexte React pour le bilinguisme FR/EN
│   │   ├── translations.js # Dictionnaire de traduction clé-valeur
│   │   └── utils.js        # Utilitaires CSS et helpers Tailwind (clsx/tailwind-merge)
│   ├── pages/              # Vues complètes liées au routeur React Router
│   │   ├── Login.jsx, Signup.jsx, ForgotPassword.jsx
│   │   ├── Dashboard.jsx   # Page de dashboard protégée par authentification
│   │   ├── Privacy.jsx     # Politique de confidentialité
│   │   └── Terms.jsx       # Conditions Générales d'Utilisation (CGU)
│   ├── App.jsx             # Point d'entrée de la landing page principale
│   ├── App.css             # Styles globaux spécifiques
│   ├── index.css           # Thèmes, directives Tailwind v4 et variables CSS
│   └── main.jsx            # Point de montage de l'application & gestion globale de l'Auth
├── .env                    # Fichier de variables d'environnement locales
├── tailwind.config.js      # Configuration optionnelle pour Tailwind
├── vite.config.js          # Configuration du bundler Vite
└── package.json            # Scripts de build et dépendances npm
```

---

## 🔑 Variables d'Environnement

Pour fonctionner correctement, l'application requiert un fichier `.env` à la racine du dossier `lyzard/` :

```env
# URL de votre projet Supabase (à récupérer sur votre console Supabase)
VITE_SUPABASE_URL=https://votre-projet-id.supabase.co

# Clé publique Supabase (Anon Key) autorisant les requêtes sécurisées par RLS
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI...

# URL de l'API Laravel locale ou distante
VITE_API_URL=http://localhost:8000/api
```

---

## 🚀 Lancement en Développement

Suivez ces étapes pour démarrer l'application sur votre machine locale :

### 1. Prérequis
Assurez-vous d'avoir installé **Node.js** (v18+) et **npm** (v9+).

### 2. Installation des dépendances
Positionnez-vous dans le répertoire du frontend et installez les paquets :
```bash
cd lyzard
npm install
```

### 3. Lancement du serveur local
Démarrez le serveur de développement Vite :
```bash
npm run dev
```
L'application sera accessible par défaut à l'adresse suivante : **[http://localhost:5173](http://localhost:5173)**.

### 4. Analyse de code et Linting
Pour exécuter les outils de vérification et de formatage de code :
```bash
npm run lint
```

### 5. Compilation pour la production
Pour générer les fichiers de production optimisés dans le dossier `/dist` :
```bash
npm run build
```

---

## 🔒 Intégration de l'Authentification

Le frontend gère l'authentification de manière transparente via **Supabase Auth** dans [main.jsx](file:///c:/Users/hjklm%C3%B9/Downloads/LAYZARD/LAYZARD/lyzard/src/main.jsx) :
1. **Validation Globale (AuthHandler)** : Un wrapper React écoute activement les changements d'état (`onAuthStateChange`).
2. **Redirection Automatique** : 
   - Un utilisateur connecté tentant d'accéder à la page d'accueil `/`, `/login` ou `/signup` est immédiatement redirigé vers `/dashboard`.
   - Un utilisateur non connecté tentant d'accéder au `/dashboard` est redirigé vers `/login`.
3. **Synchronisation API** : Lors de chaque reconnexion ou session valide, la méthode [apiAuth.sync()](file:///c:/Users/hjklm%C3%B9/Downloads/LAYZARD/LAYZARD/lyzard/src/lib/api.js#L56) est appelée en tâche de fond pour s'assurer que le profil de l'utilisateur et ses crédits sont à jour dans la base de données Laravel.

---

## 📡 Connexions aux Endpoints de l'API Laravel

Toutes les requêtes vers le serveur s'effectuent via [src/lib/api.js](file:///c:/Users/hjklm%C3%B9/Downloads/LAYZARD/LAYZARD/lyzard/src/lib/api.js) :

- **Profil & Session** :
  - `POST /v1/auth/sync` : Synchronise l'utilisateur Supabase avec la base locale.
  - `GET /v1/auth/me` : Récupère les données d'identité du backend.
- **Gestion des Projets** :
  - `GET /v1/projects` : Liste les projets de l'utilisateur.
  - `POST /v1/projects` : Crée un nouveau projet.
  - `PUT /v1/projects/{id}` : Modifie le projet.
  - `DELETE /v1/projects/{id}` : Supprime un projet.
- **Générateur IA Claude 3.5 Sonnet** :
  - `POST /v1/generate` : Première génération d'une page HTML/CSS à partir d'un prompt textuel.
  - `POST /v1/iterate` : Itérations intelligentes via le chat IA (envoie les modifications souhaitées sur une version existante).
  - `POST /v1/code-generate` / `POST /v1/code-iterate` : Génération complète de page web autonome.
- **Crédits & Abonnements** :
  - `GET /v1/credits` : Récupère le solde de crédits de l'utilisateur.
  - `POST /v1/subscription/purchase` : Initie un changement d'abonnement (Free/Pro/Pro Max) via le `PaymentModal`.

---

## 🎨 Chartes et Design Premium

L'application intègre un design haut de gamme avec une thématique par défaut sombre renforcée de verre acrylique (glassmorphism) :
- **Police d'écriture** : Polices modernes et épurées définies globalement dans `index.css`.
- **Thèmes de couleurs HSL** : Palettes harmonieuses de dégradés violets, de reflets néons et d'effets chatoyants.
- **Mode Sombre & Lumineux** : Conçu pour s'adapter à la perfection sans perdre de sa superbe visuelle.
- **Micro-interactions** : Le `button.tsx` et les cartes s'animent doucement au survol, stimulant l'action des utilisateurs.

---

<p align="center">
  <strong>🦎 Lyzard.ai Frontend</strong> — Conçu avec passion pour offrir une expérience web magique et instantanée.
</p>
