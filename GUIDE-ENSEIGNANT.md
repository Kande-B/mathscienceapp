# Guide Enseignant — Mise à jour du contenu

Ce guide explique comment modifier l'application **sans être développeur**.

## 1. Où se trouve le contenu ?

Tout le contenu (classes + ressources) est dans un seul fichier :

```
data/formations.json
```

C'est un fichier texte au format JSON. Vous pouvez l'ouvrir avec **VS Code**, **Notepad++**, ou même le Bloc-notes.

## 2. Structure d'une classe (exemple simplifié)

```json
{
  "id": "tmelec",
  "short": "Terminale MELEC",
  "full": "Terminale Bac Pro - Métiers de l'Électricité...",
  "niveau": "terminale",
  "filiere": "electrique",
  "effectif": 24,
  "annee": "Terminale",
  "couleur": "#f59e0b",
  "description": "Automatismes, domotique, énergie...",
  "resources": {
    "maths": {
      "cours": [ ... ],
      "exercices": [ ... ],
      "fiches": [ ... ],
      "qcm": [ ... ],
      "tp": [ ... ]
    },
    "sciences": {
      "cours": [ ... ],
      ...
    }
  }
}
```

### Champs obligatoires
- `id` : identifiant unique (minuscules, sans espace)
- `short` : nom court affiché sur les cartes
- `full` : nom complet dans la modale
- `niveau` : `3eme | cap | seconde | premiere | terminale | postbac | bts`
- `filiere` : `maintenance | chaudronnerie | modelisation | electrique | mecanique | bts`
- `couleur` : code hexadécimal (ex: `#10b981`)

## 3. Ajouter une nouvelle ressource

Dans le tableau approprié (`cours`, `exercices`, `fiches`, `qcm` ou `tp`) :

```json
{
  "id": 9999,
  "titre": "Titre clair de la ressource",
  "type": "Cours",
  "desc": "Description courte visible par l'élève",
  "url": "https://lien-vers-le-pdf-ou-la-page.html",
  "date": "28/05/2026"
}
```

**Astuce** : Pour les vrais fichiers PDF, mettez le lien Google Drive / OneDrive / serveur lycée dans `url`.

## 4. Ajouter une toute nouvelle classe

Copiez-collez une classe existante, changez tous les champs, et ajoutez-la dans le tableau principal.

## 5. Mode Enseignant dans l'application (recommandé)

L'application possède un **Mode Enseignant** (bientôt activable via un raccourci ou bouton caché).

Fonctionnalités :
- Ajouter / modifier / supprimer des ressources **en direct**
- Exporter le fichier `formations.json` mis à jour
- Importer un fichier JSON (sauvegarde précédente)

Jusqu'à ce que le mode complet soit activé, vous pouvez :
1. Modifier `data/formations.json`
2. Relancer l'application (`npm start`)

## 6. Mettre à jour les ressources transversales

Les ressources transversales (haut de l'écran) sont encore codées en dur dans `index.html` (section "Ressources transversales").

Pour les modifier rapidement :
- Cherchez dans `index.html` le texte "Trigonométrie appliquée aux métiers"
- Remplacez les titres, descriptions et dates

(À terme, ces ressources seront aussi dans le JSON.)

## 7. Bonnes pratiques

- Toujours faire une copie de `data/formations.json` avant de gros changements
- Utiliser des IDs numériques uniques et croissants
- Respecter les formats de date `JJ/MM/AAAA`
- Tester après chaque modification importante (`npm start`)
- Garder des URLs valides (ou `#` si pas encore disponible)

## 8. Contacter le développeur

Pour des évolutions complexes (nouveau type de ressource, statistiques, etc.) :
**boubacar.kande@ac-creteil.fr**

---

**Merci pour votre engagement auprès des élèves.**  
Ce système existe pour vous faire gagner du temps et centraliser tout en un seul endroit.
