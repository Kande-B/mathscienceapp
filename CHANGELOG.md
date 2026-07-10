# Changelog

Toutes les modifications notables de l'application Ressources Maths & Sciences.

## [1.1.0] - 2026-05-28

### Ajouté
- Structure professionnelle complète (src/, assets/, data/, electron/, scripts/, docs/)
- Fichier de données externe `data/formations.json` (séparation contenu / code)
- Configuration electron-builder pour création d'installateurs Windows (.exe)
- Preload.js sécurisé + IPC bridge (préparation fonctionnalités natives)
- Menu natif Electron (Fichier, Édition, Affichage, Aide, Enseignant)
- Fenêtre "À propos" professionnelle
- `.gitignore` complet pour projets Electron
- `GUIDE-ENSEIGNANT.md` détaillé pour mise à jour du contenu
- Icônes placeholder + instructions de génération

### Amélioré
- main.js refactorisé (meilleure gestion fenêtres, sécurité)
- README.md professionnel avec instructions de build et distribution
- Organisation du projet prête pour maintenance longue durée

## [1.0.0] - 2025-2026 (Version initiale)

- Application Electron de base
- Interface Tailwind moderne avec 23 formations
- Filtrage par niveau / filière + recherche globale
- Modale ressources par classe (Maths / Sciences)
- Ressource interactive Terminale MELEC (Induction électromagnétique)
- Formulaire de contact mailto
- 280+ ressources documentées

---

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/)
