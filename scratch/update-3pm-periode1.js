const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSequences = [
  {
    "id": "seq_3pm_p1_1",
    "title": "Séquence : Nombres décimaux, fractions, relatifs",
    "items": [
      {
        "id": "3p_s1_cours",
        "titre": "Cours - Décimaux, fractions, relatifs",
        "type": "Cours",
        "desc": "Rappels sur les décimaux, opérations sur les fractions et relatifs.",
        "url": "ressources/3pm/nombres-decimaux-fractions-relatifs/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_s1_exercices",
        "titre": "TD - Décimaux, fractions, relatifs",
        "type": "Exercices",
        "desc": "8 exercices pratiques et problèmes appliqués.",
        "url": "ressources/3pm/nombres-decimaux-fractions-relatifs/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p1_2",
    "title": "Séquence : Divisibilité et fractions irréductibles",
    "items": [
      {
        "id": "3p_s2_cours",
        "titre": "Cours - Divisibilité et Nombres Premiers",
        "type": "Cours",
        "desc": "Critères de divisibilité, division euclidienne, nombres premiers.",
        "url": "ressources/3pm/divisibilite-nombres-premiers/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_s2_exercices",
        "titre": "TD - Divisibilité et Nombres Premiers",
        "type": "Exercices",
        "desc": "8 exercices pratiques et problèmes appliqués (logistique, chantier).",
        "url": "ressources/3pm/divisibilite-nombres-premiers/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p1_3",
    "title": "Séquence : Repérage",
    "items": [
      {
        "id": "3p_s3_cours",
        "titre": "Cours - Repérage (Axe, Plan, Espace)",
        "type": "Cours",
        "desc": "Repérage sur un axe (abscisse), dans le plan et dans l'espace.",
        "url": "ressources/3pm/reperage/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_s3_exercices",
        "titre": "TD - Repérage",
        "type": "Exercices",
        "desc": "8 exercices de placement de points et lecture de coordonnées.",
        "url": "ressources/3pm/reperage/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  }
];

let updated = false;

data.forEach(formation => {
    if (formation.id === '3pm') {
        if (!formation.resources) formation.resources = {};
        if (!formation.resources.maths) formation.resources.maths = [];
        
        // Remove old occurrences to prevent duplicates
        formation.resources.maths = formation.resources.maths.filter(seq => 
            !seq.id.startsWith("seq_3pm_p1_")
        );
        
        // Add at the top
        formation.resources.maths.unshift(...newSequences);
        updated = true;
    }
});

if (updated) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    console.log("Mise à jour réussie de la classe 3PM dans formations.json !");
} else {
    console.log("Classe 3pm non trouvée ou erreur.");
}
