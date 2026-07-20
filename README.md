# 📚 Maths & Sciences — Application Desktop

Application de ressources pédagogiques pour les élèves du **Lycée Professionnel Gustave Eiffel** (Varennes-sur-Seine).

Créée par **M. Boubacar KANDE** — Enseignant en Maths & Sciences.

---

## ✨ Ce que contient l’application

- **23 formations** (3ème Prépa Métiers → BTS)
- **280+ ressources** (cours, TD, fiches, QCM, TP)
- Filtrage par niveau et filière + recherche globale
- Double domaine **Mathématiques** / **Sciences** pour chaque classe
- Ressource interactive majeure : **Induction Électromagnétique** (Terminale MELEC)
- Mode Enseignant intégré (ajout / export / import de ressources)
- 100 % utilisable hors-ligne une fois installée

---

## 🚀 Lancer l’application (en développement)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer l’application
npm start
```

L’application s’ouvre dans une vraie fenêtre native (Electron).

---

## 📦 Créer l’installateur pour les élèves (Windows)

```bash
# Générer l’installateur + version portable
npm run dist:win
```

Les fichiers seront créés dans le dossier `dist/` :
- `Maths-Sciences-Lycee-1.1.0-x64.exe` → Installeur classique
- `Maths-Sciences-Lycee-1.1.0-Portable.exe` → Version sans installation

> ⚠️ **Avant de distribuer** : placez une vraie icône dans `assets/icons/icon.ico` (voir `assets/icons/README.md`)

---

## 🗂️ Organisation du projet (qualité professionnelle)

```
Maths-Sciences-App/
├── data/
│   └── formations.json          ← Le contenu éditable par l’enseignant
├── electron/
│   ├── main.js                  ← Processus principal (menus natifs, IPC)
│   └── preload.js               ← Pont sécurisé
├── assets/
│   └── icons/                   ← Icônes de l’application
├── scripts/                     ← Scripts utilitaires
├── docs/                        ← Documentation technique
├── GUIDE-ENSEIGNANT.md          ← Guide complet pour mettre à jour le contenu
├── electron-builder.yml         ← Configuration de l’installateur
└── index.html                   ← Interface principale (UI moderne)
```

---

## 🔒 Sécurité et Architecture

L'application a été conçue en respectant les bonnes pratiques de sécurité d'Electron.js :
- **Content Security Policy (CSP)** stricte : Limite les sources autorisées pour les scripts, styles et iframes, empêchant l'exécution de code malveillant (XSS).
- **Isolation IPC sécurisée** : Utilisation du `contextBridge` (`electron/preload.js`) sans exposer les modules Node.js critiques au processus de rendu (`nodeIntegration: false`, `contextIsolation: true`).
- **Validation stricte** :
  - L'import de données vérifie la taille du fichier (maximum 50 Mo) avant chargement.
  - Le contenu est validé (obligation de fournir un tableau JSON) pour éviter la corruption de données.
  - Résolution et vérification strictes des chemins de fichiers.
- **Minimisation de la surface d'attaque** : Suppression de toutes les dépendances inutilisées du projet.

---

## ✏️ Comment modifier le contenu (pour l’enseignant)

**C’est très simple :**

1. Ouvrez le fichier `data/formations.json`
2. Ajoutez / modifiez / supprimez des classes ou des ressources
3. Relancez l’application (`npm start`)

Tout est documenté dans **[GUIDE-ENSEIGNANT.md](GUIDE-ENSEIGNANT.md)**.

Un **Mode Enseignant** est aussi disponible directement dans l’application (bouton vert en bas à droite ou menu `Enseignant → Panneau d’administration`).

---

## 🛠️ Commandes utiles

| Commande                    | Description                              |
|----------------------------|------------------------------------------|
| `npm start`                | Lance l’application                      |
| `npm run dist:win`         | Crée l’installateur Windows (.exe)       |
| `npm run dist:win:portable`| Crée uniquement la version portable      |
| `npm run format`           | Formate le code (Prettier)               |

---

## 📋 Prochaines évolutions prévues

- Édition complète des ressources depuis le panneau enseignant (sans toucher au JSON)
- Système de mise à jour automatique (electron-updater)
- Thème sombre
- Statistiques d’utilisation des ressources
- Version web (PWA) en parallèle

---

## 📞 Contact

**M. Boubacar KANDE**  
boubacar.kande@ac-creteil.fr  
Lycée Professionnel Gustave Eiffel — Varennes-sur-Seine

---

## 📜 Licence

MIT — Voir le fichier [LICENSE](LICENSE)

---

**Fait avec ❤️ pour les élèves du lycée professionnel.**
