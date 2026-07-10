# Icônes de l'application

L'application utilise des icônes au format suivant :

| Plateforme | Fichier requis          | Dimensions recommandées      |
|------------|-------------------------|------------------------------|
| Windows    | `icon.ico`              | 256x256 (contient plusieurs tailles) |
| macOS      | `icon.icns`             | 512x512 @2x                  |
| Linux      | `icon.png`              | 512x512                      |

## Comment générer les icônes (méthode recommandée)

### Option 1 : Utiliser electron-icon-builder (le plus simple)

```bash
npm install -g electron-icon-builder

electron-icon-builder --input=icon.png --output=assets/icons
```

Placez d'abord une belle image carrée `icon.png` (minimum 512x512) dans le dossier `assets/`.

### Option 2 : Manuellement avec ImageMagick ou GIMP

1. Créez une image 1024x1024 px (fond blanc ou transparent + logo)
2. Exportez :
   - `icon.ico` (Windows) → utilisez https://convertico.com ou GIMP
   - `icon.icns` (macOS) → utilisez https://cloudconvert.com ou iconutil
   - `icon.png` (Linux) → 512x512

### Option 3 : Outils en ligne gratuits

- https://icon.kitchen
- https://appicon.co
- https://makeappicon.com

## Logo actuel (provisoire)

Le logo actuel de l'application est une simple icône Font Awesome (`fa-square-root-variable`) dans l'interface.

Pour une vraie identité visuelle, il est recommandé de créer :
- Un logo avec les initiales "MS" ou "Maths-Sciences"
- Couleurs : Indigo (#6366f1) + Teal (#14b8a6) + fond sombre

## Fichiers attendus

```
assets/icons/
├── icon.ico          ← Windows (obligatoire pour l'installateur)
├── icon.icns         ← macOS (optionnel pour l'instant)
├── icon.png          ← Linux + fallback
└── README.md
```

---

**Note** : Tant que `icon.ico` n'existe pas, l'application utilise l'icône par défaut d'Electron.
