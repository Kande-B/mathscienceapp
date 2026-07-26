const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSequences = [
  {
    "id": "seq_seconde_1",
    "title": "Séquence : Pourcentages et Proportions",
    "items": [
      {
        "id": "s1_cours",
        "titre": "Cours - Pourcentages et Proportions",
        "type": "Cours",
        "desc": "Proportions, pourcentages, évolutions et coefficients multiplicateurs.",
        "url": "ressources/seconde/pourcentages-proportions/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "s1_exercices",
        "titre": "Exercices - Pourcentages et Proportions",
        "type": "Exercices",
        "desc": "Calcul de remises, marges, évolutions des prix (8 exercices).",
        "url": "ressources/seconde/pourcentages-proportions/exercices.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_seconde_2",
    "title": "Séquence : Statistique à une variable",
    "items": [
      {
        "id": "s2_cours",
        "titre": "Cours - Statistique à une variable",
        "type": "Cours",
        "desc": "Indicateurs, diagrammes, moyennes et fréquences.",
        "url": "ressources/seconde/statistique-une-variable/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "s2_exercices",
        "titre": "Exercices - Statistique à une variable",
        "type": "Exercices",
        "desc": "Analyse de données de production, contrôle qualité (8 exercices).",
        "url": "ressources/seconde/statistique-une-variable/exercices.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_seconde_3",
    "title": "Séquence : Équations du 1er degré",
    "items": [
      {
        "id": "s3_cours",
        "titre": "Cours - Équations du 1er degré",
        "type": "Cours",
        "desc": "Résolution algébrique d'équations du premier degré.",
        "url": "ressources/seconde/equations-premier-degre/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "s3_exercices",
        "titre": "Exercices - Équations du 1er degré",
        "type": "Exercices",
        "desc": "Modélisation de problèmes, facturation, coûts (8 exercices).",
        "url": "ressources/seconde/equations-premier-degre/exercices.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  }
];

let updatedCount = 0;

data.forEach(formation => {
    if (formation.niveau === 'seconde' && formation.resources && formation.resources.maths) {
        // Supprimer si elles existent déjà pour éviter les doublons
        formation.resources.maths = formation.resources.maths.filter(seq => 
            seq.id !== "seq_seconde_1" && seq.id !== "seq_seconde_2" && seq.id !== "seq_seconde_3"
        );
        
        // Ajouter en tête
        formation.resources.maths.unshift(...newSequences);
        updatedCount++;
    }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Mise à jour réussie de ${updatedCount} classes de seconde dans formations.json !`);
