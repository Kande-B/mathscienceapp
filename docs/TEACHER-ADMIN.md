# Panneau d'administration Enseignant (Mode Admin)

Ce document décrit le fonctionnement du futur panneau d'administration intégré.

## Objectif

Permettre à l'enseignant de :
- Ajouter / modifier / supprimer des ressources **sans toucher au code**
- Exporter le fichier `formations.json` mis à jour
- Importer une sauvegarde précédente
- Prévisualiser les changements en temps réel

## État actuel

Le panneau est en cours de développement. Il est déjà déclenchable via :

- Menu → Enseignant → Panneau d'administration
- Raccourci clavier `Ctrl+Shift+A` (ou `Cmd+Shift+A` sur Mac)
- Depuis le code : `window.electronAPI?.openTeacherAdmin()`

## Fonctionnalités prévues (v1.2+)

- Tableau éditable de toutes les ressources
- Ajout rapide d'une nouvelle ressource (formulaire)
- Recherche et filtrage dans le panneau
- Export / Import direct
- Mode "Simulation" (test des modifications sans écrire sur le disque)
- Historique des modifications (localStorage)

## Pour les développeurs

Le panneau sera implémenté dans `src/renderer/admin.js` et injecté dynamiquement dans l'index.html quand l'API Electron est disponible.

---

**Priorité haute** : Ce panneau est l'outil le plus important pour la maintenance à long terme par l'enseignant.
