# ulrichDev — Portfolio

Portfolio personnel de **Kone Gbah Ulrich Paul David**, étudiant en Licence 3
(Génie Réseaux Logiciel) et développeur Front-End / Design Web.

🔗 Site : *(ajoute ici le lien une fois publié, ex. GitHub Pages)*

![Aperçu du portfolio](https://img.shields.io/badge/status-en%20d%C3%A9veloppement-6C5CE7)

## ✨ Aperçu

Un portfolio sombre et moderne (thème violet `#6C5CE7` → `#A29BFE`) présentant :

- **Hero** — présentation, photo, technologies utilisées
- **À propos** — qui je suis, statistiques
- **Compétences** — barres de progression animées, générées depuis un simple tableau JS
- **Projets** — cartes de projets (à compléter)
- **Designs** — galerie de créations graphiques (affiches, etc.)
- **Contact** — email, WhatsApp, réseaux sociaux

## 🛠️ Stack technique

- **HTML5** — structure sémantique
- **CSS3** (+ [Tailwind CSS](https://tailwindcss.com) via CDN pour les utilitaires de mise en page)
- **JavaScript vanilla** — aucune dépendance, aucun build
- Icônes réelles via [Devicon](https://devicon.dev)

Aucune installation n'est nécessaire : le site fonctionne avec de simples
fichiers statiques.

## 📁 Structure du projet

```
portfolio/
├── index.html          # Structure de la page
├── style.css            # Tous les styles (variables de couleurs en haut du fichier)
├── script.js             # Interactions (menu, animations, tableau des compétences)
├── cv/
│   └── CV.pdf            # CV téléchargeable depuis le bouton "Télécharger mon CV"
├── images/
│   ├── projets/           # Images des projets (section Projets)
│   └── designs/           # Affiches / créations (section Designs)
└── README.md
```

## 🚀 Lancer le projet en local

Aucun serveur n'est requis, mais Chrome bloque certains fichiers (polices,
Tailwind) si on ouvre `index.html` directement avec `file://`. Deux options :

**Option 1 — ouvrir directement**
Double-clique sur `index.html`.

**Option 2 — avec un petit serveur local (recommandé)**
```bash
# Avec Python (déjà installé sur la plupart des systèmes)
python3 -m http.server 8000

# Puis ouvrir http://localhost:8000 dans le navigateur
```

Avec l'extension **Live Server** de VS Code, un clic droit sur `index.html`
→ *Open with Live Server* fonctionne aussi très bien.

## ✏️ Personnaliser

- **Compétences** : modifie le tableau `SKILLS` tout en haut de `script.js`
  (nom, couleur, pourcentage).
- **Couleurs** : toutes les couleurs sont des variables CSS au début de
  `style.css` (`--bg`, `--card`, `--primary`, `--soft`, `--accent`).
- **Projets** : dans `index.html`, décommente les balises `<img>` marquées
  `<!-- IMAGE PROJET ICI -->` et remplace le texte des cartes.
- **Designs** : ajoute tes images dans `images/designs/` et décommente la
  balise `<img>` correspondante.

## 📬 Contact

- Email : ulrichkone124@gmail.com
- GitHub : [@ulrichkone124-dotcom](https://github.com/ulrichkone124-dotcom)
- WhatsApp : +225 07 61 00 59 48

---

*Fait avec ❤ par Kone Gbah Ulrich Paul David.*
