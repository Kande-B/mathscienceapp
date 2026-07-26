const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const capSequences = [
  {
    "id": "seq_cap_p1_1",
    "title": "Séquence : Proportionnalité",
    "items": [
      {
        "id": "cap_s1_cours",
        "titre": "Cours - Proportionnalité",
        "type": "Cours",
        "desc": "Coefficient, tableau de proportionnalité, produit en croix.",
        "url": "ressources/cap/proportionnalite/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "cap_s1_exercices",
        "titre": "TD - Proportionnalité",
        "type": "Exercices",
        "desc": "8 exercices pratiques (recettes, devises, vitesse, chantier).",
        "url": "ressources/cap/proportionnalite/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_cap_p1_2",
    "title": "Séquence : Pourcentages simples",
    "items": [
      {
        "id": "cap_s2_cours",
        "titre": "Cours - Pourcentages simples",
        "type": "Cours",
        "desc": "Appliquer un pourcentage, calculer une remise ou une majoration.",
        "url": "ressources/cap/pourcentages-simples/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "cap_s2_exercices",
        "titre": "TD - Pourcentages",
        "type": "Exercices",
        "desc": "8 exercices pratiques (élections, soldes, TVA).",
        "url": "ressources/cap/pourcentages-simples/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  }
];

const premiereSequences = [
  {
    "id": "seq_pre_p1_1",
    "title": "Séquence : Fonctions du second degré",
    "items": [
      {
        "id": "pre_s1_cours",
        "titre": "Cours - Fonctions du second degré",
        "type": "Cours",
        "desc": "Représentation graphique (parabole), axe de symétrie et sommet.",
        "url": "ressources/premiere/fonctions-second-degre/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "pre_s1_exercices",
        "titre": "TD - Fonctions du 2nd degré",
        "type": "Exercices",
        "desc": "8 exercices (allure de la parabole, calculs de sommet, optimisation).",
        "url": "ressources/premiere/fonctions-second-degre/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_pre_p1_2",
    "title": "Séquence : Équations du second degré",
    "items": [
      {
        "id": "pre_s2_cours",
        "titre": "Cours - Résolution graphique d'équations",
        "type": "Cours",
        "desc": "Résolution de f(x)=c, racines, et modélisation de trajectoire.",
        "url": "ressources/premiere/equations-second-degre/cours.html",
        "date": "25/07/2026",
        "category": "cours"
      },
      {
        "id": "pre_s2_exercices",
        "titre": "TD - Résolution d'équations",
        "type": "Exercices",
        "desc": "8 exercices (lecture graphique, gestion des coûts, balistique).",
        "url": "ressources/premiere/equations-second-degre/td.html",
        "date": "25/07/2026",
        "category": "exercices"
      }
    ]
  }
];

let updatedCap = 0;
let updatedPremiere = 0;

data.forEach(formation => {
    // CAP classes
    if (formation.niveau === 'cap' || formation.id.includes('cap')) {
        if (!formation.resources) formation.resources = {};
        if (!formation.resources.maths) formation.resources.maths = [];
        
        // Remove old occurrences
        formation.resources.maths = formation.resources.maths.filter(seq => 
            !seq.id.startsWith("seq_cap_p1_")
        );
        
        // Prepend
        formation.resources.maths.unshift(...capSequences);
        updatedCap++;
    }
    
    // Premiere classes
    if (formation.niveau === 'premiere' || formation.id.match(/^1[a-z]+/)) {
        if (!formation.resources) formation.resources = {};
        if (!formation.resources.maths) formation.resources.maths = [];
        
        // Remove old occurrences
        formation.resources.maths = formation.resources.maths.filter(seq => 
            !seq.id.startsWith("seq_pre_p1_")
        );
        
        // Prepend
        formation.resources.maths.unshift(...premiereSequences);
        updatedPremiere++;
    }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Mise à jour réussie : ${updatedCap} classes CAP et ${updatedPremiere} classes Premiere.`);
