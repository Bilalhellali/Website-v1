# VoyageAlgérie - Site Web Agence de Voyage

Site web professionnel pour agence de voyage algérienne.
Stack : **React 19 + Vite + Tailwind CSS 4 + React Router + Framer Motion**

## 🚀 Démarrage rapide

```bash
npm install --legacy-peer-deps
npm run dev
```

## 📦 Build & Déploiement Netlify

```bash
npm run build
# Le dossier `dist/` est prêt pour Netlify
```

## ⚙️ Personnalisation

Tout se configure dans **`src/config/siteConfig.js`** :
- Nom de l'agence
- Coordonnées & réseaux sociaux
- Destinations & circuits
- Témoignages & FAQ
- Couleurs du thème

## 🌍 Langues supportées

- 🇫🇷 Français (défaut)
- 🇩🇿 Arabe (RTL)
- 🇬🇧 Anglais

Fichiers de traduction : `src/locales/`

## 📁 Structure

```
src/
├── config/
│   └── siteConfig.js     ← CONFIGURATION CENTRALISÉE
├── components/
│   ├── layout/           ← Navbar, Footer, Layout
│   ├── ui/               ← Composants réutilisables
│   └── sections/         ← Sections page d'accueil
├── pages/                ← Toutes les pages
├── locales/              ← Traductions FR/AR/EN
├── i18n.js               ← Config multilingue
└── main.jsx
```
