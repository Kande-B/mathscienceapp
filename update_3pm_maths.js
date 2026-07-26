const fs = require('fs');

const path = 'data/formations.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const newMaths = [
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
  },
  {
    "id": "seq_3pm_p2_1",
    "title": "Séquence : Statistiques à une variable",
    "items": [
      {
        "id": "3p_p2s1_cours",
        "titre": "Cours - Statistiques à une variable",
        "type": "Cours",
        "desc": "Vocabulaire statistique, tableaux, graphiques et calculs de moyennes.",
        "url": "ressources/3pm/statistiques-1-variable/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p2s1_td",
        "titre": "TD - Statistiques à une variable",
        "type": "Exercices",
        "desc": "8 exercices : analyse de graphiques, calculs d'effectifs, fréquences et moyennes.",
        "url": "ressources/3pm/statistiques-1-variable/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p2_2",
    "title": "Séquence : Aires, volumes, conversions",
    "items": [
      {
        "id": "3p_p2s2_cours",
        "titre": "Cours - Aires, volumes, conversions",
        "type": "Cours",
        "desc": "Conversions d'unités, formules d'aires (2D) et de volumes (3D).",
        "url": "ressources/3pm/aires-volumes-conversions/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p2s2_td",
        "titre": "TD - Aires, volumes, conversions",
        "type": "Exercices",
        "desc": "8 exercices sur les tableaux de conversion et le calcul d'aires/volumes.",
        "url": "ressources/3pm/aires-volumes-conversions/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p3_1",
    "title": "Séquence : Calcul littéral et équations",
    "items": [
      {
        "id": "3p_p3s1_cours",
        "titre": "Cours - Calcul littéral et équations",
        "type": "Cours",
        "desc": "Développer, réduire, identités remarquables et équations du premier degré.",
        "url": "ressources/3pm/calcul-litteral-equations/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p3s1_td",
        "titre": "TD - Calcul littéral et équations",
        "type": "Exercices",
        "desc": "8 exercices pour maîtriser le calcul littéral et la résolution d'équations.",
        "url": "ressources/3pm/calcul-litteral-equations/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p3_2",
    "title": "Séquence : Théorème de Pythagore",
    "items": [
      {
        "id": "3p_p3s2_cours",
        "titre": "Cours - Théorème de Pythagore",
        "type": "Cours",
        "desc": "Le théorème de Pythagore et sa réciproque dans le triangle rectangle.",
        "url": "ressources/3pm/pythagore/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p3s2_td",
        "titre": "TD - Théorème de Pythagore",
        "type": "Exercices",
        "desc": "8 exercices pour calculer une longueur ou vérifier un angle droit.",
        "url": "ressources/3pm/pythagore/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p3_3",
    "title": "Séquence : Trigonométrie",
    "items": [
      {
        "id": "3p_p3s3_cours",
        "titre": "Cours - Trigonométrie",
        "type": "Cours",
        "desc": "Cosinus, Sinus, Tangente (SOH CAH TOA) et calculs dans le triangle rectangle.",
        "url": "ressources/3pm/trigonometrie/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p3s3_td",
        "titre": "TD - Trigonométrie",
        "type": "Exercices",
        "desc": "8 exercices pour calculer des longueurs et des angles avec SOH CAH TOA.",
        "url": "ressources/3pm/trigonometrie/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p4_1",
    "title": "Séquence : Proportionnalité avancée",
    "items": [
      {
        "id": "3p_p4s1_cours",
        "titre": "Cours - Proportionnalité avancée",
        "type": "Cours",
        "desc": "Quatrième proportionnelle, pourcentages, échelles et vitesse moyenne.",
        "url": "ressources/3pm/proportionnalite-avancee/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p4s1_td",
        "titre": "TD - Proportionnalité avancée",
        "type": "Exercices",
        "desc": "8 exercices concrets sur les pourcentages, les vitesses et les échelles.",
        "url": "ressources/3pm/proportionnalite-avancee/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p4_2",
    "title": "Séquence : Fonctions affines",
    "items": [
      {
        "id": "3p_p4s2_cours",
        "titre": "Cours - Fonctions affines",
        "type": "Cours",
        "desc": "Notion de fonction, fonctions linéaires et affines, lectures graphiques.",
        "url": "ressources/3pm/fonctions-affines/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p4s2_td",
        "titre": "TD - Fonctions affines",
        "type": "Exercices",
        "desc": "8 exercices de calcul d'images, antécédents et modélisation de situations.",
        "url": "ressources/3pm/fonctions-affines/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p4_3",
    "title": "Séquence : Théorème de Thalès",
    "items": [
      {
        "id": "3p_p4s3_cours",
        "titre": "Cours - Théorème de Thalès",
        "type": "Cours",
        "desc": "Configuration de Thalès, égalité des rapports et réciproque.",
        "url": "ressources/3pm/thales/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p4s3_td",
        "titre": "TD - Théorème de Thalès",
        "type": "Exercices",
        "desc": "8 exercices avec produit en croix et vérification de parallélisme.",
        "url": "ressources/3pm/thales/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p5_1",
    "title": "Séquence : Probabilités",
    "items": [
      {
        "id": "3p_p5s1_cours",
        "titre": "Cours - Probabilités",
        "type": "Cours",
        "desc": "Expériences aléatoires, issues, événements et probabilités simples.",
        "url": "ressources/3pm/probabilites/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p5s1_td",
        "titre": "TD - Probabilités",
        "type": "Exercices",
        "desc": "8 exercices classiques de calculs de probabilités (dés, urnes, cartes).",
        "url": "ressources/3pm/probabilites/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p5_2",
    "title": "Séquence : Agrandissement et réduction",
    "items": [
      {
        "id": "3p_p5s2_cours",
        "titre": "Cours - Agrandissement et réduction",
        "type": "Cours",
        "desc": "Rapport k, effet sur les longueurs, les aires (k²) et les volumes (k³).",
        "url": "ressources/3pm/agrandissement-reduction/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p5s2_td",
        "titre": "TD - Agrandissement et réduction",
        "type": "Exercices",
        "desc": "8 exercices sur le calcul du rapport k et son application sur aires et volumes.",
        "url": "ressources/3pm/agrandissement-reduction/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_p5_3",
    "title": "Séquence : Algorithmique (Scratch)",
    "items": [
      {
        "id": "3p_p5s3_cours",
        "titre": "Cours - Algorithmique",
        "type": "Cours",
        "desc": "Variables, boucles, instructions conditionnelles et programmation Scratch.",
        "url": "ressources/3pm/algorithmique/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_p5s3_td",
        "titre": "TD - Algorithmique",
        "type": "Exercices",
        "desc": "8 exercices pour comprendre, analyser et compléter des scripts.",
        "url": "ressources/3pm/algorithmique/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  },
  {
    "id": "seq_3pm_methodo",
    "title": "Séquence : Préparation Brevet (DNB Pro)",
    "items": [
      {
        "id": "3p_brevet_cours",
        "titre": "Méthodologie - DNB Pro",
        "type": "Cours",
        "desc": "Conseils, format de l'épreuve, attentes des correcteurs, et grands thèmes à réviser pour le Brevet.",
        "url": "ressources/3pm/types-brevet/cours.html",
        "date": "26/07/2026",
        "category": "cours"
      },
      {
        "id": "3p_brevet_td",
        "titre": "Sujet Blanc - DNB Pro",
        "type": "Exercices",
        "desc": "Sujet d'entraînement type Brevet pour valider ses acquis.",
        "url": "ressources/3pm/types-brevet/td.html",
        "date": "26/07/2026",
        "category": "exercices"
      }
    ]
  }
];

const index3pm = data.findIndex(f => f.id === '3pm');
if (index3pm !== -1) {
    data[index3pm].resources.maths = newMaths;
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
    console.log("Successfully updated formations.json for 3pm maths sequences.");
} else {
    console.log("Could not find '3pm' formation in formations.json.");
}
