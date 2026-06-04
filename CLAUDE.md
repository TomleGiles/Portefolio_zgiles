# Portfolio Zoé Giles — CLAUDE.md

## Présentation du projet

Portfolio professionnel statique de **Zoé Giles**, étudiante BUT GEA GPRH (IUT Nancy-Charlemagne, Université de Lorraine).
Conçu pour présenter son stage de 8 semaines au sein du département RH de **Safran Engineering Services**, Hambourg, avril–juin 2026.

## Structure des fichiers

```
ZGiles/
├── index.html       # Page unique (SPA statique)
├── style.css        # Tous les styles (CSS custom, pas de framework)
├── main.js          # Scroll animations, nav mobile, smooth scroll
├── À PROPOS.txt     # Source de contenu (ne pas modifier)
└── CLAUDE.md        # Ce fichier
```

## Architecture

Site **one-page** entièrement statique — pas de build, pas de dépendances npm.  
Ouvrir `index.html` directement dans un navigateur.

### Sections (dans l'ordre)
| ID | Contenu |
|----|---------|
| `#about` | Présentation générale + 4 chiffres clés |
| `#missions` | 5 cartes de mission avec regard critique |
| `#competences` | Cours IUT + compétences personnelles + acquises |
| `#bilan` | Évaluation personnelle + 5 compétences BUT GPRH |
| `#contact` | Email, ville, formation |

## Design

- **Palette** : dark background `#0f0f11`, accent violet `#7c6af5`
- **Typographies** : Inter (UI) + Playfair Display (titres)
- **Responsive** : breakpoints à 768px et 600px
- **Animations** : IntersectionObserver sur les cartes (fade-in au scroll)
- **Aucune dépendance externe** sauf Google Fonts (2 familles)

## Modifier le contenu

Toutes les informations viennent du fichier `À PROPOS.txt`.  
Pour mettre à jour le portfolio, éditer directement les sections correspondantes dans `index.html`.

### Ajouter une mission
Copier un bloc `<article class="mission-card">` dans `#missions` et incrémenter `data-index`.

### Changer les couleurs
Les variables CSS sont centralisées en haut de `style.css` dans `:root { ... }`.

### Changer l'email de contact
Chercher `zoe.giles@etudiant.univ-lorraine.fr` dans `index.html` et remplacer.

## Déploiement

Site 100% statique — compatible avec :
- GitHub Pages (push du dossier sur une branche `gh-pages`)
- Netlify / Vercel (drag & drop du dossier)
- Hébergement FTP classique

Aucune configuration serveur requise.
