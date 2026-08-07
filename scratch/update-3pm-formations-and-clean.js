const fs = require('fs');
const path = require('path');

// 1. Charger formations.json
const formationsPath = path.join(__dirname, '../data/formations.json');
const formationsData = JSON.parse(fs.readFileSync(formationsPath, 'utf8'));

// 2. Trouver l'entrée 3pm
const item3pm = formationsData.find(f => f.id === '3pm');

if (!item3pm) {
  console.error("Entrée 3pm non trouvée dans formations.json");
  process.exit(1);
}

// 3. Définir les 16 séquences réorganisées et classées par période
const dateToday = "07/08/2026";

const sequences3PMMaths = [
  // Période 1
  {
    id: "seq_3pm_p1_1",
    title: "Séquence 1 : Statistiques à 1 variable",
    folder: "statistiques-1-variable",
    periode: "Période 1"
  },
  {
    id: "seq_3pm_p1_2",
    title: "Séquence 2 : Divisibilité & Nombres Premiers",
    folder: "divisibilite-nombres-premiers",
    periode: "Période 1"
  },
  {
    id: "seq_3pm_p1_3",
    title: "Séquence 3 : Fractions & Opérations Rationnelles",
    folder: "operations-nombres-rationnels",
    periode: "Période 1"
  },
  {
    id: "seq_3pm_p1_4",
    title: "Séquence 4 : Repérage dans le Plan et l'Espace",
    folder: "reperage",
    periode: "Période 1"
  },

  // Période 2
  {
    id: "seq_3pm_p2_1",
    title: "Séquence 5 : Puissances de 10 & Écriture Scientifique",
    folder: "puissances",
    periode: "Période 2"
  },
  {
    id: "seq_3pm_p2_2",
    title: "Séquence 6 : Calcul Littéral & Expressions",
    folder: "calcul-litteral",
    periode: "Période 2"
  },
  {
    id: "seq_3pm_p2_3",
    title: "Séquence 7 : Équations du 1er Degré",
    folder: "equations",
    periode: "Période 2"
  },

  // Période 3
  {
    id: "seq_3pm_p3_1",
    title: "Séquence 8 : Proportionnalité, Pourcentages & Ratios",
    folder: "proportionnalite",
    periode: "Période 3"
  },
  {
    id: "seq_3pm_p3_2",
    title: "Séquence 9 : Théorème de Pythagore & Réciproque",
    folder: "pythagore",
    periode: "Période 3"
  },
  {
    id: "seq_3pm_p3_3",
    title: "Séquence 10 : Théorème de Thalès & Réciproque",
    folder: "thales",
    periode: "Période 3"
  },

  // Période 4
  {
    id: "seq_3pm_p4_1",
    title: "Séquence 11 : Fonctions Affines & Linéaires",
    folder: "fonctions-affines",
    periode: "Période 4"
  },
  {
    id: "seq_3pm_p4_2",
    title: "Séquence 12 : Trigonométrie dans le Triangle Rectangle",
    folder: "trigonometrie",
    periode: "Période 4"
  },

  // Période 5
  {
    id: "seq_3pm_p5_1",
    title: "Séquence 13 : Agrandissement, Réduction & Transformations",
    folder: "agrandissement-reduction",
    periode: "Période 5"
  },
  {
    id: "seq_3pm_p5_2",
    title: "Séquence 14 : Aires, Volumes & Conversions d'Unités",
    folder: "aires-volumes-conversions",
    periode: "Période 5"
  },
  {
    id: "seq_3pm_p5_3",
    title: "Séquence 15 : Probabilités & Événements",
    folder: "probabilites",
    periode: "Période 5"
  },
  {
    id: "seq_3pm_p5_4",
    title: "Séquence 16 : Algorithmique & Programmation Scratch",
    folder: "algorithmique",
    periode: "Période 5"
  }
];

// Reconstruire item3pm.resources.maths
const formattedMathsResources = sequences3PMMaths.map(seq => {
  const basePath = `ressources/3pm/${seq.folder}`;
  return {
    id: seq.id,
    title: seq.title,
    periode: seq.periode,
    items: [
      {
        id: `${seq.id}_auto`,
        titre: `Automatismes - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "Automatismes",
        desc: "Rituel 5-10 min (10 flashcards 3D + 10 défis à saisie autonome sur 20 pts).",
        url: `${basePath}/automatismes.html`,
        date: dateToday,
        category: "automatismes"
      },
      {
        id: `${seq.id}_act`,
        titre: `Activités - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "Activités",
        desc: "Scénarios d'investigation professionnelle (BTP, Tertiaire, Logistique) et compétences Cycle 4.",
        url: `${basePath}/activites.html`,
        date: dateToday,
        category: "activites"
      },
      {
        id: `${seq.id}_cours`,
        titre: `Cours - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "Cours",
        desc: "Définitions, théorèmes officiels de l'Éducation Nationale et exemples pas à pas.",
        url: `${basePath}/cours.html`,
        date: dateToday,
        category: "cours"
      },
      {
        id: `${seq.id}_td`,
        titre: `TD - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "Exercices",
        desc: "Fiche A4 imprimable (10 exercices ciblant les 6 compétences Cycle 4) avec corrigés rédigés.",
        url: `${basePath}/td.html`,
        date: dateToday,
        category: "exercices"
      },
      {
        id: `${seq.id}_tp`,
        titre: `TP - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "TP Informatique",
        desc: "Travaux Pratiques sur tableur (LibreOffice Calc), GeoGebra ou Scratch 3.0.",
        url: `${basePath}/tp.html`,
        date: dateToday,
        category: "tp"
      },
      {
        id: `${seq.id}_brevet`,
        titre: `Brevet - ${seq.title.replace(/^Séquence \d+ : /, '')}`,
        type: "Vers le Brevet",
        desc: "Annales DNB PRO (Diplôme National du Brevet Serie Pro) sur 20 pts avec barème et corrigés.",
        url: `${basePath}/brevet.html`,
        date: dateToday,
        category: "brevet"
      }
    ]
  };
});

item3pm.resources.maths = formattedMathsResources;

// Écrire les changements dans data/formations.json
fs.writeFileSync(formationsPath, JSON.stringify(formationsData, null, 2), 'utf8');
console.log("SUCCESS: data/formations.json mis à jour avec les 16 séquences réorganisées pour 3PM Maths.");

// 4. Supprimer les dossiers obsolètes/en trop dans ressources/3pm
const obsoleteFolders = [
  'calcul-litteral-equations',
  'fraction-pgcd',
  'gestion-unites',
  'gometrie-plane-et-aires',
  'gomtrie-plane-et-aires',
  'nombres-decimaux-fractions-relatifs',
  'proportionnalite-avancee'
];

const res3pmPath = path.join(__dirname, '../ressources/3pm');

obsoleteFolders.forEach(folder => {
  const target = path.join(res3pmPath, folder);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`DELETED OBSOLETE FOLDER: ressources/3pm/${folder}`);
  }
});
